var center = new google.maps.LatLng(-12.121446, -77.030175);
var INTERVALO_TIEMPO = (60000)*2;	
var arrPuntosGlobales = [];
//var markers = [];
var iterator = 0;
var map;

var mapPlayer;



var flagWaze = false;
var flagTetra = false;
var flagVoxiva = false;
var flagReach = false;
var flagPos = false;
var markerClusterer = null;
var wazeReady = false;
var dolphinReady = false;
var ENABLE_LOOP = true;


var vArea = null;
var vTpoOperador = null;

var capaAreas = new Array();
var capaZonas = new Array();
var capaSubzonas = new Array();

var isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { 
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
}


var wazeVal = false;
var dolphinVal = false;
var arrJams = [];
var arrWazeExistentes = [];
var arrTempUUID = [];
var initSizeIcon = new google.maps.Size(32, 35);


if(isMobile.any()){ initSizeIcon = new google.maps.Size(22, 25); }


var iconScale2 = new google.maps.Size(32, 35);
var iconScale3 = new google.maps.Size(45, 48);

var procesandoWaze = false;
var procesandoTetra = false;
var procesandoVoxiva = false;
var procesandoCambista = false;
var procesandoReach = false;
var procesandoPos = false;

var fechaTmp = null;




function existArraWaze(key){
		var existe = false;
		for(var i = 0 ; i < arrWazeExistentes.length ; i++){
			if(arrWazeExistentes[i].key == key){
				existe = true;
				break;
			}
		}
		return existe;
}


function deleteUUID(key){
		for(var i = 0 ; i < arrWazeExistentes.length ; i++){
			if(arrWazeExistentes[i].key == key){
				arrWazeExistentes.splice(key,1);
				break;
			}
		}
}


$('.menu--link').click(function (){
		var me = this ;
		var activo;
		if($(me).attr('class').indexOf('menu-link-activo')>=0){
					$(me).removeClass('menu-link-activo');
					activo = false;
			}else{
					activo = true;
					$(me).addClass('menu-link-activo');
			}
		var tipos = $('.menu-link-activo');
		var arrSelecteds = [];
		$.each(tipos,function(i,t){
			arrSelecteds.push($(t).attr('data-tipo'));
		});
		$.each(MapaIncidencias.markers,function(i,m){
			if(arrSelecteds.indexOf(m.tipo)>=0){
				m.marker.setVisible(true);
				if(m.tipo == 'waze'){
					$.each(MapaIncidencias.polylines,function(a,b){
						b.setVisible(true);
					});
				}
			}else{
				m.marker.setVisible(false);
				if(m.tipo == 'waze'){
					$.each(MapaIncidencias.polylines,function(a,b){
						b.setVisible(false);
					});
				}
			}
		});
		$.each(MapaIncidencias.markersVigilantes,function(i,m){
			if(arrSelecteds.indexOf(m.tipo)>=0){
				m.marker.setVisible(true);
			}else{
				m.marker.setVisible(false);
			}
		});
		$.each(MapaIncidencias.markersEstacionamientos,function(i,m){
			if(arrSelecteds.indexOf(m.tipo)>=0){
				m.marker.setVisible(true);
			}else{
				m.marker.setVisible(false);
			}
		});
		$.each(MapaIncidencias.markersCambistas,function(i,m){
			if(arrSelecteds.indexOf(m.tipo)>=0){
				m.marker.setVisible(true);
			}else{
				m.marker.setVisible(false);
			}
		});
		$.each(MapaIncidencias.markersReach,function(i,m){
			if(arrSelecteds.indexOf(m.tipo)>=0){
				m.marker.setVisible(true);
			}else{
				m.marker.setVisible(false);
			}
		});
});


setInterval(function(){
		$('#mapPlayer').css('height',($(window).height()-50)+'px');
},1000);


var flightPathAprox = null;
var infowindowAprox = null; 


var MapaIncidencias = {
		
		setMarkerLeido:function(idIncidencia,tpoOperador){
				if (tpoOperador==ROLROL){
					$.ajax({
					    url: PATH_PROYECTO_BASE+"mapa-incidencia/set-estado-marker-mapa2",
					    dataType: "json",
					    data:{idIncidencia:idIncidencia}
					});
				}
		},
		
		
		setCenterMap:function(punto,data){
				var center = new google.maps.LatLng(parseFloat(punto.split(' ')[1]), parseFloat(punto.split(' ')[0]));
				MapaIncidencias.mapPlayer.setCenter(center);
				MapaIncidencias.mapPlayer.setZoom(18);
				var puntosCuadra = data.poligono.split(',');
				var cordenadasSelected = [];
				$.each(puntosCuadra,function(i,item){
					cordenadasSelected.push({lat: parseFloat(item.split(' ')[1]), lng: parseFloat(item.split(' ')[0])});
				});
				if(flightPathAprox){
					flightPathAprox.setMap(null);
				}
//				flightPathAprox = new google.maps.Polyline({
//				    path: cordenadasSelected,
//				    geodesic: true,
//				    strokeColor: '#336699',
//				    strokeOpacity: 0.8,
//				    strokeWeight: 8
//				});
//				flightPathAprox.setMap(MapaIncidencias.mapPlayer);
//				if(infowindowAprox){
//					infowindowAprox.close();
//				}
//				infowindowAprox = new google.maps.InfoWindow({
//					content: data.toponimia+' CDRA. '+data.cdra
//				});
//				infowindowAprox.setPosition(center);
//				infowindowAprox.open(MapaIncidencias.mapPlayer);	
//			    google.maps.event.addListener(flightPathAprox, 'click', function(event) {
//					infowindowAprox.setPosition(event.latLng);
//					infowindowAprox.open(MapaIncidencias.mapPlayer);
//				});
		},
				
				
		redimensionIcons:function(arrMarkers){
				$.each(arrMarkers , function(key,value){
					if(value.marker.icon.size){
						if(MapaIncidencias.mapPlayer.getZoom()<=16){
							var newIcon = {
							    url: value.marker.icon.url, // url
							    scaledSize: initSizeIcon, // scaled size
							    origin: null, // origin
				    			anchor: null // anchor
							};
							value.marker.setIcon(newIcon);
						}else if(MapaIncidencias.mapPlayer.getZoom() > 16 && MapaIncidencias.mapPlayer.getZoom() <= 17){	
							var newIcon = {
							    url: value.marker.icon.url, // url
							    scaledSize: iconScale2, // scaled size
							    origin: null, // origin
								anchor: null // anchor
							};
							value.marker.setIcon(newIcon);
						}else{
							var newIcon = {
							    url: value.marker.icon.url, // url
							    scaledSize: iconScale3, // scaled size
							    origin: null, // origin
				    			anchor: null // anchor
							};
							value.marker.setIcon(newIcon);
						}
					}
				})
		},
		
		markersWaze:[],
		polylines:[],
		markersTetra:[],
		markers:[],
		markersVoxiva:[],
		markersVigilantes:[],
		markersEstacionamientos:[],
		markersCambistas:[],
		markersCamaras:[],
		markersReach:[],
		markersPos:[],
		
		init:function(){
				setInterval(function(){
					if($('.gm-style-iw').length>0){
							ENABLE_LOOP = false;
					}else{
							ENABLE_LOOP = true;
					}
				}, 1000);
				
				
				/////////////////////////////////////////////////////////////////////////////////
				
				var styledMap1 = new google.maps.StyledMapType(style1, { name: "Contraste" });
//				var styledMap2 = new google.maps.StyledMapType(style2, { name: "S2" });
//				var styledMap3 = new google.maps.StyledMapType(style3, { name: "S3" });
//				var styledMap4 = new google.maps.StyledMapType(style4, { name: "S4" });
//				var styledMap5 = new google.maps.StyledMapType(style5, { name: "S5" });
				var styledMap6 = new google.maps.StyledMapType(style6, { name: "Táctico" });
//				var styledMap7 = new google.maps.StyledMapType(style7, { name: "S7" });
//				var styledMap8 = new google.maps.StyledMapType(style8, { name: "S8" });
//				var styledMap9 = new google.maps.StyledMapType(style9, { name: "S9" });
//				var styledMap10 = new google.maps.StyledMapType(style10, { name: "S10" });
				
				var osmMapType = new google.maps.ImageMapType({
			         	getTileUrl: function(coord, zoom) {
                		return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
            		},
            		tileSize: new google.maps.Size(256, 256),
            		name: "OSM",
            		maxZoom: 18
        		});
       
				////////////////////////////////////////////////////////////////////////////////////
				
//				google.maps.visualRefresh = true;
				
				MapaIncidencias.mapPlayer = new google.maps.Map(document.getElementById('map-player-canvas'), {
					zoom: 15,
					center: new google.maps.LatLng(-12.121446, -77.030175),
//			        mapTypeId: google.maps.MapTypeId.ROADMAP
//					disableDefaultUI: true,
//					navigationControl: true,
//					navigationControlOptions: {
//						position: google.maps.ControlPosition.TOP_RIGHT
//					},
			        mapTypeControlOptions: {
//			        	style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
						style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
						position:google.maps.ControlPosition.LEFT_TOP,
//						position:google.maps.ControlPosition.BOTTOM,
						mapTypeIds: [
			        			google.maps.MapTypeId.ROADMAP, 
			        			'style1',
//			        			'style2',
//			        			'style3',
//			        			'style4',
//			        			'style5',
			        			'style6',
//			        			'style7',
//			        			'style8',
//			        			'style9',
//			        			'style10',
			        			'OSM'
			        		]
			        },
//			        
				});
				
				////////////////////////////////////////
				MapaIncidencias.mapPlayer.mapTypes.set('style1', styledMap1);
//				MapaIncidencias.mapPlayer.mapTypes.set('style2', styledMap2);
//				MapaIncidencias.mapPlayer.mapTypes.set('style3', styledMap3);
//				MapaIncidencias.mapPlayer.mapTypes.set('style4', styledMap4);
//				MapaIncidencias.mapPlayer.mapTypes.set('style5', styledMap5);
				MapaIncidencias.mapPlayer.mapTypes.set('style6', styledMap6);
//				MapaIncidencias.mapPlayer.mapTypes.set('style7', styledMap7);
//				MapaIncidencias.mapPlayer.mapTypes.set('style8', styledMap8);
//				MapaIncidencias.mapPlayer.mapTypes.set('style9', styledMap9);
//				MapaIncidencias.mapPlayer.mapTypes.set('style10', styledMap10);
				MapaIncidencias.mapPlayer.mapTypes.set('OSM', osmMapType);
				
				MapaIncidencias.mapPlayer.setMapTypeId('style1');
				//////////////////////////////////////
				
				//Defining control parameters
                var controlDiv = document.createElement('div');
                controlDiv.className = 'mapControl';
                controlDiv.id = 'mapCoordinates';
                controlDiv.innerHTML = 'Lat/Lng: 0.00 / 0.00';
                controlDiv.style = 'color:white';

                //Creating a control and adding it to the map.
                MapaIncidencias.mapPlayer.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controlDiv);

                //Listening the map for mousemove event to show it in control.
                google.maps.event.addListener(MapaIncidencias.mapPlayer, 'mousemove', function(e) {
                    var coordinateText = 'Lat/Lng: ' + e.latLng.lat().toFixed(9) + ' / ' + e.latLng.lng().toFixed(9);
                    controlDiv.innerHTML = coordinateText;
                });
                
				google.maps.event.addListener(MapaIncidencias.mapPlayer, 'idle', function() {
					$('#actualizarBtn').css('z-index','999');
				});
				google.maps.event.addListener(MapaIncidencias.mapPlayer, 'click', function(event) {});
				google.maps.event.addListener(MapaIncidencias.mapPlayer, 'bounds_changed', function() {});
				
				
				MapaIncidencias.ajaxTetraTimelap();
				
		},
		
				
		getVisible:function(tipo){
				var tipos = $('.menu-link-activo');
				var arrSelecteds = [];
				var visible = true;
				$.each(tipos,function(i,t){
					arrSelecteds.push($(t).attr('data-tipo'));
				});
				if(arrSelecteds.indexOf(tipo)>=0){
					visible = true;
				}else{
					visible = false;
				}
				return visible;
		},
		
				
		addMarker:function(options){
				var image = options.icon;
				var btnAddVoxWaze = '';
//				if(options.objWaze  && (options.objWaze && options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('ROAD_CLOSED_HAZARD')>-1 || options.objWaze.subtype.indexOf('HAZARD_')>-1 || options.objWaze.subtype.length==0) && (options.objWaze.subtype!='HAZARD_ON_ROAD_CONSTRUCTION')){
//					btnAddVoxWaze = '<br><div style="margin-top:10px;"><button data-cor-y="'+options.objWaze.location.y
//									+'" data-cor-x="'+options.objWaze.location.x
////									+'" class="btn btn-warning btn-sm saveWazeVoxiva" '
//									+'" class="btn btn-info btn-sm saveWazeVoxiva" id="'+options.objWaze.location.y+'_'+options.objWaze.location.x+'_btn_update_voxiva" '  
////									+ 'data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" '
//									+'style="display:inline;margin-right:20px">Generar Incidencia</button></div>';
//				}
//				if(options.tipo == 'waze' && ROLROL!=1001 && ROLROL!=1002 && ROLROL!=1003){
				if(options.tipo == 'waze' && (ROLROL==null || ROLROL=="" || ROLROL<1001) && ROL!=992){
					if(options.objWaze  && (options.objWaze && options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('ROAD_CLOSED_HAZARD')>-1 || options.objWaze.subtype.indexOf('HAZARD_')>-1 || options.objWaze.subtype.length==0) && (options.objWaze.subtype!='HAZARD_ON_ROAD_CONSTRUCTION')){
						btnAddVoxWaze = '<br><div style="margin-top:10px;"><button data-cor-y="'+options.objWaze.location.y
										+'" data-cor-x="'+options.objWaze.location.x
//										+'" class="btn btn-warning btn-sm saveWazeVoxiva" '
										+'" class="btn btn-info btn-sm saveWazeVoxiva" id="'+options.objWaze.location.y+'_'+options.objWaze.location.x+'_btn_update_voxiva" '  
//										+ 'data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" '
										+'style="display:inline;margin-right:20px">Generar Incidencia</button></div>';
					}
				}
				var infowindow = new google.maps.InfoWindow({
					index: options.index,
					content: options.html+btnAddVoxWaze
				});
				if(options.tipo == 'waze' && (options.objWaze && options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('ROAD_CLOSED_HAZARD')>-1 || options.objWaze.subtype.indexOf('HAZARD_')>-1 || options.objWaze.subtype.length==0) && (options.objWaze.subtype!='HAZARD_ON_ROAD_CONSTRUCTION')){
					google.maps.event.addListener(infowindow, 'domready', function (e){
						var w = infowindow;
						var geo = this;
						$('.saveWazeVoxiva').unbind().click(function(){
				    		var opt = +options.objWaze.location.y+' '+options.objWaze.location.x;
					    	IncidenciaService.openFormRegistroNuevo({
	                    		title:'Registrar Incidencia',
	                    		optForm: opt
	                    	});
					    	Ext.id();
							return false;
						});
					});
				}
				var visible = true;
				switch(options.tipo){
					case 'waze':		visible = MapaIncidencias.getVisible('waze'); break;
					case 'voxiva':		visible = MapaIncidencias.getVisible('voxiva');break;
					case 'tetra1':		visible = MapaIncidencias.getVisible('tetra1'); break;
					case 'tetra2':		visible = MapaIncidencias.getVisible('tetra2'); break;
					case 'tetra3':		visible = MapaIncidencias.getVisible('tetra3'); break;
					case 'tetra4':		visible = MapaIncidencias.getVisible('tetra4'); break;
					case 'tetra5':		visible = MapaIncidencias.getVisible('tetra5');	break;	
					case 'tetra6':		visible = MapaIncidencias.getVisible('tetra6');	break;				
					case 'tetra7':		visible = MapaIncidencias.getVisible('tetra7'); break;
					case 'tetra8':		visible = MapaIncidencias.getVisible('tetra8'); break;
					case 'tetra9':		visible = MapaIncidencias.getVisible('tetra9'); break;
					case 'tetra10':		visible = MapaIncidencias.getVisible('tetra10'); break;
					case 'vigilante1':	visible = MapaIncidencias.getVisible('vigilante1'); break;
					case 'vigilante2':	visible = MapaIncidencias.getVisible('vigilante2'); break;
					case 'vigilante3':	visible = MapaIncidencias.getVisible('vigilante3'); break;
				}
				var icon;
				if(MapaIncidencias.mapPlayer.getZoom()<=16){	
					icon = {
						    url: image, // url
						    scaledSize: initSizeIcon, // scaled size
						    origin: null, // origin
			    			anchor: null // anchor
					};
				}else if(MapaIncidencias.mapPlayer.getZoom() > 16 && MapaIncidencias.mapPlayer.getZoom() <= 17){	
					icon = {
					    url: image, // url
					    scaledSize: iconScale2, // scaled size
					    origin: null, // origin
		    			anchor: null // anchor
					};
				}else if(MapaIncidencias.mapPlayer.getZoom() > 17){
					icon = {
					    url: image, // url
					    scaledSize: iconScale3, // scaled size
					    origin: null, // origin
		    			anchor: null // anchor
					};
				}
				var marker = new google.maps.Marker({
					position: options.punto,
					map: MapaIncidencias.mapPlayer,
					draggable: false,
					visible:visible,
			        mapTypeId: google.maps.MapTypeId.ROADMAP,
			        icon:icon
				});
				var isAnimation = false;
				
				if(options.tipo == 'waze' ){
					if(options.isFirstCall){
						arrWazeExistentes.push({key:options.uuid});
					}else{
						if(!existArraWaze(options.uuid)){
							marker.setAnimation(google.maps.Animation.BOUNCE);
							isAnimation = true;
							arrWazeExistentes.push({key:options.uuid});
						}
					}
				}
				var objMarker = {
					marker : marker,
					tipo:options.tipo,
					punto:options.punto,
					uuid:options.uuid
				}
				MapaIncidencias.markers.push(objMarker);
				if(options.tipo == 'waze'){
					MapaIncidencias.markersWaze.push(objMarker);
				}
				if(options.tipo.indexOf('tetra')>=0){
					MapaIncidencias.markersTetra.push(objMarker);
				}
				if(options.isRadioTetra){
					google.maps.event.addListener(marker, 'click', function () {
						setTimeout(function () {
				    		google.maps.event.addListener(infowindow, 'domready', function () {
								$('#close-info-window-x-' + this.index).click(function () {
									infowindow.close();
								});
							});
							infowindow.open(MapaIncidencias.mapPlayer, marker);
						}, 200);
					});
				}else{
					google.maps.event.addListener(marker, 'click', function () {
						if(isAnimation){ marker.setAnimation(null); }
						infowindow.open(MapaIncidencias.mapPlayer, marker);
					});
				}
		},
		
		
		
		fillPolylines:function(data,jam) {
				var arrPoligono = data;
				var point = null;
				var visible = MapaIncidencias.getVisible('waze');
				var arrPoints = [];
				var obj;
				for (var i = 0; i < arrPoligono.length; i++) {
					point = arrPoligono[i];
					arrPoints.push({lat: point.y, lng: point.x});
				}
				var flightPath = new google.maps.Polyline({
					path: arrPoints,
					geodesic: true,
					strokeColor: '#C04B3A',
					strokeOpacity: 0.6,
					strokeWeight: 5,
					visible:visible
				});
				MapaIncidencias.polylines.push(flightPath);
				flightPath.setMap(MapaIncidencias.mapPlayer);
				var msecPerMinute = 1000 * 60;
				var msecPerHour = msecPerMinute * 60;
				var msecPerDay = msecPerHour * 24;
				// asignar la fecha en milisegundos
				var date = new Date(jam.pubMillis);
				var dateMsec = date.getTime();
				// Obtener la diferencia en milisegundos
				var interval = (new Date()).getTime()- dateMsec;
		        var intervalHora = (new Date()).getTime()- dateMsec;
				var minutes = Math.floor(interval / msecPerMinute );
				interval = interval - (minutes * msecPerMinute );
				var horas = Math.floor(intervalHora / msecPerHour );
				intervalHora = intervalHora - (horas * msecPerHour );
				var infowindow = new google.maps.InfoWindow({
				    content:	'<b style="color:#C04B3A;"> Tráfico Denso</b><br>' +
				    			'<p>' +
					    			'En '+jam.street+' en '+jam.city+'<br>' +
					    			'Velocidad Media: ' +Math.round((jam.speed*18)/5)+' km/h<br>' +
					    			(jam.delay<0?'Via Bloqueda':('Tiempo de Conducción: '+Math.round(jam.delay/60)+' Minuto'+(Math.round(jam.delay/60)>1?'s':'')))+
					    			'<br>Hace '+(minutes>=60?(horas+' Hora'+(horas>1?'s':'')):(minutes+' Minuto'+(interval>1?'s':'')))+
					    		'</p>'
				});
				google.maps.event.addListener(flightPath, 'click', function(event) {
					infowindow.setPosition(event.latLng);
					infowindow.open(MapaIncidencias.mapPlayer);
				}); 
		},
		
		
		getArrayTetra:function(arr){
				var tipo,obj;
				var arrTetra = [];
		        for (var i = 0; i < arr.length; i++) {
			        if(arr[i].detalle){
			        	obj = new Object();
			        	obj['punto'] = new google.maps.LatLng(arr[i].longitud, arr[i].latitude);
			        	obj['isRadioTetra'] = true;
			        	var estadoDesc;
			        	var area = arr[i].detalle.area;
			        	if(area.indexOf("AREA") >= 0){
			        		estadoDesc = arr[i].detalle.area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/serenazgo.png';
	//		        		tipo = 'tetra6';
			        		var tipoUnidMovil = arr[i].detalle.tipoVehiculo;
			        		if(tipoUnidMovil.indexOf("PORTATIL") >= 0){
			        			tipo = 'tetra6';
			        		}else if(tipoUnidMovil.indexOf("MOTO") >= 0 || tipoUnidMovil.indexOf("MOTOCICLETA") >= 0){
			        			tipo = 'tetra8';
			        			obj['icon'] =PATH_PROYECTO_BASE+'images/sereno moto_icon.png';
			        		}else if(tipoUnidMovil.indexOf("SEGWAY") >= 0){
				        			tipo = 'tetra9';
			        		}else if(tipoUnidMovil.indexOf("CAMIONETA") >= 0 || tipoUnidMovil.indexOf("AUTOMOVIL") >= 0){
				        			tipo = 'tetra10';
				        			obj['icon'] =PATH_PROYECTO_BASE+'images/sereno auto_icon.png';
				        	}
			        		if(arr[i].estado+''=='001' || arr[i].estado+''=='010'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" APAGADO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_negro.png';
				        		tipo = 'tetra2';
				        	}else if(arr[i].estado+''=='00C' || arr[i].estado+''=='0C0'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" BATERIA BAJA";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='00E' || arr[i].estado+''=='0E0'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" DESCONECTADO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='00F' || arr[i].estado+''=='0F0'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" DESCONOCIDO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='002' || arr[i].estado+''=='020'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" EMERGENCIA";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='901'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" MALA PRESICION";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='902'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" NO REPORTA - MAL APAGADO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='105' || arr[i].estado+''=='150' || arr[i].estado+''=='905'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" SIN COBERTURA DE GPS";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='00A' || arr[i].estado+''=='0A0'){
				        		estadoDesc = "SERENAZGO "+arr[i].detalle.area+" SIN SERVICIO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}
			        	}else if(area.indexOf("TRANSITO") >= 0){
			        		estadoDesc = arr[i].detalle.area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/transito.png';
			        		tipo = 'tetra4';
			        	}else if(area.indexOf("COMISARIA") >= 0 || area.indexOf("PNP") >= 0){
			        		estadoDesc = arr[i].detalle.area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/police.png';
			        		tipo = 'tetra5';
			        	}else if(area.indexOf("FISCALIZACION") >= 0){
			        		estadoDesc = arr[i].detalle.area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/fiscalizacion.png';
			        		tipo = 'tetra7';
			        	}else if(arr[i].estado+''=='001' || arr[i].estado+''=='010'){
			        		estadoDesc = "APAGADO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_negro.png';
			        		tipo = 'tetra2';
			        	}else if(arr[i].estado+''=='00C' || arr[i].estado+''=='0C0'){
			        		estadoDesc = "BATERIA BAJA";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='00E' || arr[i].estado+''=='0E0'){
			        		estadoDesc = "DESCONECTADO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='00F' || arr[i].estado+''=='0F0'){
			        		estadoDesc = "DESCONOCIDO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='002' || arr[i].estado+''=='020'){
			        		estadoDesc = "EMERGENCIA";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='901'){
			        		estadoDesc = "MALA PRESICION";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='902'){
			        		estadoDesc = "NO REPORTA - MAL APAGADO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='105' || arr[i].estado+''=='150' || arr[i].estado+''=='905'){
			        		estadoDesc = "SIN COBERTURA DE GPS";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='00A' || arr[i].estado+''=='0A0'){
			        		estadoDesc = "SIN SERVICIO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else{
			        		estadoDesc = "OTROS";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';	
			        	}
			        	obj['html'] =	'<div id="detalle'+arr[i].issi+'" style="padding: 5px 0px 5px 0px;width:200px;" >' +
										'<p style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+estadoDesc+'</b></p>' +
										'<p><strong>issi: </strong><span class="issi">'+arr[i].issi+'</span><br /> <strong>Serie: </strong>'+arr[i].serie+'<br /><strong>TEI: </strong>'+arr[i].tei+'<br /> </p>'+
										'<p><strong>Modelo Radio: </strong>'+arr[i].detalle.modeloRadio+'<br /> <strong>Tipo Radio: </strong> '+arr[i].detalle.tipoRadio+'<br /><strong>Marca Vehiculo: </strong>'+arr[i].detalle.marcaVehiculo+'<br /> </p>'+
							    		'<p><strong>Modelo Vehiculo: </strong>'+arr[i].detalle.modeloVehiculo+'<br /> <strong>Tipo Vehiculo: </strong>'+arr[i].detalle.tipoVehiculo+'<br /><strong>Placa: </strong>'+arr[i].detalle.placa+'<br /> </p>'+
							    		'<p><strong>Zona: </strong>'+arr[i].detalle.zona+'</p>'+
										'</div>';
						obj['tipoService'] = tipo;
						obj['isRadioTetra'] = true;
						arrTetra.push(obj);
			        }
				}
			return arrTetra;
		},
		
		
		
		getArrayTetraTimelap:function(arr){
				var tipo,obj;
				var arrTetra = [];
				var min = parseInt($('#myRange').val())+30;
				
				console.log("min");
				console.log(min);
				
		        for (var i = 0; i < arr.length; i++) {
		        		
		        		console.log("arr["+i+"].posicion");
		        		console.log(arr[i].posicion);
		        		
		        		console.log("\t\tarr[i].posicion[min].longitud = "+arr[i].posicion[min].longitud);
		        		console.log("\t\tarr[i].posicion[min].latitud = "+arr[i].posicion[min].latitud);
		        		
			        	obj = new Object();
			        	obj['punto'] = new google.maps.LatLng(arr[i].posicion[min].longitud, arr[i].posicion[min].latitud);
			        	obj['isRadioTetra'] = true;
			        	var estadoDesc;
			        	var area = arr[i].area;
			        	if(area.indexOf("AREA") >= 0){
			        		estadoDesc = arr[i].area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/serenazgo.png';
	//		        		tipo = 'tetra6';
			        		var tipoUnidMovil = arr[i].tipoVehiculo;
			        		if(tipoUnidMovil.indexOf("PORTATIL") >= 0){
			        			tipo = 'tetra6';
			        		}else if(tipoUnidMovil.indexOf("MOTO") >= 0 || tipoUnidMovil.indexOf("MOTOCICLETA") >= 0){
			        			tipo = 'tetra8';
			        			obj['icon'] =PATH_PROYECTO_BASE+'images/sereno moto_icon.png';
			        		}else if(tipoUnidMovil.indexOf("SEGWAY") >= 0){
				        			tipo = 'tetra9';
			        		}else if(tipoUnidMovil.indexOf("CAMIONETA") >= 0 || tipoUnidMovil.indexOf("AUTOMOVIL") >= 0){
				        			tipo = 'tetra10';
				        			obj['icon'] =PATH_PROYECTO_BASE+'images/sereno auto_icon.png';
				        	}
			        		if(arr[i].estado+''=='001' || arr[i].estado+''=='010'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" APAGADO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_negro.png';
				        		tipo = 'tetra2';
				        	}else if(arr[i].estado+''=='00C' || arr[i].estado+''=='0C0'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" BATERIA BAJA";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='00E' || arr[i].estado+''=='0E0'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" DESCONECTADO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='00F' || arr[i].estado+''=='0F0'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" DESCONOCIDO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='002' || arr[i].estado+''=='020'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" EMERGENCIA";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='901'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" MALA PRESICION";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='902'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" NO REPORTA - MAL APAGADO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='105' || arr[i].estado+''=='150' || arr[i].estado+''=='905'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" SIN COBERTURA DE GPS";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}else if(arr[i].estado+''=='00A' || arr[i].estado+''=='0A0'){
				        		estadoDesc = "SERENAZGO "+arr[i].area+" SIN SERVICIO";
				        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
				        		tipo = 'tetra3';
				        	}
			        	}else if(area.indexOf("TRANSITO") >= 0){
			        		estadoDesc = arr[i].area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/transito.png';
			        		tipo = 'tetra4';
			        	}else if(area.indexOf("COMISARIA") >= 0 || area.indexOf("PNP") >= 0){
			        		estadoDesc = arr[i].area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/police.png';
			        		tipo = 'tetra5';
			        	}else if(area.indexOf("FISCALIZACION") >= 0){
			        		estadoDesc = arr[i].area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/fiscalizacion.png';
			        		tipo = 'tetra7';
			        	}else if(arr[i].estado+''=='001' || arr[i].estado+''=='010'){
			        		estadoDesc = "APAGADO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_negro.png';
			        		tipo = 'tetra2';
			        	}else if(arr[i].estado+''=='00C' || arr[i].estado+''=='0C0'){
			        		estadoDesc = "BATERIA BAJA";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='00E' || arr[i].estado+''=='0E0'){
			        		estadoDesc = "DESCONECTADO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='00F' || arr[i].estado+''=='0F0'){
			        		estadoDesc = "DESCONOCIDO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='002' || arr[i].estado+''=='020'){
			        		estadoDesc = "EMERGENCIA";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='901'){
			        		estadoDesc = "MALA PRESICION";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='902'){
			        		estadoDesc = "NO REPORTA - MAL APAGADO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='105' || arr[i].estado+''=='150' || arr[i].estado+''=='905'){
			        		estadoDesc = "SIN COBERTURA DE GPS";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else if(arr[i].estado+''=='00A' || arr[i].estado+''=='0A0'){
			        		estadoDesc = "SIN SERVICIO";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';
			        	}else{
			        		estadoDesc = "OTROS";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';	
			        	}
			        	obj['html'] =	'<div id="detalle'+arr[i].issi+'" style="padding: 5px 0px 5px 0px;width:200px;" >' +
										'<p style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+estadoDesc+'</b></p>' +
										'<p><strong>issi: </strong><span class="issi">'+arr[i].issi+'</span><br /> <strong>Serie: </strong>'+arr[i].serie+'<br /><strong>TEI: </strong>'+arr[i].tei+'<br /> </p>'+
										'<p><strong>Modelo Radio: </strong>'+arr[i].modeloRadio+'<br /> <strong>Tipo Radio: </strong> '+arr[i].tipoRadio+'<br /><strong>Marca Vehiculo: </strong>'+arr[i].marcaVehiculo+'<br /> </p>'+
							    		'<p><strong>Modelo Vehiculo: </strong>'+arr[i].modeloVehiculo+'<br /> <strong>Tipo Vehiculo: </strong>'+arr[i].tipoVehiculo+'<br /><strong>Placa: </strong>'+arr[i].placa+'<br /> </p>'+
							    		'<p><strong>Zona: </strong>'+arr[i].zona+'</p>'+
										'</div>';
						obj['tipoService'] = tipo;
						obj['isRadioTetra'] = true;
						arrTetra.push(obj);
						
			        
				}
				return arrTetra;
		},
	
		
		buildTetraService:function(){
				var arrTetra = [];
				$.ajax({
				    url: PATH_PROYECTO_BASE+"cierre-calles/dolphin-service",
				    dataType: "json",
				    success: function( response ) {
				    	$(".mask-loading-main").hide();
				    	if(response.status){
					        var arr = response.items;
					        arrTetra = MapaIncidencias.getArrayTetra(arr)
							$.each(arrTetra,function(i,tetra){
								MapaIncidencias.addMarker({
									icon:tetra.icon,
									index:i+'_tetra',
									html:tetra.html,
									punto:tetra.punto,
									tipo:tetra.tipoService,
									isRadioTetra:true
								});
							});
				    	}
				    }
				});
		},
		
		
		
		
		ajaxTetraTimelap:function(){
			
				procesandoTetra = true;
				flagTetra = false;
				
//				console.log("fechaAux: "+fechaAux);
				var id = 0;
				var incidencia = {};
				
				if ($('#inputIncidencia').val()!=null || $('#inputIncidencia').val()!="" ){
					incidencia.idIncidencia = $('#inputIncidencia').val();
					id = $('#inputIncidencia').val();
//					$('#inputIncidencia').val("");
				}
				if ($('#inputNroCasoVoxiva').val()!=null || $('#inputNroCasoVoxiva').val()!="" ){
					incidencia.nroCasoVoxiva = $('#inputNroCasoVoxiva').val();
//					$('#inputNroCasoVoxiva').val("");
				}
				
//				var slider = document.getElementById("myRange");
				var minuto = $('#myRange').val();
				
//				console.log("FECHAPIVOT: "+fechaTmp);
//				console.log("MINUTO: "+minuto);
//				incidencia.fecNotificacion=fechaTmp;
//				
//				console.log("Incidencia to ajaxTetraTimelap...");
//				console.log(incidencia);
				
//				if ($('#minuto').val()!=null || $('#minuto').val()!="" ){
//					var m = $('#minuto').val()
//					console.log("MINUTO: "+m);
////					incidencia.nroCasoVoxiva = $('#minuto').val();
////					$('#inputNroCasoVoxiva').val("");
//				}
				id = 1531;
				$.ajax({
					url: PATH_PROYECTO_BASE+"cierre-calles/tetra-list-timelap2",
					
				    dataType: "json",
				    method: "GET",
//				    data:incidencia,
				    data: {id:id},
//				    data: {
//				    	fecha: fecPivot,
//				    	instante: minuto
//				    },
//				    data: {
//				    	idIncidencia: incidencia.idIncidencia,
//				    	minuto: minuto
//				    },
				    success: function( response ) {
				    	
				    	console.log("response ajaxTetraTimelap");
				    	console.log(response);
				    	
				    	flagTetra = true;
				        var arr = response.data;
				        
				        console.log("arr");
				    	console.log(arr);
				    	
				        var arrTetra2 = [];
						$.each(MapaIncidencias.markersTetra,function(a,b){
							if(b){
								b.marker.setMap(null);
							}
						});
						MapaIncidencias.markersTetra = [];
						$.each(MapaIncidencias.markers,function(r,q){
							if(q && q.tipo.indexOf('tetra')){
								MapaIncidencias.markers.splice(q,1);
							}
						});
				        arrTetra2 = MapaIncidencias.getArrayTetraTimelap(arr);
				        
						$.each(arrTetra2,function(i,tetra){
							MapaIncidencias.addMarker({
								icon:tetra.icon,
								index:i+'_tetra',
								html:tetra.html,
								punto:tetra.punto,
								tipo:tetra.tipoService,
								isRadioTetra:true
							});
						});
				        
						procesandoTetra = false;
				    }
				});
		
			
		},
		
		
		refreshTetra:function(){
				setInterval(function(){
					if(ENABLE_LOOP){
						if(!procesandoTetra){
							MapaIncidencias.ajaxTetra();
						}
					}
				}, INTERVALO_TIEMPO)
		},


		
		
		ajaxVoxivaTimelap:function(incidencia){

			if($('.btn-warning').length>0){
				procesandoVoxiva = true;
				flagVoxiva = false;
				var incidencia = {};
				
				if ($('#inputIncidencia').val()!=null || $('#inputIncidencia').val()!="" ){
					incidencia.idIncidencia = $('#inputIncidencia').val();
//					$('#inputIncidencia').val("");
				}
				if ($('#inputNroCasoVoxiva').val()!=null || $('#inputNroCasoVoxiva').val()!="" ){
					incidencia.nroCasoVoxiva = $('#inputNroCasoVoxiva').val();
//					$('#inputNroCasoVoxiva').val("");
				}
				
				
//				if ($('#inputArea').val()=="Todas las areas"){
//					inc = {};
//				} else 
				if ($('#inputArea').val()=="Area 1"){
					incidencia.area = "1";
				} else if ($('#inputArea').val()=="Area 2"){
					incidencia.area = "2";
				} else if ($('#inputArea').val()=="Area 3"){
					incidencia.area = "3";
				}
//				$('#inputArea').val("Todas las areas");
				
				if ($('#inputArea2').val()=="Area 1"){
					incidencia.area = "1";
				} else if ($('#inputArea2').val()=="Area 2"){
					incidencia.area = "2";
				} else if ($('#inputArea2').val()=="Area 3"){
					incidencia.area = "3";
				}
				
				if (ROLROL>1001) {
					switch (parseInt(ROLROL)){
						case 1002:
						case 1005: incidencia.area="1"; break;
						case 1003:
						case 1006: incidencia.area="2"; break;
						case 1004:
						case 1007: incidencia.area="3"; break;
						default: break;
					}
				}
//				console.log("incidencia");
//				console.log(incidencia);
				$.ajax({
			    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list-timelap",
			    dataType: "json",
			    async: false,
			    method: "GET",
			    data:incidencia,
			    success: function( response ) {
			    	flagVoxiva = true;
			    	console.log("response");
			    	console.log(response);
			    	$.each(MapaIncidencias.markersVoxiva,function(i,v){
			    		try{
			    			v.marker.setMap(null);
			    		}catch(e){
			    			
			    		}
			    	});
			    	MapaIncidencias.markersVoxiva = [];
			    	$.each(MapaIncidencias.markers,function(a,b){
			    		if(b && b.marker.tipo == 'voxiva'){
			    			MapaIncidencias.markers.splice(b,1);
			    		}
			    	});
			    	
//			    	fechaTmp = response.data[0].fecNotificacion;
//			    	console.log("fechaTmp: "+fechaTmp);
			    	
			    	MIDService.incidenciasVoxiva.push = [];
			    	var tituloV = 'ALERTA MIRAFLORES'; 
			    	$.each(response.data,function(i,o){
			    		
			    		switch(o.cod_medio){
				    		case 797: tituloV='CORREO ELECTRONICO'; break;
				    		case 798: tituloV='PRESENCIAL'; break;
				    		case 799: tituloV='LLAMADA TELEFONICA'; break;
				    		case 800: tituloV='FACEBOOK'; break;
				    		case 801: tituloV='TWITTER'; break;
				    		case 802: tituloV='CAMARA'; break;
				    		case 904: tituloV='WHATSAPP'; break;
				    		case 905: tituloV='ALERTA MIRAFLORES'; break;
				    		case 990: tituloV='WAZE'; break;
				    		case 948: tituloV='POS'; break;
			    			default: break;
			    		}
			    		
			    		//ESTE ES EL NUEVO
			    		
			    		var htmlInfo;
						
			    		var tipoUser = 0
			    		if(ROLROL==null || ROLROL==""){
			    			tipoUser = ROL*10000;
			    		} else {
			    			tipoUser = ROL*10000 + parseInt(ROLROL);
			    		} 
			    		
			    		
			    		var listaImagen=o.listaImagen;
			    		
			    		
			    	//	debugger;
			    		var htmlImagen="";
			    		var htmlSlide="";
			    		
			    		var dataImagenGaleria="";
			    		
			    		if(listaImagen && listaImagen.length>0){
			    		
			    		$.each(listaImagen, function( index, value ) {	
			    			var activo="";
			    			if(index==0){
			    				activo="active";
			    			}
			    			htmlImagen+='   <div class="item '+activo+'">'+
							'      <img src="'+value.ruta+'" width="300px" >'+
							'    </div>';
			    			
			    			htmlSlide+='<li data-target="#myCarousel" data-slide-to="'+index+'" class="'+activo+'"></li>';
			    			
			    			});
			    		
			    		var dataImagenGaleria='<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
						  '<ol class="carousel-indicators">'+
						  htmlSlide+
						'  </ol>'+
						'  <div class="carousel-inner">'+
						htmlImagen +
						'  </div>'+
						'  <a class="left carousel-control" href="#myCarousel" data-slide="prev">'+
						'    <span class="glyphicon glyphicon-chevron-left"></span>'+
						'    <span class="sr-only">Previous</span>'+
						'  </a>'+
						'  <a class="right carousel-control" href="#myCarousel" data-slide="next">'+
						'    <span class="glyphicon glyphicon-chevron-right"></span>'+
						'    <span class="sr-only">Next</span>'+
						'  </a>'+
						'</div>'
			    		
			    			
			    		}
			    		
			    		console.log(dataImagenGaleria);
			    		
			    		htmlInfo = '<div style="float:left;"><div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
									'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
									'<div><b>Nro Id Incidencia: </b><span>'+(o.idIncidencia)+'</span></div>'+
									'<div><b>Nro Caso Voxiva: </b><span>'+(o.nroCasoVoxiva?o.nroCasoVoxiva:'No tiene')+'</span></div>'+
									'<div><b>Unidad de Atención: </b><span>'+(o.descUnidad?o.descUnidad:'No especificado')+'</span></div>'+
									'<div><b>Tipo de Caso: </b><span>'+(o.descCaso?o.descCaso:'No especificado')+'</span></div>'+
									'<div><b>Tipo de Subcaso: </b><span>'+(o.descSubcaso?o.descSubcaso:'No especificado')+'</span></div>'+
									'<div><b>Medio de reporte: </b><span>'+(o.descMedio?o.descMedio:'Desconocido')+'</span></div>'+
									'<div><b>Nombre del reportante: </b><span>'+(o.nombReport?o.nombReport:'Desconocido')+'</span></div>'+
									'<div><b>Teléfono del reportante: </b><span>'+(o.telfReport?o.telfReport:'Desconocido')+'</span></div>'+
			//						'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString('en-US')+'</span></div>'+
									'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString()+'</span></div>'+
									'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+
//									'<div><b>Fecha de incidencia: </b><span>'+o.fecEvento?new Date(o.fecEvento).toLocaleString():Desconocida+'</span></div>'+
									'</div></div><div style="float:left;">'+

									dataImagenGaleria+
									
									//<img src="'+((response.dataImagen[0])?response.dataImagen[0].ruta : 'http://digital2.miraflores.gob.pe:8180/adjuntos/mapa/no-image.png')+'" width="200" height="200" alt=""/>
										
										'</div>'+
			//						'</div></div><div style="float:left;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Calle_Velarde.jpg/1200px-Calle_Velarde.jpg" width="200" height="200" alt=""/></div>'+
									'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+
																			'_btn_show_voxiva"  data-id="'+o.idCasoVoxiva+
																			'"  data-index="'+i+'" style="display:inline;margin-right:20px">Ver Detalle</button>'
					
				    	if (o.tpoOperador!=null && o.descUnidad) {
				    		var infowindow = new google.maps.InfoWindow({
					    		content: htmlInfo
				    		});
				    		
				    		google.maps.event.addListener(infowindow, 'domready', function (e) {
					    			var w = infowindow;
					    			var geo = this;
					    			$('#'+o.idIncidencia+'_btn_show_voxiva').unbind().click(function(){
											var inc=o;
											IncidenciaService.openDetalleIncidencia({
					                    		title:'Resumen de Incidencia',
					                    		incidencia: inc,
					                    		imagen: response.dataImagen
					                    	});
									    	Ext.id();
									    	return false;
									});

					    			google.maps.event.addListener(w,'closeclick',function(){
						    			w.close();   
						    			});
						    		
							});
				    		
				    		var image;
				    		
				    		if (o.tpoOperador!=null){
				    			switch(o.tpoOperador){
						    		case 995: image = PATH_PROYECTO_BASE+'images/phone_azul.png'; break;
						    		case 996: image = PATH_PROYECTO_BASE+'images/phone_verde.png'; break;
						    		case 997: image = PATH_PROYECTO_BASE+'images/phone_amarillo.png'; break;
						    		case 998: image = PATH_PROYECTO_BASE+'images/phone_naranja.png'; break;
						    		case 999: image = PATH_PROYECTO_BASE+'images/phone_rojo.png'; break;
						    		case 1000: image = PATH_PROYECTO_BASE+'images/phone_morado.png'; break;
						    		case 1001: image = PATH_PROYECTO_BASE+'images/phone_marron.png'; break;
						    		default: break;
					    		}
				    		} else if (o.nroCasoVoxiva!=null) {
				    			image = PATH_PROYECTO_BASE+'images/phone_gris.png';
				    		}
				    		
				    		var icon;
							if(MapaIncidencias.mapPlayer.getZoom()<=16){	
									icon = {
									    url: image, // url
									    scaledSize: initSizeIcon, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
							}else{
								if(MapaIncidencias.mapPlayer.getZoom() > 16 && MapaIncidencias.mapPlayer.getZoom() <= 17){	
									icon = {
									    url: image, // url
									    scaledSize: iconScale2, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
								}else{
									icon = {
									    url: image, // url
									    scaledSize: iconScale3, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
								}
							}
							
							
					    	var marker = new google.maps.Marker({
					    		position: new google.maps.LatLng(parseFloat(o.coordenadas.split(' ')[0]), parseFloat(o.coordenadas.split(' ')[1])),
					    		map: MapaIncidencias.mapPlayer,
					    		draggable: false,
					    		visible:MapaIncidencias.getVisible('voxiva'),
					            mapTypeId: google.maps.MapTypeId.ROADMAP,
					            icon: icon
					    	});
					    	
					    	google.maps.event.addListener(marker, 'click', function () {
					    		infowindow.open(MapaIncidencias.mapPlayer, marker);
					    		if (o.tpoOperador==ROLROL) { marker.setAnimation(null); }
					    		MapaIncidencias.setMarkerLeido(o.idIncidencia,o.tpoOperador);
					    	});
					    	
					    	if(o.indLeido+''!='S'){
						    	marker.setAnimation(google.maps.Animation.BOUNCE);
					    	}
					    	
					    	if ((incidencia.idIncidencia!=null && incidencia.idIncidencia!="")||(incidencia.nroCasoVoxiva!=null && incidencia.nroCasoVoxiva!="")){
//								MapaIncidencias.setCenterMap(o.coordenadas,o);
//								MapaIncidencias.mapPlayer.setCenter(new google.maps.LatLng(parseFloat(o.coordenadas.split(' ')[0]), parseFloat(o.coordenadas.split(' ')[1])));
//								MapaIncidencias.mapPlayer.setZoom(17);
//								marker.icon.scaledSize = iconScale3;
//								marker.icon.scaledSize = initSizeIcon;
								
//								google.maps.event.trigger(marker, 'click');
							} 
//					    	else {
////								MapaIncidencias.mapPlayer.setCenter(new google.maps.LatLng(-12.121446, -77.030175));
////								MapaIncidencias.mapPlayer.setZoom(15);
//								if(MapaIncidencias.mapPlayer.getZoom()<=16){
//									marker.icon.scaledSize = initSizeIcon;
//								}else if(MapaIncidencias.mapPlayer.getZoom() > 16 && MapaIncidencias.mapPlayer.getZoom() <= 17){	
//									marker.icon.scaledSize = iconScale2;
//								}else{
//									marker.icon.scaledSize = iconScale3;
//								}
////								if(MapaIncidencias.markers.length>0)				{ MapaIncidencias.redimensionIcons(MapaIncidencias.markers); }
////								if(MapaIncidencias.markersVigilantes.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersVigilantes); }
////								if(MapaIncidencias.markersEstacionamientos.length>0){ MapaIncidencias.redimensionIcons(MapaIncidencias.markersEstacionamientos); }
////								if(MapaIncidencias.markersCambistas.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersCambistas); }
////								if(MapaIncidencias.markersReach.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersReach); }
////								if(MapaIncidencias.markersPos.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersPos); }
////								marker.icon.scaledSize = initSizeIcon;
//							}
							
					    	
					    	var objMarker = {
					    			marker : marker,
					    			tipo:'voxiva',
					    			idIncidencia:o.idIncidencia
					    	}
					    	
					    	MapaIncidencias.markers.push(objMarker);
					    	MapaIncidencias.markersVoxiva.push(objMarker);
				    	} else {
				    		console.log("Id incidencia = "+o.idIncidencia+" NOOOOOO se mapea")
				    	}
				    	
			    	});
			    	
			    	procesandoVoxiva = false;

			    }});
				
//				console.log("LLAMADA A ajaxTetraTimelap ------------------------------------------------------------------------->")
//				MapaIncidencias.ajaxTetraTimelap(fechaTmp);
				
			} else {
				
				console.log("call ajaxVoxivaTimelap --> No ejecuta porque el mapa esta en modo historico");
				
			}
		
			
		},
		
		
		
		ajaxVoxivaExposicion:function(id){
			
			console.log("id");
			console.log(id);
			
//			console.log("incidencia");
//			console.log(incidencia);
//			var id = 0;
//			if(incidencia.idIncidencia!= null){
//				id = incidencia.idIncidencia;
//			}
			
			if($('.btn-warning').length>0){
				procesandoVoxiva = true;
				flagVoxiva = false;
				var incidencia = {};
				
//				incidencia.idIncidencia = id;
				
				if ($('#inputArea2').val()=="Area 1"){
					incidencia.area = "1";
				} else if ($('#inputArea2').val()=="Area 2"){
					incidencia.area = "2";
				} else if ($('#inputArea2').val()=="Area 3"){
					incidencia.area = "3";
				}
				
				console.log("incidencia");
				console.log(incidencia);
				$.ajax({
			    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list-exposicion",
			    dataType: "json",
			    async: false,
			    method: "GET",
			    data:incidencia,
			    success: function( response ) {
			    	flagVoxiva = true;
			    	console.log("response");
			    	console.log(response);
			    	
			    	console.log("MapaIncidencias.markersVoxiva");
			    	console.log(MapaIncidencias.markersVoxiva);
			    	
			    	if(id!=null){
			    		$.each(MapaIncidencias.markersVoxiva,function(i,v){
				    		if (v.idIncidencia==id){
				    			MapaIncidencias.mapPlayer.setCenter(v.marker.position);
								MapaIncidencias.mapPlayer.setZoom(18);
								v.marker.icon.scaledSize = iconScale3;
				    		}
//			    			try{
//				    			v.marker.setMap(null);
//				    		}catch(e){
//				    			
//				    		}
				    	});
			    		
			    	} else {
			    		
			    		$.each(MapaIncidencias.markersVoxiva,function(i,v){
				    		try{
				    			v.marker.setMap(null);
				    		}catch(e){
				    			
				    		}
				    	});
				    	MapaIncidencias.markersVoxiva = [];
				    	$.each(MapaIncidencias.markers,function(a,b){
				    		if(b && b.marker.tipo == 'voxiva'){
				    			MapaIncidencias.markers.splice(b,1);
				    		}
				    	});
				    	
				    	MIDService.incidenciasVoxiva.push = [];
				    	var tituloV = 'ALERTA MIRAFLORES'; 
				    	$.each(response.data,function(i,o){
				    		
				    		switch(o.cod_medio){
					    		case 797: tituloV='CORREO ELECTRONICO'; break;
					    		case 798: tituloV='PRESENCIAL'; break;
					    		case 799: tituloV='LLAMADA TELEFONICA'; break;
					    		case 800: tituloV='FACEBOOK'; break;
					    		case 801: tituloV='TWITTER'; break;
					    		case 802: tituloV='CAMARA'; break;
					    		case 904: tituloV='WHATSAPP'; break;
					    		case 905: tituloV='ALERTA MIRAFLORES'; break;
					    		case 990: tituloV='WAZE'; break;
					    		case 948: tituloV='POS'; break;
				    			default: break;
				    		}
				    		
				    		//ESTE ES EL NUEVO
				    		
				    		var htmlInfo;
				    		var htmlInfo2;
							
				    		var tipoUser = 0
				    		if(ROLROL==null || ROLROL==""){
				    			tipoUser = ROL*10000;
				    		} else {
				    			tipoUser = ROL*10000 + parseInt(ROLROL);
				    		} 
				    		
				    		
				    		var listaImagen=o.listaImagen;
				    		
				    		
				    	//	debugger;
				    		var htmlImagen="";
				    		var htmlSlide="";
				    		
				    		var dataImagenGaleria="";
				    		
				    		if(listaImagen && listaImagen.length>0){
				    		
				    		$.each(listaImagen, function( index, value ) {	
				    			var activo="";
				    			if(index==0){
				    				activo="active";
				    			}
				    			htmlImagen+='   <div class="item '+activo+'">'+
											'   	<img src="'+value.ruta+'" width="300px" >'+
											'   </div>';
				    			
				    			htmlSlide+='<li data-target="#myCarousel" data-slide-to="'+index+'" class="'+activo+'"></li>';
				    			
				    			});
				    		
				    		var dataImagenGaleria=	'<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
													'	<ol class="carousel-indicators">'+
													  		htmlSlide+
													'  	</ol>'+
													'  	<div class="carousel-inner">'+
															htmlImagen +
													'  </div>'+
													'  <a class="left carousel-control" href="#myCarousel" data-slide="prev">'+
													'    <span class="glyphicon glyphicon-chevron-left"></span>'+
													'    <span class="sr-only">Previous</span>'+
													'  </a>'+
													'  <a class="right carousel-control" href="#myCarousel" data-slide="next">'+
													'    <span class="glyphicon glyphicon-chevron-right"></span>'+
													'    <span class="sr-only">Next</span>'+
													'  </a>'+
													'</div>'
				    		
				    		}
				    		
//				    		console.log(dataImagenGaleria);
				    		
				    		htmlInfo = '<div style="float:left;"><div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:160px;" >' +
				    		'<div><b>Nro Id Incidencia: </b><span>'+(o.idIncidencia)+'</span></div>'+
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:10px;margin-bottom:5px;"><b>'+o.listaImagen[0].titulo+'</b></div>' +
//										'<div><img src="'+o.listaImagen[0].ruta+'" width="300px" ></div>'+
										
//										'<div><b>Nro Caso Voxiva: </b><span>'+(o.nroCasoVoxiva?o.nroCasoVoxiva:'No tiene')+'</span></div>'+
//										'<div><b>Unidad de Atención: </b><span>'+(o.descUnidad?o.descUnidad:'No especificado')+'</span></div>'+
//										'<div><b>Tipo de Caso: </b><span>'+(o.descCaso?o.descCaso:'No especificado')+'</span></div>'+
//										'<div><b>Tipo de Subcaso: </b><span>'+(o.descSubcaso?o.descSubcaso:'No especificado')+'</span></div>'+
//										'<div><b>Medio de reporte: </b><span>'+(o.descMedio?o.descMedio:'Desconocido')+'</span></div>'+
//										'<div><b>Nombre del reportante: </b><span>'+(o.nombReport?o.nombReport:'Desconocido')+'</span></div>'+
//										'<div><b>Teléfono del reportante: </b><span>'+(o.telfReport?o.telfReport:'Desconocido')+'</span></div>'+
//				//						'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString('en-US')+'</span></div>'+
//										'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString()+'</span></div>'+
//										'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+
//										'<div><b>Fecha de incidencia: </b><span>'+o.fecEvento?new Date(o.fecEvento).toLocaleString():Desconocida+'</span></div>'+
//										'</div></div><div style="float:left;">'+
	//
//										dataImagenGaleria+
//										
//										//<img src="'+((response.dataImagen[0])?response.dataImagen[0].ruta : 'http://digital2.miraflores.gob.pe:8180/adjuntos/mapa/no-image.png')+'" width="200" height="200" alt=""/>
//											
//											'</div>'+
//				//						'</div></div><div style="float:left;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Calle_Velarde.jpg/1200px-Calle_Velarde.jpg" width="200" height="200" alt=""/></div>'+
//										
//										'</div>'+
										
										'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+
																				'_btn_show_voxiva"  data-id="'+o.idCasoVoxiva+
																				'"  data-index="'+i+'" style="display:inline;margin-right:20px">Ver Despliegue</button>'
						
							htmlInfo2 = '<div style="float:left;"><div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:200px;" >' +
//										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:8px;margin-bottom:5px;"><b>'+o.param1+'</b></div>' +
//										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:8px;margin-bottom:5px;"><b>'+o.param1+'</b></div>' +
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:10px;margin-bottom:5px;"><b>'+o.idIncidencia+' - '+o.param1+'</b></div>' +
										'<div><img src="'+o.listaImagen[0].ruta+'" width="200px" ></div>'+
										'</div>'
										
					    	if (o.tpoOperador!=null && o.descUnidad) {
					    		var infowindow = new google.maps.InfoWindow({
						    		content: htmlInfo
					    		});
					    		
				    		var infowindow2 = new google.maps.InfoWindow({
						    		content: htmlInfo2
					    		});
					    		

					    		
//					    		google.maps.event.addListener(infowindow, 'domready', function (e) {
//						    			var w = infowindow;
//						    			var geo = this;
//						    			$('#'+o.idIncidencia+'_btn_show_voxiva').unbind().click(function(){
//												var id=o.idIncidencia;
//												console.log("Click en VER DESPLIEGUE");
//												IncidenciaService.openFormExposicion({
//						                    		title:'Detalle Alerta',
//						                    		id: id,
////						                    		imagen: response.dataImagen
//						                    	});
//										    	Ext.id();
//										    	return false;
//										});
	//
//						    			google.maps.event.addListener(w,'closeclick',function(){
//							    			w.close();   
//							    			});
//							    		
//								});
					    		
					    		var image = PATH_PROYECTO_BASE+'images/phone_gris.png'; 
					    		
					    		var icon;
								if(MapaIncidencias.mapPlayer.getZoom()<=16){	
										icon = {
										    url: image, // url
										    scaledSize: initSizeIcon, // scaled size
										    origin: null, // origin
							    			anchor: null // anchor
										};
								}else{
									if(MapaIncidencias.mapPlayer.getZoom() > 16 && MapaIncidencias.mapPlayer.getZoom() <= 17){	
										icon = {
										    url: image, // url
										    scaledSize: iconScale2, // scaled size
										    origin: null, // origin
							    			anchor: null // anchor
										};
									}else{
										icon = {
										    url: image, // url
										    scaledSize: iconScale3, // scaled size
										    origin: null, // origin
							    			anchor: null // anchor
										};
									}
								}
								
								var marker = new google.maps.Marker({
						    		position: new google.maps.LatLng(parseFloat(o.coordenadas.split(' ')[0]), parseFloat(o.coordenadas.split(' ')[1])),
						    		map: MapaIncidencias.mapPlayer,
						    		draggable: false,
						    		visible:MapaIncidencias.getVisible('voxiva'),
						            mapTypeId: google.maps.MapTypeId.ROADMAP,
						            icon: icon
						    	});
						    	
						    	
						    	
						    	google.maps.event.addListener(marker, 'click', function () {
//						    		infowindow.open(MapaIncidencias.mapPlayer, marker);
						    		var id=o.idIncidencia;
						    		var title= "Incidencia nro."+o.idIncidencia+" - "+o.param1;
									console.log("Click en VER DESPLIEGUE");
									IncidenciaService.openFormExposicion({
			                    		title: title,
			                    		id: id,
//			                    		imagen: response.dataImagen
			                    	});
							    	Ext.id();
							    	return false;
						    	});
						    	
//						    	google.maps.event.trigger(marker, 'click');
						    	
					    		google.maps.event.addListener(marker, 'mouseover', function() {
					    			infowindow2.open(MapaIncidencias.mapPlayer, marker);
					    			$(".gm-style-iw").next("div").hide();
					    		});

					    		google.maps.event.addListener(marker, 'mouseout', function() {
//					    		    infowindow.close(MapaIncidencias.mapPlayer, marker);
					    		    infowindow2.close();
					    		});
						    	
////					    		if ((id!=null && o.idIncidencia==id)){
//					    		if ((incidencia.idIncidencia!=null && incidencia.idIncidencia!="")||(incidencia.nroCasoVoxiva!=null && incidencia.nroCasoVoxiva!="")){
////									MapaIncidencias.setCenterMap(o.coordenadas,o);
//									MapaIncidencias.mapPlayer.setCenter(new google.maps.LatLng(parseFloat(o.coordenadas.split(' ')[0]), parseFloat(o.coordenadas.split(' ')[1])));
//									MapaIncidencias.mapPlayer.setZoom(18);
//									marker.icon.scaledSize = iconScale3;
////									google.maps.event.trigger(marker, 'click');
//								} 
					    	
						    	var objMarker = {
						    			marker : marker,
						    			tipo:'voxiva',
						    			idIncidencia:o.idIncidencia
						    	}
						    	
						    	MapaIncidencias.markers.push(objMarker);
						    	MapaIncidencias.markersVoxiva.push(objMarker);
					    	} else {
					    		console.log("Id incidencia = "+o.idIncidencia+" NOOOOOO se mapea")
					    	}
				    		
				    	});
				    
				    	
			    		
			    	}
			    	
			    	procesandoVoxiva = false;
			    	
			    }});
				
				
			} else {
				
				console.log("call ajaxVoxivaTimelap --> No ejecuta porque el mapa esta en modo historico");
				
			}
		
			
		},
		
	
		
		
//		buildAreasExposicion:function(){
//			console.log("geoAreas");
//			console.log(geoAreas);
//			
//			if ($('#inputArea2').val()=="Area 1"){
//				var borderPolygon = [];
//				
//				for (var j=0; j < geoAreas[0].length; j++) {
//            		var tempLatLng = new google.maps.LatLng(geoAreas[0][j][0], geoAreas[0][j][1]);
//            		borderPolygon.push(tempLatLng);
//            	}
//    			polygon = new google.maps.Polyline({
//            		path: borderPolygon,
//                    strokeOpacity: 1.0,
//	                strokeColor: '#ffffff',
//	                strokeWeight: 1
//    			});
//    			capaAreas.push(polygon);
//			} else if ($('#inputArea2').val()=="Area 2"){
//				var borderPolygon = [];
//    			for (var j=0; j < geoAreas[1].length; j++) {
//            		var tempLatLng = new google.maps.LatLng(geoAreas[1][j][0], geoAreas[1][j][1]);
//            		borderPolygon.push(tempLatLng);
//            	}
//    			polygon = new google.maps.Polyline({
//            		path: borderPolygon,
//                    strokeOpacity: 1.0,
//	                strokeColor: '#ffffff',
//	                strokeWeight: 1
//    			});
//    			capaAreas.push(polygon);
//			} else if ($('#inputArea2').val()=="Area 3"){
//				var borderPolygon = [];
//    			for (var j=0; j < geoAreas[2].length; j++) {
//            		var tempLatLng = new google.maps.LatLng(geoAreas[2][j][0], geoAreas[2][j][1]);
//            		borderPolygon.push(tempLatLng);
//            	}
//    			polygon = new google.maps.Polyline({
//            		path: borderPolygon,
//                    strokeOpacity: 1.0,
//	                strokeColor: '#ffffff',
//	                strokeWeight: 1
//    			});
//    			capaAreas.push(polygon);
//			} else {
//				for (var i=0; i < geoAreas.length; i++) {
//	        		var borderPolygon = [];
//	    			for (var j=0; j < geoAreas[i].length; j++) {
//	            		var tempLatLng = new google.maps.LatLng(geoAreas[i][j][0], geoAreas[i][j][1]);
//	            		borderPolygon.push(tempLatLng);
//	            	}
//	    			polygon = new google.maps.Polyline({
//	            		path: borderPolygon,
//	                    strokeOpacity: 1.0,
//		                strokeColor: '#ffffff',
//		                strokeWeight: 1
//	    			});
//	    			capaAreas.push(polygon);
//				}
//			}
//			
////			MapaIncidencias.showAreas(false);
//		},
		
		showSubzonas:function(v){
			for (var i=0; i < capaSubzonas.length; i++) {
				if(v){
					capaSubzonas[i].setMap(MapaIncidencias.mapPlayer);
				} else {
					capaSubzonas[i].setMap(null);
				}
			}
		},
		
		showZonas:function(v){
			for (var i=0; i < capaZonas.length; i++) {
				if(v){
					capaZonas[i].setMap(MapaIncidencias.mapPlayer);
				} else {
					capaZonas[i].setMap(null);
				}
			}
		},
		
		showAreas:function(v){
			for (var i=0; i < capaAreas.length; i++) {
				if(v){
					capaAreas[i].setMap(MapaIncidencias.mapPlayer);
				} else {
					capaAreas[i].setMap(null);
				}
			}
		}
		
//		showAreasExposicion:function(v){
//			
//			console.log("v: "+v);
//			for (var i=0; i < capaAreas.length; i++) {
//				if(v){
//					capaAreas[i].setMap(MapaIncidencias.mapPlayer);
//				} else {
//					capaAreas[i].setMap(null);
//				}
//			}
//		}
		
}


var incidencia = {};

if (ROL=="902"){
//	incidencia.usrRegistra = DES_LOGIN;
//	incidencia.usrRol = parseInt(ROL);
//	if (ROLROL<1002){
//		incidencia.tpoOperador = parseInt(ROLROL);
//	}
	if (ROLROL=="1002"||ROLROL=="1005"){
		incidencia.area = "1";
	} else if (ROLROL=="1003"||ROLROL=="1006"){
		incidencia.area = "2";
	} else if (ROLROL=="1004"||ROLROL=="1007"){
		incidencia.area = "3";
	}
}

window.onload = function(){
		
		console.log("----------------> window.onload");
//		console.log("incidencia...");
//		console.log(incidencia);
		
		MIDService.buildLists();
		MapaIncidencias.init();
		
		$('#btnPlay').click(function(){
			if($('.btn-warning').length>0){
				
			} else {
				
			}
			
			
		});	
		$('[data-toggle="tooltip"]').tooltip()
		
		setInterval(function(){
			if(flagTetra && flagVoxiva && flagWaze){
				$('#update').find('i').removeClass('fa-spin');
			}
		},500);
		
//		$('#showSubzonas').unbind().click(function(){
//			MapaIncidencias.showSubzonas();
//		});
		
		
		$('#queryTimelap').click(function(){
			if($('.btn-warning').length>0){
				console.log("AMARILLO");
				if ( ($('#inputIncidencia').val()==null || $('#inputIncidencia').val()=="")
						&& ($('#inputNroCasoVoxiva').val()==null || $('#inputNroCasoVoxiva').val()=="") ){
					incidencia.idIncidencia = $('#inputIncidencia').val();
					$('#inputIncidencia').val("");
					console.log("No hay id_incidencia ni nro_caso_voxiva");
					bootbox.alert("¡Debe ingresar el Id de Incidencia o el Nro de Caso Voxiva!");
				} else {
					console.log("Ejecuta consulta historica")
					//ejecuta ajaxWazeTimelap

					//ejecuta ajaxVoxivaTimelap
					MapaIncidencias.ajaxVoxivaTimelap();
					
					//ejecuta fake ajaxWaze
//					MapaIncidencias.ajaxWaze();
					
					//ejecuta ajaxTetraTimelap
					MapaIncidencias.ajaxTetraTimelap();
					
				}
				
			} else {
				console.log("POR DEFECTO");
				bootbox.alert("Mapa en modo alerta. Primero debe activar el modo histórico");
			}
			
		});
		
		
		$('#myRange').change(function(){
		    var minuto =$(this).val();
		    console.log("valorCambiado");
		    console.log(minuto);
//		    MapaIncidencias.ajaxWaze();
//			MapaIncidencias.ajaxTetraTimelap();
		});
		
		
}



