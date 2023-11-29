from django.db import models
from profiles.models import Profile
from django.contrib.auth.models import User


class ReviewOtherUserProfiles(models.Model):
    """
    User will be able to comment on anotehr users profile
    and leave a nice comment.
    """
    # Remove deleted items, removing the space they occupied.
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='reviews', null=True
    )
    content = models.CharField(max_length=300)
    rating = models.IntegerField()
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # Order contact by date and time decending.
    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.owner} left a review"
