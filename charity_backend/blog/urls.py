from django.urls import path
from .views import PostList, CommentList

urlpatterns = [
    path('api/posts/', PostList.as_view(), name='post-list'),
    path('api/comments/', CommentList.as_view(), name='comment-list'),
]
