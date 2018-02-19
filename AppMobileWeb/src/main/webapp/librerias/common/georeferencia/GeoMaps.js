var markersArray = [];

try{

Ext.ns('GeoMaps');

	
}catch(e){
window.GeoMaps={};
}



/**
 * @type JavaScript
 * @description Libreria georeferencial
 * @class GeoMaps
 * @requires { [ "Extjs 4"
 *           ,"https://maps.google.com/maps/api/js?sensor=false&language=es"
 *           ,"http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"
 *           ,"http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerwithlabel/src/markerwithlabel.js" ]
 *           ,de preferencia agregar al tag head <meta name="viewport"
 * content="initial-scale=1.0, user-scalable=no" /> } @
 * @namespace GeoMaps
 * @version 1.0
 * @author Angel Tomas, Arturo Sanchez
 */
GeoMaps = function(options) {

	// Variables
	var optionsInit={};
	var map = false;
	var markersArray = [];
	var geo = this;
	var directionsDisplay = false;
	var directionsService = new google.maps.DirectionsService();
	var oldDirections = [];
	var currentDirections = null;
	var arrPoints = null;
	var isChange = false;
	var initChange = false;
	var changAarryPoints = [];
	var markerClusterer = null;
	var punto=null;
	
	this.getPunto=function(){
	
	return punto;
		
	}
	
	function setPunto(p){
	
	punto=p;
		
	}
	
	this.getMap=function(){
	
	return map;
		
	}
	
	var setMarker = function(map, lat, Lon, dragable) {
		var myLatlng = new google.maps.LatLng(lat, Lon);
		var marker = new google.maps.Marker({
					position : myLatlng,
					map : map,
					animation : google.maps.Animation.DROP,
					draggable : dragable
				});

		return marker;
	};

	var setAllMap = function(map) {
		for (var i = 0; i < markersArray.length; i++) {
			markersArray[i].setMap(map);
		}
	}
	var clearOverlays = function() {
		setAllMap(null);
	}

	function deleteOverlays() {

		clearOverlays();
		markersArray = [];
	}
	var calcRoute = function(data) {

		var start = new google.maps.LatLng(-12.122458266771831,
				-77.03034460544586);
		var end = new google.maps.LatLng(-12.122070151522008,
				-77.02904641628265);

		var request = {
			origin : start,
			destination : end,
			travelMode : google.maps.DirectionsTravelMode.DRIVING
		};

		directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
					}
				});
	};

	var readLimit = function() {
		/**
		 * limiteGeo variable obtenida del jsp.
		 */
		var cade0 = limiteGeo.substring(limiteGeo.indexOf('(') + 1, limiteGeo.indexOf(')'));
		var cade1 = limiteGeo.substring(limiteGeo.indexOf(')') + 3,
				limiteGeo.length - 1);
		var data = cade0.split(',');
		var data1 = cade1.split(',');
		var arr = new Array();
		arr.push(data);
		arr.push(data1);
		return arr;
	};

	this.refreshFillZonas=function(map,zona){
		Ext.each(listLimitZonas,function(item,i){
		var arr=item.poligono.split(',');
		var arrPoints = new Array();
		var myPolygon2=null;
		Ext.each(arr,function(o){
			var arrTemp = o.split(' ');
			var point = new google.maps.LatLng(arrTemp[1], arrTemp[0]);
			arrPoints.push(point);
		});	

		if(i!=x){
			myPolygon2 = new google.maps.Polygon({
				path :arrPoints,
				strokeColor : "#336600",
				strokeWeight : 1,
				fillColor: '#F5F5F5',
				fillOpacity: 0.8
			});
			myPolygon2.setMap(map);
		}else{
			new google.maps.Polygon({
				path :arrPoints,
				strokeColor : "#FF8000",
				strokeWeight : 2,
				fillOpacity: 0
			}).setMap(map);
		 }
		});
	};
	
	var fillZonas=function(map,zona){
		Ext.each(listLimitZonas,function(item,i){
			var arr=item.poligono.split(',')
			var arrPoints = new Array();
			var poligonoZona=null;
			Ext.each(arr,function(o){
				var arrTemp = o.split(' ');
				var point = new google.maps.LatLng(arrTemp[1], arrTemp[0]);
				arrPoints.push(point);
						
			});	
			if(zona.length==2){
				zona='0'+zona;
			}
			
			
		
			if(item.zona!=zona){
			poligonoZona = new google.maps.Polygon({
				path :arrPoints,
				strokeColor: '#000000',
				strokeOpacity: 0.5,
				strokeWeight : 1,
				fillColor: '#CACACA',
				fillOpacity: 0.7,
			
				visible:true
			});

			}else{
				
				poligonoZona = new google.maps.Polygon({
					path :arrPoints,
					strokeColor : "#FF8000",
					strokeWeight : 2,
					fillOpacity: 0,
					visible:true
				});
	
			}

		poligonoZona.setMap(map);
				
		attachPolygonInfoWindow(poligonoZona,'<strong style="color:#000;">Zona '+item.zona+'</strong>');
			
		
		});
		
	};
	
	var attachPolygonInfoWindow = function(polygon, html) {
		polygon.infoWindow = new google.maps.InfoWindow({
					content : html
				});
		google.maps.event.addListener(polygon, 'mouseover', function(e) {
					var latLng = e.latLng;
				
					polygon.infoWindow.setPosition(latLng);
					polygon.infoWindow.open(map);
				});
		google.maps.event.addListener(polygon, 'mouseout', function() {
				
					polygon.infoWindow.close();
				});
	}
	
	var fillPolylines = function(data, map) {
		var arrPoligono = data;
		arrPoints = new Array();
		var arrTemp = null;
		var point = null;
		var myPolygon = null;
		for (var i = 0; i < arrPoligono.length; i++) {
			point = null;
			arrTemp = null;
			arrTemp = arrPoligono[i].split(' ');
			point = new google.maps.LatLng(arrTemp[1], arrTemp[0]);
			arrPoints.push(point);
		}
		myPolygon = new google.maps.Polyline({
					path : arrPoints,
					strokeColor : "#118833",
					strokeOpacity : 1.0,
					strokeWeight : 1,
					fillOpacity : 0.0
				});
		myPolygon.setMap(map);
	};

	var drawgables = function(map, idPanel, dragable, notRoute) {

		directionsDisplay = new google.maps.DirectionsRenderer({
					'preserveViewport' : true,
					'draggable' : dragable
				});
		directionsDisplay.setMap(map);
		if (idPanel) {
			directionsDisplay.setPanel(document.getElementById(idPanel));
		}
		google.maps.event.addListener(directionsDisplay, 'directions_changed',
				function() {
					if (currentDirections) {
						oldDirections.push(currentDirections);

					}
					arrPoints = new Array();

					var legs = directionsDisplay.getDirections().routes[0].legs[0];

					arrPoints.push(legs.start_location.lng() + ' '
							+ legs.start_location.lat());

					var arrSteps = legs.steps;

					for (var ii = 0; ii < arrSteps.length; ii++) {
						arrPoints.push(arrSteps[ii].lat_lngs[1].lng() + ' '
								+ arrSteps[ii].lat_lngs[1].lat());
					}

					arrPoints.push(legs.end_location.lng() + ' '
							+ legs.end_location.lat());

					currentDirections = directionsDisplay.getDirections();

					if (initChange) {
						var arrTemporal = new Array();

						for (var t = 0; t < directionsDisplay.getDirections().routes[0].overview_path.length; t++) {

							arrTemporal
									.push(directionsDisplay.getDirections().routes[0].overview_path[t]
											.lng()
											+ ' '
											+ directionsDisplay.getDirections().routes[0].overview_path[t]
													.lat());

						}

						setArrayChange(arrTemporal);
						isChange = true;

					}
				});
				
		if (!notRoute) {
			calcRoute();
		}
		
	};

	function setArrayChange(arrChange) {

		changAarryPoints = arrChange;
	}
	this.getArrayChange = function() {
		return changAarryPoints;

	}
	this.setInitChange = function(v) {

		initChange = v

	}

	this.isRutaChange = function() {
		return isChange;

	}
	var fillMarker = function(map, data, parameters) {

		var arrPoint = data.punto.split(' ');

		var myLatlng = new google.maps.LatLng(arrPoint[1], arrPoint[0]);
		setPunto([arrPoint[1]+' '+arrPoint[0]])
		var jMarker = {
			position : myLatlng,
			raiseOnDrag : true,
			labelContent : data.nom,
			labelAnchor : new google.maps.Point(22, 0),
			labelClass : "text-small-geomap",
			labelVisible : false,
			draggable : parameters.dragable
		};
		
		if(parameters.icon){
			jMarker.icon=parameters.icon;
		}
		jMarker = $.extend(jMarker, data);
		var marker = new MarkerWithLabel(jMarker);
		google.maps.event.addListener(marker, 'click', function() {

			if (parameters.function_click) {
				new parameters.function_click(marker);
			}

			if(data.descripcion){
			var contentString = data.descripcion;

			if (parameters.showLatLng) {
				contentString += '<b style="color: #486899;font-size:12px;">Latitud:</b> <span style="color:#666;font-size:12px;">'
						+ marker.position.lat()
						+ '</span><br /><b style="color: #486899;font-size:12px;">Longitud:</b> <span style="color:#666;font-size:12px;">'
						+ marker.position.lng() + '</span>';
			}

			var infowindow = new google.maps.InfoWindow({
						content : contentString
					});
			
			if(parameters){		
				if(parameters.fnDomReady){
			google.maps.event.addListener(infowindow, 'domready', parameters.fnDomReady);
				}
				
				google.maps.event.addListener(infowindow,'closeclick',parameters.fnClickClose || function(){});
				
			}

			infowindow.open(map, marker);
			}
		});
		google.maps.event.addListener(marker, 'dragend', function(ev) {

		});
		markersArray.push(marker);
		return marker;
	};

	function fillPointBusiness(listBusiness, map, parameters) {
		var data;

		deleteOverlays();
		if (markerClusterer){
			clearClusters();
		}

		if(listBusiness){
		for (var jj = 0; jj < listBusiness.length; jj++) {

			data = listBusiness[jj];
			if(parameters.isModificateMarker){
				var tempArr=data.punto.split(' ');
				var myLatlng = new google.maps.LatLng(tempArr[1], tempArr[0]);
				addMarker(myLatlng);
			
			}else{
				if (data && data.punto) {
				
				fillMarker(map, data, parameters);
			}
			}
			
		
		}
		}
		
		var zoom_marker_init=null;
		if(optionsInit.tamZoom){
			zoom_marker_init=optionsInit.tamZoom;
		}
		
		refreshMap(zoom_marker_init-0.5);
		
		if(!parameters.isModificateMarker){
		if (map.getZoom() >= 20) {
			for (var i = 0; i < markersArray.length; i++) {
				markersArray[i].labelVisible = true;
			}
		} else {
			for (var i = 0; i < markersArray.length; i++) {
				markersArray[i].labelVisible = false;
			}
		}
	}
	}

	function clearOverlays() {
		setAllMap(null);
	}

	function deleteOverlays() {

		clearOverlays();
		markersArray = [];
	}
	function clearClusters() {

		markerClusterer.clearMarkers();
	}
	function refreshMap(zoom) {
		markerClusterer = new MarkerClusterer(map, markersArray, {
					maxZoom : zoom || 20
				});
	}

	var fillPolygons = function(data, map) {

		var arr = data;
		var arrPoints = null;
		var arrTemp = null;
		var point = null;
		var arrPoligono = null;
		var myPolygon = null;
		for (var ii = 0; ii < arr.length; ii++) {
			arrPoints = new Array();
			arrPoligono = arr[ii].poligono.split(',');
			for (var i = 0; i < arrPoligono.length; i++) {
				point = null;
				arrTemp = null;
				arrTemp = arrPoligono[i].split(' ');
				point = new google.maps.LatLng(arrTemp[1], arrTemp[0]);
				arrPoints.push(point);
			}

			myPolygon = new google.maps.Polygon({
						path : arrPoints,
						strokeColor : "#FF0026",
						strokeOpacity : 1.0,
						strokeWeight : 0.005,
						fillOpacity : 0.0
					});
			myPolygon.setMap(map);
		}
	};
	

	var addMarker = function(location) {
		var addMarker_ = new google.maps.Marker({
					position : location,
					map : map,
					labelVisible : false,
					draggable : true
				});

		google.maps.event.addListener(addMarker_, 'dblclick', function() {
					markersArray.pop(addMarker_)
					addMarker_.setMap(null);

				});
				
	    google.maps.event.addListener(addMarker_, "dragend", function(event) {

	    	markersArray.pop(_addMarker_);
	    	addMarker_.position.lat=event.latLng.lat;
	    	addMarker_.position.lng=event.latLng.lng;
			markersArray.push(addMarker_);
	    	
		});
						
		markersArray.push(addMarker_);
	}

	this.getMarkerArrays=function(){
	
		return markersArray;
		
	}
	
	this.initialize = function(config) {
	
		
		try {
			var marker;
			var myLatlng = new google.maps.LatLng(config.lat, config.lon);
			var myOptions = {
				zoom : config.tamZoom || 15,
				center : myLatlng,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			optionsInit = config;
			map = new google.maps.Map(document.getElementById(config.idContent), myOptions);
			google.maps.event.trigger(map, 'resize');
			
				
			
			// init point
			if (config.markerDefault) {
				marker = setMarker(map, config.lat, config.lon,config.dragable);
				
			} else {
				marker = new google.maps.Marker({
							map : map,
							animation : google.maps.Animation.DROP,
							draggable : config.dragable
						});
				

				console.log(marker);
				
			}
			
			setPunto([config.lon + ' ' + config.lat]);

			google.maps.event.addListener(marker, 'dragend', function(event) {																		
						setPunto([event.latLng.lng() + ' ' + event.latLng.lat()]);						
						try{
							var pto=event.latLng.k+','+event.latLng.D;
							if(Ext.getCmp('aproxCallesExterno')){								
								 $.ajax({
					                    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pto+'&sensor=true',
					                    dataType: 'json',
					                    cache: false,
					                    success: function(data){					        
					                    	Ext.getCmp('aproxCallesExterno').setValue(data.results[0].formatted_address);
					                    }
					                }); 
									
							}	
						}catch (e) {
							
						}
						
						

					});

			google.maps.event.addListener(map, 'zoom_changed', function() {
						zoomChangeBoundsListener = google.maps.event
								.addListener(map, 'bounds_changed', function(
												event) {
										});

					});

			google.maps.event.addListener(map, 'drag', function() {
				
			});
			google.maps.event.addListener(map, 'dblclick', function(event) {
				
			});
			google.maps.event.addListener(map, 'click', function(event) {
						if (config.paramFillPoints.isModificateMarker) {
							
							deleteOverlays();
							addMarker(event.latLng);
							
						}
												
					});

			if (!config.hiddenDirecciones) {
				google.maps.event.addListener(marker, "dragend", function() {
							try {
								Ext.getCmp(config.idContent + 'latitud').setValue(marker.getPosition().lat());
								Ext.getCmp(config.idContent + 'longitud').setValue(marker.getPosition().lng());
								Ext.getCmp(config.idContent + 'lbLatitud').setText(marker.getPosition().lat());
								Ext.getCmp(config.idContent + 'lbLongitud').setText(marker.getPosition().lng());
							} catch (e) {
							}
						});
				try {
					if (Ext.getCmp(config.idContent + 'latitud')) {
						Ext.getCmp(config.idContent + 'latitud').setValue(marker.getPosition().lat());
						Ext.getCmp(config.idContent + 'longitud').setValue(marker.getPosition().lng());
						Ext.getCmp(config.idContent + 'lbLatitud').setText(marker.getPosition().lat());
						Ext.getCmp(config.idContent + 'lbLongitud').setText(marker.getPosition().lng());
					}
				} catch (e) {

				}
			}
			
		
			var arrLimit = readLimit();
			fillPolylines(arrLimit[0], map);
			fillPolylines(arrLimit[1], map);	
			drawgables(map, config.idDirecciones, config.dragable,config.notRoute);
			
			if (config.ruta) {
				fillRoute(config.ruta, config.idDirecciones);
			}
			
			try {
				if (Ext.getCmp(config.idContent + 'latitud')) {
					Ext.getCmp(config.idContent + 'latitud').setValue(marker.getPosition().lat());
					Ext.getCmp(config.idContent + 'longitud').setValue(marker.getPosition().lng());
					Ext.getCmp(config.idContent + 'lbLatitud').setText(marker.getPosition().lat());
					Ext.getCmp(config.idContent + 'lbLongitud').setText(marker.getPosition().lng());
				}
			} catch (e) {

			}

			//atomas
			/*



			if(marker) markersArray.push(marker);*/
			
			if (config.fillPointBusiness) {
				fillPointBusiness(config.data, map, config.paramFillPoints);
			}
		
		} catch (e) {

		}

		if(config.isZonificacion){

			fillZonas(map,config.zona);
		}
	};

	this.pintarPuntos = function(data, parametros) {
		try {
			fillPointBusiness(data, map, parametros);

			if (parametros.zoom) {

				map.setZoom(parametros.zoom);

			}
		} catch (e) {

		}
	}

	this.getArrPoint = function() {

		return arrPoints;
	}

	this.setArrPoint = function(a) {

		arrPoints = a;
	}

	this.printRuta = function(data, idPanelDireccion) {
		directionsDisplay.setMap(null);
		directionsDisplay.setMap(map);
		if (idPanelDireccion) {
			directionsDisplay.setPanel(document
					.getElementById(idPanelDireccion));
		}
		var arrLinePoints = data;

		if (arrLinePoints.length == 0)
			return;
		var arrStart = arrLinePoints[0].split(' ');
		var arrEnd = arrLinePoints[arrLinePoints.length - 1].split(' ');
		var start = new google.maps.LatLng(arrStart[1], arrStart[0]);
		var end = new google.maps.LatLng(arrEnd[1], arrEnd[0]);

		var waypoints = new Array();

		var pointWay = null;
		var arrWay = null;

		for (var ii = 1; ii < (arrLinePoints.length - 1); ii++) {
			arrWay = arrLinePoints[ii].split(' ');
			if (ii % 2 == 0 && ii < 17) {
				pointWay = new google.maps.LatLng(arrWay[1], arrWay[0]);

				waypoints.push({
							location : pointWay,
							stopover : true
						});
			}
		}

		var request = {
			origin : start,
			destination : end,
			waypoints : waypoints,
			optimizeWaypoints : true,
			travelMode : google.maps.DirectionsTravelMode.DRIVING
		};

		directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {

						directionsDisplay.setDirections(response);

					}
				});

	}

	function fillRoute(data, idPanelDireccion) {

		directionsDisplay.setMap(null);
		directionsDisplay.setMap(map);
		if (idPanelDireccion) {
			directionsDisplay.setPanel(document
					.getElementById(idPanelDireccion));
		}
		var arrLinePoints = data.split(',');
		if (!arrLinePoints || arrLinePoints.length < 1)
			return;
		var arrStart = arrLinePoints[0].split(' ');
		var arrEnd = arrLinePoints[arrLinePoints.length - 1].split(' ');
		var start = new google.maps.LatLng(arrStart[1], arrStart[0]);
		var end = new google.maps.LatLng(arrEnd[1], arrEnd[0]);

		var waypoints = new Array();
		countWayPoints = 0;
		var pointWay = null;
		var arrWay = null;
		for (var ii = 1; ii < (arrLinePoints.length - 1); ii++) {
			arrWay = arrLinePoints[ii].split(' ');
			if (ii % 2 == 0 && ii < 17) {
				pointWay = new google.maps.LatLng(arrWay[1], arrWay[0]);
				waypoints.push({
							location : pointWay,
							stopover : true
						});
			}
		}

		var request = {
			origin : start,
			destination : end,
			waypoints : waypoints,
			optimizeWaypoints : false,
			travelMode : google.maps.DirectionsTravelMode.DRIVING
		};

		directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {

						directionsDisplay.setDirections(response);

					}
				});

	}
	
	this.viewMapaPunto = function(desLatitud,desLongitud,edit,msgInfoWindow,xtypeBtn){





		var arrBtn = new Array();
		arrBtn.push({
				xtype : 'button',
				text : 'Cerrar Ventana',
				handler : function(){
					Ext.getCmp('winTraza').close();
				}
		});
		
		if(xtypeBtn!=null) arrBtn.push(xtypeBtn);
			
			 
			
		ventanaPuntoGeo = Ext.create('Ext.window.Window',{title:'Punto Geografico de Referencia',
			closable:false,
			id:'winTraza',
			modal : true,
			layout : 'fit',
			autoScroll : true,
			markersArray :null,
			maximizable : false,
			closable : true,
			setMarkersArray:function(markersArray){
				this.markersArray = markersArray;
			},
			getMarkersArray:function(){
				return this.markersArray;
			},
			items:[{
					autoWidth : true,
					autoHeigth : true,
					frame : true,
					autoScroll : false,
					bodyStyle : 'padding:3px 3px 3px 15px;',
					id : "form_mapear",
					items : [{
					html : '<div id="map_canvas" style="width:550px;height:350px;"></div>'
				    }]
			}],
			width:700,
			height:520,
			parametros:{},
			buttons : arrBtn
		});
		ventanaPuntoGeo.on('close',function(w){});
		ventanaPuntoGeo.show();
		new buildMapa(desLatitud,desLongitud,edit,msgInfoWindow);	
	};
	
	function placeMarker(location,image,shadow,shape, msgInfoWindow){

		  var marker = new google.maps.Marker({
		      position: location, 
		      map: map
		  });
		  if(msgInfoWindow){
		  	if(infowindow) 
		  		infowindow.close();
			  	infowindow = new google.maps.InfoWindow({
				  	content: msgInfoWindow,
				    position: location
				  });
			 	infowindow.open(map);
		  }
		  
		  marker.setTitle('');
		  google.maps.event.addListener(marker, 'click', function(event) {
			  deleteOverlays();
			  new placeMarker(event.latLng,image,shadow,shape);
			  });
		  markersArray.push(marker);
	      map.setCenter(location);
	      Ext.getCmp('winTraza').setMarkersArray(markersArray);
	}
	
	
	function buildMapa(latitud,longitud,edit,msgInfoWindow){

		map = null;
		infowindow = null;
		markersArray = [];
		var image = new google.maps.MarkerImage('librerias/lib/publico/images/iconomap.png',
			      new google.maps.Size(28, 28),
			      new google.maps.Point(0,0),
			      new google.maps.Point(0, 28));
		var shadow = new google.maps.MarkerImage('librerias/lib/publico/images/iconomapsombra.png',
			      new google.maps.Size(28, 28),
			      new google.maps.Point(0,0),
			      new google.maps.Point(0, 28));
		 
		var shape = {
			      coord: [1, 1, 1, 28, 18, 28, 18 , 1],
			      type: 'poly'
			  };
		 
		//ubicando sector
		var myLatLng = new google.maps.LatLng(-12.121084126455873, 77.02935755252838);
		var myOptions = {
		    zoom: 14,
		    center: myLatLng,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		};  
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		var arrLimit = readLimit();
		new fillPolylines(arrLimit[0], map);
		new fillPolylines(arrLimit[1], map);
			
		if(latitud && longitud){
			var myLatLngR = new google.maps.LatLng(latitud, longitud);
			new placeMarker(myLatLngR,image,shadow,shape,msgInfoWindow);
		  }
		  
		if(edit)
		 	google.maps.event.addListener(map, 'click', function(event) {		 		
		 		deleteOverlays();
		 		new placeMarker(event.latLng,image,shadow,shape,msgInfoWindow);
			});
	}
}
