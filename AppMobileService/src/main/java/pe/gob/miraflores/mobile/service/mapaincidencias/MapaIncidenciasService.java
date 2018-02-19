package pe.gob.miraflores.mobile.service.mapaincidencias;

import java.io.File;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import pe.gob.miraflores.mobile.constantes.MobileConstantes;
import pe.gob.miraflores.mobile.dao.mapaincidencias.MapaEstadisticaMapper;
import pe.gob.miraflores.mobile.domain.detalleincidencia.GeoDetalleIncidencia;
import pe.gob.miraflores.mobile.domain.historico.EstadisticaBase;
import pe.gob.miraflores.mobile.domain.historico.HistoricoIncidencia;
import pe.gob.miraflores.mobile.domain.mapaincidencias.AuditoriaIncidencia;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoCambista;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoPos;
import pe.gob.miraflores.mobile.domain.mapaincidencias.GeoInfoTetra;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ImagenIncidencia;
import pe.gob.miraflores.mobile.domain.infovigilante.GeoInfoVigilante;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaGenerico;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciasRegistro;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaInterviniente;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaInvolucrado;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaMaestroTipo;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaSubcaso;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaUnidad;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaVehiculo;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaZonificacion;
import pe.gob.miraflores.mobile.domain.mapaincidencias.PreInscripcionCierreCalle;
import pe.gob.miraflores.mobile.domain.mapaincidencias.ReachFeed;
import pe.gob.miraflores.mobile.domain.mapaincidencias.Tipificacion;
import pe.gob.miraflores.mobile.domain.tetratimelap.TetraTimelap;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaEstadistica;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaCaso;
import pe.gob.miraflores.mobile.domain.mapaincidencias.MapaIncidenciaBitacora;
import pe.gob.miraflores.mobile.vo.TetraVO;
import pe.gob.miraflores.mobile.vo.VoxivaVO;

public interface MapaIncidenciasService {

	public String buildJsonRestWaze(Map<String, Object> params) throws Exception;
	
//	public MapaIncidenciasRegistro registrar(MapaIncidenciasRegistro incidencia) throws Exception;
	
//	public List<MapaIncidenciasRegistro> obtenerIncidenciasNoProcesadas() throws Exception;
	
//	public List<MapaIncidenciasRegistro> listaInicdenciasWaze(MapaIncidenciasRegistro incidencia) throws Exception;
	
//	public String listaIncidenciasXmlFormatWaze(MapaIncidenciasRegistro incidencia) throws Exception;
	
//	public MapaIncidenciasRegistro registrarIncidenciaVoxiva(MapaIncidenciasRegistro incidencia) throws Exception;
	
	public String buildJsonRestDolphin() throws Exception;

	public GeoDetalleIncidencia obtenerDetalleIncidencia(Integer issi) throws Exception;
	
//	public List<MapaIncidenciasRegistro> listaInicdenciasVoxiva(MapaIncidenciasRegistro incidencia) throws Exception;
	
	public List<Map<String, Object>> selectCamarasVideoVigilancia(Map<String, Object> params);
	
//	public MapaIncidenciasRegistro obtenerIncidenciaPorId(Integer id) throws Exception;
	
//	public Map<String, Object> listaInicdenciasPortipo(MapaIncidenciasRegistro incidencia) throws Exception;
	
//	public void anularIncidencia(Integer id) throws Exception;
	
//	public void enviarAlertasCierreCalle() throws Exception;
	
//	public File exportarExcelBandejaCierreCalles(MapaIncidenciasRegistro incidencia) throws Exception;
	
	public Map<String, Object> createVoxivaInit(VoxivaVO incidencia) throws Exception;
	
	public List<GeoInfoVigilante> getGeoVigilantes(GeoInfoVigilante vigilante) throws Exception;
	
	public List<MapaIncidenciaGenerico> getGeoGenerico(MapaIncidenciaGenerico param)  throws Exception;
	
	public List<Map<String, Object>> buildServiceWazeEstacionamientos(MapaIncidenciaGenerico param)  throws Exception;
	
	public List<Map<String, Object>> buildServiceWazeLimitesVelocidad(MapaIncidenciaGenerico param)  throws Exception;
	
	public PreInscripcionCierreCalle insertPreRegistroCierreCalle(PreInscripcionCierreCalle data) throws Exception;
	
	public PreInscripcionCierreCalle getPreRegistroById(Integer idPreRegistro) throws Exception;
	
	public List<PreInscripcionCierreCalle> obtenerPreRegistrosCierreCalle(PreInscripcionCierreCalle data)  throws Exception;
	
//	public Map<String, Object> listaInicdenciasGeneric(MapaIncidenciasRegistro incidencia) throws Exception;
	
//	public MapaIncidenciasRegistro actualizarGeoIncidencia(MapaIncidenciasRegistro incidencia) throws Exception;
	
//	public Map<String, Object> getGeometriaByIdIncidencia(Integer idIncidencia) throws Exception;
	
//	public MapaIncidenciasRegistro registrarIncidenciaGenericWithGeometria(MapaIncidenciasRegistro incidencia) throws Exception;
	
	public List<GeoInfoCambista> getDataCambistas(GeoInfoCambista cambista) throws Exception;
	
//	public void updateIncidenciaByPk(MapaIncidenciasRegistro incidencia) throws Exception;
	
	public GeoInfoCambista insertInfoCambista(GeoInfoCambista cambista) throws Exception;
	
	public List<GeoInfoCambista> listaInicdenciasCambistas(GeoInfoCambista cambista) throws Exception;
	
	
	public void registrarAuditoria(AuditoriaIncidencia a) throws Exception;
	
//	public List<Map<String, Object>> listaIncidenciasJsonFormatWaze(MapaIncidenciasRegistro incidencia) throws Exception;
	
	public List<GeoInfoCambista> getAlertaCambista() throws Exception;
	
//	public List<MapaIncidenciasRegistro> selectVoxivaListMap(MapaIncidenciasRegistro incidencia);
	
	public int cambiarEstadoMarker(MapaIncidenciaRegistro incidencia) throws Exception;

	
	//nuevos servicios
	
	
	public List<MapaUnidad> listarUnidad() throws Exception;
	public List<MapaCaso> listarCaso() throws Exception;
	public List<MapaSubcaso> listarSubCaso() throws Exception;
	
	public List<MapaCaso> listarCasoPorUnidad(Integer cod) throws Exception;
	public List<MapaSubcaso> listarSubCasoPorCaso(Integer cod) throws Exception;
	public List<MapaMaestroTipo> listarTipoPorPadre(Integer cod) throws Exception;
	public List<MapaMaestroTipo> listarTipoAnimal(Integer cod) throws Exception;
	public List<MapaMaestroTipo> listarTipoSexo(Integer cod) throws Exception;
	public List<MapaMaestroTipo> listarTipoNacionalidad(Integer cod) throws Exception;
	public List<MapaMaestroTipo> listarTipoDia(Integer cod) throws Exception;
	
	public List<MapaIncidenciaRegistro> bandejaIncidencias(MapaIncidenciaRegistro incidencia) throws Exception;
	public Map<String, Object> bandejaIncidencias2(MapaIncidenciaRegistro incidencia) throws Exception;

	void desactivarIncidencia(Integer cod) throws Exception;

	public Map<String, Object> obtenerNuevoId() throws Exception;
	
	public List<MapaVehiculo> listaVehiculos(Integer cod) throws Exception;
	
	public List<MapaInvolucrado> listaInvolucrados(Integer cod) throws Exception;
	
	public List<MapaInterviniente> listaIntervinientes(Integer cod) throws Exception;

	public List<MapaIncidenciaRegistro> listaAlertas(MapaIncidenciaRegistro incidencia) throws Exception;
	
	public List<MapaIncidenciaRegistro> listaAlertasTimelap(MapaIncidenciaRegistro incidencia) throws Exception;
	public List<ImagenIncidencia> listaImagenIncidenciaTimelap(MapaIncidenciaRegistro incidencia) throws Exception;
	public List<MapaIncidenciaRegistro> listaAlertasExposicion(MapaIncidenciaRegistro incidencia) throws Exception;
	
	public List<Map<String, Object>> listaExposicion(MapaIncidenciaRegistro incidencia) throws Exception;
	
	//public List<MapaIncidenciaRegistro> listarAlertas(MapaIncidenciaRegistro incidencia) throws Exception;
	
	public Map<String, Object> consultarIncidencia(Integer idIncidencia) throws Exception;
	public Map<String, Object> consultarBitacora(Integer idIncidencia) throws Exception;
	public Map<String, Object> consultarHistorial(Integer idIncidencia) throws Exception;
	public Map<String, Object> consultarAdjunto(Integer idIncidencia) throws Exception;
	public Map<String, Object> consultarParte(Integer idIncidencia) throws Exception;
//	public List<MapaIncidenciaBitacora> obtenerBitacora(Integer cod) throws Exception;	
	
//	public List<Map<String, Object>> getDynamicJson(Map<String, Object> params) throws Exception;
//	public List<Map<String, Object>> getJson() throws Exception;
//	public List<Map<String, Object>> getJson2(Map<String, Object> w) throws Exception;

	public MapaIncidenciaRegistro registrarIncidencia(MapaIncidenciaRegistro incidencia) throws Exception;
	
//	public ImagenIncidencia registrarImagen(MultipartFile imagen, Integer idIncidencia) throws Exception;
	public ImagenIncidencia registrarImagen(ImagenIncidencia img) throws Exception;
	public void eliminarAdjunto(ImagenIncidencia img) throws Exception;
	
	public MapaIncidenciaBitacora actualizarBitacora(MapaIncidenciaBitacora bitacora) throws Exception;
	
	public HistoricoIncidencia registrarHistorico(MapaIncidenciaRegistro incidencia) throws Exception;
	

	public List<Map<String, Object>> getData(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> getSerie(Map<String, Object> params) throws Exception;
//	public List<Map<String, Object>> getSerie(EstadisticaConsulta ec) throws Exception;
	public List<Map<String, Object>> getPie(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> getPieNull() throws Exception;
	public List<Map<String, Object>> getHeatmap(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> getFrecuenciaDia(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> getFrecuenciaHora(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> getTopZona(Map<String, Object> params) throws Exception;
	
//	public List<Map<String, Object>> selectBandejaExportacion(MapaIncidenciaRegistro incidencia) throws Exception;
	public List<Map<String, Object>> selectBandejaExportacion2(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> selectBandejaExportacionInterviniente(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> selectBandejaExportacionInvolucrado(Map<String, Object> params) throws Exception;
	public List<Map<String, Object>> selectBandejaExportacionVehiculo(Map<String, Object> params) throws Exception;

	public Map<String, Object> bandejaAuditoria(AuditoriaIncidencia auditoria) throws Exception;

	public int reasignarOperador(MapaIncidenciaRegistro params) throws Exception;
	
	public List<ReachFeed> listaReach() throws Exception;
	
	public List<GeoInfoPos> listaAlertaPos() throws Exception;

	public Map<String, Object> obtenerTipifReach(Integer tipifReach) throws Exception;

	public void desactivarReach(Integer cod) throws Exception;
	
	public void desactivarPos(Integer cod) throws Exception;
	
//	public MapaEstadistica registrarEstadistica(MapaIncidenciaRegistro incidencia) throws Exception;
	public EstadisticaBase registrarEstadistica(MapaIncidenciaRegistro incidencia) throws Exception;
	
	public void buildJsonRestDolphinJob() throws Exception;
	
	public List<TetraTimelap> tetraTimelapList(MapaIncidenciaRegistro incidencia) throws Exception;
//	public List<TetraTimelap> tetraTimelapList(Integer idIncidencia, String minuto) throws Exception;
	
	public List<TetraVO> tetraTimelapListTest() throws Exception;

	public List<TetraVO> tetraTimelapListTestPrueba(Integer idIncidencia, String minuto) throws Exception;
	
	public Map<String, Object> obtenerZonificacion(MapaZonificacion sector) throws Exception;

	

	
	
}
