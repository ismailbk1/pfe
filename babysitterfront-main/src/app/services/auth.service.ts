import { LoginRequest } from './../models/loginRequest.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8087/auth/'


  constructor(private http:HttpClient) { }
  login(loginRequest:LoginRequest |undefined): Observable<any> {
    console.log(loginRequest);
    

    return this.http.post<any>(this.apiUrl+'login' , loginRequest);
  }

}
