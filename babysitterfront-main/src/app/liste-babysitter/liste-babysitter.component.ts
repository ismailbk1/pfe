import { Component } from '@angular/core';
import { babysitter } from '../models/babysitter.model';
import { BabysitterService } from '../services/babysitter.service';
import { Router } from '@angular/router';
import { Admin } from '../models/Admin.model';

@Component({
  selector: 'app-liste-babysitter',
  templateUrl: './liste-babysitter.component.html',
  styleUrls: ['./liste-babysitter.component.css']
})
export class ListeBabysitterComponent {

  alert:boolean=false;
  babysitter:babysitter[]=[];
  idbaby!:number;
  babydata!:Admin;

 constructor(private nounouServ :BabysitterService , private route:Router)
 {

  
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
   this.nounouServ.getAllNounou().subscribe(
    
 (tabNounou)=>{
   this.babysitter=tabNounou;
 }
   )

 }
onDelete(nounouid:any){
 this.alert=true;
 this.nounouServ.deleteNounou(nounouid).subscribe(
   (p)=>{
     
   this.nounouServ.getAllNounou().subscribe(
      
     (tabParents)=>{
       this.babysitter=tabParents;
       this.route.navigate(['/listenounou']);})  }) 

}
onUpdate(idbabysitter:any){

 this.route.navigate(['/upbaby',idbabysitter])
}

 

}
