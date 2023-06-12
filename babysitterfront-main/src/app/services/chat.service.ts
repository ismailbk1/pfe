import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../models/chat.model';
import { babysitter } from '../models/babysitter.model';
import { parent } from '../models/parent.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
 
  
 
private baseUrl = 'http://localhost:8083'; 
 

  item = new BehaviorSubject(0);
  counter=0
  
  constructor(private httpclt:HttpClient) { 
   

  }
 /*  
*/



getChatMessages(senderId: number, recipientId: number): Observable<ChatMessage[]> {
  const url = `${this.baseUrl}/messages/${senderId}/${recipientId}`;
  return this.httpclt.get<ChatMessage[]>(url);
}
sendMessage(chatMessage: ChatMessage): Observable<ChatMessage> {
  const url = `${this.baseUrl}/send`;
  return this.httpclt.post<ChatMessage>(url, chatMessage);
}
getListBabysitterChat(senderid: number) {
       const url=`${this.baseUrl}/messges/listusers/${senderid}`;
       return this.httpclt.get<babysitter[]>(url)
}


getListparentChat(senderid: number) {
  const url=`${this.baseUrl}/messges/listParent/${senderid}`;

  return this.httpclt.get<parent[]>(url);

}

  }