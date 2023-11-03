from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Producto
from .serializer import ProductoSerializer

# Create your views here.
class ProductosView(APIView):
    def get(self, request):
        dataProductos = Producto.objects.all()
        serProductos =  ProductoSerializer(dataProductos, many=True)
        return Response(serProductos.data)
        
    def post(self, request):
        serProductos = ProductoSerializer(data=request.data)
        serProductos.is_valid(raise_exception=True)
        serProductos.save()
        return Response(serProductos.data)