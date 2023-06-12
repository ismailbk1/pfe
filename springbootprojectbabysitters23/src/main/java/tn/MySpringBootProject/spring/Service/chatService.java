package tn.MySpringBootProject.spring.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.MySpringBootProject.spring.Repository.ChatMessageRepository;
import tn.MySpringBootProject.spring.entity.ChatMessage;

@Service
public class chatService {
	
	@Autowired
	ChatMessageRepository chatR ;
	
	/*public String addMessage(Long sender,Long reciver,String message) {
		
		return chatR.save(new ChatMessage(message,sender,reciver)).getMessage();
		
		
	}
	
	public List<ChatMessage>mess(Long idreciver ,Long idcender) {
		 
		return chatR.findByIdreceiverAndIdsenderOrIdreceiverAndIdsender(idreciver, idcender,idcender ,idreciver);
		
		 
	} */

}
