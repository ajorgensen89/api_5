from .models import ReviewOtherUserProfiles
from rest_framework import serializers
from django.contrib.humanize.templatetags.humanize import naturaltime


class ReviewOtherUserProfilesSerializer(serializers.ModelSerializer):
    """
    Review Other User Profiles model serializer.
    """
    owner = serializers.ReadOnlyField(source="owner.username")
    # Access profile by id and get their image url.
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    # Used to keep order and set date and time when created or edited.
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    # Used in checking the owner of a profile.
    is_owner = serializers.SerializerMethodField()

    # Use GET on 'is_owner' as the field name.
    def get_is_owner(self, obj):
        # Check user owns an object.
        request = self.context['request']
        # Save and return user reviews if matching login user.
        return request.user == obj.owner

    # Sets better format for viewing date stamps on browser view for user
    # That could be in minutes, hours or even days.
    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    # Sets better format for viewing date stamps on browser view for user.
    # That could be in minutes, hours or even days.
    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    # Meta fields from modal and serializer.
    class Meta:
        model = ReviewOtherUserProfiles
        fields = [
            'id', 'owner', 'content', 'profile', 'profile_id', 'profile_image',
            'created_at', 'updated_at', 'rating', 'is_owner',
        ]


class ReviewInfoSerializer(ReviewOtherUserProfilesSerializer):
    """
    Serializer for Review post.
    """
    post = serializers.ReadOnlyField(source="post.id")
