import { ReservationService } from './../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { reservation } from '../models/reservation.model';
import { ActivatedRoute } from '@angular/router';
import { parent } from '../models/parent.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  errorMessage= '';
  successsMessage='';
  reservationForm: FormGroup;
  idparent!:number;
  idbabysitter!:number;
  parentdata!:parent;
  formGroup: FormGroup | undefined;
  constructor(private formBuilder:FormBuilder,private  route:ActivatedRoute , private reservationService:ReservationService){
    this.reservationForm=this.formBuilder.group({
      cordParent:['',Validators.required],
      dateD:['',Validators.required],
      dateF:['',Validators.required],
      menage:['',Validators.required],
      prix:['',Validators.required],
      ageE:['',Validators.required],
      nbr_enfant:['',Validators.required],
      tel:['',Validators.required],
      statut:['EN_ATTENTE'],
      
    })
    
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
    this.route.params.subscribe(params => {
      this.idbabysitter = params['idbabysitter'];
      console.log(this.idbabysitter)
  })
}

  addReservation() {
    if (this.reservationForm.invalid) {
      return;
    }
    let REservation:reservation=new reservation();
    REservation=this.reservationForm.value;
    console.log(REservation);
  REservation.parentid=this.idparent;
    REservation.babysitterid=this.idbabysitter;
    console.log(REservation.statut);
    this.reservationForm.value.statut='EN_ATTENTE';
REservation.statut='EN_ATTENTE'
      this.reservationService.addReservation(REservation)
      .subscribe(
        () => {
         
          // Traitement en cas de succès
          this.successsMessage='La Reservation ajoute avec success .'
          setTimeout(() => {
            this.successsMessage = '';
          }, 3000);
          this.reservationForm.reset();

        },
        error => {
          // Traitement en cas d'erreur
          if (error.status === 409) {
            console.log("error 409 deja reserver ");
            this.errorMessage = 'Le babysitter est déjà réservé pendant cette période.';
            // Clear the error message after 5 seconds
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000); 
          }else{
           this.successsMessage='La Reservation ajoute avec success .'
           setTimeout(() => {
            this.successsMessage = '';
          }, 3000);
          this.reservationForm.reset();
          }
       
        }

      );
  
      
      }



}

