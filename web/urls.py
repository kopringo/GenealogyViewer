#-*- coding: utf-8 -*-

#django
from django.conf.urls import patterns, include, url
from django.views.generic import RedirectView

urlpatterns = patterns('web',
    
    
    url(r'^$', 'views.home', name='home'),
)
