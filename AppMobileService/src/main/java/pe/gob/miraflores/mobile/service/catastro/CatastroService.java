package pe.gob.miraflores.mobile.service.catastro;

import java.util.List;
import java.util.Map;

import pe.gob.miraflores.mobile.domain.catastro.Distrito;

public interface CatastroService {

	public List<Distrito> selectDistritos();
	
	public String getGeoreferenciaXvia(String query,Integer gid) throws Exception;
	
	public String getNameStreetByCordenadas(String latitud,String longitud,String radio) throws Exception;
	
	public Distrito obtenerDistritoPorCentroide(String punto);
	
	public Map<String, Object> getSectorZonaByCordenada(String punto) throws Exception;
	
	public List<Map<String, Object>> getPoligonoZona() throws Exception;
	
}
