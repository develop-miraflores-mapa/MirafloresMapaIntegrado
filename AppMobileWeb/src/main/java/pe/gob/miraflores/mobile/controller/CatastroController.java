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
import pe.gob.miraflores.mobile.service.catastro.CatastroService;

@Controller
@RequestMapping(CatastroController.BASE_URL_MODULO_APE)
public class CatastroController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_MODULO_APE = "/catastro";

	@Autowired
	private CatastroService catastroService;

	@RequestMapping
	public ModelAndView startPage() {
		ModelAndView modelAndView = new ModelAndView("blank");
		return modelAndView;
	}
	
	@RequestMapping(value = "/obtener-georeferencia-via")
	public void getCatalogo(String query, HttpServletResponse response,String callback,Integer gid)
			throws Exception {
		try {
			
			boolean jsonP = false;
			String cb = callback;
			String jsonStr = catastroService.getGeoreferenciaXvia(query,gid);
			if (cb != null) {
			    jsonP = true;
			    response.setContentType("text/javascript");
			} else {
			    response.setContentType("application/json");
			}
			PrintWriter writer = response.getWriter();
			if (jsonP) {
				writer.write(cb + "(");
			}
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
			if (jsonP) {
				writer.write(");");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value = "/get-name-street")
	public void getNameStreet(String latitud,String longitud,String radio, HttpServletResponse response,String callback)
			throws Exception {
		try {
			
			boolean jsonP = false;
			String cb = callback;
			String jsonStr = catastroService.getNameStreetByCordenadas(latitud, longitud, radio);
			if (cb != null) {
			    jsonP = true;
			    response.setContentType("text/javascript");
			} else {
			    response.setContentType("application/json");
			}
			PrintWriter writer = response.getWriter();
			if (jsonP) {
				writer.write(cb + "(");
			}
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
			if (jsonP) {
				writer.write(");");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
//	@RequestMapping(value = "/test")
//	public @ResponseBody
//	Map<String, ? extends Object> listarAuditoriasPeatonales(
//			AuditoriaPeatonal auditoria) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//			data.put("data",catastroService.selectDistritos());
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			log.debug(e.getMessage());
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	
//	@RequestMapping(value = "/obtener-distrito-x-centroide")
//	public @ResponseBody
//	Map<String, ? extends Object> obtenerDistritoPorCentroide(
//			String punto) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//			data.put("data",catastroService.obtenerDistritoPorCentroide(punto));
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			log.debug(e.getMessage());
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	@RequestMapping(value = "/get-sector-zona-by-cordenada")
	public @ResponseBody
	Map<String, ? extends Object> getSectorZonaByCordenada(
			String punto) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data",catastroService.getSectorZonaByCordenada(punto));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			log.debug(e.getMessage());
			e.printStackTrace();
		}
		return data;
	}

}
