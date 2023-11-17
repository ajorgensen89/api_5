from django.db import IntegrityError
from rest_framework import serializers
from votes.models import Votes


class VotesSerializer(serializers.ModelSerializer):
    """
    Serializer for the Like model
    Create handles the constraint on 'owner' and 'blurb'
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Votes
        
        # Id automatically created when using models.Models in models.py.
        fields = ['id', 'created_at', 'owner', 'blurb']

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })
