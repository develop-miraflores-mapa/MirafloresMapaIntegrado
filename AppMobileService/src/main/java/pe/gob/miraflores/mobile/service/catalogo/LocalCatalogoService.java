package pe.gob.miraflores.mobile.service.catalogo;

import java.util.List;

import pe.gob.miraflores.mobile.domain.catalogo.Catalogo;
import pe.gob.miraflores.mobile.domain.catalogo.CatalogoCustom;
import pe.gob.miraflores.mobile.domain.catalogo.GrupoCatalogo;

public interface LocalCatalogoService {

	public String getJsonCatalogoByGrupo(Integer idGrupo) throws Exception;
	
	public Catalogo findCatalogoByCodigo(String codigo,Integer idGrupo) throws Exception;
	
	public Catalogo findCatalogoById(Integer id) throws Exception;
	
	public List<Catalogo> findCatalogoByGrupo(Integer idGrupo) throws Exception;
	
	public List<GrupoCatalogo> getGrupoCatalogoVoxiva(String identificador);

	List<CatalogoCustom> findCatalogoByGrupoCustom(Integer idGrupo)
			throws Exception;
}
