package pe.gob.miraflores.mobile.service.auditoriapeatonal.impl;

import java.io.File;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.dao.auditoriapeatonal.AuditoriaPeatonalMapper;
import pe.gob.miraflores.mobile.domain.auditoriapeatonal.AuditoriaPeatonal;
import pe.gob.miraflores.mobile.exception.NegocioException;
import pe.gob.miraflores.mobile.service.auditoriapeatonal.AuditoriaPeatonalService;
import pe.gob.miraflores.mobile.util.FileUtil;
import pe.gob.miraflores.mobile.util.Util;

@Service
public class AuditoriaPeatonalImpl implements AuditoriaPeatonalService{

	@Autowired
	private AuditoriaPeatonalMapper auditoriaPeatonalMapper;
	
	public AuditoriaPeatonal saveAuditoriaPeatonal(AuditoriaPeatonal auditoria)
			throws Exception {
		// TODO Auto-generated method stub
		
		if(auditoria.getFoto()!=null){
				String contentType = auditoria.getFoto().getContentType();
				int pos = contentType.indexOf("/");
				String v = contentType.substring(0, pos);
	
				if (!v.equalsIgnoreCase("image")) {
					throw new NegocioException("El archivo adjuntado no es una imagen valida.");
				}
		}
		
		if(auditoria.getIdFormulario() == null){
			auditoria.setEstado(MobileConstantes.ESTADO_ACTIVO);
			auditoria.setFechaRegistra(new Date());
			auditoriaPeatonalMapper.insertSelective(auditoria);
		}else{
			auditoriaPeatonalMapper.updateByPrimaryKeySelective(auditoria);
		}
		
		if(auditoria.getFoto()!=null){
				
			String pathDirectorio = MobileConstantes.PATH_VAR_LIBRERIA+MobileConstantes.PATH_DIRECTORIO_AUDITORIA_PEATONAL+auditoria.getIdFormulario()+"/";
			
			File directorio = new File(pathDirectorio);
			if (!directorio.exists()) {
				directorio.mkdirs();
			}
			
			String fileName = auditoria.getFoto().getOriginalFilename();
			
			FileUtil.guardarFileInPath(auditoria.getFoto().getBytes(), fileName, pathDirectorio);
			
			String urlFoto = MobileConstantes.PATH_DIRECTORIO_AUDITORIA_PEATONAL+auditoria.getIdFormulario()+"/"+fileName;
			auditoria.setUrlFoto(urlFoto);
			auditoria.setNombreFoto(fileName);
			auditoriaPeatonalMapper.updateByPrimaryKeySelective(auditoria);
			
		}
				
		return auditoria;
	}

	public Map<String, Object> bandejaAuditoriaPeatonal(
			AuditoriaPeatonal auditoria) throws Exception {
		// TODO Auto-generated method stub
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		int c = 0;
		
		if(auditoria.getStart() == null){
			auditoria.setStart(0);
		}
		
		if(auditoria.getLimit() == null){
			auditoria.setLimit(10);
		}
		
		
		if (auditoria.getStart() != 0) {
			c = c + 1;
		}
		
		params.put("START", auditoria.getStart() + c);
		params.put("LIMIT", auditoria.getLimit() + auditoria.getStart());
		
		if(auditoria.getNomVia()!=null){
			params.put("NOM_VIA", auditoria.getNomVia());
		}
		
		if(auditoria.getDesCategoria()!=null){
			params.put("DES_CATEGORIA", auditoria.getDesCategoria());
		}
		
		if(auditoria.getStrFecIni()!=null){
			params.put("FECHA_INI", auditoria.getStrFecIni());
		}
		
		if(auditoria.getStrFecFin()!=null){
			params.put("FECHA_FIN", auditoria.getStrFecFin());
		}
		
		if(auditoria.getCuadraIni()!=null){
			params.put("CUADRA_INI", auditoria.getCuadraIni());
		}
		
		if(auditoria.getCuadraFin()!=null){
			params.put("CUADRA_FIN", auditoria.getCuadraFin());
		}
		
		List<AuditoriaPeatonal> list = auditoriaPeatonalMapper.listarAuditoriasConPaginacion(params);
		
		result.put("data", list);
		result.put("count", auditoriaPeatonalMapper.countListarAuditoriasConPaginacion(params));
		
		return result;
	}

	public String getCallesMiraflores(String query) throws Exception {
		// TODO Auto-generated method stub
		String action = "obtenerviasxdescycod.muni?query="+query+"&tamano=30&like="+query+"&start=0&limit=30";
		String strJson = Util.getUrlRemote(MobileConstantes.URL_MIRAFLORES+action);
		return strJson;
	}

	public String getCatalogoByGrupo(Integer idGrupo) throws Exception {
		// TODO Auto-generated method stub
		String action = "obtenerCatalogo.muni?ide="+idGrupo;
		String strJson = Util.getUrlRemote(MobileConstantes.URL_MIRAFLORES+action);
		return strJson;
	}

}
