#-*- coding: utf-8 -*-

#django
from django.conf.urls import include, url
from django.views.generic import RedirectView
from django.contrib.auth.models import User

#from .views import person_list, person_view, family_list, branch_list, test, home, manager
#import views
from .views_trees import index, index_import
from . import views

urlpatterns = [
    
    url(r'^(?P<tree_slug>[\w-]+)/$', views.home, name='home'),
    
    url(r'^(?P<tree_slug>[\w-]+)/person/list$',                 views.person_list,  name='person_list'),
    url(r'^(?P<tree_slug>[\w-]+)/person/(?P<pid>\d+)/$',                views.person_view,  name='person_view'),
    
    url(r'^(?P<tree_slug>[\w-]+)/family/list$',                      views.family_list,  name='family_list'),
    
    url(r'^(?P<tree_slug>[\w-]+)/branch/list$',                      views.branch_list, name='branch_list'),
    
    url(r'^(?P<tree_slug>[\w-]+)/test$',                             views.test),
    
    url(r'^(?P<tree_slug>[\w-]+)/manager$',                           views.manager, name='manager'),
    
    url(r'^import$', index_import, name='index_import'),
    
    #url(r'^$', index, name='index'),
]
