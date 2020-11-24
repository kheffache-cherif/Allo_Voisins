
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';  // creation d'un observable
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CreationService {
  private urlBase: string = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<any> {
    let url = this.urlBase + 'Bien';
    console.log("dans le service CreationService avec" + url);
    return this.http.get(url);

}
}
