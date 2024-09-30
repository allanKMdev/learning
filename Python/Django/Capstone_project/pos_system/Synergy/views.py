from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

# Importing serializers for users, customers, products, sales, and payments
from .serializers import (
    UserSerializer, 
    CustomerSerializer, 
    ProductSerializer, 
    SaleSerializer, 
    PaymentSerializer
)

# Importing models for customers, products, sales, and payments
from .models import Customer, Product, Sale, Payment


# View for user registration
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# ViewSets for handling all CRUD operations

# Customer CRUD operations
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticated]  # Optional: Restrict access based on authentication

# Product CRUD operations
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

# Sale CRUD operations
class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = [IsAuthenticated]

# Payment CRUD operations
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

