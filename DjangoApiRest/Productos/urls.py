from django.urls import path

from . import views

urlpatterns = [
    path('productos/', views.ProductosView.as_view(), name='productos'),
]