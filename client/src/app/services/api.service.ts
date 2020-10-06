import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const headers =  {
    headers: new  HttpHeaders({ 
      'Content-Type': 'application/json'})
  };
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  productList(): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(this.URL);
  }

  post(api,body): Observable<any> {
    return this.http.post(this.URL+api,body,headers)
    .pipe(
        map((res:Response) => res,
        catchError((error:any) => throwError(error.json().error || 'Server error'))
        )
        );
  }

      
}