from django.db import models

# Create your models here.
class Producto(models.Model):
    descripcion = models.CharField(max_length=100)
    precio  = models.FloatField()