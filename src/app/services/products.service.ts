import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,pipe} from 'rxjs';
import { text } from '@angular/core/src/render3';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl='http://localhost:8080/api/v2/products';

  constructor(private http:HttpClient) { }

getProducts(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/${id}` );
  
}

getProductList():Observable<any>{

  return this.http.get(`${this.baseUrl}`)
  .pipe(map(this.extractData));

}

private extractData(res: Response) {
  let body = res;
  return body;
}

createProducts(formData:FormData):Observable<any>{

  return this.http.post(`${this.baseUrl}`+ `/create`,formData);

}

updateProducts(id:number, value:any):Observable<Object>{

  return this.http.put(`${this.baseUrl}/${id}`,value);

}

deleteProducts(id:number):Observable<any>{

  return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});

}

}
