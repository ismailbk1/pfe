import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { babysitter } from '../models/babysitter.model';
import { ActivatedRoute } from '@angular/router';
import { BabysitterService } from '../services/babysitter.service';
import { Babysitter } from '../models/ReservationParent.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profilbabysitter-u',
  templateUrl: './profilbabysitter-u.component.html',
  styleUrls: ['./profilbabysitter-u.component.css']
})


export class ProfilbabysitterUComponent  {
  showAlert = false;
  Alert = false;
  id!:number;
  upForm: FormGroup;
  idbaby!:number;
  prt!:babysitter;
  babydata!:babysitter;
  idbabysitter!:number;
  newNom!: string;
  formGroup: FormGroup | undefined;
  nom!:String;

  constructor(private formBuilder:FormBuilder,private  route:ActivatedRoute ,private babysitterserv:BabysitterService ){
   
    this.upForm = new FormGroup({});


    const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    // Now you can access the user information
    console.log(user.user.idbabysitter);
    this.idbaby=user.user.idbabysitter;
    this.babydata=user.user;
   

   
  }
  }


  ngOnInit(): void {
   


    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      const currentNom = user.user.nom;
      const currentprenom = user.user.prenom;
      const currentpass = user.user.password;
      const currentconfpass = user.user.confpassword;
      const currentemail = user.user.email;
      const currentadresse = user.user.adresse;
      const currenttelephone = user.user.telephone;
      const currentniveau = user.user.niveau;
      const currentexp = user.user.exp;
      const currentgenre= user.user.genre;
      const currentdescr = user.user.descr;
      const currentdaten = user.user.daten;

      this.upForm = new FormGroup({
        nom: new FormControl(currentNom),
        prenom: new FormControl(currentprenom),
        password: new FormControl(currentpass),
        confpassword: new FormControl(currentconfpass),
        email: new FormControl(currentemail),
        adresse: new FormControl(currentadresse),
        niveau: new FormControl(currentniveau),
        exp: new FormControl(currentexp),
        descr: new FormControl(currentdescr),
        genre: new FormControl(currentgenre),
        telephone: new FormControl(currenttelephone),
        daten:new FormControl(currentdaten),
      });
    }
  }


 




  onUpdate(){

   
    this.showAlert = true;

    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Mettez à jour l'attribut 'nom' avec la nouvelle valeur
      user.user.nom = this.upForm.value.nom;
      user.user.prenom = this.upForm.value.prenom;
      user.user.email = this.upForm.value.email;
      user.user.adresse = this.upForm.value.adresse;
      user.user.password = this.upForm.value.password;
      user.user.confpassword = this.upForm.value.confpassword;
      user.user.genre = this.upForm.value.genre;
      user.user.niveau = this.upForm.value.niveau;
      user.user.telephone= this.upForm.value.telephone;
      user.user.descr= this.upForm.value.descr;
      user.user.exp= this.upForm.value.exp;
      user.user.daten = this.upForm.value.daten;

      // Enregistrez la mise à jour dans la session
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));

      this.babysitterserv.updateuser(this.idbaby,user).subscribe(

        (response)=>{
          console.log(this.idbaby)
           console.log(response.nom)
        })
    }
   
  }}
