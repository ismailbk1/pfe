import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { AuthGuard } from './guards/auth.guard';
import { ProfilbabysitterUComponent } from './profilbabysitter-u/profilbabysitter-u.component';
import { FormulaireAdminComponent } from './formulaire-admin/formulaire-admin.component';
import { AcceuilBabysitterComponent } from './acceuil-babysitter/acceuil-babysitter.component';
import { ListeReservationParentComponent } from './liste-reservation-parent/liste-reservation-parent.component';
import { ListeReservationBabysComponent } from './liste-reservation-babys/liste-reservation-babys.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { ChatparentlistComponent } from './chatparentlist/chatparentlist.component';
import { ChatbabysitterComponent } from './chatbabysitter/chatbabysitter.component';



const routes: Routes = [
  {path:"inscparent",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"",component:Home2Component},
  {path:"login",component:LoginComponent},
  {path:"insr",component:InscriptionComponent},
  {path:"insrnounou",component:InscnounouComponent},
  {path:"headeradmin",component:HeaderAdminComponent},
  {path:"listeparent",
 // canActivate :[AuthGuard],
  component:ListeParentComponent
  },
  {path:"upparent/:idparent",component:UpdateparentComponent},
  {path:"profila",component:ProfilAdminComponent},
  {path:"listenounou",component:ListeBabysitterComponent},
  {path:"upbaby/:idbabysitter",component:UpdatebabysitterComponent},
  {path:"chat/:idbabysitter",component:ChatPComponent},
  {path:"recherche",component:GestionProfilBComponent},
  {path:"profilb/:idbabysitter",component:ProfilbabysitterGComponent},
  {path:"acceuil",component:AcceuilPComponent},
  {path:"profilp",component:ProfilparentComponent},
  {path:"reser/:idbabysitter",component:ReservationComponent},
  {path:"gestionbaby",component:GestionProfilBComponent},
  {path:"profilbu",component:ProfilbabysitterUComponent},
  {path:"form",component:FormulaireAdminComponent},
  {path:"accbb",component:AcceuilBabysitterComponent},
  {path:"reservb",component:ListeReservationParentComponent},
  {path:"reservp",component:ListeReservationBabysComponent},
  {path:"acceuiladm",component:AcceuilAdminComponent},
  {path:"chatParentList",component:ChatparentlistComponent},
  {path:"chatBabysitterList",component:ChatbabysitterComponent}
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
