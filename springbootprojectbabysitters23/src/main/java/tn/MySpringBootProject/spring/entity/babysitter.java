package tn.MySpringBootProject.spring.entity;


import java.io.Serializable;
import java.util.ArrayList;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

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
@DiscriminatorValue("BABYSITTER")
public class babysitter implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idbabysitter ;
	private String nom ;
	private String prenom ;
	private String email ;
	private String password ;
	private String confpassword ;
	private String adresse ;
	private int telephone ;
	private String genre ;
	private String dateN;
	
	private String niveau ;
	private String exp ;
	private String descr ;
	private String image;
	
	
	 @OneToOne
	 private imageData imgD ;

	@ManyToOne
	private Parent parentB ;
	
	/*@OneToMany(mappedBy ="babysitterR",cascade = CascadeType.ALL)
	private List<Reservation>listReservation;*/
	
		
 
	
	/*@ManyToOne
	private admin AdminB ;*/


	
}
