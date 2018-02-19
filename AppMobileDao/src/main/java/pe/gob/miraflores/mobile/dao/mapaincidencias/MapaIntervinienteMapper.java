package pe.gob.miraflores.mobile.dao.mapaincidencias;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaInterviniente;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIntervinienteCriteria;

public interface MapaIntervinienteMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	long countByExample(MapaIntervinienteCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int deleteByExample(MapaIntervinienteCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int deleteByPrimaryKey(Integer codInterv);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int insert(MapaInterviniente record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int insertSelective(MapaInterviniente record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	List<MapaInterviniente> selectByExample(MapaIntervinienteCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	MapaInterviniente selectByPrimaryKey(Integer codInterv);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int updateByExampleSelective(@Param("record") MapaInterviniente record,
			@Param("example") MapaIntervinienteCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int updateByExample(@Param("record") MapaInterviniente record, @Param("example") MapaIntervinienteCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int updateByPrimaryKeySelective(MapaInterviniente record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.geo_map_interviniente
	 * @mbg.generated  Tue Jul 18 09:08:56 COT 2017
	 */
	int updateByPrimaryKey(MapaInterviniente record);
	
}