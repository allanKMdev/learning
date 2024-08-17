from django.shortcuts import render


# Create your views here.

def index(request): 
    blogs = [
    {'title':'Luminar','content':'new browser','author':'allan', 'date' : '2024.08.15'}
        
        
        
    ]
    
context = {'blogs': blogs}
    return render (request, 'index.html', context),

def about{request}:
    return render (request, 'about.html'),

def contact{request}:
    return render (request,'contact.html'),

