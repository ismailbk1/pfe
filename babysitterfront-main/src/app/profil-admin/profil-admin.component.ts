import { Component } from '@angular/core';
import { Admin } from '../models/Admin.model';
import { ParentService } from '../services/parent.service';
import { BabysitterService } from '../services/babysitter.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent {

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

}
