<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Test Mapa Incidencia Cambistas</title>
<script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
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
		
		$.ajax({
			url : "/mobileApps/mapa-incidencia/cambistas-list",
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
		    		content: '<div id="content-text" style="line-height:23px;position:relative;">'
		    				+'<b>DIRECCION</b> : '+incidencia.direccion+'<br>'
		    				+'<b>IMEI</b> : '+incidencia.imei+'<br>'
		    				+'<b>NUM. PLACA</b> : '+incidencia.numPlaca+'<br>'
		    				+'<b>NUM. DOCUMENTO IDENTIDAD</b> : '+incidencia.numDocIdent+'<br></div>'
		    	});
	    		
		    	var marker = new google.maps.Marker({
		    		position: new google.maps.LatLng(parseFloat(incidencia.latitud), parseFloat(incidencia.longitud)),
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