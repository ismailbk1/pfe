package tn.MySpringBootProject.spring.Controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import tn.MySpringBootProject.spring.Repository.BabySitterRepository;
import tn.MySpringBootProject.spring.Repository.ChatMessageRepository;
import tn.MySpringBootProject.spring.Repository.ParentRepository;
import tn.MySpringBootProject.spring.Service.chatService;
import tn.MySpringBootProject.spring.entity.ChatMessage;
import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.babysitter;
@Slf4j
@RestController 
public class ChatController {
	@Autowired
	chatService chatS ;
	
	@Autowired
	ChatMessageRepository chatMessageRepository;

	@Autowired
	BabySitterRepository babySitterRepository;
@Autowired
ParentRepository parentRepository;
/**/
/**/

@PostMapping("/send")
	public ChatMessage sendMessage(@RequestBody ChatMessage chatMessage ) {
		// Logique pour envoyer un message (enregistrement en base de données, etc.
		log.info("inside the send message {}",chatMessage);
		return chatMessageRepository.save(chatMessage);
	}

	@GetMapping("/messages/{senderId}/{recipientId}")
	public List<ChatMessage> getChatMessages(@PathVariable Long senderId, @PathVariable Long recipientId) {
		// Logique pour récupérer les messages d'une conversation spécifique
		log.info("inside the list message,{}",chatMessageRepository.findByIdsenderAndIdreceiverOrIdsenderAndIdreceiver(
			senderId, recipientId, recipientId, senderId));
		return chatMessageRepository.findByIdsenderAndIdreceiverOrIdsenderAndIdreceiverOrderById(
				senderId, recipientId, recipientId, senderId);
	}
@GetMapping("/messges/listusers/{senderId}")
public List<babysitter>   getlistUsersMessage(@PathVariable Long senderId )
{
	log.info("inside the getlisteusermessage ,{}",senderId);

	List<ChatMessage> listMessage=chatMessageRepository.findByIdsender(senderId);
List<babysitter> listUsersMessage=new ArrayList<>();

	Set<Long> setofIdUser=getSetOfid(listMessage);
	log.info("the setofIdUser ,{}",setofIdUser);

	for(Long id:setofIdUser ){
		listUsersMessage.add(babySitterRepository.findByIdbabysitter(id));
	}
	log.info("the listUsersMessage ,{}",listUsersMessage);
return listUsersMessage;
}

//to babysitter
@GetMapping("/messges/listParent/{senderId}")
public List<Parent> getListparentChat(@PathVariable Long senderId )
{
	log.info("inside the getlisteusermessage ,{}",senderId);

	List<ChatMessage> listMessage=chatMessageRepository.findByIdreceiver(senderId);
List<Parent> listUsersMessage=new ArrayList<>();

	Set<Long> setofIdUserOfParent=getSetOfidOfParent(listMessage);
	log.info("the setofIdUser ,{}",setofIdUserOfParent);

	for(Long id:setofIdUserOfParent ){
		listUsersMessage.add(parentRepository.findByIdParent(id));
	}
	log.info("the listUsersMessage ,{}",listUsersMessage);
return listUsersMessage;
}



private Set<Long> getSetOfid(List<ChatMessage> listMessage ){
Set<Long> setofIdUser=new HashSet<Long>();


if(listMessage.size()!=0){
	for(ChatMessage msg :listMessage){
		setofIdUser.add(msg.getIdreceiver());

	}
	return setofIdUser;
}
return null;


}
private Set<Long> getSetOfidOfParent(List<ChatMessage> listMessage ){
	Set<Long> setofIdUser=new HashSet<Long>();
	
	
	if(listMessage.size()!=0){
		for(ChatMessage msg :listMessage){
			setofIdUser.add(msg.getIdsender());
	
		}
		return setofIdUser;
	}
	return null;
	
	
	}
	



}
