package pe.gob.miraflores.mobile.controller;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.domain.mapaincidencias.AuditoriaIncidencia;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;
import pe.gob.miraflores.mobile.service.seguridad.SeguridadService;

@Controller
public class AccesoController {

	@Autowired
	private SeguridadService seguridadService;

	@Autowired
	private MapaIncidenciasService mapaIncidenciasService;

	@RequestMapping(value = "/login")
	public ModelAndView login(HttpServletRequest request) {

		// HttpSession sesion = request.getSession();

		// System.out.println(sesion.getAttribute("provieneDe"));

		ModelAndView modelAndView = new ModelAndView("login");
		return modelAndView;
	}

	@RequestMapping(value = "/admin-mapa-sin-acceso")
	public ModelAndView adminMapaSinAcceso(HttpServletRequest request) {

		// HttpSession sesion = request.getSession();

		// System.out.println(sesion.getAttribute("provieneDe"));

		ModelAndView modelAndView = new ModelAndView("private/admin-mapa-sin-acceso");
		return modelAndView;
	}

	@RequestMapping(value = "/log-out")
	public void logOut(HttpServletRequest request, HttpServletResponse response) throws IOException {

		HttpSession sesion = request.getSession();
		sesion.setAttribute("usuarioLoginMap", null);
		sesion.invalidate();
		String urlBase = MobileConstantes.SCHEMA_HTTP + "://" + request.getServerName() + ":" + request.getServerPort();
		System.out.println("(log-out)urlBase->" + urlBase);
		response.sendRedirect(urlBase + "/mobileApps/login");

	}

	@RequestMapping(value = "/autenticar", method = RequestMethod.POST)
//	public void autenticar(String userName, String password, HttpServletRequest request, HttpServletResponse response)
	public void autenticar(String userName, String password, HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		String view = null;

		HttpSession sesion = request.getSession();

		UsuarioLogin usuario = (UsuarioLogin) sesion.getAttribute("usuarioLoginMap");

		String urlBase = MobileConstantes.SCHEMA_HTTP + "://" + request.getServerName() + ":" + request.getServerPort();

		System.out.println("(autenticar)urlBase->" + urlBase);

		if (usuario == null) {

			if (sesion.getAttribute("provieneDe") != null) {
				view = sesion.getAttribute("provieneDe").toString();
			} else {
				view = "/mobileApps/cierre-calles/mapa";
//				view = "/mobileApps";
			}

			if (StringUtils.isBlank(userName)) {
				request.setAttribute("mensajeError", "Debe ingresar el usuario.");
				request.setAttribute("username", userName);

				request.getRequestDispatcher("/login").forward(request, response);

				// response.sendRedirect("/mobileApps/login");
				return;
			}

			if (StringUtils.isBlank(password)) {
				request.setAttribute("mensajeError", "Debe ingresar su contraseña.");
				request.setAttribute("username", userName);
				// response.sendRedirect("/mobileApps/login");
				request.getRequestDispatcher("/login").forward(request, response);
				return;
			}

			try {

				usuario = seguridadService.autenticar(userName, password);

				if (usuario == null) {
					request.setAttribute("mensajeError", "Error de Usuario o Clave.");
					request.setAttribute("username", userName);
					
					// response.sendRedirect("/mobileApps/login");
					request.getRequestDispatcher("/login").forward(request, response);
					return;
				} else if (usuario.getIdeRol()!=902 && usuario.getIdeRolRol()!=null){
					request.setAttribute("mensajeError", "Su perfil no necesita un rol de operador ");
					request.setAttribute("username", userName);
					// response.sendRedirect("/mobileApps/login");
					request.getRequestDispatcher("/login").forward(request, response);
					return;
				} else if (usuario.getIdeRol()==902 && usuario.getIdeRolRol()==null){
					request.setAttribute("mensajeError", "No tiene ningún rol de operador. Consulte al administrador.");
					request.setAttribute("username", userName);
					// response.sendRedirect("/mobileApps/login");
					request.getRequestDispatcher("/login").forward(request, response);
					return;
				} else {
//					if(userRol.equals("OPER. ATENCION 1 (AZUL)")){
//						usuario.setIdeRolRol(995);
//					} else if(userRol.equals("OPER. ATENCION 2 (VERDE)")){
//						usuario.setIdeRolRol(996);
//					} else if(userRol.equals("OPER. ATENCION 3 (AMARILLO)")){
//						usuario.setIdeRolRol(997);
//					} else if(userRol.equals("OPER. ATENCION 4 (NARANJA)")){
//						usuario.setIdeRolRol(998);
//					} else if(userRol.equals("OPER. ATENCION 5 (ROJO)")){
//						usuario.setIdeRolRol(999);
//					} else if(userRol.equals("OPER. ATENCION 6 (MORADO)")){
//						usuario.setIdeRolRol(1000);
//					} else if(userRol.equals("OPER. REDES SOCIALES")){
//						usuario.setIdeRolRol(1001);
//					} else if(userRol.equals("RADIO OPERADOR AREA 1")){
//						usuario.setArea(1); usuario.setIdeRolRol(1003);
//					} else if(userRol.equals("RADIO OPERADOR AREA 2")){
//						usuario.setArea(2); usuario.setIdeRolRol(1003);
//					} else if(userRol.equals("RADIO OPERADOR AREA 3")){
//						usuario.setArea(3); usuario.setIdeRolRol(1003);
//					} else if(userRol.equals("OPER. VIDEO AREA 1")){
//						usuario.setArea(1); usuario.setIdeRolRol(1002);
//					} else if(userRol.equals("OPER. VIDEO AREA 2")){
//						usuario.setArea(2); usuario.setIdeRolRol(1002);
//					} else if(userRol.equals("OPER. VIDEO AREA 3")){
//						usuario.setArea(3); usuario.setIdeRolRol(1002);
//					} 
					
					this.registrarAuditoriaLogin(usuario, request);
					
					sesion.setAttribute("usuarioLoginMap", usuario);
					System.out.println("view envio->" + urlBase + view);
					
					if (usuario.getIdeRol() < 906 || usuario.getIdeRol() == 993 || usuario.getIdeRol() == 992) {
						response.sendRedirect(urlBase + view);
						// request.getRequestDispatcher(view).forward(request,
						// response);
					} else if (usuario.getIdeRol() == 906) {
						response.sendRedirect(urlBase + "/mobileApps/estadisticas-incidencias/dashboard");
					} 
//					else if (usuario.getIdeRol() == 992) {
//						response.sendRedirect(urlBase + "/mobileApps/mapa-incidencia/bandeja");
//					}
					// Registrar Auditoria Login

				}

			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				// response.sendRedirect("/mobileApps/login");
				request.setAttribute("username", userName);
				request.setAttribute("mensajeError", "Ha ocurrido un error desconocido.");
				request.getRequestDispatcher("/login").forward(request, response);
				return;
			}

		} else {

			// response.sendRedirect("/mobileApps/cierre-calles/mapa");
			this.registrarAuditoriaLogin(usuario, request);
			request.getRequestDispatcher("/cierre-calles/mapa").forward(request, response);
			return;
		}

	}

	private void registrarAuditoriaLogin(UsuarioLogin usuario, HttpServletRequest request) {
		AuditoriaIncidencia a = new AuditoriaIncidencia();

		a.setTipo(MobileConstantes.TIPO_AUDITORIA_LOGIN);
		a.setFecRegistra(new Date());
		a.setValor(usuario.getDesLoginUser());
		a.setDesIpRegistra(request.getRemoteAddr());
		a.setCodPerfil(usuario.getIdeRol());
		a.setCodRol(usuario.getIdeRolRol());
		try {
			mapaIncidenciasService.registrarAuditoria(a);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/cambiar-clave")
	public @ResponseBody Map<String, ? extends Object> anularincidencia(Integer idUsuario, String claveActual,
			String claveNueva, String claveRepetida) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {

			data.putAll(seguridadService.cambiarClave(idUsuario, claveActual, claveNueva, claveRepetida));

		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error desconocido.");
			e.printStackTrace();
		}
		return data;
	}

}
