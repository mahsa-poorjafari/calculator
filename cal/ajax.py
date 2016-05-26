import json
from django.http import Http404, HttpResponse


def equal_to(request):
    if request.is_ajax():
        data = 1111
        return HttpResponse(data, content_type='application/json')
    else:
        raise Http404

