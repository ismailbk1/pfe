import { Babysitter } from './../models/ReservationParent.model';
import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/ReservationParent.model';
import { parent } from '../models/parent.model';

@Component({
  selector: 'app-liste-reservation-parent',
  templateUrl: './liste-reservation-parent.component.html',
  styleUrls: ['./liste-reservation-parent.component.css']
})
export class ListeReservationParentComponent {

  parentdata!:parent
  reservations: Reservation[]=[];
  idparent!:number;
  constructor(private reservationService: ReservationService) {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // Now you can access the user information
      console.log(user.user.idParent);
      this.idparent=user.user.idParent;
      this.parentdata=user.user;
    }

  }

  ngOnInit(): void {
    // Assuming you have the babysitter's ID stored in a variable called `babysitterId`
    this.getReservationsForParent(this.idparent);
  }

  getReservationsForParent(idparent: number): void {
    this.reservationService.getReservationsForParent(idparent)
      .subscribe((reservations:Reservation[]) => {

       
        console.log(reservations[0].babysitterR);
        this.reservations = reservations;
      });
  }


  annulerReservation(reservationId: number): void {
    this.reservationService.annulerReservation(reservationId)
      .subscribe(
        () => {
          this.getReservationsForParent(this.idparent);
       alert("Reservation annuler avec success ");
      });
  }
  

  












}
