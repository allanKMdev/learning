from django.shortcuts import render
from myapp.models import User, Quicksale, InventoryItem, Customer, SaleHistory
from myapp.serializers import (
    MyTokenObtainPairSerializer,
    RegisterSerializer,
    QuicksaleSerializer,
    InventoryItemSerializer,
    CustomerSerializer,
    SaleHistorySerializer
)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, permissions, status
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password


# Signup view
@api_view(['POST'])
def register(request):
    try:
        username = request.data['username']
        password = request.data['password']
        email = request.data.get('email', '')

        # Additional validation can be added here
        validate_password(password)

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        return Response({'detail': 'User created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)

# Login view using Simple JWT
class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)



# Pagination class to standardize results pagination
class StandardResultsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


# Quick Sale Views
class QuicksaleListCreate(generics.ListCreateAPIView):
    queryset = Quicksale.objects.all()
    serializer_class = QuicksaleSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = StandardResultsPagination


class QuicksaleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quicksale.objects.all()
    serializer_class = QuicksaleSerializer
    permission_classes = [permissions.IsAuthenticated]


# Inventory Item Views
class InventoryListCreate(generics.ListCreateAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = StandardResultsPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['name', 'price']
    search_fields = ['name']
    ordering_fields = ['price', 'quantity']


class InventoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
    permission_classes = [permissions.IsAuthenticated]


# Customer Views
class CustomerListCreate(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = StandardResultsPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['name', 'email']
    search_fields = ['name', 'email']
    ordering_fields = ['name', 'credit_limit']


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [permissions.IsAuthenticated]


# Sale History Views
class SaleHistoryListCreate(generics.ListCreateAPIView):
    queryset = SaleHistory.objects.all()
    serializer_class = SaleHistorySerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = StandardResultsPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['customer', 'date']
    search_fields = ['customer__name']
    ordering_fields = ['date', 'total_amount']


class SaleHistoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SaleHistory.objects.all()
    serializer_class = SaleHistorySerializer
    permission_classes = [permissions.IsAuthenticated]


# Authentication and Registration Views
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer


# Endpoint to display available routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


# Test endpoint to demonstrate API response
@api_view(['GET', 'POST'])
@permission_classes([permissions.IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulations {request.user}, your API just responded to a GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text', '')
        data = f'Congratulations, your API just responded to a POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)

    return Response({'error': 'Bad request'}, status=status.HTTP_400_BAD_REQUEST)



# from django.shortcuts import render
# from django.http import JsonResponse
# from myapp.models import User
# from myapp.serializers import MyTokenObtainPairSerializer, RegisterSerializer

# from rest_framework import generics, permissions, status
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.pagination import PageNumberPagination
# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.filters import SearchFilter, OrderingFilter
# from rest_framework.response import Response
# from rest_framework_simplejwt.views import TokenObtainPairView

# from .models import Quicksale, InventoryItem, Customer, SaleHistory
# from .serializers import (
#     QuicksaleSerializer,
#     InventoryItemSerializer,
#     CustomerSerializer,
#     SaleHistorySerializer
# )

# # Constants for routes
# ROUTES = [
#     '/api/token/',
#     '/api/register/',
#     '/api/token/refresh/',
# ]

# class StandardResultsPagination(PageNumberPagination):
#     page_size = 10
#     page_size_query_param = 'page_size'
#     max_page_size = 100

# # Base View for pagination and filtering
# class BaseListCreateView(generics.ListCreateAPIView):
#     permission_classes = [permissions.IsAuthenticated]
#     pagination_class = StandardResultsPagination

# class QuicksaleListCreate(BaseListCreateView):
#     queryset = Quicksale.objects.all()
#     serializer_class = QuicksaleSerializer

# class QuicksaleDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Quicksale.objects.all()
#     serializer_class = QuicksaleSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class InventoryListCreate(BaseListCreateView):
#     queryset = InventoryItem.objects.all()
#     serializer_class = InventoryItemSerializer
#     filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
#     filterset_fields = ['name', 'price']
#     search_fields = ['name']
#     ordering_fields = ['price', 'quantity']

# class InventoryDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = InventoryItem.objects.all()
#     serializer_class = InventoryItemSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class CustomerListCreate(BaseListCreateView):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer
#     filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
#     filterset_fields = ['name', 'email']
#     search_fields = ['name', 'email']
#     ordering_fields = ['name', 'credit_limit']

# class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class SaleHistoryListCreate(BaseListCreateView):
#     queryset = SaleHistory.objects.all()
#     serializer_class = SaleHistorySerializer
#     filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
#     filterset_fields = ['customer', 'date']
#     search_fields = ['customer__name']
#     ordering_fields = ['date', 'total_amount']

# class SaleHistoryDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = SaleHistory.objects.all()
#     serializer_class = SaleHistorySerializer
#     permission_classes = [permissions.IsAuthenticated]

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer

# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     permission_classes = (permissions.AllowAny,)
#     serializer_class = RegisterSerializer

# @api_view(['GET'])
# def getRoutes(request):
#     return Response(ROUTES)

# @api_view(['GET', 'POST'])
# @permission_classes([permissions.IsAuthenticated])
# def testEndPoint(request):
#     if request.method == 'GET':
#         data = f"Congratulations {request.user}, your API just responded to GET request"
#         return Response({'response': data}, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         text = request.data.get('text')
#         if not text:
#             return Response({'error': 'Text parameter is missing'}, status=status.HTTP_400_BAD_REQUEST)
#         data = f'Congratulations, your API just responded to POST request with text: {text}'
#         return Response({'response': data}, status=status.HTTP_200_OK)
#     return Response({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
