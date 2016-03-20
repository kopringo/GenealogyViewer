# Create your views here.

from GenealogyViewer.utils import render_to_response
from models import FamilyTree

from simplepyged import gedcom

def index(request):
    params = {}
    
    params['trees'] = FamilyTree.objects.all()
    
    return render_to_response(request, 'trees/index.html', params)

def index_import(request):
    
    pass