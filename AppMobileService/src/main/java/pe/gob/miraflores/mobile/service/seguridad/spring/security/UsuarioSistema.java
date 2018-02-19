package pe.gob.miraflores.mobile.service.seguridad.spring.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;

public class UsuarioSistema extends User {
	
	private static final long serialVersionUID = 1L;

	private UsuarioLogin usuarioLogin;
	
	public UsuarioSistema(UsuarioLogin usuario, Collection<? extends GrantedAuthority> authorities) {
		super(usuario.getDesLoginUser(), usuario.getClvClaveUser(), authorities);
		this.usuarioLogin = usuario;
	}

	public UsuarioLogin getUsuarioLogin() {
		return usuarioLogin;
	}

	public void setUsuarioLogin(UsuarioLogin usuarioLogin) {
		this.usuarioLogin = usuarioLogin;
	}
	
	
	
}
