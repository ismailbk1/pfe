package tn.MySpringBootProject.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tn.MySpringBootProject.spring.Service.chatService;
import tn.MySpringBootProject.spring.entity.ChatMessage;
@RestController 
public class ChatController {
	@Autowired
	chatService chatS ;
	
	/*@PostMapping(value="/envoyerMess")
	@MessageMapping("/chat.register")
	@SendTo("/topic/public")
	public ChatMessage register(@Payload ChatMessage chatMessage,SimpMessageHeaderAccessor headerAccessor ,@PathVariable Long  idParent, @PathVariable Long idbabysitter) {
		 headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		 return chatMessage ;
		
	}
	@MessageMapping("/chat.send")
	@SendTo("/topic/public")
	public ChatMessage sendMessage(@Payload ChatMessage chatMessage, @PathVariable Long idbabysitter,@PathVariable Long  idParent) {
		return  chatMessage;
		
	}*/

	@PostMapping("/mess")
	public String chatmess (@RequestBody ChatMessage mess) {
		return chatS.addMessage(mess.getIdsender(), mess.getIdreceiver(), mess.getMessage());
		
	}
	
	@GetMapping("/mess")
	public ResponseEntity<?> getmess (@RequestParam("idR") Long idr, @RequestParam("idS") Long ids) {
		return ResponseEntity.status(200).body(chatS.mess(idr, ids));
	}

}
