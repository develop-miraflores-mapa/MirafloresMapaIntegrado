<%@ include file="../common/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="es">

<head>

<!-- %@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%-->
<meta charset="UTF-8">

<!-- Bootstrap -->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="<c:url value="/bootstrap/css/bootstrap.min.css" />">



<title>Mapa Integrado de Seguridad Ciudadana</title>

<script
		src="<c:url value="/js/public/mapaincidencias/jquery-2.1.4.min.js" />"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<%-- <script src="<c:url value="/jquery/js/tree.jquery.js" />"></script> --%>
	<script src="<c:url value="/bootstrap/js/bootstrap.min.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/bootbox/js/bootbox.min.js" />"></script>


<script src="<c:url value="/common/generic/Constantes.js" />"></script>

<script type='text/javascript' src="<c:url value="/ext/ext-all.js" />"></script>
<link
	<%-- href="<c:url value="/ext/theme-classic-sandbox/resources/ext-theme-classic-sandbox-all.css" />"
	href="<c:url value="/ext/theme-aria/resources/ext-theme-aria-all.css" />"
	href="<c:url value="/ext/theme-neptune/resources/ext-theme-neptune-all.css" />"
	href="<c:url value="/ext/theme-crisp/resources/ext-theme-crisp-all.css" />"
	href="<c:url value="/ext/theme-classic/resources/ext-theme-classic-all.css" />"
	href="<c:url value="/ext/theme-triton/resources/theme-triton-all.css" />" --%>
	href="<c:url value="/ext/theme-gray/resources/ext-theme-gray-all.css" />"
	rel="stylesheet" />
<script type='text/javascript'
	<%-- src="<c:url value="/ext/theme-classic-sandbox/ext-theme-classic-sandbox.js" />"
	src="<c:url value="/ext/theme-aria/ext-theme-aria.js" />"
	src="<c:url value="/ext/theme-neptune/ext-theme-neptune.js" />"
	src="<c:url value="/ext/theme-crisp/ext-theme-crisp.js" />"
	src="<c:url value="/ext/theme-classic/ext-theme-classic.js" />"
	src="<c:url value="/ext/theme-triton/theme-triton.js" />" --%>
	src="<c:url value="/ext/theme-gray/ext-theme-gray.js" />">
	
</script>
<script type='text/javascript'
	src="<c:url value="/ext/locale/locale-es.js" />"></script>
<script type='text/javascript'
	src="<c:url value="/common/IncludeGenerator.js" />"></script>
<script type='text/javascript'
	src="<c:url value="/common/IncludeBaseGeneric.js" />"></script>
<script type="text/javascript"
	src="<c:url value="/js/private/mapaincidencias/VariablesMaestras.js" />"></script>
<script type="text/javascript"
	src="<c:url value="/js/private/mapaincidencias/IncidenciaServiceNew2.js" />"></script>

<script type="text/javascript"
	src="<c:url value="/js/private/ConstantesEspecIncidencia.js" />"></script>


<script type="text/javascript">
	var DES_LOGIN = '${usuarioLoginMap.desLoginUser}';
	var ROL = '${usuarioLoginMap.ideRol}';
	var ROLROL = '${usuarioLoginMap.ideRolRol}';
	var AREA = '${usuarioLoginMap.area}';
	var UNIDAD_ATENCION;
	var TIPO_CASO;
	var TIPO_SUBCASO;
</script>


<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500'
	rel='stylesheet'>
<link href='<c:url value="/css/normalize.css" />' rel='stylesheet'>
<link href='<c:url value="/css/fontawesome/css/font-awesome.min.css" />'
	rel='stylesheet'>
<link href="<c:url value="/css/vertical-responsive-menu.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/css/bootstrapValidator.css" />"
	rel="stylesheet">
	
<link rel="stylesheet" href="<c:url value="/jquery/css/jqtree.css" />"/>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css">

<link href="<c:url value="/css/custom.css" />" rel="stylesheet">



<!-- API Google Maps -->
<script
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZd3H4KpywbRj8JmgWuepwKQDnb4kNN3c"></script>

<!-- CSS file Easy Autocomplte -->
<link
	href='<c:url value="/js/easyAutocomplete/easy-autocomplete.min.css" />'
	rel="stylesheet">

<link href='<c:url value="/css/sweet-alert.css" />' rel="stylesheet">


<link
	href='<c:url value="/js/datepicker/css/bootstrap-datetimepicker.min.css" />'
	rel="stylesheet">

<style>
header {
	background: rgb(46, 48, 49) !important;
}

element.style {
	border-width: 2px !important;
}

.mask-loading-main {
	position: fixed;
	width: 100%;
	z-index: 999;
	height: 100%;
	top: 0px;
	left: 0px;
	background: #fff;
	filter: alpha(opacity = 80);
	/* IE */
	-moz-opacity: 0.8;
	/* Mozilla */
	opacity: 0.8;
}

.center-loading {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.spinner {
	display: inline-block;
	opacity: 0;
	width: 0;
	-webkit-transition: opacity 0.25s, width 0.25s;
	-moz-transition: opacity 0.25s, width 0.25s;
	-o-transition: opacity 0.25s, width 0.25s;
	transition: opacity 0.25s, width 0.25s;
}

.form-no-spin::-webkit-inner-spin-button, .form-no-spin::-webkit-outer-spin-button
	{
	-webkit-appearance: none !important;
	-moz-appearance: textfield !important;
	margin: 0 !important;
}

.has-spinner.active {
	cursor: progress;
}

.has-spinner.active .spinner {
	opacity: 1;
	width: auto;
	/* This doesn't work, just fix for unkown width elements */
}

.has-spinner.btn-mini.active .spinner {
	width: 10px;
}

.has-spinner.btn-small.active .spinner {
	width: 13px;
}

.has-spinner.btn.active .spinner {
	width: 16px;
}

.has-spinner.btn-large.active .spinner {
	width: 19px;
}

#actualizarBtn {
	position: fixed;
	height: 50px;
	width: auto;
	right: 0;
	top: 50px;
	margin: 5px 5px 0px 0px;
	z-index: 999 !important;
}

.easy-autocomplete {
	display: inline-block !important;
}

.input-xs {
	height: 24px;
	padding: 3px 5px 2px 5px;
	font-size: 12px;
	line-height: 1.8;
	border-radius: 3px;
}

.modal-title {
	padding: 0px !important;
	margin: 0px !important;
}

.formulario-registro .btn {
	padding: 3px 12px !important;
}

.formulario-registro .form-control {
	height: auto !important;
}

/* .gm-style-iw {
	text-align:center !important;
} */



</style>

<style type="text/css">
legend {
	margin-bottom: 2px !important;
	border-bottom: 0px !important;
}

element.style {
	border-width: 2px !important;
}

.x-fieldset-default {
	border-top: 2px solid #bbb !important;
}

.x-fieldset-default {
	border: 2px solid #b5b8c8; ! important;
	padding: 0 10px; ! important;
	margin: 0 0 10px; ! important;
	border-radius: 4px;
	!
	important;
}

/* .mycss {
    background-position:center  !important;
    width: auto !important;
    background-repeat: no-repeat;
    background-image: url("http://localhost:81/mobileApps/images/audio_voxiva.png") !important; 
} */

/* .x-fieldset .x-fieldset-header{
			padding: 0px !important;
		} */
.x-fieldset {
	border-top: 2px solid #bbb !important;
}

/* .x-form-display-field-default{
	min-height:0px;
	
} */
#slidecontainer {
	width: 100%;
}

.slider {
	-webkit-appearance: none;
	width: 100%;
	height: 25px;
	background: #d3d3d3;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
}

.slider:hover {
	opacity: 1;
}

.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 25px;
	height: 25px;
	background: #4CAF50;
	cursor: pointer;
}

.slider::-moz-range-thumb {
	width: 25px;
	height: 25px;
	background: #4CAF50;
	cursor: pointer;
}

.slides-table {
    display: table;
    width: 600px; /* anchura del padre */
    height: 600px; /* altura del padre */
    overflow: hidden;
}

.slides-table .slides-container {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}
</style>

<script>
	function isNumber(evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if ((charCode > 31 && charCode < 48) || charCode > 57) {
			return false;
		} else if (charCode == 13) {
			if ($('.btn-warning').length > 0) {
				/* $('#queryTimelap').click(); */
			} else {
				$('#update').click();
			}

		}
		return true;
	}

	if (console && console.log) {

		console.log('window.innerWidth->' + window.innerWidth);

	}

	if (window.innerWidth <= 390) {
		document.write('<style> .wrapper{height: ' + (window.innerHeight - 50)
				+ 'px;' + 'margin-top: 50px; ' + 'margin-left: -30px; '
				+ 'padding: 15px 30px;  ' + '}'
				+ '#titulo_sistema_init{ font-size:12px; }' + '</style>');

	} else {

		document.write('<style> .wrapper{height: ' + (window.innerHeight - 50)
				+ 'px;' + '} </style>');
	}

	// 
	//
</script>


<script type="text/javascript">
	var jsp_opcWaze = '${usuarioLoginMap.opcWaze}';

	var jsp_opcVoxiva = '${usuarioLoginMap.opcVoxiva}';

	var jsp_opcRtransito = '${usuarioLoginMap.opcRtransito}';

	var jsp_opcRpolicia = '${usuarioLoginMap.opcRpolicia}';

	var jsp_opcRserenazgo = '${usuarioLoginMap.opcRserenazgo}';

	var jsp_opcRfiscalizacion = '${usuarioLoginMap.opcRfiscalizacion}';

	var jsp_opcRapagado = '${usuarioLoginMap.opcRapagado}';

	var jsp_opcRotros = '${usuarioLoginMap.opcRotros}';

	var jsp_opcVig1 = '${usuarioLoginMap.opcVig1}';

	var jsp_opcVig2 = '${usuarioLoginMap.opcVig2}';

	var jsp_opcVig3 = '${usuarioLoginMap.opcVig3}';

	var jsp_opcEstacionamientos = '${usuarioLoginMap.opcEstacionamientos}';

	var IDE_USUARIO = '${usuarioLoginMap.ideUsuario}';

	var DESNOMBRECOMPLETO = '${usuarioLoginMap.desNombreCompleto}';
</script>

</head>

<body>

	<!-- <p>
		  <label for="amount">Minimum number of bedrooms:</label>
		  <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
	</p>
	<input type="range" class="form-control" id="slider-range-max" > -->
	<!-- <div id="slider-range-max"></div> -->

	<div id="actualizarBtn">

		<!-- <input type="range" class="form-control" style="width: 200px; display: inline-block;" id="slider-range-max" > -->
		<!-- <input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/> -->
		<!-- <input type="range" class="form-control" min="-60" max="60" value="0" style="width: 280px; display: inline-block;" id="slider-range-max" > -->
		<!-- <input type="range" class="form-control" min="-60" max="60" value="0" position:"bottom" style="width: 280px; " id="slider-range-max" > -->

		<!-- <input type="range" id="slider-range-max" /> -->
		
		<p style="width: 100px;; display: inline-block;">Instante (min): <span id="minuto" ></span></p>
		<input type="range" class="form-control" style="width: 160px;; display: inline-block;" min="-30" max="30" value="0" class="slider" id="myRange">
  		
		<button id="update" data-toggle="tooltip" data-placement="top" title="Actualizar" class="btn btn-danger btn-md">
			<i id="loadingRefresh" class="fa fa-refresh"></i>
		</button>
		<button id="queryTimelap" data-toggle="tooltip" data-placement="top" title="Consultar histórico" class="btn btn-primary btn-md">
				<i id="iconConsultaTimelap" class="fa fa-search"></i>
		</button>
		<button id="switchExposicion" data-toggle="tooltip" data-placement="top" title="Activar/desactivar modo presentación" class="btn btn-default btn-md">
			<i id="iconPresentationShow" class="glyphicon glyphicon-list-alt"></i>
		</button>
		<button id="new" data-toggle="tooltip" data-placement="top" title="Nueva incidencia" class="btn btn-default btn-md">
			<i id="loadingRefresh" class="fa fa-file-text"></i>
		</button>
		<div class="btn-group">
			<%-- <a href="#" style="min-width: 145px;" class="btn btn-danger">${usuarioLoginMap.desLoginUser}</a> --%>
			<a href="#" style="min-width: 145px;" class="btn btn-default"
				id="btnUsuario">${usuarioLoginMap.desLoginUser}</a> <a href="#"
				class="btn btn-default dropdown-toggle" data-toggle="dropdown"
				aria-expanded="true" id="btnDropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<c:if test="${usuarioLoginMap.ideRol == 901}">
					<li><a target="_blank"
						href="/mobileApps/cierre-calles/mapa/admin">Administración</a></li>
					<li><a target="_blank"
						href="/mobileApps/cierre-calles/mapa/audit">Auditoría</a></li>
				</c:if>
				<c:if
					test="${usuarioLoginMap.ideRol == 901 || usuarioLoginMap.ideRol == 903 || usuarioLoginMap.ideRol == 902 || usuarioLoginMap.ideRol == 992}">
					<li><a target="_blank"
						href="/mobileApps/mapa-incidencia/bandeja">Bandeja Incidencias</a></li>
					<!-- <li><a target="_blank" href="/mobileApps/mapa-incidencia/experimental">Pruebas experimentales</a></li> -->
				</c:if>
				<c:if test="${usuarioLoginMap.ideRol == 901}">
					<!-- <li><a target="_blank" href="/mobileApps/estadisticas-incidencias/dashboard">Estadísticas Integradas</a></li> -->
				</c:if>
				<li><a id="btnCambiarClave" href="#">Cambiar Clave</a></li>
				<li class="divider"></li>
				<li><a href="/mobileApps/log-out"">Cerrar Sesión</a></li>
			</ul>
		</div>



	</div>



	<div class="mask-loading-main">
		<div class="center-loading">
			<img alt="" src="/mobileApps/images/loading_2.gif">
		</div>
	</div>

	<header class="header clearfix" style="z-index: 150;">
		<button type="button" id="toggleMenu" class="toggle_menu">
			<i class="fa fa-bars"></i>
		</button>
		<div
			style="width: 35px; height: 35px; background: url(/mobileApps/images/logo_alerta_35x35.jpg); float: left; margin: 7px 5px 0px 7px;">&nbsp;</div>
		<h1 id="titulo_sistema_init">Mapa Integrado de Seguridad
			Ciudadana</h1>

	</header>

	<div id="nav-exposicion" hidden >
		<nav class="vertical_nav" style="z-index: 999; width: 400px;">
		<!-- <div>vfdbsfbvdsf</div> -->
		</nav>
	</div>
	
	<div class="nav-menu" >
		<nav class="vertical_nav" style="z-index: 999; ">
			<ul id="js-menu" class="menu">
				<c:if test="${usuarioLoginMap.opcWaze == 'S'}">
					<li class="menu--item" id="waze"><a href="#"
						class="menu--link menu-link-activo" title="Waze" data-tipo="waze">
							<i class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/defecto_waze.png" />" /></i> <span
							class="menu--label">Waze</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcVoxiva == 'S'}">
					<li class="menu--item" id="telefono"><a href="#"
						class="menu--link menu-link-activo" title="Incidencias"
						data-tipo="voxiva"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/phone_azul.png" />" /></i> <span
							class="menu--label">Alerta Miraflores</span>
					</a></li>
				</c:if>
				<!-- 
				<c:if test="${usuarioLoginMap.opcReach == 'S'}">
					<li class="menu--item" id="reach"><a href="#"
						class="menu--link menu-link-activo" title="reach" data-tipo="reach">
							<i class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/serenazgo_vii.png" />" /></i> <span
							class="menu--label">Alerta Reach</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcPos == 'S'}">
					<li class="menu--item" id="pos"><a href="#"
						class="menu--link menu-link-activo" title="pos" data-tipo="pos">
							<i class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/pos_alert.png" />" /></i> <span
							class="menu--label">Alerta POS</span>
					</a></li>
				</c:if> 
			-->
				<c:if test="${usuarioLoginMap.opcRtransito == 'S'}">
					<li class="menu--item" id="radio4"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra4"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/transito.png" />" /></i> <span
							class="menu--label">Radio Tr&aacute;nsito</span>
					</a></li>
				</c:if>

				<c:if test="${usuarioLoginMap.opcRpolicia == 'S'}">

					<li class="menu--item" id="radio5"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra5"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu" src="<c:url value="/images/police.png" />" /></i>
							<span class="menu--label">Radio Polic&iacute;a</span>
					</a></li>

				</c:if>
				<c:if test="${usuarioLoginMap.opcRserenazgo == 'S'}">
					<li class="menu--item" id="radio6"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra6"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/serenazgo2.png" />" /></i> <span
							class="menu--label">Radio Serenazgo</span>
					</a></li>
					<li class="menu--item" id="radio8"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra8"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/sereno moto_icon.png" />" /></i> <span
							class="menu--label">Moto/motocicleta</span>
					</a></li>
					<!-- <li class="menu--item" id="radio9"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra9"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/serenazgo2.png" />" /></i> <span
							class="menu--label">Segway</span>
					</a></li>-->
					<li class="menu--item" id="radio10"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra10"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/sereno auto_icon.png" />" /></i> <span
							class="menu--label">Camioneta/Automovil</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcRfiscalizacion == 'S'}">
					<li class="menu--item" id="radio7"><a href="#"
						class="menu--link menu-link-activo" title="Radio Tetra"
						data-tipo="tetra7"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/fiscalizacion.png" />" /></i> <span
							class="menu--label">Radio Fiscalizaci&oacute;n</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcRapagado == 'S'}">
					<li class="menu--item" id="radio2"><a href="#"
						class="menu--link" title="Radio Tetra" data-tipo="tetra2"> <i
							class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/tetra_negro.png" />" /></i> <span
							class="menu--label">Radio Tetra (Apagado)</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcRotros == 'S'}">
					<li class="menu--item" id="radio3"><a href="#"
						class="menu--link" title="Radio Tetra" data-tipo="tetra3"> <i
							class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/tetra_rojo.png" />" /></i> <span
							class="menu--label">Radio Tetra (Otros)</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcVig1 == 'S'}">
					<li class="menu--item" id="vigilante1"><a href="#"
						class="menu--link" title="Area 1" data-tipo="vigilante1"> <i
							class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/icon_vigilantes1.png" />" /></i> <span
							class="menu--label">Vigilantes (Área 1)</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcVig2 == 'S'}">
					<li class="menu--item" id="vigilante2"><a href="#"
						class="menu--link" title="Area 2" data-tipo="vigilante2"> <i
							class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/icon_vigilantes2.png" />" /></i> <span
							class="menu--label">Vigilantes (Área 2)</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcVig3 == 'S'}">
					<li class="menu--item" id="vigilante3"><a href="#"
						class="menu--link" title="Area 3" data-tipo="vigilante3"> <i
							class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/icon_vigilantes3.png" />" /></i> <span
							class="menu--label">Vigilantes (Área 3)</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcEstacionamientos == 'S'}">
					<li class="menu--item" id="estacionamientos"><a href="#"
						class="menu--link" title="estacionamientos"
						data-tipo="estacionamientos"> <i class="menu--icon  fa fa-fw"><img
								class="icon-img-menu"
								src="<c:url value="/images/parking.png" />" /></i> <span
							class="menu--label">Estacionamientos</span>
					</a></li>
				</c:if>
				<c:if test="${usuarioLoginMap.opcCambistas == 'S'}">
					<li class="menu--item" id="cambistas"><a href="#"
						class="menu--link" title="cambistas" data-tipo="cambistas"> <i
							class="menu--icon  fa fa-fw"><img class="icon-img-menu"
								src="<c:url value="/images/dolar.png" />" /></i> <span
							class="menu--label">Cambistas</span>
					</a></li>
				</c:if>
			</ul>

			<button id="collapse_menu" class="collapse_menu">
				<i class="collapse_menu--icon  fa fa-fw"></i> <span
					class="collapse_menu--label">Categorias</span>
			</button>

		</nav>
	</div>

	<div id="loading" style="width: 100px; margin: 0 auto;">
		<img style="display: none; margin-top: 100px; width: 45%"
			src="<c:url value="/images/loading.gif" />" />
	</div>

	<div class="wrapper" id="map-canvas"></div>


<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Plan d'accès <i class="fa fa-info-circle" data-toggle="popover" data-placement="bottom" title="MAP" data-content="Si la map ne s'affiche pas correctement sur votre navigateur, vous pouvez cliquer en haut à droite sur le carré pour mettre la map en grand"></i></h4>

                    </div>

                    <div class="modal-body">

                        <div id="map-player-canvas" style="width: 500px; height: 750px;">

                            {!! Mapper::render() !!}

                        </div>

                    </div>
                </div>

            </div>

        </div>

        <script type="text/javascript">

            $('#myModal').on('shown.bs.modal', function () {
                var map = maps[0].map;
                var currentCenter = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(currentCenter);
            });

        </script>

<%-- 
	<div class="modal fade" id="myModal" style="margin-top: 100px;"
		tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<form id="registrationForm" class="form-horizontal" method="post">

				<input type="hidden" name="idUsuario" id="idUsuario"
					value="${usuarioLoginMap.ideUsuario}" />

				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">Cambiar Contraseña</h4>
					</div>
					<div class="modal-body">



						<div class="form-group">
							<label class="col-xs-4 control-label">Contraseña Actual</label>
							<div class="col-xs-8">
								<input type="password" class="form-control" name="claveActual"
									id="claveActual" />
							</div>
						</div>

						<div class="form-group">
							<label class="col-xs-4 control-label">Contraseña Nueva</label>
							<div class="col-xs-8">
								<input type="password" class="form-control" name="claveNueva" />
							</div>
						</div>

						<div class="form-group">
							<label class="col-xs-4 control-label">Repetir Contraseña</label>
							<div class="col-xs-8">
								<input type="password" class="form-control" name="claveRepetida" />
							</div>
						</div>

					</div>
					<div class="modal-footer">

						<span id="msgCambioClave" style="margin: 5px 10px 0px 0px;"></span>

						<button type="button" id="btnCancelar" class="btn btn-danger"
							data-dismiss="modal">Cancelar</button>
						<button type="submit" id="btnEnviar" class="btn btn-primary">Enviar</button>
					</div>
				</div>
			</form>
		</div>
	</div>
 --%>

	<!--
	Modal para formulario de registro voxiva
-->


	<div id="myModalRegistro" class="modal fade bs-example-modal-lg"
		tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
		<div class="modal-dialog modal-lg">

			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h3 class="modal-title">Registro de Incidencias</h3>
				</div>

				<form id="formRegistrarIncidencia">

					<input type="hidden" name="idIncidencia" id="idIncidencia-form">
					<input type="hidden" name="latitud" id="latitud"> <input
						type="hidden" name="longitud" id="longitud"> <input
						type="hidden" name="medioWaze" id="medioWaze">


					<!-- Select Basic -->
					<div class="formulario-registro" style="padding-top: 15px;">

						<div class="form-group col-md-6 form-group">
							<label for="tipo-caso">Tipo de caso</label> <select
								id="tipo-caso" name="tipoCasoVoxiva" class="form-control">
							</select>
						</div>

						<div class="form-group col-md-6 form-group">
							<label for="sub-tipo-caso">Sub-tipo</label> <select
								id="sub-tipo-caso" name="subTipoCasoVoxiva" class="form-control">
								<option value="">::ESCOJA::</option>
							</select>
						</div>

						<span class="clearfix"> </span>

						<div class="form-group col-md-6 form-group">
							<label for="estado-vox">Estado</label> <select id="estado-vox"
								name="estadoVoxiva" class="form-control">
							</select>
						</div>

						<div class="col-md-6 form-group">
							<label for="sub-estado-vox">Sub-estado</label> <select
								id="sub-estado-vox" name="subEstadoVoxiva" class="form-control">
								<option>::ESCOJA::</option>
							</select>
						</div>

						<span class="clearfix"> </span>

						<div class="col-md-4 form-group">
							<label for="calificacion-caso">Califique el caso</label> <select
								id="calificacion-caso" name="estadoCalifVoxiva"
								class="form-control selectpicker ">
								<option value="">::ESCOJA::</option>
								<option value="1">NUEVO</option>
								<option value="4">ATENDIDO</option>
								<option value="5">ATENDIDO/FALSA ALARMA</option>
								<option value="2">DESCARTADO</option>
								<option value="3">REPETIDO</option>
							</select>
						</div>

						<div class="col-md-4 form-group">
							<label for="importante">¿Importante?</label> <select
								id="importante" name="importanteVoxiva"
								class="form-control selectpicker ">
								<option value="">::ESCOJA::</option>
								<option value="S">SI</option>
								<option value="N">NO</option>
							</select>
						</div>

						<div class="col-md-4 form-group">
							<label for="llamada-devuelta">¿Se devolvio la llamada?</label> <select
								id="llamada-devuelta" name="llamadaDevueltaVoxiva"
								class="form-control selectpicker ">
								<option value="">::ESCOJA::</option>
								<option value="S">SI</option>
								<option value="N">NO</option>
							</select>
						</div>

						<div class="col-md-8 form-group">
							<label for="reportante-nombre">Nombre del reportante</label> <input
								class="form-control input-xs" name="nombreReportaIncidencia"
								id="reportante-nombre" type="text" />
						</div>

						<div class="col-md-4 form-group">
							<label for="reportante-telefono">Teléfono del reportante</label>
							<input class="form-control input-xs"
								name="telefReportaIncidencia" id="reportante-telefono"
								type="text" />
						</div>

						<div class="col-md-10 form-group">
							<label for="reportante-nombre">Dirección de la incidencia</label>
							<input class="form-control input-xs" name="direccionIncidencia"
								id="direccionIncidencia-text" type="text" />
						</div>

						<div class="col-md-2 form-group">
							<label for="reportante-nombre">Número</label> <input
								class="form-control input-xs" name="cuadraEvento"
								id="cuadraEvento" type="text" />
						</div>

						<span class="clearfix"> </span>

						<div class="col-md-3 form-group">
							<label for="fec-incidencia">Fecha de la incidencia</label> <input
								class="form-control input-xs" name="strFecLlamada"
								id="fec-incidencia" type="text" />
						</div>

						<div class="col-md-3 form-group">
							<label for="hora-incidencia">Hora de la incidencia</label> <input
								class="form-control input-xs" name="strHoraLlamada"
								id="hora-incidencia" type="text" />
						</div>

						<div class="col-md-3 form-group">
							<label for="fec-atencion">Fecha de la atención</label> <input
								class="form-control input-xs" name="strFecAtencion"
								disabled="disabled" id="fec-atencion" type="text" />
						</div>

						<div class="col-md-3 form-group">
							<label for="hora-atencion">Hora de la atención</label> <input
								class="form-control input-xs" name="strHoraAtencion"
								disabled="disabled" id="hora-atencion" type="text" />
						</div>

						<div class="col-md-6 form-group">
							<label for="incidencia-presentada">Incidencia presentada</label>
							<textarea class="form-control" name="incidenciaPresentada"
								id="incidencia-presentada"> </textarea>
						</div>


						<div class="col-md-6 form-group">
							<label for="accion-tomada">Acción tomada</label>
							<textarea class="form-control" name="accionesIncidencia"
								id="accion-tomada"> </textarea>
						</div>



						<div class="col-md-3 form-group">
							<label for="unid-interviniente">Unidad Interviniente</label> <select
								id="unid-interviniente" name="unidIntervVoxiva"
								class="form-control selectpicker">

								<option value="">::ESCOJA::</option>
								<option value="9">AMBULANCIA</option>
								<option value="3">BICICLETA</option>
								<option value="4">BRIGADA CANINA</option>
								<option value="5">BRIGADA PLAYERA</option>
								<option value="6">CÁMARA DE VIDEO</option>
								<option value="2">MOTORIZADO</option>
								<option value="8">OPERADOR</option>
								<option value="7">SERVICIO TÁCTICO</option>
								<option value="1">UNIDAD MÓVIL</option>

							</select>
						</div>

						<div class="col-md-3 form-group">
							<label for="unidad-nombre">Nombre de la Unidad</label> <input
								class="form-control input-xs" name="desUnidIntervVoxiva"
								id="unidad-nombre" type="text" />
						</div>

						<div class="col-md-4 form-group">
							<label for="operador-cargo">Operador de Cargo</label> <input
								class="form-control input-xs" name="nombreRecepcionaIncidencia"
								id="operador-cargo" type="text" />
						</div>

						<div class="col-md-2 form-group">
							<label for="operador-dni">Dni del operador</label> <input
								class="form-control input-xs" name="dniRecepcionaIncidencia"
								id="operador-dni" type="text" />
						</div>

						<span class="clearfix"> </span>

						<div class="modal-footer">

							<span id="msgCambioClave2" style="margin: 5px 10px 0px 0px;"></span>

							<button type="button" id="btnCancelar2" class="btn btn-danger"
								data-dismiss="modal">Cancelar</button>

							<button type="submit" id="btnEnviar2" class="btn btn-primary">Actualizar</button>
						</div>

					</div>



				</form>

			</div>
		</div>
	</div>




	<%-- <script
		src="<c:url value="/js/public/mapaincidencias/jquery-2.1.4.min.js" />"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="<c:url value="/jquery/js/tree.jquery.js" />"></script>
	<script src="<c:url value="/bootstrap/js/bootstrap.min.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/bootbox/js/bootbox.min.js" />"></script>
 --%>
	<script
		src="<c:url value="/js/public/mapaincidencias/vertical-responsive-menu.min.js" />"></script>
	<script src="<c:url value="/js/moment.min.js" />"></script>

	<script type="text/javascript"
		src="<c:url value="/js/datepicker/js/bootstrap-datetimepicker.min.js" />"></script>

	<!-- Mapa Incidencia Mapa Service (MIDService) -->
	<script
		src="<c:url value="/js/public/mapaincidencias/actualizacion_datos_mapa.js" />"></script>

	<script src="<c:url value="/js/public/mapaincidencias/script.js" />"></script>
	<script src="<c:url value="/js/public/mapaincidencias/scriptSimulacion.js" />"></script>
	<script src="<c:url value="/js/public/mapaincidencias/wze.js" />"></script>


	
	
	

	<script
		src="<c:url value="/js/public/mapaincidencias/incidencia.js" />"></script>



	<script src="<c:url value="/js/bootstrapValidator.js" />"></script>

	<script src="<c:url value="/js/jquery.mask.js" />"></script>

	<script src="<c:url value="/js/waitdialog.js" />"></script>

	<script src="<c:url value="/js/sweet-alert.js" />"></script>

	<!-- Latest compiled and minified JavaScript -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>


	<!-- JS file Easy Autocomplte -->
	<script
		src="<c:url value="/js/easyAutocomplete/jquery.easy-autocomplete.min.js" />"></script>

	<script>

		function fnInside(id){
			var incidencia = {};
			incidencia.idIncidencia=id;
			MapaIncidencias.ajaxVoxivaExposicion(id);
		}
		
		$(document)
				.ready(
						function() {

							$('#btnUsuario').css('color', 'white');
							if (ROL == 902) {
								switch (parseInt(ROLROL)) {
								case 995:
									$('#btnUsuario').css('background-color',
											'#0F70F7');
									$('#btnUsuario').css('border-color',
											'#0F70F7');
									$('#btnDropdown').css('background-color',
											'#0F70F7');
									$('#btnDropdown').css('border-color',
											'#0F70F7');
									break;
								case 996:
									$('#btnUsuario').css('background-color',
											'#22B14C');
									$('#btnUsuario').css('border-color',
											'#22B14C');
									$('#btnDropdown').css('background-color',
											'#22B14C');
									$('#btnDropdown').css('border-color',
											'#22B14C');
									break;
								case 997:
									$('#btnUsuario').css('background-color',
											'#F9DA04');
									$('#btnUsuario').css('borber-color',
											'#F9DA04');
									$('#btnDropdown').css('background-color',
											'#F9DA04');
									$('#btnDropdown').css('borber-color',
											'#F9DA04');
									break;
								case 998:
									$('#btnUsuario').css('background-color',
											'#F26100');
									$('#btnUsuario').css('border-color',
											'#F26100');
									$('#btnDropdown').css('background-color',
											'#F26100');
									$('#btnDropdown').css('border-color',
											'#F26100');
									break;
								case 999:
									$('#btnUsuario').css('background-color',
											'#ED1C24');
									$('#btnUsuario').css('border-color',
											'#ED1C24');
									$('#btnDropdown').css('background-color',
											'#ED1C24');
									$('#btnDropdown').css('border-color',
											'#ED1C24');
									break;
								case 1000:
									$('#btnUsuario').css('background-color',
											'#8B3F8B');
									$('#btnUsuario').css('border-color',
											'#8B3F8B');
									$('#btnDropdown').css('background-color',
											'#8B3F8B');
									$('#btnDropdown').css('border-color',
											'#8B3F8B');
									break;
								case 1001:
									$('#btnUsuario').css('background-color',
											'#925A3D');
									$('#btnUsuario').css('border-color',
											'#925A3D');
									$('#btnDropdown').css('background-color',
											'#925A3D');
									$('#btnDropdown').css('border-color',
											'#925A3D');
									break;
								default:
									$('#btnUsuario').css('background-color',
											'#007878');
									$('#btnUsuario').css('broder-color',
											'#007878');
									$('#btnDropdown').css('background-color',
											'#007878');
									$('#btnDropdown').css('broder-color',
											'#007878');
									break;
								}
							} else {
								$('#btnUsuario').css('background-color',
										'#6C6C6C');
								$('#btnUsuario').css('broder-color', '#6C6C6C');
								$('#btnDropdown').css('background-color',
										'#6C6C6C');
								$('#btnDropdown')
										.css('broder-color', '#6C6C6C');
							}

							if (window.history && window.history.pushState) {

								window.history.pushState('forward', null,
										'mapa');

								$(window)
										.on(
												'popstate',
												function() {
													/* if(!($("li")||$("div"))){ */
													if (!($("li"))) {
														window.location = "/mobileApps/log-out";
														/* sesion.invalidate(); */
													}
												});

							}

							$('#btnCambiarClave').click(function() {

								$('#myModal').modal('show')

							});

							$('#registrationForm')
									.bootstrapValidator(
											{
												// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later

												feedbackIcons : {
													valid : 'glyphicon glyphicon-success',
													invalid : 'glyphicon glyphicon-requerid',
													validating : 'glyphicon glyphicon-refresh'
												},
												fields : {
													'claveActual' : {
														validators : {
															notEmpty : {
																message : 'Ingresar su contraseña actual'
															}
														}
													},
													'claveNueva' : {
														validators : {
															notEmpty : {
																message : 'Ingresar su contraseña Nueva'
															}
														}
													},
													'claveRepetida' : {
														validators : {
															notEmpty : {
																message : 'Repita la contraseña nueva'
															},
															identical : {
																field : 'claveNueva',
																message : 'La contrase&ntilde;a no coincide'
															}
														}
													}

												}
											})
									.on(
											'success.form.bv',
											function(e) {
												// Prevent form submission
												e.preventDefault();
												// Get the form instance
												var $form = $(e.target);
												// Get the BootstrapValidator instance
												var bv = $form
														.data('bootstrapValidator');
												// Use Ajax to submit form data
												$('#btnCancelar').attr(
														'disabled', true);

												//$('#registrationForm').bootstrapValidator('resetForm', true);

												$
														.post(
																'/mobileApps/cambiar-clave',
																$form
																		.serialize(),
																function(result) {

																	if (result.success) {
																		//id="msgCambioClave" 
																		$(
																				'#msgCambioClave')
																				.removeClass(
																						'text-danger');
																		$(
																				'#msgCambioClave')
																				.addClass(
																						'text-success');

																		setTimeout(
																				function() {

																					$(
																							'#myModal')
																							.modal(
																									'hide');

																				},
																				3000);

																	} else {
																		$(
																				'#msgCambioClave')
																				.removeClass(
																						'text-success');
																		$(
																				'#msgCambioClave')
																				.addClass(
																						'text-danger');
																		$(
																				'#btnCancelar')
																				.attr(
																						'disabled',
																						false);
																		$(
																				'#btnEnviar')
																				.attr(
																						'disabled',
																						false);
																	}

																	$(
																			'#msgCambioClave')
																			.html(
																					result.message);

																}, 'json');

											});

							$('#myModal').on(
									'hide.bs.modal',
									function(e) {

										$('#idUsuario').val(IDE_USUARIO);
										$('#btnCancelar').attr('disabled',
												false);
										$('#msgCambioClave').hide();
										$('#registrationForm')
												.bootstrapValidator(
														'resetForm', true);

									});

							var options = {
								url : function(query) {
									return "/mobileApps/catastro/obtener-georeferencia-via?query="
											+ query;
								},

								listLocation : "data",
								requestDelay : 1000,
								getValue : function(el) {
									return el.toponimia + ' CDRA. ' + el.cdra;
								},
								list : {
									maxNumberOfElements : 50,
									onSelectItemEvent : function() {
										var record = $("#aproximarCalles")
												.getSelectedItemData();
										MapaIncidencias.setCenterMap(
												record.punto, record);
										$("#aproximarCalles").val('');
										$("#aproximarCalles").attr(
												'placeholder',
												record.toponimia + ' CDRA. '
														+ record.cdra);
									}
								}
							};
							//"toponimia"

							$("#aproximarCalles").easyAutocomplete(options);

						});

		$('#showCamaras').click(function() {
			var btnShowCamaras = this;
			var className = $(btnShowCamaras).attr('class');

			var visible = false;

			if (className.indexOf('btn-danger') >= 0) {

				$(btnShowCamaras).removeClass('btn-danger');
				$(btnShowCamaras).addClass('btn-default');

			} else {

				$(btnShowCamaras).addClass('btn-danger');
				$(btnShowCamaras).removeClass('btn-default');
				visible = true;

			}

			$.each(MapaIncidencias.markersCamaras, function(i, m) {

				m.setVisible(visible);

			});

		});

		$('#myCasos').click(function() {
			var btnMyCases = this;
			var className = $(btnMyCases).attr('class');
			var visible = false;
			if (className.indexOf('btn-danger') >= 0) {

				$(btnMyCases).removeClass('btn-danger');
				$(btnMyCases).addClass('btn-default');
				MapaIncidencias.ajaxVoxiva({
					tpoOperador : null
				});
			} else {

				$(btnMyCases).addClass('btn-danger');
				$(btnMyCases).removeClass('btn-default');
				MapaIncidencias.ajaxVoxiva({
					tpoOperador : ROLROL
				});
				visible = true;
			}
		});

		$('#showSubzonas').unbind().click(function() {
			var btnShowSubzonas = this;
			var className = $(btnShowSubzonas).attr('class');
			var visible = false;
			if (className.indexOf('btn-danger') >= 0) {
				$(btnShowSubzonas).removeClass('btn-danger');
				$(btnShowSubzonas).addClass('btn-default');
			} else {
				$(btnShowSubzonas).removeClass('btn-default');
				$(btnShowSubzonas).addClass('btn-danger');
				visible = true;
			}
			MapaIncidencias.showSubzonas(visible);
		});

		$('#showZonas').unbind().click(function() {
			var btnShowZonas = this;
			var className = $(btnShowZonas).attr('class');
			var visible = false;
			if (className.indexOf('btn-danger') >= 0) {
				$(btnShowZonas).removeClass('btn-danger');
				$(btnShowZonas).addClass('btn-default');
			} else {
				$(btnShowZonas).removeClass('btn-default');
				$(btnShowZonas).addClass('btn-danger');
				visible = true;
			}
			MapaIncidencias.showZonas(visible);
		});

		$('#showAreas').unbind().click(function() {
			var btnShowAreas = this;
			var className = $(btnShowAreas).attr('class');
			var visible = false;
			if (className.indexOf('btn-danger') >= 0) {
				$(btnShowAreas).removeClass('btn-danger');
				$(btnShowAreas).addClass('btn-default');
			} else {
				$(btnShowAreas).removeClass('btn-default');
				$(btnShowAreas).addClass('btn-danger');
				visible = true;
			}
			MapaIncidencias.showAreas(visible);
		});

		$('#new').unbind().click(function() {
			IncidenciaService.openFormRegistroNuevo({
				title : 'Registro de Incidencia'
			});
		});

		/* $(  function() {
		    $( "#slider-range-max" ).slider({
		        range: "max",
		        min: 1,
		        max: 25,
		        value: 13,
		        slide: function( event, ui ) {
		            if(ui.value>12){
		                console.log("mayor>ui.value");
		                console.log(ui.value);
		                $( "#amount" ).val(ui.value / 2 );
					}else{
						console.log("menor>ui.value");
						console.log(ui.value);
						$( "#amount" ).val(ui.value / 2 );
					}
				}
		    });
			$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
		}); */

		/* $( function() {
		    $( "#slider-range-max" ).slider({
		      range: true,
		      min: 0,
		      max: 500,
		      values: [ 75, 300 ],
		      slide: function( event, ui ) {
		        $( "#amount" ).val( "Euros" + ui.values[ 0 ] + " - Euros" + ui.values[ 1 ] );
		      }
		    });
		    $( "#amount" ).val( "Euros" + $( "#slider-range" ).slider( "values", 0 ) +
		      " - Euros" + $( "#slider-range" ).slider( "values", 1 ) );
		  } ); */

		/* $('#enableTimelap').unbind().click(function(){
			var btnTimelap = this;
			var className = $(btnTimelap).attr('class');
			var visible = false;
			if(className.indexOf('btn-warning')>=0){
				$(btnTimelap).removeClass('btn-warning');
				$(btnTimelap).addClass('btn-default');
			}else{
				$(btnTimelap).removeClass('btn-default');
				$(btnTimelap).addClass('btn-warning');
				visible = true;
			}
			//MapaIncidencias.showZonas(visible);
		}); */

		/* $('#cambiar').change(function(){
		    var valorCambiado =$(this).val();
		    if((valorCambiado == '3')||(valorCambiado == '4')){
		       $('#adl').css('display','none');
		       $('#pax').css('display','block');
		     }
		     else if(valorCambiado == '2')
		     {
		         //otra accion
		     }
		}); */

		/* 
		var slider = document.getElementById("myRange");
		var output = document.getElementById("demo");
		output.innerHTML = slider.value;

		slider.oninput = function() {
		  output.innerHTML = this.value;
		}
		 */

		$('#myRange').change(function() {
			var valorCambiado = $(this).val();
			console.log("valorCambiado");
			console.log(valorCambiado);

		});

		$('#myCarousel').carousel('pause');

		$('label.tree-toggler').click(function () {
	        $(this).parent().children('ul.tree').toggle(300);
	    });

/* 

		var expoStore = Ext.create('Ext.data.TreeStore', {
		    root: {
		        id: 'rootNode',
		        expanded: true,
		        children: childrenParam
		    }
		});

		var expoTree = {
				xtype: 'treepanel',
				region: 'west',
				id: 'navigation',
				title: 'Tree of builds',
				width: "30%",
				height: "100%",
				layout: 'fit',
				rootVisible: false,
				store: store,
				split: true,
				autoScroll: true,
				collapsible: true,
				floatable: false
		};
		
		Ext.getDom('nav-exposicion').add(expoTree);
 */


		/* Ext.getDom('nav-exposicion').add(texto); */
		
	</script>


</body>
</html>