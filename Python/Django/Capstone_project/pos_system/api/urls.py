from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, InventoryViewSet, SaleViewSet

router = DefaultRouter()
router.register('customers', CustomerViewSet)
router.register('inventory', InventoryViewSet)
router.register('sales', SaleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
