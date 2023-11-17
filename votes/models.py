from django.db import models
from django.contrib.auth.models import User
from blurbs.models import Blurbs

# Model for users to Vote on the Blurbs posted.


class Votes(models.Model):
    # Cascade used to automatically organise objects and remove dead space.
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    # Voting can occur on each blurb posted.
    blurb = models.ForeignKey(
        Blurbs, related_name='votes', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Ensure reverse ordering.
        ordering = ['-created_at']
        unique_together = ['owner', 'blurb']

    def __str__(self):
        return f'{self.owner} {self.blurb}'
