package tn.MySpringBootProject.spring.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class imageData {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long IdImage ;
	private String imageName ;
	private String type ;
	
	@Column(length=420000)
	private byte[] filesize ;
	
	@OneToOne(mappedBy = "img")
	private Parent parentI ;
	
	@OneToOne(mappedBy = "imgD")
	private babysitter babySitterI ;

	public imageData(String imageName, byte[] filesize) {
		super();
		this.imageName = imageName;
		this.filesize = filesize;
	}
	
	
	

}
