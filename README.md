DjProj Employees
====================

First Stage : Rest Service to expose employees data.
	* the employees database and registers is from here `https://dev.mysql.com/doc/employee/en/` 

Second Stage : Angular app that comunicate with the employees services.


* run the application.
	* have the mysql db up.
	* activate virtualenv (...)
	* serve ng application `cd ng-employee && ng serve`
	* run django dev-server `python manage.py server`
	* go to localhost:4200, to see employee table
	* simple proof of the api localhost:8000/employee

## Thrid Stage

* dockerize everthing.

