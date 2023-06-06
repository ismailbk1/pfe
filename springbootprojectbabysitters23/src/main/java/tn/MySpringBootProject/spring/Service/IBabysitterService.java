 package tn.MySpringBootProject.spring.Service;




import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.babysitter;
import tn.MySpringBootProject.spring.entity.note;

public interface IBabysitterService {
	 public babysitter addnounou (babysitter nounou);
	 public String testpass (babysitter nounou);
	 public String testemailBabysitter (babysitter nounou);
	 public babysitter updatebabySitter(babysitter bobo, Long idnounou);
	 public String Deletenounou(Long idnounou);
	 public babysitter finedAdresse(String adresse);
	 public List<babysitter> getNOUNOUWithadresse(String ch) ;
	 
	 public babysitter uploadnounou(MultipartFile imgD, Long idbabysitter) throws IOException ;
	 
	 public List<babysitter>getbabysitter();
	 
	 public babysitter finedIdbabysit(Long idbabysitter) ;
	 
	 public long compterbaby() ;
	 

}
