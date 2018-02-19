package pe.gob.miraflores.mobile.domain.historico;

public class HistoricoInvolucrado {
    private Integer idHistInvoluc;

    private Integer idHist;

    private Integer codInvoluc;

    private Integer idIncidencia;

    private Integer codTpoInvoluc;

    private Integer codTpoDoc;

    private String descTpoInvoluc;

    private String descTpoDoc;

    private String nombInvoluc;

    private String edadInvoluc;

    private String numDocInvoluc;

    private String descObserv;

    private Integer codVehic;

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

    public Integer getIdHistInvoluc() {
        return idHistInvoluc;
    }

    public void setIdHistInvoluc(Integer idHistInvoluc) {
        this.idHistInvoluc = idHistInvoluc;
    }

    public Integer getIdHist() {
        return idHist;
    }

    public void setIdHist(Integer idHist) {
        this.idHist = idHist;
    }

    public Integer getCodInvoluc() {
        return codInvoluc;
    }

    public void setCodInvoluc(Integer codInvoluc) {
        this.codInvoluc = codInvoluc;
    }

    public Integer getIdIncidencia() {
        return idIncidencia;
    }

    public void setIdIncidencia(Integer idIncidencia) {
        this.idIncidencia = idIncidencia;
    }

    public Integer getCodTpoInvoluc() {
        return codTpoInvoluc;
    }

    public void setCodTpoInvoluc(Integer codTpoInvoluc) {
        this.codTpoInvoluc = codTpoInvoluc;
    }

    public Integer getCodTpoDoc() {
        return codTpoDoc;
    }

    public void setCodTpoDoc(Integer codTpoDoc) {
        this.codTpoDoc = codTpoDoc;
    }

    public String getDescTpoInvoluc() {
        return descTpoInvoluc;
    }

    public void setDescTpoInvoluc(String descTpoInvoluc) {
        this.descTpoInvoluc = descTpoInvoluc;
    }

    public String getDescTpoDoc() {
        return descTpoDoc;
    }

    public void setDescTpoDoc(String descTpoDoc) {
        this.descTpoDoc = descTpoDoc;
    }

    public String getNombInvoluc() {
        return nombInvoluc;
    }

    public void setNombInvoluc(String nombInvoluc) {
        this.nombInvoluc = nombInvoluc;
    }

    public String getEdadInvoluc() {
        return edadInvoluc;
    }

    public void setEdadInvoluc(String edadInvoluc) {
        this.edadInvoluc = edadInvoluc;
    }

    public String getNumDocInvoluc() {
        return numDocInvoluc;
    }

    public void setNumDocInvoluc(String numDocInvoluc) {
        this.numDocInvoluc = numDocInvoluc;
    }

    public String getDescObserv() {
        return descObserv;
    }

    public void setDescObserv(String descObserv) {
        this.descObserv = descObserv;
    }

    public Integer getCodVehic() {
        return codVehic;
    }

    public void setCodVehic(Integer codVehic) {
        this.codVehic = codVehic;
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
        HistoricoInvolucrado other = (HistoricoInvolucrado) that;
        return (this.getIdHistInvoluc() == null ? other.getIdHistInvoluc() == null : this.getIdHistInvoluc().equals(other.getIdHistInvoluc()))
            && (this.getIdHist() == null ? other.getIdHist() == null : this.getIdHist().equals(other.getIdHist()))
            && (this.getCodInvoluc() == null ? other.getCodInvoluc() == null : this.getCodInvoluc().equals(other.getCodInvoluc()))
            && (this.getIdIncidencia() == null ? other.getIdIncidencia() == null : this.getIdIncidencia().equals(other.getIdIncidencia()))
            && (this.getCodTpoInvoluc() == null ? other.getCodTpoInvoluc() == null : this.getCodTpoInvoluc().equals(other.getCodTpoInvoluc()))
            && (this.getCodTpoDoc() == null ? other.getCodTpoDoc() == null : this.getCodTpoDoc().equals(other.getCodTpoDoc()))
            && (this.getDescTpoInvoluc() == null ? other.getDescTpoInvoluc() == null : this.getDescTpoInvoluc().equals(other.getDescTpoInvoluc()))
            && (this.getDescTpoDoc() == null ? other.getDescTpoDoc() == null : this.getDescTpoDoc().equals(other.getDescTpoDoc()))
            && (this.getNombInvoluc() == null ? other.getNombInvoluc() == null : this.getNombInvoluc().equals(other.getNombInvoluc()))
            && (this.getEdadInvoluc() == null ? other.getEdadInvoluc() == null : this.getEdadInvoluc().equals(other.getEdadInvoluc()))
            && (this.getNumDocInvoluc() == null ? other.getNumDocInvoluc() == null : this.getNumDocInvoluc().equals(other.getNumDocInvoluc()))
            && (this.getDescObserv() == null ? other.getDescObserv() == null : this.getDescObserv().equals(other.getDescObserv()))
            && (this.getCodVehic() == null ? other.getCodVehic() == null : this.getCodVehic().equals(other.getCodVehic()))
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
        result = prime * result + ((getIdHistInvoluc() == null) ? 0 : getIdHistInvoluc().hashCode());
        result = prime * result + ((getIdHist() == null) ? 0 : getIdHist().hashCode());
        result = prime * result + ((getCodInvoluc() == null) ? 0 : getCodInvoluc().hashCode());
        result = prime * result + ((getIdIncidencia() == null) ? 0 : getIdIncidencia().hashCode());
        result = prime * result + ((getCodTpoInvoluc() == null) ? 0 : getCodTpoInvoluc().hashCode());
        result = prime * result + ((getCodTpoDoc() == null) ? 0 : getCodTpoDoc().hashCode());
        result = prime * result + ((getDescTpoInvoluc() == null) ? 0 : getDescTpoInvoluc().hashCode());
        result = prime * result + ((getDescTpoDoc() == null) ? 0 : getDescTpoDoc().hashCode());
        result = prime * result + ((getNombInvoluc() == null) ? 0 : getNombInvoluc().hashCode());
        result = prime * result + ((getEdadInvoluc() == null) ? 0 : getEdadInvoluc().hashCode());
        result = prime * result + ((getNumDocInvoluc() == null) ? 0 : getNumDocInvoluc().hashCode());
        result = prime * result + ((getDescObserv() == null) ? 0 : getDescObserv().hashCode());
        result = prime * result + ((getCodVehic() == null) ? 0 : getCodVehic().hashCode());
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