package pe.gob.miraflores.mobile.service.seguridad.spring.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.service.seguridad.SeguridadService;

@Service("appUserDetailsService")
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private SeguridadService seguridadService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		UsuarioLogin usuario=null;
		try {
			usuario = seguridadService.getUsuarioByLogin(username);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		UsuarioSistema user = null;
		
		if (usuario != null) {
			user = new UsuarioSistema(usuario, getGrupos(usuario));
		}
		
		return user;
		
	}
	
	private Collection<? extends GrantedAuthority> getGrupos(UsuarioLogin usuario) {
		List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(usuario.getIdeRol()+""));
		
		return authorities;
	}

}
