package tn.MySpringBootProject.spring.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@ToString
@Data @NoArgsConstructor @AllArgsConstructor
public class Reservation  implements Serializable {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ; 
	private String CordParent;
	private Date dateD ;
	private Date dateF ;
	private String menage ;
	private Integer prix ;
	private int ageE ;
	private int nbr_enfant ;
	private String tel ;
    @Enumerated(EnumType.STRING)
	@Column
	private ReservationStatus statut;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "fk_parentR" , nullable = false)
	private Parent parentR ;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "fk_babysitterR" , nullable = false)
	private babysitter babysitterR ;


	/*public Reservation(Date date, babysitter babysitter) {
		this.dateD=date;
		this.babysitterR=babysitter;
	}*/
	// Getters and setters for other fields

	public ReservationStatus getStatut() {
		return statut;
	}

	public void setStatut(ReservationStatus statut) {
		this.statut = statut;
	}
}
