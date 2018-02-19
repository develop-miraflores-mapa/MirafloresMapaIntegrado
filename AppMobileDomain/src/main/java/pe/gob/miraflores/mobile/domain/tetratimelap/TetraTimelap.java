package pe.gob.miraflores.mobile.domain.tetratimelap;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class TetraTimelap {
	private Integer issi;
	private Integer idRadio;
	private String serie;
	private String tei;
	private String latitud;
	private String longitud;
	private String presicion;
	private String velocidad;
	private String direccion;
	private String estado;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private Date fecha;
	
	private String idInfo;
	private String nroAsignacion;
	private String area;
	private String nroInterno;
	private String tipoVehiculo;
	private String marcaVehiculo;
	private String modeloVehiculo;
	private String placa;
	private String tipoRadio;
	private String modeloRadio;
	private String zona;
	private String subzona;
	
	public Integer getIssi() {
		return issi;
	}
	public void setIssi(Integer issi) {
		this.issi = issi;
	}
	public Integer getIdRadio() {
		return idRadio;
	}
	public void setIdRadio(Integer idRadio) {
		this.idRadio = idRadio;
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
	public String getLatitud() {
		return latitud;
	}
	public void setLatitud(String latitud) {
		this.latitud = latitud;
	}
	public String getLongitud() {
		return longitud;
	}
	public void setLongitud(String longitud) {
		this.longitud = longitud;
	}
	public String getPresicion() {
		return presicion;
	}
	public void setPresicion(String presicion) {
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
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getIdInfo() {
		return idInfo;
	}
	public void setIdInfo(String idInfo) {
		this.idInfo = idInfo;
	}
	public String getNroAsignacion() {
		return nroAsignacion;
	}
	public void setNroAsignacion(String nroAsignacion) {
		this.nroAsignacion = nroAsignacion;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getNroInterno() {
		return nroInterno;
	}
	public void setNroInterno(String nroInterno) {
		this.nroInterno = nroInterno;
	}
	public String getTipoVehiculo() {
		return tipoVehiculo;
	}
	public void setTipoVehiculo(String tipoVehiculo) {
		this.tipoVehiculo = tipoVehiculo;
	}
	public String getMarcaVehiculo() {
		return marcaVehiculo;
	}
	public void setMarcaVehiculo(String marcaVehiculo) {
		this.marcaVehiculo = marcaVehiculo;
	}
	public String getModeloVehiculo() {
		return modeloVehiculo;
	}
	public void setModeloVehiculo(String modeloVehiculo) {
		this.modeloVehiculo = modeloVehiculo;
	}
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public String getTipoRadio() {
		return tipoRadio;
	}
	public void setTipoRadio(String tipoRadio) {
		this.tipoRadio = tipoRadio;
	}
	public String getModeloRadio() {
		return modeloRadio;
	}
	public void setModeloRadio(String modeloRadio) {
		this.modeloRadio = modeloRadio;
	}
	public String getZona() {
		return zona;
	}
	public void setZona(String zona) {
		this.zona = zona;
	}
	public String getSubzona() {
		return subzona;
	}
	public void setSubzona(String subzona) {
		this.subzona = subzona;
	}
	
	
}
