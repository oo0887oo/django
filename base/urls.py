from django.urls import path
from . import views

urlpatterns = [
     path('lobby/', views.lobby, name='lobby'),
    path('room/', views.room),
    path('get_token/', views.getToken),
    path('', views.homepage, name='homepage'),
    path('contact/', views.contact, name='contact'),
    path('common_links/', views.common_links, name='common_links'), 

    path('create_member/', views.createMember),
    path('get_member/', views.getMember),
    path('delete_member/', views.deleteMember),
]