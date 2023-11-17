from django.urls import path
from profiles import views

urlpatterns = [
    path('profiles/', views.ProfileView.as_view()),
    # pk as an integer.
    path('profiles/<int:pk>/', views.ProfileInfo.as_view()),
]
