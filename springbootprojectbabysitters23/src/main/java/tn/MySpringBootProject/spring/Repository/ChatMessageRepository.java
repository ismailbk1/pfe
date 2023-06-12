package tn.MySpringBootProject.spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.MySpringBootProject.spring.entity.ChatMessage;



public interface ChatMessageRepository  extends JpaRepository<ChatMessage,Long>{
	
	
public List<ChatMessage> findByIdsenderAndIdreceiverOrIdsenderAndIdreceiver(Long idreceiver ,Long idcender,Long idcender1,Long idreceiver1);

public List<ChatMessage> findByIdsender(Long senderId);

public List<ChatMessage> findByIdreceiver(Long senderId);

public List<ChatMessage> findByIdsenderAndIdreceiverOrIdsenderAndIdreceiverOrderById(Long senderId, Long recipientId,
        Long recipientId2, Long senderId2);




}
