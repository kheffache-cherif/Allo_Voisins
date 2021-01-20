import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BiensService {
  private urlBase: string = 'http://localhost:8888';

  constructor(private http: HttpClient) {}

  getBiens(): Observable<any> {
    let url = this.urlBase + '/biens';
    console.log('dans le service ProduitService avec' + url);
    return this.http.get(url);
  }

  ajoutBiens(bien): Observable<any> {
    let url = this.urlBase + '/bien';
    console.log('dans le service BienService avec' + url + bien);  //bien
    return this.http.post(url, bien);
  }
}
