from django.contrib import admin

# Register your models here.

from .models import *


class WorksAdm(admin.ModelAdmin):
    list_display = ('id', 'title', 'photo')
    list_display_links = ('id', 'title')
    search_fields = ('title', )


admin.site.register(Works, WorksAdm)
