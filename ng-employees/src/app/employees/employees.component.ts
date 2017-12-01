import { Component, OnInit } from '@angular/core';

import { EmployeesService  } from './employees.service';


@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styles: [``]
})
export class EmployeesComponent implements OnInit {
  
  employees: any[];

  constructor(
    private _employeesService : EmployeesService){
  }

  ngOnInit() {
      this._employeesService.getEmployees()
          .subscribe(employees => {
            this.employees = employees;
          });
  }

}