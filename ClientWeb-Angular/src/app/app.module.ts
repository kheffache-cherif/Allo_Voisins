import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ng form group
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ConnexionService } from './connexion.service';

import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { BiensComponent } from './biens/biens.component';
import { BiensService } from './biens.service';
import { AjoutBienComponent } from './ajout-bien/ajout-bien.component';
import { EmpruntComponent } from './emprunt/emprunt.component';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    ConnexionComponent,
    InscriptionComponent,
    AcceuilComponent,
    MenuComponent,
    AjoutBienComponent,
    EmpruntComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, /// interagir avec la partie back end
    FormsModule, ///  module de gestion de formulaire
    ReactiveFormsModule,
  ],
  providers: [BiensService, ConnexionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
