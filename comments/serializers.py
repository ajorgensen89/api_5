from rest_framework import serializers
from .models import Comments
from django.contrib.humanize.templatetags.humanize import naturaltime

# Comment Model Credited from Code Institute Django
# Rest Framework Coursework and adapted to suit this
# project.


class CommentSerializer(serializers.ModelSerializer):
    """
    Serializer for the Comment model
    Adds three extra fields when returning a list of Comment instances
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    # Set the is_owner to match the request user with the object of the user.
    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    # Sets better format for viewing date stamps on browser view for user.
    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    # Sets better format for viewing date stamps on browser view for user.
    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    class Meta:
        model = Comments
        fields = [
            'id', 'owner', 'is_owner', 'profile_id', 'profile_image',
            'blurb', 'created_at', 'updated_at', 'content'
        ]

# Inherits from above CommentSerializer.


class CommentInformationSerializer(CommentSerializer):
    """
    Serializer for the Comment model used in Information view
    Blurb is read only field. No need to set for each update.
    """
    # Set blurb to id of the User to access.
    blurb = serializers.ReadOnlyField(source='blurb.id')
