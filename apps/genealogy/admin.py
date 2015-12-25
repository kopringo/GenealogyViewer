from django.contrib import admin

# Register your models here.

from models import *

###############################################################################
# inline

class FamilyInlineAdmin(admin.TabularInline):
    model = Family

###############################################################################
# full views

class PersonAdmin(admin.ModelAdmin):
    list_display = ( 'first_name', 'last_name', 'birth', 'death')
    list_display_links = ( 'first_name', 'last_name',)
    inlines = (FamilyInlineAdmin, )
admin.site.register(Person, PersonAdmin)

admin.site.register(Family)
admin.site.register(Event)
admin.site.register(Place)
admin.site.register(Media)
admin.site.register(Note)