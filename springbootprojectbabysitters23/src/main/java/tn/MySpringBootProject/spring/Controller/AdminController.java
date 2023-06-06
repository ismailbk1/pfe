package tn.MySpringBootProject.spring.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.MySpringBootProject.spring.Service.AdminService;
import tn.MySpringBootProject.spring.entity.admin;
import tn.MySpringBootProject.spring.entity.babysitter;

@RestController
public class AdminController {
	
		@Autowired 
		AdminService AdmServ ;
		
		@PostMapping(value="/addAdm")
		public admin addAdm(@RequestBody admin adm) {
			return AdmServ.addAdmin(adm);
	}
		
		@PostMapping(value="/testpasswordA")
		public String testpassA(@RequestBody admin adm) {
			return AdmServ.testpassA(adm);}
		

		@PostMapping(value="/testemailAdmin")
		public String testemailA(@RequestBody admin adm) {
			return AdmServ.testemailAdmin(adm);}
		
		@PutMapping(value="/updateAdm/{idAdmin}")
		public admin updateAdm(@RequestBody admin adm,@PathVariable Long idAdmin) {
		return AdmServ.updateAdmin(adm, idAdmin);}
		
		@DeleteMapping(value="/DeleteAdmin/{idAdmin}")
	    public String deleteAdmin(@PathVariable Long idAdmin) {
	    return AdmServ.DeleteAdmin(idAdmin);}
		
		
		@GetMapping(value="/getadresse/{ch}")
		public List<admin> getAdmWaddresse(@PathVariable String ch) {
			return AdmServ.getadmWithadresse(ch);}

		
	

		
}
  