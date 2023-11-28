
from rest_framework import permissions, generics
from api_5.permissions import OwnerOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend

from .models import Comments
from .serializers import CommentInformationSerializer
from .serializers import CommentSerializer

# Using Rest Frameworks Generics for Refactoring code content.
# List and Creates information from the Comments model.
# Generice will also display the error message that needs handling.


class CommentsView(generics.ListCreateAPIView):

    # Nice form rendered.
    serializer_class = CommentSerializer

    # Import permissions from Rest Framework.
    # NO creating comment, if not logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Comments.objects.all()

    # Filter out all comments relateing to a given blurb.
    # Set these when using DjangoFilterBackend.
    filter_backends = [
        DjangoFilterBackend
    ]

    # From blurb in Comment model.
    filterset_fields = [
        'blurb',
    ]

    # Create new object using Rest Framework Generics 'perform_create'.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Retrieves, Updates and Deletes data from the Comments model.


class CommentsInfo(generics.RetrieveUpdateDestroyAPIView):

    # Nice form rendered.
    # serializer_class = CommentSerializer
    serializer_class = CommentInformationSerializer

    # Import permissions from Rest Framework.
    # NO creating comment, if not logged in.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Comments.objects.all()
