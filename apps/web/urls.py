#-*- coding: utf-8 -*-

#django
from django.conf.urls import patterns, include, url
from django.views.generic import RedirectView
from django.contrib.auth.models import User

from views import person_list, person_view, family_list, branch_list, test, home, manager
from views_trees import index, index_import

urlpatterns = [
    
    url(r'^(?P<tree_slug>[\w-]+)/$', home, name='home'),
    
    url(r'^(?P<tree_slug>[\w-]+)/person/list$',                 person_list,  name='person_list'),
    url(r'^(?P<tree_slug>[\w-]+)/person/(?P<pid>\d+)/$',                person_view,  name='person_view'),
    
    url(r'^(?P<tree_slug>[\w-]+)/family/list$',                      family_list,  name='family_list'),
    
    url(r'^(?P<tree_slug>[\w-]+)/branch/list$',                      branch_list, name='branch_list'),
    
    url(r'^(?P<tree_slug>[\w-]+)/test$',                             test),
    
    url(r'^(?P<tree_slug>[\w-]+)/manager$',                           manager, name='manager'),
    
    url(r'^import$', index_import, name='index_import'),
    
    #url(r'^$', index, name='index'),
]
