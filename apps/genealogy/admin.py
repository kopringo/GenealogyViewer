from django.contrib import admin

# Register your models here.

from models import *

###############################################################################
# inline

class FamilyInlineAdmin(admin.TabularInline):
    model = MyFamily
    extra = 1
    #fk_name = "families"

###############################################################################
# full views

class PersonAdmin(admin.ModelAdmin):
    list_display = ( 'first_name', 'last_name', 'birth', 'death')
    list_display_links = ( 'first_name', 'last_name',)
    inlines = (FamilyInlineAdmin, )
admin.site.register(Person, PersonAdmin)

class FamilyAdmin(admin.ModelAdmin):
    list_display = ( 'id', )
admin.site.register(Family, FamilyAdmin)

class EventAdmin(admin.ModelAdmin):
    pass
admin.site.register(Event)

class PlaceAdmin(admin.ModelAdmin):
    pass
admin.site.register(Place)

class MediaAdmin(admin.ModelAdmin):
    pass
admin.site.register(Media)

class NoteAdmin(admin.ModelAdmin):
    pass
admin.site.register(Note)