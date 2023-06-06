import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { parent } from '../models/parent.model';
import { ActivatedRoute } from '@angular/router';
import { chat } from '../models/chat.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent implements OnInit{
  messForm:FormGroup
   idparent!:number;
   parentdata!:parent;
   idbabysitter!:number;
   message:any[]=[];
   chat:chat[]=[];
   mess!:String ;
   formGroup: FormGroup | undefined;
 constructor(private formBuilder:FormBuilder, private chatserv:ChatService, private route:ActivatedRoute )
 {
 
   this.messForm=this.formBuilder.group({
     messg:['',Validators.required],}
     )
 
   const loggedInUser = sessionStorage.getItem('loggedInUser');
   if (loggedInUser) {
     const user = JSON.parse(loggedInUser);
     // Now you can access the user information
     console.log(user.user.idParent);
     this.idparent=user.user.idParent;
     this.parentdata=user.user;
   }
 }
 
 ngOnInit(): void {
   this.route.params.subscribe(params=> {
     this.idbabysitter = params['idbabysitter'];
     console.log(this.idbabysitter)
 
 
 
 
     
 })}
 
 envoi() {
   var re = (<HTMLInputElement>document.getElementById("champs")).value;
   if (re === "") {
     alert("le message et vide");
   } else {
 
     let Rchat:chat=new chat();
     Rchat=this.messForm.value;
     console.log(Rchat.message);
     Rchat.idsender=this.idparent;
     Rchat.idreceiver=this.idbabysitter;
     
     
     this.chatserv.addchat(Rchat).subscribe(
     
       (response) => {
         
        
         console.log('Phrase enregistrée avec succès dans la base de données.');
        
       },  error => {
         console.error('Erreur lors de l\'enregistrement de la phrase :', error);
       }
       
       
       );
   }
 }
 
 
 
 
 
 
 }