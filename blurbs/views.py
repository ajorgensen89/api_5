from rest_framework.views import APIView
from rest_framework import status, permissions
# from api_5.permissions import OwnerOrReadOnly
from rest_framework.response import Response
from .models import Blurbs
from .serializers import BlurbsSerializer

# Views and information for blurbs models.


class BlurbsView(APIView):
    # Nice form rendered.
    serializer_class = BlurbsSerializer
    # Import permissions from Rest Framework.
    # NO creating blurb, if not logged in.
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

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


# class BlurbsInfo(APIView):
#     # permission_classes = [IsOwnerOrReadOnly]. Creates a form.
#     serializer_class = BlurbsSerializer

#     # get posts

#     def get_object(self, pk):
#         try:
#             blurb = Blurbs.objects.get(pk=pk)
#             self.check_object_permissions(self.request, blurb)
#             return blurb
#         except blurb.DoesNotExist:
#             raise Http404

#     def get(self, request, pk):
#         blurb = self.get_object(pk)
#         serializer = BlurbsSerializer(
#             blurb, context={'request': request}
#         )
#         return Response(serializer.data)

#     # update posts

#     def put(self, request, pk):
#         blurb = self.get_object(pk)
#         serializer = BlurbsSerializer(
#             blurb, data=request.data, context={'request': request}
#         )
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(
#             serializer.errors, status=status.HTTP_400_BAD_REQUEST
#         )

#     # delete post

#     def delete(self, request, pk):
#         blurb = self.get_object(pk)
#         blurb.delete()
#         return Response(
#             status=status.HTTP_204_NO_CONTENT
#         )
