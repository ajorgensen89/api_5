from django.db import models
from django.contrib.auth.models import User

# Using model from Django automatically creates a id.


class Contact(models.Model):
    """
    Contact form connects to User by owner Foreign Key.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    topic = models.CharField(max_length=100)
    content = models.TextField(max_length=300)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.owner} : {self.topic}"
