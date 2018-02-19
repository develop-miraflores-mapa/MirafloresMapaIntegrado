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

import pe.gob.miraflores.mobile.util.Util;

public class FilterSesion implements Filter {

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
		  String token = httpRequest.getParameter("token");
		  String sessionIdParent = httpRequest.getParameter("sessionId");
		 
		  System.out.println(sessionIdParent);
				  
	      if(!Util.validateTokenCierreCalles(token)){
	    	  httpResponse.sendRedirect("/mobileApps/mapa-incidencia/sin-acceso");
	      }
		  
	      // Pass request back down the filter chain
	      chain.doFilter(request,response);
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}
