package pe.gob.miraflores.mobile.controller;


import java.io.File;
import java.io.FileInputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.lowagie.text.pdf.codec.Base64.InputStream;

import pe.gob.miraflores.mobile.domain.infovigilante.GeoInfoVigilante;
import pe.gob.miraflores.mobile.domain.mapaincidencias.AuditoriaIncidencia;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciasRegistro;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.exception.NegocioException;
import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;
import pe.gob.miraflores.mobile.service.seguridad.SeguridadService;


@Controller
@RequestMapping(CierreCallesController.BASE_URL_MODULO_APE)
public class CierreCallesController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_MODULO_APE = "/cierre-calles";

	@Autowired
	private MapaIncidenciasService mapaIncidenciasService;
	
	@Autowired
	private SeguridadService seguridadService;

	@RequestMapping
	public ModelAndView startPage() {
		ModelAndView modelAndView = new ModelAndView("blank");
		return modelAndView;
	}

	@RequestMapping(value = "/registro")
	public ModelAndView formularioRegistro(Integer id) {
		ModelAndView modelAndView = new ModelAndView("private/formularioRegistroCierreCalles");
		modelAndView.addObject("idIncidencia", id);
		return modelAndView;
	}
	
	@RequestMapping(value = "/waze-service")
	public void getCatalogo(Integer idGrupo, HttpServletResponse response)
			throws Exception {
		try {
			
			PrintWriter writer = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			String jsonStr = mapaIncidenciasService.buildJsonRestWaze(null);
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
//	@RequestMapping(value = "/waze-service-xmlformat")
//	public ModelAndView listaIncidenciasWazeXmlFormat(MapaIncidenciasRegistro incidencia,HttpServletResponse response)
//			throws Exception {
//		ModelAndView modelAndView = new ModelAndView("private/xmlFormatWaze");
//		
//		try {
//			String xmlString = mapaIncidenciasService.listaIncidenciasXmlFormatWaze(incidencia);
//			modelAndView.addObject("xml", xmlString);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		return modelAndView;
//	}
	
//	@RequestMapping(value = "/registrar-incidencia" )// , method=RequestMethod.POST)
//	public @ResponseBody
//	Map<String, ? extends Object> registrarFormaulario(
//			MapaIncidenciasRegistro incidencia) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//
//			mapaIncidenciasService.registrar(incidencia);
//			data.put("success", Boolean.TRUE);
//		} catch (NegocioException e) {
//			data.put("success", Boolean.FALSE);
//			data.put("message", e.getMessage());
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("success", Boolean.FALSE);
//			data.put("message", "Error al intentar registrar los datos.");
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	/* *
	 * TETRA DOLPHIN CONSUME
	 * 25/11/2015
	 * */

	@RequestMapping(value = "/dolphin-service")
	public void getJSONDolphin(HttpServletResponse response)
			throws Exception {
		try {
			
			PrintWriter writer = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			String jsonStr = mapaIncidenciasService.buildJsonRestDolphin();
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	@RequestMapping(value = "/obtener-detalle-incidencia")
	public @ResponseBody
	Map<String, ? extends Object> obtenerDetalleIndicencia(Integer issi) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {

			data.put("data", mapaIncidenciasService.obtenerDetalleIncidencia(issi));
			data.put("success", Boolean.TRUE);
		} catch (NegocioException e) {
			data.put("success", Boolean.FALSE);
			data.put("message", e.getMessage());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar registrar los datos.");
			e.printStackTrace();
		}
		return data;
	}
	
	
	/* *
	 * Mapa de Incidencias
	 * 26/10/2015
	 * */
	@RequestMapping(value = "/mapa")
	public ModelAndView mapaIncidencias() {
		ModelAndView modelAndView = new ModelAndView("public/mapaIncidencias");
		return modelAndView;
	}
	
	@RequestMapping(value = "/mapa/admin")
	public ModelAndView mapaIncidenciasAdmin() {
		ModelAndView modelAndView = new ModelAndView("private/admin-mapa");
		return modelAndView;
	}
	
	@RequestMapping(value = "/mapa/audit")
	public ModelAndView mapaIncidenciasAudit() {
		ModelAndView modelAndView = new ModelAndView("private/audit-mapa");
		return modelAndView;
	}
	
	
	
	@RequestMapping(value = "/bandeja-cierre-calles")
	public ModelAndView bandejaCierreCalles() {
		ModelAndView modelAndView = new ModelAndView("private/bandejaCierreCalles");
		modelAndView.addObject("modoConsulta", "0");
		return modelAndView;
	}
	
	
	@RequestMapping(value = "/consulta-cierre-calles")
	public ModelAndView consultaCierreCalles() {
		ModelAndView modelAndView = new ModelAndView("private/bandejaCierreCalles");
		modelAndView.addObject("modoConsulta", "1");
		return modelAndView;
	}
	
	@RequestMapping(value = "/view-mapa-consulta")
	public ModelAndView viewMapaConsulta(String puntos,Integer idIncidencia) {
		ModelAndView modelAndView = new ModelAndView("private/view-mapa-consulta");
		modelAndView.addObject("puntos",puntos);
		modelAndView.addObject("idIncidencia",idIncidencia);
		return modelAndView;
	}
	
//	@RequestMapping(value = "/exportar-bandeja")
//	public void exportarBandeja(MapaIncidenciasRegistro incidencia,HttpServletResponse response) {
//		System.out.println("exportar bandeja");
//		System.out.println(incidencia.toString());
//		
//        try {
//            File file = mapaIncidenciasService.exportarExcelBandejaCierreCalles(incidencia);
//            response.setHeader("Content-Disposition", "; filename=\"CIERRE_CALLES.xls\";");
//            response.setContentLength(Long.valueOf(file.length()).intValue());
//            response.setContentType("application/octet-stream");
//            FileInputStream fileIS = new FileInputStream(file);
//            IOUtils.copy(fileIS, response.getOutputStream());
//            response.flushBuffer();
//        } catch (Exception ex) {
//        	ex.printStackTrace();
//        }  
//		
//	}
	
	
	@RequestMapping(value = "/usuarios-list" )
	public @ResponseBody
	Map<String, ? extends Object> listUsuarios(UsuarioLogin usuario) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", seguridadService.listUsuarios(usuario));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/opciones-list" )
	public @ResponseBody
	Map<String, ? extends Object> listOpciones() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", seguridadService.getOpciones());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/usuario-registro" , method = RequestMethod.POST)
	public @ResponseBody
	Map<String, ? extends Object> registrarUsuario(UsuarioLogin usuario) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("usuario", seguridadService.registrar(usuario));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/usuario-id" , method = RequestMethod.POST)
//	@RequestMapping(value = "/usuario-id" , method = RequestMethod.GET)
	public @ResponseBody
	Map<String, ? extends Object> getUsuarioById(Integer idUsuario) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("usuario", seguridadService.getById(idUsuario));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/usuario-eliminar" , method = RequestMethod.POST)
	public @ResponseBody
	Map<String, ? extends Object> eliminarUsuario(Integer idUsuario) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("usuario", seguridadService.eliminar(idUsuario));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
//	@RequestMapping(value = "/reset-rol" , method = RequestMethod.POST)
//	public @ResponseBody
//	Map<String, ? extends Object> resetRol() throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//			data.put("usuario", seguridadService.resetRol());
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	@RequestMapping(value = "/reset-rol" , method = RequestMethod.POST)
	public @ResponseBody
	int resetRol(UsuarioLogin usuarioLogin) throws Exception {
		int result;
		try {
			result = seguridadService.resetRol(usuarioLogin);
		} catch (Exception e) {
			result = 0;
			e.printStackTrace();
		}
		return result;
	}
	
	@RequestMapping(value = "/bandeja-auditoria", method=RequestMethod.GET)
	public @ResponseBody
	Map<String, ? extends Object> bandejaAuditoria(AuditoriaIncidencia auditoria) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.bandejaAuditoria(auditoria));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			data.put("total", 0);
			e.printStackTrace();
		}
		
		return data;
	}
	
	
	@RequestMapping(value = "/tetra-list-timelap" , method=RequestMethod.GET)
	public @ResponseBody
	Map<String, ? extends Object> tetraTimelapList(MapaIncidenciaRegistro incidencia) throws Exception {
//	Map<String, ? extends Object> tetraTimelapList(Integer idIncidencia, String minuto) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
//			data.put("data",mapaIncidenciasService.tetraTimelapList(idIncidencia, minuto));
			data.put("data",mapaIncidenciasService.tetraTimelapList(incidencia));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		
		return data;
		
	}
	
	
	@RequestMapping(value = "/tetra-list-timelap2" , method=RequestMethod.GET)
	public @ResponseBody
//	Map<String, ? extends Object> tetraTimelapList(MapaIncidenciaRegistro incidencia) throws Exception {
	Map<String, ? extends Object> tetraTimelapList2(Integer id) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
//			data.put("data",mapaIncidenciasService.tetraTimelapListTest());
			data.put("data",mapaIncidenciasService.tetraTimelapListTestPrueba(id, "0"));
			
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		
		return data;
	
	}
	
	@RequestMapping(value = "/tetra-list-timelap-prueba" , method=RequestMethod.GET)
	public @ResponseBody
//	Map<String, ? extends Object> tetraTimelapList(MapaIncidenciaRegistro incidencia) throws Exception {
	Map<String, ? extends Object> tetraTimelapListPrueba(Integer idIncidencia, String minuto) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data",mapaIncidenciasService.tetraTimelapListTestPrueba(idIncidencia, minuto));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		
		return data;
	}
}
