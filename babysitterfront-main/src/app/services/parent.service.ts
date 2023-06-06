import { Injectable } from '@angular/core';
import { parent } from '../models/parent.model';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environement } from '../environement/environement';



@Injectable({
  providedIn: 'root'
})
export class ParentService {
item = new BehaviorSubject(0);
  counter=0
  
  constructor(private httpclt:HttpClient) { 
    this.item.subscribe(
    (it)=>{this.counter=it}  )
  }
 
  addParent(parents:any):Observable<parent>{
   return this.httpclt.post<parent>("http://localhost:8087/addparent",parents);}


  increment(){
   this.item.next(this.item.getValue()+1)}

   getAllParents():Observable<parent[]>{

  return this.httpclt.get<parent[]>("http://localhost:8087/listep");

   }

  deleteParent(idParent:any):Observable<parent>{

    return this.httpclt.delete<parent>("http://localhost:8087/Deleteparent/"+idParent)
  }
  
  getParentById(idParent:any):Observable<parent>{

    return this.httpclt.get<parent> ("http://localhost:8087/finedid/"+idParent)
  } 

  updateuser(idParent:any,prt:parent):Observable<parent>{

  console.log(prt.nom)
    return this.httpclt.put<parent>("http://localhost:8087/updateparent/"+idParent,prt)
  } 

  login(email:String,password:String){

   return this.httpclt.post<parent>("http://localhost:8087/login", {email: email,password: password})

  }
  compterParents() {
    return this.httpclt.get<number>("http://localhost:8087/compter");
  }

  compterUtilisateurs()
{
  return this.httpclt.get<number>("http://localhost:8087/compter1");
}
  


  

}
