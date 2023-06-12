import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { Home2Component } from './home2/home2.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscnounouComponent } from './inscnounou/inscnounou.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ListeParentComponent } from './liste-parent/liste-parent.component';
import { UpdateparentComponent } from './updateparent/updateparent.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ListeBabysitterComponent } from './liste-babysitter/liste-babysitter.component';
import { UpdatebabysitterComponent } from './updatebabysitter/updatebabysitter.component';
import { ChatPComponent } from './chat-p/chat-p.component';
import { GestionProfilBComponent } from './gestion-profil-b/gestion-profil-b.component';
import { ProfilbabysitterGComponent } from './profilbabysitter-g/profilbabysitter-g.component';
import { AcceuilPComponent } from './acceuil-p/acceuil-p.component';
import { ProfilparentComponent } from './profilparent/profilparent.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProfilbabysitterUComponent } from './profilbabysitter-u/profilbabysitter-u.component';
import { FormulaireAdminComponent } from './formulaire-admin/formulaire-admin.component';
import { AcceuilBabysitterComponent } from './acceuil-babysitter/acceuil-babysitter.component';
import { ListeReservationParentComponent } from './liste-reservation-parent/liste-reservation-parent.component';
import { ListeReservationBabysComponent } from './liste-reservation-babys/liste-reservation-babys.component';
import { CommonModule } from '@angular/common';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { ChatbabysitterComponent } from './chatbabysitter/chatbabysitter.component';
import { ChatparentlistComponent } from './chatparentlist/chatparentlist.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Home2Component,
    LoginComponent,
    InscriptionComponent,
    InscnounouComponent,
    HeaderAdminComponent,
    ListeParentComponent,
    UpdateparentComponent,
    ProfilAdminComponent,
    ListeBabysitterComponent,
    UpdatebabysitterComponent,
    ChatPComponent,
    GestionProfilBComponent,
    ProfilbabysitterGComponent,
    AcceuilPComponent,
    ProfilparentComponent,
    ReservationComponent,
    ProfilbabysitterUComponent,
    FormulaireAdminComponent,
    AcceuilBabysitterComponent,
    ListeReservationParentComponent,
    ListeReservationBabysComponent,
    AcceuilAdminComponent,
    ChatbabysitterComponent,
    ChatparentlistComponent,

   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
