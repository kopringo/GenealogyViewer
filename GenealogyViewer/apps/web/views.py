# Create your views here.

from GenealogyViewer.utils import render_to_response
from .models import *

from GenealogyViewer.apps.genealogy.models import *

def home(request, tree_slug):
    params = {
        'tree_slug': tree_slug,
    }
    return render_to_response(request, 'web/index.html', params)

# ************************************************************************
# person 
# ************************************************************************

def person_list(request, tree_slug):
    params = {'tree_slug': tree_slug}
    params['person_array'] = Person.objects.all().order_by('last_name', 'first_name')
    return render_to_response(request, 'web/person-list.html', params)

def person_view(request, tree_slug, pid):
    params = {
        'tree_slug': tree_slug,
        'person': Person.objects.get(pk=pid)
        
    }
    
    return render_to_response(request, 'web/person_view.html', params)

# ************************************************************************
# family 
# ************************************************************************

def family_list(request, tree_slug):
    params = {'tree_slug': tree_slug}
    params['family_array'] = Family.objects.all()
    return render_to_response(request, 'web/family-list.html', params)

# ************************************************************************
# branch
# ************************************************************************

def __branch_dfs(person_id, color, persons, families):
    #print 'dfs %s' % person_id
    if 'color' in persons[person_id]:
        return
    persons[person_id]['color'] = color
    if persons[person_id]['parent_family_id'] != None:
        parent_family_id = persons[person_id]['parent_family_id']
        if parent_family_id is not None:
            father_id = families[parent_family_id]['father_id']
            mother_id = families[parent_family_id]['mother_id']
            if father_id is not None:
                #persons[father_id]['color'] = persons[person_id]['color']
                __branch_dfs(father_id, color, persons, families)
            if mother_id is not None:
                #persons[mother_id]['color'] = persons[person_id]['color']
                __branch_dfs(mother_id, color, persons, families)
            print (u'f_%s -> p_%s;' % (parent_family_id, person_id))
        else:
            pass
        
    for family in persons[person_id]['families']:
        print (u'{ rank = same; p_%s; f_%s }; p_%s -> f_%s; "f_%s" [shape=point]; ' % (person_id, family.id, person_id, family.id, family.id))
        father_id = family.__dict__['father_id']
        mother_id = family.__dict__['mother_id']
        #
        if father_id is not None:
            __branch_dfs(father_id, color, persons, families)
        if mother_id is not None:
            __branch_dfs(mother_id, color, persons, families)
        pp = Person.objects.filter(parent_family=family)
        for p in pp:
            #print u'f_%s -> p_%s;' % (family.id, p.id)
            __branch_dfs(p.id, color, persons, families)
    

def branch_list(request, tree_slug):
    
    # hehe
    
    _persons = Person.objects.all()
    _families = Family.objects.all()
    persons = {}
    families = {}
    for person in _persons:
        persons[person.__dict__['id']] = person.__dict__
        persons[person.__dict__['id']]['families'] = person.families.all()
        
    for family in _families:
        families[family.__dict__['id']] = family.__dict__
    color = 1
    
    print ('digraph G { nodesep=0.6; edge [arrowsize=0.3];')
    for person_id in persons.keys():
       if 'color' not in persons[person_id]:
           color = color + 1
           __branch_dfs(person_id, color, persons, families)
    print ('}')
    
    """
    print '---'
    for person in persons.keys():
        if 'color' in persons[person]:
            print 'kolor %s | %s %s' % (persons[person]['color'], persons[person]['first_name'],persons[person]['last_name'])
        else:
            print 'no color | %s %s' %(persons[person]['first_name'],persons[person]['last_name'])
    print '==='
    """
    
    # old
    params = {'tree_slug': tree_slug}
    persons = Person.objects.all().filter(parent_family=None).filter(last_name='Koperkiewicz')
    params['persons'] = persons
    params['action'] = 'branch_list'
    return render_to_response(request, 'web/branch-list.html', params)
    
    
    
    
def test(request, tree_slug):
    params = {'tree_slug': tree_slug}
    return render_to_response(request, 'web/test.phtml', params)

def manager(request, tree_slug):
    params = {'tree_slug': tree_slug}
    return render_to_response(request, 'web/manager.phtml', params)
