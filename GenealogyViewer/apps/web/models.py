
from django.db import models
from django.contrib.auth.models import User

IMPORT_TYPE = (
    (0, 'gedcom 5.5'),
)

class FamilyTree(models.Model):
    date = models.DateTimeField(blank=True)
    name = models.CharField(max_length=64)
    slug = models.SlugField(max_length=16)
    owners = models.ManyToManyField(User)
    description = models.TextField(blank=True)
    
    def __unicode__(self):
        return u'%s' % self.name
    
class FamilyTreeImport(models.Model):
    date = models.DateTimeField(blank=True)
    tree = models.ForeignKey(FamilyTree, on_delete=models.CASCADE)
    file = models.FileField(upload_to='trees/')
    type = models.IntegerField(default=0, choices=IMPORT_TYPE)
    state = models.IntegerField(default=0)
    processed = models.BooleanField(default=False)
    
    def __unicode__(self):
        return u'%s' % str(self.id)
