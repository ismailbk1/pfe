import { Injectable } from "@angular/core";
import { Admin } from "../models/Admin.model";

@Injectable({
    providedIn: 'root'
  })
  export class SessionService {
    private readonly ADMIN_KEY = 'admin';
  
    getAdmin(): Admin | null {
      const adminData = sessionStorage.getItem(this.ADMIN_KEY);
      return adminData ? JSON.parse(adminData) : null;
    }
  
    setAdmin(admin: Admin): void {
      sessionStorage.setItem(this.ADMIN_KEY, JSON.stringify(admin));
    }
  
    clearAdmin(): void {
      sessionStorage.removeItem(this.ADMIN_KEY);
    }
  }
  