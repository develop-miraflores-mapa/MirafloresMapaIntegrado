package pe.gob.miraflores.mobile.dao.catalogo;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import pe.gob.miraflores.mobile.domain.catalogo.Catalogo;
import pe.gob.miraflores.mobile.domain.catalogo.CatalogoCriteria;
import pe.gob.miraflores.mobile.domain.catalogo.CatalogoCustom;


public interface CatalogoMapper {
    /**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	long countByExample(CatalogoCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int deleteByExample(CatalogoCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int deleteByPrimaryKey(Integer ideElemento);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int insert(Catalogo record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int insertSelective(Catalogo record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	List<Catalogo> selectByExample(CatalogoCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	Catalogo selectByPrimaryKey(Integer ideElemento);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int updateByExampleSelective(@Param("record") Catalogo record, @Param("example") CatalogoCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int updateByExample(@Param("record") Catalogo record, @Param("example") CatalogoCriteria example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int updateByPrimaryKeySelective(Catalogo record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table mapa.ctlmelecgo
	 * @mbg.generated  Mon Jul 10 15:03:31 COT 2017
	 */
	int updateByPrimaryKey(Catalogo record);

	List<CatalogoCustom> selectByCustom(CatalogoCriteria example);
    
}