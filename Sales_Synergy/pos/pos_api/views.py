# pos_api/views.py
# views.py
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import Product, Sale, LoyaltyProgram
# from .serializers import ProductSerializer, SaleSerializer, LoyaltyProgramSerializer

# from rest_framework import generics, status
# from rest_framework.response import Response
# from rest_framework.permissions import AllowAny
# from django.contrib.auth.models import User
# from rest_framework_simplejwt.tokens import RefreshToken
# from .serializers import UserSerializer

# # Custom User Registration View
# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     permission_classes = (AllowAny,)  # Allow anyone to register without authentication
#     serializer_class = UserSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)  # Validate input data

#         # Create user if valid
#         user = serializer.save()

#         # Create token for the user
#         refresh = RefreshToken.for_user(user)
        
#         # Return the user data along with the tokens
#         return Response({
#             'user': UserSerializer(user, context=self.get_serializer_context()).data,
#             'refresh': str(refresh),
#             'access': str(refresh.access_token),
#         }, status=status.HTTP_201_CREATED)




# @api_view(['GET'])
# def get_products(request):
#     products = Product.objects.all()
#     serializer = ProductSerializer(products, many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def create_sale(request):
#     data = request.data
#     product = Product.objects.get(id=data['product_id'])
#     customer = request.user  # Authenticated user
#     sale = Sale.objects.create(
#         product=product,
#         quantity=data['quantity'],
#         total_price=product.price * data['quantity'],
#         customer=customer
#     )
#     sale.save()
#     return Response({"message": "Sale created successfully!"})

# @api_view(['GET'])
# def get_loyalty_points(request):
#     loyalty = LoyaltyProgram.objects.get(user=request.user)
#     serializer = LoyaltyProgramSerializer(loyalty)
# #     return Response(serializer.data)



# from rest_framework import generics, status
# from rest_framework.response import Response
# from rest_framework.permissions import AllowAny
# from rest_framework.decorators import api_view
# from django.contrib.auth.models import User
# from django.shortcuts import get_object_or_404
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework_simplejwt.views import TokenObtainPairView
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

# # Custom Token Obtain View
# class CustomTokenObtainView(TokenObtainPairView):
#     # You can customize the response here if needed
#     def post(self, request, *args, **kwargs):
#         return super().post(request, *args, **kwargs)

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



from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Product, Sale, LoyaltyProgram, Customer, Order, OrderItem, Payment
from .serializers import (
    UserSerializer, ProductSerializer, SaleSerializer, 
    LoyaltyProgramSerializer, CustomerSerializer, 
    OrderSerializer, OrderItemSerializer, PaymentSerializer
)

# User Registration
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            'user': UserSerializer(user).data
        }, status=status.HTTP_201_CREATED)

# Custom Token Obtain View
class CustomTokenObtainView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

# Product Views
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Customer Views
class CustomerListCreateView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

# Order Views
class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# Order Item Views
class OrderItemListCreateView(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

# Payment Views
class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class PaymentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_loyalty_points(request):
    if request.user.is_authenticated:
        loyalty = get_object_or_404(LoyaltyProgram, user=request.user)
        serializer = LoyaltyProgramSerializer(loyalty)
        return Response(serializer.data)
    else:
        return Response({"error": "User must be authenticated to view loyalty points."}, status=status.HTTP_401_UNAUTHORIZED)
