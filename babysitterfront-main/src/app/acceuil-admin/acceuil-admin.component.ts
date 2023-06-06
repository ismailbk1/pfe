import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';
import { BabysitterService } from '../services/babysitter.service';
import { Admin } from '../models/Admin.model';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent implements OnInit{

 
  nombreParents!: number;
  nbrUtl!:number ;
  nbrb!:number ;
  idbaby!:number;
  babydata!:Admin;
  constructor(private parentService: ParentService ,private baby:BabysitterService ) {

    
    const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    // Now you can access the user information
    console.log(user.user.idbabysitter);
    this.idbaby=user.user.idbabysitter;
    this.babydata=user.user;
   

   
  }
    
   }

  ngOnInit() {
    this.parentService.compterParents()
      .subscribe(count => this.nombreParents = count);

      this.parentService.compterUtilisateurs()
      .subscribe(count => this.nbrUtl = count);

      this.baby.compterbaby()
      .subscribe(count => this.nbrb = count);

     
  }
  


}
