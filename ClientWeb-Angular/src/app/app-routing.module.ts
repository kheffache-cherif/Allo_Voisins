import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BiensComponent } from './biens/biens.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'biens', component: BiensComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
