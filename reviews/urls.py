from django.urls import path
from reviews import views

urlpatterns = [
    path('reviews/', views.ReviewView.as_view()),
    path('reviews/<int:pk>/', views.ReviewInfo.as_view()),
]
