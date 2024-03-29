"""
URL configuration for portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path

from mainpage.views import homepage, portfolio, blog, contacts, hello, work_item, post
from portfolio import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage, name='home'),
    path('works/', portfolio, name='works'),
    path('blog/', blog, name='blog'),
    path('contacts/', contacts, name='contacts'),
    path('hello/', hello, name='hello'),
    path('work/<slug:work_slug>/', work_item, name='work'),
    path('blog/<slug:post_slug>/', post, name='post'),
]


urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)