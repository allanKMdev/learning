# from django.db import models
# from django.contrib.auth.models import BaseUserManager, AbstractUser



# # Sale model to store sale data
# class Sale(models.Model):
#     date = models.DateTimeField(auto_now_add=True)
#     items = models.TextField()  # Store items in a text field (can be JSON or string)
#     total = models.DecimalField(max_digits=10, decimal_places=2)
#     payment_method = models.CharField(max_length=100)
#     customer = models.ForeignKey('Customer', on_delete=models.CASCADE, related_name='sales')

#     def __str__(self):
#         return f"Sale {self.id} on {self.date}"

# # Customer model
# class Customer(models.Model):
#     name = models.CharField(max_length=255)
#     email = models.EmailField()

#     def __str__(self):
#         return self.name

# # Transaction model to store customer transaction history
# class Transaction(models.Model):
#     date = models.DateTimeField(auto_now_add=True)
#     total = models.DecimalField(max_digits=10, decimal_places=2)
#     debt = models.BooleanField(default=False)  # True if there's a debt
#     customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='transactions')

#     def __str__(self):
#         return f"Transaction {self.id} on {self.date}"




# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         return self.create_user(email, password, **extra_fields)


# class User(AbstractUser):
#     email = models.EmailField(unique=True)
#     phone_number = models.CharField(max_length=15, blank=True, null=True)
#     address = models.CharField(max_length=255, blank=True, null=True)

#     objects = CustomUserManager()

#     def __str__(self):
#         return self.email







# class Category(models.Model):
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name

# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     category = models.ForeignKey(Category, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)

#     def __str__(self):
#         return self.name

        
        
        
        
        
        
        
        
        
        
# class ProductOption(models.Model):
#     product = models.ForeignKey(Product, related_name='options', on_delete=models.CASCADE)
#     weight = models.CharField(max_length=50)  # e.g., '250g', '500g', '1kg'
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     additional_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

#     def __str__(self):
#         return f"{self.product.name} - {self.weight}"
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser


# Sale Model
class Sale(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE, related_name='sales')
    total = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=100)

    def __str__(self):
        return f"Sale {self.id} on {self.date}"


class SaleItem(models.Model):
    sale = models.ForeignKey('Sale', on_delete=models.CASCADE, related_name='sale_items')
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.product.name} x {self.quantity}"


# Customer Model
class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(blank=True, null=True)  # Make email optional

    def __str__(self):
        return self.name


# Transaction Model
class Transaction(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    debt = models.BooleanField(default=False)
    debt_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='transactions')

    def __str__(self):
        return f"Transaction {self.id} on {self.date}"


# Custom User Model
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)

    objects = CustomUserManager()

    def __str__(self):
        return self.email



from django.db import models

# Category Model
class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)  # Add description field

    def __str__(self):
        return self.name


# Product Model
class Product(models.Model):  # Fix formatting by separating "class" from "Product"
    name = models.CharField(max_length=100)
    category = models.ForeignKey(
        Category, 
        related_name='products', 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True
    )
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)  # Add price field
    stock = models.PositiveIntegerField(default=0)  # Add stock field
    created_at = models.DateTimeField(auto_now_add=True)  # Add created_at field

    def __str__(self):
        return self.name


# Product Option Model
class ProductOption(models.Model):
    product = models.ForeignKey(
        Product, 
        related_name='options', 
        on_delete=models.CASCADE
    )
    weight = models.CharField(max_length=50)  # e.g., '250g', '500g', '1kg'
    price = models.DecimalField(max_digits=10, decimal_places=2)
    extra_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    def clean(self):
        if self.extra_cost < 0:
            raise ValueError("Extra cost cannot be negative.")

    def __str__(self):
        return f"{self.product.name} - {self.weight}"


    
    
# class Category(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.name






# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True, null=True)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     stock = models.PositiveIntegerField(default=0)
#     image = models.ImageField(upload_to='product_images/', blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.name

#     def reduce_stock(self, quantity):
#         """Reduce stock after a purchase."""
#         if self.stock >= quantity:
#             self.stock -= quantity
#             self.save()
#         else:
#             raise ValueError("Not enough stock to reduce")

    # def increase_stock(self, quantity):
    #     """Increase stock, useful for restocking."""
    #     self.stock += quantity
    #     self.save()
        
# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True, null=True)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     stock = models.PositiveIntegerField(default=0)
#     category = models.ForeignKey(Category, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
#     image = models.ImageField(upload_to='product_images/', blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.name
       