import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { babysitter } from '../models/babysitter.model';
import { ActivatedRoute } from '@angular/router';
import { BabysitterService } from '../services/babysitter.service';
import { Admin } from '../models/Admin.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatebabysitter',
  templateUrl: './updatebabysitter.component.html',
  styleUrls: ['./updatebabysitter.component.css']
})
export class UpdatebabysitterComponent {
  id!:number; 
  inputform!:FormGroup;
  prt!:babysitter;
  idbaby!:number;
  babydata!:Admin;
  constructor(private fb:FormBuilder,private actRoute:ActivatedRoute,private babysitterserv:BabysitterService){
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Now you can access the user information
      console.log(user.user.idbabysitter);
      this.idbaby=user.user.idbabysitter;
      this.babydata=user.user;
     }

  }
ngOnInit():void{
  this.inputform=this.fb.group(
  {"nom":[""],
  "prenom":[""],
  "email":[""],
  "telephone":[""],
  "adresse":[""],
  "genre":[""],
  "password":[""],
  "niveau":[""],
  "descr":[""],
  "exp":[""],
  "confpassword":[""] }
)
this.actRoute.params.subscribe(
  (param)=>{this.id=param['idbabysitter']
 // console.log(this.id)
 this.babysitterserv.getnounouById(this.id).subscribe(
(pr)=>{
  console.log(pr.nom )
  this.inputform.controls['nom'].setValue(pr.nom);
  this.inputform.controls['prenom'].setValue(pr.prenom);
  this.inputform.controls['email'].setValue(pr.email);
  this.inputform.controls['telephone'].setValue(pr.telephone);
  this.inputform.controls['adresse'].setValue(pr.adresse);
  this.inputform.controls['genre'].setValue(pr.genre);
  this.inputform.controls['password'].setValue(pr.password);
  this.inputform.controls['confpassword'].setValue(pr.confpassword);
  this.inputform.controls['niveau'].setValue(pr.niveau);
  this.inputform.controls['descr'].setValue(pr.descr);
  this.inputform.controls['exp'].setValue(pr.exp);
}

 )

})



  }
onUpdate(){
  this.prt=new babysitter();
  this.prt.nom=this.inputform.controls['nom'].value;
  this.prt.prenom=this.inputform.controls['prenom'].value;
  this.prt.email=this.inputform.controls['email'].value;
  this.prt.telephone=this.inputform.controls['telephone'].value;
  this.prt.adresse=this.inputform.controls['adresse'].value;
  this.prt.genre=this.inputform.controls['genre'].value;
  this.prt.password=this.inputform.controls['password'].value;
  this.prt.confpassword=this.inputform.controls['confpassword'].value;
  this.prt.niveau=this.inputform.controls['niveau'].value;


  this.babysitterserv.updatenounou(this.id,this.prt).subscribe(

  (prt)=>{
     console.log(prt.nom)
     Swal.fire('Succès', 'Le babysitter a été mis à jour avec succès', 'success');

     this.inputform.reset();
   

  })

}
}
