from rest_framework import generics, permissions
from api_5.permissions import OwnerOrReadOnly
from votes.models import Votes
from votes.serializers import VotesSerializer

# """ """ comments have not been created due to them presenting themselves
# onto the webpages.
# Votes has been created using generics uplike the other Applications.
# Instead of get, post, put and delete.
# Rest Framework generics use
# LIST, CREATE, RETRIEVE, UPDATE and DESTROY.


class VotesList(generics.ListCreateAPIView):

    # Permissions used from Rest Framework.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = VotesSerializer

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Votes.objects.all()

    # Create new object using Rest Framework Generics 'perform_create'.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Only Retrieve and Destory from generics is needed for
# upvote (create/retrieve)
# and downvote (delete/destroy) options.


class VotesInformation(generics.RetrieveDestroyAPIView):

    # Use of custom permissions. Only user can unvote for their vote.
    permission_classes = [OwnerOrReadOnly]

    # Custom permission used.
    serializer_class = VotesSerializer

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Votes.objects.all()
