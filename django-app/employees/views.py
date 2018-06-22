
from rest_framework import viewsets

from .serializers import EmployeesSerializer
from .models import Employees

class EmployeesViewSet(viewsets.ModelViewSet):
    queryset = Employees.objects.using('employees').all().order_by('-hire_date')[:25]  
    serializer_class = EmployeesSerializer

