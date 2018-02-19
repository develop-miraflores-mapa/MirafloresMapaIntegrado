package pe.gob.miraflores.mobile.service.mapaincidencias.impl;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.security.MessageDigest;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.dao.detalleincidencia.GeoDetalleIncidenciaMapper;
import pe.gob.miraflores.mobile.historico.dao.EstadisticaBaseMapper;
import pe.gob.miraflores.mobile.historico.dao.HistoricoIncidenciaMapper;
import pe.gob.miraflores.mobile.historico.dao.HistoricoIntervinienteMapper;
import pe.gob.miraflores.mobile.historico.dao.HistoricoInvolucradoMapper;
import pe.gob.miraflores.mobile.historico.dao.HistoricoVehiculoMapper;
import pe.gob.miraflores.mobile.dao.infovigilante.GeoInfoVigilanteMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.AuditoriaIncidenciaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.GeoInfoCambistaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.GeoInfoPosMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.GeoInfoTetraMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.GeometriaLineaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.ImagenIncidenciaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaCasoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaEstadisticaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaIncidenciaBitacoraMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaIncidenciaGenericoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaIncidenciaRegistroMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaIncidenciaScheduleMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaIncidenciasGeometriaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaIntervinienteMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaInvolucradoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaMaestroTipoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaSubcasoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaTelefonoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaUnidadMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaVehiculoMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaZonificacionMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.PreInscripcionCierreCalleMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.ReachFeedMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.SerenoRutaMapper;
import pe.gob.miraflores.mobile.dao.mapaincidencias.TipificacionMapper;
import pe.gob.miraflores.mobile.dao.seguridad.UsuarioLoginMapper;
import pe.gob.miraflores.mobile.domain.detalleincidencia.GeoDetalleIncidencia;
import pe.gob.miraflores.mobile.domain.detalleincidencia.GeoDetalleIncidenciaCriteria;
import pe.gob.miraflores.mobile.domain.historico.EstadisticaBase;
import pe.gob.miraflores.mobile.domain.historico.EstadisticaBaseCriteria;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidencia;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidenciaCriteria;
import pe.gob.miraflores.mobile.domain.historico.HistoricoInterviniente;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIntervinienteCriteria;
import pe.gob.miraflores.mobile.domain.historico.HistoricoInvolucrado;
import pe.gob.miraflores.mobile.domain.historico.HistoricoInvolucradoCriteria;
import pe.gob.miraflores.mobile.domain.historico.HistoricoVehiculo;
import pe.gob.miraflores.mobile.domain.historico.HistoricoVehiculoCriteria;
import pe.gob.miraflores.mobile.domain.infovigilante.GeoInfoVigilante;
import pe.gob.miraflores.mobile.domain.infovigilante.GeoInfoVigilanteCriteria;
import pe.gob.miraflores.mobile.domain.infovigilante.GeoInfoVigilanteCriteria.Criteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.AuditoriaIncidencia;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoCambista;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoCambistaCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoPos;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoPosCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoTetra;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ImagenIncidencia;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ImagenIncidenciaCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaCaso;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaCasoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaEstadistica;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaEstadisticaCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaBitacora;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaBitacoraCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaGenerico;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaGenericoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistroCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciasGeometria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciasGeometriaCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaInterviniente;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIntervinienteCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaInvolucrado;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaInvolucradoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaMaestroTipo;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaMaestroTipoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaSubcaso;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaSubcasoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaTelefono;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaTelefonoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaUnidad;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaUnidadCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaVehiculo;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaVehiculoCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaZonificacion;
import pe.gob.miraflores.mobile.domain.mapaincidencias.PreInscripcionCierreCalle;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ReachFeed;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ReachFeedCriteria;
import pe.gob.miraflores.mobile.domain.mapaincidencias.SerenoRuta;
import pe.gob.miraflores.mobile.domain.mapaincidencias.Tipificacion;
import pe.gob.miraflores.mobile.domain.mapaincidencias.TipificacionCriteria;
import pe.gob.miraflores.mobile.domain.seguridad.UsuarioLogin;
import pe.gob.miraflores.mobile.domain.tetratimelap.TetraTimelap;
import pe.gob.miraflores.mobile.service.catalogo.LocalCatalogoService;
import pe.gob.miraflores.mobile.service.email.EmailService;
import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;
import pe.gob.miraflores.mobile.service.parametrosistema.ParametroSistemaService;
import pe.gob.miraflores.mobile.util.ImagenUtil;
import pe.gob.miraflores.mobile.util.Util;
import pe.gob.miraflores.mobile.vo.RadioTetraVO;
import pe.gob.miraflores.mobile.vo.ResponseRadioTetraVO;
import pe.gob.miraflores.mobile.vo.TetraPointVO;
import pe.gob.miraflores.mobile.vo.TetraVO;
import pe.gob.miraflores.mobile.vo.VoxivaVO;

@Service
public class MapaIncidenciasServiceImpl implements MapaIncidenciasService {

//	@Autowired
//	private MapaIncidenciasRegistroMapper mapaIncidenciasRegistroMapper;
	
	@Autowired
	private MapaIncidenciasGeometriaMapper mapaIncidenciasGeometriaMapper;

	@Autowired 
	private GeoDetalleIncidenciaMapper geoDetalleIncidenciaMapper;

	@Autowired
	private LocalCatalogoService catalogoService;
	
	@Autowired
	private ParametroSistemaService parametroSistemaService;

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private GeometriaLineaMapper geometriaLineaMapper;
	
	
	@Autowired
	private MapaIncidenciaGenericoMapper mapaIncidenciaGenericoMapper;

	@Autowired
	private GeoInfoVigilanteMapper geoInfoVigilanteMapper; 
	
	@Autowired
	private GeoInfoCambistaMapper geoInfoCambistaMapper;
	
	@Autowired
	private PreInscripcionCierreCalleMapper preInscripcionCierreCalleMapper;
	
	@Autowired
	private UsuarioLoginMapper usuarioLoginMapper;
	
	@Autowired
	private AuditoriaIncidenciaMapper auditoriaIncidenciaMapper; 
	
	@Autowired
	private MapaIncidenciaScheduleMapper incidenciaScheduleMapper;
	
	
	//nuevos atributos del service
	
//	@Autowired
//	private CasoMapaIncidenciaMapper casoMapaIncidenciaMapper;
	
	@Autowired
	private MapaUnidadMapper mapaUnidadMapper;
	
	@Autowired
	private MapaCasoMapper mapaCasoMapper;
	
	@Autowired
	private MapaSubcasoMapper mapaSubcasoMapper;
	
	@Autowired
	private MapaMaestroTipoMapper mapaMaestroTipoMapper;
	
	@Autowired
	private MapaIntervinienteMapper mapaIntervinienteMapper;
	
	@Autowired
	private MapaInvolucradoMapper mapaInvolucradoMapper;
	
	@Autowired
	private MapaVehiculoMapper mapaVehiculoMapper;
	
	@Autowired
	private MapaIncidenciaRegistroMapper mapaIncidenciaRegistroMapper;
	
	@Autowired
	private ImagenIncidenciaMapper imagenIncidenciaMapper;
	
	@Autowired
	private MapaIncidenciaBitacoraMapper mapaIncidenciaBitacoraMapper;
	
	@Autowired
	private HistoricoIncidenciaMapper historicoIncidenciaMapper;
	
	@Autowired
	private HistoricoIntervinienteMapper historicoIntervinienteMapper;
	
	@Autowired
	private HistoricoInvolucradoMapper historicoInvolucradoMapper;
	
	@Autowired
	private HistoricoVehiculoMapper historicoVehiculoMapper;
	
	@Autowired
	private ReachFeedMapper reachFeedMapper;
	
	@Autowired
	private TipificacionMapper tipificacionMapper;
	
	@Autowired
	private MapaEstadisticaMapper mapaEstadisticaMapper;
	
	@Autowired
	private EstadisticaBaseMapper estadisticaBaseMapper;
	
	@Autowired
	private GeoInfoPosMapper geoInfoPosMapper;
	
	@Autowired
	private SerenoRutaMapper serenoRutaMapper;
	
	@Autowired
	private GeoInfoTetraMapper geoInfoTetraMapper;
	
	@Autowired
	private MapaZonificacionMapper mapaZonificacionMapper;
	
	@Autowired
	private MapaTelefonoMapper mapaTelefonoMapper;
	
	public String buildJsonRestWaze(Map<String, Object> params) throws Exception {
		// TODO Auto-generated method stub
		String action = MobileConstantes.URL_JSON_WAZE;
		String strJson = Util.getUrlRemote(action);
		return strJson;
	}
	
//	public String buildJsonRestReach(Map<String, Object> params) throws Exception {
//		// TODO Auto-generated method stub
//		String action = MobileConstantes.URL_JSON_REACH;
//		String strJson = Util.getUrlRemote(action);
//		return strJson;
//	}

//	public MapaIncidenciasRegistro registrar(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//
//		if(incidencia.getIdIncidencia() == null){
//			Date now = new Date();
//			incidencia.setFecRegistra(now);
//			incidencia.setEstado(MobileConstantes.ESTADO_ACTIVO);
//			incidencia.setUsuarioRegistro(incidencia.getIdUsuarioSesion());
//			mapaIncidenciasRegistroMapper.insertSelective(incidencia);
//		}else{
//			incidencia.setUsuarioModifica(incidencia.getIdUsuarioSesion());
//			incidencia.setFecModifica(new Date());
//			mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//		}
//		
//		MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
//		c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//		
//		mapaIncidenciasGeometriaMapper.deleteByExample(c);
//		
//		GeometriaLineaCriteria gc = new GeometriaLineaCriteria();
//		gc.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
//		geometriaLineaMapper.deleteByExample(gc);
//		
//		List<String> calles = new ArrayList<String>();
//		
//		for (GeometriaLinea linea : incidencia.getLineas()) {
//			linea.setIdIncidencia(incidencia.getIdIncidencia());
//			geometriaLineaMapper.insertSelective(linea);
//			calles.add(linea.getDesCalle());
//		}
//		
//		
//		MapaIncidenciaScheduleCriteria cmd = new MapaIncidenciaScheduleCriteria();
//		cmd.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
//		incidenciaScheduleMapper.deleteByExample(cmd);
//		
//		for (MapaIncidenciaSchedule dia : incidencia.getDias()){
//			dia.setIdIncidencia(incidencia.getIdIncidencia());
//			incidenciaScheduleMapper.insertSelective(dia);
//		}
//		
//		/*if(incidencia.getTipoEvento() == MobileConstantes.WAZE_CONSTRUCTION_TYPE){
//			for (MapaIncidenciasGeometria geometria : incidencia.getDetalleGeometria()) {
//				geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
//				geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
//				geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//				geometria.setIdecodvalor(incidencia.getIdIncidencia());
//				mapaIncidenciasGeometriaMapper.insertSelective(geometria);
//				calles.add(geometria.getDesdireccion());
//			}
//		}else{
//			// siempre debe registrar aca
//			for (GeometriaLinea linea : incidencia.getLineas()) {
//				linea.setIdIncidencia(incidencia.getIdIncidencia());
//				geometriaLineaMapper.insertSelective(linea);
//				calles.add(linea.getDesCalle());
//			}
//		}*/
//
//		MapaIncidenciasRegistro incidenciaUpdate = new MapaIncidenciasRegistro();
//		incidenciaUpdate.setIdIncidencia(incidencia.getIdIncidencia());
//		incidenciaUpdate.setDesCallles(StringUtils.join(calles, ", "));
//		
//		mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidenciaUpdate);
//		
//		//si viene el id de pre Registro
//		
//		if(incidencia.getIdPreRegistro() != null){
//			PreInscripcionCierreCalle e = new PreInscripcionCierreCalle();
//			e.setId(incidencia.getIdPreRegistro());
//			e.setEstado(MobileConstantes.ESTADO_INACTIVO_NUMERO);
//			e.setIdReferencia(incidencia.getIdIncidencia());
//			preInscripcionCierreCalleMapper.updateByPrimaryKeySelective(e);
//		}
//		
//		return incidencia;
//	}

//	public List<MapaIncidenciasRegistro> obtenerIncidenciasNoProcesadas() throws Exception {
//		// TODO Auto-generated method stub
//		MapaIncidenciasRegistroCriteria c = new MapaIncidenciasRegistroCriteria();
//		c.createCriteria();
//		
//		List<MapaIncidenciasRegistro> list = mapaIncidenciasRegistroMapper.selectByExample(c);
//		
//		MapaIncidenciasGeometriaCriteria cg = null;
//		
//		if(list!=null){
//			cg = new MapaIncidenciasGeometriaCriteria();
//			for (MapaIncidenciasRegistro m : list) {
//				cg.clear();
//				cg.createCriteria().andIdecodvalorEqualTo(m.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//				m.setDetalleGeometria(mapaIncidenciasGeometriaMapper.selectByExample(cg));
//			}
//		}
//		
//		return list;
//	}

//	public List<MapaIncidenciasRegistro> listaInicdenciasWaze(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		
//		
//		if(incidencia == null){
//			incidencia = new MapaIncidenciasRegistro();
//		}
//		
//		Date now = new Date();
//		MapaIncidenciasRegistroCriteria c = new MapaIncidenciasRegistroCriteria();
//		c.createCriteria().andFecHoraFinGreaterThanOrEqualTo(now)
//		.andTipoIncidenciaEqualTo(MobileConstantes.FORMULARIO_CIERRE_CALLE)
//		.andEstadoEqualTo(MobileConstantes.ESTADO_ACTIVO).andVisibleEqualTo(MobileConstantes.LETRA_SI);
//		
//		List<MapaIncidenciasRegistro> list = null;
//		
//		if(incidencia.getIsXmlFormat() == null){
//			incidencia.setIsXmlFormat("N");
//		}
//		
//		if(incidencia.getIsXmlFormat().equals("S")){
//			list = mapaIncidenciasRegistroMapper.listarIncidenciasWazeService();
//		}else{
//			list = mapaIncidenciasRegistroMapper.selectByExample(c);
//		}
//		
//		MapaIncidenciasGeometriaCriteria cg = null;
//		
//		if(list!=null){
//			cg = new MapaIncidenciasGeometriaCriteria();
//			for (MapaIncidenciasRegistro m : list) {
//				cg.clear();
//				cg.createCriteria().andIdecodvalorEqualTo(m.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//				m.setDetalleGeometria(mapaIncidenciasGeometriaMapper.selectByExample(cg));
//				m.setDescripcion(m.getDescripcion().replaceAll("", " "));
//			}
//		}
//		return list;
//	}

	
//	public List<MapaIncidenciasRegistro> listaInicdenciasWazeJSON(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		Date now = new Date();
//		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
//		String nowStr = sdf.format(now);
//		
//		MapaIncidenciasRegistroCriteria c = new MapaIncidenciasRegistroCriteria();
//		c.createCriteria().andFecHoraFinGreaterThanOrEqualToEspecial(nowStr)
//		.andTipoIncidenciaEqualTo(MobileConstantes.FORMULARIO_CIERRE_CALLE)
//		.andEstadoEqualTo(MobileConstantes.ESTADO_ACTIVO).andVisibleEqualTo(MobileConstantes.LETRA_SI);
//		
//		List<MapaIncidenciasRegistro> list = mapaIncidenciasRegistroMapper.selectByExample(c);
//		
////		MapaIncidenciasGeometriaCriteria cg = null;
//		
////		if(list!=null){
////			cg = new MapaIncidenciasGeometriaCriteria();
////			for (MapaIncidenciasRegistro m : list) {
////				cg.clear();
////				cg.createCriteria().andIdecodvalorEqualTo(m.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//				//m.setDetalleGeometria(mapaIncidenciasGeometriaMapper.selectByExample(cg));
////				m.setDescripcion(m.getDescripcion().replaceAll("", " "));
////			}
////		}
//		return list;
//	}
	
//	public String listaIncidenciasXmlFormatWaze(MapaIncidenciasRegistro incidencia)
//			throws Exception {
//		// TODO Auto-generated method stub
//		
//		String xml ="";
//		xml+="<events>";
//		
//		SimpleDateFormat sdfGMT = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS z");
//		sdfGMT.setTimeZone(TimeZone.getTimeZone("GMT"));
//		
//		SimpleDateFormat sdfGMT2 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS z");
//		sdfGMT2.setTimeZone(TimeZone.getTimeZone("GMT"));
//		
//		
//		if(incidencia == null){
//			incidencia = new MapaIncidenciasRegistro();
//		}
//		
//		incidencia.setIsXmlFormat("N");
//		
//		List<MapaIncidenciasRegistro> list = this.listaInicdenciasWaze(incidencia);
//		
//		String[] arrPuntos = null;
//		String[] arrPuntosEnd = null;
//		
//		List<GeometriaLinea> lineas = null;
//		GeometriaLineaCriteria lineaCriteria = null;
//		
//		if(list!=null){
//			for (MapaIncidenciasRegistro mapaIncidenciasRegistro : list) {
//				
//				if(mapaIncidenciasRegistro.getTipoEvento() == MobileConstantes.WAZE_CONSTRUCTION_TYPE){
//					List<MapaIncidenciasGeometria> puntos = null;
//					xml+="<event id=\""+(mapaIncidenciasRegistro.getIdIncidencia() +"_"+mapaIncidenciasRegistro.getFecRegistra().getTime())+"\"> ";
//					xml+="<type>CONSTRUCTION</type> ";
//					xml+="<start_date>"+(sdfGMT.format(mapaIncidenciasRegistro.getFecHoraInicio()))+"</start_date>";
//					if(mapaIncidenciasRegistro.getFecModifica()!=null){
//						xml+="<update_date>"+(sdfGMT.format(mapaIncidenciasRegistro.getFecHoraInicio()))+"</update_date>";
//					}else{
//						xml+="<update_date></update_date>";
//					}
//					
//					xml+="<end_date>"+(sdfGMT2.format(mapaIncidenciasRegistro.getFecHoraFin()))+"</end_date>";
//					xml+="<subtype></subtype>";
//					
//					xml+="<description>"+mapaIncidenciasRegistro.getDescripcion().replaceAll("", " ")+"</description>";
//					
//					xml+="<severity>"+mapaIncidenciasRegistro.getSeveridad()+"</severity>";
//					
//					xml+="<location>";
//					
//					puntos = mapaIncidenciasRegistro.getDetalleGeometria();
//					if(puntos!=null){
//						
//						xml+="<street>"+puntos.get(0).getDesdireccion()+"</street> ";
//						xml+="<city>Miraflores</city> ";
//						
//						arrPuntos = puntos.get(0).getGeometria().split(" "); 
//						
//						xml+="<latitude>"+arrPuntos[1]+"</latitude> ";
//						
//						xml+="<longitude>"+arrPuntos[0]+"</longitude> ";
//						
//						xml+="<specify_end></specify_end>";
//						
//					}
//					
//					xml+="</location>";
//					
//					xml+="</event>";
//					
//					
//				}else{
//					if(mapaIncidenciasRegistro.getTipoEvento() == MobileConstantes.WAZE_ROAD_CLOSED_TYPE){
//						lineaCriteria = new GeometriaLineaCriteria();
//						lineaCriteria.createCriteria().andIdIncidenciaEqualTo(mapaIncidenciasRegistro.getIdIncidencia());
//						lineas = geometriaLineaMapper.selectByExample(lineaCriteria);
//						
//						if(lineas != null){
//							
//							for (GeometriaLinea linea : lineas) {
//								
//								xml+="<event id=\""+(mapaIncidenciasRegistro.getIdIncidencia() +"_"+linea.getIdLinea()+"_"+mapaIncidenciasRegistro.getFecRegistra().getTime())+"\"> ";
//								
//								if(mapaIncidenciasRegistro.getTipoCierre().equalsIgnoreCase(MobileConstantes.CIERRE_PARCIAL)){
//									xml+="<type>CONSTRUCTION</type> ";
//								}else{
//									xml+="<type>ROAD_CLOSED</type> ";
//								}
//								
//								xml+="<start_date>"+(sdfGMT.format(mapaIncidenciasRegistro.getFecHoraInicio()))+"</start_date>";
//								if(mapaIncidenciasRegistro.getFecModifica()!=null){
//									xml+="<update_date>"+(sdfGMT.format(mapaIncidenciasRegistro.getFecHoraInicio()))+"</update_date>";
//								}else{
//									xml+="<update_date></update_date>";
//								}
//								
//								xml+="<end_date>"+(sdfGMT2.format(mapaIncidenciasRegistro.getFecHoraFin()))+"</end_date>";
//								xml+="<subtype></subtype>";
//								
//								xml+="<description>"+mapaIncidenciasRegistro.getDescripcion().replaceAll("", " ")+"</description>";
//								
//								xml+="<severity>"+mapaIncidenciasRegistro.getSeveridad()+"</severity>";
//								
//								xml+="<location>";
//								
//								xml+="<street>"+linea.getDesCalle().replaceAll("", " ")+"</street> ";
//								xml+="<city>Miraflores</city> ";
//								
//								arrPuntos = linea.getPointIni().split(" "); 
//								
//								xml+="<latitude>"+arrPuntos[0]+"</latitude> ";
//								
//								xml+="<longitude>"+arrPuntos[1]+"</longitude> ";
//								
////								if(mapaIncidenciasRegistro.getDireccionFinal() == null){
////									xml+="<direction>BOTH_DIRECTIONS</direction>";
////								}else{
////									xml+="<direction>"+mapaIncidenciasRegistro.getDireccionFinal()+"</direction>";
////								}
//								
//								
//								if(linea.getDirCardinal() != null){
//									xml+="<direction>"+linea.getDirCardinal()+"</direction>";
//								}else{
//									xml+="<direction>BOTH_DIRECTIONS</direction>";
//								}
//								
//								xml+="<specify_end>";
//									
//								arrPuntosEnd = linea.getPointFin().split(" "); 
//								if(!StringUtils.isEmpty(linea.getIntercepcion1())){
//									xml+="<from_cross_street>"+linea.getIntercepcion1()+"</from_cross_street>";
//								}
//								
//								if(!StringUtils.isEmpty(linea.getIntercepcion2())){
//									xml+="<end_cross_street>"+linea.getIntercepcion2()+"</end_cross_street>";
//								}
//								
//								
//								xml+="<end_latitude>"+arrPuntosEnd[0]+"</end_latitude>";
//								xml+="<end_longitude>"+arrPuntosEnd[1]+"</end_longitude>";
//									
//								
//								xml+="</specify_end> ";
//									
//								
//								xml+="</location>";
//								
//								xml+="</event>";
//							}
//							
//						}
//						
//					}
//				}
//				
//			}
//		}
//		
//		
//		xml+="</events>";
//		
//		
//		return xml;
//	}

//	public MapaIncidenciasRegistro registrarIncidenciaVoxiva(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		
//		System.out.println("dentro de registrar caso voxiva mapeo---");
//		
//		MapaIncidenciasRegistroCriteria c1 = new MapaIncidenciasRegistroCriteria();
//		c1.createCriteria().andEstadoEqualTo(MobileConstantes.ESTADO_ACTIVO).andIdCasoVoxivaEqualTo(incidencia.getIdCasoVoxiva());
//		
//		List<MapaIncidenciasRegistro> list = mapaIncidenciasRegistroMapper.selectByExample(c1);
//		
//		if(list!=null && list.size()>0){
//			incidencia.setIdIncidencia(list.get(0).getIdIncidencia());
//		}
//		
//		if(incidencia.getIdIncidencia() == null){
//			System.out.println("inserta nuevo");
//			mapaIncidenciasRegistroMapper.insertSelective(incidencia);
//		}else{
//			System.out.println("actualiza");
//			mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//		}
//		
////		if(incidencia.getLatitud()!=null && incidencia.getLongitud()!=null){
////		
////			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
////			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
////			
////			mapaIncidenciasGeometriaMapper.deleteByExample(c);
////			
////			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
////			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
////			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
////			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
////			geometria.setIdecodvalor(incidencia.getIdIncidencia());
////			geometria.setGeometria(incidencia.getLatitud()+" "+incidencia.getLongitud());
////			
////			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
////			
////		}
//		
//		
//		// AQUI SE GUARDA DE PASO EN LA NUEVA TABLA INCIDENCIAS CON LA NUEVA TIPIFICACION
//		
//				MapaIncidenciaRegistro e2 = new MapaIncidenciaRegistro();
//
//				int vCaso = 0;
//				int vSubcaso = 0;
//				
//				if (incidencia.getIdCasoVoxiva()!=null){ e2.setNroCasoVoxiva(incidencia.getIdCasoVoxiva()); }
//				
//				if (incidencia.getTipoCasoVoxiva()!=null){ vCaso = incidencia.getTipoCasoVoxiva(); }
//				if (incidencia.getSubTipoCasoVoxiva()!=null){ vSubcaso = incidencia.getSubTipoCasoVoxiva(); }
//				
//				int tipif_old = vCaso*1000+vSubcaso;
//				int tipif_new = 0;
//				
//				switch(tipif_old){
//					case 3018: tipif_new = 10101; break;
//					case 3012: 
//					case 3020: 
//					case 3016: 
//					case 3000: tipif_new = 10102; break;
//					case 3017: tipif_new = 10103; break;
//					case 3015: tipif_new = 10104; break;
//					case 3019: tipif_new = 10105; break;
//					case 1007: 
//					case 1055: 
//					case 1024: 
//					case 1000: 
//					case 1006: tipif_new = 10206; break;
//					case 1002: tipif_new = 10207; break;
//					case 1101: tipif_new = 10208; break;
//					case 1003: tipif_new = 10209; break;
//					case 1004: tipif_new = 10210; break;
//					case 1051: tipif_new = 10211; break;
//					case 1100: tipif_new = 10212; break;
//					case 1058: 
//					case 1001: tipif_new = 10213; break;
//					case 1053: tipif_new = 10314; break;
//					case 1009: tipif_new = 10315; break;
//					case 1059: tipif_new = 10317; break;
//					case 1052: tipif_new = 10418; break;
//					case 4086: tipif_new = 10420; break;
//					case 4087: tipif_new = 10421; break;
//					case 1005: tipif_new = 10422; break;
//					case 4023: tipif_new = 10524; break;
//					case 4046: 
//					case 4043: 
//					case 4048: tipif_new = 10525; break;
//					case 12265: 
//					case 4088: tipif_new = 10526; break;
//					case 3013: tipif_new = 10627; break;
//					case 3014: 
//					case 11111: tipif_new = 10628; break;
//					case 12294: 
//					case 6030: tipif_new = 10629; break;
//					case 3024: 
//					case 8024: 
//					case 11110: 
//					case 12281: 
//					case 12282: 
//					case 12284: 
//					case 12289: 
//					case 12290: 
//					case 12292: 
//					case 12303: 
//					case 12304: 
//					case 12310: 
//					case 12312: 
//					case 12313: 
//					case 12315: 
//					case 12322: 
//					case 12323: 
//					case 12334: 
//					case 12337: 
//					case 12344: 
//					case 12354: 
//					case 12365: 
//					case 12369: 
//					case 5024: 
//					case 6032: 
//					case 6031: 
//					case 4045: 
//					case 4024: tipif_new = 10630; break;
//					case 2024: 
//					case 2000: 
//					case 2010: tipif_new = 10731; break;
//					case 2011: tipif_new = 10732; break;
//					case 6033: tipif_new = 10800; break;
//					case 4081: tipif_new = 20933; break;
//					case 4042: tipif_new = 20934; break;
//					case 12278: 
//					case 12321: 
//					case 12338: 
//					case 4085: tipif_new = 20937; break;
//					case 4025: tipif_new = 21038; break;
//					case 4026: tipif_new = 21039; break;
//					case 4027: tipif_new = 21040; break;
//					case 4047: tipif_new = 21041; break;
//					case 4028: tipif_new = 21042; break;
//					case 4000: 
//					case 4021: 
//					case 4029: tipif_new = 21043; break;
//					case 4083: 
//					case 4082: tipif_new = 31100; break;
//					case 12302: tipif_new = 31600; break;
//					case 1008: 
//					case 12320: tipif_new = 41800; break;
//					case 4041: tipif_new = 41900; break;
//					case 7036: 
//					case 7034: 
//					case 7035: tipif_new = 52000; break;
//					case 9024: tipif_new = 52100; break;
//					case 7037: tipif_new = 52200; break;
//					case 7038: tipif_new = 52300; break;
//					case 10024: tipif_new = 62400; break;
//					default: tipif_new = 0; break;
//				}
//						
//				int iUnidad = (int)(tipif_new/10000);
//				int iCaso = (int)((tipif_new%10000)/100);
//				int iSubcaso = (int)(tipif_new%100);
//				
//				
//				
//				e2.setEstReg("A");
//				e2.setCoordenadas(incidencia.getLatitud()+" "+incidencia.getLongitud());
//				e2.setCodSituacion(873);
//				e2.setDescSituacion("NUEVO");
//				e2.setCodMedio(905);
//				e2.setDescMedio("ALERTA MIRAFLORES");
//				
//				if (iUnidad!=0){ e2.setCodUnidad(iUnidad); }
//				if (iCaso!=0){ e2.setCodCaso(iCaso); }
//				if (iSubcaso!=0){ e2.setCodSubcaso(iSubcaso); }
//				if (incidencia.getIncidenciaPresentada()!=null){ e2.setDescripcion(incidencia.getIncidenciaPresentada()); }
//				if (incidencia.getCuadraEvento()!=null) { e2.setCdra(incidencia.getCuadraEvento().toString()); }
//				
//				if (incidencia.getNombreReportaIncidencia()!=null) { e2.setNombReport(incidencia.getNombreReportaIncidencia());}
//				if (incidencia.getTelefReportaIncidencia()!=null) { e2.setTelfReport(incidencia.getTelefReportaIncidencia());}
//				
//				if (incidencia.getFecRegistra()!=null) { e2.setFecNotificacion(incidencia.getFecRegistra()); }
//				
////				incidencia.getFechaHoraCreacion();
////				incidencia.getIdCaso();
////				incidencia.getIdDispositivo();
////				incidencia.getSecurityKey();
////				incidencia.getUserName();
//				
//				try {
////					this.registrarIncidencia(e);
//					MapaIncidenciaRegistroCriteria c2 = new MapaIncidenciaRegistroCriteria();
//					c2.createCriteria().andEstRegEqualTo(MobileConstantes.ESTADO_ACTIVO)
//						.andNroCasoVoxivaEqualTo(e2.getNroCasoVoxiva())
//						.andCoordenadasEqualTo(e2.getCoordenadas());
//					
//					List<MapaIncidenciaRegistro> list2 = mapaIncidenciaRegistroMapper.selectByExample(c2);
//					
//					if(list2!=null && list2.size()>0){
//						e2.setIdIncidencia(list2.get(0).getIdIncidencia());
//					}
//					
//					if(e2.getIdIncidencia() == null){
//						System.out.println("inserta nuevo en TABLA NUEVA");
//						mapaIncidenciaRegistroMapper.insertSelective(e2);
//					}else{
//						System.out.println("actualiza en TABLA NUEVA");
//						mapaIncidenciaRegistroMapper.updateByPrimaryKeySelective(e2);
//					}
//					
//				} catch (Exception exc) {
//					// TODO Auto-generated catch block
//					exc.printStackTrace();
//					
//				}
//				
//				if(e2.getCoordenadas()!=null){
//					
//					MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
//					c.createCriteria().andIdecodvalorEqualTo(e2.getIdIncidencia())
//										.andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
////										.andGeometriaEqualTo(e2.getCoordenadas());
//					
//					mapaIncidenciasGeometriaMapper.deleteByExample(c);
//					
//					MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
//					geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
//					geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
//					geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//					geometria.setIdecodvalor(e2.getIdIncidencia());
//					geometria.setGeometria(e2.getCoordenadas());
//					if(e2.getDescVia()!=null){
//						geometria.setDesdireccion(e2.getDescVia());
//					}
//					
//					mapaIncidenciasGeometriaMapper.insertSelective(geometria);
//					
//				}
//		
//		return incidencia;
//	}
	
	public MapaIncidenciaRegistro registrarIncidenciaVoxiva2(MapaIncidenciaRegistro incidencia) throws Exception {
		MapaIncidenciaRegistroCriteria c1 = new MapaIncidenciaRegistroCriteria();
		c1.createCriteria().andEstRegEqualTo(MobileConstantes.ESTADO_ACTIVO).andNroCasoVoxivaEqualTo(incidencia.getNroCasoVoxiva());
		List<MapaIncidenciaRegistro> list = mapaIncidenciaRegistroMapper.selectByExample(c1);
		
		if(list!=null && list.size()>0){
			incidencia.setIdIncidencia(list.get(0).getIdIncidencia());
		}
		
		if(incidencia.getIdIncidencia() == null){
			mapaIncidenciaRegistroMapper.insertSelective(incidencia);
		}else{
			mapaIncidenciaRegistroMapper.updateByPrimaryKeySelective(incidencia);
		}
		
		if(incidencia.getCoordenadas()!=null){
			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
			mapaIncidenciasGeometriaMapper.deleteByExample(c);
			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
			geometria.setIdecodvalor(incidencia.getIdIncidencia());
			geometria.setGeometria(incidencia.getCoordenadas());
			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
			
		}
		
		return incidencia;
	}

	
	

//	@Override
//	public List<MapaIncidenciasRegistro> listaInicdenciasVoxiva(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		
//	
//		List<MapaIncidenciasRegistro> incidencias = this.selectVoxivaListMap(incidencia);
//		
//		MapaIncidenciasGeometria geometria = null;
//		
//		for (MapaIncidenciasRegistro m : incidencias) {
//			try{
//			geometria = m.getGeometria();
//			if(geometria!=null){
//				m.setLatitud(geometria.getGeometria().split(" ")[1]);
//				m.setLongitud(geometria.getGeometria().split(" ")[0]);	
//			}
//			
//			}catch(Exception e){
//				e.printStackTrace();
//			}
//		}
//		
//		
//		return incidencias;
//	}
	
	
	@Override
	public List<Map<String, Object>> selectCamarasVideoVigilancia(Map<String, Object> params) {
		// TODO Auto-generated method stub
		return mapaIncidenciaRegistroMapper.selectCamarasVideoVigilancia(params);
	}
	



//	@Override
//	public Map<String, Object> listaInicdenciasPortipo(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		
//		
//		Map<String, Object> result = new HashMap<String, Object>();
//		
//		Map<String, Object> params = new HashMap<String, Object>();
//		
////		int c = 0;
////		if (start != 0) {
////			c = c + 1;
////		}
////		params.put("START", start + c);
////		params.put("LIMIT", limit + start);
//		
//		int c = 0;
//		
//		if(incidencia.getStart() == null){
//			incidencia.setStart(0);
//		}
//		
//		if(incidencia.getLimit() == null){
//			incidencia.setLimit(10);
//		}
//		
//		
//		if (incidencia.getStart() != 0) {
//			c = c + 1;
//		}
//		
//		if(incidencia.getTipoIncidencia() != null){
//			params.put("TIPO_INCIDENCIA", incidencia.getTipoIncidencia());
//		}
//		
//		if(incidencia.getDesTipoIncidencia() != null){
//			params.put("NOMBRE_TIPO_EVENTO", incidencia.getDesTipoIncidencia());
//		}
//		
//		if(incidencia.getDescripcion() != null){
//			params.put("DESCRIPCION", incidencia.getDescripcion());
//		}
//		
//		if(incidencia.getStrFecIni() != null){
//			params.put("FECHA_INI", incidencia.getStrFecIni());
//		}
//		
//		if(incidencia.getStrFecFin() != null){
//			params.put("FECHA_FIN", incidencia.getStrFecFin());
//		}
//		
//		if(incidencia.getDesCallles() != null){
//			params.put("DES_CALLLES", incidencia.getDesCallles());
//		}
//		
//		params.put("START", incidencia.getStart()+c);
//		params.put("LIMIT", incidencia.getStart()+incidencia.getLimit());
//		
//		List<MapaIncidenciasRegistro> list =  mapaIncidenciasRegistroMapper.listarIncidenciasConPaginacion(params);
//		
////		MapaIncidenciasGeometriaCriteria cg = null;
//		
////		if(list!=null){
////			cg = new MapaIncidenciasGeometriaCriteria();
////			for (MapaIncidenciasRegistro m : list) {
////				cg.clear();
////				cg.createCriteria().andIdecodvalorEqualTo(m.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
////				m.setDetalleGeometria(mapaIncidenciasGeometriaMapper.selectByExample(cg));
////			}
////		}		
//				
//		result.put("data",list);
//		result.put("total", mapaIncidenciasRegistroMapper.countListarIncidenciasConPaginacion(params));
//		
//		
//		return result;
//	}

//	@Override
//	public Map<String, Object> listaInicdenciasGeneric(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		Map<String, Object> result = new HashMap<String, Object>();
//		Map<String, Object> params = new HashMap<String, Object>();
//		
//		int c = 0;
//		if(incidencia.getStart() == null){ incidencia.setStart(0); }
//		if(incidencia.getLimit() == null){ incidencia.setLimit(10); }
//		if (incidencia.getStart() != 0) { c = c + 1; }
//		
//		if(incidencia.getIncidenciaPresentada() != null){
//			params.put("INCIDENCIA_PRESENTADA", incidencia.getIncidenciaPresentada());
//		}
//		if(incidencia.getHoraLlamadaVoxiva()!= null){
//			params.put("HORA_LLAMADA_VOXIVA", incidencia.getHoraLlamadaVoxiva());
//		}
//		if(incidencia.getListmedios()!= null){
//			params.put("LIST_MEDIOS", incidencia.getListmedios());
//		}
//		
//		params.put("START", incidencia.getStart()+c);
//		params.put("LIMIT", incidencia.getStart()+incidencia.getLimit());
//		
//		List<Integer> listTipo = new ArrayList<Integer>();
//		listTipo.add(MobileConstantes.VOXIVA_WS);
//		params.put("LIST_TIPO", listTipo);
//		params.put("LIST_ESTADO_CALIFICA", incidencia.getListEstadoCalifica());
//		
//		List<MapaIncidenciasRegistro> list =  mapaIncidenciasRegistroMapper.listarIncidenciasGenericConPaginacion(params);
//				
//		result.put("data",list);
//		result.put("total", mapaIncidenciasRegistroMapper.countListarIncidenciasGenericConPaginacion(params));
//		
//		return result;
//	}
	
	
//	@Override
//	public void anularIncidencia(Integer id) throws Exception {
//		// TODO Auto-generated method stub
//		MapaIncidenciasRegistro e = new MapaIncidenciasRegistro();
//		e.setIdIncidencia(id);
//		e.setFecModifica(new Date());
//		e.setEstado(MobileConstantes.ESTADO_INACTIVO);
//		mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(e);
//		
//	}

//	public void enviarAlertasCierreCalle() throws Exception {
//		// TODO Auto-generated method stub
//		
//		System.out.println("inicio");
//		
//		Date now = new Date();
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		
//		Map<String, Object> params = new HashMap<String, Object>();
//		String strNow = sdf.format(now); 
//		params.put("FECHA_FIN", strNow);
//		List<MapaIncidenciasRegistro> list = mapaIncidenciasRegistroMapper.cierreCallesPorVencer(params);
//		
//		Map<String, Object> paramsPorIniciar = new HashMap<String, Object>();
//		paramsPorIniciar.put("FECHA_INI", strNow);
//		List<MapaIncidenciasRegistro> listPorIniciar = mapaIncidenciasRegistroMapper.cierreCallesPorIniciar(paramsPorIniciar);
//		
//	}
	

//	@Override
//	public File exportarExcelBandejaCierreCalles(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		Map<String, Object> params = new HashMap<String, Object>();
//		
//		int c = 0;
//		
//		if(incidencia.getStart() == null){
//			incidencia.setStart(0);
//		}
//		
//		if(incidencia.getLimit() == null){
//			incidencia.setLimit(100000);
//		}
//		
//		
//		if (incidencia.getStart() != 0) {
//			c = c + 1;
//		}
//		
//		if(incidencia.getTipoIncidencia() != null){
//			params.put("TIPO_INCIDENCIA", incidencia.getTipoIncidencia());
//		}
//		
//		if(!StringUtils.isEmpty(incidencia.getDesTipoIncidencia())){
//			params.put("NOMBRE_TIPO_EVENTO", incidencia.getDesTipoIncidencia());
//		}
//		
//		if(!StringUtils.isEmpty(incidencia.getDescripcion())){
//			params.put("DESCRIPCION", incidencia.getDescripcion());
//		}
//		
//		if(!StringUtils.isEmpty(incidencia.getStrFecIni())){
//			params.put("FECHA_INI", incidencia.getStrFecIni());
//		}
//		
//		if(!StringUtils.isEmpty(incidencia.getStrFecFin())){
//			params.put("FECHA_FIN", incidencia.getStrFecFin());
//		}
//		
//		if(!StringUtils.isEmpty(incidencia.getDesCallles())){
//			params.put("DES_CALLLES", incidencia.getDesCallles());
//		}
//		
//		params.put("START", incidencia.getStart());
//		params.put("LIMIT", incidencia.getLimit());
//		
//		List<MapaIncidenciasRegistro> list =  mapaIncidenciasRegistroMapper.listarIncidenciasConPaginacion(params);
//		
//		HSSFWorkbook workbook = new HSSFWorkbook();
//		HSSFSheet sheet = workbook.createSheet("Cierre de Calles");
//				 
//		 Row rowInit = sheet.createRow(0);
//		 
//		 Font headerFont = workbook.createFont();
//		 headerFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
//		 
//		 CellStyle headerStyle = workbook.createCellStyle();
//		 headerStyle.setFont(headerFont);
//		    
//		 
//		 Cell cell1 = rowInit.createCell(0);
//		 cell1.setCellValue("TIPO EVENTO");
//		 cell1.setCellStyle(headerStyle);
//		 
//		 Cell cell2 = rowInit.createCell(1);
//		 cell2.setCellValue("TIPO CIERRE");
//		 cell2.setCellStyle(headerStyle);
//		 
//		 Cell cell3 = rowInit.createCell(2);
//		 cell3.setCellValue("DESCRIPCIÓN");
//		 cell3.setCellStyle(headerStyle);
//		 
//		 Cell cell4 = rowInit.createCell(3);
//		 cell4.setCellValue("CALLES");
//		 cell4.setCellStyle(headerStyle);
//		 
////		 Cell cell5 = rowInit.createCell(4);
////		 cell5.setCellValue("DIRECCION CARDINAL");
////		 cell5.setCellStyle(headerStyle);
//		 
//		 Cell cell6 = rowInit.createCell(4);
//		 cell6.setCellValue("FECHA INICIO");
//		 cell6.setCellStyle(headerStyle);
//		 
//		 Cell cell7 = rowInit.createCell(5);
//		 cell7.setCellValue("FECHA FINALIZAÓN");
//		 cell7.setCellStyle(headerStyle);
//		 
//		 int index = 1;
//		 
//		 Row row = null;
//		 
//		 SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm a");
//
//   		 Map<String, Object> map = new HashMap<String, Object>();
//		 map.put("NORTH","NORTE");
//		 map.put("SOUTH","SUR");
//		 map.put("EAST","ESTE");
//		 map.put("WEST","OESTE");
//		 map.put("NORTH_WEST","NOR-OESTE");
//		 map.put("SOUTH_WEST","SUR-OESTE");
//		 map.put("NORTH_EAST","NOR-ESTE");
//		 map.put("SOUTH_EAST","SUR-ESTE");
//		 map.put("BOTH_DIRECTIONS","AMBAS DIRECCIONES");
//		 
//		 for (MapaIncidenciasRegistro m : list) {
//			 row = sheet.createRow(index);
//			 row.createCell(0).setCellValue(m.getNombreTipoEvento());
//			 row.createCell(1).setCellValue((m.getTipoCierre()!=null && m.getTipoCierre().equalsIgnoreCase("T"))?"TOTAL":"PARCIAL");
//			 row.createCell(2).setCellValue(m.getDescripcion());
//			 row.createCell(3).setCellValue(m.getDesCallles());
//			 //row.createCell(4).setCellValue((map.get(m.getDireccionFinal())!=null)?map.get(m.getDireccionFinal()).toString():m.getDireccionFinal());
//			 row.createCell(4).setCellValue(sdf.format(m.getFecHoraInicio()));
//			 row.createCell(5).setCellValue(sdf.format(m.getFecHoraFin()));
//			 index++;
//		}
//		
//		 sheet.autoSizeColumn(0);
//		 sheet.autoSizeColumn(1);
//		 sheet.autoSizeColumn(2);
//		 sheet.autoSizeColumn(3);
//		 sheet.autoSizeColumn(4);
//		 sheet.autoSizeColumn(5);
////		 sheet.autoSizeColumn(6);
//		 
//		File temp = null;
//		try {
//			
//			temp = File.createTempFile("Export_Cierre_Calles", ".xls");
//			FileOutputStream out =  new FileOutputStream(temp);
//			workbook.write(out);
//			return temp;
//		} catch (FileNotFoundException e) {
//		    e.printStackTrace();
//		    return null;
//		} catch (IOException e) {
//		    e.printStackTrace();
//		    return null;
//		}
//	
//		
//	
//	}

	
	 
	
	@Override
	public List<MapaIncidenciaGenerico> getGeoGenerico(MapaIncidenciaGenerico param) throws Exception {
		// TODO Auto-generated method stub
		
		MapaIncidenciaGenericoCriteria c = new MapaIncidenciaGenericoCriteria();
		pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaGenericoCriteria.Criteria criteria = c.createCriteria();
		if(param.getTipo()!=null){
			criteria.andTipoEqualTo(param.getTipo());
		}
		
		if(param.getPublico()!=null){
			criteria.andPublicoEqualTo(param.getPublico());
		}
		
		if(param.getCuadra()!=null){
			criteria.andCuadraLikeInsensitive(param.getCuadra()+"%");
		}
		
		if(param.getNombre()!=null){
			criteria.andNombreLikeInsensitive("%"+param.getNombre()+"%");
		}
		
		return mapaIncidenciaGenericoMapper.selectByExample(c);
	}

	@Override
	public List<Map<String, Object>> buildServiceWazeEstacionamientos(MapaIncidenciaGenerico param) throws Exception {
		// TODO Auto-generated method stub
		MapaIncidenciaGenericoCriteria c = new MapaIncidenciaGenericoCriteria();
		c.createCriteria().andTipoEqualTo(MobileConstantes.MEDIO_PLAYA_ESTACIONAMIENTO).andPublicoEqualTo(MobileConstantes.LETRA_SI);
		
		List<MapaIncidenciaGenerico> list = mapaIncidenciaGenericoMapper.selectByExample(c);
		
		List<Map<String, Object>> result = new ArrayList<Map<String,Object>>();
		
		Map<String, Object> map = null,cordenadas;
		
		for (MapaIncidenciaGenerico m : list) {
			map = new HashMap<String, Object>();
			
			map.put("id", m.getId());
			map.put("nombre", m.getNombre());
			map.put("via", m.getNombreVia());
			map.put("numeroVia", m.getNumero());
			map.put("interior", m.getInterior());
			map.put("letra", m.getLetra());
			map.put("zona", m.getZona());
			map.put("espacios", m.getEspacios());
			map.put("giroNegocio", m.getGiro());
			map.put("isPublico", m.getPublico());
			
			cordenadas = new HashMap<String, Object>();
			
			cordenadas.put("longitud", m.getGeometria().split(",")[1]);
			cordenadas.put("latitud", m.getGeometria().split(",")[0]);
			
			map.put("cordenadas", cordenadas);
			
			result.add(map);
		}
		
		return result;
	}

	@Override
	public List<Map<String, Object>> buildServiceWazeLimitesVelocidad(MapaIncidenciaGenerico param) throws Exception {
		// TODO Auto-generated method stub
		
		MapaIncidenciaGenericoCriteria c = new MapaIncidenciaGenericoCriteria();
		c.createCriteria().andTipoEqualTo(MobileConstantes.MEDIO_PLAYA_LIMITES_VELOCIDAD);
		
		List<MapaIncidenciaGenerico> list = mapaIncidenciaGenericoMapper.selectByExample(c);
		
		List<Map<String, Object>> result = new ArrayList<Map<String,Object>>();
		
		Map<String, Object> map = null,cordenadaInicial = null,cordenadaFinal = null;
		
		for (MapaIncidenciaGenerico m : list) {
			map = new HashMap<String, Object>();
			map.put("id", m.getId());
			map.put("nombreVia", m.getNombreVia());
			map.put("tramo", m.getTramo());
			map.put("viaInicial", m.getViaIni());
			map.put("viaFinal", m.getViaFin());
			map.put("sentido", m.getSentido());
			map.put("percentil", m.getPercentil());
			map.put("limite", m.getLimite());
			
			cordenadaInicial = new HashMap<String, Object>();
			cordenadaInicial.put("longitud", m.getPuntoIni().split(",")[1]);
			cordenadaInicial.put("latitud", m.getPuntoIni().split(",")[0]);
			map.put("cordenadaInicial", cordenadaInicial);
			
			if(StringUtils.isNotBlank(m.getPuntoFin()) && !m.getPuntoFin().equals(",")){
				cordenadaFinal = new HashMap<String, Object>();
				cordenadaFinal.put("longitud", m.getPuntoFin().split(",")[1]);
				cordenadaFinal.put("latitud", m.getPuntoFin().split(",")[0]);
				map.put("cordenadaFinal", cordenadaFinal);
			}
			result.add(map);
		}
		
		return result;
	}


	@Override
	public List<PreInscripcionCierreCalle> obtenerPreRegistrosCierreCalle(PreInscripcionCierreCalle data)
			throws Exception {
		// TODO Auto-generated method stub
		
		Map<String, Object> parametros = new HashMap<String, Object>();
		parametros.put("DES_USUARIO", data.getDesUsuario());
		
		if(data.getCuadra()!=null){
			parametros.put("DES_USUARIO", data.getDesUsuario());
		}
		
		if(data.getNumExpediente()!=null){
			parametros.put("NUM_EXPEDIENTE", data.getNumExpediente());
		}
		
		if(data.getDireccion()!=null){
			parametros.put("DIRECCION", data.getDireccion());
		}
		
		if(data.getCuadra()!=null){
			parametros.put("CUADRA", data.getCuadra());
		}
		
		if(data.getEmpresa()!=null){
			parametros.put("EMPRESA", data.getEmpresa());
		}
		
		return preInscripcionCierreCalleMapper.bandejaPreRegistroCierreCalle(parametros);
		
	}

	@Override
	public PreInscripcionCierreCalle getPreRegistroById(Integer idPreRegistro) throws Exception {
		// TODO Auto-generated method stub
		
		PreInscripcionCierreCalle p = preInscripcionCierreCalleMapper.selectByPrimaryKey(idPreRegistro);
		
		if(p != null && p.getEstado() != 1 ){
			return null;
		}
				
		return p;
	}

//	@Override
//	public MapaIncidenciasRegistro actualizarGeoIncidencia(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		
//		if(incidencia.getIdIncidencia() == null){
//			incidencia.setTipoIncidencia(MobileConstantes.VOXIVA_WS);
//			return this.registrarIncidenciaGenericWithGeometria(incidencia);
//		}
//		
//		incidencia.setFecModifica(new Date());
//		mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//		
//		MapaIncidenciasRegistro recordUpdate = mapaIncidenciasRegistroMapper.selectByPrimaryKey(incidencia.getIdIncidencia());
//		
//		recordUpdate.setSubTipoCasoVoxiva(incidencia.getSubTipoCasoVoxiva());
//		recordUpdate.setDireccionFinal(incidencia.getDireccionFinal());
//		
//		recordUpdate.setEstadoVoxiva(incidencia.getEstadoVoxiva());
//		recordUpdate.setDesEstadoVoxiva(incidencia.getDesEstadoVoxiva());
//		
//		recordUpdate.setSubEstadoVoxiva(incidencia.getSubEstadoVoxiva());
//		recordUpdate.setDesSubEstadoVoxiva(incidencia.getDesSubEstadoVoxiva());
//		
//		recordUpdate.setEstadoCalifVoxiva(incidencia.getEstadoCalifVoxiva());
//		recordUpdate.setDesEstadoCalifVoxiva(incidencia.getDesEstadoCalifVoxiva());
//		
//		recordUpdate.setDireccionIncidencia(incidencia.getDesEstadoCalifVoxiva());
//		recordUpdate.setCuadraEvento(incidencia.getCuadraEvento());
//		
//		recordUpdate.setNombreRecepcionaIncidencia(incidencia.getNombreRecepcionaIncidencia());
//		recordUpdate.setDniRecepcionaIncidencia(incidencia.getDniRecepcionaIncidencia());
//		
//		recordUpdate.setDesUnidIntervVoxiva(incidencia.getDesUnidIntervVoxiva());
//		
////		recordUpdate.setIntervinientes(incidencia.getIntervinientes());
////		recordUpdate.setInvolucrados(incidencia.getInvolucrados());
//		
//		//No cambiar importante
//		mapaIncidenciasRegistroMapper.updateByPrimaryKey(recordUpdate);
//		
//		return recordUpdate;
//	}

//	@Override
//	public Map<String, Object> getGeometriaByIdIncidencia(Integer idIncidencia) throws Exception {
//		// TODO Auto-generated method stub
//		MapaIncidenciasGeometriaCriteria cg = new MapaIncidenciasGeometriaCriteria();
//		
//		MapaIncidenciasRegistro m = mapaIncidenciasRegistroMapper.selectByPrimaryKey(idIncidencia);
//		cg.createCriteria().andIdecodvalorEqualTo(m.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//		m.setDetalleGeometria(mapaIncidenciasGeometriaMapper.selectByExample(cg));
//		
//		Map<String, Object> data = new HashMap<String, Object>();
//		data.put("data", m);
//		
//		return data;
//	}
	
	
//	@Override
//	public MapaIncidenciasRegistro registrarIncidenciaGenericWithGeometria(MapaIncidenciasRegistro incidencia) throws Exception {
//
//		// TODO Auto-generated method stub
//		
//		if(incidencia.getIdIncidencia() == null){
//			incidencia.setEstado(MobileConstantes.ESTADO_ACTIVO);
//			incidencia.setVisible(MobileConstantes.LETRA_SI);
//			mapaIncidenciasRegistroMapper.insertSelective(incidencia);
//		}else{
//			mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//		}
//		
//		if(incidencia.getLatitud()!=null && incidencia.getLongitud()!=null){
//		
//			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
//			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//			
//			mapaIncidenciasGeometriaMapper.deleteByExample(c);
//			
//			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
//			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
//			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
//			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//			geometria.setIdecodvalor(incidencia.getIdIncidencia());
//			geometria.setGeometria(incidencia.getLatitud()+" "+incidencia.getLongitud());
//			
//			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
//			
//		}
//		
//		
//		return incidencia;
//	
//	}
	
//	@Override
//	public MapaIncidenciasRegistro registrarIncidenciaGenericWithGeometria(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		
//		if(incidencia.getIdIncidencia() == null){
////			int id = (int) mapaIncidenciasRegistroMapper.generateId().get("newid");
////			incidencia.setIdIncidencia(id);
////			incidencia.setEstReg(MobileConstantes.ESTADO_ACTIVO);
////			mapaIncidenciasRegistroMapper.insertIncidencia(incidencia);
//			
////			incidencia.setVisible(MobileConstantes.LETRA_SI);
//			
//			incidencia.setEstado(MobileConstantes.ESTADO_ACTIVO);
//			incidencia.setVisible(MobileConstantes.LETRA_SI);
//			mapaIncidenciasRegistroMapper.insertSelective(incidencia);
//			
////			int id = (int) mapaIncidenciasRegistroMapper.getId();
//			
//			List<MapaInterviniente> list1 = incidencia.getIntervinientes();
//			if (list1!=null){
//				for (MapaInterviniente l1: list1){
//					l1.setIdIncidencia(incidencia.getIdIncidencia());
//					mapaIntervinienteMapper.insertSelective(l1);
//				}
//			}
//			
//			List<MapaInvolucrado> list2 = incidencia.getInvolucrados();
//			if (list2!=null){
//				for (MapaInvolucrado l2: list2){
//					l2.setIdIncidencia(incidencia.getIdIncidencia());
//					mapaInvolucradoMapper.insertSelective(l2);
//				}
//			}
//		}else{
//			mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//			
//			
//			int id = incidencia.getIdIncidencia();
//			
//			mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//			
//			MapaIntervinienteCriteria c1 = new MapaIntervinienteCriteria();
//			c1.createCriteria().andIdIncidenciaEqualTo(id);
//			List<MapaInterviniente> list1 = incidencia.getIntervinientes();
//			if (list1!=null){
//				for (MapaInterviniente l1: list1){
//					l1.setIdIncidencia(id);
//					if (l1.getCodInterv()!=null){
//						mapaIntervinienteMapper.updateByExample(l1,c1);
//					} else {
//						mapaIntervinienteMapper.insertSelective(l1);
//					}
//				}
//			}
//			
//			MapaInvolucradoCriteria c2 = new MapaInvolucradoCriteria();
//			c2.createCriteria().andIdIncidenciaEqualTo(id);
//			List<MapaInvolucrado> list2 = incidencia.getInvolucrados();
//			if (list2!=null){
//				for (MapaInvolucrado l2: list2){
//					l2.setIdIncidencia(id);
//					if (l2.getCodInvoluc()!=null){
//						mapaInvolucradoMapper.updateByExample(l2,c2);
//					} else {
//						mapaInvolucradoMapper.insertSelective(l2);
//					}
//				}
//			}
//		}
//
//		if(incidencia.getCoordenadas()!=null){
//		
//			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
//			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//			
//			mapaIncidenciasGeometriaMapper.deleteByExample(c);
//			
//			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
//			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
//			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
//			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//			geometria.setIdecodvalor(incidencia.getIdIncidencia());
//			geometria.setGeometria(incidencia.getCoordenadas());
////			if(incidencia.getDireccion()!=null){
////				geometria.setDesdireccion(incidencia.getDireccion());
////			}
//			
//			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
//			
//		}
//		
//		return incidencia;
//	}
	
	@Override
	public int cambiarEstadoMarker(MapaIncidenciaRegistro incidencia) throws Exception {
		MapaIncidenciaRegistroCriteria c = new MapaIncidenciaRegistroCriteria();
		c.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia()).andIndLeidoEqualTo(incidencia.getIndLeido());
		return mapaIncidenciaRegistroMapper.updateByPrimaryKeySelective(incidencia);
//		return null;
	}

	@Override
	public List<GeoInfoCambista> getDataCambistas(GeoInfoCambista cambista) throws Exception {
		// TODO Auto-generated method stub
		
		GeoInfoCambistaCriteria c = new GeoInfoCambistaCriteria();
		c.createCriteria().andEstadoEqualTo(MobileConstantes.ESTADO_ACTIVO);
		
		return geoInfoCambistaMapper.selectByExample(c);
	}

//	@Override
//	public void updateIncidenciaByPk(MapaIncidenciasRegistro incidencia) throws Exception {
//		// TODO Auto-generated method stub
//		mapaIncidenciasRegistroMapper.updateByPrimaryKeySelective(incidencia);
//	}

	@Override
	public GeoInfoCambista insertInfoCambista(GeoInfoCambista cambista) throws Exception {
		// TODO Auto-generated method stub
		geoInfoCambistaMapper.insertSelective(cambista);
		return cambista;
	}

	@Override
	public void registrarAuditoria(AuditoriaIncidencia a) throws Exception {
		// TODO Auto-generated method stub
		auditoriaIncidenciaMapper.insertSelective(a);
	}
	
	
//	public List<Map<String, Object>> listaIncidenciasJsonFormatWaze(MapaIncidenciasRegistro incidencia)
//			throws Exception {
//		// TODO Auto-generated method stub
//		
//		List<Map<String, Object>> listJsonIncidencias = new ArrayList<Map<String,Object>>();
//		Map<String, Object> event = null;//new HashMap<String, Object>();
//		Map<String, Object> eventFinal = null;//new HashMap<String, Object>();
//		
//		Map<String, Object> locationPrev = null;
//		Map<String, Object> locationFinal = null;
//		
//		SimpleDateFormat sdfGMT = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS z");
//		sdfGMT.setTimeZone(TimeZone.getTimeZone("GMT"));
//		
//		SimpleDateFormat sdfGMT2 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS z");
//		sdfGMT2.setTimeZone(TimeZone.getTimeZone("GMT"));
//		
//		Map<String, Object> params = new HashMap<String, Object>();
//		
//		List<MapaIncidenciasRegistro> list = mapaIncidenciasRegistroMapper.selectListWazeService(params);
//
//		List<GeometriaLinea> lineas = null;
//		
//		List<MapaIncidenciaSchedule> schedules = null;
//		Integer num=0;
//		if(list!=null){
//		
//			for (MapaIncidenciasRegistro mapaIncidenciasRegistro : list) {
//				num++;
//				event = new HashMap<String, Object>();
//				eventFinal = new HashMap<String, Object>();
//				event.put("-id", mapaIncidenciasRegistro.getIdIncidencia() +"_"+mapaIncidenciasRegistro.getFecRegistra().getTime());
//				event.put("parent_event", "");
//				event.put("creationtime", sdfGMT.format(mapaIncidenciasRegistro.getFecRegistra()));
//				if(mapaIncidenciasRegistro.getFecModifica()!=null){
//					event.put("updatetime", sdfGMT.format(mapaIncidenciasRegistro.getFecModifica()));
//				}else{
//					event.put("updatetime", "");
//				}
//				
//				event.put("source", "");
//				
//				if(mapaIncidenciasRegistro.getTipoEvento() == MobileConstantes.WAZE_CONSTRUCTION_TYPE){
//					event.put("type", "CONSTRUCTION");
//				}else{
//					if(mapaIncidenciasRegistro.getTipoCierre().equalsIgnoreCase(MobileConstantes.CIERRE_PARCIAL)){
//						event.put("type", "CONSTRUCTION");
//					}else{
//						event.put("type", "ROAD_CLOSED");
//					}
//				
//				}
//
//				event.put("subtype", "");
//				event.put("description", mapaIncidenciasRegistro.getDescripcion());
//				
//				lineas = mapaIncidenciasRegistro.getLineas();
//				
//				String strStreet = null;
//				String strPolyline = null;
//				String strInter = null;
//				String strDirection = null;
//				
//				if(lineas != null){
//					locationPrev = new HashMap<String, Object>();
//					locationFinal = new HashMap<String, Object>();
//					for (GeometriaLinea linea : lineas) {
//						num++;
//						if(locationPrev.containsKey("street")){
//							strStreet = locationPrev.get("street").toString()+", "+linea.getDesCalle();
//							locationPrev.put("street", strStreet);
//						}else{
//							locationPrev.put("street", linea.getDesCalle());
//						}
//						
//						if(locationPrev.containsKey("polyline")){
//							strPolyline = locationPrev.get("polyline").toString()+" "+linea.getPointIni()+" "+linea.getPointFin();
//							locationPrev.put("polyline", strPolyline);
//						}else{
//							locationPrev.put("polyline", linea.getPointIni()+" "+linea.getPointFin());
//						}
//						
//						if(locationPrev.containsKey("location_description")){
//							strInter = locationPrev.get("location_description").toString()+", "+linea.getIntercepcion1()+"-"+linea.getIntercepcion2();
//							locationPrev.put("location_description", strInter);
//						}else{
//							locationPrev.put("location_description", linea.getIntercepcion1()+"-"+linea.getIntercepcion2());
//						}
//						
//						if(locationPrev.containsKey("direction")){
//							strDirection = locationPrev.get("direction").toString()+", "+linea.getDirCardinal();
//							locationPrev.put("direction", strDirection);
//						}else{
//							locationPrev.put("direction", linea.getDirCardinal());
//						}
//						
//					}
//					
//					event.put("location", locationPrev);
//				}
//				
//				if(mapaIncidenciasRegistro.getFecHoraInicio()!=null){
//					event.put("starttime", sdfGMT.format(mapaIncidenciasRegistro.getFecHoraInicio()));
//				}else{
//					event.put("starttime", "");
//				}
//				
//				if(mapaIncidenciasRegistro.getFecHoraFin()!=null){
//					event.put("endtime", sdfGMT.format(mapaIncidenciasRegistro.getFecHoraFin()));
//				}
//
//				schedules = mapaIncidenciasRegistro.getDias();
//				
//				Map<String, Object> schedulePrev = null;
//				String strSchedule = null;
//				
//				if(schedules!=null && schedules.size()>0){
//					
//					schedulePrev = new HashMap<String, Object>();
//					
//					for(MapaIncidenciaSchedule schedule : schedules){
//						num++;
//						if(schedule.getDesDia().equalsIgnoreCase("LUNES")){
//							
//							if(schedulePrev.containsKey("monday")){
//								strSchedule = schedulePrev.get("monday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("monday", strSchedule);
//							}else{
//								schedulePrev.put("monday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//							
//						}else if(schedule.getDesDia().equalsIgnoreCase("MARTES")){
//							
//							if(schedulePrev.containsKey("tuesday")){
//								strSchedule = schedulePrev.get("tuesday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("tuesday", strSchedule);
//							}else{
//								schedulePrev.put("tuesday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//						}else if(schedule.getDesDia().equalsIgnoreCase("MIERCOLES")){
//							
//							if(schedulePrev.containsKey("wednesday")){
//								strSchedule = schedulePrev.get("wednesday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("wednesday", strSchedule);
//							}else{
//								schedulePrev.put("wednesday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//						}else if(schedule.getDesDia().equalsIgnoreCase("JUEVES")){
//							
//							if(schedulePrev.containsKey("thursday")){
//								strSchedule = schedulePrev.get("thursday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("thursday", strSchedule);
//							}else{
//								schedulePrev.put("thursday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//						}else if(schedule.getDesDia().equalsIgnoreCase("VIERNES")){
//							
//							if(schedulePrev.containsKey("friday")){
//								strSchedule = schedulePrev.get("friday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("friday", strSchedule);
//							}else{
//								schedulePrev.put("friday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//						}else if(schedule.getDesDia().equalsIgnoreCase("SABADO")){
//							
//							if(schedulePrev.containsKey("saturday")){
//								strSchedule = schedulePrev.get("saturday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("saturday", strSchedule);
//							}else{
//								schedulePrev.put("saturday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//						}else if(schedule.getDesDia().equalsIgnoreCase("DOMINGO")){
//							
//							if(schedulePrev.containsKey("sunday")){
//								strSchedule = schedulePrev.get("sunday").toString()+","+schedule.getHoraInicio()+"-"+schedule.getHoraFin();
//								schedulePrev.put("sunday", strSchedule);
//							}else{
//								schedulePrev.put("sunday", schedule.getHoraInicio()+"-"+schedule.getHoraFin());
//							}
//							
//						}
//					
//						
//					}
//					
//					event.put("schedule", schedulePrev);
//				}
//				
//				eventFinal.put("event", event);
//				listJsonIncidencias.add(eventFinal);
//				
//			}
//		}
//		
//		this.writeLogGetWaze();
//		
//		return listJsonIncidencias;
//	}

	private void writeLogGetWaze(){
		
		try
    	{
    		String timeLog = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
    	    File logFile = new File(MobileConstantes.PATH_ADJUNTOS+"log_consumo_waze.txt");
    	    FileWriter fw = new FileWriter(logFile,true); //the true will append the new data
    	    System.out.println(logFile.getCanonicalPath());
    	    fw.write("Get: generate-jsonformat-waze => "+ timeLog+"\n");//appends the string to the file
    	    fw.close();
    	}
    	catch(IOException ioe)
    	{
    	    System.err.println("IOException: " + ioe.getMessage());
    	}
		
	}
	
	@Override
	public List<GeoInfoCambista> getAlertaCambista() throws Exception {
		// TODO Auto-generated method stub
		
		GeoInfoCambistaCriteria gicc = new GeoInfoCambistaCriteria();
		gicc.createCriteria().andIdAlertaIsNotNull().andEstadoEqualTo(MobileConstantes.ESTADO_ACTIVO);
		return geoInfoCambistaMapper.selectByExample(gicc);
	}

	
//	@Override
//	public List<MapaIncidenciasRegistro> selectVoxivaListMap(MapaIncidenciasRegistro incidencia) {
//		// TODO Auto-generated method stub
//		Map<String, Object> params = new HashMap<String,Object>();
//		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
//			params.put("ID_INCIDENCIA", incidencia.getIdIncidencia());
//		}
//		
//		ParametroSistema parametroNow = parametroSistemaService.obtenerParametroSistemaById(MobileConstantes.PARAMETRO_VOXIVA_DATA_NOW);
//		
//		if(parametroNow != null && parametroNow.getValor() != null && parametroNow.getValor().equals(MobileConstantes.ESTADO_ACTIVO_STRING)
//			&& incidencia.getIsAllMarkersVoxiva() != null &&  incidencia.getIsAllMarkersVoxiva().equals(MobileConstantes.ESTADO_ACTIVO_STRING)){
//			
//			DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
//	        String now = formatter.format(new Date());
//			
//			params.put("FEC_NOW", now);
//			
//			
//		}
//		
//		
//		return mapaIncidenciasRegistroMapper.selectVoxivaListMap(params);
//	}
	
//	@Override
//	public List<MapaIncidenciasRegistro> selectVoxivaListMap(MapaIncidenciasRegistro incidencia) {
//		// TODO Auto-generated method stub
//		Map<String, Object> params = new HashMap<String,Object>();
//		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
//			params.put("ID_INCIDENCIA", incidencia.getIdIncidencia());
//		}
//		return mapaIncidenciasRegistroMapper.selectVoxivaListMap(params);
//	}
	
	//Implementacion de nuevos metodos de servicio
	

//	@Override
//	public List<UnidadMapaIncidencia> listaUnidad() {
//		// TODO Auto-generated method stub
//		UnidadMapaIncidenciaCriteria criteria=new UnidadMapaIncidenciaCriteria();
//		criteria.createCriteria();
//		//return unidadMapper.selectAll();
//		return unidadMapaIncidenciaMapper.selectByExample(criteria); 
//	}
//
//	////Prueba
//	public List<UnidadMapaIncidencia> listaUnidadTodo() {
//		// TODO Auto-generated method stub
////		UnidadMapaIncidenciaCriteria criteria=new UnidadMapaIncidenciaCriteria();
////		criteria.createCriteria();
//		//return unidadMapper.selectAll();
//		return unidadMapaIncidenciaMapper.selectAll(); 
//	}

//	@Override
//	public List<SubCasoMapaIncidencia> listaSubCaso() throws Exception {
//		// TODO Auto-generated method stub
//		SubCasoMapaIncidenciaCriteria criteria=new SubCasoMapaIncidenciaCriteria();
//		criteria.createCriteria();
//		//return unidadMapper.selectAll();
//		return subCasoMapaIncidenciaMapper.selectByExample(criteria); 
//	}

//	
//	@Override
//	public List<Unidad> listaUnidad() {
//		// TODO Auto-generated method stub
//		UnidadCriteria criteria=new UnidadCriteria();
//		criteria.createCriteria();
//		//return unidadMapper.selectAll();
//		return unidadMapper.selectByExample(criteria); 
//		
//	}

	@Override
	public List<MapaCaso> listarCaso() throws Exception {
		// TODO Auto-generated method stub
		MapaCasoCriteria criteria = new MapaCasoCriteria();
		criteria.createCriteria();
		return mapaCasoMapper.selectByExample(criteria);
	}

	@Override
	public List<MapaSubcaso> listarSubCaso() throws Exception {
		// TODO Auto-generated method stub
		MapaSubcasoCriteria criteria = new MapaSubcasoCriteria();
		criteria.createCriteria();
		return mapaSubcasoMapper.selectByExample(criteria);
	}
	
	
	////////////////////////////////////////////////////////////////////////////
	////																	////
	////	A partir de aqui van los metodos para el nuevo mapa incidencia	////
	////																	////
	////////////////////////////////////////////////////////////////////////////
	
	@Override
	public List<MapaUnidad> listarUnidad() throws Exception  {
		// TODO Auto-generated method stub
		MapaUnidadCriteria criteria = new MapaUnidadCriteria();
		criteria.createCriteria();
		return mapaUnidadMapper.selectByExample(criteria);
	}
	
	@Override
	public List<MapaCaso> listarCasoPorUnidad(Integer cod) {
		// TODO Auto-generated method stub
		MapaCasoCriteria criteria = new MapaCasoCriteria();
		criteria.createCriteria().andCodUnidadEqualTo(cod);
		return mapaCasoMapper.selectByExample(criteria);
	}
	
	public List<MapaSubcaso> listarSubCasoPorCaso(Integer cod) {
		// TODO Auto-generated method stub
		MapaSubcasoCriteria criteria = new MapaSubcasoCriteria();
		criteria.createCriteria().andCodCasoEqualTo(cod);
		return mapaSubcasoMapper.selectByExample(criteria);
	}

	@Override
	public List<MapaMaestroTipo> listarTipoPorPadre(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		MapaMaestroTipoCriteria criteria = new MapaMaestroTipoCriteria();
		criteria.createCriteria().andCodTpoPadreEqualTo(cod).andEstRegEqualTo("A");
		return mapaMaestroTipoMapper.selectByExampleWithOrder(criteria);
	}

					@Override
					public List<MapaMaestroTipo> listarTipoAnimal(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						return listarTipoPorPadre(MobileConstantes.TIPO_MAESTRO_ANIMAL);
					}
				
					@Override
					public List<MapaMaestroTipo> listarTipoSexo(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						return listarTipoPorPadre(MobileConstantes.TIPO_MAESTRO_SEXO);
					}
				
					@Override
					public List<MapaMaestroTipo> listarTipoNacionalidad(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						return listarTipoPorPadre(MobileConstantes.TIPO_MAESTRO_NACIONALIDAD);
					}
				
					@Override
					public List<MapaMaestroTipo> listarTipoDia(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						return listarTipoPorPadre(MobileConstantes.TIPO_MAESTRO_DIA);
					}
	
	
					
				/*					
									@Override
					public List<Incidencia> listarIncidencias(Incidencia incidencia) throws Exception {
						// TODO Auto-generated method stub
						IncidenciaCriteria criteria = new IncidenciaCriteria();
						criteria.createCriteria();
						return incidenciaMapper.selectByExample(criteria);
					}
				
				//	@Override
				//	public List<Map<String, Object>> bandejaIncidencia() throws Exception {
				//		// TODO Auto-generated method stub
				//		
				//		return incidenciaMapper.selectIncidenciaBandeja();
				//	}
					
					
									
									
					@Override
					public List<Incidencia> listaBandejaIncidencia() throws Exception {
						// TODO Auto-generated method stub
						IncidenciaCriteria criteria=new IncidenciaCriteria();
						criteria.createCriteria();		
						return incidenciaMapper.selectByExample(criteria); 
					}
				
					@Override
					public List<Interviniente> listaIntervinientePorIncidencia(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						IntervinienteCriteria criteria = new IntervinienteCriteria();
						criteria.createCriteria().andCodIncidenciaEqualTo(cod);
						return intervinienteMapper.selectByExample(criteria);
					}
				
					@Override
					public List<Involucrado> listaInvolucradoPorIncidencia(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						InvolucradoCriteria criteria = new InvolucradoCriteria();
						criteria.createCriteria().andCodIncidenciaEqualTo(cod);
						return involucradoMapper.selectByExample(criteria);
					}
				
					@Override
					public List<Vehiculo> listaVehiculoPorIncidencia(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						VehiculoCriteria criteria = new VehiculoCriteria();
						criteria.createCriteria().andCodIncidenciaEqualTo(cod);
						return vehiculoMapper.selectByExample(criteria);
					}
				
					@Override
					public List<Conductor> listaConductorPorIncidencia(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						ConductorCriteria criteria = new ConductorCriteria();
						criteria.createCriteria().andCodIncidenciaEqualTo(cod);
						return conductorMapper.selectByExample(criteria);
					}
				
					@Override
					public Incidencia registrarIncidencia(Incidencia incidencia) throws Exception {
						// TODO Auto-generated method stub
						if(incidencia.getCodIncidencia() == null){
							incidencia.setEstReg(MobileConstantes.ESTADO_ACTIVO);
				//			incidencia.setVisible(MobileConstantes.LETRA_SI);
							incidenciaMapper.insertSelective(incidencia);
						}else{
							incidenciaMapper.updateByPrimaryKeySelective(incidencia);
						}
						
				//		if(incidencia.getLatitud()!=null && incidencia.getLongitud()!=null){
				//		
				//			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
				//			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
				//			
				//			mapaIncidenciasGeometriaMapper.deleteByExample(c);
				//			
				//			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
				//			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
				//			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
				//			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
				//			geometria.setIdecodvalor(incidencia.getIdIncidencia());
				//			geometria.setGeometria(incidencia.getLatitud()+" "+incidencia.getLongitud());
				//			
				//			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
				//			
				//		}
				//		
						System.out.println("incidencia: "+incidencia);
						return incidencia;
				//		return null;
					}
				
					@Override
					public Incidencia obtenerIncidencia(Integer cod) throws Exception {
						// TODO Auto-generated method stub
						IncidenciaCriteria criteria = new IncidenciaCriteria();
						criteria.createCriteria().andCodIncidenciaEqualTo(cod);
						return incidenciaMapper.selectByPrimaryKey(cod);
					}
				
					
				*/
	
	
//	@Override
//	public List<Map<String, Object>> listaIntervinientePorIncidencia(Integer cod) throws Exception {
//		// TODO Auto-generated method stub
//		Map<String, Object> params=new HashMap<>();
//		params.put("codIncidencia",cod);
//		return intervinienteMapper.selectIntervinientePorIncidencia(cod);
//	}
	

	@Override
	public List<MapaIncidenciaRegistro> bandejaIncidencias(MapaIncidenciaRegistro incidencia) throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		
		if(incidencia.getCodUnidad() != null){ params.put("cod_unidad", incidencia.getCodUnidad()); }
		if(incidencia.getCodCaso() != null){ params.put("cod_caso", incidencia.getCodCaso()); }
		if(incidencia.getCodSubcaso() != null){ params.put("cod_subcaso", incidencia.getCodSubcaso()); }
		if(incidencia.getCodMedio() != null){ params.put("cod_medio", incidencia.getCodMedio()); }
		if(incidencia.getCodSituacion() != null){ params.put("cod_situacion", incidencia.getCodSituacion()); }
//		return incidenciaMapper.selectBandejaIncidencias();
//		return mapaIncidenciasRegistroMapper.selectBandejaIncidencias2();
		return mapaIncidenciaRegistroMapper.selectBandejaIncidenciaTodo(params);
	}
	
	@Override
	public Map<String, Object> bandejaIncidencias2(MapaIncidenciaRegistro incidencia) throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		
		int c = 0;
		if(incidencia.getStart() == null){ incidencia.setStart(0); }
		if(incidencia.getLimit() == null){ incidencia.setLimit(10); }
		if(incidencia.getStart() != 0) { c = c + 1; }
		
		if(incidencia.getIdIncidencia() != null){ params.put("id_incidencia", incidencia.getIdIncidencia()); }
		if(incidencia.getNroCasoVoxiva() != null){ params.put("nro_caso_voxiva", incidencia.getNroCasoVoxiva()); }
		if(incidencia.getCodUnidad() != null){ params.put("cod_unidad", incidencia.getCodUnidad()); }
		if(incidencia.getCodCaso() != null){ params.put("cod_caso", incidencia.getCodCaso()); }
		if(incidencia.getCodSubcaso() != null){ params.put("cod_subcaso", incidencia.getCodSubcaso()); }
		if(incidencia.getCodMedio() != null){ params.put("cod_medio", incidencia.getCodMedio()); }
		if(incidencia.getCodSituacion() != null){ params.put("cod_situacion", incidencia.getCodSituacion()); }
		
		if(incidencia.getStrFecIni() != null){ params.put("desde", incidencia.getStrFecIni()); }
		if(incidencia.getStrFecFin() != null){ params.put("hasta", incidencia.getStrFecFin()); }
		if(incidencia.getTpoOperador() != null){ params.put("tpo_operador", incidencia.getTpoOperador()); }
		if(incidencia.getNombReport() != null){ params.put("nomb_report", incidencia.getNombReport()); }
		if(incidencia.getTelfReport() != null){ params.put("telf_report", incidencia.getTelfReport()); }
		if(incidencia.getDescVia() != null && incidencia.getDescVia() != ""){ params.put("desc_via", incidencia.getDescVia()); }
		if(incidencia.getCdra() != null && incidencia.getCdra() != ""){ params.put("cdra", incidencia.getCdra()); }
		if(incidencia.getFlgReasignado() != null){ params.put("flg_reasignado", incidencia.getFlgReasignado()); }
		
		if(incidencia!=null && incidencia.getUsrRegistra()!=null){ params.put("usuario", incidencia.getUsrRegistra()); }
		if(incidencia!=null && incidencia.getUsrRol()!=null){ params.put("rol", incidencia.getUsrRol()); }
		
		params.put("START", incidencia.getStart()+c);
		params.put("LIMIT", incidencia.getStart()+incidencia.getLimit());

		List<MapaIncidenciaRegistro> listado = mapaIncidenciaRegistroMapper.selectBandejaIncidenciaPaginada(params);
		
		if(listado!=null && listado.size()>0){
			result.put("data", listado);
//			result.put("total", listado.size());
			result.put("total", mapaIncidenciaRegistroMapper.countBandejaIncidenciaPaginada(params));
		}else{
			result.put("data", null);
			result.put("total", 0);
		}

		return result;

	}
	
	@Override
	public List<MapaVehiculo> listaVehiculos(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		
//		return incidenciaMapper.selectBandejaIncidencias();
		if (cod!=null){
			MapaVehiculoCriteria c = new MapaVehiculoCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(cod);
			return mapaVehiculoMapper.selectByExample(c);
		} else {
			return null;
		}
		
	}
	
	@Override
	public List<MapaInvolucrado> listaInvolucrados(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		
//		return incidenciaMapper.selectBandejaIncidencias();
		if (cod!=null){
			MapaInvolucradoCriteria c = new MapaInvolucradoCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(cod);
			return mapaInvolucradoMapper.selectByExample(c);
		} else {
			return null;
		}
		
	}
	
	@Override
	public List<MapaInterviniente> listaIntervinientes(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		
//		return incidenciaMapper.selectBandejaIncidencias();
		if (cod!=null){
			MapaIntervinienteCriteria c = new MapaIntervinienteCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(cod);
			return mapaIntervinienteMapper.selectByExample(c);
		} else {
			return null;
		}
		
	}
	
	@Override
	public void desactivarIncidencia(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		MapaIncidenciaRegistro a = new MapaIncidenciaRegistro();
		MapaInterviniente b = new MapaInterviniente();
		MapaInvolucrado c = new MapaInvolucrado();
		MapaVehiculo d = new MapaVehiculo();
		a.setIdIncidencia(cod);
		b.setIdIncidencia(cod);
		c.setIdIncidencia(cod);
		d.setIdIncidencia(cod);
//		e.setFecModifica(new Date());    ---SE DEBE CREAR LOS ATRIBUTOS DE AUDITORIA EN TABLA INCIDENCIA
		a.setEstReg(MobileConstantes.ESTADO_INACTIVO);
		b.setEstReg(MobileConstantes.ESTADO_INACTIVO);
		c.setEstReg(MobileConstantes.ESTADO_INACTIVO);
		d.setEstReg(MobileConstantes.ESTADO_INACTIVO);
		mapaIncidenciaRegistroMapper.updateByPrimaryKeySelective(a);
		mapaIntervinienteMapper.updateByPrimaryKeySelective(b);
		mapaInvolucradoMapper.updateByPrimaryKeySelective(c);
		mapaVehiculoMapper.updateByPrimaryKeySelective(d);
	}
	
	@Override
	public void desactivarReach(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		ReachFeed a = new ReachFeed();
		a.setId(cod);
		a.setEstadoAtencion(MobileConstantes.ESTADO_INACTIVO);
		reachFeedMapper.updateByPrimaryKeySelective(a);
	}
	
	@Override
	public void desactivarPos(Integer cod) throws Exception {
		// TODO Auto-generated method stub
		GeoInfoPos a = new GeoInfoPos();
		a.setFlgAlerta("N");
		GeoInfoPosCriteria c = new GeoInfoPosCriteria();
		c.createCriteria().andCodComerEqualTo(cod);
		geoInfoPosMapper.updateByExampleSelective(a, c);
	}

	@Override
	public Map<String, Object> obtenerNuevoId() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<MapaIncidenciaRegistro> listaAlertas(MapaIncidenciaRegistro incidencia) throws Exception {
		Map<String, Object> params = new HashMap<String,Object>();
		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
			params.put("id_incidencia", incidencia.getIdIncidencia());
		}
		if(incidencia!=null && incidencia.getNroCasoVoxiva()!=null){
			params.put("nro_caso_voxiva", incidencia.getNroCasoVoxiva());
		}
		if(incidencia!=null && incidencia.getArea()!=null){
			params.put("area", incidencia.getArea());
		}
		if(incidencia!=null && incidencia.getTpoOperador()!=null){
			params.put("tpoOperador", incidencia.getTpoOperador());
		}
		if(incidencia!=null && incidencia.getUsrRegistra()!=null){
			params.put("usuario", incidencia.getUsrRegistra());
		}
		if(incidencia!=null && incidencia.getUsrRol()!=null){
			params.put("rol", incidencia.getUsrRol());
		}
		
		return mapaIncidenciaRegistroMapper.selectMapaIncidencia(params);
		
	}
	
	
//	@Override
//	public List<MapaIncidenciaRegistro> listaAlertasTimelap(MapaIncidenciaRegistro incidencia) throws Exception {
//		Map<String, Object> params = new HashMap<String,Object>();
//		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
//			params.put("id_incidencia", incidencia.getIdIncidencia());
//		}
//		if(incidencia!=null && incidencia.getNroCasoVoxiva()!=null){
//			params.put("nro_caso_voxiva", incidencia.getNroCasoVoxiva());
//		}
//		
//		return mapaIncidenciaRegistroMapper.selectMapaIncidenciaTimelap(params);
//		
//		
//		
//		
//	}
	
	@Override
	public List<MapaIncidenciaRegistro> listaAlertasTimelap(MapaIncidenciaRegistro incidencia) throws Exception {
		Map<String, Object> params = new HashMap<String,Object>();
		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
			params.put("id_incidencia", incidencia.getIdIncidencia());
		}
		if(incidencia!=null && incidencia.getNroCasoVoxiva()!=null){
			params.put("nro_caso_voxiva", incidencia.getNroCasoVoxiva());
		}
		
		List<MapaIncidenciaRegistro> lista=mapaIncidenciaRegistroMapper.selectMapaIncidenciaTimelap(params);
		if(lista!=null && lista.size()>0){
			for (MapaIncidenciaRegistro mapa : lista) {
				ImagenIncidenciaCriteria cr=new ImagenIncidenciaCriteria();
				cr.createCriteria().andIdIncidenciaEqualTo(mapa.getIdIncidencia());
				 mapa.setListaImagen(imagenIncidenciaMapper.selectByExampleAlt(cr));
				}	
		}
		
		
		return lista;
	}
	
	

	@Override
	public List<MapaIncidenciaRegistro> listaAlertasExposicion(MapaIncidenciaRegistro incidencia) throws Exception {
		
		Map<String, Object> params = new HashMap<String,Object>();
		Integer tpoExpo = incidencia.getTpoExpo();
		
		if(incidencia!=null && incidencia.getArea()!=null){
			params.put("area", incidencia.getArea() );
		}
		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
			params.put("idIncidencia", incidencia.getIdIncidencia() );
		}
		if(incidencia!=null && incidencia.getTpoExpo()!=null){
			params.put("tpoExpo", incidencia.getTpoExpo() );
		}
		if(incidencia!=null && incidencia.getStrFecIni()!=null){
			params.put("fecExpoDesde", incidencia.getStrFecIni() );
		}
		if(incidencia!=null && incidencia.getStrFecFin()!=null){
			params.put("fecExpoHasta", incidencia.getStrFecFin() );
		}
		
		List<MapaIncidenciaRegistro> lista=mapaIncidenciaRegistroMapper.selectMapaIncidenciaExposicion(params);
		if(lista!=null && lista.size()>0){
			for (MapaIncidenciaRegistro mapa : lista) {
				ImagenIncidenciaCriteria cr=new ImagenIncidenciaCriteria();
				if (tpoExpo==null){
					cr.createCriteria().andIdIncidenciaEqualTo(mapa.getIdIncidencia());
				}else{
					cr.createCriteria().andIdIncidenciaEqualTo(mapa.getIdIncidencia()).andTpoExpoEqualTo(tpoExpo);
				}
				mapa.setListaImagen(imagenIncidenciaMapper.selectByExample(cr));
			}	
		}
		
		return lista;
	}
	
	@Override
	public List<Map<String, Object>> listaExposicion(MapaIncidenciaRegistro incidencia) throws Exception {
		
		Map<String, Object> params = new HashMap<String,Object>();
		
		if(incidencia!=null && incidencia.getArea()!=null){
			params.put("area", incidencia.getArea() );
		}
		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
			params.put("idIncidencia", incidencia.getIdIncidencia() );
		}
		if(incidencia!=null && incidencia.getTpoExpo()!=null){
			params.put("tpoExpo", incidencia.getTpoExpo() );
		}
		if(incidencia!=null && incidencia.getStrFecIni()!=null){
			params.put("fecExpoDesde", incidencia.getStrFecIni() );
		}
		if(incidencia!=null && incidencia.getStrFecFin()!=null){
			params.put("fecExpoHasta", incidencia.getStrFecFin() );
		}
		
		List<Map<String, Object>> lista=mapaIncidenciaRegistroMapper.selectListaExposicion(params);
		return lista;
		
	}
	
	
	@Override
	public List<ImagenIncidencia> listaImagenIncidenciaTimelap(MapaIncidenciaRegistro incidencia) throws Exception {
//	public Map<String, Object> listaAlertasTimelap(MapaIncidenciaRegistro incidencia) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		Integer idIncidencia = incidencia.getIdIncidencia();
//		MapaIncidenciaRegistro i = mapaIncidenciaRegistroMapper.selectByPrimaryKey(idIncidencia);
//		
//		if (idIncidencia!=null) {
//			ImagenIncidenciaCriteria c1 = new ImagenIncidenciaCriteria();
//			c1.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<ImagenIncidencia> l1 = imagenIncidenciaMapper.selectByExample(c1);
//			
//			if (l1!=null) { i.setImagenes(l1); }
//			
//		}
//		data.put("data", i);
//		return data;
		
		
		Map<String, Object> params = new HashMap<String,Object>();
//		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
//			params.put("id_incidencia", incidencia.getIdIncidencia());
//		}
//		return mapaIncidenciaRegistroMapper.selectImagenIncidencia(params);
		
		ImagenIncidenciaCriteria c = new ImagenIncidenciaCriteria();
		c.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
		return imagenIncidenciaMapper.selectByExample(c);
	}
	
	public List<MapaIncidenciaRegistro> bandejaIncidencia(MapaIncidenciaRegistro incidencia) throws Exception {
		Map<String, Object> params = new HashMap<String,Object>();
		if(incidencia!=null){
			if(incidencia.getIdIncidencia()!=null){ params.put("id_incidencia", incidencia.getIdIncidencia()); }
			if(incidencia.getCodUnidad()!=null){ params.put("cod_unidad", incidencia.getCodUnidad()); }
			if(incidencia.getCodCaso()!=null){ params.put("cod_caso", incidencia.getCodCaso()); }
			if(incidencia.getCodSubcaso()!=null){ params.put("cod_subcaso", incidencia.getCodSubcaso()); }
			if(incidencia.getCodMedio()!=null){ params.put("cod_medio", incidencia.getCodMedio()); }
			if(incidencia.getCodSituacion()!=null){ params.put("cod_situacion", incidencia.getCodSituacion()); }
			if(incidencia.getNroCasoVoxiva()!=null){ params.put("nro_caso_voxiva", incidencia.getNroCasoVoxiva()); }
			if(incidencia.getFecNotificacion()!=null){ params.put("fec_notificacion", incidencia.getFecNotificacion()); }
			if(incidencia.getFecEvento()!=null){ params.put("fec_evento", incidencia.getFecEvento()); }
			
		}
		return mapaIncidenciaRegistroMapper.selectMapaIncidencia(params);
	}
	
	
	@Override
	public Map<String, Object> consultarIncidencia(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		MapaIncidenciaRegistro i = mapaIncidenciaRegistroMapper.selectByPrimaryKey(idIncidencia);
		
		if (idIncidencia!=null) {
			MapaIntervinienteCriteria c1 = new MapaIntervinienteCriteria();
			c1.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<MapaInterviniente> l1 = mapaIntervinienteMapper.selectByExample(c1);
			
			MapaInvolucradoCriteria c2 = new MapaInvolucradoCriteria();
			c2.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<MapaInvolucrado> l2 = mapaInvolucradoMapper.selectByExample(c2);
			
			MapaVehiculoCriteria c3 = new MapaVehiculoCriteria();
			c3.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<MapaVehiculo> l3 = mapaVehiculoMapper.selectByExample(c3);
			
			MapaIncidenciaBitacoraCriteria c4 = new MapaIncidenciaBitacoraCriteria();
			c4.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<MapaIncidenciaBitacora> l4 = mapaIncidenciaBitacoraMapper.selectByExample(c4);
			
			if (l1!=null) { i.setIntervinientes(l1); }
			if (l2!=null) { i.setInvolucrados(l2); }
			if (l3!=null) { i.setVehiculos(l3); }
			if (l4!=null) { i.setBitacora(l4); }
		}
		data.put("data", i);
		return data;
	}
	
	
//	@Override
//	public Map<String, Object> wazeListTimelap(Timestamp fecha) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		MapaIncidenciaRegistro i = mapaIncidenciaRegistroMapper.selectByPrimaryKey(idIncidencia);
//		
//		if (idIncidencia!=null) {
//			MapaIntervinienteCriteria c1 = new MapaIntervinienteCriteria();
//			c1.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaInterviniente> l1 = mapaIntervinienteMapper.selectByExample(c1);
//			
//			MapaInvolucradoCriteria c2 = new MapaInvolucradoCriteria();
//			c2.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaInvolucrado> l2 = mapaInvolucradoMapper.selectByExample(c2);
//			
//			MapaVehiculoCriteria c3 = new MapaVehiculoCriteria();
//			c3.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaVehiculo> l3 = mapaVehiculoMapper.selectByExample(c3);
//			
//			MapaIncidenciaBitacoraCriteria c4 = new MapaIncidenciaBitacoraCriteria();
//			c4.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaIncidenciaBitacora> l4 = mapaIncidenciaBitacoraMapper.selectByExample(c4);
//			
//			if (l1!=null) { i.setIntervinientes(l1); }
//			if (l2!=null) { i.setInvolucrados(l2); }
//			if (l3!=null) { i.setVehiculos(l3); }
//			if (l4!=null) { i.setBitacora(l4); }
//		}
//		data.put("data", i);
//		return data;
//	}
	

//	@Override
//	public List<Map<String, Object>> getDynamicJson(Map<String, Object> params) throws Exception {
//		List<Map<String, Object>> res = new ArrayList<Map<String, Object>>();
//		if(Integer.parseInt(params.get("tipoGraph").toString())==MobileConstantes.TIPO_GRAPH_SERIE){
//			params.put("tsserie", 0);
//			params.put("tspie", null);
//		}else{
//			params.put("tsserie", null);
//			params.put("tspie", 0);			
//		}
//		res = mapaIncidenciaRegistroMapper.selectDynamicJson(params);
//		return res;
//	}

//	@Override
//	public List<Map<String, Object>> getJson() throws Exception {
//		return mapaIncidenciaRegistroMapper.selectJson();
//	}
	
//	@Override
//	public List<Map<String, Object>> getJson2(Map<String, Object> w) throws Exception {
//		return mapaIncidenciaRegistroMapper.selectJson2(w);
//	}

	
	
	
	// SERVICIOS PARA ESTADISTICAS
	
	
	@Override
	public List<Map<String, Object>> getData(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectData(params);
	}
		
	@Override
//	public List<Map<String, Object>> getSerie(EstadisticaConsulta ec) throws Exception {
	public List<Map<String, Object>> getSerie(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectSerie(params);
	}
	
	@Override
	public List<Map<String, Object>> getPie(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectPie(params);
	}
	
	@Override
	public List<Map<String, Object>> getPieNull() throws Exception {
		return mapaIncidenciaRegistroMapper.selectPieNull();
	}
	
	@Override
	public List<Map<String, Object>> getHeatmap(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectHeatmap(params);
	}

	public List<Map<String, Object>> getFrecuenciaDia(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectFrecuenciaDia(params);
	}

	public List<Map<String, Object>> getFrecuenciaHora(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectFrecuenciaHora(params);
	}
	
	public List<Map<String, Object>> getTopZona(Map<String, Object> params) throws Exception {
		return mapaIncidenciaRegistroMapper.selectTopZona(params);
	}
	
//	@Override
//	public List<MapaIncidenciaRegistro> listarAlertas(MapaIncidenciaRegistro incidencia) throws Exception {
//		Map<String, Object> params = new HashMap<String,Object>();
//		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
//			params.put("id_incidencia", incidencia.getIdIncidencia());
//		}
//		return mapaIncidenciaRegistroMapper.listarAlertas(params);
//	}

				/*
					@Override
					public Map<String, Object> obtenerNuevoId(){
						int id = (int) incidenciaMapper.generateId().get("codIncidencia");
						System.out.println("id nuevo: "+id);
						return incidenciaMapper.generateId();
					}
					//
					@Override
					public Incidencia registrarPrueba(Incidencia incidencia, List<Involucrado> listInvolucrado, 
														List<Interviniente> listInterviniente) throws Exception {
						
						if( incidencia.getCodIncidencia() == null){
							int id = (int) incidenciaMapper.generateId().get("newid");
							incidencia.setCodIncidencia(id);
							incidencia.setEstReg(MobileConstantes.ESTADO_ACTIVO);
							incidenciaMapper.insertIncidencia(incidencia);
							
							List<Interviniente> list1 = listInterviniente;
							for (Interviniente l1: list1){
								l1.setCodIncidencia(id);
								intervinienteMapper.insertSelective(l1);
							}
							List<Involucrado> list2 = listInvolucrado;
							for (Involucrado l2: list2){
								l2.setCodIncidencia(id);
								involucradoMapper.insertSelective(l2);
							}
				//			incidencia.setVisible(MobileConstantes.LETRA_SI);
							
						} else {
							
							int id = incidencia.getCodIncidencia();
							
							incidenciaMapper.updateByPrimaryKeySelective(incidencia);
							
							IntervinienteCriteria c1 = new IntervinienteCriteria();
							c1.createCriteria().andCodIncidenciaEqualTo(id);
							List<Interviniente> list1 = listInterviniente;
							for (Interviniente l1: list1){
								l1.setCodIncidencia(id);
								intervinienteMapper.updateByExample(l1,c1);
							}
							
							InvolucradoCriteria c2 = new InvolucradoCriteria();
							c2.createCriteria().andCodIncidenciaEqualTo(id);
							List<Involucrado> list2 = listInvolucrado;
							for (Involucrado l2: list2){
								l2.setCodIncidencia(id);
								involucradoMapper.updateByExample(l2,c2);
							}
						
							
							
						}
						
				//		if(incidencia.getLatitud()!=null && incidencia.getLongitud()!=null){
				//		
				//			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
				//			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
				//			
				//			mapaIncidenciasGeometriaMapper.deleteByExample(c);
				//			
				//			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
				//			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
				//			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
				//			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
				//			geometria.setIdecodvalor(incidencia.getIdIncidencia());
				//			geometria.setGeometria(incidencia.getLatitud()+" "+incidencia.getLongitud());
				//			
				//			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
				//			
				//		}
				//		
				//			System.out.println("incidencia: "+incidencia);
							return incidencia;
				//			return null;
				//		}
					}
					
					
				*/


//	@Override
//	public List<Map<String, Object>> selectBandejaIncidencias() {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
	
	

	@Override
	public int reasignarOperador(MapaIncidenciaRegistro incidencia) throws Exception {
		
		int result;
		Map<String, Object> params = new HashMap<String, Object>();
		if(incidencia.getTpoOperador()!= null){
			params.put("tpoOperador", incidencia.getTpoOperador());
		}
		if(incidencia.getListIds()!= null){
			params.put("listIds", incidencia.getListIds());
		}
		result = mapaIncidenciaRegistroMapper.reasignarOperador(params);
		return result;
	}
	
	@Override
	public MapaIncidenciaRegistro registrarIncidencia(MapaIncidenciaRegistro incidencia) throws Exception {
		// TODO Auto-generated method stub
		
		incidencia.setEstReg(MobileConstantes.ESTADO_ACTIVO);
		incidencia.setVisible(MobileConstantes.LETRA_SI);
		
		if(incidencia.getIdIncidencia()==null){
//		if(incidencia.getFecNotificacion()==null){
			incidencia.setFecNotificacion(new Timestamp(System.currentTimeMillis())); 
		}
		
		if(incidencia.getFecEvento()!=null){
//			incidencia.setFecEvento(new Timestamp(incidencia.getFecEvento().getTime())); 
		}
		
		if(incidencia.getFecAtencion()!=null && incidencia.getCodSituacion()==870 ){
			incidencia.setFecAtencion(new Timestamp(incidencia.getFecAtencion().getTime())); 
		}
				
//		if(incidencia.getZona()!=null){
//			if(incidencia.getZona().toUpperCase().contains("PLAYA")){
//				incidencia.setArea("1");
//			}else{
//				try{
//					int z = Integer.parseInt(incidencia.getZona().replace("ZONA ", ""));
//					if(z<8&&z!=4){
//						incidencia.setArea("1");
//					} else if ((z>7&&z<11)||z==4){
//						incidencia.setArea("2");
//					} else if (z>10) {
//						incidencia.setArea("3");
//					}
//				} catch(Exception e) {
//					System.out.println("EXCEPTION: NO SE OBTUVO AREA SEGUN ZONA. ID="+incidencia.getIdIncidencia());
//				}
//			}
//		}
		
		if(incidencia.getFlgReasignado()==null || !incidencia.getFlgReasignado().equals("S")){
			incidencia.setFlgReasignado("N"); 
		}
		
		if(incidencia.getCodSituacion()!=null){
			int sit = incidencia.getCodSituacion(); 
			switch(sit){
				case 870:	//ATENDIDO
				case 871:	//ATENDIDO/FALSA ALARMA
					if(incidencia.getFecAtencion()==null){
						incidencia.setFecAtencion(new Timestamp(System.currentTimeMillis()));
					}
					incidencia.setFecCierre(new Timestamp(System.currentTimeMillis()));
					break;
				case 872:	//DESCARTADO
				case 874:	//REPETIDO
					incidencia.setFecCierre(new Timestamp(System.currentTimeMillis()));
					break;
				default:
					break;
			}			
		}
		
		if(incidencia.getTelfReport()!=null && !incidencia.getTelfReport().equals("")){
			//Registrar telefonos
			try {
				MapaTelefono t = new MapaTelefono();
				
				t = mapaTelefonoMapper.selectByPrimaryKey(incidencia.getTelfReport());
				if(t!=null){
					if(!incidencia.getNombReport().equalsIgnoreCase(t.getAsociado()) && !incidencia.getNombReport().equals("")){
						t.setAsociado(incidencia.getNombReport().toUpperCase());
						mapaTelefonoMapper.updateByPrimaryKey(t);
					}
				}else{
					t = new MapaTelefono();
					t.setTelefono(incidencia.getTelfReport());
					t.setAsociado(incidencia.getNombReport().toUpperCase());
					mapaTelefonoMapper.insert(t);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		if(incidencia.getIdIncidencia() == null){

			mapaIncidenciaRegistroMapper.insertSelective(incidencia);
				
		} else {
		
			mapaIncidenciaRegistroMapper.updateByPrimaryKeySelective(incidencia);
			
			MapaIntervinienteCriteria c1 = new MapaIntervinienteCriteria();
			c1.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
			mapaIntervinienteMapper.deleteByExample(c1);
			
			MapaInvolucradoCriteria c2 = new MapaInvolucradoCriteria();
			c2.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
			mapaInvolucradoMapper.deleteByExample(c2);
			
			MapaVehiculoCriteria c3 = new MapaVehiculoCriteria();
			c3.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
			mapaVehiculoMapper.deleteByExample(c3);
		}
		
		if (incidencia.getIntervinientes()!=null){
			List<MapaInterviniente> list1 = incidencia.getIntervinientes();
			for (MapaInterviniente l1: list1){
				l1.setIdIncidencia(incidencia.getIdIncidencia());
				mapaIntervinienteMapper.insertSelective(l1);
			}
		}
		if (incidencia.getInvolucrados()!=null){
			List<MapaInvolucrado> list2 = incidencia.getInvolucrados();
			for (MapaInvolucrado l2: list2){
				l2.setIdIncidencia(incidencia.getIdIncidencia());
				mapaInvolucradoMapper.insertSelective(l2);
			}
		}
		if (incidencia.getVehiculos()!=null){
			List<MapaVehiculo> list3 = incidencia.getVehiculos();
			for (MapaVehiculo l3: list3){
				l3.setIdIncidencia(incidencia.getIdIncidencia());
				mapaVehiculoMapper.insertSelective(l3);
			}
		}

		this.registrarEstadistica(incidencia);
		this.registrarHistorico(incidencia);
		
		if(incidencia.getCoordenadas()!=null){
		
			MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
			c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
			mapaIncidenciasGeometriaMapper.deleteByExample(c);
			
			MapaIncidenciasGeometria geometria = new MapaIncidenciasGeometria();
			geometria.setIndestado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
			geometria.setIdetipogeometria(MobileConstantes.TIPO_GEOMETRIA_PUNTO);
			geometria.setIdecodident(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
			geometria.setIdecodvalor(incidencia.getIdIncidencia());
			geometria.setGeometria(incidencia.getCoordenadas());
			if(incidencia.getDescVia()!=null){
				geometria.setDesdireccion(incidencia.getDescVia());
			}
			mapaIncidenciasGeometriaMapper.insertSelective(geometria);
			
		}
		
		return incidencia;
		
	}
	
	@Override
	public ImagenIncidencia registrarImagen(ImagenIncidencia img) throws Exception {
//	public ImagenIncidencia registrarImagen(MultipartFile imagen, Integer idIncidencia) throws Exception {

		if(img.getIdImg() == null){
			
//			System.err.println(img.getAdjunto().getOriginalFilename());
			
			String path = "/var/libreria/adjuntos/mapa/";
			
			MultipartFile imagen = img.getAdjunto();
			byte[] fileData = null;
			String fileName = null;
			File directorio = null;
			String strArchivo = "";
			if (imagen != null ) {

				if (imagen.getSize() > 0) {

					fileData = imagen.getBytes();
					fileName = imagen.getOriginalFilename();

					directorio = new File(path);
					if (!directorio.exists()) {
						directorio.mkdirs();
					}
					strArchivo = ImagenUtil.adjuntarArchivo(path, fileName, fileData);
				}
			}
			
//			ImagenIncidencia img = new ImagenIncidencia();
			img.setNombre(fileName);
			img.setRuta(MobileConstantes.URL_APP_RAIZ+"/adjuntos/mapa/"+strArchivo);
//			img.setArchivo(fileData);
//			img.setIdIncidencia(idIncidencia);
			img.setTitulo(new String (img.getTitulo().getBytes("ISO-8859-1"),"UTF-8"));
			img.setDescripcion(new String (img.getDescripcion().getBytes("ISO-8859-1"),"UTF-8"));
			
			
//			ImagenIncidenciaCriteria c = new ImagenIncidenciaCriteria();
//			c.createCriteria().andIdIncidenciaEqualTo(img.getIdIncidencia());
			
			//imagenIncidenciaMapper.deleteByExample(c);		
			imagenIncidenciaMapper.insertSelective(img);
			
		} else {
			img.setTitulo(new String (img.getTitulo().getBytes("ISO-8859-1"),"UTF-8"));
			img.setDescripcion(new String (img.getDescripcion().getBytes("ISO-8859-1"),"UTF-8"));
			imagenIncidenciaMapper.updateByPrimaryKeySelective(img);
		}
		
		/*if(imagen.getIdImg() == null){
			imagenIncidenciaMapper.insertSelective(imagen);
		} else {
			imagenIncidenciaMapper.updateByPrimaryKeySelective(imagen);
		}*/
		
		if(img.getTpoExpo()==1026){
			MapaIncidenciaRegistro i = new MapaIncidenciaRegistro();
			i.setParam2("1");
			MapaIncidenciaRegistroCriteria c = new MapaIncidenciaRegistroCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(img.getIdIncidencia());
			mapaIncidenciaRegistroMapper.updateByExampleSelective(i,c);
		}else{
			ImagenIncidenciaCriteria c = new ImagenIncidenciaCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(img.getIdIncidencia()).andTpoExpoEqualTo(1026);
//			Long c = imagenIncidenciaMapper.countByExample(c);
			if(imagenIncidenciaMapper.countByExample(c)==0){
				mapaIncidenciaRegistroMapper.deleteFlgParte(img.getIdIncidencia());
			}
		}
		
		return img;
		
	}
	
	
	@Override
	public void eliminarAdjunto(ImagenIncidencia img) throws Exception {
		
		imagenIncidenciaMapper.deleteByPrimaryKey(img.getIdImg());
		
		//Actualizar param2 (flag de parte)
		ImagenIncidenciaCriteria c = new ImagenIncidenciaCriteria();
		c.createCriteria().andIdIncidenciaEqualTo(img.getIdIncidencia()).andTpoExpoEqualTo(1026);
//		Long c = imagenIncidenciaMapper.countByExample(c);
		if(imagenIncidenciaMapper.countByExample(c)==0){
			mapaIncidenciaRegistroMapper.deleteFlgParte(img.getIdIncidencia());
		}
		
	}
	
	
	//USANDO ANTIGUA TABLA postgres.mapa.geo_map_estadistica
//	@Override
//	public MapaEstadistica registrarEstadistica(MapaIncidenciaRegistro incidencia) throws Exception {
//		
////		MapaEstadistica e = new MapaEstadistica();
//		MapaEstadistica estadistica = new MapaEstadistica();
//		
////		if(incidencia.getIdIncidencia()!=null){ estadistica.setIdIncidencia(incidencia.getIdIncidencia()); }
////		if(incidencia.getNroCasoVoxiva()!=null){ estadistica.setNroCasoVoxiva(incidencia.getNroCasoVoxiva()); }
////		if(incidencia.getCodUnidad()!=null){ estadistica.setCodUnidad(incidencia.getCodUnidad()); }
////		if(incidencia.getCodCaso()!=null){ estadistica.setCodCaso(incidencia.getCodCaso()); }
////		if(incidencia.getCodSubcaso()!=null){ estadistica.setCodSubcaso(incidencia.getCodSubcaso()); }
////		if(incidencia.getFecNotificacion()!=null){ estadistica.setFecha(incidencia.getFecNotificacion()); }
////		if(incidencia.getCodEstado()!=null){ estadistica.setCodEstado(incidencia.getCodEstado()); }
////		if(incidencia.getCodSubestado()!=null){ estadistica.setCodSubestado(incidencia.getCodSubestado()); }
////		if(incidencia.getArea()!=null || incidencia.getArea()!=""){ estadistica.setArea(incidencia.getArea()); }
////		if(incidencia.getZona()!=null || incidencia.getZona()!=""){ estadistica.setZona(incidencia.getZona()); }
////		if(incidencia.getSubzona()!=null || incidencia.getSubzona()!=""){ estadistica.setSubzona(incidencia.getSubzona()); }
////		if(incidencia.getDescTpoVia()!=null || incidencia.getDescTpoVia()!=""){ estadistica.setTpoVia(incidencia.getDescTpoVia()); }
////		if(incidencia.getDescVia()!=null || incidencia.getDescVia()!=""){ estadistica.setNombVia(incidencia.getDescVia()); }
////		if(incidencia.getCdra()!=null || incidencia.getCdra()!=""){ estadistica.setCdra(incidencia.getCdra()); }
////		if(incidencia.getCoordenadas()!=null || incidencia.getCoordenadas()!=""){ estadistica.setCoordenadas(incidencia.getCoordenadas()); }
////		if(incidencia.getDescUnidad()!=null || incidencia.getDescUnidad()!=""){ estadistica.setDescUnidad(incidencia.getDescUnidad()); }
////		if(incidencia.getDescCaso()!=null || incidencia.getDescCaso()!=""){ estadistica.setDescCaso(incidencia.getDescCaso()); }
////		if(incidencia.getDescSubcaso()!=null || incidencia.getDescSubcaso()!=""){ estadistica.setDescSubcaso(incidencia.getDescSubcaso()); }
//		
//		SimpleDateFormat dateFormatAnio = new SimpleDateFormat("yyyy");
//		SimpleDateFormat dateFormatMes = new SimpleDateFormat("MM");
//		SimpleDateFormat dateFormatHora = new SimpleDateFormat("HH");
//		Date fecha = incidencia.getFecNotificacion();
//		
//		Calendar cal = Calendar.getInstance();
//		try {
//			cal.setTime(incidencia.getFecNotificacion());
//		} catch (Exception e) {
//			System.err.println("Hubo una Excepcion. Puede que incidencia.getFecNotificacion() sea nulo al setear setTime en RegistrarEstadistica()");
//			System.err.println("Si es nulo, entonces el campo de fecha y hora de notificacion se resetea en el formulario de registro (incidenciaServiceNew2.js) antes de hacer peticion de grabado");
//			System.err.println("La excepcion es la siguiente....");
//			e.printStackTrace();
//		}
//		 
//		String[] strNombDia = new String[]{	"DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"};
//		
//		String[] strNombMes = new String[]{	"ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO",
//											"SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE" };
//		
//		estadistica.setId(Integer.parseInt(dateFormatAnio.format(fecha))*1000000 + incidencia.getIdIncidencia());
//		estadistica.setIdIncidencia(incidencia.getIdIncidencia());
//		estadistica.setNroCasoVoxiva(incidencia.getNroCasoVoxiva());
//		estadistica.setCodUnidad(incidencia.getCodUnidad());
//		estadistica.setCodCaso(incidencia.getCodCaso());
//		estadistica.setCodSubcaso(incidencia.getCodSubcaso());
//		estadistica.setFecha(incidencia.getFecNotificacion());
//		estadistica.setHora(Integer.parseInt(dateFormatHora.format(fecha)));
//		estadistica.setDia(cal.get(Calendar.DAY_OF_WEEK)-1);
//		estadistica.setMes(Integer.parseInt(dateFormatMes.format(fecha)));
//		estadistica.setAnio(Integer.parseInt(dateFormatAnio.format(fecha)));
//		estadistica.setNombDia(strNombDia[cal.get(Calendar.DAY_OF_WEEK) - 1]);
//		estadistica.setNombMes(strNombMes[Integer.parseInt(dateFormatMes.format(fecha)) - 1]);
//		estadistica.setValor(1);
//		estadistica.setCodEstado(incidencia.getCodEstado());
//		estadistica.setCodSubestado(incidencia.getCodSubestado());
//		estadistica.setArea(incidencia.getArea());
//		estadistica.setZona(incidencia.getZona());
//		estadistica.setSubzona(incidencia.getSubzona());
//		estadistica.setTpoVia(incidencia.getDescTpoVia());
//		estadistica.setNombVia(incidencia.getDescVia());
//		estadistica.setCdra(incidencia.getCdra());
//		estadistica.setCoordenadas(incidencia.getCoordenadas());
//		estadistica.setLongitud(incidencia.getCoordenadas().split(" ")[0]);
//		estadistica.setLatitud(incidencia.getCoordenadas().split(" ")[1]);
//		estadistica.setDescUnidad(incidencia.getDescUnidad());
//		estadistica.setDescCaso(incidencia.getDescCaso());
//		estadistica.setDescSubcaso(incidencia.getDescSubcaso());
//		
//		MapaEstadisticaCriteria c = new MapaEstadisticaCriteria();
//		c.createCriteria().andIdEqualTo(estadistica.getId());
//		mapaEstadisticaMapper.deleteByExample(c);
//		
//		if (incidencia.getCodSituacion()==870){
//			mapaEstadisticaMapper.insertSelective(estadistica);
//		}
//		
////		int tipifAux = incidencia.getCodUnidad()*10000+incidencia.getCodCaso()*100+(incidencia.getCodSubcaso()!=null?incidencia.getCodSubcaso():0); 
////		if (incidencia.getCodSituacion()==870 && tipifAux!=10629 && tipifAux!=10630 && tipifAux!=10600){
////			/*
////			 * 	SOLO REGISTRA PARA TIPIFICACIONES DIFERENTES A:
////			 * 		[SEGURIDAD CIUDADANA >> APOYO AL CONTRIBUYENTE]
////			 * 		[SEGURIDAD CIUDADANA >> APOYO AL CONTRIBUYENTE >> OTROS]
////			 *		[SEGURIDAD CIUDADANA >> APOYO AL CONTRIBUYENTE >> CONSULTAS]
////			 */
////			mapaEstadisticaMapper.insertSelective(estadistica);
////		}
//		
//		return estadistica;
//		
//	}
	
	
	
	// USANDO NUEVA TABLA HistoricoDB.histomapa.estadistica
	@Transactional(value="transactionManagerHistorico", 
			propagation = Propagation.REQUIRES_NEW, 
			isolation=Isolation.READ_COMMITTED, 
			readOnly = false, rollbackFor = Exception.class)
	@Override
	public EstadisticaBase registrarEstadistica(MapaIncidenciaRegistro incidencia) throws Exception {
		
		EstadisticaBaseCriteria c = new EstadisticaBaseCriteria();
		c.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia()).andFregEqualTo(incidencia.getFecNotificacion());
		estadisticaBaseMapper.deleteByExample(c);
		
//		MapaEstadistica e = new MapaEstadistica();
		EstadisticaBase estadistica = new EstadisticaBase();
		
		if (incidencia.getCodSituacion()==870){
			
			SimpleDateFormat dateFormatFecha = new SimpleDateFormat("yyyyMMdd");
			SimpleDateFormat dateFormatAnio = new SimpleDateFormat("yyyy");
			SimpleDateFormat dateFormatMes = new SimpleDateFormat("MM");
			SimpleDateFormat dateFormatDia = new SimpleDateFormat("dd");
			SimpleDateFormat dateFormatHora = new SimpleDateFormat("HH");
			Date fecha = incidencia.getFecEvento();
			
			Calendar cal = Calendar.getInstance();
			try {
				cal.setTime(incidencia.getFecEvento());
			} catch (Exception e) {
				System.err.println("Hubo una Excepcion. Puede que incidencia.getFecNotificacion() sea nulo al setear setTime en RegistrarEstadistica()");
				System.err.println("Si es nulo, entonces el campo de fecha y hora de notificacion se resetea en el formulario de registro (incidenciaServiceNew2.js) antes de hacer peticion de grabado");
				System.err.println("La excepcion es la siguiente....");
				e.printStackTrace();
			}
			 
			String[] strNombDia = new String[]{	"DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"};
			
			String[] strNombMes = new String[]{	"ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO",
												"SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE" };
			
			estadistica.setIdEstad(Long.parseLong(dateFormatFecha.format(incidencia.getFecEvento()))*100000000 + incidencia.getIdIncidencia());
			estadistica.setIdIncidencia(incidencia.getIdIncidencia());
			estadistica.setTipif(incidencia.getCodUnidad()*10000+incidencia.getCodCaso()*100+(incidencia.getCodSubcaso()!=null?incidencia.getCodSubcaso():0));
			estadistica.setZonif(incidencia.getCodArea()*10000+incidencia.getCodZona()*100+incidencia.getCodSubzona());
			estadistica.setNumer(Integer.parseInt(incidencia.getNumero()));
			estadistica.setCdra(Integer.parseInt(incidencia.getCdra()));
			estadistica.setHdia(Integer.parseInt(dateFormatHora.format(fecha)));
			estadistica.setCdia(cal.get(Calendar.DAY_OF_WEEK)-1);
			estadistica.setNdia(Integer.parseInt(dateFormatDia.format(fecha)));
			estadistica.setCmes(Integer.parseInt(dateFormatMes.format(fecha)));
			estadistica.setAnio(Integer.parseInt(dateFormatAnio.format(fecha)));
			estadistica.setCsever(incidencia.getCodSeveridad()!=null?incidencia.getCodSeveridad():null);
			if(incidencia.getCodEstado()!=null){
				estadistica.setCestad(incidencia.getCodEstado()*1000+(incidencia.getCodSubestado()!=null?incidencia.getCodSubestado():0));
			}
			estadistica.setCmodal(incidencia.getCodModalidad()!=null?incidencia.getCodModalidad():null);
//			estadistica.setFlghall(incidencia.getTpoHallazgo()!=null?(short)(incidencia.getTpoHallazgo()+0):null);
//			estadistica.setFlgsexo(incidencia.getTpoSexo()!=null?(short)(incidencia.getTpoSexo()+0):null);
			estadistica.setCmed(incidencia.getCodMedio());
			estadistica.setLng(Float.parseFloat(incidencia.getCoordenadas().split(" ")[1]));
			estadistica.setLat(Float.parseFloat(incidencia.getCoordenadas().split(" ")[0]));
			estadistica.setFecha(incidencia.getFecEvento());
			estadistica.setFreg(incidencia.getFecNotificacion());
			estadistica.setUnidad(incidencia.getDescUnidad());
			estadistica.setCaso(incidencia.getDescCaso());
			estadistica.setSubcaso(incidencia.getDescSubcaso());
			estadistica.setArea(incidencia.getArea());
			estadistica.setZona(incidencia.getZona());
			estadistica.setSubzona(incidencia.getSubzona());
//			estadistica.setSeveridad(incidencia.setDescSeveridad());
//			estadistica.setEstado(incidencia.setDescEstado());
//			estadistica.setSubestado(incidencia.setDescSubestado());
//			estadistica.setModalidad(incidencia.getDescModalidad());
			estadistica.setVia(incidencia.getDescVia());
			estadistica.setDdia(strNombDia[cal.get(Calendar.DAY_OF_WEEK) - 1]);
			estadistica.setDmes(strNombMes[Integer.parseInt(dateFormatMes.format(fecha)) - 1]);
			estadistica.setMedio(incidencia.getDescMedio());
			
			estadisticaBaseMapper.insertSelective(estadistica);
			
		}
		
		return estadistica;
		
	}
	
	
	
//	@Bean(name = "transactionManagerHistorico")
//	@Transactional("historicoDB")
	@Transactional(value="transactionManagerHistorico", 
					propagation = Propagation.REQUIRES_NEW, 
					isolation=Isolation.READ_COMMITTED, 
					readOnly = false, rollbackFor = Exception.class)
	public HistoricoIncidencia registrarHistorico(MapaIncidenciaRegistro incidencia) throws Exception {
		
		HistoricoIncidencia hist = new HistoricoIncidencia();
		
		SimpleDateFormat dateFormatAnio = new SimpleDateFormat("yyyy");
		SimpleDateFormat dateFormatMes = new SimpleDateFormat("MM");
		SimpleDateFormat dateFormatHora = new SimpleDateFormat("HH");
		Date fecha = incidencia.getFecNotificacion();
		int partId = Integer.parseInt(dateFormatAnio.format(fecha));
		
		hist.setIdHist(partId*1000000 + incidencia.getIdIncidencia());
		
		HistoricoIncidenciaCriteria c = new HistoricoIncidenciaCriteria();
		c.createCriteria().andIdHistEqualTo(hist.getIdHist());
		historicoIncidenciaMapper.deleteByExample(c);
		
		HistoricoIntervinienteCriteria c1 = new HistoricoIntervinienteCriteria();
		c1.createCriteria().andIdHistEqualTo(hist.getIdHist());
		historicoIntervinienteMapper.deleteByExample(c1);
		
		HistoricoInvolucradoCriteria c2 = new HistoricoInvolucradoCriteria();
		c2.createCriteria().andIdHistEqualTo(hist.getIdHist());
		historicoInvolucradoMapper.deleteByExample(c2);
		
		HistoricoVehiculoCriteria c3 = new HistoricoVehiculoCriteria();
		c3.createCriteria().andIdHistEqualTo(hist.getIdHist());
		historicoVehiculoMapper.deleteByExample(c3);
		
//		HistoricoIncidencia test = new HistoricoIncidencia();
//		test.setCodMedio(9999);
//		test.setCodSituacion(9999);
//		test.setDescripcion("ESTA ES UNA PRUEBA");
//		historicoIncidenciaMapper.insertSelective(test);
		
		if (incidencia.getCodSituacion()==870){
			
//			hist.setIdHist(...);  	YA SE ASIGNO ANTERIORMENTE
			hist.setIdIncidencia(incidencia.getIdIncidencia());
			hist.setCodUnidad(incidencia.getCodUnidad());
			hist.setCodCaso(incidencia.getCodCaso());
			hist.setCodSubcaso(incidencia.getCodSubcaso());
			hist.setCodMedio(incidencia.getCodMedio());
			hist.setCodSituacion(incidencia.getCodSituacion());
			hist.setDescUnidad(incidencia.getDescUnidad());
			hist.setDescCaso(incidencia.getDescCaso());
			hist.setDescSubcaso(incidencia.getDescSubcaso());
			hist.setDescMedio(incidencia.getDescMedio());
			hist.setDescSituacion(incidencia.getDescSituacion());
			hist.setCodUnidReport(incidencia.getCodUnidReport());
			hist.setNombReport(incidencia.getNombReport());
			hist.setTelfReport(incidencia.getTelfReport());
			hist.setDirReport(incidencia.getDirReport());
			hist.setCextReport(incidencia.getCextReport());
			hist.setCodNacReport(incidencia.getCodNacReport());
			hist.setCodGeometria(incidencia.getCodGeometria());
			hist.setCoordenadas(incidencia.getCoordenadas());
			hist.setCodTpoVia(incidencia.getCodTpoVia());
			hist.setDescTpoVia(incidencia.getDescTpoVia());
			hist.setDescVia(incidencia.getDescVia());
			hist.setCdra(incidencia.getCdra());
			hist.setDpto(incidencia.getDpto());
			hist.setZona(incidencia.getZona());
			hist.setSubzona(incidencia.getSubzona());
			hist.setDescripcion(incidencia.getDescripcion());
			hist.setFecNotificacion(incidencia.getFecNotificacion());
			hist.setFecEvento(incidencia.getFecEvento());
			hist.setFecAtencion(incidencia.getFecAtencion());
			hist.setFecCierre(incidencia.getFecCierre());
			hist.setCodSeveridad(incidencia.getCodSeveridad());
			hist.setCodEstado(incidencia.getCodEstado());
			hist.setCodSubestado(incidencia.getCodSubestado());
			hist.setCodModalidad(incidencia.getCodModalidad());
			hist.setCodMotivo(incidencia.getCodMotivo());
			hist.setDescMotivo(incidencia.getDescMotivo());
			hist.setTpoHallazgo(incidencia.getTpoHallazgo());
			hist.setTpoSexo(incidencia.getTpoSexo());
			hist.setEstReg(incidencia.getEstReg());
			hist.setNroCasoVoxiva(incidencia.getNroCasoVoxiva());
			hist.setTipoVoxiva(incidencia.getTipoVoxiva());
			hist.setSubtipoVoxiva(incidencia.getSubtipoVoxiva());
			hist.setTiempoCierre(incidencia.getTiempoCierre());
			hist.setArea(incidencia.getArea());
			hist.setCodDispOrigen(incidencia.getCodDispOrigen());
			hist.setDescDispOrigen(incidencia.getDescDispOrigen());
			hist.setFlgHeridos(incidencia.getFlgHeridos());
			hist.setFlgCallback(incidencia.getFlgCallback());
			hist.setVisible(incidencia.getVisible());
			hist.setUsrRegistra(incidencia.getUsrRegistra());
			hist.setUsrModifica(incidencia.getUsrModifica());
			hist.setIndLeido(incidencia.getIndLeido());
			hist.setTpoOperador(incidencia.getTpoOperador());
			hist.setFlgReasignado(incidencia.getFlgReasignado());
			hist.setUrlAudio(incidencia.getUrlAudio());
			historicoIncidenciaMapper.insertSelective(hist);
			
			if (incidencia.getIntervinientes()!=null){
				List<MapaInterviniente> list1 = incidencia.getIntervinientes();
				for (MapaInterviniente l1: list1){
					HistoricoInterviniente h1 = new HistoricoInterviniente();
					h1.setIdHistInterv(partId*1000000+l1.getCodInterv());
					h1.setIdHist(hist.getIdHist());
					h1.setCodInterv(l1.getCodInterv());
					h1.setIdIncidencia(l1.getIdIncidencia());
					h1.setCodTpoInterv(l1.getCodTpoInterv());
					h1.setCodTpoPuesto(l1.getCodTpoPuesto());
					h1.setDescTpoInterv(l1.getDescTpoInterv());
					h1.setDescTpoPuesto(l1.getDescTpoPuesto());
					h1.setNombInterv(l1.getNombInterv());
					h1.setApoyoPolicial(l1.getApoyoPolicial());
					h1.setEstReg(l1.getEstReg());
					h1.setInfoInterv(l1.getInfoInterv());
					historicoIntervinienteMapper.insertSelective(h1);
				}
			}
			if (incidencia.getInvolucrados()!=null){
				List<MapaInvolucrado> list2 = incidencia.getInvolucrados();
				for (MapaInvolucrado l2: list2){
					HistoricoInvolucrado h2 = new HistoricoInvolucrado();
					h2.setIdHistInvoluc(partId*1000000+l2.getCodInvoluc());
					h2.setIdHist(hist.getIdHist());
					h2.setCodInvoluc(l2.getCodInvoluc());
					h2.setIdIncidencia(l2.getIdIncidencia());
					h2.setCodTpoInvoluc(l2.getCodTpoInvoluc());
					h2.setCodTpoDoc(l2.getCodTpoDoc());
					h2.setDescTpoInvoluc(l2.getDescTpoInvoluc());
					h2.setDescTpoDoc(l2.getDescTpoDoc());
					h2.setNombInvoluc(l2.getNombInvoluc());
					h2.setEdadInvoluc(l2.getEdadInvoluc());
					h2.setNumDocInvoluc(l2.getNumDocInvoluc());
					h2.setDescObserv(l2.getDescObserv());
					h2.setCodVehic(l2.getCodVehic());
					h2.setCodClaseVehic(l2.getCodClaseVehic());
					h2.setCodMarcaVehic(l2.getCodMarcaVehic());
					h2.setCodColorVehic(l2.getCodColorVehic());
					h2.setClaseVehic(l2.getClaseVehic());
					h2.setMarcaVehic(l2.getMarcaVehic());
					h2.setModelVehic(l2.getModelVehic());
					h2.setPlacaVehic(l2.getPlacaVehic());
					h2.setColorVehic(l2.getColorVehic());
					h2.setAnioVehic(l2.getAnioVehic());
					h2.setEstReg(l2.getEstReg());
					historicoInvolucradoMapper.insertSelective(h2);
				}
			}
			if (incidencia.getVehiculos()!=null){
				List<MapaVehiculo> list3 = incidencia.getVehiculos();
				for (MapaVehiculo l3: list3){
					HistoricoVehiculo h3 = new HistoricoVehiculo();
					h3.setIdHistVehic(partId*1000000+l3.getCodVehic());
					h3.setIdHist(hist.getIdHist());
					h3.setCodVehic(l3.getCodVehic());
					h3.setIdIncidencia(l3.getIdIncidencia());
					h3.setCodClaseVehic(l3.getCodClaseVehic());
					h3.setCodMarcaVehic(l3.getCodMarcaVehic());
					h3.setCodColorVehic(l3.getCodColorVehic());
					h3.setClaseVehic(l3.getClaseVehic());
					h3.setMarcaVehic(l3.getMarcaVehic());
					h3.setModelVehic(l3.getModelVehic());
					h3.setPlacaVehic(l3.getPlacaVehic());
					h3.setColorVehic(l3.getColorVehic());
					h3.setAnioVehic(l3.getAnioVehic());
					h3.setEstReg(l3.getEstReg());
					historicoVehiculoMapper.insertSelective(h3);
				}
			}
		}
		
		return hist;
		
	}
	
	
	public String buildJsonRestDolphin() throws Exception {
		// TODO Auto-generated method stub
		
		StringBuilder query = new StringBuilder();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String dActual = sdf.format(new Date());
		query.append(MobileConstantes.ID_USER_DOLPHIN).append(MobileConstantes.CLI_SALT).append(dActual);
		
		MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] array = md.digest(query.toString().getBytes());
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < array.length; ++i) {
          sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
       }
		
		String action = MobileConstantes.URL_JSON_DOLPHIN+sb.toString()+MobileConstantes.URL_JSON_DOLPHIN_END;
		System.out.println("action-tetra:");
		System.out.println(action);
		String strJson = Util.getUrlRemote(action);
		
		Gson gson = new Gson();
		
		ResponseRadioTetraVO response = gson.fromJson(strJson, ResponseRadioTetraVO.class);
		String strJson2=null;
		if(response!=null && response.getItems()!=null && response.getItems().size()>0){
			GeoDetalleIncidencia d = null;
			
//			System.out.println(response.getItems().size());
			
			List<Integer> issis = new ArrayList<Integer>();
			
			for (RadioTetraVO r : response.getItems()) {
				issis.add(r.getIssi());
			}
			
			GeoDetalleIncidenciaCriteria dic = new GeoDetalleIncidenciaCriteria();
			
		//	System.out.println(StringUtils.join("IN ("+issis,",")+")");
			
			dic.createCriteria().andIssiIn(issis);
			
			List<GeoDetalleIncidencia> listTemp = geoDetalleIncidenciaMapper.selectByExample(dic);
			
			ResponseRadioTetraVO result = new ResponseRadioTetraVO();
			result.setStatus(response.isStatus());
			
			result.setItems(response.getItems());
			
			for (RadioTetraVO r2 : result.getItems()) {
				d = this.getDetalleFronList(listTemp, r2.getIssi());
				r2.setDetalle(d);
			}
			
			strJson2 = gson.toJson(result);
		}
		
		return strJson2;
	}
	

	/* *
	 * DOLPHIN
	 * */
	
	private GeoDetalleIncidencia getDetalleFronList(List<GeoDetalleIncidencia> list ,Integer issi){
		
		GeoDetalleIncidencia  d = null;
		for (GeoDetalleIncidencia i : list) {
			if(i.getIssi().toString().trim().equals(issi.toString())){
				d = i;
				break;
			}
		}
		
		return d;
		
	}
	
	
//	@Override
//	public MapaIncidenciasRegistro obtenerIncidenciaPorId(Integer id) throws Exception {
//		// TODO Auto-generated method stub
//		
//		MapaIncidenciasRegistro incidencia = mapaIncidenciasRegistroMapper.selectByPrimaryKey(id);
//		
//		if(incidencia !=null){
//			
//			if(incidencia.getTipoIncidencia() != null){
//					incidencia.setTipo(catalogoService.findCatalogoById(incidencia.getTipoIncidencia()));
//			}
//			
//				
//				MapaIncidenciasGeometriaCriteria c = new MapaIncidenciasGeometriaCriteria();
//				c.createCriteria().andIdecodvalorEqualTo(incidencia.getIdIncidencia()).andIdecodidentEqualTo(MobileConstantes.TABLA_MAPA_INCIDENCIAS);
//				List<MapaIncidenciasGeometria> geometrias = mapaIncidenciasGeometriaMapper.selectByExample(c);
//				incidencia.setDetalleGeometria(geometrias);
//				
//
//				GeometriaLineaCriteria c2 = new GeometriaLineaCriteria();
//				c2.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
//				List<GeometriaLinea> lineas = geometriaLineaMapper.selectByExample(c2);
//				incidencia.setLineas(lineas);
//				
//			
//				MapaIncidenciaScheduleCriteria c3 = new MapaIncidenciaScheduleCriteria();
//				c3.createCriteria().andIdIncidenciaEqualTo(incidencia.getIdIncidencia());
//				List<MapaIncidenciaSchedule> dias = incidenciaScheduleMapper.selectByExample(c3);
//				incidencia.setDias(dias);
//				
//			
//			return incidencia;
//		}
//		
//		return null;
//	}
	
	@Override
	public Map<String, Object> obtenerTipifReach(Integer tipifReach) throws Exception {
		
		Map<String, Object> data = new HashMap<String, Object>();
		Tipificacion tipificacion = new Tipificacion();
		
		TipificacionCriteria c = new TipificacionCriteria();
		c.createCriteria().andTipifReachLike(tipifReach+"");
		List<Tipificacion> list = tipificacionMapper.selectByExample(c);
		
		if (list!=null && list.size()>0){
			tipificacion = list.get(0);
		}
		
		data.put("data", tipificacion);
		return data;
	}


	@Override
	public PreInscripcionCierreCalle insertPreRegistroCierreCalle(PreInscripcionCierreCalle data) throws Exception {
		// TODO Auto-generated method stub
		
		if(data.getId() == null){
			data.setFecRegistro(new Date());
			data.setIpRegistro(data.getDireccionIP());
			data.setIdentGrupo(MobileConstantes.IDENT_GRUPO_PRE_REGISTRO_CC);
			data.setEstado(MobileConstantes.ESTADO_ACTIVO_NUMERO);
			preInscripcionCierreCalleMapper.insertSelective(data);
			
			//enviando correos a los responsables
//			List<Catalogo> list = catalogoService.findCatalogoByGrupo(MobileConstantes.IDENT_GRUPO_PRE_REGISTRO_CC);
//			int i = 0; 
//			String[] emails = new String[list.size()];
//			for (Catalogo c : list) {
//				emails[i] = c.getDesNombre();
//				i++;
//			}
			
			//emailService.enviarCorreo(emails, "Creacion de Pre-registro de Cierre de Calle N° "+data.getId(), "Se ha generado un Pre-registro de cierre de calle con el N° "+data.getId()+".<br><a href=\"http://digital.miraflores.gob.pe:8080/miraflores\">Ingresar al Sistema</a>");
			Map<String, Object> params = new HashMap<String, Object>();	
			List<UsuarioLogin> usuarios = usuarioLoginMapper.getUsuariosRegistroCCNotificacion(params);
			String[] emails = new String[usuarios.size()];
			int i = 0; 
				for (UsuarioLogin u : usuarios) {
				emails[i] = u.getDesLoginUser();
				i++;
			}
				
//			emails = new String[2];
//			emails[0] = "asanchez.sys@gmail.com";
//			emails[1] = "maalelho@gmail.com";
////			emails[2] = "mario.elizarbe@miraflores.gob.pe";
			
			//String texto = "Se ha realizado el pre registro de un cierre de calle por trabajos de emergencia de : "+data.getEmpresa()+". con el código N° "+data.getId()+".";
		
			String texto = "Se ha realizado el pre registro de un cierre de calle por trabajos de emergencia de : "+data.getEmpresa()+", con el código N° "+data.getId()+" en la "+data.getDireccion()+(data.getMasUnaDireccion()!=null&&data.getMasUnaDireccion().equalsIgnoreCase("S")?" y otras calles":"")+", ingresado con la carta externa N°: "+data.getNumExpediente();
				
			String enlaceSistema = "<br><a href=\""+MobileConstantes.URL_MIRAFLORES+"\">Ingresar al Sistema</a>";
			
			emailService.enviarCorreo(emails, "Creacion de Pre-registro de Cierre de Calle N° "+data.getId(), texto+enlaceSistema);
			
			String[] emailNotificacion = new String[1]; 
			
			emailNotificacion[0] = MobileConstantes.EMAIL_NOTI_CIERRE_DE_CALLES;
			
			emailService.enviarCorreo(emailNotificacion, "Creacion de Pre-registro de Cierre de Calle N° "+data.getId(), texto);
			
			//EMAIL_NOTI_CIERRE_DE_CALLES
			//
		}else{
			data.setFecModificacion(new Date());
			data.setIpModificacion(data.getDireccionIP());
			preInscripcionCierreCalleMapper.insertSelective(data);
		}
		
		return data;
	}

	@Override
	public List<GeoInfoCambista> listaInicdenciasCambistas(GeoInfoCambista cambista) throws Exception {
		// TODO Auto-generated method stub
		
		GeoInfoCambistaCriteria c = new GeoInfoCambistaCriteria();
		c.createCriteria().andIdAlertaIsNotNull();
		
		List<GeoInfoCambista> cambistas = geoInfoCambistaMapper.selectByExample(c);
		
		return cambistas;
	}

	@Override
	public GeoDetalleIncidencia obtenerDetalleIncidencia(Integer issi) throws Exception {

		GeoDetalleIncidencia detalle = geoDetalleIncidenciaMapper.selectByPrimaryKey(issi);
		
		return detalle;
	}

	@Override
	public Map<String, Object> createVoxivaInit(VoxivaVO incidencia) throws Exception {

		Map<String, Object> result = new HashMap<String, Object>();
		MapaIncidenciaRegistro e = new MapaIncidenciaRegistro();
		
		if (incidencia.getIdCaso()!=null){ e.setNroCasoVoxiva(incidencia.getIdCaso()); }

		e.setEstReg("A");
		e.setCoordenadas(incidencia.getLatitud()+" "+incidencia.getLongitud());
		e.setCodSituacion(873);
		e.setDescSituacion("NUEVO");
		e.setCodMedio(905);
		e.setDescMedio("ALERTA MIRAFLORES");
		
		try {
			this.registrarIncidencia(e);
			result.put("success",Boolean.TRUE);
			result.put("message","Incidencia registrada de forma correcta.");
		} catch (Exception exc) {
			// TODO Auto-generated catch block
			exc.printStackTrace();
			result.put("message",exc.getMessage());
			result.put("success",Boolean.FALSE);
		}
		
		return result;
		
	}

	@Override
	public List<GeoInfoVigilante> getGeoVigilantes(GeoInfoVigilante vigilante) throws Exception {
		// TODO Auto-generated method stub
		
		GeoInfoVigilanteCriteria gvc = new GeoInfoVigilanteCriteria();
		
		Criteria criteria = gvc.createCriteria();
		
		if(vigilante!=null && vigilante.getArea()!=null){
			criteria.andAreaEqualTo(vigilante.getArea());
		}
		
		return geoInfoVigilanteMapper.selectByExample(gvc);
	}


//	public List<Map<String, Object>> selectBandejaExportacion(MapaIncidenciaRegistro incidencia) throws Exception{
//			
//		Map<String, Object> result = new HashMap<String, Object>();
//		Map<String, Object> params = new HashMap<String, Object>();
//		
//		if(incidencia.getFecNotificacion() != null){ params.put("", incidencia.getCodUnidad()); }
////		if(incidencia.getCodCaso() != null){ params.put("cod_caso", incidencia.getCodCaso()); }
////		if(incidencia.getCodSubcaso() != null){ params.put("cod_subcaso", incidencia.getCodSubcaso()); }
////		if(incidencia.getCodMedio() != null){ params.put("cod_medio", incidencia.getCodMedio()); }
////		if(incidencia.getCodSituacion() != null){ params.put("cod_situacion", incidencia.getCodSituacion()); }
//		return mapaIncidenciaRegistroMapper.selectBandejaExportacion(params);
//	}
	
	public List<Map<String, Object>> selectBandejaExportacion2(Map<String, Object> params) throws Exception{
		
		List<Map<String, Object>> incidencias = mapaIncidenciaRegistroMapper.selectBandejaExportacion2(params);
		List<Integer> listaId = new ArrayList<Integer>();
		
		for (Map<String, Object> reg : incidencias) {
			listaId.add(Integer.parseInt(reg.get("id").toString()));
		}
		
		Map<String, Object> params2 = new HashMap<String, Object>();
		params2.put("listaId", listaId);
		
		List<Map<String, Object>> intervinientes = mapaIncidenciaRegistroMapper.selectBandejaExportacionInterviniente(params2);
		List<Map<String, Object>> involucrados = mapaIncidenciaRegistroMapper.selectBandejaExportacionInvolucrado(params2);
		List<Map<String, Object>> vehiculos = mapaIncidenciaRegistroMapper.selectBandejaExportacionVehiculo(params2);
		
		for (Map<String, Object> reg : incidencias) {
			Integer id = Integer.parseInt(reg.get("id").toString());
//			Integer id = reg.get("id");
			
			int ref = 1;
			intervLoop:
			for (Map<String, Object> a : intervinientes) {
				if(id.intValue()==Integer.parseInt(a.get("id_incidencia").toString()) && ref<4){
					if(ref<4){
//						reg.put("IntervTipo"+ref, a.get("desc_tpo_interv"));
//						reg.put("IntervPuesto"+ref, a.get("desc_tpo_puesto"));
//						reg.put("IntervNombre"+ref, a.get("nomb_interv"));
//						reg.put("IntervApoyo"+ref, a.get("apoyo_policial"));
						
						reg.put("Interv"+ref, a.get("desc_tpo_interv")+"/"+a.get("desc_tpo_puesto")+"/"
												+a.get("nomb_interv")+"/"+a.get("apoyo_policial"));
						ref=ref+1;
					}else{
						break intervLoop;
					}
				}
			}
			
			ref = 1;
			involucLoop:
			for (Map<String, Object> b : involucrados) {
				if(id.intValue()==Integer.parseInt(b.get("id_incidencia").toString())){
					if(ref<4){
//						reg.put("InvolucTipo"+ref, b.get("desc_tpo_involuc"));
//						reg.put("InvolucTpoDoc"+ref, b.get("desc_tpo_doc"));
//						reg.put("InvolucNumDoc"+ref, b.get("num_doc_involuc"));
//						reg.put("InvolucNombre"+ref, b.get("nomb_involuc"));
//						reg.put("InvolucEdad"+ref, b.get("edad_involuc"));
//						reg.put("InvolucVehic"+ref, b.get("clase_vehic"));
						
						reg.put("Involuc"+ref, b.get("desc_tpo_involuc")+"/"+b.get("nomb_involuc")+"/"
												+b.get("num_doc_involuc")+"/"+b.get("edad_involuc")+"/"+b.get("clase_vehic")+"/"+b.get("marca_vehic")+"/"+b.get("placa_vehic"));
						ref=ref+1;
					}else{
						break involucLoop;
					}
				}
			}
			
			ref = 1;
			vehicLoop:
			for (Map<String, Object> c : vehiculos) {
				if(id.intValue()==Integer.parseInt(c.get("id_incidencia").toString()) && ref<4){
					if(ref<4){
//						reg.put("VehicClase"+ref, c.get("clase_vehic"));
//						reg.put("VehicMarca"+ref, c.get("marca_vehic"));
//						reg.put("VehicModel"+ref, c.get("model_vehic"));
//						reg.put("VehicPlaca"+ref, c.get("placa_vehic"));
//						reg.put("VehicColor"+ref, c.get("color_vehic"));
//						reg.put("VehicAnio"+ref, c.get("anio_vehic"));
						
						reg.put("Vehic"+ref, c.get("clase_vehic")+"/"+c.get("marca_vehic")+"/"+c.get("model_vehic")+"/"
												+c.get("placa_vehic")+"/"+c.get("color_vehic")+"/"+c.get("anio_vehic"));
						ref=ref+1;
					}else{
						break vehicLoop;
					}
				}
			}
			
		}
		
		
		return incidencias;
	}
	
	public List<Map<String, Object>> selectBandejaExportacionInterviniente(Map<String, Object> params2) throws Exception{
		return mapaIncidenciaRegistroMapper.selectBandejaExportacionInterviniente(params2);
	}
	
	public List<Map<String, Object>> selectBandejaExportacionInvolucrado(Map<String, Object> params2) throws Exception{
		return mapaIncidenciaRegistroMapper.selectBandejaExportacionInvolucrado(params2);
	}
	
	public List<Map<String, Object>> selectBandejaExportacionVehiculo(Map<String, Object> params2) throws Exception{
		return mapaIncidenciaRegistroMapper.selectBandejaExportacionVehiculo(params2);
	}
	
	@Override
	public Map<String, Object> consultarBitacora(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		MapaIncidenciaRegistro i = mapaIncidenciaRegistroMapper.selectByPrimaryKey(idIncidencia);
		if (idIncidencia!=null) {
			MapaIncidenciaBitacoraCriteria c = new MapaIncidenciaBitacoraCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<MapaIncidenciaBitacora> l = mapaIncidenciaBitacoraMapper.selectByExample(c);
			if (l!=null) { i.setBitacora(l); }
		}
		data.put("data", i);
		return data;
	}
	
	@Override
	public Map<String, Object> consultarHistorial(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		if (idIncidencia!=null){
			MapaIncidenciaBitacoraCriteria c = new MapaIncidenciaBitacoraCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<MapaIncidenciaBitacora> l = mapaIncidenciaBitacoraMapper.selectByExample(c);
			data.put("data", l);
		} else {
			data.put("data", null);
		}
		return data;
	}
	
	@Override
	public Map<String, Object> consultarAdjunto(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		if (idIncidencia!=null){
			ImagenIncidenciaCriteria c = new ImagenIncidenciaCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
			List<ImagenIncidencia> l = imagenIncidenciaMapper.selectByExampleAlt(c);
			data.put("data", l);
		} else {
			data.put("data", null);
		}
		return data;
	}
	
	@Override
	public Map<String, Object> consultarParte(Integer idIncidencia) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		if (idIncidencia!=null){
			ImagenIncidenciaCriteria c = new ImagenIncidenciaCriteria();
			c.createCriteria().andIdIncidenciaEqualTo(idIncidencia).andTpoExpoEqualTo(1026);
			List<ImagenIncidencia> l = imagenIncidenciaMapper.selectByExampleAlt(c);
			data.put("data", l);
		} else {
			data.put("data", null);
		}
		return data;
	}
	
//	@Override
//	public Map<String, Object> consultarIncidencia(Integer idIncidencia) throws Exception {
//		Map<String, Object> data = new HashMap<String, Object>();
//		MapaIncidenciaRegistro i = mapaIncidenciaRegistroMapper.selectByPrimaryKey(idIncidencia);
//		
//		if (idIncidencia!=null) {
//			MapaIntervinienteCriteria c1 = new MapaIntervinienteCriteria();
//			c1.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaInterviniente> l1 = mapaIntervinienteMapper.selectByExample(c1);
//			
//			MapaInvolucradoCriteria c2 = new MapaInvolucradoCriteria();
//			c2.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaInvolucrado> l2 = mapaInvolucradoMapper.selectByExample(c2);
//			
//			MapaVehiculoCriteria c3 = new MapaVehiculoCriteria();
//			c3.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaVehiculo> l3 = mapaVehiculoMapper.selectByExample(c3);
//			
//			MapaIncidenciaBitacoraCriteria c4 = new MapaIncidenciaBitacoraCriteria();
//			c4.createCriteria().andIdIncidenciaEqualTo(idIncidencia);
//			List<MapaIncidenciaBitacora> l4 = mapaIncidenciaBitacoraMapper.selectByExample(c4);
//			
//			if (l1!=null) { i.setIntervinientes(l1); }
//			if (l2!=null) { i.setInvolucrados(l2); }
//			if (l3!=null) { i.setVehiculos(l3); }
//			if (l4!=null) { i.setBitacora(l4); }
//		}
//		data.put("data", i);
//		return data;
//	}
	
	
	@Override
	public MapaIncidenciaBitacora actualizarBitacora(MapaIncidenciaBitacora bitacora) throws Exception {
		bitacora.setEstReg(MobileConstantes.ESTADO_ACTIVO);
		bitacora.setFecha(new Timestamp(System.currentTimeMillis()));
		mapaIncidenciaBitacoraMapper.insertSelective(bitacora);
		return bitacora;
	}
	
	@Override
	public Map<String, Object> bandejaAuditoria(AuditoriaIncidencia auditoria) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String,Object>();
		
		int c = 0;
		if(auditoria.getStart() == null){ auditoria.setStart(0); }
		if(auditoria.getLimit() == null){ auditoria.setLimit(10); }
		if(auditoria.getStart() != 0) { c = c + 1; }
		
		if(auditoria!=null){
			if(auditoria.getValor()!=null){ params.put("valor", auditoria.getValor()); }
			if(auditoria.getCodPerfil()!=null){ params.put("codPerfil", auditoria.getCodPerfil()); }
			if(auditoria.getCodRol()!=null){ params.put("codRol", auditoria.getCodRol()); }
			if(auditoria.getFecDesde()!=null){ params.put("fecDesde", auditoria.getFecDesde()); }
			if(auditoria.getFecHasta()!=null){ params.put("fecHasta", auditoria.getFecHasta()); }
		}
		
		params.put("START", auditoria.getStart()+c);
		params.put("LIMIT", auditoria.getStart()+auditoria.getLimit());
		
		List<AuditoriaIncidencia> listado = auditoriaIncidenciaMapper.selectBandejaAuditoriaPaginada(params); 

		if(listado!=null && listado.size()>0){
			result.put("data", listado);
//			result.put("total", listado.size());
			result.put("total", auditoriaIncidenciaMapper.countBandejaAuditoriaPaginada(params));
		}else{
			result.put("data", null);
			result.put("total", 0);
		}

		return result;
	}
	
	
	@Override
	public List<ReachFeed> listaReach() throws Exception {
		Map<String, Object> params = new HashMap<String,Object>();
//		ReachFeed reachFeed = new ReachFeed();
//		reachFeed.setEstadoAtencion("C");
		ReachFeedCriteria rf = new ReachFeedCriteria();
		rf.createCriteria().andEstadoAtencionEqualTo("C");
		return reachFeedMapper.selectByExample(rf);
	}
	
	@Override
	public List<GeoInfoPos> listaAlertaPos() throws Exception {
		Map<String, Object> params = new HashMap<String,Object>();
//		ReachFeed reachFeed = new ReachFeed();
//		reachFeed.setEstadoAtencion("C");
		GeoInfoPosCriteria ap = new GeoInfoPosCriteria();
//		ap.createCriteria().andFlgAlertaEqualTo("S").andEstRegEqualTo("A");		//ESTE ES EL QUE DEBE QUEDAR
		ap.createCriteria().andFlgAlertaEqualTo("S").andLatitudIsNotNull().andLongitudIsNotNull();	//SOLO DE PRUEBA
		return geoInfoPosMapper.selectByExample(ap);
	}
	
	
	
	// NUEVA IMPLEMENTACION: JOB PARA GUARDAR INFO DE DOLPHIN
	public void buildJsonRestDolphinJob() throws Exception {
		// TODO Auto-generated method stub

		StringBuilder query = new StringBuilder();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String dActual = sdf.format(new Date());
		query.append(MobileConstantes.ID_USER_DOLPHIN).append(MobileConstantes.CLI_SALT).append(dActual);

		MessageDigest md = MessageDigest.getInstance("MD5");
		       byte[] array = md.digest(query.toString().getBytes());
		       StringBuffer sb = new StringBuffer();
		       for (int i = 0; i < array.length; ++i) {
		         sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
		      }

		String action = MobileConstantes.URL_JSON_DOLPHIN+sb.toString()+MobileConstantes.URL_JSON_DOLPHIN_END;
		String strJson = Util.getUrlRemote(action);

		Gson gson = new Gson();

		ResponseRadioTetraVO response = gson.fromJson(strJson, ResponseRadioTetraVO.class);
		String strJson2=null;
		if(response!=null && response.getItems()!=null && response.getItems().size()>0){
			ResponseRadioTetraVO result = new ResponseRadioTetraVO();
			result.setStatus(response.isStatus());
			result.setItems(response.getItems());
			strJson2 = gson.toJson(result);
	
	
			for (RadioTetraVO r2 : result.getItems()) {
	
				SerenoRuta sereno = new SerenoRuta();
				sereno.setIdRadio(r2.getId());
				sereno.setDireccion(r2.getDireccion());
				
				try {
					sereno.setEstado(Integer.parseInt(r2.getEstado()));
				} catch (Exception e) {
					sereno.setEstado(null); //PARA ESTADOS QUE NO SE PUEDEN PARSEAR (Por ejemplo, uno encontrado fue "0C0")
				}
				
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				sereno.setFecha(formatter.parse(r2.getFecha()));
		
				sereno.setIssi(r2.getIssi());
				sereno.setLatitud(new Double(r2.getLatitude()));
				sereno.setLongitud(new Double(r2.getLongitud()));
				sereno.setPresicion(r2.getPresicion());
				sereno.setSerie(r2.getSerie());
				sereno.setTei(r2.getTei());
				sereno.setVelocidad(new Double(r2.getVelocidad()));
				
				serenoRutaMapper.insertSelectiveWithGeom(sereno);
//				serenoRutaMapper.insertSelective(sereno);
				
				
			}
			
		}
	}
	
	
//	@Override
//	public List<Map<String, Object>> tetraTimeLapList(MapaIncidenciaRegistro incidencia) throws Exception {
//		Map<String, Object> params = new HashMap<String,Object>();
//		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
//			params.put("id_incidencia", incidencia.getIdIncidencia());
//		}
//		if(incidencia!=null && incidencia.getNroCasoVoxiva()!=null){
//			params.put("nro_caso_voxiva", incidencia.getNroCasoVoxiva());
//		}
//		if(incidencia!=null && incidencia.getFecNotificacion()!=null){
//			params.put("fec_notificacion", incidencia.getFecNotificacion());
//		}
//		if(incidencia!=null && incidencia.getCoordenadas()!=null){
//			params.put("latitud", incidencia.getCoordenadas().split(' '));
//			params.put("latitud", incidencia.getCoordenadas().split(' '));
//		}
//		if(incidencia!=null && incidencia.getUsrRegistra()!=null){
//			params.put("usuario", incidencia.getUsrRegistra());
//		}
//		if(incidencia!=null && incidencia.getUsrRol()!=null){
//			params.put("rol", incidencia.getUsrRol());
//		}
//		
//		return mapaIncidenciaRegistroMapper.get(params);
//	}

	@Override
	public List<TetraTimelap> tetraTimelapList(MapaIncidenciaRegistro incidencia) throws Exception {
//	public List<TetraTimelap> tetraTimelapList(Integer idIncidencia, String minuto) throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		
		if(incidencia!=null && incidencia.getIdIncidencia()!=null){
			params.put("id_incidencia", incidencia.getIdIncidencia());
		}
		
//		params.put("id_incidencia", idIncidencia);
//		params.put("minuto1", Integer.parseInt(minuto));
//		params.put("minuto2", Integer.parseInt(minuto)+1);
		
		return mapaIncidenciaRegistroMapper.selectTetraTimelap(params);

	}
	
	@Override
	public List<TetraVO> tetraTimelapListTest() throws Exception {
		
		List<TetraVO> lstTetra =  new ArrayList<TetraVO>();
		List<GeoInfoTetra> lstTetraInfo =  new ArrayList<GeoInfoTetra>();
		
		lstTetraInfo = geoInfoTetraMapper.selectTetraList();
		
		for(GeoInfoTetra g : lstTetraInfo){
			
			List<TetraPointVO> posicion = new ArrayList<TetraPointVO>();
			List<SerenoRuta> lstPosicion =  new ArrayList<SerenoRuta>();
			Map<String, Object> params = new HashMap<String, Object>();
			
			params.put("issi", g.getIssi());
			lstPosicion = serenoRutaMapper.selectTetraPosition(params);
			
			TetraVO tetra = new TetraVO();
			
			tetra.setIssi(g.getIssi());
			tetra.setTipoVehiculo(g.getTipoVehiculo());
			tetra.setMarcaVehiculo(g.getMarcaVehiculo());
			tetra.setModeloVehiculo(g.getModeloVehiculo());
			tetra.setPlaca(g.getPlaca());
			tetra.setTipoRadio(g.getTipoRadio());
			tetra.setModeloRadio(g.getModeloRadio());
			tetra.setArea(g.getArea());
			tetra.setZona(g.getZona());
			
			for(SerenoRuta s : lstPosicion){
				TetraPointVO point = new TetraPointVO();
				point.setDireccion(s.getDireccion());
				point.setFecha(s.getFecha());
				point.setLatitud(s.getLatitud());
				point.setLongitud(s.getLongitud());
				point.setPresicion(s.getPresicion());
				point.setVelocidad(s.getVelocidad());
				
				posicion.add(point);
			}
			
			tetra.setPosicion(posicion);
			
			lstTetra.add(tetra);
			
		}
		return lstTetra;
		
	}
	
	@Override
	public List<TetraVO> tetraTimelapListTestPrueba(Integer idIncidencia, String minuto) throws Exception {
		
		List<TetraVO> lstTetra =  new ArrayList<TetraVO>();
		List<GeoInfoTetra> lstTetraInfo =  new ArrayList<GeoInfoTetra>();
		Map<String, Object> p = new HashMap<String, Object>();
		MapaIncidenciaRegistro i = new MapaIncidenciaRegistro();
		
		i = mapaIncidenciaRegistroMapper.selectByPrimaryKey(idIncidencia);
		
		p.put("idIncidencia", idIncidencia);
		p.put("latitud", i.getCoordenadas().split(" ")[1]);
		p.put("longitud", i.getCoordenadas().split(" ")[0]);
		
		Calendar calendar = GregorianCalendar.getInstance(); // creates a new calendar instance
		calendar.setTime(i.getFecEvento());   // assigns calendar to given date 
		Integer minCritico = calendar.get(Calendar.MINUTE);
//		Integer minCritico = i.getFecEvento().get;
		
		long millisCritico = i.getFecEvento().getTime(); 
		
		lstTetraInfo = geoInfoTetraMapper.selectTetraListPrueba(p);
		
		List<Integer> arrIssi= new ArrayList<Integer>(); 
		
		for(GeoInfoTetra g : lstTetraInfo){
			arrIssi.add(g.getIssi());
		}

		Map<String, Object> param1 = new HashMap<String, Object>();
		param1.put("idIncidencia", idIncidencia);
		param1.put("arrIssi", arrIssi);
		
		List<SerenoRuta> arrPosicion =  serenoRutaMapper.selectTetraPositionArray(param1);
		System.err.println(arrPosicion.get(0).getDireccion());
		
		Map<String, Object> mapIncidenciaRuta = new HashMap<String, Object>();
		Map<String, Object> mapSerenoRuta = null;
		List<Map<String, Object>> listSereno = new ArrayList<Map<String, Object>>();
		List<GeoInfoTetra> listFinal = new ArrayList<GeoInfoTetra>();
		
		for (SerenoRuta serenoRuta : arrPosicion) {
			mapSerenoRuta = new HashMap<String, Object>();
			mapSerenoRuta.put("issi_"+serenoRuta.getIssi(), serenoRuta);
			listSereno.add(mapSerenoRuta);
		}
		
		List<SerenoRuta> listPosTetra;
		
		for(GeoInfoTetra g : lstTetraInfo){
			
			listPosTetra = new ArrayList<SerenoRuta>();
			for (SerenoRuta s: arrPosicion) {
				
				if(s.getIssi().intValue()==g.getIssi().intValue()){
//				if(mapSereno.containsKey("issi_"+g.getIssi())){
//					g.setSerenoRuta((SerenoRuta) mapSereno.get("issi_"+g.getIssi()));
					listPosTetra.add(s);
//					mapIncidenciaRuta.put(g.getIssi()+"", g);
//					listFinal.add(mapIncidenciaRuta);
//					break;
				}
				
			}
			g.setSerenoRuta(listPosTetra);
			listFinal.add(g);
		}
		
		System.err.println("listFinal");
		System.err.println(listFinal);
		/*for(Integer issi : arrIssi){
			for(SerenoRuta s : arrPosicion){
				
			}
		}*/
		
		for(GeoInfoTetra g : lstTetraInfo){
			
			List<TetraPointVO> posicion = new ArrayList<TetraPointVO>();
			List<SerenoRuta> lstPosicion =  new ArrayList<SerenoRuta>();
			Map<String, Object> params = new HashMap<String, Object>();
			
			params.put("issi", g.getIssi());
			params.put("idIncidencia", idIncidencia);
			
//			lstPosicion = serenoRutaMapper.selectTetraPosition(params);
			
			TetraVO tetra = new TetraVO();
			
			tetra.setIssi(g.getIssi());
			tetra.setTipoVehiculo(g.getTipoVehiculo());
			tetra.setMarcaVehiculo(g.getMarcaVehiculo());
			tetra.setModeloVehiculo(g.getModeloVehiculo());
			tetra.setPlaca(g.getPlaca());
			tetra.setTipoRadio(g.getTipoRadio());
			tetra.setModeloRadio(g.getModeloRadio());
			tetra.setArea(g.getArea());
			tetra.setZona(g.getZona());
			int last = g.getSerenoRuta().size()-1;
			for(int k=0; k < last+1; k++){
				
				Calendar c = GregorianCalendar.getInstance(); // creates a new calendar instance
//				c.setTime(lstPosicion.get(k).getFecha());
				
				SerenoRuta s = new SerenoRuta();
				
//				Timestamp w = new Timestamp(lstPosicion.get(k).getFecha().getTime());
				
				
				int minI;
				int minF;
				
				
//				Date d1 = new Date();
//				Timestamp s1 = new Timestamp(d1.getTime());
//				Date d2 = new Date(d1.getTime()+60000);
//				Date d2s = new Date(s1.getTime()+60000);
//				
//				long duration  = d2.getTime() - d1.getTime();
//				long duration2  = d2s.getTime() - d1.getTime();
//				
//				long diffInMinutes = TimeUnit.MILLISECONDS.toMinutes(duration);
//				long diffInSeconds = TimeUnit.MILLISECONDS.toSeconds(duration);
//				
//				long diffInMinutes2 = TimeUnit.MILLISECONDS.toMinutes(duration2);
//				long diffInSeconds2 = TimeUnit.MILLISECONDS.toSeconds(duration2);
				
//				if(lstPosicion==null && lstPosicion.size()<=0){
//					
				int nissi = g.getIssi();
				int k_lstPosicion = k;
				
					try {
						
						if(k==0){
							minI = -60;
//							c.setTime(lstPosicion.get(k+1).getFecha());
//							minF = c.get(Calendar.MINUTE)-minCritico-1;
							minF = (int)(TimeUnit.MILLISECONDS.toMinutes(g.getSerenoRuta().get(k+1).getFecha().getTime()-millisCritico))-1;							
						}else if(k==last){
//							c.setTime(lstPosicion.get(k).getFecha());
//							minI = c.get(Calendar.MINUTE)-minCritico;
							minI = (int)(TimeUnit.MILLISECONDS.toMinutes(g.getSerenoRuta().get(k).getFecha().getTime()-millisCritico));
							minF = 60;
						}else{
//							c.setTime(lstPosicion.get(k).getFecha());
//							minI = c.get(Calendar.MINUTE)-minCritico;
//							c.setTime(lstPosicion.get(k+1).getFecha());
//							minF = c.get(Calendar.MINUTE)-minCritico-1;
							
							minI = (int)(TimeUnit.MILLISECONDS.toMinutes(g.getSerenoRuta().get(k).getFecha().getTime()-millisCritico));
							minF = (int)(TimeUnit.MILLISECONDS.toMinutes(g.getSerenoRuta().get(k+1).getFecha().getTime()-millisCritico))-1;
						}
					
						s=g.getSerenoRuta().get(k);
					
						for (int j = minI; j <= minF; j++) {
							
//							s.setMinuto(j);
							TetraPointVO point = new TetraPointVO();
//							
							point.setLatitud(g.getSerenoRuta().get(k).getLatitud());
							point.setLongitud(g.getSerenoRuta().get(k).getLongitud());
							point.setMinuto(j);
//							
							posicion.add(point);
							
						}
						
						tetra.setPosicion(posicion);
					} catch (Exception e) {
						System.out.println(e.getStackTrace());
						System.out.println("issi = "+nissi);
						System.out.println("k = "+k_lstPosicion);
					}
//					
//				}
				
//				if(k==0){
//					minI = -30;
////					c.setTime(lstPosicion.get(k+1).getFecha());
////					minF = c.get(Calendar.MINUTE)-minCritico-1;
//					minF = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k+1).getFecha().getTime()-millisCritico))-1;
//				}else if(k==last){
////					c.setTime(lstPosicion.get(k).getFecha());
////					minI = c.get(Calendar.MINUTE)-minCritico;
//					minI = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k).getFecha().getTime()-millisCritico));
//					minF = 30;
//				}else{
////					c.setTime(lstPosicion.get(k).getFecha());
////					minI = c.get(Calendar.MINUTE)-minCritico;
////					c.setTime(lstPosicion.get(k+1).getFecha());
////					minF = c.get(Calendar.MINUTE)-minCritico-1;
//					
//					minI = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k).getFecha().getTime()-millisCritico));
//					minF = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k+1).getFecha().getTime()-millisCritico))-1;
//				}
//			
//				s=lstPosicion.get(k);
//			
//				for (int j = minI; j <= minF; j++) {
//					
//					TetraPointVO point = new TetraPointVO();
//					
//					point.setLatitud(lstPosicion.get(k).getLatitud());
//					point.setLongitud(lstPosicion.get(k).getLongitud());
//					point.setMinuto(j);
//					
//					posicion.add(point);
//					
//				}
				
			}
			
			
//			if (tetra.getPosicion()!=null && tetra.getPosicion().size()>0){
//				lstTetra.add(tetra);
//			}else{
//				
//			}
			
			if(tetra.getPosicion()!=null && tetra.getPosicion().size()>0){
				lstTetra.add(tetra);
			}
			
		}
		
//		for(GeoInfoTetra g : lstTetraInfo){
//			
//			List<TetraPointVO> posicion = new ArrayList<TetraPointVO>();
//			List<SerenoRuta> lstPosicion =  new ArrayList<SerenoRuta>();
//			Map<String, Object> params = new HashMap<String, Object>();
//			
//			params.put("issi", g.getIssi());
//			params.put("idIncidencia", idIncidencia);
//			
//			lstPosicion = serenoRutaMapper.selectTetraPosition(params);
//			
//			TetraVO tetra = new TetraVO();
//			
//			tetra.setIssi(g.getIssi());
//			tetra.setTipoVehiculo(g.getTipoVehiculo());
//			tetra.setMarcaVehiculo(g.getMarcaVehiculo());
//			tetra.setModeloVehiculo(g.getModeloVehiculo());
//			tetra.setPlaca(g.getPlaca());
//			tetra.setTipoRadio(g.getTipoRadio());
//			tetra.setModeloRadio(g.getModeloRadio());
//			tetra.setArea(g.getArea());
//			tetra.setZona(g.getZona());
//			int last = lstPosicion.size()-1;
//			for(int k=0; k < last+1; k++){
//				
//				Calendar c = GregorianCalendar.getInstance(); // creates a new calendar instance
////				c.setTime(lstPosicion.get(k).getFecha());
//				
//				SerenoRuta s = new SerenoRuta();
//				
////				Timestamp w = new Timestamp(lstPosicion.get(k).getFecha().getTime());
//				
//				
//				int minI;
//				int minF;
//				
//				
////				Date d1 = new Date();
////				Timestamp s1 = new Timestamp(d1.getTime());
////				Date d2 = new Date(d1.getTime()+60000);
////				Date d2s = new Date(s1.getTime()+60000);
////				
////				long duration  = d2.getTime() - d1.getTime();
////				long duration2  = d2s.getTime() - d1.getTime();
////				
////				long diffInMinutes = TimeUnit.MILLISECONDS.toMinutes(duration);
////				long diffInSeconds = TimeUnit.MILLISECONDS.toSeconds(duration);
////				
////				long diffInMinutes2 = TimeUnit.MILLISECONDS.toMinutes(duration2);
////				long diffInSeconds2 = TimeUnit.MILLISECONDS.toSeconds(duration2);
//				
////				if(lstPosicion==null && lstPosicion.size()<=0){
////					
//				int nissi = g.getIssi();
//				int k_lstPosicion = k;
//				
//					try {
//						
//						if(k==0){
//							minI = -30;
////							c.setTime(lstPosicion.get(k+1).getFecha());
////							minF = c.get(Calendar.MINUTE)-minCritico-1;
//							minF = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k+1).getFecha().getTime()-millisCritico))-1;							
//						}else if(k==last){
////							c.setTime(lstPosicion.get(k).getFecha());
////							minI = c.get(Calendar.MINUTE)-minCritico;
//							minI = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k).getFecha().getTime()-millisCritico));
//							minF = 30;
//						}else{
////							c.setTime(lstPosicion.get(k).getFecha());
////							minI = c.get(Calendar.MINUTE)-minCritico;
////							c.setTime(lstPosicion.get(k+1).getFecha());
////							minF = c.get(Calendar.MINUTE)-minCritico-1;
//							
//							minI = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k).getFecha().getTime()-millisCritico));
//							minF = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k+1).getFecha().getTime()-millisCritico))-1;
//						}
//					
//						s=lstPosicion.get(k);
//					
//						for (int j = minI; j <= minF; j++) {
//							
//							TetraPointVO point = new TetraPointVO();
//							
//							point.setLatitud(lstPosicion.get(k).getLatitud());
//							point.setLongitud(lstPosicion.get(k).getLongitud());
//							point.setMinuto(j);
//							
//							posicion.add(point);
//							
//						}
//					} catch (Exception e) {
//						System.out.println(e.getStackTrace());
//						System.out.println("issi = "+nissi);
//						System.out.println("k = "+k_lstPosicion);
//					}
////					
////				}
//				
////				if(k==0){
////					minI = -30;
//////					c.setTime(lstPosicion.get(k+1).getFecha());
//////					minF = c.get(Calendar.MINUTE)-minCritico-1;
////					minF = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k+1).getFecha().getTime()-millisCritico))-1;
////				}else if(k==last){
//////					c.setTime(lstPosicion.get(k).getFecha());
//////					minI = c.get(Calendar.MINUTE)-minCritico;
////					minI = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k).getFecha().getTime()-millisCritico));
////					minF = 30;
////				}else{
//////					c.setTime(lstPosicion.get(k).getFecha());
//////					minI = c.get(Calendar.MINUTE)-minCritico;
//////					c.setTime(lstPosicion.get(k+1).getFecha());
//////					minF = c.get(Calendar.MINUTE)-minCritico-1;
////					
////					minI = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k).getFecha().getTime()-millisCritico));
////					minF = (int)(TimeUnit.MILLISECONDS.toMinutes(lstPosicion.get(k+1).getFecha().getTime()-millisCritico))-1;
////				}
////			
////				s=lstPosicion.get(k);
////			
////				for (int j = minI; j <= minF; j++) {
////					
////					TetraPointVO point = new TetraPointVO();
////					
////					point.setLatitud(lstPosicion.get(k).getLatitud());
////					point.setLongitud(lstPosicion.get(k).getLongitud());
////					point.setMinuto(j);
////					
////					posicion.add(point);
////					
////				}
//				
//			}
//			
			
////			if (tetra.getPosicion()!=null && tetra.getPosicion().size()>0){
////				lstTetra.add(tetra);
////			}else{
////				
////			}
//			lstTetra.add(tetra);
//		}

		return lstTetra;
		
//		return listFinal;
		
	}
	
	
	@Override
	public Map<String, Object> obtenerZonificacion(MapaZonificacion sector) throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>();
		
		if(sector.getModo()!=null){ 
			params.put("modo", sector.getModo());
			switch(sector.getModo()){
				case 1: 
					break;
				case 2: 
					if(sector.getCodArea()!=null){ 
						params.put("codArea", sector.getCodArea()); 
					} 
					break;
				case 3: 
					if(sector.getCodZona()!=null){ 
						params.put("codZona", sector.getCodZona()); 
					}
					if(sector.getDescSubzona()!=null){ 
						params.put("descSubzona", sector.getDescSubzona()); 
					}
					break;
				default:
					break;
			}
//			if(sector.getCodArea()!=null && sector.getModo()==1){ 
//				params.put("codArea", sector.getCodArea()); 
//			}
//			if(sector.getCodZona()!=null && sector.getModo()==2){
//				params.put("codZona", sector.getCodZona()); 
//			}
//			if(sector.getCodSubzona()!=null && sector.getModo()==3){ 
//				params.put("codSubzona", sector.getCodSubzona()); 
//			}
			result.put("data", mapaZonificacionMapper.selectZonificacion(params));
		} else { 
			result.put("data", null);
		}
		
		return result;
		
	}
	
	
	
}
