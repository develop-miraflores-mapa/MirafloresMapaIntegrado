package pe.gob.miraflores.mobile.dao.mapaincidencias;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaSchedule;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaScheduleCriteria;


public interface MapaIncidenciaScheduleMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    long countByExample(MapaIncidenciaScheduleCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int deleteByExample(MapaIncidenciaScheduleCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int insert(MapaIncidenciaSchedule record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int insertSelective(MapaIncidenciaSchedule record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    List<MapaIncidenciaSchedule> selectByExample(MapaIncidenciaScheduleCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    MapaIncidenciaSchedule selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int updateByExampleSelective(@Param("record") MapaIncidenciaSchedule record, @Param("example") MapaIncidenciaScheduleCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int updateByExample(@Param("record") MapaIncidenciaSchedule record, @Param("example") MapaIncidenciaScheduleCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int updateByPrimaryKeySelective(MapaIncidenciaSchedule record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_schedule
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    int updateByPrimaryKey(MapaIncidenciaSchedule record);
}