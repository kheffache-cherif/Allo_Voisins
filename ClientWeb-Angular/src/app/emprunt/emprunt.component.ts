import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnexionService } from '../connexion.service';
import { EmpruntService } from '../emprunt.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css'],
})
export class EmpruntComponent implements OnInit {
  biens: Object[] = new Array();
  user: Observable<string>;

  constructor(
    private empruntService: EmpruntService,
    private connexionService: ConnexionService
  ) {
    this.user = this.connexionService.getUser();
  }

  ngOnInit(): void {
    this.init();
  }
  supprimerEmprunt(bien) {
    console.log("suppression d'un emprunt" + bien);
    this.empruntService.supprimerEmprunt(bien);
    this.init();
  }
  init() {
    let email = '';
    this.user.subscribe((valeur) => {
      email = valeur;
    });
    this.empruntService.getEmprunt(email).subscribe((biens) => {
      this.biens = biens;
    });
  }
}
