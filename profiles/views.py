# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer

# Create views.
# ProfileList lists all profiles, handled by Django Signals.


class ProfileList(APIView):

    def get(self, request):
        profiles = Profile.objects.all()
        # many=True for mulitple profiles.
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)
