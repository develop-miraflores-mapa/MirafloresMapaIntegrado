package pe.gob.miraflores.mobile.vo;

import java.io.Serializable;

public class VoxivaVO implements Serializable {

	private static final long serialVersionUID = 1L;

	protected Integer idCaso;

	protected String fechaHoraCreacion;

	protected Integer tipoCaso;

	protected Integer subTipocaso;

	protected String detalle;

	protected Integer idTipoVia;

	protected Integer idVia;

	protected Integer numCuadra;

	protected String longitud;

	protected String latitud;

	protected String userName;

	protected String securityKey;

	protected String idDispositivo;

	public Integer getIdCaso() {
		return idCaso;
	}

	public void setIdCaso(Integer idCaso) {
		this.idCaso = idCaso;
	}

	public String getFechaHoraCreacion() {
		return fechaHoraCreacion;
	}

	public void setFechaHoraCreacion(String fechaHoraCreacion) {
		this.fechaHoraCreacion = fechaHoraCreacion;
	}

	public Integer getTipoCaso() {
		return tipoCaso;
	}

	public void setTipoCaso(Integer tipoCaso) {
		this.tipoCaso = tipoCaso;
	}

	public Integer getSubTipocaso() {
		return subTipocaso;
	}

	public void setSubTipocaso(Integer subTipocaso) {
		this.subTipocaso = subTipocaso;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public Integer getIdTipoVia() {
		return idTipoVia;
	}

	public void setIdTipoVia(Integer idTipoVia) {
		this.idTipoVia = idTipoVia;
	}

	public Integer getIdVia() {
		return idVia;
	}

	public void setIdVia(Integer idVia) {
		this.idVia = idVia;
	}

	public Integer getNumCuadra() {
		return numCuadra;
	}

	public void setNumCuadra(Integer numCuadra) {
		this.numCuadra = numCuadra;
	}

	public String getLongitud() {
		return longitud;
	}

	public void setLongitud(String longitud) {
		this.longitud = longitud;
	}

	public String getLatitud() {
		return latitud;
	}

	public void setLatitud(String latitud) {
		this.latitud = latitud;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getSecurityKey() {
		return securityKey;
	}

	public void setSecurityKey(String securityKey) {
		this.securityKey = securityKey;
	}

	public String getIdDispositivo() {
		return idDispositivo;
	}

	public void setIdDispositivo(String idDispositivo) {
		this.idDispositivo = idDispositivo;
	}

}
