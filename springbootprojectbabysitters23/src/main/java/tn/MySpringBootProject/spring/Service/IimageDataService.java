package tn.MySpringBootProject.spring.Service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import tn.MySpringBootProject.spring.entity.imageData;

public interface IimageDataService {
	
	public imageData addimage(MultipartFile img)throws IOException;
	public imageData uploadImage(MultipartFile file) throws IOException;

}
