package pe.gob.miraflores.mobile.service.seguridad.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.dao.seguridad.OpcionMapper;
import pe.gob.miraflores.mobile.dao.seguridad.UsuarioLoginMapper;
import pe.gob.miraflores.mobile.dao.seguridad.UsuarioOpcionMapper;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.seguridad.Opcion;
import pe.gob.miraflores.mobile.domain.seguridad.OpcionCriteria;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLoginCriteria;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLoginCriteria.Criteria;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioOpcion;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioOpcionCriteria;
import pe.gob.miraflores.mobile.service.seguridad.SeguridadService;

@Service("seguridadService")
public class SeguridadServiceImpl implements SeguridadService {

	@Autowired
	private UsuarioLoginMapper usuarioLoginMapper;
	
	@Autowired
	private UsuarioOpcionMapper usuarioOpcionMapper;
	
	@Autowired
	private OpcionMapper opcionMapper;
	
	@Override
	public UsuarioLogin getUsuarioByLogin(String desLogin) throws Exception {
		// TODO Auto-generated method stub
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("des_login_user", desLogin);
		
		List<UsuarioLogin> result = usuarioOpcionMapper.getUsuarioByLogin(params);
		UsuarioLoginCriteria criteria=new UsuarioLoginCriteria();
		criteria.createCriteria().andDesLoginUserEqualTo(desLogin);
//		List<UsuarioLogin> result =usuarioLoginMapper.selectByExample(criteria);
		
		if(result != null && result.size()>0){
			return result.get(0);
		}
		
		return null;
	}

	@Override
	public UsuarioLogin autenticar(String desLogin, String password) throws Exception {
		// TODO Auto-generated method stub
		
		
		UsuarioLogin usuario = this.getUsuarioByLogin(desLogin);
		
		if(usuario != null){
			
			if(password.equals(usuario.getClvClaveUser())){
				
				List<UsuarioOpcion> opciones = usuario.getOpciones();
				
				if(opciones != null){
						for (UsuarioOpcion o : opciones) {
							
						if(o.getOpcion() != null && o.getOpcion().getDefinicion() !=null){
							
							if(o.getOpcion().getDefinicion().equalsIgnoreCase("waze")){
								usuario.setOpcWaze(MobileConstantes.LETRA_SI);
							}else{
								
								if(o.getOpcion().getDefinicion().equalsIgnoreCase("voxiva")){
									usuario.setOpcVoxiva(MobileConstantes.LETRA_SI);
								}else{
									
									if(o.getOpcion().getDefinicion().equalsIgnoreCase("tetra4")){
										usuario.setOpcRtransito(MobileConstantes.LETRA_SI);
									}else{
										
										if(o.getOpcion().getDefinicion().equalsIgnoreCase("tetra5")){
											usuario.setOpcRpolicia(MobileConstantes.LETRA_SI);
										}else{
											
											if(o.getOpcion().getDefinicion().equalsIgnoreCase("tetra6")){
												usuario.setOpcRserenazgo(MobileConstantes.LETRA_SI);
											}else{
												
												if(o.getOpcion().getDefinicion().equalsIgnoreCase("tetra7")){
													usuario.setOpcRfiscalizacion(MobileConstantes.LETRA_SI);
												}else{
													
													if(o.getOpcion().getDefinicion().equalsIgnoreCase("tetra2")){
														usuario.setOpcRapagado(MobileConstantes.LETRA_SI);
													}else{
														
														if(o.getOpcion().getDefinicion().equalsIgnoreCase("tetra3")){
															usuario.setOpcRotros(MobileConstantes.LETRA_SI);
														}else{
															
															if(o.getOpcion().getDefinicion().equalsIgnoreCase("vigilante1")){
																usuario.setOpcVig1(MobileConstantes.LETRA_SI);
															}else{
																
																if(o.getOpcion().getDefinicion().equalsIgnoreCase("vigilante2")){
																	usuario.setOpcVig2(MobileConstantes.LETRA_SI);
																}else{
																	
																	if(o.getOpcion().getDefinicion().equalsIgnoreCase("vigilante3")){
																		usuario.setOpcVig3(MobileConstantes.LETRA_SI);
																	}else{
																		
																		if(o.getOpcion().getDefinicion().equalsIgnoreCase("estacionamientos")){
																			usuario.setOpcEstacionamientos(MobileConstantes.LETRA_SI);
																		}else{
																			
																			if(o.getOpcion().getDefinicion().equalsIgnoreCase("cambistas")){
																				usuario.setOpcCambistas(MobileConstantes.LETRA_SI);
																			}else{
																				
																				if(o.getOpcion().getDefinicion().equalsIgnoreCase("reach")){
																					usuario.setOpcReach(MobileConstantes.LETRA_SI);
																				}else{
																					
																					if(o.getOpcion().getDefinicion().equalsIgnoreCase("pos")){
																						usuario.setOpcPos(MobileConstantes.LETRA_SI);
																					}
																				}
																				
																			}
																			
																		}
																		
																	}
																}
																
															}
															
														}
														
													}
													
												}
												
											}
											
										}
										
									}
									
								}
								
							}
							
							
						}
					}
				}
				
				return usuario;
			}
		}
		
		return null;
	}

	@Override
	public UsuarioLogin registrar(UsuarioLogin usuario) throws Exception {
		// TODO Auto-generated method stub
		
		if(usuario.getIdeUsuario() == null){
			usuario.setFecRegistra(new Date());
			usuario.setIdeEstado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
			usuario.setInHabilitado(MobileConstantes.ESTADO_ACTIVO_STRING);
			usuarioLoginMapper.insertSelective(usuario);
		}else{
			usuario.setFecModifica(new Date());
			usuarioLoginMapper.updateByPrimaryKeySelective(usuario);
		}
		
		UsuarioOpcionCriteria c1 = new UsuarioOpcionCriteria();
		c1.createCriteria().andIdeUsuarioEqualTo(usuario.getIdeUsuario());
		
		usuarioOpcionMapper.deleteByExample(c1);
		
		if(usuario.getOpciones() != null){
			
			for (UsuarioOpcion o : usuario.getOpciones()) {
				if(o.getIdOpcion()!=null){
					o.setIdeUsuario(usuario.getIdeUsuario());
					usuarioOpcionMapper.insertSelective(o);
				}
			}
			
		}
		
		
		return usuario;
	}

	@Override
	public UsuarioLogin eliminar(Integer idUsuario) throws Exception {
		// TODO Auto-generated method stub
		UsuarioLogin usuario = new UsuarioLogin();
		usuario.setIdeUsuario(idUsuario);
		usuario.setIdeEstado(MobileConstantes.ESTADO_INACTIVO_NUMERO);
		
		usuarioLoginMapper.updateByPrimaryKeySelective(usuario);
		
		return usuario;
	}
	
//	@Override
//	public void resetRol() throws Exception {
//		
//		usuarioLoginMapper.eliminarRol();
//		
////		return usuario;
//	}
	
	
	@Override
	public int resetRol(UsuarioLogin usuarioLogin) throws Exception {
		
		int result;
		Map<String, Object> params = new HashMap<String, Object>();
		if(usuarioLogin.getArrIdeUsuario()!= null){
			params.put("arrIdeUsuario", usuarioLogin.getArrIdeUsuario());
		}
		result = usuarioLoginMapper.resetRol(params);
		return result;
	}
	

	@Override
	public UsuarioLogin getById(Integer idUsuario) throws Exception {
		// TODO Auto-generated method stub
		UsuarioLogin usuario = usuarioLoginMapper.selectByPrimaryKey(idUsuario);
		
		if(usuario !=null){
			
			usuario.setOpciones(this.getOpcionesByUsuario(idUsuario));
			
		}
		
		return usuario;
	}

	@Override
	public List<UsuarioLogin> listUsuarios(UsuarioLogin usuario) throws Exception {
		// TODO Auto-generated method stub
		
		UsuarioLoginCriteria c = new UsuarioLoginCriteria();
		
		Criteria criteria = c.createCriteria();
		
		criteria.andIdeEstadoEqualTo(1);
		
		if(usuario != null){
			if(usuario.getDesLoginUser()!=null){
				criteria.andDesLoginUserLikeInsensitive("%"+usuario.getDesLoginUser()+"%");
			}
			
			if(usuario.getDesNombreCompleto()!=null){
				criteria.andDesNombreCompletoLikeInsensitive("%"+usuario.getDesNombreCompleto()+"%");
			}
			
			if(usuario.getDni()!=null){
				criteria.andDniEqualTo(usuario.getDni());
			}
			
		}
		
		return usuarioLoginMapper.selectByExample(c);
	}

	@Override
	public List<UsuarioOpcion> getOpcionesByUsuario(Integer idUsuario) throws Exception {
		// TODO Auto-generated method stub
		
		UsuarioOpcionCriteria c1 = new UsuarioOpcionCriteria();
		
		pe.gob.miraflores.mobile.domain.seguridad.UsuarioOpcionCriteria.Criteria criteria = c1.createCriteria();
		
		criteria.andIdeUsuarioEqualTo(idUsuario);
		
		List<UsuarioOpcion> list = usuarioOpcionMapper.selectByExample(c1);
		
		if(list != null){
			
			for (UsuarioOpcion userOpc : list) {
				userOpc.setOpcion(opcionMapper.selectByPrimaryKey(userOpc.getIdOpcion()));
			}
			
		}
		
		return list;
	}

	@Override
	public List<Opcion> getOpciones() throws Exception {
		// TODO Auto-generated method stub
		OpcionCriteria c = new OpcionCriteria();
		c.createCriteria();
		return opcionMapper.selectByExample(c);
	}

	@Override
	public Map<String, Object> cambiarClave(Integer idUsuario, String claveActual, String claveNueva,
			String claveRepetida) throws Exception {
		// TODO Auto-generated method stub
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		UsuarioLogin usuario = usuarioLoginMapper.selectByPrimaryKey(idUsuario);
		
		if(StringUtils.isEmpty(claveNueva)){
			
			result.put("message", "Debe ingresar la contraseña nueva.");
			result.put("success", Boolean.FALSE);
			return result;
			
		}
		
		if(StringUtils.isEmpty(claveRepetida)){
			
			result.put("message", "Debe repetir la contraseña nueva.");
			result.put("success", Boolean.FALSE);
			return result;
			
		}
		
		if(!claveNueva.equals(claveRepetida)){
			
			result.put("message", "Las contraseñas no coinciden.");
			result.put("success", Boolean.FALSE);
			return result;
			
		}
		
		
		if(usuario == null){
			
			result.put("message", "Existe un problema con su Usuario. Cierre la sesión y vuelva a intentarlo.");
			result.put("success", Boolean.FALSE);
			return result;
			
		}
		
		if(!usuario.getClvClaveUser().equals(claveActual)){
			
			result.put("message", "La contraseña actual es incorrecta.");
			result.put("success", Boolean.FALSE);
			return result;
			
		}
		
		usuario.setFecModifica(new Date());
		usuario.setClvClaveUser(claveNueva);
		
		usuarioLoginMapper.updateByPrimaryKeySelective(usuario);
		
		result.put("message", "Su contraseña a sido cambiada de forma correcta.");
		result.put("success", Boolean.TRUE);
		
		return result;
	}

	@Override
	public List<UsuarioLogin> testUsuario(String userName) {
		// TODO Auto-generated method stub
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("DES_LOGIN_USER", userName);
		return usuarioOpcionMapper.getUsuarioByLogin(params);
	}

}
