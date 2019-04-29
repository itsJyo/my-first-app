import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeeService {
    url="http://testurl"
    constructor(private http: HttpClient) { }

 
    public getEmployeeById(userid: string) {
        return this.http
            .get(this.url + "employees/getemployeeById?userid=" + userid)            
    }
}