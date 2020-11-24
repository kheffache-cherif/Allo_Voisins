import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public user: Observable<string>;

  constructor(private authService: ConnexionService,
              private router: Router) {
              this.user = this.authService.getUser();



}


 ngOnInit() {

  }

  deconnexion() {
        this.authService.disconnect();
        this.router.navigate(['/accueil']);
  }
}
