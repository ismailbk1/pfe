import { Component } from '@angular/core';
import { reservation } from '../models/reservation.model';
import { SessionService } from '../services/Session.service';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { catchError, of } from 'rxjs';
import { Reservation } from '../models/ReservationParent.model';

@Component({
  selector: 'app-liste-reservation-babys',
  templateUrl: './liste-reservation-babys.component.html',
  styleUrls: ['./liste-reservation-babys.component.css']
})
export class ListeReservationBabysComponent {

  reservations: Reservation[]=[];
  idbabysitter!:number;
  constructor(private reservationService: ReservationService) {


    
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Now you can access the user information
      console.log(user.user.idbabysitter);
      this.idbabysitter=user.user.idbabysitter;
    }

  }

  ngOnInit(): void {
    // Assuming you have the babysitter's ID stored in a variable called `babysitterId`
    this.getReservationsForBabysitter(this.idbabysitter);
  }

  getReservationsForBabysitter(babysitterId: number): void {
    this.reservationService.getReservationsForBabysitter(babysitterId)
      .subscribe((reservations:Reservation[]) => {
        console.log(reservations);
        this.reservations = reservations;
      });
  }
  confirmRefuseReservation(reservation: Reservation) {
    const confirmed = window.confirm('Êtes-vous sûr(e) de vouloir refuser cette réservation ?');
  
    if (confirmed) {
      this.refuseReservation(reservation);
    }
  }
  acceptReservation(reservation: Reservation) {
    reservation.statut = 'CONFIRME';
    this.updateReservationStatus(reservation);
  }
  

  refuseReservation(reservation: Reservation) {
    reservation.statut = 'ANNULE';
    this.updateReservationStatus(reservation);
  }
  updateReservationStatus(reservation: Reservation) {
    this.reservationService.updateReservationStatus(reservation)
    .pipe(
      catchError(() => of(null)) // Ignore the parsing error and return null as the default value
    )
    .subscribe(
      () => console.log('Statut de réservation mis à jour avec succès'),
      error => console.error('Erreur lors de la mise à jour du statut de réservation', error)
    );
}
  

}


