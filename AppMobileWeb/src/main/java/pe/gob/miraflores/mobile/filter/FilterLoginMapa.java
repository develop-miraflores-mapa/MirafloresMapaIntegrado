package pe.gob.miraflores.mobile.filter;

import java.io.IOException;
import java.util.Date;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.util.Util;

public class FilterLoginMapa implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
	      // Get init parameter 
	      String testParam = filterConfig.getInitParameter("test-param"); 

	      //Print the init parameter 
	      System.out.println("Test Param: " + testParam); 
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub

	      HttpServletRequest httpRequest = (HttpServletRequest) request;
		  HttpServletResponse httpResponse = (HttpServletResponse) response;
		  
		  HttpSession sesion =  httpRequest.getSession();
		  
		  String viewRequest = httpRequest.getRequestURI().substring(httpRequest.getRequestURI().lastIndexOf("/"));
		  
		  System.out.println("URI->"+httpRequest.getRequestURI());
		  
		  String urlBase = MobileConstantes.SCHEMA_HTTP+"://"+httpRequest.getServerName()+":"+httpRequest.getServerPort();
		  
		  System.out.println("urlBase->"+urlBase);
		  
		  String context = urlBase+httpRequest.getContextPath();
		  String provieneDe = null;
		  

		  if(viewRequest.equals("/mapa")){
			  provieneDe = context+"/cierre-calles/mapa";
		  }else if(viewRequest.equals("/admin")){
			  provieneDe = context+"/cierre-calles/mapa/admin";
		  } else if(viewRequest.equals("/dashboard")){
			  provieneDe = context+"/estadisticas-incidencias/dashboard";
		  } else if(viewRequest.equals("/bandeja")){
			  provieneDe = context+"/mapa-incidencia/bandeja";
		  }
		   
		  
		  if(sesion.getAttribute("usuarioLoginMap")==null){
			  
			  httpResponse.sendRedirect(context+"/login");
			  
		  }else{
			  UsuarioLogin usuario = (UsuarioLogin) sesion.getAttribute("usuarioLoginMap");
			  if(usuario.getDesParametro1() == null){
				  usuario.setDesParametro1("N");
			  }
			  
//			  if(viewRequest.equals("/admin") && !usuario.getDesParametro1().equalsIgnoreCase("S")){
//				  httpResponse.sendRedirect(context+"/admin-mapa-sin-acceso");
//			  }
			  
			  if(viewRequest.equals("/admin") && usuario.getIdeRol()==906){
				  httpResponse.sendRedirect(context+"/admin-mapa-sin-acceso");
			  }
			  
		  }
		  
		  sesion.setAttribute("provieneDe", provieneDe);
		  
		  chain.doFilter(request,response);
		  
	      // Pass request back down the filter chain
	      
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}
