package pe.gob.miraflores.mobile.historico.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidencia;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidenciaCriteria;

public interface HistoricoIncidenciaMapper {
    long countByExample(HistoricoIncidenciaCriteria example);

    int deleteByExample(HistoricoIncidenciaCriteria example);

    int deleteByPrimaryKey(Integer idHist);

    int insert(HistoricoIncidencia record);

    int insertSelective(HistoricoIncidencia record);

    List<HistoricoIncidencia> selectByExample(HistoricoIncidenciaCriteria example);

    HistoricoIncidencia selectByPrimaryKey(Integer idHist);

    int updateByExampleSelective(@Param("record") HistoricoIncidencia record, @Param("example") HistoricoIncidenciaCriteria example);

    int updateByExample(@Param("record") HistoricoIncidencia record, @Param("example") HistoricoIncidenciaCriteria example);

    int updateByPrimaryKeySelective(HistoricoIncidencia record);

    int updateByPrimaryKey(HistoricoIncidencia record);
}