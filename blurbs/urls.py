from django.urls import path
from blurbs import views

urlpatterns = [
    path('blurbs/', views.BlurbsView.as_view()),
]
