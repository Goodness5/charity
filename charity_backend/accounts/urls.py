from django.urls import path
from .views import RegisterUserAPIView, CustomObtainAuthToken

urlpatterns = [
    path('signup/', RegisterUserAPIView.as_view(), name='signup'),
    path('login/', CustomObtainAuthToken.as_view(), name='login'),
]
