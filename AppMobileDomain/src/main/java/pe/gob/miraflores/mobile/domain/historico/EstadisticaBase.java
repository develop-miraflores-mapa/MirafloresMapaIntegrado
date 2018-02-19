package pe.gob.miraflores.mobile.domain.historico;

import java.util.Date;

public class EstadisticaBase {
    private Long idEstad;

    private Integer idIncidencia;

    private Integer tipif;

    private Integer zonif;

    private Integer numer;

    private Integer cdra;

    private Integer hdia;

    private Integer cdia;

    private Integer ndia;

    private Integer cmes;

    private Integer anio;

    private Integer csever;

    private Integer cestad;

    private Integer cmodal;

    private Integer cmotiv;

    private Integer flghall;

    private Integer flgsexo;

    private Integer cmed;

    private Float lat;

    private Float lng;

    private Date fecha;

    private Date freg;

    private String unidad;

    private String caso;

    private String subcaso;

    private String area;

    private String zona;

    private String subzona;

    private String severidad;

    private String estado;

    private String subestado;

    private String modalidad;

    private String via;

    private String ddia;

    private String dmes;

    private String medio;

    public Long getIdEstad() {
        return idEstad;
    }

    public void setIdEstad(Long idEstad) {
        this.idEstad = idEstad;
    }

    public Integer getIdIncidencia() {
        return idIncidencia;
    }

    public void setIdIncidencia(Integer idIncidencia) {
        this.idIncidencia = idIncidencia;
    }

    public Integer getTipif() {
        return tipif;
    }

    public void setTipif(Integer tipif) {
        this.tipif = tipif;
    }

    public Integer getZonif() {
        return zonif;
    }

    public void setZonif(Integer zonif) {
        this.zonif = zonif;
    }

    public Integer getNumer() {
        return numer;
    }

    public void setNumer(Integer numer) {
        this.numer = numer;
    }

    public Integer getCdra() {
        return cdra;
    }

    public void setCdra(Integer cdra) {
        this.cdra = cdra;
    }

    public Integer getHdia() {
        return hdia;
    }

    public void setHdia(Integer hdia) {
        this.hdia = hdia;
    }

    public Integer getCdia() {
        return cdia;
    }

    public void setCdia(Integer cdia) {
        this.cdia = cdia;
    }

    public Integer getNdia() {
        return ndia;
    }

    public void setNdia(Integer ndia) {
        this.ndia = ndia;
    }

    public Integer getCmes() {
        return cmes;
    }

    public void setCmes(Integer cmes) {
        this.cmes = cmes;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public Integer getCsever() {
        return csever;
    }

    public void setCsever(Integer csever) {
        this.csever = csever;
    }

    public Integer getCestad() {
        return cestad;
    }

    public void setCestad(Integer cestad) {
        this.cestad = cestad;
    }

    public Integer getCmodal() {
        return cmodal;
    }

    public void setCmodal(Integer cmodal) {
        this.cmodal = cmodal;
    }

    public Integer getCmotiv() {
        return cmotiv;
    }

    public void setCmotiv(Integer cmotiv) {
        this.cmotiv = cmotiv;
    }

    public Integer getFlghall() {
        return flghall;
    }

    public void setFlghall(Integer flghall) {
        this.flghall = flghall;
    }

    public Integer getFlgsexo() {
        return flgsexo;
    }

    public void setFlgsexo(Integer flgsexo) {
        this.flgsexo = flgsexo;
    }

    public Integer getCmed() {
        return cmed;
    }

    public void setCmed(Integer cmed) {
        this.cmed = cmed;
    }

    public Float getLat() {
        return lat;
    }

    public void setLat(Float lat) {
        this.lat = lat;
    }

    public Float getLng() {
        return lng;
    }

    public void setLng(Float lng) {
        this.lng = lng;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getFreg() {
        return freg;
    }

    public void setFreg(Date freg) {
        this.freg = freg;
    }

    public String getUnidad() {
        return unidad;
    }

    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }

    public String getCaso() {
        return caso;
    }

    public void setCaso(String caso) {
        this.caso = caso;
    }

    public String getSubcaso() {
        return subcaso;
    }

    public void setSubcaso(String subcaso) {
        this.subcaso = subcaso;
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

    public String getSeveridad() {
        return severidad;
    }

    public void setSeveridad(String severidad) {
        this.severidad = severidad;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getSubestado() {
        return subestado;
    }

    public void setSubestado(String subestado) {
        this.subestado = subestado;
    }

    public String getModalidad() {
        return modalidad;
    }

    public void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public String getVia() {
        return via;
    }

    public void setVia(String via) {
        this.via = via;
    }

    public String getDdia() {
        return ddia;
    }

    public void setDdia(String ddia) {
        this.ddia = ddia;
    }

    public String getDmes() {
        return dmes;
    }

    public void setDmes(String dmes) {
        this.dmes = dmes;
    }

    public String getMedio() {
        return medio;
    }

    public void setMedio(String medio) {
        this.medio = medio;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        EstadisticaBase other = (EstadisticaBase) that;
        return (this.getIdEstad() == null ? other.getIdEstad() == null : this.getIdEstad().equals(other.getIdEstad()))
            && (this.getIdIncidencia() == null ? other.getIdIncidencia() == null : this.getIdIncidencia().equals(other.getIdIncidencia()))
            && (this.getTipif() == null ? other.getTipif() == null : this.getTipif().equals(other.getTipif()))
            && (this.getZonif() == null ? other.getZonif() == null : this.getZonif().equals(other.getZonif()))
            && (this.getNumer() == null ? other.getNumer() == null : this.getNumer().equals(other.getNumer()))
            && (this.getCdra() == null ? other.getCdra() == null : this.getCdra().equals(other.getCdra()))
            && (this.getHdia() == null ? other.getHdia() == null : this.getHdia().equals(other.getHdia()))
            && (this.getCdia() == null ? other.getCdia() == null : this.getCdia().equals(other.getCdia()))
            && (this.getNdia() == null ? other.getNdia() == null : this.getNdia().equals(other.getNdia()))
            && (this.getCmes() == null ? other.getCmes() == null : this.getCmes().equals(other.getCmes()))
            && (this.getAnio() == null ? other.getAnio() == null : this.getAnio().equals(other.getAnio()))
            && (this.getCsever() == null ? other.getCsever() == null : this.getCsever().equals(other.getCsever()))
            && (this.getCestad() == null ? other.getCestad() == null : this.getCestad().equals(other.getCestad()))
            && (this.getCmodal() == null ? other.getCmodal() == null : this.getCmodal().equals(other.getCmodal()))
            && (this.getCmotiv() == null ? other.getCmotiv() == null : this.getCmotiv().equals(other.getCmotiv()))
            && (this.getFlghall() == null ? other.getFlghall() == null : this.getFlghall().equals(other.getFlghall()))
            && (this.getFlgsexo() == null ? other.getFlgsexo() == null : this.getFlgsexo().equals(other.getFlgsexo()))
            && (this.getCmed() == null ? other.getCmed() == null : this.getCmed().equals(other.getCmed()))
            && (this.getLat() == null ? other.getLat() == null : this.getLat().equals(other.getLat()))
            && (this.getLng() == null ? other.getLng() == null : this.getLng().equals(other.getLng()))
            && (this.getFecha() == null ? other.getFecha() == null : this.getFecha().equals(other.getFecha()))
            && (this.getFreg() == null ? other.getFreg() == null : this.getFreg().equals(other.getFreg()))
            && (this.getUnidad() == null ? other.getUnidad() == null : this.getUnidad().equals(other.getUnidad()))
            && (this.getCaso() == null ? other.getCaso() == null : this.getCaso().equals(other.getCaso()))
            && (this.getSubcaso() == null ? other.getSubcaso() == null : this.getSubcaso().equals(other.getSubcaso()))
            && (this.getArea() == null ? other.getArea() == null : this.getArea().equals(other.getArea()))
            && (this.getZona() == null ? other.getZona() == null : this.getZona().equals(other.getZona()))
            && (this.getSubzona() == null ? other.getSubzona() == null : this.getSubzona().equals(other.getSubzona()))
            && (this.getSeveridad() == null ? other.getSeveridad() == null : this.getSeveridad().equals(other.getSeveridad()))
            && (this.getEstado() == null ? other.getEstado() == null : this.getEstado().equals(other.getEstado()))
            && (this.getSubestado() == null ? other.getSubestado() == null : this.getSubestado().equals(other.getSubestado()))
            && (this.getModalidad() == null ? other.getModalidad() == null : this.getModalidad().equals(other.getModalidad()))
            && (this.getVia() == null ? other.getVia() == null : this.getVia().equals(other.getVia()))
            && (this.getDdia() == null ? other.getDdia() == null : this.getDdia().equals(other.getDdia()))
            && (this.getDmes() == null ? other.getDmes() == null : this.getDmes().equals(other.getDmes()))
            && (this.getMedio() == null ? other.getMedio() == null : this.getMedio().equals(other.getMedio()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getIdEstad() == null) ? 0 : getIdEstad().hashCode());
        result = prime * result + ((getIdIncidencia() == null) ? 0 : getIdIncidencia().hashCode());
        result = prime * result + ((getTipif() == null) ? 0 : getTipif().hashCode());
        result = prime * result + ((getZonif() == null) ? 0 : getZonif().hashCode());
        result = prime * result + ((getNumer() == null) ? 0 : getNumer().hashCode());
        result = prime * result + ((getCdra() == null) ? 0 : getCdra().hashCode());
        result = prime * result + ((getHdia() == null) ? 0 : getHdia().hashCode());
        result = prime * result + ((getCdia() == null) ? 0 : getCdia().hashCode());
        result = prime * result + ((getNdia() == null) ? 0 : getNdia().hashCode());
        result = prime * result + ((getCmes() == null) ? 0 : getCmes().hashCode());
        result = prime * result + ((getAnio() == null) ? 0 : getAnio().hashCode());
        result = prime * result + ((getCsever() == null) ? 0 : getCsever().hashCode());
        result = prime * result + ((getCestad() == null) ? 0 : getCestad().hashCode());
        result = prime * result + ((getCmodal() == null) ? 0 : getCmodal().hashCode());
        result = prime * result + ((getCmotiv() == null) ? 0 : getCmotiv().hashCode());
        result = prime * result + ((getFlghall() == null) ? 0 : getFlghall().hashCode());
        result = prime * result + ((getFlgsexo() == null) ? 0 : getFlgsexo().hashCode());
        result = prime * result + ((getCmed() == null) ? 0 : getCmed().hashCode());
        result = prime * result + ((getLat() == null) ? 0 : getLat().hashCode());
        result = prime * result + ((getLng() == null) ? 0 : getLng().hashCode());
        result = prime * result + ((getFecha() == null) ? 0 : getFecha().hashCode());
        result = prime * result + ((getFreg() == null) ? 0 : getFreg().hashCode());
        result = prime * result + ((getUnidad() == null) ? 0 : getUnidad().hashCode());
        result = prime * result + ((getCaso() == null) ? 0 : getCaso().hashCode());
        result = prime * result + ((getSubcaso() == null) ? 0 : getSubcaso().hashCode());
        result = prime * result + ((getArea() == null) ? 0 : getArea().hashCode());
        result = prime * result + ((getZona() == null) ? 0 : getZona().hashCode());
        result = prime * result + ((getSubzona() == null) ? 0 : getSubzona().hashCode());
        result = prime * result + ((getSeveridad() == null) ? 0 : getSeveridad().hashCode());
        result = prime * result + ((getEstado() == null) ? 0 : getEstado().hashCode());
        result = prime * result + ((getSubestado() == null) ? 0 : getSubestado().hashCode());
        result = prime * result + ((getModalidad() == null) ? 0 : getModalidad().hashCode());
        result = prime * result + ((getVia() == null) ? 0 : getVia().hashCode());
        result = prime * result + ((getDdia() == null) ? 0 : getDdia().hashCode());
        result = prime * result + ((getDmes() == null) ? 0 : getDmes().hashCode());
        result = prime * result + ((getMedio() == null) ? 0 : getMedio().hashCode());
        return result;
    }
}