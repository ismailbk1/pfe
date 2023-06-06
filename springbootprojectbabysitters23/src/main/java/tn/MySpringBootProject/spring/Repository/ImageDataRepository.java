package tn.MySpringBootProject.spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.MySpringBootProject.spring.entity.imageData;

@Repository
public interface ImageDataRepository extends JpaRepository<imageData, Long> {

    imageData findImageDataByImageName(String imageName);

}
