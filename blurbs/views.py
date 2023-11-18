from rest_framework import permissions, generics, filters
from api_5.permissions import OwnerOrReadOnly

# Imported to count the blurbs, followers, votes.
from django.db.models import Count

from .models import Blurbs
from .serializers import BlurbsSerializer

# Views and information for blurbs models.
# """ """ comments have not been created due to them presenting themselves
# onto the webpages.

# Added filters from Rest Framework and credited assistance
# from Code Institute API Coursework.


class BlurbsView(generics.ListCreateAPIView):

    # Nice form rendered for better user experience.
    serializer_class = BlurbsSerializer

    # Import permissions from Rest Framework.
    # NO creating blurb, if not logged in.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    queryset = Blurbs.objects.annotate(
        # By Related Name.
        votes_count=Count('votes', distinct=True),
        comments_count=Count('comments', distinct=True),
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        # filters.SearchFilter,
        # DjangoFilterBackend,
    ]
    # filterset_fields = [
    #     # user feed
    #     'owner__followed__owner__profile',
    #     # user liked posts
    #     'votes__owner__profile',
    #     # user posts
    #     'owner__profile',
    # ]
    # search_fields = [
    #     'owner__username',
    #     'title',
    # ]
    ordering_fields = [
        'votes_count',
        'comments_count',
        'votes__created_at',
    ]

    # Create queryset to hold all Blurbs model ojbects for generics
    # manipulation.
    # queryset = Blurbs.objects.all()
    
    # Create new object using Rest Framework Generics 'perform_create'.
    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)


# Assists with the retrieving, updating and deleting data
# from the Blurbs model.


class BlurbsInfo(generics.RetrieveUpdateDestroyAPIView):

    # Creates a form.
    serializer_class = BlurbsSerializer

    # Custom permission used.
    permission_classes = [OwnerOrReadOnly]

    # Create queryset to hold all ojbects for generics manipulation.
    queryset = Blurbs.objects.annotate(
        votes_count=Count('owner__votes', distinct=True),
        comments_count=Count('owner__comments', distinct=True),
    ).order_by('-created_at')
