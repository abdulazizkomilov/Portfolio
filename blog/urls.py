from django.urls import path
from .views import HomeView, CoursesView

urlpatterns = [
    path('', HomeView.as_view(), name='index'),
    path('courses', CoursesView.as_view(), name='courses'),
]