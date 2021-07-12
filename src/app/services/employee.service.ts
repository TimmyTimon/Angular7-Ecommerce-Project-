import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:8080/api/v2';

  constructor(private http:HttpClient) { }

  getEmployee(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${id}`);

  }

  getEmployeeList():Observable<any>{

    return this.http.get(`${this.baseUrl}`);

  }

  createEmployee(employee:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}` + `/employees/create`,employee);

  }

  updateEmployee(id:number,value:any):Observable<Object>{

    return this.http.put(`${this.baseUrl}/${id}`,value);

  }

  deleteEmployee(id:number){

    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});

  }

  

}
