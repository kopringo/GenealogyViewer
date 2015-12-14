#-*- coding: utf-8 -*-

#django
from django.conf.urls import patterns, include, url
from django.views.generic import RedirectView
from views import person_list, person_view, family_list, branch_list, test, home

urlpatterns = patterns('core',
                       
                       
    # strona glowna
    
    
    
    url(r'^person/list$',                 person_list,  name='person_list'),
    url(r'^person/(?P<handle>.*)/$',      person_view,  name='person_view'),
    
    url(r'^family/list$',                      family_list,  name='family_list'),
    
    url(r'^branch/list$',                      branch_list, name='branch_list'),
    
    url(r'^test$',                             test),
    
    # mechanizm przelaczania wersji jezykowej
    #url(r'^lang/(?P<id>[plen]+)',   'views.lang',   name='lang'),
    
    url(r'^$', home, name='home'),
)
