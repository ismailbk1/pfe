 package tn.MySpringBootProject.spring.Controller;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.StandardCopyOption;
import tn.MySpringBootProject.spring.Repository.BabySitterRepository;
import tn.MySpringBootProject.spring.Service.BabysitterService;
import tn.MySpringBootProject.spring.Service.imageDataService;
import tn.MySpringBootProject.spring.entity.babysitter;
@CrossOrigin(origins="localhost:4200")
@RestController
@Slf4j
public class BabySitterController {
	public static final String DIRECTORY = "src/main/resources/files/products";

	@Autowired 
	BabysitterService BabyServ ;
	@Autowired
	BabySitterRepository babySitterRepository;
	PasswordEncoder passwordEncoder;
/*	@PostMapping(value="/addbabysitter")
	public babysitter addbabysitter(@RequestBody babysitter bab) {
		return BabyServ.addnounou(bab);
}*/
@Value("${upload.dir}")// Get the directory path from application.properties
private String uploadDir;
	@PostMapping(value="/addbabysitter")
	public ResponseEntity<String> addBabysitter(@RequestParam("file") MultipartFile file, @RequestParam("babysitterData") String babysitterData)throws IOException  {
		// Traitez le fichier image ici (par exemple, enregistrez-le sur le serveur)
		// Utilisez file.getInputStream() pour accéder au contenu du fichier
log.info("inside the addbabysitter {}",file);
		ObjectMapper objectMapper = new ObjectMapper();
		babysitter babysitter = null;
		try {
			babysitter = objectMapper.readValue(babysitterData, babysitter.class);
		} catch (IOException e) {
			e.printStackTrace();
		}

		if (file.isEmpty() || babysitter == null) {
			// Une erreur s'est produite lors du téléchargement de l'image ou des données du babysitter sont manquantes
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors du téléchargement de l'image ou des données manquantes");
		}

		// Ajoutez l'image à l'entité Babysitter
		babysitter.setImage(file.getOriginalFilename());
		this.passwordEncoder=new BCryptPasswordEncoder();
		String encodedPassword=this.passwordEncoder.encode(babysitter.getPassword());
		babysitter.setPassword(encodedPassword);
		String encodedPassword1=this.passwordEncoder.encode(babysitter.getConfpassword());
		babysitter.setConfpassword(encodedPassword1);
		String filename = file.getOriginalFilename();
		// Save the file to the file system
		Path filePath = Paths.get(uploadDir + "/" + filename);
		Files.createDirectories(filePath.getParent());
		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
		// Effectuez les actions nécessaires avec le babysitter et l'image (par exemple, enregistrez-les en base de données)
		babysitter savedBabysitter = babySitterRepository.save(babysitter);

		if (savedBabysitter != null) {
			return ResponseEntity.ok("Babysitter ajouté avec succès");
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de l'ajout du babysitter");
		}
	}
	
	@PostMapping(value="/testpassword")
	public String testpass(@RequestBody babysitter baby) {
		return BabyServ.testpass(baby);}
	
	@PostMapping(value="/testemailBabyS")
	public String testemail(@RequestBody babysitter nounou) {
		return BabyServ.testemailBabysitter(nounou);}
	
	@PutMapping(value="/updateBaby/{idbabysitter}")
	public babysitter updatenounou(@RequestBody babysitter bobo,@PathVariable Long idbabysitter) {
	return BabyServ.updatebabySitter(bobo, idbabysitter);}
	
	@DeleteMapping(value="/Deletebabysitter/{idbabysitter}")
    public String deletenounou(@PathVariable Long idbabysitter) {
    return BabyServ.Deletenounou(idbabysitter);}
   
	
	@GetMapping(value="/finedadresse/{adresse}")
    public babysitter finedprenom(@PathVariable String adresse) {
	return BabyServ.finedAdresse(adresse);
    }
	
	@GetMapping(value="/getadresseN/{ch}")
	public List<babysitter> getNOUNOUWaddresse(@PathVariable String ch) {
		return BabyServ.getNOUNOUWithadresse(ch);}
	
	@PostMapping(value="addNounouImg/{idbabysitter}")
    public babysitter addNounouImage(@RequestParam("file")MultipartFile img,@PathVariable("idbabysitter") long idbabysitter) throws IOException {
    	
    	return BabyServ.uploadnounou(img, idbabysitter);}
	
	
	 @GetMapping(value="/listeAllbaby")
	    public List<babysitter> getallbabysitter() {
	        return BabyServ.getbabysitter();
	    }
	    
	    @GetMapping(value="/finedidbaby/{idbabysitter}")
	    public babysitter fined(@PathVariable Long idbabysitter) {
		return BabyServ.finedIdbabysit(idbabysitter);
	    }
	    
	    
	   /* @GetMapping("/image/{filename}")
	    public ResponseEntity<?> getImage(@PathVariable String filename) {
	        return ResponseEntity.ok()
	                .contentType(MediaType.IMAGE_JPEG)
	                .contentType(MediaType.IMAGE_PNG).body(imageDataService.downloadImage(filename));
	    }*/
	    
	    @GetMapping("/compter3")
	    public long compterbabysitter() {
	    return BabyServ.compterbaby(); }
	  
    }


	


