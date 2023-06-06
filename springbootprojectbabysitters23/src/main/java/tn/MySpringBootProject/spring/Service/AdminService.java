package tn.MySpringBootProject.spring.Service;

import java.util.List;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.MySpringBootProject.spring.Repository.AdminRepository;

import tn.MySpringBootProject.spring.entity.admin;


@Service
public class AdminService implements IAdminService {
	@Autowired
	AdminRepository AdmRep ;
	


	PasswordEncoder passwordEncoder;
	@Override
	public admin addAdmin(admin adm) {
		// TODO Auto-generated method stub
	 this.passwordEncoder=new BCryptPasswordEncoder();
     String encodedPassword=this.passwordEncoder.encode(adm.getPassword());
	 adm.setPassword(encodedPassword);
	 String encodedPassword1=this.passwordEncoder.encode(adm.getConfpassword());
	 adm.setConfpassword(encodedPassword1);
		return AdmRep.save(adm);
	}
	@Override
	public String testpassA(admin adm) {
		// TODO Auto-generated method stub
		String ch="";
		if(adm.getPassword().equals(adm.getConfpassword()))
		{
			AdmRep.save(adm);
			ch="admin ajouter avec succes";
		}
		else {ch= "verifier votre mot de passe ";}
		return ch;
	}
	@Override
	public String testemailAdmin(admin adm) {
		// TODO Auto-generated method stub
		
			// TODO Auto-generated method stub
			String ch="";
			if(AdmRep.existsByEmail(adm.getEmail())) {
				ch="l'email   exist deja ";
				}
			else {AdmRep.save(adm);
			ch="parent ajouter avec succes";}
			return ch;
		}
	@Override
	public admin updateAdmin(admin adm, Long idAdm) {
		// TODO Auto-generated method stub
		admin p =AdmRep.findById(idAdm).get();
		p.setNom(adm.getNom());
		p.setPrenom(adm.getPrenom());
		p.setEmail(adm.getEmail());
		p.setPassword(adm.getPassword());
		p.setConfpassword(adm.getConfpassword());
		p.setAdresse(adm.getAdresse());
		
		
		return AdmRep.save(p);

	}
	@Override
	public String DeleteAdmin(Long idAdm) {
		// TODO Auto-generated method stub
		String ch="";
		if (AdmRep.existsById(idAdm)) {
			AdmRep.deleteById(idAdm);
			  ch="Admin  supprime ";}
			else
			{ch=" admin'existe pas";}
			
			return ch;
	}
	@Override
	public List<admin> getadmWithadresse(String ch) {
		// TODO Auto-generated method stub
		return AdmRep.getAlladminByAdresse(ch);
	}


	public admin findByEmail(String email) {
		return AdmRep.findByEmail(email);
	}
	
	
	}

	
