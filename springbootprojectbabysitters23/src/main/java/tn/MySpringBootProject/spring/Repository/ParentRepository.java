package tn.MySpringBootProject.spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import tn.MySpringBootProject.spring.entity.Parent;


public interface ParentRepository extends JpaRepository<Parent,Long> {
   
	Boolean existsByEmail(String email); 
	Parent findByPrenom(String prenom);
	Parent  findByIdParent(Long idParent);
	Parent  findByEmail(String email); 	
	Parent findBypassword(Object password);
	Parent findByEmailAndPassword(String email, String password);
	
	

}
