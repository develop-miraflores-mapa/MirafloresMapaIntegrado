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

import pe.gob.miraflores.mobile.exception.NegocioException;
import pe.gob.miraflores.mobile.service.catalogo.LocalCatalogoService;


@Controller
@RequestMapping(CatalogoController.BASE_URL_MODULO_CATALOGO)
public class CatalogoController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_MODULO_CATALOGO = "/catalogo";

	@Autowired
	private LocalCatalogoService localCatalogoService;
	
	@RequestMapping
	public void getCatalogo(Integer idGrupo, HttpServletResponse response)
			throws Exception {
		try {
			
			PrintWriter writer = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			String jsonStr = localCatalogoService.getJsonCatalogoByGrupo(idGrupo);
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

	@RequestMapping(value = "/get-catalogo-by-grupo")
	public @ResponseBody
	Map<String, ? extends Object> getCatalogoByGrupo(Integer idGrupo) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", localCatalogoService.findCatalogoByGrupo(idGrupo));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-grupo-voxiva")
	public @ResponseBody
	Map<String, ? extends Object> getGrupoVoxiva(String identificador) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", localCatalogoService.getGrupoCatalogoVoxiva(identificador));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	
	@RequestMapping(value = "/get-catalogo-by-grupo-custom")
	public @ResponseBody
	Map<String, ? extends Object> getCatalogoByGrupoCustom(Integer idGrupo) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", localCatalogoService.findCatalogoByGrupoCustom(idGrupo));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}
	
}
