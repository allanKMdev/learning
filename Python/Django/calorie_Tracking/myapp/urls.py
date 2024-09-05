from django.urls import path 
from . import views 


urlpatterns = [
    path('',views.index,name ='Home'),
    path('about/',views.about,name ='About'),
    path('library/',views.library,name ='Add'),
    path('food/',views.food,name='Food'),
    
]
