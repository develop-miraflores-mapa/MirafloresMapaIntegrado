package pe.gob.miraflores.mobile.service.mapaincidencias.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestMapa {

	public static void main(String[] args) {
		Date fecha = new Date(System.currentTimeMillis());
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy");
		SimpleDateFormat dateFormatMes = new SimpleDateFormat("MM");
		System.out.println("fecha tipo date"+fecha);
		System.out.println("año actual "+Integer.parseInt(dateFormat.format(fecha)));
		System.out.println("mes actual "+Integer.parseInt(dateFormatMes.format(fecha)));
		
		
		Calendar now = Calendar.getInstance();
		 
		System.out.println("Fecha actual : " + (now.get(Calendar.MONTH) + 1)
						+ "-"
						+ now.get(Calendar.DATE)
						+ "-"
						+ now.get(Calendar.YEAR));
 
		// Array con los dias de la semana
		String[] strDays = new String[]{
						"Domingo",
						"Lunes",
						"Martes",
						"Miercoles",
						"Jueves",
						"Viernes",
						"Sabado"};
 
		// El dia de la semana inicia en el 1 mientras que el array empieza en el 0
		System.out.println("Hoy es : " + strDays[now.get(Calendar.DAY_OF_WEEK) - 1]);
		System.out.println("Hoy es : " +now.get(Calendar.DAY_OF_WEEK));

	}

}
