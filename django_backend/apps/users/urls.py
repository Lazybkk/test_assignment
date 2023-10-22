from django.urls import path

from . import views

urlpatterns = [
    path("", views.get_users, name='get_users'),
    path("<uuid:user_id>/", views.get_user_by_id, name='get_users'),
]
