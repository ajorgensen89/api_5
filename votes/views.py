from rest_framework import generics, permissions
from api_5.permissions import OwnerOrReadOnly
from votes.models import Votes
from votes.serializers import VotesSerializer


# Votes has been created using generics uplike the other Applications.
# Instead of get, post, put and delete.
# Rest Framework generics use
# LIST, CREATE, RETRIEVE, UPDATE and DESTROY.


class VotesList(generics.ListCreateAPIView):
    """
    Can Vote for favourite blurb posted. List and Create.
    """
    # Permissions used from Rest Framework.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = VotesSerializer
    queryset = Votes.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        print("here 2")


class VotesInformation(generics.RetrieveDestroyAPIView):
    """
    Access vote and delete it. Retrieve and Destroy.
    """
    # Use of custom permissions. Only user can unvote for their vote.
    permission_classes = [OwnerOrReadOnly]
    serializer_class = VotesSerializer
    queryset = Votes.objects.all()
