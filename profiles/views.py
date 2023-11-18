from rest_framework import generics

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
    queryset = Profile.objects.all()

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
    queryset = Profile.objects.all()
