# # pos_api/urls.py

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('products/', views.get_products),
#     path('sales/', views.create_sale),
#     path('loyalty/', views.get_loyalty_points),
# ]


# pos_api/views.py
# from rest_framework import generics, status
# from rest_framework.response import Response
# from rest_framework.permissions import AllowAny
# from rest_framework.decorators import api_view
# from django.contrib.auth.models import User
# from django.shortcuts import get_object_or_404
# from rest_framework_simplejwt.tokens import RefreshToken
# from .models import Product, Sale, LoyaltyProgram, Customer, Order, OrderItem, Payment
# from .serializers import (
#     UserSerializer, ProductSerializer, SaleSerializer, 
#     LoyaltyProgramSerializer, CustomerSerializer, 
#     OrderSerializer, OrderItemSerializer, PaymentSerializer
# )

# # User Registration
# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     permission_classes = (AllowAny,)
#     serializer_class = UserSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         return Response({
#             'user': UserSerializer(user).data
#         }, status=status.HTTP_201_CREATED)

# # Token management (login and logout are handled by Simple JWT)

# # Product Views
# class ProductListCreateView(generics.ListCreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# # Customer Views
# class CustomerListCreateView(generics.ListCreateAPIView):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer

# class CustomerDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer

# # Order Views
# class OrderListCreateView(generics.ListCreateAPIView):
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer

# class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer

# # Order Item Views
# class OrderItemListCreateView(generics.ListCreateAPIView):
#     queryset = OrderItem.objects.all()
#     serializer_class = OrderItemSerializer

# class OrderItemDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = OrderItem.objects.all()
#     serializer_class = OrderItemSerializer

# # Payment Views
# class PaymentListCreateView(generics.ListCreateAPIView):
#     queryset = Payment.objects.all()
#     serializer_class = PaymentSerializer

# class PaymentDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Payment.objects.all()
#     serializer_class = PaymentSerializer

# @api_view(['GET'])
# def get_products(request):
#     products = Product.objects.all()
#     serializer = ProductSerializer(products, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def get_loyalty_points(request):
#     if request.user.is_authenticated:
#         loyalty = get_object_or_404(LoyaltyProgram, user=request.user)
#         serializer = LoyaltyProgramSerializer(loyalty)
#         return Response(serializer.data)
#     else:
#         return Response({"error": "User must be authenticated to view loyalty points."}, status=status.HTTP_401_UNAUTHORIZED)


# # # pos_api/urls.py
# # from django.urls import path
# # from . import views
# # from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# # urlpatterns = [
# #     # User Registration
# #     path('register/', views.RegisterView.as_view(), name='register'),

# #     # Token-based Authentication
# #     path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
# #     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

# #     # Product URLs
# #     path('products/', views.ProductListCreateView.as_view(), name='product-list-create'),
# #     path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),

# #     # Customer URLs
# #     path('customers/', views.CustomerListCreateView.as_view(), name='customer-list-create'),
# #     path('customers/<int:pk>/', views.CustomerDetailView.as_view(), name='customer-detail'),

# #     # Order URLs
# #     path('orders/', views.OrderListCreateView.as_view(), name='order-list-create'),
# #     path('orders/<int:pk>/', views.OrderDetailView.as_view(), name='order-detail'),

# #     # Order Item URLs
# #     path('order-items/', views.OrderItemListCreateView.as_view(), name='order-item-list-create'),
# #     path('order-items/<int:pk>/', views.OrderItemDetailView.as_view(), name='order-item-detail'),

# #     # Payment URLs
# #     path('payments/', views.PaymentListCreateView.as_view(), name='payment-list-create'),
# #     path('payments/<int:pk>/', views.PaymentDetailView.as_view(), name='payment-detail'),

# #     # Additional Endpoints
# #     path('loyalty-points/', views.get_loyalty_points, name='get_loyalty_points'),
# # ]


from django.urls import path
from .views import (
    RegisterView,
    CustomTokenObtainView,
    ProductListCreateView,
    ProductDetailView,
    CustomerListCreateView,
    CustomerDetailView,
    OrderListCreateView,
    OrderDetailView,
    OrderItemListCreateView,
    OrderItemDetailView,
    PaymentListCreateView,
    PaymentDetailView,
    get_products,
    get_loyalty_points
)

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', CustomTokenObtainView.as_view(), name='login'),
    path('api/products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('api/products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('api/customers/', CustomerListCreateView.as_view(), name='customer-list-create'),
    path('api/customers/<int:pk>/', CustomerDetailView.as_view(), name='customer-detail'),
    path('api/orders/', OrderListCreateView.as_view(), name='order-list-create'),
    path('api/orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    path('api/order-items/', OrderItemListCreateView.as_view(), name='order-item-list-create'),
    path('api/order-items/<int:pk>/', OrderItemDetailView.as_view(), name='order-item-detail'),
    path('api/payments/', PaymentListCreateView.as_view(), name='payment-list-create'),
    path('api/payments/<int:pk>/', PaymentDetailView.as_view(), name='payment-detail'),
    path('api/get-products/', get_products, name='get-products'),
    path('api/loyalty-points/', get_loyalty_points, name='get-loyalty-points'),
]
