from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, ProductViewSet, SaleViewSet, PaymentViewSet, CreateUserView

# Create a router and register the viewsets with it
router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'products', ProductViewSet)
router.register(r'sales', SaleViewSet)
router.register(r'payments', PaymentViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('register/', CreateUserView.as_view(), name='user-register'),  # Register new users
    path('', include(router.urls)),  # Include the ViewSet routes
]
