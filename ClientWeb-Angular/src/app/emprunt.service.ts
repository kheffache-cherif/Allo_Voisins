import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'Content-type',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EmpruntService {
  baseURL: string = 'http://localhost:8888/';

  constructor(private http: HttpClient) {}

  ajouterEmprunt(bien: Object) {
    //appeller du biens.component.ts avec 1 objer emprunt

    return this.http
      .post(
        this.baseURL + 'ajoutEmprunt', // appel de node avec lien ajoutemprunt
        JSON.stringify(bien), //  //on lui passe un element emprunt pour l'enregister
        httpOptions
      )
      .subscribe((res) => {
        console.log(res);
      }); // affichage du retour de node.
  }

  getEmprunt(email): Observable<any> {
    return this.http.get(this.baseURL + 'getEmprunt/' + email);
  }

  supprimerEmprunt(bien: Object) {
    //appeller du biens.component.ts avec 1 objer emprunt

    return this.http
      .delete(
        this.baseURL + 'supprimerEmprunt/' + bien['_id'] // appel de node avec lien ajoutemprunt
      )
      .subscribe((res) => {
        console.log(res);
      }); // affichage du retour de node.
  }
}
