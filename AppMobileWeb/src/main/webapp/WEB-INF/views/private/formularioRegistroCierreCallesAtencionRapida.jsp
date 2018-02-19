<%@ include file="../common/taglibs.jsp"%>

<c:choose>
	<c:when test="${preRegistro != null}">

<html>
<head>

<script type="text/javascript">
	
	var ID_INCIDENCIA = '${idIncidencia}';
	var IS_UPDATE = false;

	var MEDIO_INGRESO = 9412;

	window.isAtencionRapidaForm = true;

	window.desDireccion = '${preRegistro.direccion}';

	window.idPreRegistro = '${preRegistro.id}';

	window.desDetallePrevio = 'Trabajos de emergencia de: ${preRegistro.empresa}';
	
	window.gidRegistro = '${preRegistro.gid}';

	
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
	height: 610px;
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

#app_form_cierre_calles {
	position: relative;
}
</style>



</head>
<body id="app_form_cierre_calles">
	<div class="bandeja-container-sesion"
		style="width: 1000px; margin: auto;">

		<div class="bs-callout bs-callout-info">
			<h4 style="display: inline-block;">Formulario de Pre-registro de
				Cierre de Calles</h4>
			<a href="/mobileApps/mapa-incidencia/admin-pre-registro"
				target="_self" class="btn btn-default"
				style="display: inline-block; float: right;">Volver a la Bandeja</a>
		</div>

		<div class="panel panel-info" style="margin-bottom: 11px;">
			<div class="panel-heading">
				<h3 class="panel-title">Datos del Pre-registro</h3>
			</div>
			<div class="panel-body" id="content-form-main"
				style="padding: 10px 25px 10px 25px;">

				<div class="row">

					<div class="col-md-4">
						<b>Expediente: </b>${preRegistro.numExpediente}</div>

					<div class="col-md-8">
						<b>Dirección: </b> ${preRegistro.direccion}
					</div>

					

					<!--<div class="col-md-4"><b>Empresa: </b> ${preRegistro.empresa}</div> -->

				</div>

				<div class="row" style="margin-top: 5px;">

					<div class="col-md-12">
						<b>Motivo: </b>TRABAJOS DE EMERGENCIA DE ${preRegistro.empresa}
					</div>

				</div>

			</div>
		</div>

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
						<div class="panel-body" style="padding: 0px; position: relative;"
							id="map"></div>
					</div>
				</div>

			</div>
		</div>

	</div>
</body>
<script type="text/javascript"
	src="<c:url value="/js/private/mapaincidencias/FormularioCierreCalles.js" />"></script>

		</html>

	</c:when>
	<c:otherwise>


<html>
<head>

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
	height: 610px;
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

#app_form_cierre_calles {
	position: relative;
}
</style>

</head>
<body id="app_form_cierre_calles">
	<div class="bandeja-container-sesion"
		style="width: 1000px; margin: auto;text-align:center;">
				El Registro enviado no existe o ya ha sido procesado. <a href="/mobileApps/mapa-incidencia/admin-pre-registro" target="_self">Regresar a bandeja.</a>
	</div>
</body>

		</html>

	</c:otherwise>
</c:choose>

