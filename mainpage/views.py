from django.shortcuts import render, HttpResponse

from .models import *


# Create your views here.

def homepage(request):
    works = Works.objects.all()
    return render(request, "mainpage/mainpage.html", {'works': works, })


def portfolio(request):
    works = Works.objects.all()
    return render(request, "mainpage/works.html", {'works': works, })


def blog(request):
    return render(request, "mainpage/blog.html")


def contacts(request):
    return render(request, "mainpage/contacts.html")

def say_hi(request):
    return render(request, "mainpage/say_hi.html")