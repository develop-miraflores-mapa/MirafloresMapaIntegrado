<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Test Mapa Incidencia Voxiva</title>
<script type='text/javascript' src="/mobileApps/jquery/js/jquery-2.1.4.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&oe=utf8"></script>
<style>
html, body, #map_canvas{
    margin:0 !important;
    padding:0  !important;
    height: 100%;
}

</style>
</head>
<body>
<div id="cargando">Obteniendo información. Espere...</div>
 <div  id="map_canvas" style="z-index:99;width: 100%;"></div>
</body>
<script>

	var iInfoWindow;

	$(document).ready(function() {

		setInterval(function() {
	/* 		$.ajax({
				url : "/mobileApps/mapa-incidencia/generate-jsonformat-waze",
			}).done(function(response) {

				console.log(response);
				
			});
 */
		}, 1000)

		
		$.ajax({
			url : "/mobileApps/mapa-incidencia/voxiva-list",
		}).done(function(response) {
			
			$('#cargando').hide();
			
			var map = new google.maps.Map(document.getElementById('map_canvas'), {
				zoom: 15,
				center: new google.maps.LatLng(-12.121446, -77.030175),
			    mapTypeId: google.maps.MapTypeId.ROADMAP
			});
			
			$.each(response.data,function(i,incidencia){
				
				console.log(incidencia);
				 var infowindow = new google.maps.InfoWindow({
		    		content: '<div id="content-text" style="line-height:23px;position:relative;"><b>ID CASO</b> : '+incidencia.idCasoVoxiva+'<br>'
		    				+'<b>DIRECCION</b> : '+incidencia.direccionIncidencia+'<br>'
		    				+'<b>CUADRA</b> : '+incidencia.cuadraEvento+'<br>'
		    				+'<b>FECHA HORA LLAMADA</b> : '+incidencia.horaLlamadaVoxiva+'<br>'
		    				+'<b>DISPOSITIVO</b> : '+incidencia.idDispositivo+'<br>'
		    				+'<b>TIPO VIA</b> : '+incidencia.idTipoVia+'<br>'
		    				+'<b>ID VIA</b> : '+incidencia.idVia+'<br>'
		    				+'<b>LATITUD</b> : '+incidencia.latitud+'<br>'
		    				+'<b>LONGITUD</b> : '+incidencia.longitud+'<br>'
		    				+'<b>NOMBRE RECEPCIONA INCIDENCIA</b> : '+incidencia.nombreRecepcionaIncidencia+'<br>'
		    				+'<b>DNI RECEPCIONA INCIDENCIA</b> : '+incidencia.dniRecepcionaIncidencia+'<br>'
		    				+'<b>INCIDENTE PRESENTADO</b> : '+incidencia.incidenciaPresentada+'<br>'
		    				+'<b>NOMBRE REPORTA INCIDENCIA</b> : '+incidencia.nombreReportaIncidencia+'<br>'
		    				+'<b>TELEFONO REPORTA INCIDENCIA</b> : '+incidencia.telefReportaIncidencia+'<br></div>'
		    	});
	    		
		    	var marker = new google.maps.Marker({
		    		position: new google.maps.LatLng(parseFloat(incidencia.longitud), parseFloat(incidencia.latitud)),
		    		map: map,
		    		draggable: false,
		            mapTypeId: google.maps.MapTypeId.ROADMAP
		    	});
		    	
		    	//content-text
		    	
	   	        google.maps.event.addListener(infowindow, 'domready', function() {
				    var l = $('#content-text').parent().parent().parent().parent().append('<img class="cerrarInfowindow" src="/mobileApps/images/close_infowindow1.png" style="position:absolute;top:-17px;right:-17px;z-index:99999999999;" />');
				    $(".gm-style-iw").next("div").hide();
				    
				    $('.cerrarInfowindow').click(function(){
				    	if(iInfoWindow){iInfoWindow.close()}
				    });
				    
				}); 
		    	
		    	google.maps.event.addListener(marker, 'click', function () {
		    		
		    		if(iInfoWindow){iInfoWindow.close()}
		    		
		    		infowindow.open(map, marker);
		    		
		    		iInfoWindow = infowindow;
		    		
		    	}); 
				
			});
		})

	});
</script>
</html>