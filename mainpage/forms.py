from django import forms
from .models import *


class Feedback(forms.Form):
    name = forms.CharField(max_length=50, min_length=2, widget=forms.TextInput(attrs={'placeholder': 'Ваше имя'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Ваш email'}))
    message = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Сообщение'}))
