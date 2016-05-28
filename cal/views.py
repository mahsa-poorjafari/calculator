from django.shortcuts import render_to_response
from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic.edit import FormView
from django.http import HttpResponseRedirect, HttpResponse
from django.http import Http404
import requests
from django.template import RequestContext
from django_ajax.decorators import ajax

def index(request):
    return render_to_response('index.html', {},
                              context_instance=RequestContext(request))
    # POST goes here . is_ajax is must to capture ajax requests. Beginner's pit.
    #if request.is_ajax():
     #  return render(request, 'ajax_test.js')
        # Always use get on request.POST. Correct way of querying a QueryDict.
        # formulla = request.POST.get['formulla']
     # return HttpResponse("yes")


    #else:
     # return render(request, 'index.html')

    # Get goes here

def ajax_test(request):
    if request.is_ajax():
        message = "This is ajax"
    else:
        message = "Not ajax"
    return HttpResponse(message)