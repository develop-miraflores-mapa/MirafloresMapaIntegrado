package pe.gob.miraflores.mobile.service.seguridad;

import java.util.List;
import java.util.Map;

import pe.gob.miraflores.mobile.domain.seguridad.Opcion;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioOpcion;

public interface SeguridadService {

	public UsuarioLogin getUsuarioByLogin(String desLogin) throws Exception;
	
	public UsuarioLogin autenticar(String desLogin,String password) throws Exception;
	
	public UsuarioLogin registrar(UsuarioLogin usuario) throws Exception;
	
	public UsuarioLogin eliminar(Integer idUsuario) throws Exception;
	
//	public void resetRol() throws Exception;
	public int resetRol(UsuarioLogin usuarioLogin) throws Exception;
	
	public UsuarioLogin getById(Integer idUsuario) throws Exception;
	
	public List<UsuarioLogin> listUsuarios(UsuarioLogin usuario) throws Exception;
	
	public List<Opcion> getOpciones() throws Exception;
	
	public List<UsuarioOpcion> getOpcionesByUsuario(Integer idUsuario) throws Exception;
	
	public Map<String, Object> cambiarClave(Integer idUsuario , String claveActual , String claveNueva , String claveRepetida) throws Exception;
	
	public List<UsuarioLogin> testUsuario(String userName);
	
}
