from rest_framework import serializers
from .models import Blurbs


class BlurbsSerializer(serializers.ModelSerializer):
    # Read only option.
    owner = serializers.ReadOnlyField(source='owner.username')

    # For editing ability.
    is_owner = serializers.SerializerMethodField()

    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    
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

    class Meta:
        model = Blurbs
        # 'id' field created when using 'model.Model' in Profile model.
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'title',
            'category', 'content', 'image', 'is_owner', 'profile_id',
            'profile_image', 'image_filter'
        ]
