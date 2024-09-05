from django.urls import path 
from . import views 

urlpatterns = [
    path('',views.index,name ='Home'),
    path('about/',views.about,name ='About'),
    path('', views.photo_list, name='photo_list'),
    path('<int:pk>/', views.photo_detail, name='photo_detail'),
    path('tags/<slug:slug>/', views.photo_list_by_tag, name='photo_list_by_tag'),
#      path('register/', views.register, name='register'),
#     path('login/', views.login, name='login'),
#     path('logout/', views.logout, name='logout'),
    
    
]

