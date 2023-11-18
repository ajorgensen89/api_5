from rest_framework import serializers
from .models import Blurbs

from votes.models import Votes


class BlurbsSerializer(serializers.ModelSerializer):
    # Read only option.
    owner = serializers.ReadOnlyField(source='owner.username')

    # For editing ability.
    is_owner = serializers.SerializerMethodField()

    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')

    # To track votes.
    # Gets value by calling a method on serializer class as a read only field.
    votes_id = serializers.SerializerMethodField()
    votes_count = serializers.ReadOnlyField()

    comments_count = serializers.ReadOnlyField()

    # Image validation from Rest Framework. validate_fieldname (image).
    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        # Return orignal value passed into function.
        return value

    # Use GET on 'is_owner' as the field name.
    def get_is_owner(self, obj):
        # Check user owns an object.
        request = self.context['request']
        # Save and return user profile.
        return request.user == obj.owner

    def get_votes_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:

            # Instance returned, if user has not voted for a blurb already.
            vote = Votes.objects.filter(

                # blurb object fro Votes model
                owner=user, blurb=obj
            ).first()

            # Display for each profile.
            return vote.id if vote else None
        return None

    class Meta:
        model = Blurbs

        # 'id' field created when using 'model.Model' in Blurbs model.
        # Additional fields from BlurbsSerializer.
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'title',
            'category', 'content', 'image', 'is_owner', 'profile_id',
            'profile_image', 'image_filter', 'votes_id', 'votes_count',
            'comments_count',
        ]
