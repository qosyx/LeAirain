import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getAllTypePersonnel(): Observable<any> {
    let params = new HttpParams();
    return this.http.get(environment.apiUrl + 'typepersonnel/getAlltypepersonnel', {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }
  getTypePersonnelByCriteria(postdata): Observable<any> {
    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'typepersonnel/gettypepersonnelByCriteria', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }
  // permet de se connecter à l'application et aussi de verifier si le user existe deja
  getAcces(postdata): Observable<any> {
    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'personnel/getPersonnelByCriteria', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }
  SaveTypePersonnel(postdata): Observable<any> {

    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'typepersonnel', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params
    });
  }
  SavePersonnel(postdata): Observable<any> {

    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'personnel', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params
    });
  }
}
