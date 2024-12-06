from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SaleViewSet, TransactionViewSet, CustomerViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = DefaultRouter()
router.register(r'salehistory', SaleViewSet, basename='salehistory')
router.register(r'transactions', TransactionViewSet, basename='transactions')
router.register(r'customers', CustomerViewSet, basename='customers')

urlpatterns = [
    path('api/', include(router.urls)),
    
     # JWT token URLs
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Your API routes
    path('api/', include(router.urls)),
]


