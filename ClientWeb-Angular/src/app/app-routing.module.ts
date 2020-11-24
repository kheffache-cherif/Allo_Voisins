import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path: 'acceuil',component:AcceuilComponent  },

  {path: 'inscription',component:InscriptionComponent  },
  {path: 'connexion',component:ConnexionComponent  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
