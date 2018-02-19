package pe.gob.miraflores.mobile.vo;

import java.io.Serializable;

import pe.gob.miraflores.mobile.domain.detalleincidencia.GeoDetalleIncidencia;

public class RadioTetraVO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private String serie;
	private String tei;
	private Integer issi;
	private String longitud;
	private String latitude;
	private Integer presicion;
	private String velocidad;
	private String direccion;
	private String estado;
	private String fecha;
	private GeoDetalleIncidencia detalle;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSerie() {
		return serie;
	}

	public void setSerie(String serie) {
		this.serie = serie;
	}

	public String getTei() {
		return tei;
	}

	public void setTei(String tei) {
		this.tei = tei;
	}

	public Integer getIssi() {
		return issi;
	}

	public void setIssi(Integer issi) {
		this.issi = issi;
	}

	public String getLongitud() {
		return longitud;
	}

	public void setLongitud(String longitud) {
		this.longitud = longitud;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public Integer getPresicion() {
		return presicion;
	}

	public void setPresicion(Integer presicion) {
		this.presicion = presicion;
	}

	public String getVelocidad() {
		return velocidad;
	}

	public void setVelocidad(String velocidad) {
		this.velocidad = velocidad;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public GeoDetalleIncidencia getDetalle() {
		return detalle;
	}

	public void setDetalle(GeoDetalleIncidencia detalle) {
		this.detalle = detalle;
	}

}
