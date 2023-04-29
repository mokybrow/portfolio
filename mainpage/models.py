from django.db import models


# Create your models here.

class Works(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(blank=True)
    photo = models.ImageField(upload_to="photos/%Y/%m")
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title