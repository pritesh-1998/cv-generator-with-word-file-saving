from django.urls import path
from . import views
urlpatterns=[
    path('create/',views.sampleform,name="form"),
    path('download/',views.download,name="hello")
]