

# Create your views here.
from django.http import Http404
from django.shortcuts import render
from bread.models import Question

def index(request):
    try:
        p = Question.objects.all()
    except Poll.DoesNotExist:
        raise Http404("Poll does not exist")
    return render(request, 'bread/index.html', {'question': p})



def bread(request):
    print request.POST
    try:
        p = Question.objects.all()
    except Poll.DoesNotExist:
        raise Http404("Poll does not exist")
    return render(request, 'bread/index.html', {'question': p})
