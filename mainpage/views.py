from django.shortcuts import render, HttpResponse, redirect, get_object_or_404

from .forms import *
from .models import *

from django.core.mail import EmailMultiAlternatives, send_mail
from django.template.loader import render_to_string, get_template

from django.shortcuts import render, redirect

from django.http import HttpResponse, BadHeaderError


# Create your views here.

def homepage(request):
    return render(request, "mainpage/mainpage.html", {'title': "Mikhail's Portfolio", })


def portfolio(request):
    works = Works.objects.all()
    return render(request, "mainpage/works.html", {'works': works, 'title': 'Работы', })


def blog(request):
    posts = Posts.objects.all()
    return render(request, "mainpage/blog.html", {'posts': posts, 'title': 'Блог', })


def contacts(request):
    return render(request, "mainpage/contacts.html", {'title': 'Контакты', })


def hello(request):
    context = {'title': 'Привет!'}
    if request.method == 'POST':
        form = Feedback(request.POST)
        if form.is_valid():
            send_message(form.cleaned_data['name'],
                         form.cleaned_data['email'],
                         form.cleaned_data['message'])
            return redirect("/hello")
    else:
        form = Feedback()
    context['form'] = form
    return render(request, "mainpage/hello.html", context=context)


def send_message(name, email, message):
    text = get_template('mainpage/FeedbackM.html')
    html = get_template('mainpage/FeedbackM.html')
    context = {'name': name, 'email': email, 'message': message}
    subject = 'Сообщение с сайта'
    from_email = 'mokybrow@yandex.ru'
    text_content = text.render(context)
    html_content = html.render(context)

    msg = EmailMultiAlternatives(subject, text_content, from_email, ['mokybrow@yandex.ru'])
    msg.attach_alternative(html_content, "text/html")
    msg.send()


def work_item(request, work_slug):
    works = get_object_or_404(Works, slug=work_slug)
    context = {'works': works, 'title': works.title}
    return render(request, "mainpage/workItem.html", context=context)

def post(request, post_slug):
    posts = get_object_or_404(Posts, slug=post_slug)
    context = {'posts': posts, 'title': posts.title}
    return render(request, "mainpage/postItem.html", context=context)
