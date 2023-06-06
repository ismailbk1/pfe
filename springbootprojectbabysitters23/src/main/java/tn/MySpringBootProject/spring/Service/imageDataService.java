package tn.MySpringBootProject.spring.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import tn.MySpringBootProject.spring.Repository.ImageDataRepository;
import tn.MySpringBootProject.spring.entity.imageData;

@Service
public class imageDataService implements IimageDataService {
    @Autowired
    ImageDataRepository ImgRep ;
	/*@Override
	public imageData addimage(MultipartFile img) throws IOException {
		// TODO Auto-generated method stub
		System.out.println("taille de fichier "+img.getBytes().length);
		imageData im=new imageData(img.getOriginalFilename(),compressBytes(img.getBytes()));
		String path="C:/projetPFE/projetPFE/src/assets/filefront/";
		Path pt=Paths.get(path+img.getOriginalFilename());
		Files.copy(img.getInputStream(),pt,StandardCopyOption.REPLACE_EXISTING) ;
		
		return ImgRep.save(im);
	}
	
	//compress the image bytes before storing it in the database 
	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();
		ByteArrayOutputStream outputStream =new ByteArrayOutputStream(data.length);
		byte[] buffer=new byte [1024];
		while (!deflater.finished()) {
			int count =deflater.deflate(buffer);
			outputStream.write(buffer,0,count);}
		try {
			outputStream.close();
		} catch (IOException e) {
			
		}System.out.println("Compressed image byte size"+outputStream.toByteArray().length);
		return outputStream.toByteArray();	
	}
	
	//uncompress the image bytes before returning it to the angular application 

	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater=new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream =new ByteArrayOutputStream(data.length);
		byte[] buffer=new byte [1024];
		try {
		while (!inflater.finished()) {
		int count =inflater.inflate(buffer);
		outputStream.write(buffer,0,count);}
		outputStream.close();	
		} catch (IOException ioe) {
		} catch (DataFormatException e) {	
		}
		return outputStream.toByteArray();}*/

	@Override
	public imageData addimage(MultipartFile img) throws IOException {
		return null;
	}

	@Override
	public imageData uploadImage(MultipartFile file) throws IOException {
		imageData data = new imageData();
		data.setImageName(file.getOriginalFilename());
		data.setType(file.getContentType());
		data.setFilesize(file.getBytes());
		imageData imageData = ImgRep.save(data);
		if (imageData != null) {
			return imageData;
		}
		return null;
	}
	
	
		
	 public byte[] downloadImage(String fileName) {
	        imageData dbImageData = ImgRep.findImageDataByImageName(fileName);
	        byte[] images = dbImageData.getFilesize();
	        return images;
	    }
		
		
	}
	

