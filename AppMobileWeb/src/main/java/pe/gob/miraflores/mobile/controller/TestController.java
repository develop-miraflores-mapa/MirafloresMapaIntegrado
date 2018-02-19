package pe.gob.miraflores.mobile.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciasRegistro;
import pe.gob.miraflores.mobile.service.email.EmailService;
import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;
import pe.gob.miraflores.mobile.service.seguridad.SeguridadService;

@Controller
@RequestMapping(TestController.BASE_URL)
public class TestController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL = "/test";
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private SeguridadService seguridadService;
	
	@Autowired
	private MapaIncidenciasService mapaIncidenciasService;
	
	@RequestMapping(value = "/voxiva-mapa")
	public ModelAndView voxivaMapa() {
		ModelAndView modelAndView = new ModelAndView("test/voxiva-mapa");
		return modelAndView;
	}
	
	@RequestMapping(value = "/cambistas-mapa")
	public ModelAndView cambistaMapa() {
		ModelAndView modelAndView = new ModelAndView("test/cambistas-mapa");
		return modelAndView;
	}
	
	@RequestMapping(value = "/testComponentMapa")
	public ModelAndView testComponentMapa() {
		ModelAndView modelAndView = new ModelAndView("private/testComponentMapa");
		return modelAndView;
	}

	@RequestMapping(value = "/test-email" , method=RequestMethod.GET)
	public @ResponseBody
	Map<String, ? extends Object> voxivaList() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			String[] to = new String[1];
			
//			to[0]= "asanchez.sys@gmai.com";
//			emailService.enviarCorreo(to, "Prueba envio correo", "Envio de correo test.");
//						
//			to[0]= "cierredecalles@miraflores.gob.pe";
//			emailService.enviarCorreo(to, "Prueba envio correo", "Envio de correo test.");
			
			
			data.put("success", true);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", false);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/test-usuario" , method=RequestMethod.GET)
	public @ResponseBody
	Map<String, ? extends Object> testUsuario(String userName) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", null);
			//data.put("data", seguridadService.testUsuario(userName));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", false);
			e.printStackTrace();
		}
		return data;
	}
	
//	@RequestMapping(value = "/list-voxiva" , method=RequestMethod.GET)
//	public @ResponseBody
//	Map<String, ? extends Object> selectVoxivaListMap(MapaIncidenciasRegistro incidencia) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//			//data.put("data", null);
//			data.put("data", mapaIncidenciasService.selectVoxivaListMap(incidencia));
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("success", false);
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	
}
