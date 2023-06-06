package tn.MySpringBootProject.spring.Repository;




import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.Reservation;
import tn.MySpringBootProject.spring.entity.ReservationStatus;
import tn.MySpringBootProject.spring.entity.babysitter;


@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
	
 List<Reservation>findByStatut(ReservationStatus statut);

 
//Reservation findByDate(Date date);
//Reservation findByDateDAndBabysitterR(Date dateD, babysitter babysitter);
 
 @Query("Select R from Reservation R where R.dateD between ?1 and ?2 or R.dateF between ?1 and ?2 and babysitterR.idbabysitter = ?3")
 Reservation findReservation(Date date,Date date1, Long idBabysitter);


    List<Reservation> findByBabysitterR(babysitter babysitter);

    List<Reservation> findByParentR(Parent parent);
}
