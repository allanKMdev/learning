
from myapp.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Customer,  Inventory ,InventoryItem, Sale, Debt, Product, Quicksale, QuicksaleItem, SaleHistory


# Customer serializer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'name', 'email', 'phone', 'credit_limit', 'outstanding_balance']


# Inventory serializer
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ['id', 'name', 'price', 'quantity', 'image']


# Inventory item serializer
class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = ['id', 'name', 'price', 'quantity', 'description']


# Sale serializer
class SaleSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField()  # Display customer name
    item = serializers.StringRelatedField()      # Display item name

    class Meta:
        model = Sale
        fields = ['id', 'customer', 'item', 'quantity', 'total_price', 'date', 'payment_status', 'payment_method']


# Debt serializer
class DebtSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField()  # Display customer name

    class Meta:
        model = Debt
        fields = ['id', 'customer', 'amount', 'due_date', 'status']


# Product serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'weight', 'quantity_in_stock']


# Quick sale serializer
class QuicksaleSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField()  # Display customer name
    items = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Quicksale
        fields = ['id', 'customer', 'sale_date', 'payment_method', 'total_price', 'is_paid', 'items']


# Quick sale item serializer
class QuicksaleItemSerializer(serializers.ModelSerializer):
    sale = serializers.StringRelatedField()  # Display sale reference
    product = serializers.StringRelatedField()  # Display product name

    class Meta:
        model = QuicksaleItem
        fields = ['id', 'sale', 'product', 'quantity', 'price_per_item', 'total_price']


# Sale history serializer
class SaleHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleHistory
        fields = '__all__'


# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Token serializer with custom claims
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Custom claims
        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified

        return token


# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all(), message="This email is already in use.")]
    )
    username = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all(), message="This username is already in use.")]
    )

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user
