package tn.MySpringBootProject.spring.entity;



import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Data @NoArgsConstructor @AllArgsConstructor
public class ChatMessage {
	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long idmes;
	
	private String message;
	
	private Long idsender ;

	private Long idreceiver ;

	public ChatMessage(String message, Long idsender, Long idreceiver) {
		super();
		this.message = message;
		this.idsender = idsender;
		this.idreceiver = idreceiver;
	}
	
	

}
