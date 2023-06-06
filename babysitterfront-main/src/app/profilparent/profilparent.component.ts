import { Component } from '@angular/core';
import { parent } from '../models/parent.model';

@Component({
  selector: 'app-profilparent',
  templateUrl: './profilparent.component.html',
  styleUrls: ['./profilparent.component.css']
})
export class ProfilparentComponent {
  idparent!:number;
  parentdata!:parent;
  constructor(){

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Now you can access the user information
      console.log(user.user.idParent);
      this.idparent=user.user.idParent;
      this.parentdata=user.user;
    }
  }

}
