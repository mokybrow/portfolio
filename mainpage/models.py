from django.db import models
from django.urls import reverse


# Create your models here.

class Works(models.Model):
    title = models.CharField(max_length=80)
    title1 = models.CharField(max_length=120, blank=True)
    description = models.TextField(blank=True, max_length=750)
    description1 = models.TextField(blank=True, max_length=750)
    photo = models.ImageField(upload_to="photos/%Y/%m")
    photo1 = models.ImageField(upload_to="photos/%Y/%m", blank=True)
    is_published = models.BooleanField(default=True)
    link = models.TextField(blank=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name='URL')

    def get_absolute_url(self):
        return reverse('works', kwargs={'work_slug': self.slug})

    class Meta:
        verbose_name = 'Работы'
        verbose_name_plural = 'Работы'

class Posts(models.Model):
    title = models.CharField(max_length=120)
    title1 = models.CharField(max_length=120, blank=True)
    title2 = models.CharField(max_length=120, blank=True)
    title3 = models.CharField(max_length=120, blank=True)
    title4 = models.CharField(max_length=120, blank=True)
    description = models.TextField(blank=True, max_length=750)
    description1 = models.TextField(blank=True, max_length=750)
    description2 = models.TextField(blank=True, max_length=750)
    description3 = models.TextField(blank=True, max_length=750)
    description4 = models.TextField(blank=True, max_length=750)
    photo = models.ImageField(upload_to="posts/%Y/%m")
    photo1 = models.ImageField(upload_to="posts/%Y/%m", blank=True)
    photo2 = models.ImageField(upload_to="posts/%Y/%m", blank=True)
    photo3 = models.ImageField(upload_to="posts/%Y/%m", blank=True)
    photo4 = models.ImageField(upload_to="posts/%Y/%m", blank=True)
    is_published = models.BooleanField(default=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name='URL')

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_slug': self.slug})

    class Meta:
        verbose_name = 'Посты'
        verbose_name_plural = 'Посты'


def __str__(self):
    return self.title
