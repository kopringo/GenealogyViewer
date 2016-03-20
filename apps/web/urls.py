#-*- coding: utf-8 -*-

#django
from django.conf.urls import patterns, include, url
from django.views.generic import RedirectView

from views import person_list, person_view, family_list, branch_list, test, home, manager
from views_trees import index

urlpatterns = [
    
    url(r'^(?P<tree_slug>.+)/$', home, name='home'),
    
    url(r'^(?P<tree_slug>.+)/person/list$',                 person_list,  name='person_list'),
    url(r'^(?P<tree_slug>.+)/person/(?P<pid>.*)/$',                person_view,  name='person_view'),
    
    url(r'^(?P<tree_slug>.+)/family/list$',                      family_list,  name='family_list'),
    
    url(r'^(?P<tree_slug>.+)/branch/list$',                      branch_list, name='branch_list'),
    
    url(r'^(?P<tree_slug>.+)/test$',                             test),
    
    url(r'^(?P<tree_slug>.+)/manager$',                           manager, name='manager'),
    
    # mechanizm przelaczania wersji jezykowej
    #url(r'^lang/(?P<id>[plen]+)',   'views.lang',   name='lang'),
    
    url(r'^$', index, name='index'),
]
