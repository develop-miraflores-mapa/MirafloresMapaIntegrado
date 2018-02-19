package pe.gob.miraflores.mobile.dao.seguridad;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.seguridad.Opcion;
import pe.gob.miraflores.mobile.domain.seguridad.OpcionCriteria;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;

public interface OpcionMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    long countByExample(OpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int deleteByExample(OpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int deleteByPrimaryKey(Integer idOpcion);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int insert(Opcion record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int insertSelective(Opcion record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    List<Opcion> selectByExample(OpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    Opcion selectByPrimaryKey(Integer idOpcion);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByExampleSelective(@Param("record") Opcion record, @Param("example") OpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByExample(@Param("record") Opcion record, @Param("example") OpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByPrimaryKeySelective(Opcion record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByPrimaryKey(Opcion record);
    
    List<UsuarioLogin> getUsuariosRegistroCCNotificacion(Map<String, Object> params);
    
}