from django.contrib.auth.models import User
from .models import Comments
from blurbs.models import Blurbs
from rest_framework import status
from rest_framework.test import APITestCase


# Tests run with Credit to Code Institute Run down of building tests in
# Django Rest Framework Coursework Project.
# Adapted for use in this API Project.


# Set up make-shift User login to use in test.


class CommentsViewTests(APITestCase):
    def setUp(self):

        # User from Django.
        User.objects.create_user(username='ava', password='pass')

    def test_can_list_comments(self):
        ava = User.objects.get(username='ava')
        blurb = Blurbs.objects.create(owner=ava, title='a title')
        Comments.objects.create(owner=ava, blurb=blurb, content="content")
        response = self.client.get('/comments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))
