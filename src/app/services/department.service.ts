import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl='http://localhost:8080/api/v2';

  constructor(private http:HttpClient) { }

  getDept(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${id}`);

  }

  getDeptList():Observable<any>{

    return this.http.get(`${this.baseUrl}`);

  }

  createDept(dept:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}` + `/department/create`,dept);

  }

  updateDept(id:number, value:any):Observable<Object>{

   return this.http.put(`${this.baseUrl}/${id}`,value);

  }

  deleteDept(id:number):Observable<any>{

    return this.http.delete(`${this.baseUrl}/${id}`);

  }

}
