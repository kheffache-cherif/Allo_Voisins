import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { ConnexionService } from './connexion.service';

import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreationBienComponent } from './creation-bien/creation-bien.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    CreationBienComponent,
    AcceuilComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  /// interagir avec la partie back end
    FormsModule   ///  module de gestion de formulaire
  ],
  providers: [ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
