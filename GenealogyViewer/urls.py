
from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static

admin.autodiscover()

from apps import web

urlpatterns = [
    # Examples:
    # url(r'^$', 'GenealogyViewer.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
    url(r'^api/v1/', include('apps.api1.urls')),
    
    url(r'^', include('apps.web.urls')),
    #url(r'^', include('web.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
