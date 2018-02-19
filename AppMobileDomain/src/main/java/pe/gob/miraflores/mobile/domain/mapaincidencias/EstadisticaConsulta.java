package pe.gob.miraflores.mobile.domain.mapaincidencias;

public class EstadisticaConsulta {
	private Integer codUnidad;
	private Integer codCaso;
	private Integer codSubcaso;
	private String fecDesde;
	private String fecHasta;
	private String area;
	private String zona;
	private String subzona;
	private Integer estado;
	private Integer subestado;
	
	
	public Integer getCodUnidad() {
		return codUnidad;
	}
	public void setCodUnidad(Integer codUnidad) {
		this.codUnidad = codUnidad;
	}
	public Integer getCodCaso() {
		return codCaso;
	}
	public void setCodCaso(Integer codCaso) {
		this.codCaso = codCaso;
	}
	public String getFecDesde() {
		return fecDesde;
	}
	public void setFecDesde(String fecDesde) {
		this.fecDesde = fecDesde;
	}
	public String getFecHasta() {
		return fecHasta;
	}
	public void setFecHasta(String fecHasta) {
		this.fecHasta = fecHasta;
	}
	public Integer getCodSubcaso() {
		return codSubcaso;
	}
	public void setCodSubcaso(Integer codSubcaso) {
		this.codSubcaso = codSubcaso;
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
	public Integer getEstado() {
		return estado;
	}
	public void setEstado(Integer estado) {
		this.estado = estado;
	}
	public Integer getSubestado() {
		return subestado;
	}
	public void setSubestado(Integer subestado) {
		this.subestado = subestado;
	}
	
}
