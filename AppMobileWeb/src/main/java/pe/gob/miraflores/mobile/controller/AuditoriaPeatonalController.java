package pe.gob.miraflores.mobile.controller;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import pe.gob.miraflores.mobile.domain.auditoriapeatonal.AuditoriaPeatonal;
import pe.gob.miraflores.mobile.exception.NegocioException;
import pe.gob.miraflores.mobile.service.auditoriapeatonal.AuditoriaPeatonalService;
import pe.gob.miraflores.mobile.service.catastro.CatastroService;

@Controller
@RequestMapping(AuditoriaPeatonalController.BASE_URL_MODULO_APE)
public class AuditoriaPeatonalController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_MODULO_APE = "/auditoria-peatonal";

	@Autowired
	private AuditoriaPeatonalService auditoriaPeatonalService;
	
	@Autowired
	private CatastroService catastroService;

	@RequestMapping
	public ModelAndView startPage() {
		ModelAndView modelAndView = new ModelAndView("blank");
		return modelAndView;
	}

	@RequestMapping(value = "/registro")
	public ModelAndView formularioRegistro() {
		ModelAndView modelAndView = new ModelAndView("public/FormularioAuditoriaPeatonal");
		return modelAndView;
	}
	
	@RequestMapping(value = "/bandeja")
	public ModelAndView bandejaRegistros() {
		ModelAndView modelAndView = new ModelAndView("private/bandejaAuditoriaPeatonal");
		return modelAndView;
	}

	@RequestMapping(value = "/listar-auditorias-peatonales")
	public @ResponseBody
	Map<String, ? extends Object> listarAuditoriasPeatonales(
			AuditoriaPeatonal auditoria) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(auditoriaPeatonalService.bandejaAuditoriaPeatonal(auditoria));
		} catch (NegocioException e) {
			data.put("data", null);
			log.debug(e.getMessage());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			log.debug(e.getMessage());
			e.printStackTrace();
		}
		return data;
	}
	
	
	

	@RequestMapping(value = "/listar-calles-miraflores")
	public void listarCallesMiraflores(String query,
			HttpServletResponse response) throws Exception {
		try {
			PrintWriter writer = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			String jsonStr = auditoriaPeatonalService
					.getCallesMiraflores(query);
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value = "/test-catastro")
	public @ResponseBody Map<String, ? extends Object> testCatastro() throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			result.put("data", null);
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
		return result;
	}

	@RequestMapping(value = "/get-catalogo")
	public void getCatalogo(Integer idGrupo, HttpServletResponse response)
			throws Exception {
		try {
			
			PrintWriter writer = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			String jsonStr = auditoriaPeatonalService
					.getCatalogoByGrupo(idGrupo);
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/registrar-formulario")
	public @ResponseBody
	Map<String, ? extends Object> registrarFormaulario(
			AuditoriaPeatonal auditoria) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {

			auditoriaPeatonalService.saveAuditoriaPeatonal(auditoria);
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

}
