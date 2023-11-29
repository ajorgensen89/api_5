from django.urls import path
from contacts import views

urlpatterns = [
    path('contacts/', views.ContactView.as_view()),
    # Set primary key for id to an integer.
    path('contacts/<int:pk>/', views.ContactInfo.as_view()),
]
