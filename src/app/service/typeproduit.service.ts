import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeproduitService {

  constructor(private http: HttpClient) { }
  getAllTypeProduit(): Observable<any> {
    let params = new HttpParams();
    return this.http.get(environment.apiUrl + 'typeproduit/alltypeproduit', {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'      })
    });
   }

SaveTypeProduit(postdata): Observable<any> {

    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'typeproduit', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'      }),
      params: params
    });
   }
}
