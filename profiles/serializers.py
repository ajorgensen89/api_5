from rest_framework import serializers
from .models import Profile
from followers.models import Follower

# Deserialise data for validation to save model instance in database
# for POST/ HTTP request.
# Data is serialised back in GET/ HTTP request.
# JSON model serialiser to handle data conversions.


class ProfileSerializer(serializers.ModelSerializer):
    # For viewing only. From Rest Framework
    owner = serializers.ReadOnlyField(source='owner.username')

    # Included in field array. For editing.
    is_owner = serializers.SerializerMethodField()

    # Gets value by calling a method on serializer class as a read only field.
    following_id = serializers.SerializerMethodField()

    # Counts as included in Response. Added to fields array too.
    blurbs_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    # Use GET on 'is_owner' as the field name.

    def get_is_owner(self, obj):
        # Check user owns an object.
        # Reuse 'context={'request': request}' for  accessing input.
        request = self.context['request']
        # Save and return user profile.
        return request.user == obj.owner

    # Method checks if user if autheticated

    def get_following_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:

            # Instance returned, if user is not following profile already.
            following = Follower.objects.filter(
                owner=user, followed=obj.owner
            ).first()

            # Display following for each profile.
            return following.id if following else None
        return None

    class Meta:
        model = Profile

        # 'id' field created when using 'model.Model' in Profile model.
        # Additional fields from ProfileSerializer and ProfileView.
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'content', 'image', 'is_owner', 'following_id',
            'blurbs_count', 'following_count', 'followers_count'
        ]
