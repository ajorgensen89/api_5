from django.contrib.auth.models import User
from .models import Blurbs
from rest_framework import status
from rest_framework.test import APITestCase


# Tests run with Credit to Code Institute Run down of building tests in
# Django Rest Framework Coursework Project.
# Adapted for use in this API Project.

class BlurbsViewTests(APITestCase):
    def setUp(self):

        # User from Django.
        User.objects.create_user(username='ava', password='pass')

    def test_can_list_blurbs(self):
        ava = User.objects.get(username='ava')
        Blurbs.objects.create(owner=ava, title='a title')
        response = self.client.get('/blurbs/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))

    def test_logged_in_user_can_create_blurbs(self):
        self.client.login(username='ava', password='pass')

        # Pertaining to 'def post()'
        response = self.client.post('/blurbs/', {'title': 'a title'})
        count = Blurbs.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # do not need to log in or fetch anything from the database like above.
    # Pertaining to 'def post()'
    # 200_OK for passing test.
    def test_user_not_logged_in_cant_create_blurbs(self):
        response = self.client.post('/blurbs/', {'title': 'a title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class BlurbsInfoViewTests(APITestCase):
    def setUp(self):
        ava = User.objects.create_user(username='ava', password='pass')
        david = User.objects.create_user(username='david', password='pass')
        Blurbs.objects.create(
            owner=ava, title='a title', content='ava content',
            category='Spring'
        )
        Blurbs.objects.create(
            owner=david, title='another title', content='davids content',
            category='Spring'
        )

    def test_can_retrieve_blurbs_using_valid_id(self):
        response = self.client.get('/blurbs/1/')
        self.assertEqual(response.data['title'], 'a title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_blurbs_using_invalid_id(self):
        response = self.client.get('/blurbs/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
    # Pass 201_CREATED code to make is fail.
    # pass 404_NOT_FOUND code to make it pass.

    def test_user_can_update_own_blurbs(self):
        self.client.login(username='ava', password='pass')
        response = self.client.put('/blurbs/1/', {'title': 'a new title'})
        blurb = Blurbs.objects.filter(pk=1).first()
        self.assertEqual(blurb.title, 'a new title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # make it tail by adding a passible HTTP_200_OK.
    def test_user_can_not_update_another_users_blurbs(self):
        # force login
        self.client.login(username='ava', password='pass')
        response = self.client.put('/blurbs/2/', {'title': 'a new title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

