from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer

# Create views.
# ProfileList lists all profiles, handled by Django Signals.


class ProfileRecord(APIView):

    def get(self, request):
        profiles = Profile.objects.all()
        # many=True to get mulitple profiles.
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)


class ProfileInfo(APIView):
    # pk = Primary Key
    def get_object(self, pk):
        try:
            # Retrieve profile by primary key and return it.
            profile = Profile.objects.get(pk=pk)
            return profile
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        profile = self.get_object(pk)
        # Only get single profile.
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
