
from django.urls import path
from . import views

urlpatterns = [
    path('',views.add_show,name='add'),
    path('delete/<int:id>/',views.delete,name='delete')

]