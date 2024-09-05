# from django.shortcuts import render, redirect
# from django.contrib.auth import login, logout, authenticate
# from .forms import RegistrationForm

# # ...



from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]