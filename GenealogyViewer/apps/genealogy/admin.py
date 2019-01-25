from django.contrib import admin

# Register your models here.

from .models import *

###############################################################################
# inline

class FamilyInlineAdmin(admin.TabularInline):
    model = MyFamily
    extra = 1
    #fk_name = "families"

class ChildrenInlineAdmin(admin.TabularInline):
    model = Person
    extra = 1
    fields = ('first_name', 'last_name', 'gender_type', )

###############################################################################
# full views

class PersonAdmin(admin.ModelAdmin):
    list_display = ( 'first_name', 'last_name', 'birth', 'death')
    list_display_links = ( 'first_name', 'last_name',)
    inlines = (FamilyInlineAdmin, )
    #exclude = ('id', )
    search_fields = ['first_name', 'last_name', 'id', 'handle', ]
    list_filter = ('public', 'gender_type', 'probably_alive', )
admin.site.register(Person, PersonAdmin)

class FamilyAdmin(admin.ModelAdmin):
    list_display = ( '__str__', 'father', 'mother', )
    inlines = (ChildrenInlineAdmin, )
admin.site.register(Family, FamilyAdmin)

class EventAdmin(admin.ModelAdmin):
    list_display = ( 'id', 'event_type', 'day1', 'month1', 'year1', )
    list_filter = ('event_type', )
admin.site.register(Event, EventAdmin)

class PlaceAdmin(admin.ModelAdmin):
    list_display = ('title', 'lat', 'lng')
admin.site.register(Place, PlaceAdmin)

class MediaAdmin(admin.ModelAdmin):
    pass
admin.site.register(Media)

class NoteAdmin(admin.ModelAdmin):
    pass
admin.site.register(Note)
