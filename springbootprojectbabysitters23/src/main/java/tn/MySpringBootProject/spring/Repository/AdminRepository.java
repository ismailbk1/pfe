package tn.MySpringBootProject.spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import tn.MySpringBootProject.spring.entity.admin;
import tn.MySpringBootProject.spring.entity.babysitter;


public interface AdminRepository  extends JpaRepository<admin,Long>{
	Boolean existsByEmail(String email);
	
	@Query(value="select* from admin a where a.adresse like :cle%", nativeQuery=true)
	List<admin>getAlladminByAdresse(@Param("cle")String cle);


    admin findByEmail(String email);
}
  