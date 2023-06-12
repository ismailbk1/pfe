import { ParentService } from './../services/parent.service';
import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat.model';
import { babysitter } from '../models/babysitter.model';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { BabysitterService } from '../services/babysitter.service';
import { parent } from '../models/parent.model';
import { Babysitter } from '../models/ReservationParent.model';

@Component({
  selector: 'app-chatbabysitter',
  templateUrl: './chatbabysitter.component.html',
  styleUrls: ['./chatbabysitter.component.css']
})
export class ChatbabysitterComponent  implements OnInit{
  chatMessages!: ChatMessage[];
  senderId!: number;
  recipientId!: number;
  newMessage!: string;
  chatmsg:ChatMessage=new ChatMessage;
  parent!:parent;
  babysitter!:babysitter
  parentList:parent[]=[]
  selectedUser!:parent

  idbabysitter!:number;
  constructor(private chatService: ChatService , private route:ActivatedRoute ,
    private parentService:ParentService
    ,
    private babysitterService:BabysitterService) {

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Now you can access the user information
      console.log(user.user.idbabysitter);
      this.idbabysitter=user.user.idbabysitter;
      this.babysitter=user.user;
    }
    /*this.route.params.subscribe(params => {
      this.recipientId = params['idbabysitter'];
      
    });*/
   
    this.senderId =this.idbabysitter;
  //  this.recipientId=+this.recipientId;
   }

  ngOnInit() {
    // Définir les IDs du sender et du recipient (Parent ou Babysitter) en fonction de la logique de votre application
    
    this.getListparent(this.senderId);
    console.log(    this.getListparent(this.senderId))
   // this.recipientId=this.recipientId;
   // this.getnounouById(this.recipientId);
    //this.loadChatMessages();
  }

  loadChatMessages() {
    this.chatService.getChatMessages(this.senderId, this.recipientId).subscribe(messages => {
      this.chatMessages = messages;
    });
    }

  sendMessage() {
    this.chatmsg.content=this.newMessage;
    this.chatmsg.idsender=this.senderId;
    this.chatmsg.idreceiver=this.recipientId; 
   this.chatService.sendMessage(this.chatmsg).subscribe(
    () => {
      console.log("messgae send avec success ");
      this.newMessage = '';
      this.loadChatMessages();
    });
  
 }

 getparentById(id:number){
  this.parentService.getParentById(id).subscribe(
    (data)=>{
      console.log(data);
this.parent=data;
    }
  )
 }
 getListparent(senderid:number){
  this.chatService.getListparentChat(senderid).subscribe(

    (data: parent[])=>{
      console.log("inside getlistebabysitterchat",data);
      this.parentList=data;
    },
    (error: any)=>{
      console.log(error)
    }
    )
  
 }
 onUserSelect(parent:parent):void{
  this.selectedUser=parent;
this.getparentById(this.selectedUser.idParent);
this.recipientId=this.selectedUser.idParent;
this.loadChatMessages()
 }
 
 
 }