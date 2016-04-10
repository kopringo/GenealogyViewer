# Create your views here.

from GenealogyViewer.utils import render_to_response
from models import FamilyTree

from simplepyged import gedcom

from models import FamilyTree

from datetime import datetime

from apps.genealogy.models import Person, Family

def index(request):
    params = {}
    
    params['trees'] = FamilyTree.objects.all()
    
    return render_to_response(request, 'trees/index.html', params)

def index_import(request):
    
    params = {}
    
    if request.POST:
        
        content = request.POST.get('content', '')
        content = content + '\n'
        
        import tempfile
        filepath = tempfile.mktemp()
        with open(filepath, 'wb') as f:
            f.write(content.encode('utf8'))
            f.close()
        g = gedcom.Gedcom(filepath)
        
        individual_list = g.individual_list()
        family_list = g.family_list()
        
        familyTree = FamilyTree()
        familyTree.date = datetime.now()
        familyTree.name = 'random'
        familyTree.slug = 'random-' + str(len(FamilyTree.objects.all()) + 1)
        familyTree.save()
        
        for indv in individual_list:
            id = indv.xref()
            given_name = indv.given_name()
            surname = indv.surname()
            sex = indv.sex()
            
            p = Person()
            p.tree = familyTree
            p.handle = id
            p.first_name = given_name
            p.last_name = surname
            p.save()
            
        for fam in family_list:
            id = fam.xref()
        
            husband = None
            wife = None
            if fam.husband():
                husband = Person.objects.get(tree=familyTree, handle=fam.husband().xref())
            if fam.wife():
                wife = Person.objects.get(tree=familyTree, handle=fam.wife().xref())
        
            f = Family()
            f.tree = familyTree
            f.handle = id
            f.father = husband
            f.mother = wife
            f.save()
        
    
    return render_to_response(request, 'trees/import.html', params)