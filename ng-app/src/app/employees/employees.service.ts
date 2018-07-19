import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EmployeesService{
    private _url = "http://192.168.99.100/api/employees/"
    
    constructor(private _http: Http){
    }
    
    getEmployees(){
        return this._http.get(this._url)
            .map( res => {
            	let result = res.json();
            	console.log(result);
            	return result;
            } );
    }
}
