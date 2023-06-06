import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BabysitterService } from '../services/babysitter.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { babysitter } from '../models/babysitter.model';
import { NgForOf } from '@angular/common';
import { Parent } from '../models/ReservationParent.model';

@Component({
  selector: 'app-profilbabysitter-g',
  templateUrl: './profilbabysitter-g.component.html',
  styleUrls: ['./profilbabysitter-g.component.css']
})
export class ProfilbabysitterGComponent implements OnInit {


  inputform!:FormGroup;

  
  id!:number; 
 
  profil!: babysitter;
  prt!:babysitter;

  babysitterr: babysitter[] = [];

  idbaby!:number;
  babydata!:Parent;
  
  //babysitterr!:babysitter;

  constructor( private babysitterserv:BabysitterService  ,private fb:FormBuilder ,private  route: ActivatedRoute,private router:Router){

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
  this.route.params.subscribe(params => {
    this.id = params['idbabysitter'];
    console.log(this.id)
    if (this.id) {
      this.babysitterserv.getnounouById(this.id).subscribe(
        (profile: babysitter) => {
          console.log(profile)
          this.profil = profile;
        },
        (erreur) => {
          // Handle error
        }
      );
    }
  });
}
reserver(idbabysitter: number) :void{
  this.router.navigate(['/reser',idbabysitter]);
  }
  chat(idbabysitter: number) :void{
    this.router.navigate(['/chat',idbabysitter]);
    }
}