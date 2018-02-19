package pe.gob.miraflores.mobile.controller;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.domain.infovigilante.GeoInfoVigilante;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoCambista;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ImagenIncidencia;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaBitacora;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaGenerico;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaZonificacion;
import pe.gob.miraflores.mobile.domain.mapaincidencias.PreInscripcionCierreCalle;
import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;
import pe.gob.miraflores.mobile.service.mapaincidencias.impl.MapaHistoricoService;
import pe.gob.miraflores.mobile.util.CambistasUtil;
import pe.gob.miraflores.mobile.vo.VoxivaVO;

@Controller
@RequestMapping(IncidenciasController.BASE_URL_MODULO_INCIDENCIA)
public class IncidenciasController {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_MODULO_INCIDENCIA = "/mapa-incidencia";

	@Autowired
	private MapaIncidenciasService mapaIncidenciasService;

	@Autowired
	private MapaHistoricoService mapaHistoricoService;

	@RequestMapping
	public ModelAndView startPage() {
		ModelAndView modelAndView = new ModelAndView("blank");
		return modelAndView;
	}

	@RequestMapping(value = "/mapa-historico")
	public ModelAndView mapaHistorico() {
		ModelAndView modelAndView = new ModelAndView("private/mapaHistorico");
		return modelAndView;
	}

	@RequestMapping(value = "/mapa-duplicado")
	public ModelAndView mapaDuplicado() {
		ModelAndView modelAndView = new ModelAndView("public/mapaIncidenciasDuplicado");
		return modelAndView;
	}

	@RequestMapping(value = "/visor-partes")
	public ModelAndView visorPartes() {
		ModelAndView modelAndView = new ModelAndView("private/parteViewer");
		return modelAndView;
	}

	// @RequestMapping(value = "/voxiva-list" , method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> voxivaList(
	// MapaIncidenciasRegistro incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data",
	// mapaIncidenciasService.listaInicdenciasVoxiva(incidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	@RequestMapping(value = "/voxiva-list2", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> voxivaList(MapaIncidenciaRegistro incidencia) throws Exception {
		// Map<String, ? extends Object> voxivaList(MapaIncidenciaRegistro
		// incidencia, HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		// HttpSession sesion = request.getSession();
		// UsuarioLogin usuario = (UsuarioLogin)
		// sesion.getAttribute("usuarioLoginMap");
		// incidencia.setUsrRegistra(usuario.getDesLoginUser());
		// incidencia.setUsrRol(usuario.getIdeRol());
		try {
			data.put("data", mapaIncidenciasService.listaAlertas(incidencia));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/voxiva-list-timelap", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> voxivaListTimelap(MapaIncidenciaRegistro incidencia)
			throws Exception {

		Map<String, Object> data = new HashMap<String, Object>();
		// if (incidencia.getIdIncidencia()!=null){
		// Integer idInc = incidencia.getIdIncidencia();
		// }

		try {
			data.put("data", mapaIncidenciasService.listaAlertasTimelap(incidencia));
			// data.put("dataImagen",
			// mapaIncidenciasService.listaImagenIncidenciaTimelap(incidencia));
			// data.putAll(mapaIncidenciasService.consultarIncidencia(idIncidencia));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/voxiva-list-exposicion", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> voxivaListExposicion(MapaIncidenciaRegistro incidencia)
			throws Exception {

		Map<String, Object> data = new HashMap<String, Object>();
		// if (incidencia.getIdIncidencia()!=null){
		// Integer idInc = incidencia.getIdIncidencia();
		// }

		try {
			data.put("data", mapaIncidenciasService.listaAlertasExposicion(incidencia));
			// data.put("data",
			// mapaIncidenciasService.listaAlertasTimelap(incidencia));
			// data.put("dataImagen",
			// mapaIncidenciasService.listaImagenIncidenciaTimelap(incidencia));
			// data.putAll(mapaIncidenciasService.consultarIncidencia(idIncidencia));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/list-exposicion", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> listaExposicion(MapaIncidenciaRegistro incidencia) throws Exception {
		// Map<String, ? extends Object> listaExposicion() throws Exception {

		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();

		// if (incidencia.getIdIncidencia()!=null){
		// Integer idInc = incidencia.getIdIncidencia();
		// }

		// MapaIncidenciaRegistro incidencia = new MapaIncidenciaRegistro();

		for (int i = 1; i < 4; i++) {
			Map<String, Object> a = new HashMap<String, Object>();
			try {
				a.put("name", "Area " + i);
				incidencia.setArea(i + "");
				a.put("children", mapaIncidenciasService.listaExposicion(incidencia));
			} catch (Exception e) {
				// TODO: handle exception
				a.put("data", null);
				e.printStackTrace();
			}
			data.add(a);
		}

		return data;

	}

	@RequestMapping(value = "/cambistas-list")
	public @ResponseBody Map<String, ? extends Object> cambistasList(GeoInfoCambista cambista) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listaInicdenciasCambistas(cambista));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/reach-feed", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> reachList() throws Exception {
		// Map<String, ? extends Object> voxivaList(MapaIncidenciaRegistro
		// incidencia, HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		// HttpSession sesion = request.getSession();
		// UsuarioLogin usuario = (UsuarioLogin)
		// sesion.getAttribute("usuarioLoginMap");
		// incidencia.setUsrRegistra(usuario.getDesLoginUser());
		// incidencia.setUsrRol(usuario.getIdeRol());
		try {
			data.put("data", mapaIncidenciasService.listaReach());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/alerta-pos", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> alertaPosList() throws Exception {
		// Map<String, ? extends Object> voxivaList(MapaIncidenciaRegistro
		// incidencia, HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		// HttpSession sesion = request.getSession();
		// UsuarioLogin usuario = (UsuarioLogin)
		// sesion.getAttribute("usuarioLoginMap");
		// incidencia.setUsrRegistra(usuario.getDesLoginUser());
		// incidencia.setUsrRol(usuario.getIdeRol());
		try {
			data.put("data", mapaIncidenciasService.listaAlertaPos());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-tipif-from-reach")
	public @ResponseBody Map<String, ? extends Object> getTipifReach(Integer tipifReach) throws Exception {
		// Map<String, ? extends Object> voxivaList(MapaIncidenciaRegistro
		// incidencia, HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		// HttpSession sesion = request.getSession();
		// UsuarioLogin usuario = (UsuarioLogin)
		// sesion.getAttribute("usuarioLoginMap");
		// incidencia.setUsrRegistra(usuario.getDesLoginUser());
		// incidencia.setUsrRol(usuario.getIdeRol());
		try {
			data.putAll(mapaIncidenciasService.obtenerTipifReach(tipifReach));
		} catch (Exception e) {
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/get-incidencia-by-id")
	// public @ResponseBody
	// Map<String, ? extends Object> getIncidenciaById(Integer id) throws
	// Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	//
	// data.put("incidencia",
	// mapaIncidenciasService.obtenerIncidenciaPorId(id));
	// data.put("success", Boolean.TRUE);
	// } catch (NegocioException e) {
	// data.put("success", Boolean.FALSE);
	// data.put("message", e.getMessage());
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("success", Boolean.FALSE);
	// data.put("message", "Error al obtener los datos.");
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/anular-incidencia")
	// public @ResponseBody
	// Map<String, ? extends Object> anularincidencia(Integer id) throws
	// Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// mapaIncidenciasService.anularIncidencia(id);
	// data.put("success", Boolean.TRUE);
	// }catch (Exception e) {
	// // TODO: handle exception
	// data.put("success", Boolean.FALSE);
	// data.put("message", "Error al anular el registro.");
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/incidencias-list" , method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> incidenciasList(
	// MapaIncidenciasRegistro incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.putAll(mapaIncidenciasService.listaInicdenciasPortipo(incidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// data.put("total", 0);
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/incidencias-list-generic" ,
	// method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> incidenciasListGeneric(
	// MapaIncidenciasRegistro incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.putAll(mapaIncidenciasService.listaInicdenciasGeneric(incidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// data.put("total", 0);
	// e.printStackTrace();
	// }
	// return data;
	// }

	@RequestMapping(value = "/test-email", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> testEmail() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {

			// String[] arrMails = new String[1];
			// arrMails[0] = "FATIMARODRIGUEZSERRA@GMAIL.COM";
			// String mensaje ="<div
			// style=\"width:650px;padding:15px;background:#f5f5f5;border:1px
			// #ccc solid;font-family:Verdana;font-size:12px;\"><div
			// style=\"background:#FFF;margin:4px 0px 4px 0px;border:solid 1px
			// #CCC;\"><center><img height=\"65\" width=\"200\"
			// src=\"http://digital.miraflores.gob.pe:8080/miraflores/librerias/lib/imglibro/cabMirMail.jpg\"></center></div><h1
			// style=\"font-size:16px;text-align:center;\">Formulario de Libro
			// de Reclamo N° 50-2015</h1><p><b>ESTIMADO(A):</b></p><p>UD. HA
			// REALIZADO UNA SOLICITUD DE TIPO: <b>LIBRO DE RECLAMO,</b>
			// ENVIANDO LA SIGUIENTE INFORMACIÓN:</p><table
			// style=\"text-transform:uppercase;font-size:12px;\" border=\"1\"
			// cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td
			// style=\"text-align:right;padding:5px;\"><b>SOLICITANTE:</b></td><td
			// style=\"padding:5px;\" >CARMELA ANGELICA MARIA DE
			// FATIMA</td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>Local de
			// Reclamo:</b></td><td style=\"padding:5px;\">PALACIO
			// MUNICIPAL</td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>fecha:</b></td><td
			// style=\"padding:5px;\">12/12/2015</td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>dni:</b></td><td
			// style=\"padding:5px;\">07816120</td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>TELÉFONO:</b></td><td
			// style=\"padding:5px;\">980902244</td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>DOMICILIO:</b></td><td
			// style=\"padding:5px;\">CALLE BERLIN 1046 </td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>correo
			// electrónico:</b></td><td
			// style=\"padding:5px;\">FATIMARODRIGUEZSERRA@GMAIL.COM
			// </td></tr><tr><td style=\"text-align:right;padding:5px;\"><b>tipo
			// servicio:</b></td><td style=\"padding:5px;\">ACCESO A LA
			// INFORMACION SOLICITUD Nº 1269 EL 12 DE NOVIEMBRE DEL 2015
			// SOLICITE UNA COPIA DE LA LICENCIA DE EDIFICACIÓN CORRESPONDIENTE
			// A LA INICIATIVA PRIVADA DE LOS ESTACIONAMIENTOS SUBTERRÁNEOS.EL
			// 20 DE NOVIEMBRE SOLICITARON UNA PRORROGA DE CINCO DÍAS
			// ÚTILES.¿QUE PASÓ? HA TRANSCURRIDO UN MES DESDE MI PEDIDO Y NADIE
			// RESPONDE.</td></tr><tr><td
			// style=\"text-align:right;padding:5px;\"><b>DESCRIPCIÓN DEL
			// RECLAMO:</b></td><td style=\"padding:5px;\">REQUIERO LA
			// INFORMACION</td></tr></tbody></table>";
			// emailService.enviarCorreo(arrMails, "Libro de Reclamo Nro. 50 -
			// Municipalidad de Miraflores", mensaje);

			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/sin-acceso")
	public ModelAndView demoMapaDistrito() {
		ModelAndView modelAndView = new ModelAndView("public/sinAcceso");
		return modelAndView;
	}

	// @RequestMapping(value = "/demo-distritos")
	// public ModelAndView demoMapaDistrito() {
	// ModelAndView modelAndView = new ModelAndView("public/mapaDistritosDemo");
	// return modelAndView;
	// }

	@RequestMapping(value = "/voxiva-register-incidencia")
	public void getCatalogo(VoxivaVO incidencia, HttpServletResponse response, String callback, Integer idIncidencia)
			throws Exception {

		String jsonStr = null;

		try {
			if (idIncidencia != null && incidencia.getIdCaso() == null) {
				incidencia.setIdCaso(idIncidencia);
			}

			boolean jsonP = false;
			String cb = callback;
			if (cb != null) {
				jsonP = true;
				response.setContentType("text/javascript");
			} else {
				response.setContentType("application/json");
			}

			mapaIncidenciasService.createVoxivaInit(incidencia);

			PrintWriter writer = response.getWriter();
			if (jsonP) {
				writer.write(cb + "(");
			}

			jsonStr = "{success:true}";

			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
			if (jsonP) {
				writer.write(");");
			}

		} catch (Exception e) {
			jsonStr = "{success:false,message:\"" + e.getMessage() + "\"}";
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/estacionamientos")
	public @ResponseBody Map<String, ? extends Object> getEstacionamientos(MapaIncidenciaGenerico param)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.getGeoGenerico(param));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/estacionamientos-service")
	public @ResponseBody Map<String, ? extends Object> getEstacionamientosService(MapaIncidenciaGenerico param)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("estacionamientos", mapaIncidenciasService.buildServiceWazeEstacionamientos(param));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/reach-service")
	// public void getCatalogo(Integer idGrupo, HttpServletResponse response)
	// throws Exception {
	// try {
	//
	// PrintWriter writer = response.getWriter();
	// response.setContentType("application/json");
	// response.setCharacterEncoding("UTF-8");
	// String jsonStr = mapaIncidenciasService.buildJsonRestWaze(null);
	// if (!StringUtils.isEmpty(jsonStr)) {
	// writer.write(jsonStr);
	// }
	// } catch (Exception e) {
	// e.printStackTrace();
	// }
	// }

	@RequestMapping(value = "/vigilantes")
	public @ResponseBody Map<String, ? extends Object> getVigilantes(GeoInfoVigilante param) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {

			data.put("data", mapaIncidenciasService.getGeoVigilantes(param));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/limites-velocidad")
	public @ResponseBody Map<String, ? extends Object> buildServiceWazeLimitesVelocidad(MapaIncidenciaGenerico param)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("limitesVelocidad", mapaIncidenciasService.buildServiceWazeLimitesVelocidad(param));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/recojo-basura")
	public @ResponseBody Map<String, ? extends Object> getRecojoBasura(MapaIncidenciaGenerico param) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			param.setTipo(MobileConstantes.MEDIO_RECOJO_BASURA);

			if (param.getQuery() != null) {
				String[] arr = param.getQuery().split(" ");

				if (arr.length > 1) {
					if (StringUtils.isNumeric(arr[arr.length - 1])) {
						param.setCuadra(arr[arr.length - 1]);
						param.setNombre(param.getQuery().substring(0, param.getQuery().lastIndexOf(" ")));
					} else {
						param.setNombre(param.getQuery().trim());
					}

				} else {
					if (arr.length == 1) {
						param.setNombre(param.getQuery().trim());
					}
				}

			}

			data.put("data", mapaIncidenciasService.getGeoGenerico(param));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/recojo-basura/mapa")
	public ModelAndView goViewMapaRecojoBasura() {
		ModelAndView modelAndView = new ModelAndView("public/recojo-basura-mapa");
		return modelAndView;
	}

	@RequestMapping(value = "/atencion-rapida-cc")
	public ModelAndView goAtencionRapidaCC() {
		ModelAndView modelAndView = new ModelAndView("public/form-atencion-rapida-cierre-calle");
		return modelAndView;
	}

	@RequestMapping(value = "/pre-registro-cierre-calle", method = { RequestMethod.POST })
	public @ResponseBody Map<String, ? extends Object> insertPreRegistroCierreCalle(PreInscripcionCierreCalle o,
			HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			o.setDireccionIP(request.getRemoteAddr());
			PreInscripcionCierreCalle p = mapaIncidenciasService.insertPreRegistroCierreCalle(o);
			data.put("data", p);
			data.put("message", "La pre-inscripción de ingresó de forma correcta, con el Número ." + p.getId());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/list-pre-registro-cierre-calle")
	public @ResponseBody Map<String, ? extends Object> obtenerPreRegistrosCierreCalle(PreInscripcionCierreCalle o)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.obtenerPreRegistrosCierreCalle(o));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-data-cambistas")
	public @ResponseBody Map<String, ? extends Object> getDataCambistas(GeoInfoCambista cambista) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.getDataCambistas(cambista));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			data.put("message", "Error al intentar obtener los datos.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/admin-pre-registro")
	public ModelAndView adminPreRegistro() {
		ModelAndView modelAndView = new ModelAndView("private/admin-pre-registro");
		return modelAndView;
	}

	@RequestMapping(value = "/registro-atencion-rapida")
	public ModelAndView formularioRegistro(Integer idPreRegistro) {
		ModelAndView modelAndView = new ModelAndView("private/formularioRegistroCierreCallesAtencionRapida");
		try {
			modelAndView.addObject("preRegistro", mapaIncidenciasService.getPreRegistroById(idPreRegistro));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return modelAndView;
	}

	@RequestMapping(value = "/bandeja")
	public ModelAndView mapaIncidenciasBandeja() {
		ModelAndView modelAndView = new ModelAndView("private/bandeja-incidencia");
		return modelAndView;
	}

	@RequestMapping(value = "/experimental")
	public ModelAndView mapaIncidenciasBandeja2() {
		ModelAndView modelAndView = new ModelAndView("private/pruebaSlider");
		return modelAndView;
	}

	@RequestMapping(value = "/testdatasource")
	public @ResponseBody Map<String, ? extends Object> getGeometriaByIdIncidencia(Integer idIncidencia)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaHistoricoService.listTestHistorico());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/actualizar-geoincidencia")
	// public @ResponseBody
	// Map<String, ? extends Object>
	// actualizarGeoIncidencia(MapaIncidenciasRegistro incidencia) throws
	// Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data",
	// mapaIncidenciasService.actualizarGeoIncidencia(incidencia));
	// data.put("message", "Actualización efectuada correctamente.");
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// data.put("message", "Error al intentar actualizar los datos.");
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/get-geometria-by-id-incidencia")
	// public @ResponseBody
	// Map<String, ? extends Object> getGeometriaByIdIncidencia(Integer
	// idIncidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.putAll(mapaIncidenciasService.getGeometriaByIdIncidencia(idIncidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/eliminar-incidencia")
	// public @ResponseBody
	// Map<String, ? extends Object> eliminarIncidencia(Integer idIncidencia)
	// throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// mapaIncidenciasService.anularIncidencia(idIncidencia);
	// data.put("message", "Registro eliminado de forma correcta.");
	// data.put("success", Boolean.TRUE);
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("success", Boolean.FALSE);
	// data.put("message", "Error al intentar eliminar el registro.");
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/registrar-form-mapa")
	// public @ResponseBody
	// Map<String, ? extends Object> registrarFormMapa(MapaIncidenciasRegistro
	// incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// incidencia.setTipoIncidencia(MobileConstantes.VOXIVA_WS);
	// mapaIncidenciasService.registrarIncidenciaGenericWithGeometria(incidencia);
	// data.put("incidencia", incidencia);
	// data.put("success", Boolean.TRUE);
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("success", Boolean.FALSE);
	// data.put("incidencia", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	// @RequestMapping(value = "/set-estado-marker-mapa")
	// public @ResponseBody
	// Map<String, ? extends Object> setEstadoMarkerMapa(Integer idIncidencia)
	// throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// MapaIncidenciasRegistro incidencia = new MapaIncidenciasRegistro();
	// incidencia.setIdIncidencia(idIncidencia);
	// incidencia.setIndLeido(MobileConstantes.LETRA_SI);
	// mapaIncidenciasService.registrarIncidenciaGenericWithGeometria(incidencia);
	// data.put("success", Boolean.TRUE);
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("success", Boolean.FALSE);
	// data.put("incidencia", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	@RequestMapping(value = "/set-estado-marker-mapa2")
	public @ResponseBody
	// Map<String, ? extends Object> setEstadoMarkerMapa2(Integer idIncidencia)
	// throws Exception {
	void setEstadoMarkerMapa2(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			MapaIncidenciaRegistro incidencia = new MapaIncidenciaRegistro();
			incidencia.setIdIncidencia(idIncidencia);
			incidencia.setIndLeido(MobileConstantes.LETRA_SI);
			mapaIncidenciasService.cambiarEstadoMarker(incidencia);
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("incidencia", null);
			e.printStackTrace();
		}
		// return data;
	}

	@RequestMapping(value = "/set-estado-marker-respuesta")
	public @ResponseBody void setEstadoMarkerRespuesta(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			MapaIncidenciaRegistro incidencia = new MapaIncidenciaRegistro();
			incidencia.setIdIncidencia(idIncidencia);
			incidencia.setIndLeido(MobileConstantes.LETRA_NO);
			mapaIncidenciasService.cambiarEstadoMarker(incidencia);
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("incidencia", null);
			e.printStackTrace();
		}
		// return data;
	}

	@RequestMapping(value = "/get-ubicacion-cambistas")
	public void getUbicacionCambista(HttpServletResponse response) throws Exception {
		try {

			PrintWriter writer = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");

			Gson json = new Gson();

			String alertas = " , \"alertas\":" + json.toJson(mapaIncidenciasService.getAlertaCambista());

			String jsonStr = "{ \"data\":" + CambistasUtil.getResponseUbicacionCambistas() + alertas + " }";
			if (!StringUtils.isEmpty(jsonStr)) {
				writer.write(jsonStr);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/list-camaras")
	public @ResponseBody Map<String, ? extends Object> selectCamarasVideoVigilancia(Integer rol) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		if (rol != null && rol != 0) {
			switch (rol) {
			case 1005:
				params.put("area", "1");
				break;
			case 1006:
				params.put("area", "2");
				break;
			case 1007:
				params.put("area", "3");
				break;
			default:
				break;
			}
		}
		try {
			data.put("data", mapaIncidenciasService.selectCamarasVideoVigilancia(params));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	// Nuevos controladores para el nuevo mapa de incidencias

	// @RequestMapping(value = "/lista-caso")
	// public @ResponseBody
	// Map<String, ? extends Object> listaCaso() throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data", mapaIncidenciasService.listaCaso());
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }
	//

	/*
	 * @RequestMapping(value = "/lista-unidad-mapa") public @ResponseBody
	 * Map<String, ? extends Object> listaUnidadMapa() throws Exception {
	 * Map<String, Object> data = new HashMap<String, Object>(); try {
	 * data.put("data", mapaIncidenciasService.listaUnidad()); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * 
	 * ////Prueba
	 * 
	 * @RequestMapping(value = "/lista-unidad-full-select") public @ResponseBody
	 * Map<String, ? extends Object> listaUnidadFull() throws Exception {
	 * Map<String, Object> data = new HashMap<String, Object>(); try {
	 * data.put("data", mapaIncidenciasService.listaUnidadTodo()); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * 
	 * 
	 * @RequestMapping(value = "/lista-subcaso-mapa") public @ResponseBody
	 * Map<String, ? extends Object> listaSubCasoMapa() throws Exception {
	 * Map<String, Object> data = new HashMap<String, Object>(); try {
	 * data.put("data", mapaIncidenciasService.listaSubCaso()); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * 
	 */

	@RequestMapping(value = "/lista-caso")
	public @ResponseBody Map<String, ? extends Object> listaCaso() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listarCaso());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/lista-subcaso")
	public @ResponseBody Map<String, ? extends Object> listaSubCaso() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listarSubCaso());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/lista-unidad")
	public @ResponseBody Map<String, ? extends Object> listaUnidad() throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listarUnidad());
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/lista-caso-por-unidad")
	public @ResponseBody Map<String, ? extends Object> listaCasoPorUnidad(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listarCasoPorUnidad(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/lista-subcaso-por-caso")
	public @ResponseBody Map<String, ? extends Object> listaSubCasoPorCaso(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listarSubCasoPorCaso(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/lista-tipo-por-padre")
	public @ResponseBody Map<String, ? extends Object> listaTipoPorPadre(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listarTipoPorPadre(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	/*
	 * @RequestMapping(value = "/lista-interviniente-por-incidencia")
	 * public @ResponseBody Map<String, ? extends Object>
	 * listaIntervinientePorIncidencia(Integer cod) throws Exception {
	 * Map<String, Object> data = new HashMap<String, Object>(); try {
	 * data.put("data",
	 * mapaIncidenciasService.listaIntervinientePorIncidencia(cod)); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * @RequestMapping(value = "/lista-conductor-por-incidencia")
	 * public @ResponseBody Map<String, ? extends Object>
	 * listaConductorPorIncidencia(Integer cod) throws Exception { Map<String,
	 * Object> data = new HashMap<String, Object>(); try { data.put("data",
	 * mapaIncidenciasService.listaConductorPorIncidencia(cod)); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * @RequestMapping(value = "/lista-involucrado-por-incidencia")
	 * public @ResponseBody Map<String, ? extends Object>
	 * listaInvolucradoPorIncidencia(Integer cod) throws Exception { Map<String,
	 * Object> data = new HashMap<String, Object>(); try { data.put("data",
	 * mapaIncidenciasService.listaInvolucradoPorIncidencia(cod)); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * @RequestMapping(value = "/lista-vehiculo-por-incidencia")
	 * public @ResponseBody Map<String, ? extends Object>
	 * listaVehiculoPorIncidencia(Integer cod) throws Exception { Map<String,
	 * Object> data = new HashMap<String, Object>(); try { data.put("data",
	 * mapaIncidenciasService.listaVehiculoPorIncidencia(cod)); } catch
	 * (Exception e) { // TODO: handle exception data.put("data", null);
	 * e.printStackTrace(); } return data; }
	 * 
	 * 
	 */

	// @RequestMapping(value = "/lista-incidencias" , method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> listaIncidencias(
	// Incidencia incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data", mapaIncidenciasService.listarIncidencias(incidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	//// data.put("data", null);
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }
	//

	/*
	 * @RequestMapping(value = "/lista-incidencias") public @ResponseBody
	 * Map<String, ? extends Object> listaBandejaIncidencia() throws Exception {
	 * Map<String, Object> data = new HashMap<String, Object>(); try {
	 * data.put("data", mapaIncidenciasService.listaBandejaIncidencia());
	 * data.put("success",Boolean.TRUE); } catch (Exception e) { // TODO: handle
	 * exception // data.put("data", null); data.put("success",Boolean.FALSE);
	 * data.put("data", null); e.printStackTrace(); } return data; }
	 */

	@RequestMapping(value = "/bandeja-incidencias", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> bandejaIncidencia(MapaIncidenciaRegistro incidencia)
			throws Exception {
		// Map<String, ? extends Object>
		// bandejaIncidencia(MapaIncidenciaRegistro incidencia,
		// HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		// HttpSession sesion = request.getSession();
		// UsuarioLogin usuario = (UsuarioLogin)
		// sesion.getAttribute("usuarioLoginMap");
		// incidencia.setUsrRegistra(usuario.getDesLoginUser());
		// incidencia.setUsrRol(usuario.getIdeRol());

		try {
			data.putAll(mapaIncidenciasService.bandejaIncidencias2(incidencia));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			data.put("total", 0);
			e.printStackTrace();
		}

		return data;
	}

	// @RequestMapping(value = "/lista-interviniente-por-incidencia" ,
	// method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> listaIntervinientePorIncidencia(Integer
	// cod) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data",
	// mapaIncidenciasService.listaIntervinientePorIncidencia(cod));
	// data.put("success",Boolean.TRUE);
	// } catch (Exception e) {
	// // TODO: handle exception
	//// data.put("data", null);
	// data.put("success",Boolean.FALSE);
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	/*
	 * @RequestMapping(value = "/registrar-incidencia") public @ResponseBody
	 * Map<String, ? extends Object> registrarIncidencia(Incidencia incidencia)
	 * throws Exception { Map<String, Object> data = new HashMap<String,
	 * Object>(); try { //
	 * incidencia.setTipoIncidencia(MobileConstantes.VOXIVA_WS);
	 * mapaIncidenciasService.registrarIncidencia(incidencia);
	 * data.put("incidencia", incidencia); data.put("success", Boolean.TRUE); }
	 * catch (Exception e) { // TODO: handle exception data.put("success",
	 * Boolean.FALSE); data.put("incidencia", null); e.printStackTrace(); }
	 * return data; }
	 * 
	 * @RequestMapping(value = "/get-incidencia-por-id") public @ResponseBody
	 * Map<String, ? extends Object> getIncidenciaPorId(Integer cod) throws
	 * Exception { Map<String, Object> data = new HashMap<String, Object>(); try
	 * { data.put("data", mapaIncidenciasService.obtenerIncidencia(cod));
	 * data.put("success", Boolean.TRUE); } catch (Exception e) { // TODO:
	 * handle exception data.put("success", Boolean.FALSE);
	 * data.put("incidencia", null); e.printStackTrace(); } return data; }
	 * 
	 */

	@RequestMapping(value = "/desactivar-incidencia")
	public @ResponseBody Map<String, ? extends Object> desactivarIncidencia(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.desactivarIncidencia(cod);
			data.put("message", "Registro eliminado de forma correcta.");
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar eliminar el registro.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/desactivar-reach")
	public @ResponseBody Map<String, ? extends Object> desactivarReach(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.desactivarReach(cod);
			data.put("message", "Alerta Reach desactivada correctamente.");
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar desactivar alerta Reach.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/desactivar-pos")
	public @ResponseBody Map<String, ? extends Object> desactivarPos(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.desactivarPos(cod);
			data.put("message", "Alerta POS desactivada correctamente.");
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar desactivar alerta POS.");
			e.printStackTrace();
		}
		return data;
	}

	/*
	 * @RequestMapping(value = "/registrar-incidencia2") public @ResponseBody //
	 * Map<String, ? extends Object> registrarIncidencia2(Incidencia incidencia,
	 * ArrayList<Involucrado> rowsInvolucrado, // ArrayList<Interviniente>
	 * rowsInterviniente) throws Exception { Map<String, ? extends Object>
	 * registrarIncidencia2(Registro r) throws Exception { Map<String, Object>
	 * data = new HashMap<String, Object>();
	 * 
	 * Incidencia incidencia = r.getIncidencia(); List<Interviniente>
	 * rowsInterviniente = new ArrayList<Interviniente>(); List<Involucrado>
	 * rowsInvolucrado = new ArrayList<Involucrado>();
	 * 
	 * System.out.println("incidencia: "+incidencia);
	 * System.out.println("rowsInvolucrado: "+rowsInvolucrado);
	 * System.out.println("rowsInterviniente: "+rowsInterviniente); try { //
	 * incidencia.setTipoIncidencia(MobileConstantes.VOXIVA_WS);
	 * mapaIncidenciasService.registrarPrueba(incidencia, rowsInvolucrado,
	 * rowsInterviniente); data.put("incidencia", incidencia);
	 * data.put("success", Boolean.TRUE); } catch (Exception e) { // TODO:
	 * handle exception data.put("success", Boolean.FALSE);
	 * data.put("incidencia", null); e.printStackTrace(); } return data; }
	 * 
	 */

	// @RequestMapping(value = "/obtener-id")
	// public int generarId() throws Exception {
	// return mapaIncidenciasService.obtenerNuevoId();
	// }

	@RequestMapping(value = "/obtener-id")
	public @ResponseBody Map<String, ? extends Object> generarId() throws Exception {

		Map<String, Object> data = new HashMap<String, Object>();
		try {
			// incidencia.setTipoIncidencia(MobileConstantes.VOXIVA_WS);
			data.putAll(mapaIncidenciasService.obtenerNuevoId());

		} catch (Exception e) {
			// TODO: handle exception
			data.putAll(null);
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/get-maximo-id")
	// public @ResponseBody
	// long getId() throws Exception {
	// return mapaIncidenciasService.getId();
	// }

	@RequestMapping(value = "/get-vehiculo-by-incidencia")
	public @ResponseBody Map<String, ? extends Object> listaVehiculos(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listaVehiculos(cod));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			// data.put("data", null);
			data.put("success", Boolean.FALSE);
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-involucrado-by-incidencia")
	public @ResponseBody Map<String, ? extends Object> listaInvolucrados(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listaInvolucrados(cod));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			// data.put("data", null);
			data.put("success", Boolean.FALSE);
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-interviniente-by-incidencia")
	public @ResponseBody Map<String, ? extends Object> listaIntervinientes(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.put("data", mapaIncidenciasService.listaIntervinientes(cod));
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			// data.put("data", null);
			data.put("success", Boolean.FALSE);
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-incidencia")
	public @ResponseBody Map<String, ? extends Object> getIncidencia(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.consultarIncidencia(idIncidencia));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/update-internamiento")
	// public @ResponseBody
	// void updateInternamiento(String cadena) throws Exception {
	// String action = MobileConstantes.URL_INTERNAMIENTO+cadena;
	// String strJson = Util.getUrlRemote(action);
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.putAll(mapaIncidenciasService.consultarIncidencia(idIncidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	@RequestMapping(value = "/registrar-incidencia")
	public @ResponseBody Map<String, ? extends Object> registrarIncidencia(MapaIncidenciaRegistro incidencia)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.registrarIncidencia(incidencia);
			data.put("incidencia", incidencia);
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("incidencia", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/registrar-imagen")
	public @ResponseBody Map<String, ? extends Object> registrarImagen(ImagenIncidencia img) throws Exception {
		// Map<String, ? extends Object> registrarImagen(MultipartFile imagen,
		// Integer idIncidenciaHidden) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.registrarImagen(img);
			// mapaIncidenciasService.registrarImagen(imagen,
			// idIncidenciaHidden);
			// data.put("imagen", imagen);
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("imagen", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/delete-adjunto")
	public @ResponseBody Map<String, ? extends Object> eliminarAdjunto(ImagenIncidencia img) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.eliminarAdjunto(img);
			data.put("message", "Registro eliminado de forma correcta.");
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("message", "Error al intentar eliminar el registro.");
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/reasignar-operador", method = RequestMethod.POST)
	public @ResponseBody int reasignarOperador(MapaIncidenciaRegistro incidencia) throws Exception {
		int result;
		try {
			result = mapaIncidenciasService.reasignarOperador(incidencia);
		} catch (Exception e) {
			result = 0;
			e.printStackTrace();
		}
		return result;
	}

	// @RequestMapping(value = "/get-bitacora-by-incidencia")
	// public @ResponseBody
	// Map<String, ? extends Object> obtenerBitacora(Integer cod) throws
	// Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data", mapaIncidenciasService.obtenerBitacora(cod));
	// data.put("success",Boolean.TRUE);
	// } catch (Exception e) {
	// // TODO: handle exception
	//// data.put("data", null);
	// data.put("success",Boolean.FALSE);
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	@RequestMapping(value = "/get-bitacora-by-incidencia")
	public @ResponseBody Map<String, ? extends Object> consultarBitacora(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.consultarBitacora(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	@RequestMapping(value = "/get-solo-historial-bitacora-by-incidencia")
	public @ResponseBody Map<String, ? extends Object> consultarHistorial(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.consultarHistorial(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		// try {
		// data.put("data", mapaIncidenciasService.consultarHistorial(cod));
		// data.put("success",Boolean.TRUE);
		// } catch (Exception e) {
		// data.put("success",Boolean.FALSE);
		// data.put("data", null);
		// e.printStackTrace();
		// }
		return data;
	}

	@RequestMapping(value = "/get-list-adjuntos-by-incidencia")
	public @ResponseBody Map<String, ? extends Object> consultarAdjunto(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.consultarAdjunto(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		// try {
		// data.put("data", mapaIncidenciasService.consultarHistorial(cod));
		// data.put("success",Boolean.TRUE);
		// } catch (Exception e) {
		// data.put("success",Boolean.FALSE);
		// data.put("data", null);
		// e.printStackTrace();
		// }
		return data;
	}

	@RequestMapping(value = "/get-parte-incidencia")
	public @ResponseBody Map<String, ? extends Object> consultarParte(Integer cod) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.consultarParte(cod));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		// try {
		// data.put("data", mapaIncidenciasService.consultarHistorial(cod));
		// data.put("success",Boolean.TRUE);
		// } catch (Exception e) {
		// data.put("success",Boolean.FALSE);
		// data.put("data", null);
		// e.printStackTrace();
		// }
		return data;
	}

	@RequestMapping(value = "/actualizar-bitacora")
	public @ResponseBody Map<String, ? extends Object> actualizarBitacora(MapaIncidenciaBitacora bitacora)
			throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			mapaIncidenciasService.actualizarBitacora(bitacora);
			data.put("bitacora", bitacora);
			data.put("success", Boolean.TRUE);
		} catch (Exception e) {
			// TODO: handle exception
			data.put("success", Boolean.FALSE);
			data.put("bitacora", null);
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/exportar-excel")
	// public @ResponseBody void exportarExcel(MapaIncidenciaRegistro
	// incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// mapaIncidenciasService.exportarExcel(incidencia);
	// data.put("incidencia", incidencia);
	// data.put("success", Boolean.TRUE);
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("success", Boolean.FALSE);
	// data.put("incidencia", null);
	// e.printStackTrace();
	// }
	//// return data;
	// }

	// @RequestMapping(value = "/bandeja-exportacion2" ,
	// method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, Object> bandejaExportacion2() throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data", mapaIncidenciasService.selectBandejaExportacion2());
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// return mapaIncidenciasService.selectBandejaExportacion2();
	// }
	// @RequestMapping(value = "/get-top-zona" , method = RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> getTopZona(EstadisticaConsulta ec) throws
	// Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// Map<String, Object> params = new HashMap<String, Object>();
	// SimpleDateFormat format = new SimpleDateFormat("dd/mm/yyyy");
	// try {
	// if (ec.getCodUnidad()!=null){ params.put("codUnidad", ec.getCodUnidad());
	// }
	// if (ec.getCodCaso()!=null){ params.put("codCaso", ec.getCodCaso()); }
	// if (ec.getFecDesde()!=null){ params.put("fecDesde", ec.getFecDesde()); }
	// if (ec.getFecHasta()!=null){ params.put("fecHasta", ec.getFecHasta()); }
	// data.put("data", mapaIncidenciasService.getTopZona(params));
	// } catch (Exception e) {
	// data.put("data", null);
	// e.printStackTrace();
	// }
	// return data;
	// }

	@RequestMapping(value = "/export-excel")
	// public void reporteBandejaIncidencia(HttpServletResponse response,
	// MapaIncidenciaRegistro i) throws Exception {
	public void reporteBandejaIncidencia(HttpServletResponse response, String fec1, String fec2, Integer unidad,
			Integer caso, Integer subcaso) throws Exception {

		// List<Map<String, Object>> bandeja =
		// mapaIncidenciasService.selectBandejaExportacion(i);

		try {
			Workbook wb = new HSSFWorkbook();
			Sheet sheet = wb.createSheet("INCIDENCIAS");
			// Sheet sheet2 = wb.createSheet("INTERVINIENTES");
			// Sheet sheet3 = wb.createSheet("INVOLUCRADOS");
			// Sheet sheet4 = wb.createSheet("VEHICULOS");

			CellStyle style = wb.createCellStyle();
			style.setAlignment(CellStyle.ALIGN_LEFT);
			style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
			style.setFillForegroundColor(HSSFColor.LIGHT_YELLOW.index);

			// HOJA 1: INCIDENCIAS

			int rowNum = 0;
			int ccol = 0;
			Row row = sheet.createRow(rowNum);

			// CABECERAS PARA INCIDENCIAS
			row.createCell((short) ccol++).setCellValue("ID_INCIDENCIA");
			row.createCell((short) ccol++).setCellValue("NRO_VOXIVA");
			row.createCell((short) ccol++).setCellValue("UNIDAD");
			row.createCell((short) ccol++).setCellValue("CASO");
			row.createCell((short) ccol++).setCellValue("SUBCASO");
			row.createCell((short) ccol++).setCellValue("MEDIO");
			row.createCell((short) ccol++).setCellValue("SITUACION");
			row.createCell((short) ccol++).setCellValue("REPORTANTE");
			row.createCell((short) ccol++).setCellValue("TELF_REPORTANTE");
			row.createCell((short) ccol++).setCellValue("AREA");
			row.createCell((short) ccol++).setCellValue("ZONA");
			row.createCell((short) ccol++).setCellValue("SUBZONA");
			row.createCell((short) ccol++).setCellValue("NOMB_VIA");
			row.createCell((short) ccol++).setCellValue("CDRA");
			row.createCell((short) ccol++).setCellValue("FEC_NOTIFICACION");
			row.createCell((short) ccol++).setCellValue("FEC_INCIDENCIA");
			row.createCell((short) ccol++).setCellValue("FEC_ATENCION");
			row.createCell((short) ccol++).setCellValue("DESCRIPCION");
			row.createCell((short) ccol++).setCellValue("ESTADO");
			row.createCell((short) ccol++).setCellValue("SUBESTADO");
			row.createCell((short) ccol++).setCellValue("MODALIDAD");
			row.createCell((short) ccol++).setCellValue("SEVERIDAD");
			row.createCell((short) ccol++).setCellValue("MOTIVO");
			row.createCell((short) ccol++).setCellValue("HALLAZGO");
			row.createCell((short) ccol++).setCellValue("USR_REGISTRA");
			row.createCell((short) ccol++).setCellValue("USR_MODIFICA");

			// CABECERAS PARA INTERVINIENTES
			row.createCell((short) ccol++).setCellValue("INTERV_1");
			row.createCell((short) ccol++).setCellValue("INTERV_2");
			row.createCell((short) ccol++).setCellValue("INTERV_3");

			// CABECERAS PARA INVOLUCRADOS
			row.createCell((short) ccol++).setCellValue("INVOLUC_1");
			row.createCell((short) ccol++).setCellValue("INVOLUC_2");
			row.createCell((short) ccol++).setCellValue("INVOLUC_3");

			// CABECERAS PARA VEHICULOS
			row.createCell((short) ccol++).setCellValue("VEHIC_1");
			row.createCell((short) ccol++).setCellValue("VEHIC_2");
			row.createCell((short) ccol++).setCellValue("VEHIC_3");

			for (int columnIndex = 0; columnIndex < ccol; columnIndex++) {
				row.getCell(columnIndex).setCellStyle(style);
			}

			// Listado de Datos

			SimpleDateFormat fecha = new SimpleDateFormat("dd/MM/yyyy kk:mm:ss");
			rowNum = 1;
			MapaIncidenciaRegistro opcion = null;

			Map<String, Object> params = new HashMap<String, Object>();
			params.put("fec1", fec1.replace("-", "/"));
			params.put("fec2", fec2.replace("-", "/"));
			params.put("unidad", unidad);
			params.put("caso", caso);
			params.put("subcaso", subcaso);

			// params.put("unidad", unidad!=null?unidad:null);
			// params.put("caso", caso!=null?caso:null);
			// params.put("subcaso", subcaso!=null?subcaso:null);

			List<Map<String, Object>> bandeja = mapaIncidenciasService.selectBandejaExportacion2(params);

			List<Integer> listaId = new ArrayList<Integer>();
			int ncol = 0;

			for (Map<String, Object> reg : bandeja) {
				listaId.add(Integer.parseInt(reg.get("id").toString()));
				row = sheet.createRow(rowNum++);
				ncol = 0;
				row.createCell((short) ncol++).setCellValue(Integer.parseInt(reg.get("id").toString()));
				if (reg.get("nro_caso_voxiva") != null) {
					row.createCell((short) ncol++)
							.setCellValue(Integer.parseInt(reg.get("nro_caso_voxiva").toString()));
				} else {
					row.createCell((short) ncol++).setCellValue("");
				}
				row.createCell((short) ncol++)
						.setCellValue((reg.get("unidad") != null) ? reg.get("unidad").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("caso") != null) ? reg.get("caso").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("subcaso") != null) ? reg.get("subcaso").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("medio") != null) ? reg.get("medio").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("situacion") != null) ? reg.get("situacion").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("nomb_report") != null) ? reg.get("nomb_report").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("telf_report") != null) ? reg.get("telf_report").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("area") != null) ? reg.get("area").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("zona") != null) ? reg.get("zona").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("subzona") != null) ? reg.get("subzona").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("nomb_via") != null) ? reg.get("nomb_via").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("cdra") != null) ? reg.get("cdra").toString() : "");
				row.createCell((short) ncol++).setCellValue(
						(reg.get("fec_notificacion") != null) ? reg.get("fec_notificacion").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("fec_evento") != null) ? reg.get("fec_evento").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("fec_atencion") != null) ? reg.get("fec_atencion").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("descripcion") != null) ? reg.get("descripcion").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("estado") != null) ? reg.get("estado").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("subestado") != null) ? reg.get("subestado").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("modalidad") != null) ? reg.get("modalidad").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("severidad") != null) ? reg.get("severidad").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("motivo") != null) ? reg.get("motivo").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("hallazgo") != null) ? reg.get("hallazgo").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("usr_registra") != null) ? reg.get("usr_registra").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("usr_modifica") != null) ? reg.get("usr_modifica").toString() : "");

				// INTERVINIENTES
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Interv1") != null) ? reg.get("Interv1").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Interv2") != null) ? reg.get("Interv2").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Interv3") != null) ? reg.get("Interv3").toString() : "");

				// INVOLUCRADOS
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Involuc1") != null) ? reg.get("Involuc1").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Involuc2") != null) ? reg.get("Involuc2").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Involuc3") != null) ? reg.get("Involuc3").toString() : "");

				// VEHICULOS
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Vehic1") != null) ? reg.get("Vehic1").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Vehic2") != null) ? reg.get("Vehic2").toString() : "");
				row.createCell((short) ncol++)
						.setCellValue((reg.get("Vehic3") != null) ? reg.get("Vehic3").toString() : "");

			}

			for (int columnIndex = 0; columnIndex < ncol; columnIndex++) {
				if (columnIndex != 17 && columnIndex < 26) {
					sheet.autoSizeColumn(columnIndex);
				} else if (columnIndex > 25) {
					sheet.setColumnWidth(columnIndex, 10000);
				}
			}

			// GUARDADO DE WORKBOOK

			System.out.println("sheet.toString(): " + sheet.toString());
			String fechaactual = new SimpleDateFormat("ddMMyyyy-HHmmss").format(new Date());
			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-Disposition",
					"attachment; filename=\"" + "reporte_incidencias_" + fechaactual + ".xls" + "\"");
			OutputStream out = response.getOutputStream();
			wb.write(out);
			out.close();

		} catch (Exception e) {
			e.getStackTrace();
		}

	}

	@RequestMapping(value = "/dolphin_service2", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> dolphinList() throws Exception {
		// Map<String, ? extends Object> voxivaList(MapaIncidenciaRegistro
		// incidencia, HttpServletRequest request) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		// HttpSession sesion = request.getSession();
		// UsuarioLogin usuario = (UsuarioLogin)
		// sesion.getAttribute("usuarioLoginMap");
		// incidencia.setUsrRegistra(usuario.getDesLoginUser());
		// incidencia.setUsrRol(usuario.getIdeRol());
		try {
			mapaIncidenciasService.buildJsonRestDolphinJob();
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			e.printStackTrace();
		}
		return data;
	}

	// @RequestMapping(value = "/tetra-list-timelap" , method=RequestMethod.GET)
	// public @ResponseBody
	// Map<String, ? extends Object> tetraTimelapList(MapaIncidenciaRegistro
	// incidencia) throws Exception {
	// Map<String, Object> data = new HashMap<String, Object>();
	// try {
	// data.put("data",mapaIncidenciasService.tetraTimelapList(incidencia));
	// } catch (Exception e) {
	// // TODO: handle exception
	// data.put("data", null);
	// e.printStackTrace();
	// }
	//
	// return data;
	//
	// }

	@RequestMapping(value = "/get-zonificacion", method = RequestMethod.GET)
	public @ResponseBody Map<String, ? extends Object> obtenerZonificacion(MapaZonificacion sector) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		try {
			data.putAll(mapaIncidenciasService.obtenerZonificacion(sector));
		} catch (Exception e) {
			// TODO: handle exception
			data.put("data", null);
			data.put("total", 0);
			e.printStackTrace();
		}

		return data;
	}

}
