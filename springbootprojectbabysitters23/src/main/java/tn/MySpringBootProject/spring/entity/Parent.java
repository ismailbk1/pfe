package tn.MySpringBootProject.spring.entity;



import java.io.Serializable;
import java.security.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.springframework.context.annotation.Bean;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@DiscriminatorColumn(name="Type")
@DiscriminatorValue("PARENT")
	public class Parent  implements Serializable {
	
		@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long idParent;
		private String nom ;
		private String prenom ;
		private String email ;
		private String password ;
		private String confpassword ;
		private String adresse ;
		private int telephone ;
		private String genre ;
		private String nbrEnfant ;
		@Enumerated(EnumType.STRING)
		private Etat etat ;
		private Date dateN;
	
	
	
		@OneToOne
		private imageData img ;
		@OneToMany(mappedBy ="parentB")
		private List<babysitter>listBabysitter= new ArrayList() ;
	
	/*	@OneToMany(mappedBy ="parentR",cascade = CascadeType.ALL)
		private List<Reservation>ListReservation ;*/
	
	

	
	
		/*@ManyToOne
		private admin AdmineP ;*/
	
	
	




}
