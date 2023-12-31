from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

# Profiles Model for User to create an individual Profile.


class Profile(models.Model):
    # Cascade used to automatically organise objects and remove dead space.
    owner = models.OneToOneField(User, on_delete=models.CASCADE)

    # Used to create order in Meta classes.
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField(blank=True)
    name = models.TextField(blank=True)
    # Image gathered from and storage in Cloudinary.
    image = models.ImageField(
        upload_to='images/', default='../avatar_beedw9'
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


def create_profile(sender, instance, created, **kwargs):
    if created:
        # If True, create user profile.
        Profile.objects.create(owner=instance)


# Run make_profile method, each time and receive User model as signal.
# Using Django Signals.
post_save.connect(create_profile, sender=User)
