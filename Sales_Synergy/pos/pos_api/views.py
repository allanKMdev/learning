# pos_api/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, Sale, LoyaltyProgram
from .serializers import ProductSerializer, SaleSerializer, LoyaltyProgramSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_sale(request):
    data = request.data
    product = Product.objects.get(id=data['product_id'])
    customer = request.user  # Authenticated user
    sale = Sale.objects.create(
        product=product,
        quantity=data['quantity'],
        total_price=product.price * data['quantity'],
        customer=customer
    )
    sale.save()
    return Response({"message": "Sale created successfully!"})

@api_view(['GET'])
def get_loyalty_points(request):
    loyalty = LoyaltyProgram.objects.get(user=request.user)
    serializer = LoyaltyProgramSerializer(loyalty)
    return Response(serializer.data)
