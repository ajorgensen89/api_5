from rest_framework.views import APIView
from rest_framework import status, permissions
from api_5.permissions import OwnerOrReadOnly
from rest_framework.response import Response
from django.http import Http404

from .models import Blurbs
from .serializers import BlurbsSerializer

# Views and information for blurbs models.


class BlurbsView(APIView):

    # Nice form rendered.
    serializer_class = BlurbsSerializer

    # Import permissions from Rest Framework.
    # NO creating blurb, if not logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request):

        # Get model 'Blurb' and save in blurb.
        blurb = Blurbs.objects.all()
        serializer = BlurbsSerializer(
            blurb, many=True, context={'request': request}
        )

        # Return serialized data in Response
        return Response(serializer.data)

    def post(self, request):
        serializer = BlurbsSerializer(
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


class BlurbsInfo(APIView):

    # Creates a form.
    serializer_class = BlurbsSerializer

    # Custom permission used.
    permission_classes = [OwnerOrReadOnly]

    # Get blurb objecst by primary key (pk).
    # Raise error if the blurb does not exist.

    def get_object(self, pk):
        try:
            blurb = Blurbs.objects.get(pk=pk)

            # Check user that is editing to allow permission.
            self.check_object_permissions(self.request, blurb)
            return blurb

        # Raise error imported from Django if DoesNotExist.
        except Blurbs.DoesNotExist:
            raise Http404

    # Retrieve blurb by id. Primary Key = 'pk' to get object.

    def get(self, request, pk):

        # Handle blurb if no existing error.
        blurb = self.get_object(pk)

        # If gets object, apply serializer.
        serializer = BlurbsSerializer(

            # Pass request to context object.
            blurb, context={'request': request}
        )

        # Return serialized data in Response.
        return Response(serializer.data)

    # Update blurb with editting.

    def put(self, request, pk):

        # Handle blurb if no existing error.
        blurb = self.get_object(pk)
        serializer = BlurbsSerializer(

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

    # Delete blurb.
    # Using Rest Framework delete()

    def delete(self, request, pk):
        # Check if blurb exists
        blurb = self.get_object(pk)
        # Delete or rasie No Content code.
        blurb.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )
