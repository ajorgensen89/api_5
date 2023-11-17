from django.urls import path
from votes import views

urlpatterns = [
    path('votes/', views.VotesList.as_view()),
    path('votes/<int:pk>', views.VotesInformation.as_view()),
]
