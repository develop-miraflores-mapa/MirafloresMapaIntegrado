<%@ include file="../common/taglibs.jsp"%>	
<!DOCTYPE html>
<html lang="es">
<!-- <html> -->
<head>

<!-- <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> -->

<!-- Bootstrap -->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="<c:url value="/bootstrap/css/bootstrap.min.css" />">

<title>Administración de Incidencias</title>

<script type="text/javascript">

var DES_LOGIN = '${usuarioLoginMap.desLoginUser}';
var ROL = '${usuarioLoginMap.ideRol}';
var ROLROL = '${usuarioLoginMap.ideRolRol}';
var AREA = '${usuarioLoginMap.area}';
var UNIDAD_ATENCION;
var TIPO_CASO;
var TIPO_SUBCASO;
</script>

<link
	<%-- href="<c:url value="/ext/theme-classic-sandbox/resources/ext-theme-classic-sandbox-all.css" />"
	href="<c:url value="/ext/theme-aria/resources/ext-theme-aria-all.css" />"
	href="<c:url value="/ext/theme-neptune/resources/ext-theme-neptune-all.css" />"
	href="<c:url value="/ext/theme-crisp/resources/ext-theme-crisp-all.css" />"
	href="<c:url value="/ext/theme-classic/resources/ext-theme-classic-all.css" />"
	href="<c:url value="/ext/theme-triton/resources/theme-triton-all.css" />" --%>
	href="<c:url value="/ext/theme-gray/resources/ext-theme-gray-all.css" />"
	rel="stylesheet" />
<script type='text/javascript' src="<c:url value="/ext/ext-all.js" />"></script>
<script type='text/javascript'
	<%-- src="<c:url value="/ext/theme-classic-sandbox/ext-theme-classic-sandbox.js" />"
	src="<c:url value="/ext/theme-aria/ext-theme-aria.js" />"
	src="<c:url value="/ext/theme-classic/ext-theme-classic.js" />"
	src="<c:url value="/ext/theme-crisp/ext-theme-crisp.js" />"
	src="<c:url value="/ext/theme-neptune/ext-theme-neptune.js" />"
	src="<c:url value="/ext/theme-triton/theme-triton.js" />" --%>
	src="<c:url value="/ext/theme-gray/ext-theme-gray.js" />"
	>
</script>
<script src="<c:url value="/js/moment.min.js" />"></script>



<style type="text/css">

legend{
	margin-bottom: 0px !important;
	border-bottom: 0px !important;
}

/* .x-fieldset .x-fieldset-header{
	padding: 0px !important;
} */

.x-fieldset {
	border-top: 0px solid #bbb !important;
}

.x-fieldset-default {
	border-top: 0px solid #bbb !important;
}

.x-body {
    font-size: 11px !important;
}

/* .mycss {
    background-position:center  !important;
    width: auto !important;
    background-repeat: no-repeat;
    background-image: url("http://localhost:81/mobileApps/images/audio_voxiva.png") !important; 
} */
   
element.style {
	border-width: 0px !important;
}
</style>

<script type="text/javascript" src="<c:url value="/js/private/ConstantesEspecIncidencia.js" />"></script>
<jsp:include page="include/includescripts.jsp" />


</head>
<body>
<div id="render" style="width:1570px; height:739px;"></div>
</body >
 <script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/IncidenciaServiceNew2.js" />"></script>
 
<script>
  	$(document).ready(function(){

	  		if (window.history && window.history.pushState) {
			    window.history.pushState('forward', null, 'bandeja');
			    $(window).on('popstate', function() {
			      window.location="/mobileApps/log-out";
			    });
			  }

	  		setInterval(function(){
				IncidenciaService.buscar2();
			}, 60000);
	  		
  	  	});
</script>

</html>