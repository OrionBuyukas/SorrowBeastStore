"""SorrowBeast URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, patterns, url
from django.conf import settings
from django.contrib import admin
from store import views




urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^store_data.html$', views.store, name='store_data'),
    url(r'^item_details.html$', views.item_details, name='item_details'),
    url(r'^photo_loader.html$', views.photo_loader, name='photo_loader'),
)
if settings.DEBUG:
    urlpatterns += patterns(
        'django.contrib.staticfiles.views',
        url(r'^(?:index.html)?$', 'serve', kwargs={'path': 'html/index.html'}),
        url(r'(?P<path>(?:js|css|img)/.*)$', 'serve')
    )