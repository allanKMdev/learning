# # # pos_api/serializers.py
# # from django.contrib.auth.models import User
# # from rest_framework import serializers
# # from .models import Product, Sale, LoyaltyProgram
# # from django.contrib.auth.hashers import make_password

# # class ProductSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Product
# #         fields = '__all__'

# # class SaleSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Sale
# #         fields = '__all__'

# # class LoyaltyProgramSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = LoyaltyProgram
# #         fields = '__all__'


# # class UserSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = User
# #         fields = ['id', 'username', 'email', 'password']  # Adjust fields as needed
# #         extra_kwargs = {
# #             'password': {'write_only': True}  # Hide password field from responses
# #         }

# #     def create(self, validated_data):
# #         # Hash the user's password before saving
# #         validated_data['password'] = make_password(validated_data['password'])
# #         return super(UserSerializer, self).create(validated_data)

# # pos_api/serializers.py
# from rest_framework import serializers
# from django.contrib.auth.models import User
# from .models import Product, Sale, LoyaltyProgram, Customer, Order, OrderItem, Payment

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User(**validated_data)
#         user.set_password(validated_data['password'])
#         user.save()
#         return user

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'

# class SaleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Sale
#         fields = '__all__'

# class LoyaltyProgramSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = LoyaltyProgram
#         fields = '__all__'

# class CustomerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Customer
#         fields = '__all__'

# class OrderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Order
#         fields = '__all__'

# class OrderItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderItem
#         fields = '__all__'

# class PaymentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Payment
#         fields = '__all__'


from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Sale, LoyaltyProgram, Customer, Order, OrderItem, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'

class LoyaltyProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoyaltyProgram
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
