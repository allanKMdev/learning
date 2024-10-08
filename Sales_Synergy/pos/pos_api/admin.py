# pos_api/admin.py
from django.contrib import admin
from .models import Product, Sale, LoyaltyProgram, Customer, Order, OrderItem, Payment

admin.site.register(Product)
admin.site.register(Sale)
admin.site.register(LoyaltyProgram)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Payment)
