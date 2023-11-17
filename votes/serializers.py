from django.db import IntegrityError
from rest_framework import serializers
from votes.models import Votes


class VotesSerializer(serializers.ModelSerializer):
    """
    Serializer for the Votes model
    Create handles the constraint on 'owner' and 'blurb'
    """
    # For viewing only. From Rest Framework
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Votes
        # Id automatically created when using models.Models in models.py.
        fields = ['id', 'created_at', 'owner', 'blurb']
        print("here")

    # Handles duplicates.
    # Make create method to return a complete object dependant on the
    # validity of the data 'validated_data'.
    def create(self, validated_data):
        try:
            # On ModelSerializer, called super() on create method.
            return super().create(validated_data)
        # Error raised using Django.
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'You have already voted for this one!'
            })
