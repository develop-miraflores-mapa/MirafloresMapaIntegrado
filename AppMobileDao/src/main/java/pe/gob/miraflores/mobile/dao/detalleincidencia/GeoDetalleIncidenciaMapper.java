package pe.gob.miraflores.mobile.dao.detalleincidencia;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.detalleincidencia.GeoDetalleIncidencia;
import pe.gob.miraflores.mobile.domain.detalleincidencia.GeoDetalleIncidenciaCriteria;


public interface GeoDetalleIncidenciaMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    long countByExample(GeoDetalleIncidenciaCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int deleteByExample(GeoDetalleIncidenciaCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int deleteByPrimaryKey(Integer issi);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int insert(GeoDetalleIncidencia record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int insertSelective(GeoDetalleIncidencia record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    List<GeoDetalleIncidencia> selectByExample(GeoDetalleIncidenciaCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    GeoDetalleIncidencia selectByPrimaryKey(Integer issi);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int updateByExampleSelective(@Param("record") GeoDetalleIncidencia record, @Param("example") GeoDetalleIncidenciaCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int updateByExample(@Param("record") GeoDetalleIncidencia record, @Param("example") GeoDetalleIncidenciaCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int updateByPrimaryKeySelective(GeoDetalleIncidencia record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_tetra
     *
     * @mbg.generated Mon Jul 10 12:12:59 COT 2017
     */
    int updateByPrimaryKey(GeoDetalleIncidencia record);
}