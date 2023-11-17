from django.urls import path
from blurbs import views

urlpatterns = [
    path('blurbs/', views.BlurbsView.as_view()),

    # pk as an integer.
    path('blurbs/<int:pk>/', views.BlurbsInfo.as_view()),
]
