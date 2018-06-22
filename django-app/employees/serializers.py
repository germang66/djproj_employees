from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Employees

class EmployeesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employees
        fields = ('emp_no','birth_date', 'first_name', 'last_name', 'gender','hire_date')




