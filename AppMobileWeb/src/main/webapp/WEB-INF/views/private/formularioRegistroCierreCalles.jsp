<%@ include file="../common/taglibs.jsp"%>
<html>
<head>

<script type="text/javascript">

var ID_INCIDENCIA = '${idIncidencia}';
var IS_UPDATE = (ID_INCIDENCIA.length > 0);
var MEDIO_INGRESO =	8766;

</script>

<jsp:include page="include/includescripts.jsp" />
<title>Registro de Cierra de Calles</title>
<style type="text/css">
.x-btn-default-toolbar-small {
	padding: 0px;
}

.x-btn-default-small {
	padding: 5px;
}

#map {
	height: 780px;
	width: 100%;
}

#mapa-selector {
	height: 315px;
	width: 99.2%;
}

#mapa-selector-linea {
	height: 100%;
	width: 99.2%;
}

#app_form_cierre_calles{
position: relative;

}

</style>

</head>
<body id="app_form_cierre_calles">
	<div class="bandeja-container-sesion" style="width: 1000px; margin: auto;">

<div class="bs-callout bs-callout-info"> <h4 style="display: inline-block;">Registro de Cierre de Calles</h4> <a href="/mobileApps/cierre-calles/bandeja-cierre-calles?token=6df112b7e941caffe79bd04f788d05e6" target="_self" class="btn btn-default" style="display:inline-block; float: right;">Volver a la Bandeja</a> </div>

		<div class="panel panel-success" id="main-content">
			<div class="panel-heading">
				<h3 class="panel-title">Datos del cierre de calle</h3>
			</div>
			<div class="panel-body" id="content-form-main"
				style="padding-bottom: 15px;">

				<div class="columna-registro-cierre-calle-left" id="form-registro"></div>

				<div class="columna-registro-cierre-calle-right">
					<div class="panel panel-warning">
						<div class="panel-heading">
							<h3 class="panel-title">Vista previa en el mapa</h3>
						</div>
						<div class="panel-body" style="padding: 0px;position: relative;" id="map">
						
						
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</body>
<script type="text/javascript"
	src="<c:url value="/js/private/mapaincidencias/FormularioCierreCalles.js" />"></script>

</html>