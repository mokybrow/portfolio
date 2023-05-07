from django.db import models
from django.urls import reverse


# Create your models here.

class Works(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(blank=True)
    photo = models.ImageField(upload_to="photos/%Y/%m")
    is_published = models.BooleanField(default=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name='URL')

    def get_absolute_url(self):
        return reverse('works', kwargs={'work_slug': self.slug})


class Posts(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(blank=True)
    photo = models.ImageField(upload_to="posts/%Y/%m")
    is_published = models.BooleanField(default=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name='URL')

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_slug': self.slug})


def __str__(self):
    return self.title
