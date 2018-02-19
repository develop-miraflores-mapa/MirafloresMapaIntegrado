<%@ include file="../common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<jsp:include page="include/includescripts.jsp" />

<html>
  <head>
  	
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

element.style {
	border-width: 0px !important;
}

/* #pnMap-body { 
	-ms-zoom: 1.3; 
	-moz-transform: scale(1.3); 
	-moz-transform-origin: 40 80; 
	-o-transform: scale(1.3); 
	-o-transform-origin: 40 80; 
	-webkit-transform: scale(1.3); 
	-webkit-transform-origin: 40 80; 
} */

/* #map-report a img { display:none; }  */

</style>
  
	<script type="text/javascript">
		var DES_LOGIN = '${usuarioLoginMap.desLoginUser}';
		var UNIDAD_ATENCION;
		var TIPO_CASO;
		var TIPO_SUBCASO;
	</script>
	
    <title>Dashboard de Prueba</title>
    <!-- <link rel="stylesheet" type="text/css" href="../extjs5/build/packages/ext-theme-aria/build/resources/ext-theme-aria-all.css" />
    <link rel="stylesheet" type="text/css" href="../extjs5/build/examples/shared/example.css" /> -->
    <!-- <script type="text/javascript" src="../extjs5/build/ext-all.js"></script> -->
    <!-- <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> -->
    <script type="text/javascript" src="http://code.highcharts.com/highcharts.js"></script>
    <!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=visualization" /> -->

    
   <!--  <script type='text/javascript'>
	    
    </script> -->
    <script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/VariablesMaestras.js" />"></script>
    <%-- <script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/PruebaServices.js" />"></script> --%>
    <script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/EstadisticaService.js" />"></script>
    
  </head>
  <body>
  	<%-- <div id="actualizarBtn" >

		<div class="btn-group">
			<a href="#" style="min-width: 145px;" class="btn btn-danger">${usuarioLoginMap.desLoginUser}</a>
			<a href="#" class="btn btn-danger dropdown-toggle"
				data-toggle="dropdown" aria-expanded="true"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a target="_blank" href="/mobileApps/cierre-calles/mapa/admin">Administrador</a></li>
				<li><a target="_blank" href="/mobileApps/mapa-incidencia/bandeja">Bandeja Incidencias</a></li>
				<li><a target="_blank" href="/mobileApps/estadisticas-incidencias/dashboard">Estadísticas Integradas</a></li>
				<li><a id="btnCambiarClave" href="#">Cambiar Clave</a></li>
				<li class="divider"></li>
				<li><a href="/mobileApps/log-out"">Cerrar Sesion</a></li>
			</ul>
		</div>

	</div> --%>
  </body>
  
  <script>
  	$(document).ready(function(){

  		
	  		if (window.history && window.history.pushState) {
	
			    window.history.pushState('forward', null, 'dashboard');
	
			    $(window).on('popstate', function() {
			      window.location="/mobileApps/log-out";
			      /* sesion.invalidate(); */
			    });
	
			  }
  		
  	  	})
  </script>
  
  
</html>