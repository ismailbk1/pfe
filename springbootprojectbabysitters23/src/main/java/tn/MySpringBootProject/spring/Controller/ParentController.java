package tn.MySpringBootProject.spring.Controller;

import java.io.IOException;

import java.util.List;

import javax.print.DocFlavor.STRING;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import tn.MySpringBootProject.spring.Service.ParentService;
import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.babysitter;

@CrossOrigin(origins="localhost:4200")
@RestController

public class ParentController {
	@Autowired 
	ParentService utlServ ;
	
	
	@PostMapping(value="/addparent")
	public Parent addparent(@RequestBody Parent prt) {
		return utlServ.addParent(prt);
		
	}
	@PostMapping(value="/testpass")
	public String testpass(@RequestBody Parent parent) {
		return utlServ.testpass(parent);
	}
	@PostMapping(value="/testemail")
	public String testemail(@RequestBody Parent prt) {
		return utlServ.testemailParent(prt);
		
	}
	@PutMapping(value="/updateparent/{idParent}")
	public Parent updateParent(@RequestBody Parent prt,@PathVariable Long idParent) {
	return utlServ.updateParent(prt, idParent);
    }
   

    @DeleteMapping(value="/Deleteparent/{idParent}")
    public String deleteParent(@PathVariable Long idParent) {
    return utlServ.DeleteParent(idParent);}
     

    @GetMapping(value="/finedprenom/{prenom}")
    public Parent finedprenom(@PathVariable String prenom) {
	return utlServ.finedprenomParent(prenom);
    }
    @PostMapping(value="addParentImg/{idParent}")
    public Parent addparentImage(@RequestParam("file")MultipartFile img,@PathVariable long idParent) throws IOException {
    	
    	return utlServ.uploadParent(img, idParent);
    }
    
    @GetMapping(value="/listep")
    public List<Parent> getallparent() {
        return utlServ.getParent();
    }
    
   
    
    @GetMapping(value="/finedid/{idParent}")
    public Parent fined(@PathVariable Long idParent) {
	return utlServ.finedIdParent(idParent);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginPrt(@RequestBody Parent parent) {
        String email = parent.getEmail();
        String password = parent.getPassword();

        Parent Prt = utlServ.findByEmailAndPassword(email, password);
        if (Prt!=null) {
        	
            return ResponseEntity.ok().build();
           
        } else {
           
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
    @GetMapping("/compter")
    public long compterParents() {
    return utlServ.compterParents(); }
     
    @GetMapping("/compter1")
    public long compterUtilisateurs() {
        return utlServ.compterUtilisateurs();
    }
    
}