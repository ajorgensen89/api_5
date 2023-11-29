from .models import Contact
from .serializers import ContactSerializer
from rest_framework import generics, permissions
from api_5.permissions import OwnerOrReadOnly


class ContactView(generics.ListCreateAPIView):
    """
    View contacts if logged in and create contact.
    """
    # Use custom permissions class to check if user or not.
    permission_classes = [OwnerOrReadOnly]
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ContactInfo(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, edit or delete contact by id from model.
    """
    permission_classes = [permissions.IsAdminUser]
    # Serialize all content in Contact model.
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
