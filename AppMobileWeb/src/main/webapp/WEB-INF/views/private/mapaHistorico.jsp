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



<title>Mapa Historico de incidencia</title>

<script src="<c:url value="/common/generic/Constantes.js" />"></script>

<script type='text/javascript' src="<c:url value="/ext/ext-all.js" />"></script>
<link href="<c:url value="/ext/theme-gray/resources/ext-theme-gray-all.css" />" rel="stylesheet" />
<script type='text/javascript' src="<c:url value="/ext/theme-gray/ext-theme-gray.js" />">
	
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
	

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css">

<link href="<c:url value="/css/custom.css" />" rel="stylesheet">



<!-- API Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZd3H4KpywbRj8JmgWuepwKQDnb4kNN3c"></script>

<!-- CSS file Easy Autocomplte -->
<link href='<c:url value="/js/easyAutocomplete/easy-autocomplete.min.css" />' rel="stylesheet">
<link href='<c:url value="/css/sweet-alert.css" />' rel="stylesheet">

<link href='<c:url value="/js/datepicker/css/bootstrap-datetimepicker.min.css" />' rel="stylesheet">

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
		 
		
		<button id="btnPlay" data-toggle="tooltip" data-placement="top"
			title="Play" class="btn btn-danger btn-md">
			<i id="loadingRefresh" class="fa fa-play"></i>
		</button>
		<button id="btnStop" data-toggle="tooltip" data-placement="top"
			title="Stop" class="btn btn-primary btn-md">
			<i id="iconConsultaTimelap" class="fa fa-stop"></i>
		</button>
		
		<input type="range" class="form-control" style="width: 700px;; display: inline-block;" min="-30" max="30" value="-30" class="slider" id="myRange">
  		<p style="width: 40px;; display: inline-block;"><span id="minuto" ></span></p> 
		
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
			style="width: 35px; height: 35px; float: left; margin: 7px 5px 0px 7px;">&nbsp;</div>
		<h1 id="titulo_sistema_init">Simulación de despliegue de fuerzas</h1>

	</header>

	<div id="loading" style="width: 100px; margin: 0 auto;">
		<img style="display: none; margin-top: 100px; width: 45%"
			src="<c:url value="/images/loading.gif" />" />
	</div>

	<!-- <div id="map-canvas"></div> -->
	<div class="wrapper" id="mapPlayer"></div>

	<script
		src="<c:url value="/js/public/mapaincidencias/jquery-2.1.4.min.js" />"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="<c:url value="/bootstrap/js/bootstrap.min.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/bootbox/js/bootbox.min.js" />"></script>

	<script
		src="<c:url value="/js/public/mapaincidencias/vertical-responsive-menu.min.js" />"></script>
	<script src="<c:url value="/js/moment.min.js" />"></script>

	<script type="text/javascript"
		src="<c:url value="/js/datepicker/js/bootstrap-datetimepicker.min.js" />"></script>

	<!-- Mapa Incidencia Mapa Service (MIDService) -->
	<script src="<c:url value="/js/public/mapaincidencias/actualizacion_datos_mapa.js" />"></script>
	<script src="<c:url value="/js/private/mapaincidencias/scriptSimulacion.js" />"></script>
	<script src="<c:url value="/js/public/mapaincidencias/wze.js" />"></script>
	<script src="<c:url value="/js/public/mapaincidencias/incidencia.js" />"></script>
	<script src="<c:url value="/js/bootstrapValidator.js" />"></script>
	<script src="<c:url value="/js/jquery.mask.js" />"></script>
	<script src="<c:url value="/js/waitdialog.js" />"></script>
	<script src="<c:url value="/js/sweet-alert.js" />"></script>

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>


	<!-- JS file Easy Autocomplte -->
	<script src="<c:url value="/js/easyAutocomplete/jquery.easy-autocomplete.min.js" />"></script>

	<script>
		$(document)
				.ready(
						function() {

							
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
		
	</script>


</body>
</html>