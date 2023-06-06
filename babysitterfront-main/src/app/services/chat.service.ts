import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  item = new BehaviorSubject(0);
  counter=0
  
  constructor(private httpclt:HttpClient) { 
    this.item.subscribe(
    (it)=>{this.counter=it}  )

  }
  addchat(chat:any):Observable<chat>{
    return this.httpclt.post<chat>("http://localhost:8087/mess",chat);}


  
    getmess():Observable<chat[]>{

      return this.httpclt.get<chat[]>("http://localhost:8087/mess");}


  }