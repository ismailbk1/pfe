import { Admin } from './../models/Admin.model';
import { SessionService } from './../services/Session.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
constructor(private sessionservice:SessionService ,private router:Router){

}
  canActivate():boolean {

    const admin=this.sessionservice.getAdmin()
    if(admin){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
