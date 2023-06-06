import { Component } from '@angular/core';
import { babysitter } from '../models/babysitter.model';
import { BabysitterService } from '../services/babysitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-profil-b',
  templateUrl: './gestion-profil-b.component.html',
  styleUrls: ['./gestion-profil-b.component.css']
})
export class GestionProfilBComponent {

  babysitter:babysitter[]=[];
  adresse!:String ;
  nounou:any[]=[];
  Search!:String;
  searchResults: babysitter[] = [];
  constructor(private nounouServ :BabysitterService , private route:Router){

    
  }

  ngOnInit(): void {
    this.nounouServ.getAllNounou().subscribe(
     
  (tabNounou)=>{
    this.babysitter=tabNounou;
  }
    )
 
  }

  recherche() {
    var re = (<HTMLInputElement>document.getElementById("champs")).value;
    if (re === "") {
      alert("Le champ est vide. Veuillez saisir une valeur.");
    } else {
      this.nounou = this.babysitter.filter((babysitter) => {
        return babysitter.adresse.toLowerCase().includes(re.toLowerCase());
      });
    }
  }


  dell(idbabysitter:any){

    this.route.navigate(['/profilb',idbabysitter])
  }
}
