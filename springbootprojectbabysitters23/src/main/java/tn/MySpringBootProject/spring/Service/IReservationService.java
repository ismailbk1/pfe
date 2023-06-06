package tn.MySpringBootProject.spring.Service;

import java.sql.Date;
import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;

import tn.MySpringBootProject.spring.entity.Reservation;
import tn.MySpringBootProject.spring.entity.ReservationStatus;
import tn.MySpringBootProject.spring.entity.babysitter;

public interface IReservationService {
	
	public Reservation addreservation(Long idParent,Long idbabysitter,Reservation res);
    
	public Reservation findByDateAndBabysitter(Date date, babysitter babysitter);
	public void mettreAJourStatutReservation(Long reservationId, ReservationStatus nouveauStatut) ;
	
	public ResponseEntity<?> findByDateAndBabysitter(Date dated,Date datef, babysitter babysitter);

    void addReservation(Reservation reservation);

	List<Reservation> getReservationsByBabysitter(babysitter babysitter);

	ResponseEntity<String> updateReservationStatus(Long id, Reservation reservation) throws ChangeSetPersister.NotFoundException;
}
