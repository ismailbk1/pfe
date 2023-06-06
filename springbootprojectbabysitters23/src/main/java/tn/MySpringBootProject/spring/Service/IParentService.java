package tn.MySpringBootProject.spring.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;


import tn.MySpringBootProject.spring.entity.ChatMessage;
import tn.MySpringBootProject.spring.entity.Parent;


public interface IParentService {
	
	 public Parent addParent (Parent parent);
	 public String testpass (Parent parent);
	 public String testemailParent (Parent parent);
	 public Parent updateParent(Parent parent, Long idParent);
	 public String DeleteParent(Long idParent);
	 public Parent finedprenomParent(String prenom);
	 
	 public Parent uploadParent(MultipartFile imgD,Long idParent) throws IOException;
	 
	 public ChatMessage addChat(Long idParent, Long idbabysitter,ChatMessage chat);
	 
	 
	 public List<Parent>getParent();
	 public Parent finedIdParent(Long idParent);
	 
	
	 
	public Parent findByEmailAndPassword(String email, String password);

    Parent findByEmail(String email);
    
    
    public long compterParents();
    public long compterUtilisateurs();
    
    
}
