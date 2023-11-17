from django.urls import path
from votes import views

urlpatterns = [
    path('votes/', views.LikeList.as_view()),
    # path('votes/<int:pk>', views.LikeDetail.as_view()),
]
