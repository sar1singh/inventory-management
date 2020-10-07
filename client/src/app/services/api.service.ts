import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:3000/';
  username;
  constructor(private http: HttpClient) { }

  get(api): Observable<any> {
    var headers;
    if(api !='login') {
      headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization', localStorage.getItem('token'))
    } else {
      headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    }
    return this.http.get(this.URL+api, { 'headers': headers })
    .pipe(
        map((res:Response) => res,
        catchError((error:any) => throwError(error.json().error || 'Server error'))
        ));
  }

  post(api,body): Observable<any> {
    var headers;
      if(api !='login' && api !='register') {
        headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('authorization', localStorage.getItem('token'))
      } else {
        headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
      }
    return this.http.post(this.URL+api,body, { 'headers': headers })
    .pipe(
        map((res:Response) => res,
        catchError((error:any) => throwError(error.json().error || 'Server error'))
        ));
  }      

  del(api): Observable<any> {
    var headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authorization', localStorage.getItem('token'))
    return this.http.delete(this.URL+api, { 'headers': headers })
    .pipe(
        map((res:Response) => res,
        catchError((error:any) => throwError(error.json().error || 'Server error'))
        ));
  }
}