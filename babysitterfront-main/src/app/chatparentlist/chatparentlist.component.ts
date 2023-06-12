import { Component, OnInit } from '@angular/core';
import { babysitter } from './../models/babysitter.model';
import { BabysitterService } from './../services/babysitter.service';
import { ChatService } from '../services/chat.service';
import { parent } from '../models/parent.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatMessage } from '../models/chat.model';

@Component({
  selector: 'app-chatparentlist',
  templateUrl: './chatparentlist.component.html',
  styleUrls: ['./chatparentlist.component.css']
})
export class ChatparentlistComponent implements OnInit{
  chatMessages!: ChatMessage[];
  senderId!: number;
  recipientId!: number;
  newMessage!: string;
  chatmsg:ChatMessage=new ChatMessage;
  babysitter!:babysitter;
  babysitterList:babysitter[]=[]
  selectedUser!:babysitter

idparent!:number;
  constructor(private chatService: ChatService , private route:ActivatedRoute ,private babysitterService:BabysitterService) {

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Now you can access the user information
      console.log(user.user.idParent);
      this.idparent=user.user.idParent;
      
    }
   
   
    this.senderId =this.idparent;
  //  this.recipientId=+this.recipientId;
   }

  ngOnInit() {
    // Définir les IDs du sender et du recipient (Parent ou Babysitter) en fonction de la logique de votre application
    
    this.getListbabysitter(this.senderId);
    console.log(    this.getListbabysitter(this.senderId))
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

 getnounouById(id:number){
  this.babysitterService.getnounouById(id).subscribe(
    (data)=>{
      console.log(data);
this.babysitter=data;
    }
  )
 }
 getListbabysitter(senderid:number){
  this.chatService.getListBabysitterChat(senderid).subscribe(

    (data: babysitter[])=>{
      console.log("inside getlistebabysitterchat",data);
      this.babysitterList=data;
    },
    (error: any)=>{
      console.log(error)
    }
    )
  
 }
 onUserSelect(babysitter:babysitter):void{
  this.selectedUser=babysitter;
this.getnounouById(this.selectedUser.idbabysitter);
this.recipientId=this.selectedUser.idbabysitter;
this.loadChatMessages()
 }
 
 
 }