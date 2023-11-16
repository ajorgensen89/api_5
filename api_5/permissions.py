from rest_framework import permissions


# Connect custom permission to necessary view.

class OwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read only.
        if request.method in permissions.SAFE_METHODS:
            return True
        # Allow editing if user owns profile. 
        return obj.owner == request.user
