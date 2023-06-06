package tn.MySpringBootProject.spring.Service;

import java.io.IOException;

import java.util.ArrayList;
import java.util.List;


import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import tn.MySpringBootProject.spring.Repository.BabySitterRepository;

import tn.MySpringBootProject.spring.Repository.ParentRepository;

import tn.MySpringBootProject.spring.entity.babysitter;
import tn.MySpringBootProject.spring.entity.imageData;
@Slf4j
@Service
public class BabysitterService implements IBabysitterService{
	@Autowired
	BabySitterRepository BabyRep ;
	@Autowired
	ParentRepository UtlRep ;
	@Autowired
	imageDataService ImgServ;
	
	PasswordEncoder passwordEncoder;
	@Override
	public babysitter addnounou(babysitter nounou) {
		try {
		// TODO Auto-generated method stub
			this.passwordEncoder=new BCryptPasswordEncoder();
		     String encodedPassword=this.passwordEncoder.encode(nounou.getPassword());
			 nounou.setPassword(encodedPassword);
			 String encodedPassword1=this.passwordEncoder.encode(nounou.getConfpassword());
			 nounou.setConfpassword(encodedPassword1);
		return  BabyRep.save(nounou);
		} catch (Exception e) {
			e.printStackTrace();
		} return null; 
	}
	@Override
	public String testpass(babysitter nounou) {
		// TODO Auto-generated method stub
		String ch="";
		if(nounou.getPassword().equals(nounou.getConfpassword()))
		{
			BabyRep.save(nounou);
			ch="babysitter ajouter avec succes";
		}
		else {ch= "verifier votre mot de passe ";}
		return ch;
	}
	@Override
	public String testemailBabysitter(babysitter nounou) {
		// TODO Auto-generated method stub
		String ch="";
		if(BabyRep.existsByEmail(nounou.getEmail())) {
			ch="l'email de parent et exist deja ";
			}
		else {BabyRep.save(nounou);
		ch="parent ajouter avec succes";}
		return ch;
	}
	@Override
	public babysitter updatebabySitter(babysitter bobo, Long idnounou) {
		// TODO Auto-generated method stub
		log.info("inside the update babysitter {}",bobo);
		babysitter b =BabyRep.findById(idnounou).get();
			b.setNom(bobo.getNom());
			b.setPrenom(bobo.getPrenom());
		if(bobo.getPassword().equalsIgnoreCase(b.getPassword()) && bobo.getConfpassword().equalsIgnoreCase(b.getConfpassword()))
		{b.setPassword(bobo.getPassword());
			b.setConfpassword(bobo.getConfpassword());
		}else{
			this.passwordEncoder=new BCryptPasswordEncoder();
			String encodedPassword=this.passwordEncoder.encode(bobo.getPassword());
			b.setPassword(encodedPassword);

			b.setConfpassword(encodedPassword);
		}

			b.setEmail(bobo.getEmail());
		b.setTelephone(bobo.getTelephone());

			b.setAdresse(bobo.getAdresse());
			b.setNiveau(bobo.getNiveau());
			return BabyRep.save(b);
		}
	@Override
	public String Deletenounou(Long idnounou) {
		// TODO Auto-generated method stub
		String ch="";
		if (BabyRep.existsById(idnounou)) {
			BabyRep.deleteById(idnounou);
			  ch="le babysitter et supprime ";}
			else
			{ch="le nounou n'existe pas";}
			
			return ch;
		}
	@Override
	public babysitter finedAdresse(String adresse) {
		// TODO Auto-generated method stub
		return BabyRep.findByAdresse(adresse);
	}
	@Override
	public List<babysitter> getNOUNOUWithadresse(String ch) {
		// TODO Auto-generated method stub
		return BabyRep.getAllNOUNOUByAdresse(ch);
	}
	@Override
	public babysitter uploadnounou(MultipartFile imgD, Long idbabysitter) throws IOException {
		// TODO Auto-generated method stub
		babysitter B=BabyRep.findById(idbabysitter).get();
		imageData Im=ImgServ.addimage(imgD);
		B.setImgD(Im);
		
		return BabyRep.save(B);
	
	}
	@Override
	public List<babysitter> getbabysitter() {
		// TODO Auto-generated method stub
		List<babysitter> baby=new ArrayList<>();
		BabyRep.findAll().forEach(babysitter->{baby.add(babysitter);});
		return (baby);
	}
	@Override
	public babysitter finedIdbabysit(Long idbabysitter) {
		// TODO Auto-generated method stub
		return BabyRep.findByIdbabysitter(idbabysitter);
	}


    public babysitter findByEmail(String email) {
		return BabyRep.findByEmail(email);
    }
    
    @Override
	public long compterbaby() {
		 return BabyRep.count();
	}
}
