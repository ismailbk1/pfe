package tn.MySpringBootProject.spring.Controller;


import java.util.Date;
import java.util.List;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tn.MySpringBootProject.spring.Repository.BabySitterRepository;
import tn.MySpringBootProject.spring.Repository.ParentRepository;
import tn.MySpringBootProject.spring.Service.ReservationService;
import tn.MySpringBootProject.spring.entity.*;

@Slf4j
@CrossOrigin(origins="localhost:4200")
@RestController
@RequestMapping("/Reservation")
public class ReservationController {
	@Autowired
    ReservationService resServ ;
	// Endpoint pour ajouter une réservation
	@Autowired
	ParentRepository parentRepository;

	@Autowired
	BabySitterRepository babySitterRepository;
	@PostMapping("/add")
	public ResponseEntity<?> addReservation(@RequestBody RservationRequest reservationreq) {
		log.info("inside addREservation {}",reservationreq);


		//creation de objet reservation
		Reservation reservation=new Reservation();
		reservation.setDateF(reservationreq.getDateF());
		reservation.setDateD(reservationreq.getDateD());
		reservation.setStatut(reservationreq.getStatut());
		reservation.setMenage(reservationreq.getMenage());
		reservation.setAgeE(reservationreq.getAgeE());
		reservation.setNbr_enfant(reservationreq.getNbr_enfant());
		reservation.setCordParent(reservationreq.getCordParent());
		reservation.setTel(reservationreq.getTel());
		reservation.setPrix(reservationreq.getPrix());
		// Set the existing parent and babysitter objects in the reservation using their IDs
		Parent parent = parentRepository.findById(reservationreq.getParentid()).orElse(null);
		reservation.setParentR(parent);

		babysitter babysitter = babySitterRepository.findById(reservationreq.getBabysitterid()).orElse(null);
		reservation.setBabysitterR(babysitter);

		try {
			// Vérifier si le babysitter est déjà réservé pendant cette période
			if (isBabysitterAlreadyReserved(reservation.getBabysitterR(), new Date(reservation.getDateD().getTime()), new Date(reservation.getDateF().getTime()))) {
				return ResponseEntity.status(HttpStatus.CONFLICT).body("Le babysitter est déjà réservé pendant cette période.");
			}

			resServ.addReservation(reservation);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Une erreur est survenue lors de l'ajout de la réservation.");
		}
		return ResponseEntity.status(HttpStatus.OK).body("Le babysitter ajoute avec success .");

	}
	@GetMapping("/babysitters/{babysitterId}/reservations")
	public List<Reservation> getReservationsForBabysitter(@PathVariable Long babysitterId) {
		// Implement the logic to fetch reservations for the given babysitterId
		babysitter babysitter = babySitterRepository.findById(babysitterId).orElse(null);
		List<Reservation> reservations = resServ.getReservationsByBabysitter(babysitter);
		log.info("the list of reservation {}",reservations);
		return  reservations ;
	}
	@GetMapping("/parent/{idparent}/reservations")
	public List<Reservation> getReservationsForParent(@PathVariable Long idparent) {
		// Implement the logic to fetch reservations for the given babysitterId
		Parent parent = parentRepository.findById(idparent).orElse(null);
		List<Reservation> reservations = resServ.getReservationsByParent(parent);
		log.info("the list of reservation {}",reservations);
		return  reservations ;
	}
	@PutMapping("/{id}")
	public ResponseEntity<String> updateReservationStatus(@PathVariable("id") Long id, @RequestBody Reservation reservation) {
log.info("inside the update status ");
	try {
		return resServ.updateReservationStatus(id, reservation);

	} catch (ChangeSetPersister.NotFoundException e) {
		throw new RuntimeException(e);
	}


	}
	private boolean isBabysitterAlreadyReserved(babysitter babysitter, Date startDate, Date endDate) {
		// Effectuer une requête à la base de données pour vérifier si le babysitter est déjà réservé
		// pendant la période choisie (en utilisant les dates de début et de fin)
		// Retourner true si déjà réservé, sinon false

		// Implémentation fictive pour illustrer le concept

		List<Reservation> reservations = resServ.getReservationsByBabysitter(babysitter);

		for (Reservation reservation : reservations) {
			if (startDate.before(reservation.getDateF()) && endDate.after(reservation.getDateD())) {
				// Il y a un chevauchement de dates, le babysitter est déjà réservé
				return true;
			}
		}

		return false;
	}



	@DeleteMapping("/parent/{id}")
	public ResponseEntity<?> annulerReservation(@PathVariable Long id) {
		resServ.annulerReservation(id);
		return ResponseEntity.ok().build();
	}
	 
	
	 

	   
	
}
