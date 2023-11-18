from rest_framework import generics, filters

# Imported to count the posts, followers, votes.
from django.db.models import Count

from api_5.permissions import OwnerOrReadOnly

from .models import Profile
from .serializers import ProfileSerializer

# Create views.
# ProfileList lists all profiles, handled by Django Signals.
# Serializers created using Rest Framework.


class ProfileView(generics.ListAPIView):

    # ListAPIView used here as creation of profiles is
    # handled by Django Signals within the Profile model.

    # Create queryset to hold all Follwer model ojbects for generics
    # manipulation.

    queryset = Profile.objects.annotate(
        # Access use '__'. Distinct set to true ensures no duplicates.
        blurbs_count=Count('owner__blurbs', distinct=True),
        followers_count=Count('owner__followed', distinct=True),
        following_count=Count('owner__following', distinct=True),
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        # DjangoFilterBackend,
    ]
    # filterset_fields = [
    #     'owner__following__followed__profile',
    #     'owner__followed__owner__profile',
    # ]
    ordering_fields = [
        'blurbs_count',
        'followers_count',
        'following_count',
        # Attatch date and time to filter by.
        'owner__following__created_at',
        'owner__followed__created_at',
    ]

    # Nice form rendered.
    serializer_class = ProfileSerializer


# """ """ comments have not been created due to them presenting themselves
# onto the webpages.

# Assists with the retrieving, updating and deleting data
# from the Profile model.


class ProfileInfo(generics.RetrieveUpdateDestroyAPIView):
    # Create form to present data.
    serializer_class = ProfileSerializer

    # Custom permission for read only or editing if user.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to access Profile objects.
    # Access use '__'. Distinct set to true ensures no duplicates.
    # Filter blurbs by amount of them.
    # Same as followers and user following the user.
    # Annotate here also for single profile.
    queryset = Profile.objects.annotate(
        blurbs_count=Count('owner__blurbs', distinct=True),
        followers_count=Count('owner__followed', distinct=True),
        following_count=Count('owner__following', distinct=True)
    ).order_by('-created_at')
