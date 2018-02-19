package pe.gob.miraflores.mobile.dao.seguridad;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioOpcion;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioOpcionCriteria;


public interface UsuarioOpcionMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    long countByExample(UsuarioOpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int deleteByExample(UsuarioOpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int insert(UsuarioOpcion record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int insertSelective(UsuarioOpcion record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    List<UsuarioOpcion> selectByExample(UsuarioOpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    UsuarioOpcion selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByExampleSelective(@Param("record") UsuarioOpcion record, @Param("example") UsuarioOpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByExample(@Param("record") UsuarioOpcion record, @Param("example") UsuarioOpcionCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByPrimaryKeySelective(UsuarioOpcion record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_usuario_opcion
     *
     * @mbg.generated Sat Jul 08 20:02:48 COT 2017
     */
    int updateByPrimaryKey(UsuarioOpcion record);
    
    List<UsuarioLogin> getUsuarioByLogin(Map<String, Object> params);
    
}