package pe.gob.miraflores.mobile.util;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

public class ImagenUtil {

	public static String adjuntarArchivo(String path, String fileName, byte[] fileData) {
		try {
			int posicExt = fileName.lastIndexOf(".");
			String extension = fileName.substring(posicExt);
			String nombrearchivo = "";
			boolean existe = false;
			File f = new File(path);
			if (f.exists()) {
				do {
					nombrearchivo = ImagenUtil.generarAleatorio(999999999) + "" + extension;
					File[] ficheros = f.listFiles();
					for (int x = 0; x < ficheros.length; x++) {
						if (ficheros[x].getName().equalsIgnoreCase(nombrearchivo)) {
							existe = true;
							break;
						}
					}
					System.out.println(existe);
				} while (existe);
				FileOutputStream fileOut = new FileOutputStream(path + ImagenUtil.validarInputCadena(nombrearchivo));
				File ff = new File(path);
				File ff1 = new File(path + ImagenUtil.validarInputCadena(nombrearchivo));
				BufferedOutputStream buffer = new BufferedOutputStream(fileOut);
				buffer.write(fileData);
				buffer.flush();
				buffer.close();
			}

			return nombrearchivo;
		} catch (Exception e) {
			e.printStackTrace();
			return "";

		}

	}

	public static long generarAleatorio(int cant) {
		long valorDado = (long) Math.floor(Math.random() * cant + 1);
		return valorDado;
	}

	public static String validarInputCadena(String cadena) {

		String cadenacorregida = cadena;

		cadenacorregida = cadenacorregida.replace("%", "");
		cadenacorregida = cadenacorregida.replace("\"", "\\\"");
		cadenacorregida = cadenacorregida.replace("&", "");
		cadenacorregida = cadenacorregida.replace("'", "");
		cadenacorregida = cadenacorregida.replace("ñ", "n");
		cadenacorregida = cadenacorregida.replace("Ñ", "N");
		cadenacorregida = cadenacorregida.replace("á", "a");
		cadenacorregida = cadenacorregida.replace("é", "e");
		cadenacorregida = cadenacorregida.replace("í", "i");
		cadenacorregida = cadenacorregida.replace("ó", "o");
		cadenacorregida = cadenacorregida.replace("ú", "u");
		cadenacorregida = cadenacorregida.replace("Á", "A");
		cadenacorregida = cadenacorregida.replace("É", "E");
		cadenacorregida = cadenacorregida.replace("Í", "I");
		cadenacorregida = cadenacorregida.replace("Ó", "O");
		cadenacorregida = cadenacorregida.replace("Ú", "U");
		cadenacorregida = cadenacorregida.replace(" ", "_");
		cadenacorregida = cadenacorregida.replace("-", "_");
		cadenacorregida = cadenacorregida.replace("Ü", "u");
		cadenacorregida = cadenacorregida.replace("ü", "u");
		cadenacorregida = cadenacorregida.replace("°", "ro.");

		return cadenacorregida;
	}

}
