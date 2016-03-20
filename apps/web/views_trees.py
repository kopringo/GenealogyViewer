# Create your views here.

from GenealogyViewer.utils import render_to_response

from models import *

def index(request):
    
    return render_to_response(request, 'trees/index.html', {})

