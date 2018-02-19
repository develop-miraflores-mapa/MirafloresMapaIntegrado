package pe.gob.miraflores.mobile.domain.historico;

public class HistoricoVehiculo {
    private Integer idHistVehic;

    private Integer idHist;

    private Integer codVehic;

    private Integer idIncidencia;

    private Integer codClaseVehic;

    private Integer codMarcaVehic;

    private Integer codColorVehic;

    private String claseVehic;

    private String marcaVehic;

    private String modelVehic;

    private String placaVehic;

    private String colorVehic;

    private String anioVehic;

    private String estReg;

    public Integer getIdHistVehic() {
        return idHistVehic;
    }

    public void setIdHistVehic(Integer idHistVehic) {
        this.idHistVehic = idHistVehic;
    }

    public Integer getIdHist() {
        return idHist;
    }

    public void setIdHist(Integer idHist) {
        this.idHist = idHist;
    }

    public Integer getCodVehic() {
        return codVehic;
    }

    public void setCodVehic(Integer codVehic) {
        this.codVehic = codVehic;
    }

    public Integer getIdIncidencia() {
        return idIncidencia;
    }

    public void setIdIncidencia(Integer idIncidencia) {
        this.idIncidencia = idIncidencia;
    }

    public Integer getCodClaseVehic() {
        return codClaseVehic;
    }

    public void setCodClaseVehic(Integer codClaseVehic) {
        this.codClaseVehic = codClaseVehic;
    }

    public Integer getCodMarcaVehic() {
        return codMarcaVehic;
    }

    public void setCodMarcaVehic(Integer codMarcaVehic) {
        this.codMarcaVehic = codMarcaVehic;
    }

    public Integer getCodColorVehic() {
        return codColorVehic;
    }

    public void setCodColorVehic(Integer codColorVehic) {
        this.codColorVehic = codColorVehic;
    }

    public String getClaseVehic() {
        return claseVehic;
    }

    public void setClaseVehic(String claseVehic) {
        this.claseVehic = claseVehic;
    }

    public String getMarcaVehic() {
        return marcaVehic;
    }

    public void setMarcaVehic(String marcaVehic) {
        this.marcaVehic = marcaVehic;
    }

    public String getModelVehic() {
        return modelVehic;
    }

    public void setModelVehic(String modelVehic) {
        this.modelVehic = modelVehic;
    }

    public String getPlacaVehic() {
        return placaVehic;
    }

    public void setPlacaVehic(String placaVehic) {
        this.placaVehic = placaVehic;
    }

    public String getColorVehic() {
        return colorVehic;
    }

    public void setColorVehic(String colorVehic) {
        this.colorVehic = colorVehic;
    }

    public String getAnioVehic() {
        return anioVehic;
    }

    public void setAnioVehic(String anioVehic) {
        this.anioVehic = anioVehic;
    }

    public String getEstReg() {
        return estReg;
    }

    public void setEstReg(String estReg) {
        this.estReg = estReg;
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
        HistoricoVehiculo other = (HistoricoVehiculo) that;
        return (this.getIdHistVehic() == null ? other.getIdHistVehic() == null : this.getIdHistVehic().equals(other.getIdHistVehic()))
            && (this.getIdHist() == null ? other.getIdHist() == null : this.getIdHist().equals(other.getIdHist()))
            && (this.getCodVehic() == null ? other.getCodVehic() == null : this.getCodVehic().equals(other.getCodVehic()))
            && (this.getIdIncidencia() == null ? other.getIdIncidencia() == null : this.getIdIncidencia().equals(other.getIdIncidencia()))
            && (this.getCodClaseVehic() == null ? other.getCodClaseVehic() == null : this.getCodClaseVehic().equals(other.getCodClaseVehic()))
            && (this.getCodMarcaVehic() == null ? other.getCodMarcaVehic() == null : this.getCodMarcaVehic().equals(other.getCodMarcaVehic()))
            && (this.getCodColorVehic() == null ? other.getCodColorVehic() == null : this.getCodColorVehic().equals(other.getCodColorVehic()))
            && (this.getClaseVehic() == null ? other.getClaseVehic() == null : this.getClaseVehic().equals(other.getClaseVehic()))
            && (this.getMarcaVehic() == null ? other.getMarcaVehic() == null : this.getMarcaVehic().equals(other.getMarcaVehic()))
            && (this.getModelVehic() == null ? other.getModelVehic() == null : this.getModelVehic().equals(other.getModelVehic()))
            && (this.getPlacaVehic() == null ? other.getPlacaVehic() == null : this.getPlacaVehic().equals(other.getPlacaVehic()))
            && (this.getColorVehic() == null ? other.getColorVehic() == null : this.getColorVehic().equals(other.getColorVehic()))
            && (this.getAnioVehic() == null ? other.getAnioVehic() == null : this.getAnioVehic().equals(other.getAnioVehic()))
            && (this.getEstReg() == null ? other.getEstReg() == null : this.getEstReg().equals(other.getEstReg()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getIdHistVehic() == null) ? 0 : getIdHistVehic().hashCode());
        result = prime * result + ((getIdHist() == null) ? 0 : getIdHist().hashCode());
        result = prime * result + ((getCodVehic() == null) ? 0 : getCodVehic().hashCode());
        result = prime * result + ((getIdIncidencia() == null) ? 0 : getIdIncidencia().hashCode());
        result = prime * result + ((getCodClaseVehic() == null) ? 0 : getCodClaseVehic().hashCode());
        result = prime * result + ((getCodMarcaVehic() == null) ? 0 : getCodMarcaVehic().hashCode());
        result = prime * result + ((getCodColorVehic() == null) ? 0 : getCodColorVehic().hashCode());
        result = prime * result + ((getClaseVehic() == null) ? 0 : getClaseVehic().hashCode());
        result = prime * result + ((getMarcaVehic() == null) ? 0 : getMarcaVehic().hashCode());
        result = prime * result + ((getModelVehic() == null) ? 0 : getModelVehic().hashCode());
        result = prime * result + ((getPlacaVehic() == null) ? 0 : getPlacaVehic().hashCode());
        result = prime * result + ((getColorVehic() == null) ? 0 : getColorVehic().hashCode());
        result = prime * result + ((getAnioVehic() == null) ? 0 : getAnioVehic().hashCode());
        result = prime * result + ((getEstReg() == null) ? 0 : getEstReg().hashCode());
        return result;
    }
}