# from rest_framework.views import APIView
from rest_framework import permissions, generics
from api_5.permissions import OwnerOrReadOnly
# from rest_framework.response import Response
# from django.http import Http404

from .models import Comments
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

    # Create new object using Rest Framework Generics 'perform_create'.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Retrieves, Updates and Deletes data from the Comments model.


class CommentsInfo(generics.RetrieveUpdateDestroyAPIView):

    # Nice form rendered.
    serializer_class = CommentSerializer

    # Import permissions from Rest Framework.
    # NO creating comment, if not logged in.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Comments.objects.all()
