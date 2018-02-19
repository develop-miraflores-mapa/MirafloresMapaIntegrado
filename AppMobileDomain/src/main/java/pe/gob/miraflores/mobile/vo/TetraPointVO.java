package pe.gob.miraflores.mobile.vo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class TetraPointVO {

	private Double latitud;
	private Double longitud;
	private Integer presicion;
	private Double velocidad;
	private String direccion;
	private Integer minuto;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private Date fecha;

	
	public Double getLatitud() {
		return latitud;
	}

	public void setLatitud(Double latitud) {
		this.latitud = latitud;
	}

	public Double getLongitud() {
		return longitud;
	}

	public void setLongitud(Double longitud) {
		this.longitud = longitud;
	}

	public Integer getPresicion() {
		return presicion;
	}

	public void setPresicion(Integer presicion) {
		this.presicion = presicion;
	}

	public Double getVelocidad() {
		return velocidad;
	}

	public void setVelocidad(Double velocidad) {
		this.velocidad = velocidad;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Integer getMinuto() {
		return minuto;
	}

	public void setMinuto(Integer minuto) {
		this.minuto = minuto;
	}
	
	
	
}
