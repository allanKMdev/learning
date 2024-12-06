from rest_framework import viewsets
from .models import Sale, Transaction, Customer , Product ,  ProductOption
from .serializers import SaleSerializer, TransactionSerializer, CustomerSerializer, ProductSerializer, CustomerSerializer , ProductOptionSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect






class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

    # Custom action to get sales data for a specific customer
    @action(detail=False, methods=['get'])
    def customer_sales(self, request):
        customer_id = request.query_params.get('customer_id')
        if customer_id:
            sales = Sale.objects.filter(customer__id=customer_id)
            serializer = SaleSerializer(sales, many=True)
            return Response(serializer.data)
        return Response({"error": "Customer ID not provided"}, status=400)

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    # Custom action to get transactions for a specific customer
    @action(detail=False, methods=['get'])
    def customer_transactions(self, request):
        customer_id = request.query_params.get('customer_id')
        if customer_id:
            transactions = Transaction.objects.filter(customer__id=customer_id)
            serializer = TransactionSerializer(transactions, many=True)
            return Response(serializer.data)
        return Response({"error": "Customer ID not provided"}, status=400)

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer



def user_login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CustomerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.prefetch_related('options').all()
    serializer_class = ProductSerializer

class ProductOptionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductOption.objects.all()
    serializer_class = ProductOptionSerializer
