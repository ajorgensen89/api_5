# from rest_framework.views import APIView
from rest_framework import permissions, generics
from api_5.permissions import OwnerOrReadOnly
# from rest_framework.response import Response
# from django.http import Http404

from .models import Blurbs
from .serializers import BlurbsSerializer

# Views and information for blurbs models.
# """ """ comments have not been created due to them presenting themselves
# onto the webpages.


class BlurbsView(generics.ListCreateAPIView):

    # Nice form rendered for better user experience.
    serializer_class = BlurbsSerializer

    # Import permissions from Rest Framework.
    # NO creating blurb, if not logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # Create queryset to hold all Blurbs model ojbects for generics
    # manipulation.
    queryset = Blurbs.objects.all()

    # Create new object using Rest Framework Generics 'perform_create'.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Assists with the retrieving, updating and deleting data
# from the Blurbs model.


class BlurbsInfo(generics.RetrieveUpdateDestroyAPIView):

    # Creates a form.
    serializer_class = BlurbsSerializer

    # Custom permission used.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Blurbs.objects.all()
