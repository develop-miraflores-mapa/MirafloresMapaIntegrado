package pe.gob.miraflores.mobile.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

public class TestExcel {

	public static void main(String[] args) {
		
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet("Sample sheet");
				 
		 Row row = sheet.createRow(0);
		 
		 Cell cell1 = row.createCell(0);
		 cell1.setCellValue("PRUEBA 1");
		 
		 Cell cell2 = row.createCell(1);
		 cell2.setCellValue("PRUEBA 2");
		 
		 Cell cell3 = row.createCell(2);
		 cell3.setCellValue("PRUEBA 3");
		 
		 
		 Row row2 = sheet.createRow(1);
		 
		 Cell cell12 = row2.createCell(0);
		 cell12.setCellValue("valor 1");
		 
		 Cell cell22 = row2.createCell(1);
		 cell22.setCellValue("valor 2");
		 
		 Cell cell23 = row2.createCell(2);
		 cell23.setCellValue("valor 3");		 
		
		 
		try {
			
			File temp = File.createTempFile("Export_Cierre_Calles", ".xls");
			System.out.println(temp.getAbsolutePath());
		    FileOutputStream out =  new FileOutputStream(temp);
		    workbook.write(out);
		    out.close();
		    System.out.println("Excel written successfully..");
		     
		} catch (FileNotFoundException e) {
		    e.printStackTrace();
		} catch (IOException e) {
		    e.printStackTrace();
		}
	}
	
}
