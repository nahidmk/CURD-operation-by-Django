from django.shortcuts import render, HttpResponseRedirect
from .UserForm import User_form
from .models import User
# Create your views here.

def add_show(request):

    if request.method=='POST':
        fm = User_form(request.POST)
        if fm.is_valid():
            user_name = fm.cleaned_data['name']
            user_email = fm.cleaned_data['email']
            user_password = fm.cleaned_data['password']
            user_model = User(name=user_name,email=user_email,password=user_password)
            user_model.save()
            fm = User_form()
            all_user = User.objects.all()
    else:
        fm = User_form()
        all_user = User.objects.all()

    return render(request,'enroll/enroll_and_show.html',{'form':fm,'all':all_user})

def delete(request,id):
    if request.method=='POST':
        user = User.objects.get(pk=id)
        user.delete()
        return HttpResponseRedirect('/')
def update(request, id):
    if request.method=='POST':
        user = User.objects.get(pk=id)
        fm = User_form(request.POST,instance=user)
        if fm.is_valid():
            user_name = fm.cleaned_data['name']
            user_email = fm.cleaned_data['email']
            user_password = fm.cleaned_data['password']
            user_model = User(name=user_name, email=user_email, password=user_password)
            user_model.save()
    else:
        user = User.objects.get(pk=id)
        fm = User_form(instance=user)

    return render(request,'enroll/update.html',{'form':fm})

