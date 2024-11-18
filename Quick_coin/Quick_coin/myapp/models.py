# myapp/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db.models.signals import post_save
from django.dispatch import receiver

# Custom User model
class User(AbstractUser):
    username = None  # Remove the default username field
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_set",
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups",
        related_query_name="custom_user"
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions_set",
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions",
        related_query_name="custom_user_permission"
    )

    def profile(self):
        profile, _ = Profile.objects.get_or_create(user=self)
        return profile

# Profile model linked to User
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)

# Signal to create or save Profile on User creation or update
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)
    else:
        instance.profile().save()

# Other models go here, as you defined them previously


# Customer model
class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    credit_limit = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    outstanding_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    def __str__(self):
        return self.name

    def update_balance(self, amount):
        self.outstanding_balance += amount
        self.save()


# Inventory model
class Inventory(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.name


# InventoryItem model for specific items within inventory
class InventoryItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


# Enum for payment status in Sales
class PaymentStatus(models.TextChoices):
    PAID = 'paid', 'Paid'
    UNPAID = 'unpaid', 'Unpaid'


# Enum for payment methods
class PaymentMethod(models.TextChoices):
    CASH = 'cash', 'Cash'
    MPESA = 'mpesa', 'M-Pesa'
    CREDIT = 'credit', 'Credit'


# Sale model for recording sales transactions
class Sale(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="sales")
    item = models.ForeignKey(InventoryItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    payment_status = models.CharField(max_length=20, choices=PaymentStatus.choices)
    payment_method = models.CharField(max_length=20, choices=PaymentMethod.choices)

    def __str__(self):
        return f"Sale of {self.item.name} to {self.customer.name} on {self.date}"


# Debt model to manage customer debts
class Debt(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="debts")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('paid', 'Paid')])

    def __str__(self):
        return f"Debt of {self.amount} for {self.customer.name}"


# Product model representing products in the catalog
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2, help_text="Weight in KG")
    quantity_in_stock = models.PositiveIntegerField()

    def __str__(self):
        return self.name


# Quick sale model for fast transactions
class Quicksale(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='quicksales')
    sale_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=10, choices=PaymentMethod.choices)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Quick Sale to {self.customer.name} on {self.sale_date}"

    def update_customer_balance(self):
        if self.payment_method == PaymentMethod.CREDIT and not self.is_paid:
            self.customer.update_balance(self.total_price)

    def calculate_total_price(self):
        self.total_price = sum(item.total_price for item in self.items.all())
        self.save()


# Item model for individual items within a quick sale
class QuicksaleItem(models.Model):
    sale = models.ForeignKey(Quicksale, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price_per_item = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, editable=False)

    def save(self, *args, **kwargs):
        # Calculate total price for the item based on quantity and price per item
        self.total_price = self.quantity * self.price_per_item
        super().save(*args, **kwargs)

        # Deduct sold quantity from product's stock
        self.product.quantity_in_stock -= self.quantity
        self.product.save()

        # Update the associated Quicksale total price
        self.sale.calculate_total_price()

    def __str__(self):
        return f"{self.quantity} of {self.product.name} in {self.sale}"


# Sale history model to track sales for each customer
class SaleHistory(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='sale_history')
    date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Sale for {self.customer.name} on {self.date}"
