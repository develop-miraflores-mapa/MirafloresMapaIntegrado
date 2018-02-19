package pe.gob.miraflores.mobile.util;


import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.io.FileUtils;

public class FileUtil {

	public static void guardarFileInPath(byte[] fileData,String fileName,String path) throws Exception{
		
		File directorio = new File(path);
		if (!directorio.exists()) {
			directorio.mkdirs();
		}
		
		FileOutputStream fileOut = new FileOutputStream(path+fileName);
		BufferedOutputStream buffer = new BufferedOutputStream(fileOut);
		buffer.write(fileData);
		buffer.flush();
		buffer.close();
		
	}
	
	public static void copyFile(File source,File target){
		try {
		    FileUtils.copyDirectory(source, target);
		} catch (IOException e) {
		    e.printStackTrace();
		}
	}
	
	public static void moveFile(File afile,File bfile){

	   	InputStream inStream = null;
		OutputStream outStream = null;
			
	    	try{
	    		
	    	    inStream = new FileInputStream(afile);
	    	    outStream = new FileOutputStream(bfile);
	        	
	    	    byte[] buffer = new byte[1024];
	    		
	    	    int length;
	    	    //copy the file content in bytes 
	    	    while ((length = inStream.read(buffer)) > 0){
	    	  
	    	    	outStream.write(buffer, 0, length);
	    	 
	    	    }
	    	 
	    	    inStream.close();
	    	    outStream.close();
	    	    
	    	    if(afile.exists()){
	    	    	afile.delete();
	    	    }
	    	    
	    	}catch(IOException e){
	    	    e.printStackTrace();
	    	}
	}
	
	public static boolean eliminarArchivo(String path) {

		File f = new File(path);

		if (f.delete()) {
			return true;
		} else {
			return false;
		}
	}
	
}
