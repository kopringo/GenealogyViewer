from django.contrib import admin

# Register your models here.

from models import FamilyTree

###############################################################################
# full views

class FamilyTreeAdmin(admin.ModelAdmin):
    list_display = ( 'name', 'date', 'slug', )
    #list_filter = ('public', 'private', 'gender_type', 'probably_alive', )
admin.site.register(FamilyTree, FamilyTreeAdmin)
