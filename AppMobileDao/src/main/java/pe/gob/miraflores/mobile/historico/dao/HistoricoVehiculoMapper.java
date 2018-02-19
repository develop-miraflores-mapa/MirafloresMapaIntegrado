package pe.gob.miraflores.mobile.historico.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pe.gob.miraflores.mobile.domain.historico.HistoricoVehiculo;
import pe.gob.miraflores.mobile.domain.historico.HistoricoVehiculoCriteria;

public interface HistoricoVehiculoMapper {
    long countByExample(HistoricoVehiculoCriteria example);

    int deleteByExample(HistoricoVehiculoCriteria example);

    int deleteByPrimaryKey(Integer idHistVehic);

    int insert(HistoricoVehiculo record);

    int insertSelective(HistoricoVehiculo record);

    List<HistoricoVehiculo> selectByExample(HistoricoVehiculoCriteria example);

    HistoricoVehiculo selectByPrimaryKey(Integer idHistVehic);

    int updateByExampleSelective(@Param("record") HistoricoVehiculo record, @Param("example") HistoricoVehiculoCriteria example);

    int updateByExample(@Param("record") HistoricoVehiculo record, @Param("example") HistoricoVehiculoCriteria example);

    int updateByPrimaryKeySelective(HistoricoVehiculo record);

    int updateByPrimaryKey(HistoricoVehiculo record);
}