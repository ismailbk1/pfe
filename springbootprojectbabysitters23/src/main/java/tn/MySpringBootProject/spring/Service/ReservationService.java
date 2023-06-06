package tn.MySpringBootProject.spring.Service;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import tn.MySpringBootProject.spring.Repository.BabySitterRepository;
import tn.MySpringBootProject.spring.Repository.ParentRepository;
import tn.MySpringBootProject.spring.Repository.ReservationRepository;
import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.Reservation;
import tn.MySpringBootProject.spring.entity.ReservationStatus;
import tn.MySpringBootProject.spring.entity.babysitter;
@Service
public class ReservationService implements IReservationService{
  @Autowired
  ReservationRepository ResRep ;
  @Autowired
  ParentRepository UtlRep ;
  @Autowired
  BabySitterRepository BabyRep ;
	@Override
	public Reservation addreservation(Long idParent, Long idbabysitter,Reservation res) {
		// TODO Auto-generated method stub
		
		Parent parent=UtlRep.findById(idParent).get();
		babysitter baby=BabyRep.findById(idbabysitter).get();
		
		res.setParentR(parent);
		res.setBabysitterR(baby);
		
		return ResRep.save(res);
	}

	@Override
	public Reservation findByDateAndBabysitter(java.sql.Date date, babysitter babysitter) {
		return null;
	}

	@Override
	public void mettreAJourStatutReservation(Long reservationId, ReservationStatus nouveauStatut) {
		 Reservation reservation = ResRep.findById(reservationId)
	                .orElseThrow(() -> new IllegalArgumentException("Réservation introuvable avec l'ID : " + reservationId));


	        // Vérification du statut actuel de la réservation
	        ReservationStatus statutActuel = reservation.getStatut();

	        // Vérification des transitions de statut autorisées
	        if (nouveauStatut == ReservationStatus.CONFIRME && statutActuel != ReservationStatus.CONFIRME) {
	            reservation.setStatut(ReservationStatus.CONFIRME);
	        } else if (nouveauStatut == ReservationStatus.ANNULE && statutActuel != ReservationStatus.CONFIRME) {
	            reservation.setStatut(ReservationStatus.ANNULE);
	        } else if (nouveauStatut == ReservationStatus.EN_ATTENTE && statutActuel != ReservationStatus.CONFIRME) {
	            reservation.setStatut(ReservationStatus.EN_ATTENTE);
	        } else {
	            throw new IllegalStateException("Impossible de mettre à jour le statut de la réservation.");
	        }

	        ResRep.save(reservation);
	    }

	@Override
	public ResponseEntity<?> findByDateAndBabysitter(java.sql.Date dated, java.sql.Date datef, babysitter babysitter) {
		return null;
	}

	//@Override
	public Reservation findByDateAndBabysitter(Date date, babysitter babysitter)
	{
		/* Reservation reservation = ResRep.findByDateDAndBabysitterR(date, babysitter);
	        
	        if (reservation != null) {
	            return reservation;
	        } else {
	            
	            reservation = new Reservation(date,babysitter);
	            ResRep.save(reservation);
	            return reservation;}*/
	
	        return null ;
		}

//	@Override
	public ResponseEntity<?> findByDateAndBabysitter(Date dated, Date datef, babysitter babysitter) {
		
		 Reservation reservation = ResRep.findReservation(dated,datef,babysitter.getIdbabysitter());
		 if (reservation != null) {
	            return ResponseEntity.ok().body("deja exist !!!!!!") ;
	        } else {
	        	
	        	 reservation = new Reservation();
		            reservation.setDateD(dated);
		            reservation.setDateF(datef);
		            reservation.setBabysitterR(babysitter);
		            ResRep.save(reservation);
		            return ResponseEntity.ok().body("reservation t3adettt");
		        }
		 }

	@Override
	public void addReservation(Reservation reservation) {
		ResRep.save(reservation);

	}

	@Override
	public List<Reservation> getReservationsByBabysitter(babysitter babysitter) {
		return ResRep.findByBabysitterR(babysitter);
	}
	public List<Reservation> getReservationsByParent(Parent parent) {
		return ResRep.findByParentR(parent);
	}

	@Override
		public ResponseEntity<String> updateReservationStatus(Long id, Reservation reservation)throws ChangeSetPersister.NotFoundException {
			Reservation existingReservation = ResRep.findById(id)
					.orElseThrow(() -> new ChangeSetPersister.NotFoundException());
			existingReservation.setStatut(reservation.getStatut());
			ResRep.save(existingReservation);
			return ResponseEntity.status(HttpStatus.OK).body("Le statut de la réservation a été mis à jour avec succès");

		}


	public void annulerReservation(Long id) {
		ResRep.deleteById(id);
	}
}
	


