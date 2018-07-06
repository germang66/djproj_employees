database registers
======================

```
cd db-mysql
git clone https://github.com/datacharmer/test_db.git 
```

* insde db-mysql/test_db/employees.sql, replace:

```
SELECT 'LOADING departments' as 'INFO';
source load_departments.dump ;
SELECT 'LOADING employees' as 'INFO';
source load_employees.dump ;
SELECT 'LOADING dept_emp' as 'INFO';
source load_dept_emp.dump ;
SELECT 'LOADING dept_manager' as 'INFO';
source load_dept_manager.dump ;
SELECT 'LOADING titles' as 'INFO';
source load_titles.dump ;
SELECT 'LOADING salaries' as 'INFO';
source load_salaries1.dump ;
source load_salaries2.dump ;
source load_salaries3.dump ;
```

* for

```
SELECT 'LOADING departments' as 'INFO';
source /usr/sql/test_db/load_departments.dump ;
SELECT 'LOADING employees' as 'INFO';
source /usr/sql/test_db/load_employees.dump ;
SELECT 'LOADING dept_emp' as 'INFO';
source /usr/sql/test_db/load_dept_emp.dump ;
SELECT 'LOADING dept_manager' as 'INFO';
source /usr/sql/test_db/load_dept_manager.dump ;
SELECT 'LOADING titles' as 'INFO';
source /usr/sql/test_db/load_titles.dump ;
SELECT 'LOADING salaries' as 'INFO';
source /usr/sql/test_db/load_salaries1.dump ;
source /usr/sql/test_db/load_salaries2.dump ;
source /usr/sql/test_db/load_salaries3.dump ;
```
