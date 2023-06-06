package tn.MySpringBootProject.spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.MySpringBootProject.spring.entity.ChatMessage;



public interface ChatMessageRepository  extends JpaRepository<ChatMessage,Long>{
	
	
public List<ChatMessage> findByIdreceiverAndIdsenderOrIdreceiverAndIdsender(Long idreceiver ,Long idcender,Long idcender1,Long idreceiver1);
	
	

}
