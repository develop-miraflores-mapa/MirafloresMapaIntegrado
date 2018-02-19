package pe.gob.miraflores.mobile.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class TestWriteFile {

    public static void main(String[] args) {
//        BufferedWriter writer = null;
//        try {
//            //create a temporary file
//            String timeLog = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
//            File logFile = new File("Log_consumo_waze.txt");
//
//            // This will output the full path where the file will be written to...
//            System.out.println(logFile.getCanonicalPath());
//
//            writer = new BufferedWriter(new FileWriter(logFile));
//            writer.write("Get: generate-jsonformat-waze => "+ timeLog);
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            try {
//                // Close the writer regardless of what happens...
//                writer.close();
//            } catch (Exception e) {
//            }
//        }
    	
    	try
    	{
    		String timeLog = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
    	    File logFile = new File("Log_consumo_waze.txt");
    	    FileWriter fw = new FileWriter(logFile,true); //the true will append the new data
    	    System.out.println(logFile.getCanonicalPath());
    	    fw.write("Get: generate-jsonformat-waze => "+ timeLog+"\n");//appends the string to the file
    	    fw.close();
    	}
    	catch(IOException ioe)
    	{
    	    System.err.println("IOException: " + ioe.getMessage());
    	}
    	
    }
}
