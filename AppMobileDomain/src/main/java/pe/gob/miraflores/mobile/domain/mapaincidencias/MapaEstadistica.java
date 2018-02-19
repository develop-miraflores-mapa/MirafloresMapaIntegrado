package pe.gob.miraflores.mobile.domain.mapaincidencias;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class MapaEstadistica {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.id
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.id_incidencia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer idIncidencia;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.nro_caso_voxiva
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer nroCasoVoxiva;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.id_voxiva
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer idVoxiva;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.cod_unidad
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer codUnidad;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.cod_caso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer codCaso;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.cod_subcaso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer codSubcaso;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.fecha
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date fecha;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.hora
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer hora;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.dia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer dia;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.mes
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer mes;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.anio
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer anio;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.nomb_dia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String nombDia;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.nomb_mes
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String nombMes;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.valor
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer valor;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.cod_estado
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer codEstado;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.cod_subestado
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private Integer codSubestado;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.area
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String area;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.zona
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String zona;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.subzona
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String subzona;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.tpo_via
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String tpoVia;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.nomb_via
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String nombVia;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.cdra
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String cdra;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.coordenadas
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String coordenadas;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.longitud
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String longitud;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.latitud
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String latitud;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.desc_unidad
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String descUnidad;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.desc_caso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String descCaso;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapa.geo_map_estadistica.desc_subcaso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    private String descSubcaso;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.id
     *
     * @return the value of mapa.geo_map_estadistica.id
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.id
     *
     * @param id the value for mapa.geo_map_estadistica.id
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.id_incidencia
     *
     * @return the value of mapa.geo_map_estadistica.id_incidencia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getIdIncidencia() {
        return idIncidencia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.id_incidencia
     *
     * @param idIncidencia the value for mapa.geo_map_estadistica.id_incidencia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setIdIncidencia(Integer idIncidencia) {
        this.idIncidencia = idIncidencia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.nro_caso_voxiva
     *
     * @return the value of mapa.geo_map_estadistica.nro_caso_voxiva
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getNroCasoVoxiva() {
        return nroCasoVoxiva;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.nro_caso_voxiva
     *
     * @param nroCasoVoxiva the value for mapa.geo_map_estadistica.nro_caso_voxiva
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setNroCasoVoxiva(Integer nroCasoVoxiva) {
        this.nroCasoVoxiva = nroCasoVoxiva;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.id_voxiva
     *
     * @return the value of mapa.geo_map_estadistica.id_voxiva
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getIdVoxiva() {
        return idVoxiva;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.id_voxiva
     *
     * @param idVoxiva the value for mapa.geo_map_estadistica.id_voxiva
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setIdVoxiva(Integer idVoxiva) {
        this.idVoxiva = idVoxiva;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.cod_unidad
     *
     * @return the value of mapa.geo_map_estadistica.cod_unidad
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getCodUnidad() {
        return codUnidad;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.cod_unidad
     *
     * @param codUnidad the value for mapa.geo_map_estadistica.cod_unidad
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCodUnidad(Integer codUnidad) {
        this.codUnidad = codUnidad;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.cod_caso
     *
     * @return the value of mapa.geo_map_estadistica.cod_caso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getCodCaso() {
        return codCaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.cod_caso
     *
     * @param codCaso the value for mapa.geo_map_estadistica.cod_caso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCodCaso(Integer codCaso) {
        this.codCaso = codCaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.cod_subcaso
     *
     * @return the value of mapa.geo_map_estadistica.cod_subcaso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getCodSubcaso() {
        return codSubcaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.cod_subcaso
     *
     * @param codSubcaso the value for mapa.geo_map_estadistica.cod_subcaso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCodSubcaso(Integer codSubcaso) {
        this.codSubcaso = codSubcaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.fecha
     *
     * @return the value of mapa.geo_map_estadistica.fecha
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Date getFecha() {
        return fecha;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.fecha
     *
     * @param fecha the value for mapa.geo_map_estadistica.fecha
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.hora
     *
     * @return the value of mapa.geo_map_estadistica.hora
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getHora() {
        return hora;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.hora
     *
     * @param hora the value for mapa.geo_map_estadistica.hora
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setHora(Integer hora) {
        this.hora = hora;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.dia
     *
     * @return the value of mapa.geo_map_estadistica.dia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getDia() {
        return dia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.dia
     *
     * @param dia the value for mapa.geo_map_estadistica.dia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setDia(Integer dia) {
        this.dia = dia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.mes
     *
     * @return the value of mapa.geo_map_estadistica.mes
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getMes() {
        return mes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.mes
     *
     * @param mes the value for mapa.geo_map_estadistica.mes
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setMes(Integer mes) {
        this.mes = mes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.anio
     *
     * @return the value of mapa.geo_map_estadistica.anio
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getAnio() {
        return anio;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.anio
     *
     * @param anio the value for mapa.geo_map_estadistica.anio
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.nomb_dia
     *
     * @return the value of mapa.geo_map_estadistica.nomb_dia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getNombDia() {
        return nombDia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.nomb_dia
     *
     * @param nombDia the value for mapa.geo_map_estadistica.nomb_dia
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setNombDia(String nombDia) {
        this.nombDia = nombDia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.nomb_mes
     *
     * @return the value of mapa.geo_map_estadistica.nomb_mes
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getNombMes() {
        return nombMes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.nomb_mes
     *
     * @param nombMes the value for mapa.geo_map_estadistica.nomb_mes
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setNombMes(String nombMes) {
        this.nombMes = nombMes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.valor
     *
     * @return the value of mapa.geo_map_estadistica.valor
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getValor() {
        return valor;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.valor
     *
     * @param valor the value for mapa.geo_map_estadistica.valor
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setValor(Integer valor) {
        this.valor = valor;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.cod_estado
     *
     * @return the value of mapa.geo_map_estadistica.cod_estado
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getCodEstado() {
        return codEstado;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.cod_estado
     *
     * @param codEstado the value for mapa.geo_map_estadistica.cod_estado
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCodEstado(Integer codEstado) {
        this.codEstado = codEstado;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.cod_subestado
     *
     * @return the value of mapa.geo_map_estadistica.cod_subestado
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public Integer getCodSubestado() {
        return codSubestado;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.cod_subestado
     *
     * @param codSubestado the value for mapa.geo_map_estadistica.cod_subestado
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCodSubestado(Integer codSubestado) {
        this.codSubestado = codSubestado;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.area
     *
     * @return the value of mapa.geo_map_estadistica.area
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getArea() {
        return area;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.area
     *
     * @param area the value for mapa.geo_map_estadistica.area
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setArea(String area) {
        this.area = area;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.zona
     *
     * @return the value of mapa.geo_map_estadistica.zona
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getZona() {
        return zona;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.zona
     *
     * @param zona the value for mapa.geo_map_estadistica.zona
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setZona(String zona) {
        this.zona = zona;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.subzona
     *
     * @return the value of mapa.geo_map_estadistica.subzona
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getSubzona() {
        return subzona;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.subzona
     *
     * @param subzona the value for mapa.geo_map_estadistica.subzona
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setSubzona(String subzona) {
        this.subzona = subzona;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.tpo_via
     *
     * @return the value of mapa.geo_map_estadistica.tpo_via
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getTpoVia() {
        return tpoVia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.tpo_via
     *
     * @param tpoVia the value for mapa.geo_map_estadistica.tpo_via
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setTpoVia(String tpoVia) {
        this.tpoVia = tpoVia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.nomb_via
     *
     * @return the value of mapa.geo_map_estadistica.nomb_via
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getNombVia() {
        return nombVia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.nomb_via
     *
     * @param nombVia the value for mapa.geo_map_estadistica.nomb_via
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setNombVia(String nombVia) {
        this.nombVia = nombVia;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.cdra
     *
     * @return the value of mapa.geo_map_estadistica.cdra
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getCdra() {
        return cdra;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.cdra
     *
     * @param cdra the value for mapa.geo_map_estadistica.cdra
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCdra(String cdra) {
        this.cdra = cdra;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.coordenadas
     *
     * @return the value of mapa.geo_map_estadistica.coordenadas
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getCoordenadas() {
        return coordenadas;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.coordenadas
     *
     * @param coordenadas the value for mapa.geo_map_estadistica.coordenadas
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setCoordenadas(String coordenadas) {
        this.coordenadas = coordenadas;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.longitud
     *
     * @return the value of mapa.geo_map_estadistica.longitud
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getLongitud() {
        return longitud;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.longitud
     *
     * @param longitud the value for mapa.geo_map_estadistica.longitud
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.latitud
     *
     * @return the value of mapa.geo_map_estadistica.latitud
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getLatitud() {
        return latitud;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.latitud
     *
     * @param latitud the value for mapa.geo_map_estadistica.latitud
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setLatitud(String latitud) {
        this.latitud = latitud;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.desc_unidad
     *
     * @return the value of mapa.geo_map_estadistica.desc_unidad
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getDescUnidad() {
        return descUnidad;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.desc_unidad
     *
     * @param descUnidad the value for mapa.geo_map_estadistica.desc_unidad
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setDescUnidad(String descUnidad) {
        this.descUnidad = descUnidad;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.desc_caso
     *
     * @return the value of mapa.geo_map_estadistica.desc_caso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getDescCaso() {
        return descCaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.desc_caso
     *
     * @param descCaso the value for mapa.geo_map_estadistica.desc_caso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setDescCaso(String descCaso) {
        this.descCaso = descCaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapa.geo_map_estadistica.desc_subcaso
     *
     * @return the value of mapa.geo_map_estadistica.desc_subcaso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public String getDescSubcaso() {
        return descSubcaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapa.geo_map_estadistica.desc_subcaso
     *
     * @param descSubcaso the value for mapa.geo_map_estadistica.desc_subcaso
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    public void setDescSubcaso(String descSubcaso) {
        this.descSubcaso = descSubcaso;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_estadistica
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
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
        MapaEstadistica other = (MapaEstadistica) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getIdIncidencia() == null ? other.getIdIncidencia() == null : this.getIdIncidencia().equals(other.getIdIncidencia()))
            && (this.getNroCasoVoxiva() == null ? other.getNroCasoVoxiva() == null : this.getNroCasoVoxiva().equals(other.getNroCasoVoxiva()))
            && (this.getIdVoxiva() == null ? other.getIdVoxiva() == null : this.getIdVoxiva().equals(other.getIdVoxiva()))
            && (this.getCodUnidad() == null ? other.getCodUnidad() == null : this.getCodUnidad().equals(other.getCodUnidad()))
            && (this.getCodCaso() == null ? other.getCodCaso() == null : this.getCodCaso().equals(other.getCodCaso()))
            && (this.getCodSubcaso() == null ? other.getCodSubcaso() == null : this.getCodSubcaso().equals(other.getCodSubcaso()))
            && (this.getFecha() == null ? other.getFecha() == null : this.getFecha().equals(other.getFecha()))
            && (this.getHora() == null ? other.getHora() == null : this.getHora().equals(other.getHora()))
            && (this.getDia() == null ? other.getDia() == null : this.getDia().equals(other.getDia()))
            && (this.getMes() == null ? other.getMes() == null : this.getMes().equals(other.getMes()))
            && (this.getAnio() == null ? other.getAnio() == null : this.getAnio().equals(other.getAnio()))
            && (this.getNombDia() == null ? other.getNombDia() == null : this.getNombDia().equals(other.getNombDia()))
            && (this.getNombMes() == null ? other.getNombMes() == null : this.getNombMes().equals(other.getNombMes()))
            && (this.getValor() == null ? other.getValor() == null : this.getValor().equals(other.getValor()))
            && (this.getCodEstado() == null ? other.getCodEstado() == null : this.getCodEstado().equals(other.getCodEstado()))
            && (this.getCodSubestado() == null ? other.getCodSubestado() == null : this.getCodSubestado().equals(other.getCodSubestado()))
            && (this.getArea() == null ? other.getArea() == null : this.getArea().equals(other.getArea()))
            && (this.getZona() == null ? other.getZona() == null : this.getZona().equals(other.getZona()))
            && (this.getSubzona() == null ? other.getSubzona() == null : this.getSubzona().equals(other.getSubzona()))
            && (this.getTpoVia() == null ? other.getTpoVia() == null : this.getTpoVia().equals(other.getTpoVia()))
            && (this.getNombVia() == null ? other.getNombVia() == null : this.getNombVia().equals(other.getNombVia()))
            && (this.getCdra() == null ? other.getCdra() == null : this.getCdra().equals(other.getCdra()))
            && (this.getCoordenadas() == null ? other.getCoordenadas() == null : this.getCoordenadas().equals(other.getCoordenadas()))
            && (this.getLongitud() == null ? other.getLongitud() == null : this.getLongitud().equals(other.getLongitud()))
            && (this.getLatitud() == null ? other.getLatitud() == null : this.getLatitud().equals(other.getLatitud()))
            && (this.getDescUnidad() == null ? other.getDescUnidad() == null : this.getDescUnidad().equals(other.getDescUnidad()))
            && (this.getDescCaso() == null ? other.getDescCaso() == null : this.getDescCaso().equals(other.getDescCaso()))
            && (this.getDescSubcaso() == null ? other.getDescSubcaso() == null : this.getDescSubcaso().equals(other.getDescSubcaso()));
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_estadistica
     *
     * @mbg.generated Thu Nov 16 14:03:03 COT 2017
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getIdIncidencia() == null) ? 0 : getIdIncidencia().hashCode());
        result = prime * result + ((getNroCasoVoxiva() == null) ? 0 : getNroCasoVoxiva().hashCode());
        result = prime * result + ((getIdVoxiva() == null) ? 0 : getIdVoxiva().hashCode());
        result = prime * result + ((getCodUnidad() == null) ? 0 : getCodUnidad().hashCode());
        result = prime * result + ((getCodCaso() == null) ? 0 : getCodCaso().hashCode());
        result = prime * result + ((getCodSubcaso() == null) ? 0 : getCodSubcaso().hashCode());
        result = prime * result + ((getFecha() == null) ? 0 : getFecha().hashCode());
        result = prime * result + ((getHora() == null) ? 0 : getHora().hashCode());
        result = prime * result + ((getDia() == null) ? 0 : getDia().hashCode());
        result = prime * result + ((getMes() == null) ? 0 : getMes().hashCode());
        result = prime * result + ((getAnio() == null) ? 0 : getAnio().hashCode());
        result = prime * result + ((getNombDia() == null) ? 0 : getNombDia().hashCode());
        result = prime * result + ((getNombMes() == null) ? 0 : getNombMes().hashCode());
        result = prime * result + ((getValor() == null) ? 0 : getValor().hashCode());
        result = prime * result + ((getCodEstado() == null) ? 0 : getCodEstado().hashCode());
        result = prime * result + ((getCodSubestado() == null) ? 0 : getCodSubestado().hashCode());
        result = prime * result + ((getArea() == null) ? 0 : getArea().hashCode());
        result = prime * result + ((getZona() == null) ? 0 : getZona().hashCode());
        result = prime * result + ((getSubzona() == null) ? 0 : getSubzona().hashCode());
        result = prime * result + ((getTpoVia() == null) ? 0 : getTpoVia().hashCode());
        result = prime * result + ((getNombVia() == null) ? 0 : getNombVia().hashCode());
        result = prime * result + ((getCdra() == null) ? 0 : getCdra().hashCode());
        result = prime * result + ((getCoordenadas() == null) ? 0 : getCoordenadas().hashCode());
        result = prime * result + ((getLongitud() == null) ? 0 : getLongitud().hashCode());
        result = prime * result + ((getLatitud() == null) ? 0 : getLatitud().hashCode());
        result = prime * result + ((getDescUnidad() == null) ? 0 : getDescUnidad().hashCode());
        result = prime * result + ((getDescCaso() == null) ? 0 : getDescCaso().hashCode());
        result = prime * result + ((getDescSubcaso() == null) ? 0 : getDescSubcaso().hashCode());
        return result;
    }
}