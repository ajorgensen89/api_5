from .models import ReviewOtherUserProfiles
from api_5.permissions import OwnerOrReadOnly
from rest_framework import generics, permissions
from .serializers import ReviewOtherUserProfilesSerializer
from .serializers import ReviewInfoSerializer
from django_filters.rest_framework import DjangoFilterBackend


class ReviewView(generics.ListCreateAPIView):

    # Nice form rendered for better user experience.
    serializer_class = ReviewOtherUserProfilesSerializer

    # Import permissions from Rest Framework.
    # NO creating blurb, if not logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ReviewOtherUserProfiles.objects.all()
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = ['owner', 'profile']

    # Create new object using Rest Framework Generics 'perform_create'.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ReviewInfo(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a review. Update or delete if the user owns it.
    """
    # Creates a form.
    serializer_class = ReviewInfoSerializer

    # Custom permission used.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = ReviewOtherUserProfiles.objects.all()
