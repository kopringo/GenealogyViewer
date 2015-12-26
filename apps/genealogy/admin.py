from django.contrib import admin

# Register your models here.

from models import *

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
    exclude = ('id', )
admin.site.register(Person, PersonAdmin)

class FamilyAdmin(admin.ModelAdmin):
    list_display = ( '__str__', )
    inlines = (ChildrenInlineAdmin, )
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