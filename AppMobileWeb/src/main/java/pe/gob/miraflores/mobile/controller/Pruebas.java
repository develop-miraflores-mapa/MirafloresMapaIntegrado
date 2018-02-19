package pe.gob.miraflores.mobile.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;

public class Pruebas {

	public static void main(String[] args) throws NoSuchAlgorithmException {
		
		Date d1 = new Date();
		Timestamp s = new Timestamp(d1.getTime());
		Date d2 = new Date(d1.getTime()+60000);
		Date d2s = new Date(s.getTime()+60000);
		
		long duration  = d2.getTime() - d1.getTime();
		long duration2  = d2s.getTime() - d1.getTime();
		
		long diffInMinutes = TimeUnit.MILLISECONDS.toMinutes(duration);
		long diffInSeconds = TimeUnit.MILLISECONDS.toSeconds(duration);
		
		long diffInMinutes2 = TimeUnit.MILLISECONDS.toMinutes(duration2);
		long diffInSeconds2 = TimeUnit.MILLISECONDS.toSeconds(duration2);
		
		System.out.println("d1: "+d1.getTime());
		System.out.println("d2: "+d2.getTime());
		System.out.println("diffInMinutes: "+diffInMinutes);
		System.out.println("diffInSeconds: "+diffInSeconds);
		
		System.out.println("s: "+s.getTime());
		System.out.println("d2s: "+d2s.getTime());
		System.out.println("diffInMinutes2: "+diffInMinutes2);
		System.out.println("diffInSeconds2: "+diffInSeconds2);
		
		String numero = "01";
		System.out.println("En string: "+numero);
		System.out.println("En integer: "+Integer.parseInt(numero));
		
		String idUserDolphin = "20131377224";
		String cliSalt = "61ae8e580d6c0da753131c5be3d36dd5";
		StringBuilder query = new StringBuilder();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String dActual = sdf.format(new Date());
		
//		query.append(idUserDolphin).append(cliSalt).append(dActual);
		query.append(idUserDolphin).append(cliSalt).append("20180104");
		
		StringBuffer sb = new StringBuffer();
		
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
	        byte[] array = md.digest(query.toString().getBytes());
	        sb = new StringBuffer();
	        for (int i = 0; i < array.length; ++i) {
	          sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
	       }
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		String action = "http://190.102.145.252/api/?token="+sb.toString()+"&format=json";
		System.out.println("URL Dolphin Service: "+action);
		
		
		System.out.println("PRUEBA TIPO 2");
		
		SimpleDateFormat dateFormatAnio = new SimpleDateFormat("yyyy");
		SimpleDateFormat dateFormatMes = new SimpleDateFormat("MM");
		SimpleDateFormat dateFormatDia = new SimpleDateFormat("dd");
		SimpleDateFormat dateFormatHora = new SimpleDateFormat("HH");
		Date fecha = new Date();
		
		Calendar cal = Calendar.getInstance();
		try {
			cal.setTime(fecha);
		} catch (Exception e) {
			System.err.println("Hubo una Excepcion. Puede que incidencia.getFecNotificacion() sea nulo al setear setTime en RegistrarEstadistica()");
			System.err.println("Si es nulo, entonces el campo de fecha y hora de notificacion se resetea en el formulario de registro (incidenciaServiceNew2.js) antes de hacer peticion de grabado");
			System.err.println("La excepcion es la siguiente....");
			e.printStackTrace();
		}
		 
		String[] strNombDia = new String[]{	"DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"};
		
		String[] strNombMes = new String[]{	"ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO",
											"SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE" };
		
		System.out.println("año: "+dateFormatAnio.format(fecha));
		System.out.println("nombre de mes: "+strNombMes[Integer.parseInt(dateFormatMes.format(fecha)) - 1]);
		System.out.println("mes del año: "+(dateFormatMes.format(fecha)));
		System.out.println("nombre de dia: "+strNombDia[cal.get(Calendar.DAY_OF_WEEK) - 1]);
		System.out.println("dia del mes: "+(dateFormatDia.format(fecha)));
		System.out.println("dia de semana: "+(cal.get(Calendar.DAY_OF_WEEK)-1));
		System.out.println("hora del dia: "+dateFormatHora.format(fecha));
		
	}

}
