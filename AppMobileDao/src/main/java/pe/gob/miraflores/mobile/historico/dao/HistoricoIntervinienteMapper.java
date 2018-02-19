package pe.gob.miraflores.mobile.historico.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pe.gob.miraflores.mobile.domain.historico.HistoricoInterviniente;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIntervinienteCriteria;

public interface HistoricoIntervinienteMapper {
    long countByExample(HistoricoIntervinienteCriteria example);

    int deleteByExample(HistoricoIntervinienteCriteria example);

    int deleteByPrimaryKey(Integer idHistInterv);

    int insert(HistoricoInterviniente record);

    int insertSelective(HistoricoInterviniente record);

    List<HistoricoInterviniente> selectByExample(HistoricoIntervinienteCriteria example);

    HistoricoInterviniente selectByPrimaryKey(Integer idHistInterv);

    int updateByExampleSelective(@Param("record") HistoricoInterviniente record, @Param("example") HistoricoIntervinienteCriteria example);

    int updateByExample(@Param("record") HistoricoInterviniente record, @Param("example") HistoricoIntervinienteCriteria example);

    int updateByPrimaryKeySelective(HistoricoInterviniente record);

    int updateByPrimaryKey(HistoricoInterviniente record);
}