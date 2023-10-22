import requests
import json

from django.http import JsonResponse


def get_users(request):
    proxy_server = {'http': 'http://localhost:8080'}
    path = "/users"
    url = "http://localhost:8080" + path
    res = requests.get(url, proxies=proxy_server)
    return JsonResponse(res.json(), safe=False)


def get_user_by_id(request, user_id):
    proxy_server = {'http': 'http://localhost:8080'}
    path = "/users/" + str(user_id)
    url = "http://localhost:8080" + path
    res = requests.get(url, proxies=proxy_server)
    return JsonResponse(res.json(), safe=False)
