from django import forms
from . import models
from django.core import  validators
class User_form(forms.ModelForm):
    class Meta:
        model = models.User
        fields = ['name','email','password']

        widgets = { 'name':forms.TextInput(attrs={'class':'form-control'}),
        'email': forms.EmailInput(attrs={'class': 'form-control'}),
        'password': forms.PasswordInput(render_value=True,attrs={'class': 'form-control'})}
