from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework import status

# Create views.
# ProfileList lists all profiles, handled by Django Signals.
# Serializers created using Rest Framework.


class ProfileRecord(APIView):

    def get(self, request):
        profiles = Profile.objects.all()
        # many=True to get mulitple profiles.
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)


class ProfileInfo(APIView):
    serializer_class = ProfileSerializer
    # pk = Primary Key

    def get_object(self, pk):
        try:
            # Retrieve profile using primary key and return it.
            # Otherwise form 404 error for invalid id.
            profile = Profile.objects.get(pk=pk)
            return profile
        except Profile.DoesNotExist:
            raise Http404

    # To retrieve data using id.
    def get(self, request, pk):
        profile = self.get_object(pk)
        # Only get single profile.
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    # To edit data.
    def put(self, request, pk):
        profile = self.get_object(pk)
        serializer = ProfileSerializer(profile, data=request.data)
        # Check above serializer is requested,
        # If True and valid, save and return Response.
        # Otherwise form 400 client error.
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            # Imported status from Rest Framework.
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
