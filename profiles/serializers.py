from rest_framework import serializers
from .models import Profile

# Deserialise data for validation to save model instance in database
# for POST/ HTTP request.
# Data is serialised back in GET/ HTTP request.
# JSON model serialiser to handle data conversions.


class ProfileSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Profile
        # 'id' field created when using 'model.Model' in Profile model.
        fields = [
            'id', 'owner', 'created_at', 'updated_at',
            'content', 'image'
        ]
