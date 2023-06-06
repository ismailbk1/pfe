import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/ReservationParent.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 
 

  
  private apiUrl = 'http://localhost:8087/Reservation';

  constructor(private http: HttpClient) {}

  addReservation(reservation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, reservation);
  }

  getReservationsForBabysitter(babysitterId: number): Observable<any>{
    const url = `${this.apiUrl}/babysitters/${babysitterId}/reservations`;

    return this.http.get<any>(url);
  }
  getReservationsForParent(idparent: number): Observable<Reservation[]>{
    const url = `${this.apiUrl}/parent/${idparent}/reservations`;

    return this.http.get<Reservation[]>(url);
  }
  updateReservationStatus(reservation: Reservation) {
    const url = `${this.apiUrl}/${reservation.id}`;
    return this.http.put(url, reservation);
  }
  annulerReservation(id: number): Observable<any> {
    const url = `${this.apiUrl}/parent/${id}`;
    return this.http.delete(url);
  }
}
