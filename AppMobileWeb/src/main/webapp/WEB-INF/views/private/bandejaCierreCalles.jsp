<%@ include file="../common/taglibs.jsp"%>
<html>
<head>
<script type="text/javascript">

var MODO_CONSULTA = '${modoConsulta}';
var IS_CONSULTA = (MODO_CONSULTA=='1'?true:false);

</script>
<jsp:include page="include/includescripts.jsp" />
<title>Cierre de Calles</title>
<style type="text/css">

.btn-exportar-tool span{
color:#333;
}

</style>
</head>
<body id="app_sesion">
<div class="bandeja-container-sesion">

<div class="bs-callout bs-callout-info"> 

	<h4>
	<c:choose>
	    <c:when test="${modoConsulta == '1'}">
	        Consulta de Cierre de Calles
	    </c:when>
	    <c:when test="${modoConsulta == '0'}">
	        Bandeja de Registro de Cierre de Calles
	    </c:when>
	    <c:otherwise>
	        
	    </c:otherwise>
	</c:choose>
	</h4>
 
</div>

	
<div id="busqueda-responsive" class="bs-callout" style="padding-bottom: 5px;display: none;"></div>
<div style="100%;" id="content-grid"></div>

</div>

<form id="form_exportar_excel" method="post" action="/mobileApps/cierre-calles/exportar-bandeja" target="response_export_excel">

	<input type="hidden" name="tipoIncidencia" id="tipoIncidencia" />
	<input type="hidden" name="desTipoIncidencia" id="desTipoIncidencia" />
	<input type="hidden" name="descripcion" id="descripcion" />
	<input type="hidden" name="strFecIni" id="strFecIni" />
	<input type="hidden" name="strFecFin" id="strFecFin" />
	<input type="hidden" name="desCallles" id="desCallles" />
	
	<input type="hidden" name="start" id="0" />
	<input type="hidden" name="limit" id="1000000" />

</form>

<iframe name="response_export_excel" style="display: none;"></iframe>


</body>
<script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/service/MapaIncidenciasService.js" />"></script>
<script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/BandejaCierreCallesApp.js" />"></script>
</html>