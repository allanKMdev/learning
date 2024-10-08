"""
URL configuration for pos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path

# # urlpatterns = [
# #     path('admin/', admin.site.urls),
# # ]

# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from .views import RegisterView, CustomTokenObtainView
# urlpatterns = [
#     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
# path('api/register/', RegisterView.as_view(), name='register'),
#     path('api/login/', CustomTokenObtainView.as_view(), name='login'),

# ]


# your_project/urls.py

from django.contrib import admin
from django.urls import path, include  # Include is necessary for including app URLs
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from pos_api.views import RegisterView, CustomTokenObtainView  # Ensure these views exist in views.py

urlpatterns = [
    # Uncomment if you want to use Django's admin interface
    path('admin/', admin.site.urls),

    # JWT token paths
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Standard token obtain
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Token refresh endpoint

    # Custom views for user registration and login
    path('api/register/', RegisterView.as_view(), name='register'),  # User registration
    path('api/login/', CustomTokenObtainView.as_view(), name='login'),  # Custom login view

    # Include the URLs from your app (pos_api)
    path('api/', include('pos_api.urls')),  # This includes all your app-specific URLs
]













