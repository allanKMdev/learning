
from django import users
from django.shortcuts import render, redirect
from .models import Photo, Tag
from django.contrib.auth import login, logout, authenticate
from .forms import RegistrationForm


def index(request):
    
    return render(request, 'index.html')
def about(request):
    return render(request, 'about.html')

def photo_list(request):
    photos = Photo.objects.all()
    return render(request, 'gallery/photo_list.html', {'photos': photos})

def photo_detail(request, pk):
    photo = Photo.objects.get(pk=pk)
    return render(request, 'gallery/photo_detail.html', {'photo': photo})

def photo_list_by_tag(request, slug):
    tag = Tag.objects.get(slug=slug)
    photos = Photo.objects.filter(tags=tag)
    return render(request, 'gallery/photo_list.html', {'photos': photos, 'tag': tag})



