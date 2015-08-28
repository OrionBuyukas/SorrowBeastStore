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


#todo remove .html from links

urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^store_data.html$', views.store, name='store_data'),
    url(r'^item_details.html/(?P<id>[0-9]+)/$', views.item_details, name='item_details'),
    url(r'^photo_loader.html$', views.photo_loader, name='photo_loader'),
    url(r'^cart.html$', views.cart_init, name='cart'),
    url(r'^addtocart.html', views.add_to_cart, name='add_to_cart'),
    url(r'^removefromcart.html$', views.remove_from_cart, name='remove_from_cart'),
    url(r'^viewcart.html$', views.view_cart, name='viewcart'),
    url(r'^checkauth.html$', views.check_user_ajax, name='check auth'),
    # url(r'^create_user/$', views.create_user, name='create user'),
    url(r'^add_address/$', views.add_address, name='add address'),
    url(r'^addresses/$', views.show_addresses, name='get addresses'),
    url(r'^login_post/$', views.login_view, name='login'),




)
if settings.DEBUG:
    urlpatterns += patterns(
        'django.contrib.staticfiles.views',
        url(r'^(?:index.html)?$', 'serve', kwargs={'path': 'html/index.html'}), #rename index.html to main.html to keep browsers from looking for index
        url(r'^(?:login.html)?$', 'serve', kwargs={'path': 'html/login.html'}),
        url(r'(?P<path>(?:js|css|img)/.*)$', 'serve'),
        url(r'(?P<path>(?:uploads)/.*)$', 'serve'),



        #
        # url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        #     'document_root': settings.MEDIA_ROOT,
        # }),
        # url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
        #     'document_root': settings.STATIC_ROOT,
        # }),
)

