from django.shortcuts import render, HttpResponse

from .models import *


# Create your views here.

def homepage(request):
    works = Works.objects.all()
    return render(request, "mainpage/index.html", {'works': works,})
