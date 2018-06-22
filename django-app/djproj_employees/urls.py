from django.conf.urls import url, include
from rest_framework import routers
from employees import views

router = routers.DefaultRouter()
router.register(r'employees', views.EmployeesViewSet )

urlpatterns = [
    url(r'^', include(router.urls)),
]

