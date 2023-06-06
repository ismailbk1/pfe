import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  item = new BehaviorSubject(0);
  counter=0
  
  constructor(private httpclt:HttpClient) { 
    this.item.subscribe(
    (it)=>{this.counter=it}  )
  }
 
  addParent(admins:any):Observable<Admin>{
   return this.httpclt.post<Admin>("http://localhost:8087/addAdm",admins);}


}
