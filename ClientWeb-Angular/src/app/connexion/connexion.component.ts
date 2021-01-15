import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  public utilisateur = { email: '', password: '' };
  public message: string = '';

  constructor(
    private connexionService: ConnexionService,
    private router: Router
  ) {}

  onSubmit() {
    this.connexionService
      .verificationConnexion(this.utilisateur)
      .subscribe((reponse) => {
        this.message = reponse['message'];
        console.log(this.message);
        if (reponse['resultat']) {
          this.connexionService.connect(this.utilisateur.email);

          this.router.navigate(['/']);
        }
      });
    console.log('boutonSubmit');
  }
}
