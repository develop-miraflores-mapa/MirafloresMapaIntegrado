package pe.gob.miraflores.mobile.dao.auditoriapeatonal;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import pe.gob.miraflores.mobile.domain.auditoriapeatonal.AuditoriaPeatonal;
import pe.gob.miraflores.mobile.domain.auditoriapeatonal.AuditoriaPeatonalCriteria;

public interface AuditoriaPeatonalMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    long countByExample(AuditoriaPeatonalCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int deleteByExample(AuditoriaPeatonalCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int deleteByPrimaryKey(Integer idFormulario);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int insert(AuditoriaPeatonal record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int insertSelective(AuditoriaPeatonal record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    List<AuditoriaPeatonal> selectByExample(AuditoriaPeatonalCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    AuditoriaPeatonal selectByPrimaryKey(Integer idFormulario);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int updateByExampleSelective(@Param("record") AuditoriaPeatonal record, @Param("example") AuditoriaPeatonalCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int updateByExample(@Param("record") AuditoriaPeatonal record, @Param("example") AuditoriaPeatonalCriteria example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int updateByPrimaryKeySelective(AuditoriaPeatonal record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.ape_formulario
     *
     * @mbg.generated Mon Jul 10 11:38:24 COT 2017
     */
    int updateByPrimaryKey(AuditoriaPeatonal record);

    List<AuditoriaPeatonal> listarAuditoriasConPaginacion(Map<String, Object> params);
    
    int countListarAuditoriasConPaginacion(Map<String, Object> params);
    
}