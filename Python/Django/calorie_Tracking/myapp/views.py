


# Create your views here.
from django.shortcuts import render, redirect
# from  import library
# from .models import food


def index(request):
    
    return render(request, 'index.html')
def about(request):
    return render(request, 'about.html')

def library(request):
    
    
    return render(request, 'library.html' )

def food(request):
    
    return render(request, 'food.html')