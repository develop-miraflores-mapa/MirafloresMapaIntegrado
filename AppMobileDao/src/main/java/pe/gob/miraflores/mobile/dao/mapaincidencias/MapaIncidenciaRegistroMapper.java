package pe.gob.miraflores.mobile.dao.mapaincidencias;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistroCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ReachFeed;
import pe.gob.miraflores.mobile.domain.tetratimelap.TetraTimelap;
import pe.gob.miraflores.mobile.vo.TetraVO;

public interface MapaIncidenciaRegistroMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    long countByExample(MapaIncidenciaRegistroCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int deleteByExample(MapaIncidenciaRegistroCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int deleteByPrimaryKey(Integer idIncidencia);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int insert(MapaIncidenciaRegistro record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int insertSelective(MapaIncidenciaRegistro record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    List<MapaIncidenciaRegistro> selectByExample(MapaIncidenciaRegistroCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    MapaIncidenciaRegistro selectByPrimaryKey(Integer idIncidencia);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int updateByExampleSelective(@Param("record") MapaIncidenciaRegistro record, @Param("example") MapaIncidenciaRegistroCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int updateByExample(@Param("record") MapaIncidenciaRegistro record, @Param("example") MapaIncidenciaRegistroCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int updateByPrimaryKeySelective(MapaIncidenciaRegistro record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_incidencia
     *
     * @mbg.generated Tue Feb 13 17:12:21 COT 2018
     */
    int updateByPrimaryKey(MapaIncidenciaRegistro record);
    
    
// METODOS PERSONALIZADOS
    
// 	public List<MapaIncidenciasRegistro> listarIncidenciasConPaginacion(Map<String, Object> params);
// 	int countListarIncidenciasConPaginacion(Map<String, Object> params);
// 	public List<MapaIncidenciasRegistro> cierreCallesPorVencer(Map<String, Object> params);
// 	public List<MapaIncidenciasRegistro> cierreCallesPorIniciar(Map<String, Object> params);
// 	public List<MapaIncidenciasRegistro> listarIncidenciasGenericConPaginacion(Map<String, Object> params);
// 	public int countListarIncidenciasGenericConPaginacion(Map<String, Object> params);
// 	int updateByPrimaryKeySelectiveVoxiva(MapaIncidenciasRegistro record);
// 	public List<MapaIncidenciasRegistro> listarIncidenciasWazeService();
// 	public List<MapaIncidenciasRegistro> selectListWazeService(Map<String, Object> params);
// 	public List<MapaIncidenciaRegistro> selectVoxivaListMap(Map<String, Object> params);
    
    public List<Map<String, Object>> selectCamarasVideoVigilancia(Map<String, Object> params);
 	
// 	List<Map<String, Object>> selectBandejaIncidencias2();
// 	long getId();
 	
// 	public MapaIncidenciaRegistro selectIncidenciaPorId(Integer id);
 	
// 	List<Map<String, Object>> selectJson();
// 	List<Map<String, Object>> selectJson2(Map<String, Object> w);
// 	List<Map<String, Object>> selectDynamicJson(Map<String, Object> params);
 	
 	//SELECCIONAR ALERTAS
 	public List<MapaIncidenciaRegistro> selectMapaIncidencia(Map<String, Object> params);
 	public List<MapaIncidenciaRegistro> selectMapaIncidenciaWithImage(Map<String, Object> params);
 	public List<MapaIncidenciaRegistro> selectMapaIncidenciaTimelap(Map<String, Object> params);
 	public List<MapaIncidenciaRegistro> selectMapaIncidenciaExposicion(Map<String, Object> params);
 	
 	
 	
 	public List<Map<String, Object>> selectListaExposicion(Map<String, Object> params);
 	
 	
 	
	public List<MapaIncidenciaRegistro> selectBandejaIncidencia(Map<String, Object> params);
	public List<MapaIncidenciaRegistro> selectBandejaIncidenciaTodo(Map<String, Object> params);
	
	public List<MapaIncidenciaRegistro> selectBandejaIncidenciaPaginada(Map<String, Object> params);
	public int countBandejaIncidenciaPaginada(Map<String, Object> params);
// 	public int countBandejaIncidencia(Map<String, Object> params);
 	
 	List<Map<String, Object>> selectAllData(Map<String, Object> params);
 	
 	List<Map<String, Object>> selectBandejaExportacion(Map<String, Object> params);
 	List<Map<String, Object>> selectBandejaExportacion2(Map<String, Object> params);
 	List<Map<String, Object>> selectBandejaExportacionInterviniente(Map<String, Object> params);
 	List<Map<String, Object>> selectBandejaExportacionInvolucrado(Map<String, Object> params);
 	List<Map<String, Object>> selectBandejaExportacionVehiculo(Map<String, Object> params);
 	
 	
 	
 	// ACCSESO A OBJETOS DE DATOS PARA ESTADISTICAS
 	
 	
 	List<Map<String, Object>> selectData(Map<String, Object> params);
 	List<Map<String, Object>> selectSerie(Map<String, Object> params);
// 	List<Map<String, Object>> selectSerie(EstadisticaConsulta ec);
 	List<Map<String, Object>> selectPie(Map<String, Object> params);
 	List<Map<String, Object>> selectPieNull();
 	List<Map<String, Object>> selectHeatmap(Map<String, Object> params);
 	List<Map<String, Object>> selectFrecuenciaDia(Map<String, Object> params);
 	List<Map<String, Object>> selectFrecuenciaHora(Map<String, Object> params);
 	List<Map<String, Object>> selectTopZona(Map<String, Object> params);
 	
 	
 	public int reasignarOperador(Map<String, Object> params);
 	
 	public List<TetraTimelap> selectTetraTimelap(Map<String, Object> params);
 	public List<TetraTimelap> selectTetraTimelapTest();
 	public List<Map<String, Object>> selectTetraList();
 	public List<Map<String, Object>> selectTetraPosition(Map<String, Object> params);
 	
 	public void deleteFlgParte(Integer idIncidencia);
 	
 	//REGISTRAR INCIDENCIA

	//ACTUALIZAR INCIDENCIA
 	
 	//DESACTIVAR INCIDENCIA
 
}