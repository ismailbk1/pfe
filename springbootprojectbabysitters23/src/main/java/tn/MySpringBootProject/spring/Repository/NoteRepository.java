package tn.MySpringBootProject.spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import tn.MySpringBootProject.spring.entity.note;

public interface NoteRepository extends JpaRepository<note,Long>{

}
