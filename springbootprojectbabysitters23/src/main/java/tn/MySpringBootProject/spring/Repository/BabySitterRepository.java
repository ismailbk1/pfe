package tn.MySpringBootProject.spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import tn.MySpringBootProject.spring.entity.babysitter;

public interface BabySitterRepository extends JpaRepository<babysitter,Long>{
	Boolean existsByEmail(String email); 
	
	babysitter findByAdresse(String adresse);
	
	@Query(value="select* from babysitter b where b.adresse like :cle%", nativeQuery=true)
	List<babysitter>getAllNOUNOUByAdresse(@Param("cle")String cle);
	
	babysitter findByIdbabysitter(Long idbabysitter);


    babysitter findByEmail(String email);
}
