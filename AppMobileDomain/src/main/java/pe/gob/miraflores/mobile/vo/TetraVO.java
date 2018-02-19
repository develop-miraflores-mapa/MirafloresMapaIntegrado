package pe.gob.miraflores.mobile.vo;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

public class TetraVO {

    private Integer issi;
    private Integer idRadio;
    private String serie;
	private String tei;
    private String tipoVehiculo;
    private String marcaVehiculo;
    private String modeloVehiculo;
    private String placa;
    private String tipoRadio;
    private String modeloRadio;
    private String area;
    private String zona;
    private String subzona;
    
    private List<TetraPointVO> posicion;

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

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
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

	public List<TetraPointVO> getPosicion() {
		return posicion;
	}

	public void setPosicion(List<TetraPointVO> posicion) {
		this.posicion = posicion;
	}

		
    
    
}
