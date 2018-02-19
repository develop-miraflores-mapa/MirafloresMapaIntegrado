package pe.gob.miraflores.mobile.constantes;

public class MobileConstantes {

	public static final String ESTADO_ACTIVO = "A";
	public static final String ESTADO_INACTIVO = "I";
	
	public static final int ESTADO_ACTIVO_NUMERO = 1;
	public static final int ESTADO_INACTIVO_NUMERO = 2;
	
	public static final String ESTADO_ACTIVO_STRING = "1";
	public static final String CERO_STRING = "0";
	
	
	public static final String LETRA_SI = "S";
	public static final String LETRA_NO = "N"; 
	
	public static final String CIERRE_PARCIAL = "P";
	public static final String CIERRE_TOTAL = "T"; 
	
	//public static final String SCHEMA_HTTP = "https";
	public static final String SCHEMA_HTTP = "http";
	
//	public static final String URL_APP_RAIZ = "https://digital.miraflores.gob.pe:8443/";
//	public static final String URL_APP_RAIZ = "https://digital2.miraflores.gob.pe:8280/";
//	public static final String URL_APP_RAIZ = "http://190.81.61.186:8080/";
	public static final String URL_APP_RAIZ = "http://172.16.13.17:81/mobileApps";
	
	
	
	public static final String URL_MIRAFLORES = "https://digital.miraflores.gob.pe:8443/miraflores/";
//	public static final String URL_MIRAFLORES = "http://localhost:7781/miraflores/";
	
	public static final String PATH_DIRECTORIO_ADJUNTOS = "adjuntos/";
	public static final String PATH_DIRECTORIO_MOBILE = "adjuntos/mobile/";
	public static final String PATH_DIRECTORIO_AUDITORIA_PEATONAL = "adjuntos/mobile/auditoriapeatonal/";
	public static final String PATH_ADJUNTOS = "/var/libreria/adjuntos/";
	
	public static final String PATH_VAR_LIBRERIA = "/var/libreria/";
	
	public static final String URL_JSON_WAZE = "https://world-georss.waze.com/rtserver/web/TGeoRSS?tk=ccp_partner&ccp_partner_name=Miraflores&polygon=-77.0558054864772,-12.1114653262786;-77.0527104959394,-12.1073087571928;-77.0467604513712,-12.1108914593412;-77.0404850016804,-12.1083396897846;-77.0369343206733,-12.1103330575014;-77.0273458261705,-12.1028371278904;-77.025884570622,-12.1191173588351;-77.0160033744081,-12.119314635385;-77.0107830978147,-12.1145912006012;-77.0010518424432,-12.1288449506841;-77.0196557834857,-12.130765790665;-77.021890372037,-12.1343203598824;-77.0257038558305,-12.1363168842732;-77.0281752593671,-12.1395592534648;-77.029624573848,-12.14019436017;-77.030537910879,-12.1340485248628;-77.0354498099025,-12.1306524325099;-77.036981471354,-12.1325612782214;-77.0388508265173,-12.1258944322622;-77.0558054864772,-12.1114653262786&format=JSON&types=traffic,alerts,irregularities";
	
	public static final String URL_JSON_REACH = ""; 
			
	public static final int TABLA_MAPA_INCIDENCIAS= 8750; 
	
	public static final int TIPO_GEOMETRIA_PUNTO = 1441; 
	
	public static final int WAZE_CONSTRUCTION_TYPE = 8748;
	
	public static final int WAZE_ROAD_CLOSED_TYPE = 8749;
	
	public static final String NAME_USER_WS_VOXIVA = "USUARIO_VOXIVA_WS";
	public static final String PARAMETRO_NUM_DIAS_VENCIMIENTO_CIERRA_CALLE = "NUM_DIAS_VENCIMIENTO_CIERRA_CALLE";
	public static final String PARAMETRO_PROCESANDO_NOTI_CIERRE_CALLE = "PROCESANDO_NOTI_CIERRE_CALLE";
	
	
	public static final String URL_JSON_DOLPHIN = "http://190.102.145.252/api/?token=";
	//public static final String URL_JSON_DOLPHIN = "http://190.102.145.246/api/?token=";
	public static final String URL_JSON_DOLPHIN_END = "&format=json";
	public static final String ID_USER_DOLPHIN = "20131377224";
	public static final String CLI_SALT = "61ae8e580d6c0da753131c5be3d36dd5";
	
	public static final int VOXIVA_WS =	8765;
	
	public static final int MEDIO_PRE_REGISTRO_CC =	9412;
	
	public static final int MEDIO_PLAYA_ESTACIONAMIENTO = 9396;
	public static final int MEDIO_PLAYA_LIMITES_VELOCIDAD = 9397;
	public static final int MEDIO_RECOJO_BASURA = 9401;
	
	public static final int  FORMULARIO_CIERRE_CALLE = 8766;
	public static final int  GRUPO_REFERENCIA_VIA_VOXIVA = 326;
	public static final int  GRUPO_EMAILS_NOTI_CIERRE_CALLES = 389;
	
	public static final String PARAMETRO_TOKEN_MODULO_CIERRE_CALLES = "TOKEN_MODULO_CIERRE_CALLES";
	
	public static final String PARAMETRO_URL_PARAMETROS_SESION_PADRE = "URL_PARAMETROS_SESION_PADRE";
	
	public static final int IDENT_GRUPO_PRE_REGISTRO_CC = 396;
	
	public static final String EMAIL_NOTI_CIERRE_DE_CALLES = "cierredecalles@miraflores.gob.pe";
	public static final String STRING_VOXIVA_CASO = "VOX_CASO";
	public static final String STRING_VOXIVA_ESTADO= "VOX_ESTADO";
	
	public static final String URL_JSON_GET_NAME_STREET_WAZE = "https://feed.world.waze.com/FeedManager/getStreet?token=WAZECCP_3af6097c14e80831&";
	
	public static final String TIPO_AUDITORIA_LOGIN ="LOGIN";
	
	public static final String URL_INTERNAMIENTO = "http://172.16.10.150:8087/miraflores/envio-mapa-atencion.muni?cadena=";
//	public static final String URL_INTERNAMIENTO = "http://200.48.5.166:8085/miraflores/envio-mapa-atencion.muni?cadena=";
	
	
	//Nuevas constantes
	
	public static final int TIPO_MAESTRO_SEXO = 2;
	public static final int TIPO_MAESTRO_DIA = 6;
	public static final int TIPO_MAESTRO_NACIONALIDAD = 680;
	public static final int TIPO_MAESTRO_HALLAZGO = 775;
	public static final int TIPO_MAESTRO_ANIMAL = 778;
	public static final int TIPO_MAESTRO_DOC = 1;
	public static final int TIPO_MEDIO_REPORTE = 796;
	public static final int TIPO_MAESTRO_INVOLUCRADO = 803;
	
	public static final int TIPO_MODALIDADES_ORDEN_PUBLICO = 809;
	public static final int TIPO_MODALIDADES_RUIDOS_MOLESTOS = 815;
	public static final int TIPO_CUALIDAD_SUICIDIO = 825;
	public static final int TIPO_CUALIDAD_DELICTIVA = 828;
	public static final int TIPO_CUALIDAD_DELICTIVA_FRUSTRADA = 831;
	public static final int TIPO_FUERZA_INTERVINIENTE = 835;
	public static final int TIPO_MAESTRO_SEVERIDAD = 845;
	
	public static final int TIPO_GRAPH_SERIE = 100;
	public static final int TIPO_GRAPH_PIE = 101;
	
	
//	public static final int  = 778;
//	public static final int  = 778;
	
	
}
