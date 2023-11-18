from django.db import IntegrityError
from rest_framework import serializers
from .models import Follower

# Follower Serializer credited and created with Code Institute Django
# Rest Framework Coursework and adapted to suit this
# project.


class FollowerSerializer(serializers.ModelSerializer):
    """
    Serializer for the Follower model
    Create method handles the unique constraint on 'owner' and 'followed'
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    followed_name = serializers.ReadOnlyField(source='followed.username')

    # Users will be able to track who they are following and if they
    # are being followed.
    # Example, they could follow 2 other users profiles. There could
    # be 5 user follwing them.

    class Meta:

        # 'id' field created when using 'model.Model' in Follower model.
        # Additional fields from FollowerSerializer.
        model = Follower
        fields = [
            'id', 'owner', 'created_at', 'followed', 'followed_name'
        ]

    # Same Error handling in create method as votes serializer.
    # If they are already following someone. It raises and errors.
    # Eventually follow and unfollow with be avaliable
    # for better user experience.

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'You have already followed this one..'
            })
