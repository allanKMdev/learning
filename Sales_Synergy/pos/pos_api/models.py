# # pos_api/models.py

# from django.db import models
# from django.contrib.auth.models import User

# class Product(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField(null=True, blank=True)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     stock = models.IntegerField()
#     image = models.ImageField(upload_to='product_images/', null=True, blank=True)

#     def __str__(self):
#         return self.name

# class Sale(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.IntegerField()
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     customer = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
#     sale_date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f'Sale of {self.quantity} {self.product.name}'

# class LoyaltyProgram(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     points = models.IntegerField(default=0)

#     def __str__(self):
#         return f'Loyalty Program for {self.user.username} with {self.points} points'

# # pos_api/models.py
# from django.db import models
# from django.contrib.auth.models import User

# class Product(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField(null=True, blank=True)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     stock = models.IntegerField()
#     image = models.ImageField(upload_to='product_images/', null=True, blank=True)

#     def __str__(self):
#         return self.name

# class Sale(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.IntegerField()
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     customer = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
#     sale_date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f'Sale of {self.quantity} {self.product.name}'

# class LoyaltyProgram(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     points = models.IntegerField(default=0)

#     def __str__(self):
#         return f'Loyalty Program for {self.user.username} with {self.points} points'

# class Customer(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     phone = models.CharField(max_length=15, blank=True)

#     def __str__(self):
#         return self.user.username

# class Order(models.Model):
#     customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
#     order_date = models.DateTimeField(auto_now_add=True)
#     total_amount = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f'Order #{self.id} by {self.customer.user.username}'

# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.IntegerField()
#     price_per_item = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f'Item {self.product.name} in Order #{self.order.id}'

# class Payment(models.Model):
#     order = models.OneToOneField(Order, on_delete=models.CASCADE)
#     payment_date = models.DateTimeField(auto_now_add=True)
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     payment_method = models.CharField(max_length=50)

#     def __str__(self):
#         return f'Payment for Order #{self.order.id}'


from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)

    def __str__(self):
        return self.name

class Sale(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    customer = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    sale_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Sale of {self.quantity} {self.product.name}'

class LoyaltyProgram(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)

    def __str__(self):
        return f'Loyalty Program for {self.user.username} with {self.points} points'

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.user.username

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Order {self.id} by {self.customer.user.username}'

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f'{self.quantity} of {self.product.name} in Order {self.order.id}'

class Payment(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Payment for Order {self.order.id}'
