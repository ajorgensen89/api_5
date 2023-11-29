from .models import Contact
from rest_framework import serializers
from django.contrib.humanize.templatetags.humanize import naturaltime


class ContactSerializer(serializers.ModelSerializer):
    """
    Contact model serializer
    """
    owner = serializers.ReadOnlyField(source="owner.username")
    # Access profile by id and get their image url.
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    # Used to keep order and set date and time when created or edited.
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    # Sets better format for viewing date stamps on browser view for user
    # That could be in minutes, hours or even days.
    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    # Sets better format for viewing date stamps on browser view for user.
    # That could be in minutes, hours or even days.
    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    class Meta:
        model = Contact
        fields = [
            'id', 'owner', 'topic', 'profile_id', 'profile_image',
            'created_at', 'updated_at', 'content',
        ]
