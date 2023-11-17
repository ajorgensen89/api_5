from django.urls import path
from comments import views

urlpatterns = [
    path('comments/', views.CommentsView.as_view()),

    # pk as an integer.
    path('comments/<int:pk>/', views.CommentsInfo.as_view()),
]
