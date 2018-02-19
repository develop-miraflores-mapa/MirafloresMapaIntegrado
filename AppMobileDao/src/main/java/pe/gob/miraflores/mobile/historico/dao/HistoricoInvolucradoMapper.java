package pe.gob.miraflores.mobile.historico.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pe.gob.miraflores.mobile.domain.historico.HistoricoInvolucrado;
import pe.gob.miraflores.mobile.domain.historico.HistoricoInvolucradoCriteria;

public interface HistoricoInvolucradoMapper {
    long countByExample(HistoricoInvolucradoCriteria example);

    int deleteByExample(HistoricoInvolucradoCriteria example);

    int deleteByPrimaryKey(Integer idHistInvoluc);

    int insert(HistoricoInvolucrado record);

    int insertSelective(HistoricoInvolucrado record);

    List<HistoricoInvolucrado> selectByExample(HistoricoInvolucradoCriteria example);

    HistoricoInvolucrado selectByPrimaryKey(Integer idHistInvoluc);

    int updateByExampleSelective(@Param("record") HistoricoInvolucrado record, @Param("example") HistoricoInvolucradoCriteria example);

    int updateByExample(@Param("record") HistoricoInvolucrado record, @Param("example") HistoricoInvolucradoCriteria example);

    int updateByPrimaryKeySelective(HistoricoInvolucrado record);

    int updateByPrimaryKey(HistoricoInvolucrado record);
}