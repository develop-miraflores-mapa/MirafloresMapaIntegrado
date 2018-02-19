package pe.gob.miraflores.mobile.controller;


import java.io.File;
import java.io.FileInputStream;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

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

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.domain.mapaincidencias.EstadisticaConsulta;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciasRegistro;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.exception.NegocioException;
import pe.gob.miraflores.mobile.service.catastro.CatastroService;
import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;
import pe.gob.miraflores.mobile.service.seguridad.SeguridadService;


@Controller
@RequestMapping(EstadisticasController.BASE_URL_MODULO_APE)
public class EstadisticasController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_MODULO_APE = "/estadisticas-incidencias";

	@Autowired
	private MapaIncidenciasService mapaIncidenciasService;
	
	@Autowired
	private CatastroService catastroService;
	
	@Autowired
	private SeguridadService seguridadService;

	@RequestMapping
	public ModelAndView startPage() {
		ModelAndView modelAndView = new ModelAndView("blank");
		return modelAndView;
	}

	@RequestMapping(value = "/dashboard")
	public ModelAndView dashboard() {
		ModelAndView modelAndView = new ModelAndView("private/estadisticasIntegradasPRUEBA");
		return modelAndView;
	}
	
	
	
//	@RequestMapping(value = "/dynamic-json-prueba" , method = RequestMethod.GET)
//	public @ResponseBody
//	Map<String, ? extends Object> getDynamicJson(Integer tipoGraph, String fecini, String fecfin) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		Map<String, Object> params = new HashMap<String, Object>();
//		try {
//			params.put("tipoGraph", Integer.parseInt(tipoGraph.toString()));
//			params.put("fecini", fecini);
//			params.put("fecfin", fecfin);
//			
//			data.put("data", mapaIncidenciasService.getDynamicJson(params));
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	
//	@RequestMapping(value = "/json-prueba" , method = RequestMethod.GET)
//	public @ResponseBody
//	Map<String, ? extends Object> getJson() throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//			data.put("data", mapaIncidenciasService.getJson());
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			e.printStackTrace();
//		}
//		return data;
//	}
	
//	@RequestMapping(value = "/json-prueba2" , method = RequestMethod.GET)
//	public @ResponseBody
//	Map<String, ? extends Object> getJson2(String inicio, String fin) throws Exception {
//		Map<String, Object> w = new HashMap<String, Object>();
//		Map<String, Object> data = new HashMap<String, Object>();
//		if(inicio==null) {w.put("inicio", inicio);}
//		if(fin==null) {w.put("fin", fin);}
//		try {
//			data.put("data", mapaIncidenciasService.getJson2(w));
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			e.printStackTrace();
//		}
//		return data;
//	}
	
	
	
	// CONTROLADORES PARA ESTADISTICAS 
	
	
	@RequestMapping(value = "/get-data" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getData(EstadisticaConsulta ec) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		try {
			if (ec.getCodUnidad()!=null){
				params.put("codUnidad", ec.getCodUnidad());
			}
			if (ec.getCodCaso()!=null){
				params.put("codCaso", ec.getCodCaso());
			}
			if (ec.getFecDesde()!=null){
				params.put("fecDesde", ec.getFecDesde());
			}
			if (ec.getFecHasta()!=null){
				params.put("fecHasta", ec.getFecHasta());
			}
			
			
			data.put("data", mapaIncidenciasService.getData(params));
//			data.put("data", mapaIncidenciasService.getSerie(ec));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/get-serie" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getSerie(EstadisticaConsulta ec) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		try {
			String thisIp = InetAddress.getLocalHost().getHostAddress();
			System.out.println("IP:"+thisIp);
			if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad()); }
			if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
			if (ec.getCodSubcaso()!=null){ params.put("codSubcaso", ec.getCodSubcaso()); }
			if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
			if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
			
			if (ec.getArea()!=null){ params.put("area", ec.getArea()); }
			if (ec.getZona()!=null){ params.put("zona", ec.getZona()); }
			if (ec.getSubzona()!=null){ params.put("subzona", ec.getSubzona()); }
			if (ec.getEstado()!=null){ params.put("estado", ec.getEstado()); }
			if (ec.getSubestado()!=null){ params.put("subestado", ec.getSubestado()); }
			
			data.put("data", mapaIncidenciasService.getSerie(params));
//			data.put("data", mapaIncidenciasService.getSerie(ec));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
		
//		Map<String, Object> data = new HashMap<String, Object>();
//		try {
//			data.put("data", mapaIncidenciasService.getSerie(params));
//		} catch (Exception e) {
//			// TODO: handle exception
//			data.put("data", null);
//			e.printStackTrace();
//		}
//		return data;
	}

	@RequestMapping(value = "/get-pie" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getPie(EstadisticaConsulta ec) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		try {
			if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad()); }
			if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
			if (ec.getCodSubcaso()!=null){ params.put("codSubcaso", ec.getCodSubcaso()); }
			if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
			if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
			
			if (ec.getArea()!=null){ params.put("area", ec.getArea()); }
			if (ec.getZona()!=null){ params.put("zona", ec.getZona()); }
			if (ec.getSubzona()!=null){ params.put("subzona", ec.getSubzona()); }
			if (ec.getEstado()!=null){ params.put("estado", ec.getEstado()); }
			if (ec.getSubestado()!=null){ params.put("subestado", ec.getSubestado()); }
			
//			data.put("data", mapaIncidenciasService.getPie(params));
//			data.put("data", mapaIncidenciasService.getSerie(ec));
			
			List<Map<String, Object>> result = mapaIncidenciasService.getPie(params);
			
			if(result.size()!=0){
				data.put("data", result);
			} else {
				data.put("data", mapaIncidenciasService.getPieNull());
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/get-heatmap" , method = RequestMethod.GET)
	public @ResponseBody 
//	Map<String, ? extends Object> getHeatMap(EstadisticaConsulta ec) throws Exception {
	Map<String, ? extends Object> getHeatMap(Integer unidad, Integer caso, Integer subcaso, 
												String fecDesde, String fecHasta, 
													String area, String zona, String subzona, 
														Integer estado, Integer subestado) throws Exception {
		
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		
//		System.out.println("Parametro de entrada al getHeatMap....");
//		System.out.println("ec.getCodUnidad() = "+ec.getCodUnidad());
//		System.out.println("ec.getCodCaso(): "+ec.getCodCaso());
//		System.out.println("ec.getFecDesde(): "+ec.getFecDesde());
//		System.out.println("ec.getFecHasta(): "+ec.getFecHasta());
		
		SimpleDateFormat format = new SimpleDateFormat("dd/mm/yyyy");
//        Date parsed = format.parse("20110210");
//        java.sql.Date sql = new java.sql.Date(format.parse("20110210").getTime());
		try {
//			if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad()); }
//			if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
//			if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
//			if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
//			if (unidad!=null){
//				params.put("codUnidad", unidad);
//			}
//			if (caso!=null){
//				params.put("codCaso", caso);
//			}
//			if (fecDesde!=null){
//				params.put("fecDesde", new java.sql.Date(format.parse(fecDesde).getTime()));
//			}
//			if (fecHasta!=null){
//				params.put("fecHasta", new java.sql.Date(format.parse(fecHasta).getTime()));
//			}
			
			if (unidad!=null){ params.put("codUnidad", unidad); }
			if (caso!=null){ params.put("codCaso", caso); }
			if (subcaso!=null){ params.put("codSubcaso", subcaso); }
			if (fecDesde!=null){ params.put("fecDesde", fecDesde); }
			if (fecHasta!=null){ params.put("fecHasta", fecHasta); }
			
			if (area!=null){ params.put("area", area); }
			if (zona!=null){ params.put("zona", zona); }
			if (subzona!=null){ params.put("subzona", subzona); }
			if (estado!=null){ params.put("estado", estado); }
			if (subestado!=null){ params.put("subestado", subestado); }
			
			data.put("data", mapaIncidenciasService.getHeatmap(params));
			
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-frecuencia-dia" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getFrecuenciaDia(EstadisticaConsulta ec) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		SimpleDateFormat format = new SimpleDateFormat("dd/mm/yyyy");
		try {
			if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad()); }
			if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
			if (ec.getCodSubcaso()!=null){ params.put("codSubcaso", ec.getCodSubcaso()); }
			if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
			if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
			
			if (ec.getArea()!=null){ params.put("area", ec.getArea()); }
			if (ec.getZona()!=null){ params.put("zona", ec.getZona()); }
			if (ec.getSubzona()!=null){ params.put("subzona", ec.getSubzona()); }
			if (ec.getEstado()!=null){ params.put("estado", ec.getEstado()); }
			if (ec.getSubestado()!=null){ params.put("subestado", ec.getSubestado()); }
			
			data.put("data", mapaIncidenciasService.getFrecuenciaDia(params));
		} catch (Exception e) {
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/get-frecuencia-hora" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getFrecuenciaHora(EstadisticaConsulta ec) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		SimpleDateFormat format = new SimpleDateFormat("dd/mm/yyyy");
		try {
			if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad()); }
			if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
			if (ec.getCodSubcaso()!=null){ params.put("codSubcaso", ec.getCodSubcaso()); }
			if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
			if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
			
			if (ec.getArea()!=null){ params.put("area", ec.getArea()); }
			if (ec.getZona()!=null){ params.put("zona", ec.getZona()); }
			if (ec.getSubzona()!=null){ params.put("subzona", ec.getSubzona()); }
			if (ec.getEstado()!=null){ params.put("estado", ec.getEstado()); }
			if (ec.getSubestado()!=null){ params.put("subestado", ec.getSubestado()); }
			
			data.put("data", mapaIncidenciasService.getFrecuenciaHora(params));
		} catch (Exception e) {
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
	
	@RequestMapping(value = "/get-top-zona" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getTopZona(EstadisticaConsulta ec) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		SimpleDateFormat format = new SimpleDateFormat("dd/mm/yyyy");
		try {
			if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad()); }
			if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
			if (ec.getCodSubcaso()!=null){ params.put("codSubcaso", ec.getCodSubcaso()); }
			if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
			if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
			
			if (ec.getArea()!=null){ params.put("area", ec.getArea()); }
			if (ec.getZona()!=null){ params.put("zona", ec.getZona()); }
			if (ec.getSubzona()!=null){ params.put("subzona", ec.getSubzona()); }
			if (ec.getEstado()!=null){ params.put("estado", ec.getEstado()); }
			if (ec.getSubestado()!=null){ params.put("subestado", ec.getSubestado()); }
			
			data.put("data", mapaIncidenciasService.getTopZona(params));
		} catch (Exception e) {
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-poligono-zona" , method = RequestMethod.GET)
	public @ResponseBody 
	Map<String, ? extends Object> getPoligonoZona() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", catastroService.getPoligonoZona());
		} catch (Exception e) {
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}
}
