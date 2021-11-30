from django.shortcuts import render
from django.http import HttpResponse
from AppTwo.models import User

def index(request):
    return render(request,'Apptwo/index.html')

def users(request):

    user_list = User.objects.order_by('first_name')
    user_dict = {"users":user_list}
    return render(request,'Apptwo/users.html',context=user_dict)
