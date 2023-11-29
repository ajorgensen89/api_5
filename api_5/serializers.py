from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers

# dj-rest-auth documentation provides a how-to on extending
# UserDetailSerializer
# Enables the correct link to the correct profile and image on log in.
# This will be used alot against checking the state.


class CurrentUserSerializer(UserDetailsSerializer):
    profile_id = serializers.ReadOnlyField(source='profile.id')
    profile_image = serializers.ReadOnlyField(source='profile.image.url')

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + (
            'profile_id', 'profile_image'
        )
