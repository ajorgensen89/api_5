from django.db import models
from django.contrib.auth.models import User
from blurbs.models import Blurbs

# Comment Model Credited from Code Institute Django
# Rest Framework Coursework and adapted to suit this
# project.


class Comments(models.Model):
    """
    Comment model, related to User and Blurbs
    """
    # User from Django
    # Cascade used to automatically organise objects and remove dead space.
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    # Access Blurbs model for comments to pertain to.
    blurb = models.ForeignKey(Blurbs, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
