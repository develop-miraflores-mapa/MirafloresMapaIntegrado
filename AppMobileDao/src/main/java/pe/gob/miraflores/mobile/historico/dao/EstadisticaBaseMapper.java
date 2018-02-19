package pe.gob.miraflores.mobile.historico.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pe.gob.miraflores.mobile.domain.historico.EstadisticaBase;
import pe.gob.miraflores.mobile.domain.historico.EstadisticaBaseCriteria;

public interface EstadisticaBaseMapper {
    long countByExample(EstadisticaBaseCriteria example);

    int deleteByExample(EstadisticaBaseCriteria example);

    int deleteByPrimaryKey(Long idEstad);

    int insert(EstadisticaBase record);

    int insertSelective(EstadisticaBase record);

    List<EstadisticaBase> selectByExample(EstadisticaBaseCriteria example);

    EstadisticaBase selectByPrimaryKey(Long idEstad);

    int updateByExampleSelective(@Param("record") EstadisticaBase record, @Param("example") EstadisticaBaseCriteria example);

    int updateByExample(@Param("record") EstadisticaBase record, @Param("example") EstadisticaBaseCriteria example);

    int updateByPrimaryKeySelective(EstadisticaBase record);

    int updateByPrimaryKey(EstadisticaBase record);
}