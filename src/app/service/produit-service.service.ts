import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http: HttpClient) { }

  SaveProduit(postdata): Observable<any> {
    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'produit', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params
    });
  }
  getAllProduit(): Observable<any> {
    let params = new HttpParams();
    return this.http.get(environment.apiUrl + 'produit/allproduit', {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }
  getProduitByCriteria(postData): Observable<any> {
    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'produit/produitByCriteria', postData, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }

  SaveStock(postdata): Observable<any> {
    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'acquisition', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params
    });
  }

  getStockByCriteria(postdata): Observable<any> {
    let params = new HttpParams();
    return this.http.post(environment.apiUrl + 'acquisition/getacquisitionByCriteria', postdata, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }
}
