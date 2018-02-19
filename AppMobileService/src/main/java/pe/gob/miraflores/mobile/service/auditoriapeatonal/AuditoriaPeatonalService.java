package pe.gob.miraflores.mobile.service.auditoriapeatonal;

import java.util.Map;

import pe.gob.miraflores.mobile.domain.auditoriapeatonal.AuditoriaPeatonal;

public interface AuditoriaPeatonalService {

	public AuditoriaPeatonal saveAuditoriaPeatonal(AuditoriaPeatonal auditoria) throws Exception;
	
	public Map<String, Object> bandejaAuditoriaPeatonal(AuditoriaPeatonal auditoria) throws Exception;
	
	public String getCallesMiraflores(String query) throws Exception;
	
	public String getCatalogoByGrupo(Integer idGrupo) throws Exception;
	
}
