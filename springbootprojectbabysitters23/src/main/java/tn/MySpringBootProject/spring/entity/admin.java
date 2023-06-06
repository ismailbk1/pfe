package tn.MySpringBootProject.spring.entity;

import java.security.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
@DiscriminatorValue("ADMIN")
public class admin {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAdmin ;
	private String nom ;
	private String prenom ;
	private String email ;
	private String password ;
	private String confpassword ;
	private String adresse ;
	
	
	/*@OneToMany(mappedBy ="AdminB")
	private List<babysitter>listBabysitterAdmin= new ArrayList() ;
	
	@OneToMany(mappedBy ="AdmineP")
	private List<Parent>listparent= new ArrayList() ;*/

	



	

	
	
	
	
	


}
