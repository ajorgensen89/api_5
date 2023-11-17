from rest_framework.views import APIView
from rest_framework import status, permissions
from api_5.permissions import OwnerOrReadOnly
from rest_framework.response import Response
from django.http import Http404

from .models import Comments
from .serializers import CommentSerializer

# Views and information for Comments models.


class CommentsView(APIView):

    # Nice form rendered.
    serializer_class = CommentSerializer

    # Import permissions from Rest Framework.
    # NO creating comment, if not logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request):

        # Get model 'Comments' and save in comment.
        comments = Comments.objects.all()
        serializer = CommentSerializer(
            comments, many=True, context={'request': request}
        )

        # Return serialized data in Response
        return Response(serializer.data)

    def post(self, request):
        serializer = CommentSerializer(
            data=request.data, context={'request': request}
        )
        # Check above serializer is requested,
        # If True and valid, save and return Response with 201 status.
        # Otherwise form 404 error.
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # Imported status from Rest Framework.
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentsInfo(APIView):

    # Creates a form.
    serializer_class = CommentSerializer

    # Custom permission used.
    permission_classes = [OwnerOrReadOnly]

    # Get comment objects by primary key (pk).
    # Raise error if the comment does not exist.

    def get_object(self, pk):
        try:
            comment = Comments.objects.get(pk=pk)

            # Check user that is editing to allow permission.
            self.check_object_permissions(self.request, comment)
            return comment

        # Raise error imported from Django if DoesNotExist.
        except Comments.DoesNotExist:
            raise Http404

    # Retrieve comment by id. Primary Key = 'pk' to get object.

    def get(self, request, pk):

        # Handle comment if no existing error.
        comment = self.get_object(pk)

        # If gets object, apply serializer.
        serializer = CommentSerializer(

            # Pass request to context object.
            comment, context={'request': request}
        )

        # Return serialized data in Response.
        return Response(serializer.data)

    # Update comment with editting.

    def put(self, request, pk):

        # Handle comment if no existing error.
        blurb = self.get_object(pk)
        serializer = CommentSerializer(

            # Pass request to context object.
            blurb, data=request.data, context={'request': request}
        )

        # Using Rest Framework is_valid() and .save()
        # Check if valid, save and send Response.
        # Otherwise error.
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

    # Delete comment.
    # Using Rest Framework delete()

    def delete(self, request, pk):
        # Check if comment exists
        comment = self.get_object(pk)
        # Delete or rasie No Content code.
        comment.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )
