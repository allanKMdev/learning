from django.test import TestCase

from sample_app.models import Blog

class BlogModelTestCase(TestCase):
    
    def test_blog_creation(self):
        blog =blog.objects.create(title="Test Blog",content="This is a test blog.")
        self.assertEqual(blog.title,"Test Blog")   
        self.assertEqual(blog.content,"This is a test blog")     
        
        
    