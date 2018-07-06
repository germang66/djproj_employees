
SOURCE /usr/sql/test_db/employees.sql;


CREATE USER 'django_app'@'%' IDENTIFIED BY 'django_app';
GRANT ALL PRIVILEGES ON employees.* TO 'django_app'@'%';

CREATE SCHEMA djapp_employees;
GRANT ALL PRIVILEGES ON djapp_employees.* TO 'django_app'@'%';
