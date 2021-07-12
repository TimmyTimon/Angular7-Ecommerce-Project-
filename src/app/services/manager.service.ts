import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseUrl='http://localhost:8080/api/v2';

  constructor(private http:HttpClient) { }

  getManager(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${id}`);

  }

  getManagerList():Observable<any>{

    return this.http.get(`${this.baseUrl}`);

  }

  createManager(manager:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}` + `/manager/create`,manager);

  }

  updateManager(id:number,value:any):Observable<Object>{

    return this.http.put(`${this.baseUrl}/${id}`,value);

  }

  deleteManager(id:number):Observable<any>{
    
    return this.http.delete(`${this.baseUrl}/${id}`);

  }

}
