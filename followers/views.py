from rest_framework import generics, permissions
from api_5.permissions import OwnerOrReadOnly
from .models import Follower
from .serializers import FollowerSerializer

# """ """ comments have been removed due to them presenting themselves
# onto the webpages.


class FollowerList(generics.ListCreateAPIView):

    # Import permissions from Rest Framework.
    # Can not follow user unless logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # Create queryset to hold all Follwer model ojbects for generics
    # manipulation.
    queryset = Follower.objects.all()

    # Nice form rendered.
    serializer_class = FollowerSerializer

    # Create new object using Rest Framework Generics 'perform_create'.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Retrieve and Destory from generics is used for
# follow (create/retrieve)
# and unfollow (delete/destroy) users.


class FollowerDetail(generics.RetrieveDestroyAPIView):

    # Custom permissions apply as they can not follow themselves.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to hold all ojbects for class stated
    # generics manipulation.
    queryset = Follower.objects.all()

    # Creates a form for better user experience.
    serializer_class = FollowerSerializer
