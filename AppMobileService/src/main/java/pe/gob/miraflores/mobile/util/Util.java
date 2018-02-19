package pe.gob.miraflores.mobile.util;

import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;

public class Util {

	public static String getUrlRemote(String url) {
		URL urlPage;
		String inputLine = null;
		String strJson = "";
		try {
			
			urlPage = new URL(url);
			
			
			BufferedReader in = new BufferedReader(new InputStreamReader(urlPage.openStream(), "UTF-8"));

			while ((inputLine = in.readLine()) != null){
				if(inputLine!=null){
					strJson+=inputLine;
				}
			}
			in.close();
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			System.err.println("Alerta : "+e.getMessage());
			System.err.println("Causa  : "+e.getCause());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.err.println("Alerta : "+e.getMessage());
			System.err.println("Causa  : "+e.getCause());
		}

		return strJson;

	}
	
	public static int daysBetween(Date fechaIni,Date fechaFin) {
		
		Calendar fechaInicial = new GregorianCalendar();
		fechaInicial.setTime(fechaIni);
		Calendar fechaFinal = new GregorianCalendar();
		fechaFinal.setTime(fechaFin);
		int numdias= 0;
	    while (fechaInicial.before(fechaFinal) || fechaInicial.equals(fechaFinal) ) {
	    	numdias++;
	    	fechaInicial.add(Calendar.DATE, 1);
	    }
	    return numdias;
    }
	
	
	public static void main(String[] args) {
//		String strJson = Util.getUrlRemote("http://digital.miraflores.gob.pe:8080/miraflores/obtenerviasxdescycod.muni?query=larco&tamano=30&like=larco&start=0&limit30");
//		String t = strJson.trim();
//		System.out.println(strJson);
//		System.out.println(t.substring(8, t.lastIndexOf(",")));
		
//		String t = strJson.substring(beginIndex)
		
//		Calendar startDate = Calendar.getInstance();
//		
//		Calendar endDate = Calendar.getInstance();
//		endDate.set(Calendar.DATE, 15);
//		endDate.set(Calendar.YEAR, 2016);
		
//		long dif = Util.daysBetween(startDate.getTime(), endDate.getTime());
//				
//		System.out.println(dif);
		
		Util.getParametrosSesionPadre();
		
	}

	public static boolean validateTokenCierreCalles(String token){
		
		
		try {
			Connection connectionDB2 = (new conectionDB()).conectionDB2();
			
			String sql="select * from PARAMETRO_SISTEMA WHERE IDPARAMETROSISTEMA ='"+MobileConstantes.PARAMETRO_TOKEN_MODULO_CIERRE_CALLES+"' AND VALOR = '"+token+"' ";
			
			Statement stm=connectionDB2.createStatement();
			ResultSet rs=stm.executeQuery(sql);
			int numRows = 0;
			while (rs.next()) {
				numRows++;
			}
			
			rs.close();
			stm.close();
			connectionDB2.close();
			
			if(numRows>0){
				return true; 
			}else{
				return false;
			}
						
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Alerta - Causa->"+e.getCause()+" Mensaje->"+e.getMessage());
			e.printStackTrace();
			return false;
		}
		
	}
	
	public static String getParametrosSesionPadre(){
		
		try {
			Connection connectionDB2 = (new conectionDB()).conectionDB2();
			
			String sql="select * from PARAMETRO_SISTEMA WHERE IDPARAMETROSISTEMA ='"+MobileConstantes.PARAMETRO_URL_PARAMETROS_SESION_PADRE+"' ";
			
			Statement stm=connectionDB2.createStatement();
			ResultSet rs=stm.executeQuery(sql);
			String action = null;
			while (rs.next()) {
				action = rs.getString("VALOR");
			}
			
			rs.close();
			stm.close();
			connectionDB2.close();
			
			String strJson = Util.getUrlRemote(action);
			return strJson;
			
		    
						
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Alerta - Causa->"+e.getCause()+" Mensaje->"+e.getMessage());
			e.printStackTrace();
			return null;
		}
		
	}
	
	private static Object cloneObject(Object obj){
        try{
            Object clone = obj.getClass().newInstance();
            for (Field field : obj.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                if(field.get(obj) == null || Modifier.isFinal(field.getModifiers())){
                    continue;
                }
                if(field.getType().isPrimitive() || field.getType().equals(String.class)
                        || field.getType().getSuperclass().equals(Number.class)
                        || field.getType().equals(Boolean.class)){
                    field.set(clone, field.get(obj));
                }else{
                    Object childObj = field.get(obj);
                    if(childObj == obj){
                        field.set(clone, clone);
                    }else{
                        field.set(clone, cloneObject(field.get(obj)));
                    }
                }
            }
            return clone;
        }catch(Exception e){
            return null;
        }
    }
	
}
