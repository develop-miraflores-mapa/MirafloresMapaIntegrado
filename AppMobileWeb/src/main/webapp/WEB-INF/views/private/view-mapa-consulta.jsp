<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="include/includescripts.jsp" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
body{
margin:0px;
padding:0px;
}
</style>


<script type="text/javascript">


function printMapBlank(render,zoom,center,direccion){
	var myLatLng = center || {lat: -12.121084126455873, lng: -77.02935755252838};
	
	var map = new google.maps.Map(document.getElementById(render), {
		    zoom: zoom || 16,
		    center: myLatLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
/* 	google.maps.event.addListenerOnce(map, 'idle', function(){
	    showBrujula(render);
	}); */
	
	if(center){
		var marker = new google.maps.Marker({
					map : map,
					position: myLatLng,
					animation : google.maps.Animation.DROP,
					draggable : false
		});
		
		if(direccion){
			var infowindow = new google.maps.InfoWindow({
			    content: direccion
			  });
			   marker.addListener('click', function() {
			    infowindow.open(map, marker);
			  });
		}
		
	}
	
}

function printPolyline(config){
	
	var puntos = config.puntos || [];
	var centro = puntos[0];
	
	if(puntos.length==0){
		return;
	}
	
	var flightPlanCoordinates = [];
	
	var zoom = 14;
	
	if(puntos.length == 2){
		zoom = 16;
	}
	
	if(puntos.length == 3){
		centro = puntos[1];
		zoom = 17;
	}
	
	if(puntos.length == 4){
		centro = puntos[2];
		zoom = 16;
	}
	
	var map = new google.maps.Map(document.getElementById(config.render), {
			    zoom: 17,
			    center: {lat: centro.latitud, lng: centro.longitud},
					    mapTypeId: google.maps.MapTypeId.ROADMAP
			  });
	
/* 	google.maps.event.addListenerOnce(map, 'idle', function(){
	    showBrujula(config.render);
	});	 */	  
	
	Ext.each(puntos,function(item){
		
		var marker = new google.maps.Marker({
		    position: {lat: item.latitud, lng: item.longitud},
		    map: map
		  });
		  
		  if(!Ext.isEmpty(item.direccion)){
		  	
		  	  var infowindow = new google.maps.InfoWindow({
			    content: item.direccion
			  });

			  marker.addListener('click', function() {
			    infowindow.open(map, marker);
			  });
			  
			  
		  }
		
		flightPlanCoordinates.push({lat: item.latitud, lng: item.longitud});
	});
	
	
			
			
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#0C6BB5',
    strokeOpacity: 0.6,
    strokeWeight: 6
  });

  flightPath.setMap(map);

	
}

function showBrujula(idMap,image,size){
	$('#'+idMap).find('#'+idMap+'_brujula').remove();
	$('#'+idMap).append('<div id="'+idMap+'_brujula" style="position: absolute;width: '+(size)+'px;height: '+(size)+'px;top: 5px;right: 5px;"><img src="'+(image?image:'/mobileApps/images/brujula.png')+'" /></div>');
}


function showLineas(config){

	var centro = {latitud:parseFloat(config.data[0].pointFin.split(' ')[0]) , longitud:parseFloat(config.data[0].pointFin.split(' ')[1])};
	
	var zoom = 19;
	
				
	if(config.data.length >= 2 && config.data.length <= 4){
		zoom = 17;
	}
				
	if(config.data.length > 4){
		zoom = 16;
	}
	
	var map = new google.maps.Map(document.getElementById(config.render), {
			    zoom: config.zoom ||  zoom,
			    center: {lat: centro.latitud, lng: centro.longitud},
			    mapTypeId: google.maps.MapTypeId.ROADMAP
			  });
	
  		Ext.each(config.data,function(item,index){
	
		var flightPlanCoordinates = [];
	
		flightPlanCoordinates.push({lat: parseFloat(item.pointIni.split(' ')[0]), lng: parseFloat(item.pointIni.split(' ')[1])});
		
		flightPlanCoordinates.push({lat: parseFloat(item.pointFin.split(' ')[0]), lng: parseFloat(item.pointFin.split(' ')[1])});
		
		console.log(flightPlanCoordinates)
				
		  var flightPath = new google.maps.Polyline({
		    path: flightPlanCoordinates,
		    geodesic: true,
		    strokeColor: '#FF0000',
	        strokeOpacity: 0.6,
	        strokeWeight: 6,
	        map:map
		  });
	
	  flightPath.setMap(map);
	  
	   var infowindow = new google.maps.InfoWindow({
			    content: item.desCalle
			  });
	  
	   google.maps.event.addListener(flightPath, 'click', function(event) {
	
			infowindow.setPosition(event.latLng);
			infowindow.open(map);
		 }); 
	
		
		
	});

}

var paramsPuntos = '${puntos}';
var idIncidencia = '${idIncidencia}';

//alert(idIncidencia);

window.onload = function(){

 	$.ajax({
	    url: "/mobileApps/mapa-incidencia/get-incidencia-by-id",
	    dataType: "json",
	    data : {id:idIncidencia},
	    type:'POST',
	    success: function( response ) {
	    	var incidencia = response.incidencia;

	 		console.log(incidencia);
	 		
	 	/* 	if(incidencia.tipoEvento == 8748 || (incidencia.detalleGeometria && incidencia.detalleGeometria.length>0) ){
	 			
	 		    var geometrias = [];

	 			var arrParams = paramsPuntos.split('_______');
	 			
	 			for(var i=0 ; i < arrParams.length ; i++){
	 				var arr2 = arrParams[i].split('_-_-_');
	 				
	 				var longitud = arr2[0].split(' ')[1];
	 				var latitud = arr2[0].split(' ')[0];
	 				var direccion = arr2[1];
	 				
	 				var data = {
	 		 			latitud: parseFloat(latitud),
	 		 			longitud:parseFloat(longitud),
	 		 			direccion:direccion
	 		 		}
	 		 		geometrias.push(data);
	 				
	 				
	 			}
	 			
	 			var idMapa = 'map';
	 			
	 		 	if(geometrias.length==0){
	 		 		printMapBlank(idMapa);
	 		 		return;
	 		 	}
	 			
	 		 	if(geometrias.length==1){
	 		 		printMapBlank(idMapa,18,{lat:geometrias[0].latitud , lng:geometrias[0].longitud},geometrias[0].direccion);
	 		 	}else{
	 		 		printPolyline({
	 		 			render:idMapa,
	 		 			puntos:geometrias
	 		 		});
	 		 	} 
	 			
	 		}else{ */
	 		    console.log('response');
	 		    console.log(response)
	 			showLineas({render:'map',data:incidencia.lineas});
	 			
	 			
	 	/* 	} */
	 		
	 		$('#content-descripcion').html(incidencia.descripcion);
	 		
	 		$('#fecIni').html(Ext.Date.format(new Date(incidencia.fecHoraInicio), 'd/m/Y h:i:s A'));
	 		$('#fecFin').html(Ext.Date.format(new Date(incidencia.fecHoraFin), 'd/m/Y h:i:s A'));
	    	
	    } 
 	});
	
	
	
	
}

</script>

</head>
<body>

<div id="map" style="width:62%;height: 400px; float: left;">

<img src="/mobileApps/images/loading_2.gif" style="float: left;margin:130px 0px 0px 170px;" />

</div>
<div style="float: left;width:38%;height: 400px;padding: 0px 0px 0px 15px;">

<div style="float: left;width: 100%;padding: 0px 0px 10px 0px;line-height: 20px;">
<b>Fecha Inicio : </b><span id="fecIni">Cargando...</span><br>
<b>Fecha Fin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </b><span id="fecFin">Cargando...</span> 
</div>

<h1 style="font-size: 16px;padding: 0px 0px 0px 0px;margin: 0px 0px 5px 0px;">DESCRIPCIÓN</h1>
<div style="overflow-x:hidden; overflow-y:auto;">
<p id="content-descripcion" style="line-height: 21px;text-align: justify;height: 338px;">Espere un momento por favor...</p>
</div>
</div>

</body>
</html>