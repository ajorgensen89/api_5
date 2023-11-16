# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile

# Create views


class ProfileList(APIView):
    """
    List all profiles.
    Handled by django signals.
    """
    def get(self, request):
        profiles = Profile.object.all()
        return Response(profiles)
