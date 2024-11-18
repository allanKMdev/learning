

# core/urls.py
# from django.urls import path
# from .views import (
#     QuicksaleListCreate, QuicksaleDetail,
#     InventoryListCreate, InventoryDetail,
#     CustomerListCreate, CustomerDetail,
#     SaleHistoryListCreate, SaleHistoryDetail, views
# )


# from rest_framework_simplejwt.views import (
#     TokenRefreshView,
# )

# urlpatterns = [
#     path('quicksale/', QuicksaleListCreate.as_view(), name='quicksale-list-create'),
#     path('quicksale/<int:pk>/', QuicksaleDetail.as_view(), name='quicksale-detail'),
#     path('inventory/', InventoryListCreate.as_view(), name='inventory-list-create'),
#     path('inventory/<int:pk>/', InventoryDetail.as_view(), name='inventory-detail'),
#     path('customers/', CustomerListCreate.as_view(), name='customer-list-create'),
#     path('customers/<int:pk>/', CustomerDetail.as_view(), name='customer-detail'),
#     path('salehistory/', SaleHistoryListCreate.as_view(), name='salehistory-list-create'),
#     path('salehistory/<int:pk>/', SaleHistoryDetail.as_view(), name='salehistory-detail'),
   
   
#     path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#     path('register/', views.RegisterView.as_view(), name='auth_register'),
#     path('test/', views.testEndPoint, name='test'),
#     path('', views.getRoutes),

# ]



from django.urls import path
from . import views  # Import the views module to access all views by name
from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainPairView, register






# Define the URL patterns under /api/
urlpatterns = [
    # Quick Sale endpoints
    path('api/quicksale/', views.QuicksaleListCreate.as_view(), name='quicksale-list-create'),
    path('api/quicksale/<int:pk>/', views.QuicksaleDetail.as_view(), name='quicksale-detail'),
    
    # Inventory Item endpoints
    path('api/inventory/', views.InventoryListCreate.as_view(), name='inventory-list-create'),
    path('api/inventory/<int:pk>/', views.InventoryDetail.as_view(), name='inventory-detail'),
    
    # Customer endpoints
    path('api/customers/', views.CustomerListCreate.as_view(), name='customer-list-create'),
    path('api/customers/<int:pk>/', views.CustomerDetail.as_view(), name='customer-detail'),
    
    # Sale History endpoints
    path('api/salehistory/', views.SaleHistoryListCreate.as_view(), name='salehistory-list-create'),
    path('api/salehistory/<int:pk>/', views.SaleHistoryDetail.as_view(), name='salehistory-detail'),

    # JWT authentication endpoints
    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # User registration endpoint
    # path('api/register/', views.RegisterView.as_view(), name='auth_register'),

    # Test and routes endpoints
    path('api/test/', views.testEndPoint, name='test'),
    path('api/', views.getRoutes, name='get-routes'),
    
    
    
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', register, name='register'),
]