#-*- coding: utf-8 -*-

#django
from django.conf.urls import patterns, include, url
from django.views.generic import RedirectView
from django.contrib.auth.models import User

from GenealogyViewer.apps.genealogy.models import Person, Family, Event, Place, Media, PrimaryObject

from rest_framework import routers, serializers, viewsets
from rest_framework import permissions

class IsTreeOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        if not request.user.is_authenticated():
            return False

        if isinstance(obj, PrimaryObject):
            tree = obj.tree
            if tree.owners.filter(pk=request.user.id):
                return True

        
        return False

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')
class PersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Person
        fields = ('url', 'handle', 'first_name', 'last_name', 'gender_type', 'probably_alive', )
class FamilySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Family
        fields = ('url', 'handle', 'father', 'mother', )

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('url', 'event_type', 'description', 'place', )
class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place
        fields = ('url', 'title', 'lng', 'lat', )
class MediaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Media
        fields = ('url', 'path', 'mime', 'desc', )
        
#####################################################################
# ViewSets define the view behavior.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, IsTreeOwner, )
    
class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    permission_classes = (permissions.IsAuthenticated, IsTreeOwner, )
    
class FamilyViewSet(viewsets.ModelViewSet):
    queryset = Family.objects.all()
    serializer_class = PersonSerializer
    permission_classes = (permissions.IsAuthenticated, IsTreeOwner, )
    
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.IsAuthenticated, IsTreeOwner, )
    
class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = (permissions.IsAuthenticated, IsTreeOwner, )
    
class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    permission_classes = (permissions.IsAuthenticated, IsTreeOwner, )
    


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'persons', PersonViewSet)
router.register(r'families', FamilyViewSet)
router.register(r'events', EventViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'files', MediaViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]

