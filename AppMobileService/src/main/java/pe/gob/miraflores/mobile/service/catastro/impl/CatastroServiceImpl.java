package pe.gob.miraflores.mobile.service.catastro.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.catastro.dao.ZonaCatastroMapper;
import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.domain.catastro.Distrito;
import pe.gob.miraflores.mobile.domain.catastro.ZonaCatastro;
import pe.gob.miraflores.mobile.service.catastro.CatastroService;
import pe.gob.miraflores.mobile.util.Util;

@Service
public class CatastroServiceImpl implements CatastroService{

	
//	@Autowired
//	private DistritoMapper distritosMapper;
	
	@Autowired
	private ZonaCatastroMapper zonaCatastroMapper;
	
	public List<Distrito> selectDistritos() {
		// TODO Auto-generated method stub
//		Map<String, Object> params = new HashMap<String, Object>();
//		
//		DistritoCriteria c = new DistritoCriteria();
//		c.createCriteria();
//		
//		return distritosMapper.selectByExample(c);
		return null;
		
	}

	public String getGeoreferenciaXvia(String query,Integer gid) throws Exception {
		// TODO Auto-generated method stub
		if(query == null){
			query = "";
		}
		query = query.replaceAll(" ", "%20");
		query = query.replaceAll("/i", "");
		query = query.replaceAll("/", "");
		String action = "obtenergeoreferenciaxvia.muni?query="+query+"&start=0&limit=100&page=1";
		
		if(gid != null){
			action+="&gid="+gid;
		}
		
		String strJson = Util.getUrlRemote(MobileConstantes.URL_MIRAFLORES+action);
		return strJson;
	}
	
	
	public String getNameStreetByCordenadas(String latitud,String longitud,String radio) throws Exception {
		// TODO Auto-generated method stub
		String parameters = "lat="+latitud+"&lon="+longitud+"&radius="+(StringUtils.isNotEmpty(radio)?radio:"10")+"";
		String strJson = Util.getUrlRemote(MobileConstantes.URL_JSON_GET_NAME_STREET_WAZE+parameters);
		return strJson;
	}

	@Override
	public Distrito obtenerDistritoPorCentroide(String punto) {
		// TODO Auto-generated method stub
//		Map<String, Object> params = new HashMap<String, Object>();
//		params.put("punto", punto);
//		
//		List<Distrito> list = distritosMapper.obtenerDistritoPorCentroide(params);
//		
//		if(list != null && list.size()>0){
//			return list.get(0);
//		}
		
		return null;
	}

	@Override
	public Map<String, Object> getSectorZonaByCordenada(String punto) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("PUNTO", punto);
		Map<String, Object> result =  zonaCatastroMapper.selectSectorZonaByCordenada(params);
		return result;
	}
	
	@Override
	public List<Map<String, Object>> getPoligonoZona() throws Exception {
		List<Map<String, Object>> result =  zonaCatastroMapper.selectPoligonoZona();
		return result;
	}
	
	
}
