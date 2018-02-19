package pe.gob.miraflores.mobile.domain.seguridad;

import java.util.Date;

public class RolHistorico {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_rol_hist.cod_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    private Integer codRolHist;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_rol_hist.ide_usuario
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    private Integer ideUsuario;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_rol_hist.ide_rol
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    private Integer ideRol;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_rol_hist.ide_rolrol
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    private Integer ideRolrol;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_rol_hist.fecha
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    private Date fecha;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_rol_hist.cod_rol_hist
     *
     * @return the value of mapa.geo_map_rol_hist.cod_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public Integer getCodRolHist() {
        return codRolHist;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_rol_hist.cod_rol_hist
     *
     * @param codRolHist the value for mapa.geo_map_rol_hist.cod_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setCodRolHist(Integer codRolHist) {
        this.codRolHist = codRolHist;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_rol_hist.ide_usuario
     *
     * @return the value of mapa.geo_map_rol_hist.ide_usuario
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public Integer getIdeUsuario() {
        return ideUsuario;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_rol_hist.ide_usuario
     *
     * @param ideUsuario the value for mapa.geo_map_rol_hist.ide_usuario
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setIdeUsuario(Integer ideUsuario) {
        this.ideUsuario = ideUsuario;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_rol_hist.ide_rol
     *
     * @return the value of mapa.geo_map_rol_hist.ide_rol
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public Integer getIdeRol() {
        return ideRol;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_rol_hist.ide_rol
     *
     * @param ideRol the value for mapa.geo_map_rol_hist.ide_rol
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setIdeRol(Integer ideRol) {
        this.ideRol = ideRol;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_rol_hist.ide_rolrol
     *
     * @return the value of mapa.geo_map_rol_hist.ide_rolrol
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public Integer getIdeRolrol() {
        return ideRolrol;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_rol_hist.ide_rolrol
     *
     * @param ideRolrol the value for mapa.geo_map_rol_hist.ide_rolrol
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setIdeRolrol(Integer ideRolrol) {
        this.ideRolrol = ideRolrol;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_rol_hist.fecha
     *
     * @return the value of mapa.geo_map_rol_hist.fecha
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public Date getFecha() {
        return fecha;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_rol_hist.fecha
     *
     * @param fecha the value for mapa.geo_map_rol_hist.fecha
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
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
        RolHistorico other = (RolHistorico) that;
        return (this.getCodRolHist() == null ? other.getCodRolHist() == null : this.getCodRolHist().equals(other.getCodRolHist()))
            && (this.getIdeUsuario() == null ? other.getIdeUsuario() == null : this.getIdeUsuario().equals(other.getIdeUsuario()))
            && (this.getIdeRol() == null ? other.getIdeRol() == null : this.getIdeRol().equals(other.getIdeRol()))
            && (this.getIdeRolrol() == null ? other.getIdeRolrol() == null : this.getIdeRolrol().equals(other.getIdeRolrol()))
            && (this.getFecha() == null ? other.getFecha() == null : this.getFecha().equals(other.getFecha()));
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getCodRolHist() == null) ? 0 : getCodRolHist().hashCode());
        result = prime * result + ((getIdeUsuario() == null) ? 0 : getIdeUsuario().hashCode());
        result = prime * result + ((getIdeRol() == null) ? 0 : getIdeRol().hashCode());
        result = prime * result + ((getIdeRolrol() == null) ? 0 : getIdeRolrol().hashCode());
        result = prime * result + ((getFecha() == null) ? 0 : getFecha().hashCode());
        return result;
    }
}