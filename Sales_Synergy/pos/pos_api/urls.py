# pos_api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),
    path('sales/', views.create_sale),
    path('loyalty/', views.get_loyalty_points),
]
