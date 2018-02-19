<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Demo Mapa Distritos</title>
<!-- API Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&oe=utf8"></script>

<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.js"></script>	
	
<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

#map {
	height: 100%;
}

#floating-panel {
	position: absolute;
	top: 10px;
	left: 25%;
	z-index: 5;
	background-color: #fff;
	padding: 5px;
	border: 1px solid #999;
	text-align: center;
	font-family: 'Roboto', 'sans-serif';
	line-height: 30px;
	padding-left: 10px;
}
</style>
</head>
<body>

<!--  <div id="floating-panel">
      <input onclick="clearMarkers();" type=button value="Hide Markers">
      <input onclick="showMarkers();" type=button value="Show All Markers">
      <input onclick="deleteMarkers();" type=button value="Delete Markers">
    </div> -->
    <div id="map"></div>
<!--     <p>Click on the map to add markers.</p> -->
    <script>

// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var map;
var markers = [];
var poligonos = [];

function initMap() {
  var haightAshbury = {lat:-12.049730 , lng: -77.042091};
   
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: haightAshbury,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
//-12.121404, -77.029319
  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addMarker(event.latLng);
  });

  // Adds a marker at the center of the map.
 //addMarker(haightAshbury);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
	clearMarkers(); 
	
	var punto = location.lng()+' '+location.lat();

	$.ajax({
	    url: "/mobileApps/catastro/obtener-distrito-x-centroide",
	    dataType: "json",
	    data : {punto : punto},
	    success: function( response ) {
	    	
	    	  var marker = new google.maps.Marker({
	    		    position: location,
	    		    map: map
	    		  });
	  	  	  markers.push(marker);
	  	  	  
	  	  	  var texto = 'La ubicación seleccionada no se encuentra en la base de datos de distritos de lima.'
	  	  	  
	  	  		clearpoligonos();
	  	  	  
	  	  	  if(response.data){
	  	  		
	  	  	  	var strGeometria = response.data.geometria;
	  	  	
	  	  		strGeometria = strGeometria.replace(/\(/gi,'');
	  	  		strGeometria = strGeometria.replace(/POLYGON/gi,'')
	  	  		strGeometria = strGeometria.replace(/\)/gi,'')
	  	  		
	  	  		var arr1 = strGeometria.split(',');
	  	  		
	  	  	  	//console.log(strGeometria.split(' '))
	  	  	  	
	  	  	  	var poligonoCoords = [];
	  	  		
	  	  		$.each(arr1,function(index,value){
	  	  			var arr2 = value.split(' ');
	  	  			poligonoCoords.push({lat: parseFloat(arr2[1]), lng: parseFloat(arr2[0])});
	  	  		});
	  	  		
	  	  	  	
	  	  	// Define the LatLng coordinates for the polygon.

	  	  	  // Construct the polygon.
	  	  	  var poligonoDistrito = new google.maps.Polygon({
	  	  	    paths: poligonoCoords,
	  	  	    strokeColor: '#FF0000',
	  	  	    strokeOpacity: 0.6,
	  	  	    strokeWeight: 3,
	  	  	    fillColor: '#008C69',
	  	  	    fillOpacity: 0.35
	  	  	  });
	  	  	
	  	  google.maps.event.addListener(poligonoDistrito, 'click', function (e) {
	  		addMarker(e.latLng)
	    	});
	  	  	  
	  	  		poligonoDistrito.setMap(map); 
	  	  	  
	  	  		poligonos.push(poligonoDistrito);
	  	  	  
	  	  		texto = 'El distrito seleccionado es: <b>'+response.data.nombreNombre+'</b>';
	  	  	  	
	  	  	  }
	  	  	  
    		  var infowindow = new google.maps.InfoWindow({
    			    //content: 'El distrito seleccionado es: <b>'+response.data.nombreNombre+'</b>'
    			 	 content: texto
    			  });

    		  google.maps.event.addListener(marker, 'click', function () {
    			  infowindow.open(map, marker);
		    	});
    		  
    		  infowindow.open(map, marker);
	    	
	    	
	    }
	});
	
	

}

//Sets the map on all markers in the array.
function setMapOnAllPoly(map) {
  for (var i = 0; i < poligonos.length; i++) {
	  poligonos[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearpoligonos() {
	setMapOnAllPoly(null);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}


window.onload = function(){
	
	initMap();
	
}
    </script>

</body>
</html>