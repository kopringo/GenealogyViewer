# Create your views here.

from GenealogyViewer.utils import render_to_response
from models import *

def home(request):
    return render_to_response(request, 'web/index.html', {})
