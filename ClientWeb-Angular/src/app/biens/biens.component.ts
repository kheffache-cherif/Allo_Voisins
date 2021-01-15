import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs'; // un observable qui sert à modifier tout le temps les donner
import { ConnexionService } from '../connexion.service';
import { BiensService } from '../biens.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css'],
})
export class BiensComponent implements OnInit {
  biens: Object[] = new Array();
  user: Observable<string>;

  httpOpt = {
    headers: new HttpHeaders({
      // comme des autorisation eviter les cors passage du code client serveur

      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
      'Access-Control-Allow-HEADERS': 'Content-Type',
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private biensService: BiensService,
    private connexionService: ConnexionService,
    private route: ActivatedRoute
  ) {
    this.user = this.connexionService.getUser(); //recuperer l'utilisateur du serveur
  }

  ngOnInit(): void {
    this.biensService.getBiens().subscribe((biens) => {
      this.biens = biens;
    });
    console.log('dans ngOnInit() du composant produits');
  }
}
