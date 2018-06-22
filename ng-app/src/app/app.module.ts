import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { EmployeesComponent  } from './employees/employees.component';
import { EmployeesService } from './employees/employees.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers:[
      EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
