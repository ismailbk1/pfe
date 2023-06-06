package tn.MySpringBootProject.spring.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import tn.MySpringBootProject.spring.Repository.BabySitterRepository;
import tn.MySpringBootProject.spring.Repository.ChatMessageRepository;
import tn.MySpringBootProject.spring.Repository.ParentRepository;
import tn.MySpringBootProject.spring.entity.ChatMessage;
import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.Reservation;
import tn.MySpringBootProject.spring.entity.babysitter;
import tn.MySpringBootProject.spring.entity.imageData;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import tn.MySpringBootProject.spring.Repository.ChatMessageRepository;
import tn.MySpringBootProject.spring.Repository.ParentRepository;
import tn.MySpringBootProject.spring.entity.ChatMessage;
import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.Reservation;
import tn.MySpringBootProject.spring.entity.babysitter;
import tn.MySpringBootProject.spring.entity.imageData;

@Service
public class ParentService implements IParentService {
	@Autowired
	ParentRepository UtlRep ;
	
	@Autowired
	BabySitterRepository BabyRep ;
	
	@Autowired
	ChatMessageRepository ChatRep ;
	

	@Autowired
	imageDataService ImgServ;
	
	
	PasswordEncoder passwordEncoder;
	
	
	@Override
	public Parent addParent(Parent parent) {
		// TODO Auto-generated method stub

		    this.passwordEncoder=new BCryptPasswordEncoder();
		    String encodedPassword=this.passwordEncoder.encode(parent.getPassword());
		    parent.setPassword(encodedPassword);
		    String encodedPassword1=this.passwordEncoder.encode(parent.getConfpassword());
		    parent.setConfpassword(encodedPassword1);
			return  UtlRep.save(parent);


	}
	@Override
	public String testpass(Parent parent) {
		
			// TODO Auto-generated method stub
			String ch="";
			if(parent.getPassword().equals(parent.getConfpassword()))
			{
				UtlRep.save(parent);
				ch="le parent ajouter avec succes";
			}
			else {ch= "verifier votre mot de passe ";}
			return ch;
		
	}
	@Override
	public String testemailParent(Parent parent) {
		// TODO Auto-generated method stub
		String ch="";
		if(UtlRep.existsByEmail(parent.getEmail())) {
			ch="l'email de parent et exist deja ";
			}
		else {UtlRep.save(parent);
		ch="parent ajouter avec succes";}
		return ch;
		
	}
	@Override
	public Parent updateParent(Parent parent, Long idParent) {
		// TODO Auto-generated method stub
       Parent p =UtlRep.findById(idParent).get();
		p.setNom(parent.getNom());
		p.setPrenom(parent.getPrenom());
		p.setEmail(parent.getEmail());
		if(parent.getPassword().equalsIgnoreCase(p.getPassword()) && parent.getConfpassword().equalsIgnoreCase(p.getConfpassword()))
		{p.setPassword(parent.getPassword());
		p.setConfpassword(parent.getConfpassword());
		}else{
			this.passwordEncoder=new BCryptPasswordEncoder();
			String encodedPassword=this.passwordEncoder.encode(parent.getPassword());
			p.setPassword(encodedPassword);

			p.setConfpassword(encodedPassword);
		}
		p.setAdresse(parent.getAdresse());
		p.setTelephone(parent.getTelephone());
		p.setNbrEnfant(parent.getNbrEnfant());
		p.setGenre(parent.getGenre());
		return UtlRep.save(p);
	}
	@Override
	public String DeleteParent(Long idParent) {
		// TODO Auto-generated method stub
		String ch="";
		if (UtlRep.existsById(idParent)) {
		  UtlRep.deleteById(idParent);
		  ch="le parent et supprime ";}
		else
		{ch="le parent n'existe pas";}
		
		return ch;
	}
	@Override
	public Parent finedprenomParent(String prenom) {
		// TODO Auto-generated method stub
		return UtlRep.findByPrenom(prenom);
	}
	@Override
	public Parent uploadParent(MultipartFile imgD, Long idParent) throws IOException {
		// TODO Auto-generated method stub
		
		Parent Pt=UtlRep.findById(idParent).get();
		imageData Im=ImgServ.addimage(imgD);
		Pt.setImg(Im);
		
		return UtlRep.save(Pt);
	}
	
	
	@Override
	public ChatMessage addChat(Long idParent, Long idbabysitter, ChatMessage chat) {
		// TODO Auto-generated method stub
		Parent parent=UtlRep.findById(idParent).get();
		babysitter baby=BabyRep.findById(idbabysitter).get();

		
		return ChatRep.save(chat);}
	
	@Override
	public List<Parent> getParent() {
		// TODO Auto-generated method stub
		List<Parent> pr=new ArrayList<>();
		UtlRep.findAll().forEach(Parent->{pr.add(Parent);});
		return pr;
	}
	
	
	@Override
	public Parent finedIdParent(Long idParent) {
		// TODO Auto-generated method stub
		return UtlRep.findByIdParent(idParent);
	}
	@Override
	public Parent findByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return UtlRep.findByEmailAndPassword(email,password);
	}

	@Override
	public Parent findByEmail(String email) {
return UtlRep.findByEmail(email);
	}
	@Override
	public long compterParents() {
		 return UtlRep.count();
	}
	@Override
	public long compterUtilisateurs() {
		long countParents = UtlRep.count();
	    long countBabysitters = BabyRep.count();

	    return countParents + countBabysitters;}
		
	}
	
