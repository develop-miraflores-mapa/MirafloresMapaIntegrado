package pe.gob.miraflores.mobile.service.mapaincidencias.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.historico.dao.HistoricoIncidenciaMapper;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidencia;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidenciaCriteria;

@Service
public class MapaHistoricoServiceImpl implements MapaHistoricoService {

	
	@Autowired 
	private HistoricoIncidenciaMapper historicoIncidenciaMapper;
	
	@Override
	public List<HistoricoIncidencia> listTestHistorico(){
		HistoricoIncidenciaCriteria criteria=new HistoricoIncidenciaCriteria();
		criteria.createCriteria();
		//historicoIncidenciaMapper.selectByPrimaryKey(1)
		return historicoIncidenciaMapper.selectByExample(criteria);
	}
}
