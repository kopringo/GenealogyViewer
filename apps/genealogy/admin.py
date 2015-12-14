from django.contrib import admin

# Register your models here.

from models import *

class PersonAdmin(admin.ModelAdmin):
    fields = ( 'first_name', 'last_name', 'birth', 'death')

admin.site.register(Person, PersonAdmin)

admin.site.register(Family)
admin.site.register(Event)
admin.site.register(Place)
admin.site.register(Media)
admin.site.register(Note)