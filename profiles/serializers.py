from rest_framework import serializers
from .models import Profile

# Deserialise data for validation to save model instance in database
# for POST/ HTTP request.
# Data is serialised back in GET/ HTTP request.
# JSON model serialiser to handle data conversions.


class ProfileSerializer(serializers.ModelSerializer):
    # For viewing only. From Rest Framework
    owner = serializers.ReadOnlyField(source='owner.username')

    # Included in field array. For editing.
    is_owner = serializers.SerializerMethodField()

    # Use GET on 'is_owner' as the field name.
    def get_is_owner(self, obj):
        # Check user owns an object.
        # Reuse 'context={'request': request}' for  accessing input.
        request = self.context['request']
        # Save and return user profile.
        return request.user == obj.owner

    class Meta:
        model = Profile
        # 'id' field created when using 'model.Model' in Profile model.
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'content', 'image', 'is_owner'
        ]
