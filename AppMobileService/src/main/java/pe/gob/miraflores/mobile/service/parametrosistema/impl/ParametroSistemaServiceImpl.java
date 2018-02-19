package pe.gob.miraflores.mobile.service.parametrosistema.impl;

import pe.gob.miraflores.mobile.dao.parametrosistema.ParametroSistemaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.domain.parametrosistema.ParametroSistema;
import pe.gob.miraflores.mobile.service.parametrosistema.ParametroSistemaService;

@Service
public class ParametroSistemaServiceImpl implements ParametroSistemaService {

	@Autowired
	private ParametroSistemaMapper parametroSistemaMapper; 
	
	
	public ParametroSistema obtenerParametroSistemaById(String idParametro) {
		// TODO Auto-generated method stub
		return parametroSistemaMapper.selectByPrimaryKey(idParametro);
	}

}
