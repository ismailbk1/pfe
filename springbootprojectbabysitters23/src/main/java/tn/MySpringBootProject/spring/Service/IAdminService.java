package tn.MySpringBootProject.spring.Service;

import java.util.List;

import tn.MySpringBootProject.spring.entity.admin;
import tn.MySpringBootProject.spring.entity.babysitter;


public interface IAdminService {
	public admin addAdmin(admin adm);
	 public String testpassA (admin adm);
	 public String testemailAdmin (admin adm);
	 public admin updateAdmin(admin adm, Long idAdm);
	 public String DeleteAdmin(Long idAdm);
	 public List<admin>getadmWithadresse(String ch);
	 
}
