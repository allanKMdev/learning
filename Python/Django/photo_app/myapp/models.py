# from django.db import models
# from django.urls import reverse

# class Photo(models.Model):
#     title = models.CharField(max_length=255)
#     image = models.ImageField(upload_to='photos/')
#     description = models.TextField(blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     tags = models.ManyToManyField('Tag', related_name='photos')

#     def __str__(self):
#         return self.title

#     def get_absolute_url(self):
#         return reverse('photo_detail', kwargs={'pk': self.pk})

# class Tag(models.Model):
#     name = models.CharField(max_length=50)

#     def __str__(self):
#         return self.name
    
    
    
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Add any additional fields for user profiles
    bio = models.TextField(blank=True)