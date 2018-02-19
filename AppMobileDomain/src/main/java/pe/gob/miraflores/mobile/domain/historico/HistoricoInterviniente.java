package pe.gob.miraflores.mobile.domain.historico;

public class HistoricoInterviniente {
    private Integer idHistInterv;

    private Integer idHist;

    private Integer codInterv;

    private Integer idIncidencia;

    private Integer codTpoInterv;

    private Integer codTpoPuesto;

    private String descTpoInterv;

    private String descTpoPuesto;

    private String nombInterv;

    private String apoyoPolicial;

    private String estReg;

    private String infoInterv;

    public Integer getIdHistInterv() {
        return idHistInterv;
    }

    public void setIdHistInterv(Integer idHistInterv) {
        this.idHistInterv = idHistInterv;
    }

    public Integer getIdHist() {
        return idHist;
    }

    public void setIdHist(Integer idHist) {
        this.idHist = idHist;
    }

    public Integer getCodInterv() {
        return codInterv;
    }

    public void setCodInterv(Integer codInterv) {
        this.codInterv = codInterv;
    }

    public Integer getIdIncidencia() {
        return idIncidencia;
    }

    public void setIdIncidencia(Integer idIncidencia) {
        this.idIncidencia = idIncidencia;
    }

    public Integer getCodTpoInterv() {
        return codTpoInterv;
    }

    public void setCodTpoInterv(Integer codTpoInterv) {
        this.codTpoInterv = codTpoInterv;
    }

    public Integer getCodTpoPuesto() {
        return codTpoPuesto;
    }

    public void setCodTpoPuesto(Integer codTpoPuesto) {
        this.codTpoPuesto = codTpoPuesto;
    }

    public String getDescTpoInterv() {
        return descTpoInterv;
    }

    public void setDescTpoInterv(String descTpoInterv) {
        this.descTpoInterv = descTpoInterv;
    }

    public String getDescTpoPuesto() {
        return descTpoPuesto;
    }

    public void setDescTpoPuesto(String descTpoPuesto) {
        this.descTpoPuesto = descTpoPuesto;
    }

    public String getNombInterv() {
        return nombInterv;
    }

    public void setNombInterv(String nombInterv) {
        this.nombInterv = nombInterv;
    }

    public String getApoyoPolicial() {
        return apoyoPolicial;
    }

    public void setApoyoPolicial(String apoyoPolicial) {
        this.apoyoPolicial = apoyoPolicial;
    }

    public String getEstReg() {
        return estReg;
    }

    public void setEstReg(String estReg) {
        this.estReg = estReg;
    }

    public String getInfoInterv() {
        return infoInterv;
    }

    public void setInfoInterv(String infoInterv) {
        this.infoInterv = infoInterv;
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
        HistoricoInterviniente other = (HistoricoInterviniente) that;
        return (this.getIdHistInterv() == null ? other.getIdHistInterv() == null : this.getIdHistInterv().equals(other.getIdHistInterv()))
            && (this.getIdHist() == null ? other.getIdHist() == null : this.getIdHist().equals(other.getIdHist()))
            && (this.getCodInterv() == null ? other.getCodInterv() == null : this.getCodInterv().equals(other.getCodInterv()))
            && (this.getIdIncidencia() == null ? other.getIdIncidencia() == null : this.getIdIncidencia().equals(other.getIdIncidencia()))
            && (this.getCodTpoInterv() == null ? other.getCodTpoInterv() == null : this.getCodTpoInterv().equals(other.getCodTpoInterv()))
            && (this.getCodTpoPuesto() == null ? other.getCodTpoPuesto() == null : this.getCodTpoPuesto().equals(other.getCodTpoPuesto()))
            && (this.getDescTpoInterv() == null ? other.getDescTpoInterv() == null : this.getDescTpoInterv().equals(other.getDescTpoInterv()))
            && (this.getDescTpoPuesto() == null ? other.getDescTpoPuesto() == null : this.getDescTpoPuesto().equals(other.getDescTpoPuesto()))
            && (this.getNombInterv() == null ? other.getNombInterv() == null : this.getNombInterv().equals(other.getNombInterv()))
            && (this.getApoyoPolicial() == null ? other.getApoyoPolicial() == null : this.getApoyoPolicial().equals(other.getApoyoPolicial()))
            && (this.getEstReg() == null ? other.getEstReg() == null : this.getEstReg().equals(other.getEstReg()))
            && (this.getInfoInterv() == null ? other.getInfoInterv() == null : this.getInfoInterv().equals(other.getInfoInterv()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getIdHistInterv() == null) ? 0 : getIdHistInterv().hashCode());
        result = prime * result + ((getIdHist() == null) ? 0 : getIdHist().hashCode());
        result = prime * result + ((getCodInterv() == null) ? 0 : getCodInterv().hashCode());
        result = prime * result + ((getIdIncidencia() == null) ? 0 : getIdIncidencia().hashCode());
        result = prime * result + ((getCodTpoInterv() == null) ? 0 : getCodTpoInterv().hashCode());
        result = prime * result + ((getCodTpoPuesto() == null) ? 0 : getCodTpoPuesto().hashCode());
        result = prime * result + ((getDescTpoInterv() == null) ? 0 : getDescTpoInterv().hashCode());
        result = prime * result + ((getDescTpoPuesto() == null) ? 0 : getDescTpoPuesto().hashCode());
        result = prime * result + ((getNombInterv() == null) ? 0 : getNombInterv().hashCode());
        result = prime * result + ((getApoyoPolicial() == null) ? 0 : getApoyoPolicial().hashCode());
        result = prime * result + ((getEstReg() == null) ? 0 : getEstReg().hashCode());
        result = prime * result + ((getInfoInterv() == null) ? 0 : getInfoInterv().hashCode());
        return result;
    }
}