var center = new google.maps.LatLng(-12.121446, -77.030175);
var INTERVALO_TIEMPO = (60000)*2;	
var arrPuntosGlobales = [];
//var markers = [];
var iterator = 0;
var map;
var map2;

var mapPlayer;
var tpoExposicion;

var tpoExpo;
var fec1;
var fec2;

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
//		$.each(MapaIncidencias.markersVoxiva,function(i,m){
//			if(arrSelecteds.indexOf(m.tipo)>=0){
//				m.marker.setVisible(true);
//			}else{
//				m.marker.setVisible(false);
//			}
//		});
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
		$('#map-canvas').css('height',($(window).height()-50)+'px');
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
				MapaIncidencias.map.setCenter(center);
				MapaIncidencias.map.setZoom(18);
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
//				flightPathAprox.setMap(MapaIncidencias.map);
//				if(infowindowAprox){
//					infowindowAprox.close();
//				}
//				infowindowAprox = new google.maps.InfoWindow({
//					content: data.toponimia+' CDRA. '+data.cdra
//				});
//				infowindowAprox.setPosition(center);
//				infowindowAprox.open(MapaIncidencias.map);	
//			    google.maps.event.addListener(flightPathAprox, 'click', function(event) {
//					infowindowAprox.setPosition(event.latLng);
//					infowindowAprox.open(MapaIncidencias.map);
//				});
		},
				
				
		redimensionIcons:function(arrMarkers){
				$.each(arrMarkers , function(key,value){
					if(value.marker.icon.size){
						if(MapaIncidencias.map.getZoom()<=16){
							var newIcon = {
							    url: value.marker.icon.url, // url
							    scaledSize: initSizeIcon, // scaled size
							    origin: null, // origin
				    			anchor: null // anchor
							};
							value.marker.setIcon(newIcon);
						}else if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
		markersWazeTimelap:[],
		polylinesTimelap:[],
		markersTetra:[],
		markersTetraTimelap:[],
		arrTetraTimelap:[],
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
				
				var styledMap1 = new google.maps.StyledMapType(style1, { name: "S1" });
				var styledMap2 = new google.maps.StyledMapType(style2, { name: "S2" });
				var styledMap3 = new google.maps.StyledMapType(style3, { name: "S3" });
				var styledMap4 = new google.maps.StyledMapType(style4, { name: "S4" });
				var styledMap5 = new google.maps.StyledMapType(style5, { name: "S5" });
				var styledMap6 = new google.maps.StyledMapType(style6, { name: "S6" });
				var styledMap7 = new google.maps.StyledMapType(style7, { name: "S7" });
				var styledMap8 = new google.maps.StyledMapType(style8, { name: "S8" });
				var styledMap9 = new google.maps.StyledMapType(style9, { name: "S9" });
				var styledMap10 = new google.maps.StyledMapType(style10, { name: "S10" });
				
//				var osmMapType = new google.maps.ImageMapType({
//			         	getTileUrl: function(coord, zoom) {
//                		return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
//            		},
//            		tileSize: new google.maps.Size(256, 256),
//            		name: "OSM",
//            		maxZoom: 18
//        		});
       
				////////////////////////////////////////////////////////////////////////////////////
				
//				google.maps.visualRefresh = true;
				
				MapaIncidencias.map = new google.maps.Map(document.getElementById('map-canvas'), {
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
			        			'style2',
			        			'style3',
			        			'style4',
			        			'style5',
			        			'style6',
			        			'style7',
			        			'style8',
			        			'style9',
			        			'style10'
//			        			,'OSM'
			        		]
			        },
//			        
				});
				
				
				
				////////////////////////////////////////
				MapaIncidencias.map.mapTypes.set('style1', styledMap1);
				MapaIncidencias.map.mapTypes.set('style2', styledMap2);
				MapaIncidencias.map.mapTypes.set('style3', styledMap3);
				MapaIncidencias.map.mapTypes.set('style4', styledMap4);
				MapaIncidencias.map.mapTypes.set('style5', styledMap5);
				MapaIncidencias.map.mapTypes.set('style6', styledMap6);
				MapaIncidencias.map.mapTypes.set('style7', styledMap7);
				MapaIncidencias.map.mapTypes.set('style8', styledMap8);
				MapaIncidencias.map.mapTypes.set('style9', styledMap9);
				MapaIncidencias.map.mapTypes.set('style10', styledMap10);
//				MapaIncidencias.map.mapTypes.set('OSM', osmMapType);
				
//				MapaIncidencias.map.setMapTypeId('style1');
				//////////////////////////////////////
				
				//Defining control parameters
                var controlDiv = document.createElement('div');
                controlDiv.className = 'mapControl';
                controlDiv.id = 'mapCoordinates';
                controlDiv.innerHTML = 'Lat/Lng: 0.00 / 0.00';
                controlDiv.style = 'color:red';

                //Creating a control and adding it to the map.
                MapaIncidencias.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controlDiv);

                //Listening the map for mousemove event to show it in control.
                google.maps.event.addListener(MapaIncidencias.map, 'mousemove', function(e) {
                    var coordinateText = 'Lat/Lng: ' + e.latLng.lat().toFixed(9) + ' / ' + e.latLng.lng().toFixed(9);
                    controlDiv.innerHTML = coordinateText;
                });
                
				google.maps.event.addListener(MapaIncidencias.map, 'idle', function() {
					$('#actualizarBtn').css('z-index','999');
				});
				google.maps.event.addListener(MapaIncidencias.map, 'click', function(event) {
					if($('.btn-warning').length>0){
//						console.log("call ajaxVoxiva --> No ejecuta porque el mapa esta en modo historico");
					} else {
						IncidenciaService.openFormRegistroNuevo({
			        		title:'Registrar Incidencia'
			        	});
						$.ajax({
							url: PATH_PROYECTO_BASE+"catastro/get-name-street",
						    dataType: "json",
						    data:{latitud:event.latLng.lat(),longitud:event.latLng.lng()},
						    success: function( response ) {
						    	var result = response.result || [];
						    	Ext.getCmp('coordenadas').setValue(event.latLng.lat()+' '+event.latLng.lng());
						    	if(result.length>0){
						    		var name = result[0];
						    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1]:name.names[0]);
						    	} else {
						    		Ext.getCmp('txtDireccion').setReadOnly(false);
						    	}
						    }
						});
						IncidenciaService.setZonaSubZona2(event.latLng.lng()+' '+event.latLng.lat());
						Ext.id();
					}
					
				});
				google.maps.event.addListener(MapaIncidencias.map, 'bounds_changed', function() {
					if(MapaIncidencias.markers.length>0)				{ MapaIncidencias.redimensionIcons(MapaIncidencias.markers); }
					if(MapaIncidencias.markersVigilantes.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersVigilantes); }
					if(MapaIncidencias.markersEstacionamientos.length>0){ MapaIncidencias.redimensionIcons(MapaIncidencias.markersEstacionamientos); }
					if(MapaIncidencias.markersCambistas.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersCambistas); }
//					if(MapaIncidencias.markersReach.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersReach); }
//					if(MapaIncidencias.markersPos.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersPos); }
				});
				function buildCamaras(ip,lat,lon,titulo,isPtz){
					var markerCamara = new google.maps.Marker({
						position: new google.maps.LatLng(lat, lon),
						map: MapaIncidencias.map,
						draggable: false,
						visible:false,
				        mapTypeId: google.maps.MapTypeId.ROADMAP,
				        icon: new google.maps.MarkerImage(PATH_PROYECTO_BASE+'images/camara.png',null,null,null,new google.maps.Size(31,33))
					});
					MapaIncidencias.markersCamaras.push(markerCamara);
					var infowindowC = new google.maps.InfoWindow({
			    		content:''
					});
			    	google.maps.event.addListener(markerCamara, 'click', function () {
						var parametros = 'ipCam='+ip+'&isPtz='+isPtz;
						setTimeout(function(){
							infowindowC.setContent('<b>'+titulo+'</b><br/><iframe frameBorder="0" scrolling="no" src="/mobileApps/images/indigo/camaras.html?'+parametros+'&time='+(new Date()).getTime()+'" width="450px" height="400px"></iframe>');
							infowindowC.open(MapaIncidencias.map, markerCamara);
						},150);
			    	});
				}
				
				$.ajax({
					url: PATH_PROYECTO_BASE+"mapa-incidencia/list-camaras",
					dataType: "json",
					cache: false,
					data:{ rol: ROLROL },
					success: function( response ) {
						$.each(response.data,function(i,cam){
							var lat = parseFloat(cam['coordenadas'].split(',')[0]);
							var lng = parseFloat(cam['coordenadas'].split(',')[1]);
							var isPtz = (cam['model'].indexOf('BX')>=0?'1':'0');
							buildCamaras(cam['ip'] , lat , lng,'['+cam['id_cam']+'] '+cam['nombre'], isPtz);	
						});
					}
				});
				MapaIncidencias.buildWazeService();
				MapaIncidencias.buildTetraService();
				MapaIncidencias.buildServiceVoxiva();
				MapaIncidencias.buildVigilantesService();
				MapaIncidencias.buildEstacionamientoService();
				MapaIncidencias.buildCambistasService();
//				MapaIncidencias.buildReachService();
//				MapaIncidencias.buildPosService();
				MapaIncidencias.refreshWaze();
				MapaIncidencias.refreshTetra();
				MapaIncidencias.refreshVoxiva();
				MapaIncidencias.refreshCambista();
//				MapaIncidencias.refreshReach();
//				MapaIncidencias.refreshPos();
				MapaIncidencias.buildSubzonas();
				MapaIncidencias.buildZonas();
				MapaIncidencias.buildAreas();
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
					case 'tetra11':		visible = MapaIncidencias.getVisible('tetra11'); break;
					case 'vigilante1':	visible = MapaIncidencias.getVisible('vigilante1'); break;
					case 'vigilante2':	visible = MapaIncidencias.getVisible('vigilante2'); break;
					case 'vigilante3':	visible = MapaIncidencias.getVisible('vigilante3'); break;
				}
				var icon;
				if(MapaIncidencias.map.getZoom()<=16){	
					icon = {
						    url: image, // url
						    scaledSize: initSizeIcon, // scaled size
						    origin: null, // origin
			    			anchor: null // anchor
					};
				}else if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
					icon = {
					    url: image, // url
					    scaledSize: iconScale2, // scaled size
					    origin: null, // origin
		    			anchor: null // anchor
					};
				}else if(MapaIncidencias.map.getZoom() > 17){
					icon = {
					    url: image, // url
					    scaledSize: iconScale3, // scaled size
					    origin: null, // origin
		    			anchor: null // anchor
					};
				}
				var marker = new google.maps.Marker({
					position: options.punto,
					map: MapaIncidencias.map,
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
							infowindow.open(MapaIncidencias.map, marker);
						}, 200);
					});
				}else{
					google.maps.event.addListener(marker, 'click', function () {
						if(isAnimation){ marker.setAnimation(null); }
						infowindow.open(MapaIncidencias.map, marker);
					});
				}
		},
		
		
		
		
		addMarker2:function(options){
			var image = options.icon;
			var btnAddVoxWaze = '';
//			if(options.objWaze  && (options.objWaze && options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('ROAD_CLOSED_HAZARD')>-1 || options.objWaze.subtype.indexOf('HAZARD_')>-1 || options.objWaze.subtype.length==0) && (options.objWaze.subtype!='HAZARD_ON_ROAD_CONSTRUCTION')){
//				btnAddVoxWaze = '<br><div style="margin-top:10px;"><button data-cor-y="'+options.objWaze.location.y
//								+'" data-cor-x="'+options.objWaze.location.x
////								+'" class="btn btn-warning btn-sm saveWazeVoxiva" '
//								+'" class="btn btn-info btn-sm saveWazeVoxiva" id="'+options.objWaze.location.y+'_'+options.objWaze.location.x+'_btn_update_voxiva" '  
////								+ 'data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" '
//								+'style="display:inline;margin-right:20px">Generar Incidencia</button></div>';
//			}
//			if(options.tipo == 'waze' && ROLROL!=1001 && ROLROL!=1002 && ROLROL!=1003){
			if(options.tipo == 'waze' && (ROLROL==null || ROLROL=="" || ROLROL<1001) && ROL!=992){
				if(options.objWaze  && (options.objWaze && options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('ROAD_CLOSED_HAZARD')>-1 || options.objWaze.subtype.indexOf('HAZARD_')>-1 || options.objWaze.subtype.length==0) && (options.objWaze.subtype!='HAZARD_ON_ROAD_CONSTRUCTION')){
					btnAddVoxWaze = '<br><div style="margin-top:10px;"><button data-cor-y="'+options.objWaze.location.y
									+'" data-cor-x="'+options.objWaze.location.x
//									+'" class="btn btn-warning btn-sm saveWazeVoxiva" '
									+'" class="btn btn-info btn-sm saveWazeVoxiva" id="'+options.objWaze.location.y+'_'+options.objWaze.location.x+'_btn_update_voxiva" '  
//									+ 'data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" '
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
				case 'tetra11':		visible = MapaIncidencias.getVisible('tetra11'); break;
				case 'vigilante1':	visible = MapaIncidencias.getVisible('vigilante1'); break;
				case 'vigilante2':	visible = MapaIncidencias.getVisible('vigilante2'); break;
				case 'vigilante3':	visible = MapaIncidencias.getVisible('vigilante3'); break;
			}
			var icon;
			
			icon = {
				    url: image, // url
				    scaledSize: initSizeIcon, // scaled size
				    origin: null, // origin
	    			anchor: null // anchor
			};
			
//			if(MapaIncidencias.mapPlayer.getZoom()<=16){	
//				icon = {
//					    url: image, // url
//					    scaledSize: initSizeIcon, // scaled size
//					    origin: null, // origin
//		    			anchor: null // anchor
//				};
//			}else if(MapaIncidencias.mapPlayer.getZoom() > 16 && MapaIncidencias.mapPlayer.getZoom() <= 17){	
//				icon = {
//				    url: image, // url
//				    scaledSize: iconScale2, // scaled size
//				    origin: null, // origin
//	    			anchor: null // anchor
//				};
//			}else if(MapaIncidencias.mapPlayer.getZoom() > 17){
//				icon = {
//				    url: image, // url
//				    scaledSize: iconScale3, // scaled size
//				    origin: null, // origin
//	    			anchor: null // anchor
//				};
//			}
			
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
				uuid:options.uuid,
				issi:options.issi
			}
			MapaIncidencias.markers.push(objMarker);
			if(options.tipo == 'waze'){
				MapaIncidencias.markersWaze.push(objMarker);
			}
			if(options.tipo.indexOf('tetra')>=0){
				MapaIncidencias.markersTetraTimelap.push(objMarker);
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
				flightPath.setMap(MapaIncidencias.map);
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
					infowindow.open(MapaIncidencias.map);
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
			        	}else if(area.indexOf("AMBULANCIA") >= 0){
			        		estadoDesc = arr[i].detalle.area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/ambulancia.png';
			        		tipo = 'tetra11';
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
		
		
		
		getArrayTetraTimelap:function(arr, min){
				var tipo, obj;
				var arrTetra = [];
				var pm = parseInt(min)+60;
				
//				console.log("arr");
//				console.log(arr);
				
				for (var i = 0; i < arr.length; i++) {
//					console.log("i: "+i);
		        	if(arr[i].posicion[pm] != null ){
//		        		console.log("arr["+i+"].posicion");
//		        		console.log(arr[i].posicion);
//		        		console.log("\t\tarr[i].posicion[pm].longitud = "+arr[i].posicion[pm].longitud);
//		        		console.log("\t\tarr[i].posicion[pm].latitud = "+arr[i].posicion[pm].latitud);
		        		
			        	obj = new Object();
			        	
//			        	var t;
//			        	try{
//			        		obj['punto'] = new google.maps.LatLng(arr[i].posicion[pm].longitud, arr[i].posicion[pm].latitud);
//			        		t = i;
//			        	}catch(e){
//			        		console.log("error con arr[i]... ");
//			        		console.log(t);
//			        	}
			        	
			        	obj['punto'] = new google.maps.LatLng(arr[i].posicion[pm].longitud, arr[i].posicion[pm].latitud);
			        	
			        	//ESTE ES EL CORRECTO DESPUES DE REESTRUCTURAR LOS CAMPOS DE LA TABALA geo_sereno_ruta
//			        	obj['punto'] = new google.maps.LatLng(arr[i].posicion[pm].latitud, arr[i].posicion[pm].longitud);
			        	
			        	obj['isRadioTetra'] = true;
			        	obj['issi']=arr[i].issi;
			        	
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
			        	}else if(area.includes("AMBULANCIA")){
			        		estadoDesc = arr[i].area;
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/ambulancia.png';
			        		tipo = 'tetra11';
			        	}else{
			        		estadoDesc = "OTROS";
			        		obj['icon'] =PATH_PROYECTO_BASE+'images/tetra_rojo.png';
			        		tipo = 'tetra3';	
			        	}
			        	
//			        	obj['html'] =	'<div id="detalle'+arr[i].issi+'" style="padding: 5px 0px 5px 0px;width:200px;" >' +
//										'<p style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+estadoDesc+'</b></p>' +
//										'<p><strong>issi: </strong><span class="issi">'+arr[i].issi+'</span><br /> <strong>Serie: </strong>'+arr[i].serie+'<br /><strong>TEI: </strong>'+arr[i].tei+'<br /> </p>'+
//										'<p><strong>Modelo Radio: </strong>'+arr[i].modeloRadio+'<br /> <strong>Tipo Radio: </strong> '+arr[i].tipoRadio+'<br /><strong>Marca Vehiculo: </strong>'+arr[i].marcaVehiculo+'<br /> </p>'+
//							    		'<p><strong>Modelo Vehiculo: </strong>'+arr[i].modeloVehiculo+'<br /> <strong>Tipo Vehiculo: </strong>'+arr[i].tipoVehiculo+'<br /><strong>Placa: </strong>'+arr[i].placa+'<br /> </p>'+
//							    		'<p><strong>Zona: </strong>'+arr[i].zona+'</p>'+
//										'</div>';
			        	
			        	obj['html'] =	'<div id="detalle'+arr[i].issi+'" style="width:40px;" >' +
										'<p style="width:100%;float:left;font-family:Verdana;font-size:10px;">'+arr[i].issi+'</span></p>'+
										'</div>';
		
						obj['tipoService'] = tipo;
						obj['isRadioTetra'] = true;
						
						arrTetra.push(obj);
						
		        	}
		        
			        
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
		
		
		ajaxCambista:function(){
				procesandoCambista = true;
				var arrCambistas = [];
				$.ajax({
				    url: PATH_PROYECTO_BASE+"mapa-incidencia/get-ubicacion-cambistas",
				    dataType: "json",
				    success: function( response ) {
				    	$.each(MapaIncidencias.markersCambistas,function(i,v){
				    		try{
				    			v.marker.setMap(null);
				    		}catch(e){
				    		}
				    	});
				    	MapaIncidencias.markersCambistas = [];
				    	$.each(MapaIncidencias.markers,function(a,b){
				    		if(b && b.marker.tipo == 'cambistas'){
				    			MapaIncidencias.markers.splice(b,1);
				    		}
				    	});
				    	var data = response.data;
			    		$.each(data,function(i,e){
			    			var dir ="";
			    			try{
			    				dir=e.ubicacionActual.direccion;
			    			}catch(e){
			    				dir="DESCONOCIDA";
			    			}
			    			var infowindow = new google.maps.InfoWindow({
					    		content:'<b>Nombre: </b>'+e.nombre+'<br>' +
					    				'<b>Placa: </b>'+e.placa+'<br>' +
//					    				'<b>Dirección: </b>'+try{}catch(e){}e.ubicacionActual!=null?e.ubicacionActual.direccion:"DESCONOCIDA"+'<br>' +
					    				'<b>Dirección: </b>'+dir+'<br>' +
					    				'<b>Modelo: </b>'+e.modelo.descripcion+'<br>' +
					    				'<b>Marca: </b>'+e.modelo.marca.descripcion+'<br>'
					    	});
							var image = PATH_PROYECTO_BASE+'images/dolar.png';
							var icon;
							if(MapaIncidencias.map.getZoom()<=16){		
									icon = {
									    url: image, // url
									    scaledSize: initSizeIcon, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
							}else{
								if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
					    		position: new google.maps.LatLng(parseFloat(e.ubicacionActual.latitude), parseFloat(e.ubicacionActual.longitude)),
					    		map: MapaIncidencias.map,
					    		draggable: false,
					    		visible:MapaIncidencias.getVisible('cambistas'),
					            mapTypeId: google.maps.MapTypeId.ROADMAP,
					            icon: icon
					    	});
					    	google.maps.event.addListener(marker, 'click', function () {
					    		infowindow.open(MapaIncidencias.map, marker);
					    	});
					    	var objMarker = {
					    			marker : marker
					    			,tipo:'cambistas'
					    	}
					    	MapaIncidencias.markersCambistas.push(objMarker);
						});
						var alertas = response.alertas;
						$.each(alertas,function(i,e){
							var infowindow = new google.maps.InfoWindow({
								content:	'<b>Dni: </b>'+e.numDocIdent+'<br>' +
						    				'<b>Placa: </b>'+e.numPlaca+'<br>' +
						    				'<b>Dirección: </b>'+e.direccion+'<br>' +
						    				'<b>Alerta: </b>'+e.desAlerta+'<br>'+
						    				'<br><div style="margin-top:10px;"><button data-cor-y="'+e.latitud+'" data-cor-x="'+e.longitud+
						    				'" class="btn btn-warning btn-sm saveCambistaVoxiva" style="display:inline;margin-right:20px">Registrar Incidencia</button></div>'
					    	});
							var image = PATH_PROYECTO_BASE+'images/dolarAlerta.png';
							var icon;
							google.maps.event.addListener(infowindow, 'domready', function (e) {
								var geo = this;
		    					$('.saveCambistaVoxiva').click(function(){
		    						MIDService.geoCords = 	geo.position;
									MIDService.objSelected = null;
									$('#idIncidencia-form').val('');
									$('#medioWaze').val('9831');
									$('#latitud').val($(this).attr('data-cor-y'));
									$('#longitud').val($(this).attr('data-cor-x'));
									$('#myModalRegistro').modal();
								});
							});
							if(MapaIncidencias.map.getZoom()<=16){	
									icon = {
									    url: image, // url
									    scaledSize: initSizeIcon, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
							}else{
								if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
					    		position: new google.maps.LatLng(parseFloat(e.latitud), parseFloat(e.longitud)),
					    		map: MapaIncidencias.map,
					    		draggable: false,
					    		visible:MapaIncidencias.getVisible('cambistas'),
					            mapTypeId: google.maps.MapTypeId.ROADMAP,
					            icon: icon
					    	});
					    	marker.setAnimation(google.maps.Animation.BOUNCE);
					    	google.maps.event.addListener(marker, 'click', function () {
					    		infowindow.open(MapaIncidencias.map, marker);
					    		marker.setAnimation(null);
					    	});
					    	var objMarker = {
					    			marker : marker,
					    			tipo:'cambistas'
					    	}
						    MapaIncidencias.markersCambistas.push(objMarker);
						});
				    	procesandoCambista = false;
				    }
				});
		},
		
		
		buildCambistasService:function(){
				MapaIncidencias.ajaxCambista();
		},
	
		
		// VERSION 1 DE ajaxReach
		ajaxReach:function(){
			
			procesandoReach = true;
			flagReach = false;

			$.ajax({
		    url: PATH_PROYECTO_BASE+"mapa-incidencia/reach-feed",
		    dataType: "json",
		    method: "GET",
		    success: function( response ) {
		    	flagReach = true;
		    	$.each(MapaIncidencias.markersReach,function(i,v){
		    		try{
		    			v.marker.setMap(null);
		    		}catch(e){
		    			
		    		}
		    	});
		    	MapaIncidencias.markersReach = [];
		    	$.each(MapaIncidencias.markers,function(a,b){
		    		if(b && b.marker.tipo == 'reach'){
		    			MapaIncidencias.markers.splice(b,1);
		    		}
		    	});
//		    	MIDService.incidenciasReach.push = [];
		    	var tituloV = 'ALERTA REACH FEED'; 
		    	$.each(response.data,function(i,o){
					
					
		    		var infowindow = new google.maps.InfoWindow({
			    		content:	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
									'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
									'<b>Id Reach: </b>'+o.id+'<br>' +
				    				'<b>Descripcion: </b>'+o.description+'<br>' +
				    				'<b>Dirección: </b>'+o.locationAddress+'<br>'+
//				    				'<b>Fecha: </b>'+new Date(o.locationDatetime).toLocaleString('en-US')+'<br>'+
//				    				'<b>Fecha de notificación: </b><span>'+new Date(o.fecha).toLocaleString('en-US')+'<br>'+
				    				'<b>Fecha de notificación: </b><span>'+new Date(o.fecha).toLocaleString()+'<br>'+
//				    				'<b>Fecha: </b>'+new Date(convertToDateTime(o.fecha, 'yyyyddMMHHmmss')).toLocaleString('en-US')+'<br>'+
				    				'<br><div style="margin-top:10px;"><button data-cor-y="'+o.locationLat+'" data-cor-x="'+o.locationLng+
				    				'" class="btn btn-warning btn-sm saveReach" id="'+o.id+'_btn_save_reach" style="display:inline;margin-right:20px">Registrar Incidencia</button></div>'
				    });
		    		
		    		google.maps.event.addListener(infowindow, 'domready', function (e) {
			    			var w = infowindow;
			    			var geo = this;
			    			$('.saveReach').unbind().click(function(){
					    		var opt = o;
						    	IncidenciaService.openFormRegistroNuevo({
		                    		title:'Registrar Incidencia',
		                    		optReach: opt
		                    	});
						    	Ext.id();
								return false;
							});
					});
		    		
		    		var image = PATH_PROYECTO_BASE+'images/reach_vi.png';
					var icon;
					
					if(MapaIncidencias.map.getZoom()<=16){	
							icon = {
							    url: image, // url
							    scaledSize: initSizeIcon, // scaled size
							    origin: null, // origin
				    			anchor: null // anchor
							};
					}else{
						if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
			    		position: new google.maps.LatLng(parseFloat(o.locationLat), parseFloat(o.locationLng)),
			    		map: MapaIncidencias.map,
			    		draggable: false,
			    		visible:MapaIncidencias.getVisible('reach'),
			            mapTypeId: google.maps.MapTypeId.ROADMAP,
			            icon: icon
			    	});
			    	
			    	if(o.indLeido+''!='S'){
				    	marker.setAnimation(google.maps.Animation.BOUNCE);
			    	}
			    	
			    	google.maps.event.addListener(marker, 'click', function () {
			    		infowindow.open(MapaIncidencias.map, marker);
			    	});
			    	
			    	var objMarker = {
			    			marker : marker,
			    			tipo:'reach',
			    			id:o.id
			    	}
			    	
			    	MapaIncidencias.markers.push(objMarker);
			    	MapaIncidencias.markersReach.push(objMarker);
			    	
		    	});
		    	
		    	procesandoReach = false;

		    }});
			
		},


		
		buildReachService:function(){
				MapaIncidencias.ajaxReach();
		},
		
		
		ajaxPos:function(){
			
			procesandoPos = true;
			flagPos = false;

			$.ajax({
		    url: PATH_PROYECTO_BASE+"mapa-incidencia/alerta-pos",
		    dataType: "json",
		    method: "GET",
		    success: function( response ) {
		    	flagPos = true;
		    	$.each(MapaIncidencias.markersPos,function(i,v){
		    		try{
		    			v.marker.setMap(null);
		    		}catch(e){
		    			
		    		}
		    	});
		    	MapaIncidencias.markersPos = [];
		    	$.each(MapaIncidencias.markers,function(a,b){
		    		if(b && b.marker.tipo == 'pos'){
		    			MapaIncidencias.markers.splice(b,1);
		    		}
		    	});
//		    	MIDService.incidenciasReach.push = [];
		    	var tituloV = 'ALERTA POS'; 
		    	$.each(response.data,function(i,o){
					
		    		var infowindow = new google.maps.InfoWindow({
		    			content:	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
									'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
									'<b>Cod. Comercio: </b>'+o.codComer+'<br>' +
//									'<b>Id Dispositivo: </b>'+o.idDisp!=null?o.idDisp:"Desconocido"+'<br>' +
									'<b>Id Dispositivo: </b>'+(o.idDisp?o.idDisp:'Desconocido')+'<br>' +
				    				'<b>Nomb. Comercial: </b>'+o.nombComer+'<br>' +
				    				'<b>Giro Comercial: </b>'+o.descGiro+'<br>' +
				    				'<b>Dirección: </b>'+o.dirComer+'<br>'+
				    				'<b>Fecha y hora: </b><span>'+new Date(o.fecUltima).toLocaleString()+'<br>'+
				    				'<br><div style="margin-top:10px;"><button data-cor-y="'+o.latitud+'" data-cor-x="'+o.longitud+
						    				'" class="btn btn-warning btn-sm savePos" id="'+o.idPos+'_btn_save_reach" style="display:inline;'+
						    				'margin-right:20px">Registrar Incidencia</button></div>'
				    });
		    		

		    		google.maps.event.addListener(infowindow, 'domready', function (e) {
			    			var w = infowindow;
			    			var geo = this;
			    			$('.savePos').unbind().click(function(){
					    		var opt = o;
					    		IncidenciaService.openFormRegistroNuevo({
		                    		title:'Registrar Incidencia',
		                    		optPos: opt
		                    	});
						    	Ext.id();
								return false;
							});
					});
		    		
		    		var image = PATH_PROYECTO_BASE+'images/pos_alert.png';
					var icon;
					
					if(MapaIncidencias.map.getZoom()<=16){	
							icon = {
							    url: image, // url
							    scaledSize: initSizeIcon, // scaled size
							    origin: null, // origin
				    			anchor: null // anchor
							};
					}else{
						if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
			    		position: new google.maps.LatLng(parseFloat(o.latitud), parseFloat(o.longitud)),
			    		map: MapaIncidencias.map,
			    		draggable: false,
			    		visible:MapaIncidencias.getVisible('pos'),
			            mapTypeId: google.maps.MapTypeId.ROADMAP,
			            icon: icon
			    	});
			    	
			    	marker.setAnimation(google.maps.Animation.BOUNCE);
			    	
			    	google.maps.event.addListener(marker, 'click', function () {
			    		infowindow.open(MapaIncidencias.map, marker);
			    	});
			    	
			    	var objMarker = {
			    			marker : marker,
			    			tipo:'pos',
			    			id:o.idPos
			    	}
			    	
			    	MapaIncidencias.markers.push(objMarker);
			    	MapaIncidencias.markersPos.push(objMarker);
			    	
		    	});
		    	
		    	procesandoPos = false;

		    }});
			
		
			
		},
		
		buildPosService:function(){
			MapaIncidencias.ajaxPos();
		},
		
		buildEstacionamientoService:function(){
				var arrVigilantes = [];
				$.ajax({
				    url: PATH_PROYECTO_BASE+"mapa-incidencia/estacionamientos",
				    dataType: "json",
				    data:{ publico:'N', tipo:9396 },
				    success: function( response ) {
			    		var data = response.data;
			    		$.each(data,function(i,e){
							var infowindow = new google.maps.InfoWindow({
					    		content:'<b>Nombre: </b>'+e.nombre+'<br>' +
					    				'<b>Dirección: </b>'+e.nombreVia+'<br>' +
					    				'<b>Número: </b>'+e.numero+'<br>' +
					    				'<b>Letra: </b>'+e.letra+'<br>' +
					    				'<b>Interior: </b>'+e.interior+'<br>' +
					    				'<b>Zona: </b>'+e.zona+'<br>' +
					    				'<b>Espacios: </b>'+e.espacios+'<br>' +
					    				'<b>Giro: </b>'+e.giro+'<br>' 
					    	});
					    	var image = PATH_PROYECTO_BASE+'images/parking.png';
							var icon;
							if(MapaIncidencias.map.getZoom()<=16){	
									icon = {
									    url: image, // url
									    scaledSize: initSizeIcon, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
							}else{
								if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
					    		position: new google.maps.LatLng(parseFloat(e.geometria.split(',')[0]), parseFloat(e.geometria.split(',')[1])),
					    		map: MapaIncidencias.map,
					    		draggable: false,
					    		visible:MapaIncidencias.getVisible('estacionamientos'),
					            mapTypeId: google.maps.MapTypeId.ROADMAP,
					            icon: icon
					    	});
					    	google.maps.event.addListener(marker, 'click', function () {
					    		infowindow.open(MapaIncidencias.map, marker);
					    	});
					    	var objMarker = {
				    			marker : marker,
				    			tipo:'estacionamientos'
					    	}
					    	MapaIncidencias.markersEstacionamientos.push(objMarker);
						});
			    	}
				});
		},

		
		buildVigilantesService:function(){
				var arrVigilantes = [];
				$.ajax({
				    url: PATH_PROYECTO_BASE+"mapa-incidencia/vigilantes",
				    dataType: "json",
				    success: function( response ) {
				    		$(".mask-loading-main").hide();
					        var data = response.data;
							$.each(data,function(i,vigilante){
	//								MapaIncidencias.addMarker({
	//									icon:PATH_PROYECTO_BASE+'images/icon_vigilantes.png',
	//									index:i+'_vigilante',
	//									html:'<b>'+vigilante.nombreCompleto+'</b><br>'+vigilante.prestacionServicio+'<br><b>Área '+vigilante.area+'</b>',
	//									punto: new google.maps.LatLng(parseFloat(vigilante.cordenadas.split(',')[0]), parseFloat(vigilante.cordenadas.split(',')[1])),
	//									tipo:'vigilante'+vigilante.area,
	//									isRadioTetra:false
	//								});
									var infowindow = new google.maps.InfoWindow({
							    		content:'<b>'+vigilante.nombreCompleto+'</b><br>'+vigilante.prestacionServicio+
							    				'<br><b>Telefono:</b> '+vigilante.telefono+
							    				'<br><b>Cargo: </b>'+vigilante.cargo+
							    				'<br><b>Área:</b> '+vigilante.area+''
							    	});
							    	var image = PATH_PROYECTO_BASE+'images/icon_vigilantes'+vigilante.area+'.png';
									var icon;
									if(MapaIncidencias.map.getZoom()<=16){	
											icon = {
											    url: image, // url
											    scaledSize: initSizeIcon, // scaled size
											    origin: null, // origin
								    			anchor: null // anchor
											};
									}else{
											if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
							    		position: new google.maps.LatLng(parseFloat(vigilante.cordenadas.split(',')[0]), parseFloat(vigilante.cordenadas.split(',')[1])),
							    		map: MapaIncidencias.map,
							    		draggable: false,
							    		visible:MapaIncidencias.getVisible('vigilante'+vigilante.area),
	//						    		visible:true,
							            mapTypeId: google.maps.MapTypeId.ROADMAP,
							            icon:icon
	//						            icon: new google.maps.MarkerImage( PATH_PROYECTO_BASE+'images/icon_vigilantes'+vigilante.area+'.png' , undefined, undefined, undefined, new google.maps.Size(32,36))
							    	});
							    	google.maps.event.addListener(marker, 'click', function () {
							    		infowindow.open(MapaIncidencias.map, marker);
							    	});
							    	var objMarker = {
							    			marker : marker,
							    			tipo:'vigilante'+vigilante.area
							    	}
							    	MapaIncidencias.markersVigilantes.push(objMarker);
						});
				    }
				});
		},

		
		getArrayWaze:function(arr){
				var arrWaze = [];
				for (var i = 0; i < arr.length; i++) {
					obj = new Object();
					obj['uuid'] = arr[i].uuid;
					obj['punto'] = new google.maps.LatLng(arr[i].location.y, arr[i].location.x);
					if(arr[i].subtype == 'ACCIDENT_MINOR'){
						obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
						obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE LEVE</b></div>' +
										'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> ' +
										'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
										//+'<br /><div><button class="btn btn-info">Reportar Incidencia</button></div>';
										//'<b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
					}else{
						if(arr[i].subtype == 'ACCIDENT_MINOR'){
							obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
							obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
											'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE GRAVE</b></div>' +
											'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
											'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
											//+'<br /><div><button class="btn btn-info">Reportar Incidencia</button></div>';
											//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
						}else{
							if(arr[i].subtype == "JAM_MODERATE_TRAFFIC"){
								obj['icon'] =PATH_PROYECTO_BASE+'images/moderado_waze.png';
								obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
												'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO MODERADO</b></div>' +
												'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
												'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
												//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
							}else{
							
								if(arr[i].subtype == "JAM_HEAVY_TRAFFIC"){
									obj['icon'] =PATH_PROYECTO_BASE+'images/grave_waze.png';
									obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
													'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO GRAVE</b></div>' +
													'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
													'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
													//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
								}else{
									if(arr[i].subtype+""=="JAM_STAND_STILL_TRAFFIC"){
										obj['icon'] =PATH_PROYECTO_BASE+'images/paro_total.png';
										obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
														'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO ALTO TOTAL</b></div>' +
														'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
														''; 
														//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
									}else{
										if(arr[i].subtype+""=="JAM_LIGHT_TRAFFIC"){
											obj['icon'] =PATH_PROYECTO_BASE+'images/paro_total.png';
											obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
															'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO</b></div>' +
															'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
															'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
													//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
										}else{
											if(arr[i].type+""=="CONSTRUCTION"){
													obj['icon'] =PATH_PROYECTO_BASE+'images/construccion_waze.png';
													obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																	'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>CONSTRUCCIÓN</b></div>' +
																	'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																	'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																	//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
											} else {
												if(arr[i].type+""=="ROAD_CLOSED"){
													var titulo = '';
													switch(arr[i].subtype){
														case 'ROAD_CLOSED_HAZARD': titulo = 'Via Cerrada: Peligro'; break;
														case 'ROAD_CLOSED_CONSTRUCTION': titulo = 'Via Cerrada: Construcción'; break;
														case 'ROAD_CLOSED_EVENT': titulo = 'Via Cerrada: Evento'; break;
														default: titulo = 'Via Cerrada'; break;
													}
													titulo = titulo.toUpperCase();
													obj['icon'] =PATH_PROYECTO_BASE+'images/calle_cerrada_waze.png';
													obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																	'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+titulo+'</b></div>' +
																	'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																	'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																	//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
												} else {
													if(arr[i].type+""=="HAZARD" ||  arr[i].type+""=="WEATHERHAZARD" ){
														var titulo = '';
														obj['icon'] =PATH_PROYECTO_BASE+'images/peligro_waze.png';
														switch(arr[i].subtype){
															case 'HAZARD_ON_ROAD': titulo = 'Peligro vial'; break;
															case 'HAZARD_ON_SHOULDER': titulo = 'Peligro en la berma'; break;
															case 'HAZARD_WEATHER': titulo = 'Peligro de clima'; break;
															case 'HAZARD_ON_ROAD_OBJECT': titulo = 'Objetos en la vía'; break;
															case 'HAZARD_ON_ROAD_POT_HOLE': titulo = 'Bache'; break;
															case 'HAZARD_ON_ROAD_ROAD_KILL': titulo = 'Peligro de atropellamientos'; break;
															case 'HAZARD_ON_SHOULDER_CAR_STOPPED': titulo = 'Vehículo detenido a un lado de la vía'; break;
															case 'HAZARD_ON_SHOULDER_ANIMALS': titulo = 'Peligro de animales en la berma'; break;
															case 'HAZARD_ON_SHOULDER_MISSING_SIGN': titulo = 'Peligro de falta de señal en la berma'; break;
															case 'HAZARD_WEATHER_FOG': titulo = 'Peligro de niebla'; break;
															case 'HAZARD WEATHER_HAIL': titulo = 'Peligro de granizo'; break;
															case 'HAZARD_WEATHER_HEAVY_RAIN': titulo = 'Peligro de  fuertes lluvias'; break;
															case 'HAZARD_WEATHER_HEAVY_SNOW': titulo = 'Peligro de fuertes nevadas'; break;
															case 'HAZARD_WEATHER_FLOOD': titulo = 'Peligro de inundaciones'; break;
															case 'HAZARD_WEATHER_MONSOON': titulo = 'Peligro de vientos fuertes'; break;
															case 'HAZARD_WEATHER_TORNADO': titulo = 'Peligro de tornado '; break;
															case 'HAZARD_WEATHER_HEAT_WAVE': titulo = 'Peligro de ola de calor'; break;
															case 'HAZARD_WEATHER_HURRICANE': titulo = 'Peligro de huracán'; break;
															case 'HAZARD_WEATHER_FREESING_RAIN': titulo = 'Peligro de lluvias'; break;
															case 'HAZARD_ON_ROAD_LANE_CLOSED': titulo = 'Peligro en la vía: carriles cerrados'; break;
															case 'HAZARD_ON_ROAD_OIL': titulo = 'Peligro de aceite en la vía'; break;
															case 'HAZARD_ON_ROAD_ICE': titulo = 'Peligro de hielo en la vía'; break;
															case 'HAZARD_ON_ROAD_CONSTRUCTION': obj['icon'] =PATH_PROYECTO_BASE+'images/construccion_waze.png'; titulo = 'construcción'; break;
															case 'HAZARD_ON_ROAD_CAR_STOPPED': titulo = 'Automóvil detenido sobre el camino'; break;
															default: titulo = 'Peligro vial'; break;
														}
														titulo = titulo.toUpperCase();
														obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																		'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+titulo+'</b></div>' +
																		'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																		'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
																		//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
													}else{
														if(arr[i].type == 'JAM'){
														obj['icon'] =PATH_PROYECTO_BASE+'images/moderado_waze.png';
														obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																		'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO</b></div>' +
																		'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																		'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
																		//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
														}else{
															if(arr[i].type.indexOf('ACCIDENT')>=0){
																obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
																obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																				'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE</b></div>' +
																				'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																				'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																				//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
															}else{
															    obj['icon'] =PATH_PROYECTO_BASE+'images/defecto_waze.png';
															    obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																				'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>INFORMACIÓN DE USUARIOS WAZE</b></div>' +
																				'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																				'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY hh:mm:ss A");
																				//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
					obj['objWaze'] = arr[i]; 
					obj['tipoService'] = 'waze';
					obj['isRadioTetra'] = false;
					arrWaze.push(obj);
				}
				return arrWaze;
		},
		
		
		
		getArrayWazeTimelap:function(arr){
				var arrWaze = [];
				for (var i = 0; i < arr.length; i++) {
					obj = new Object();
					obj['uuid'] = arr[i].uuid;
					obj['punto'] = new google.maps.LatLng(arr[i].location.y, arr[i].location.x);
					if(arr[i].subtype == 'ACCIDENT_MINOR'){
						obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
						obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE LEVE</b></div>' +
										'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> ' +
										'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
										//+'<br /><div><button class="btn btn-info">Reportar Incidencia</button></div>';
										//'<b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
					}else{
						if(arr[i].subtype == 'ACCIDENT_MINOR'){
							obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
							obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
											'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE GRAVE</b></div>' +
											'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
											'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
											//+'<br /><div><button class="btn btn-info">Reportar Incidencia</button></div>';
											//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
						}else{
							if(arr[i].subtype == "JAM_MODERATE_TRAFFIC"){
								obj['icon'] =PATH_PROYECTO_BASE+'images/moderado_waze.png';
								obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
												'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO MODERADO</b></div>' +
												'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
												'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
												//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
							}else{
							
								if(arr[i].subtype == "JAM_HEAVY_TRAFFIC"){
									obj['icon'] =PATH_PROYECTO_BASE+'images/grave_waze.png';
									obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
													'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO GRAVE</b></div>' +
													'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
													'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
													//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
								}else{
									if(arr[i].subtype+""=="JAM_STAND_STILL_TRAFFIC"){
										obj['icon'] =PATH_PROYECTO_BASE+'images/paro_total.png';
										obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
														'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO ALTO TOTAL</b></div>' +
														'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
														''; 
														//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
									}else{
										if(arr[i].subtype+""=="JAM_LIGHT_TRAFFIC"){
											obj['icon'] =PATH_PROYECTO_BASE+'images/paro_total.png';
											obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
															'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO</b></div>' +
															'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
															'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
													//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
										}else{
											if(arr[i].type+""=="CONSTRUCTION"){
													obj['icon'] =PATH_PROYECTO_BASE+'images/construccion_waze.png';
													obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																	'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>CONSTRUCCIÓN</b></div>' +
																	'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																	'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																	//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
											} else {
												if(arr[i].type+""=="ROAD_CLOSED"){
													var titulo = '';
													switch(arr[i].subtype){
														case 'ROAD_CLOSED_HAZARD': titulo = 'Via Cerrada: Peligro'; break;
														case 'ROAD_CLOSED_CONSTRUCTION': titulo = 'Via Cerrada: Construcción'; break;
														case 'ROAD_CLOSED_EVENT': titulo = 'Via Cerrada: Evento'; break;
														default: titulo = 'Via Cerrada'; break;
													}
													titulo = titulo.toUpperCase();
													obj['icon'] =PATH_PROYECTO_BASE+'images/calle_cerrada_waze.png';
													obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																	'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+titulo+'</b></div>' +
																	'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																	'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																	//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
												} else {
													if(arr[i].type+""=="HAZARD" ||  arr[i].type+""=="WEATHERHAZARD" ){
														var titulo = '';
														obj['icon'] =PATH_PROYECTO_BASE+'images/peligro_waze.png';
														switch(arr[i].subtype){
															case 'HAZARD_ON_ROAD': titulo = 'Peligro vial'; break;
															case 'HAZARD_ON_SHOULDER': titulo = 'Peligro en la berma'; break;
															case 'HAZARD_WEATHER': titulo = 'Peligro de clima'; break;
															case 'HAZARD_ON_ROAD_OBJECT': titulo = 'Objetos en la vía'; break;
															case 'HAZARD_ON_ROAD_POT_HOLE': titulo = 'Bache'; break;
															case 'HAZARD_ON_ROAD_ROAD_KILL': titulo = 'Peligro de atropellamientos'; break;
															case 'HAZARD_ON_SHOULDER_CAR_STOPPED': titulo = 'Vehículo detenido a un lado de la vía'; break;
															case 'HAZARD_ON_SHOULDER_ANIMALS': titulo = 'Peligro de animales en la berma'; break;
															case 'HAZARD_ON_SHOULDER_MISSING_SIGN': titulo = 'Peligro de falta de señal en la berma'; break;
															case 'HAZARD_WEATHER_FOG': titulo = 'Peligro de niebla'; break;
															case 'HAZARD WEATHER_HAIL': titulo = 'Peligro de granizo'; break;
															case 'HAZARD_WEATHER_HEAVY_RAIN': titulo = 'Peligro de  fuertes lluvias'; break;
															case 'HAZARD_WEATHER_HEAVY_SNOW': titulo = 'Peligro de fuertes nevadas'; break;
															case 'HAZARD_WEATHER_FLOOD': titulo = 'Peligro de inundaciones'; break;
															case 'HAZARD_WEATHER_MONSOON': titulo = 'Peligro de vientos fuertes'; break;
															case 'HAZARD_WEATHER_TORNADO': titulo = 'Peligro de tornado '; break;
															case 'HAZARD_WEATHER_HEAT_WAVE': titulo = 'Peligro de ola de calor'; break;
															case 'HAZARD_WEATHER_HURRICANE': titulo = 'Peligro de huracán'; break;
															case 'HAZARD_WEATHER_FREESING_RAIN': titulo = 'Peligro de lluvias'; break;
															case 'HAZARD_ON_ROAD_LANE_CLOSED': titulo = 'Peligro en la vía: carriles cerrados'; break;
															case 'HAZARD_ON_ROAD_OIL': titulo = 'Peligro de aceite en la vía'; break;
															case 'HAZARD_ON_ROAD_ICE': titulo = 'Peligro de hielo en la vía'; break;
															case 'HAZARD_ON_ROAD_CONSTRUCTION': obj['icon'] =PATH_PROYECTO_BASE+'images/construccion_waze.png'; titulo = 'construcción'; break;
															case 'HAZARD_ON_ROAD_CAR_STOPPED': titulo = 'Automóvil detenido sobre el camino'; break;
															default: titulo = 'Peligro vial'; break;
														}
														titulo = titulo.toUpperCase();
														obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																		'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+titulo+'</b></div>' +
																		'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																		'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
																		//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
													}else{
														if(arr[i].type == 'JAM'){
														obj['icon'] =PATH_PROYECTO_BASE+'images/moderado_waze.png';
														obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																		'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO</b></div>' +
																		'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																		'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
																		//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
														}else{
															if(arr[i].type.indexOf('ACCIDENT')>=0){
																obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
																obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																				'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE</b></div>' +
																				'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																				'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																				//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
															}else{
															    obj['icon'] =PATH_PROYECTO_BASE+'images/defecto_waze.png';
															    obj['html'] = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																				'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>INFORMACIÓN DE USUARIOS WAZE</b></div>' +
																				'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																				'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY hh:mm:ss A");
																				//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
					obj['objWaze'] = arr[i]; 
					obj['tipoService'] = 'waze';
					obj['isRadioTetra'] = false;
					arrWaze.push(obj);
				}
				return arrWaze;
		},
		
		
	
		buildWazeService:function(){
				var arrWaze = [];
				$.ajax({
				    url: PATH_PROYECTO_BASE+"cierre-calles/waze-service",
				    dataType: "json",
				    success: function( response ) {
				    	$(".mask-loading-main").hide();
				    	var obj;
				        var arr = response.alerts;
				        arrWaze = MapaIncidencias.getArrayWaze(arr);
						$.each(arrWaze,function(i,waze){
							MapaIncidencias.addMarker({
								icon:waze.icon,
								index:i+'_waze',
								html:waze.html,
								punto:waze.punto,
								tipo:'waze',
								isRadioTetra:false,
								isFirstCall:true,
								uuid:waze.uuid,
								objWaze:waze.objWaze
							})
						});
						if(response.jams){
							for (var i = 0; i < response.jams.length; i++) {
								MapaIncidencias.fillPolylines(response.jams[i].line,response.jams[i]);
							 }
						}
				    }
				});
		},
		
		
		ajaxWaze:function(){
			if($('.btn-warning').length>0){
//				console.log("call ajaxWaze --> No ejecuta porque el mapa esta en modo historico");
			} else {
				procesandoWaze = true;
				var arrWaze = [];
				flagWaze = false;
				$.ajax({
				    url: PATH_PROYECTO_BASE+"cierre-calles/waze-service",
				    dataType: "json",
				    success: function( response ) {
				    	flagWaze = true;
				    	var obj;
				        var c =0;
				        var arr = response.alerts;
				        arrTempUUID = [];
				        arrWaze = MapaIncidencias.getArrayWaze(arr);
	//			        $.each(arrWaze,function(i,waze){
	//			        	arrTempUUID.push(waze.uuid);
	//			        });
	//			        function isPresetTemp(v){
	//			        	//arrTempUUID	
	//			        	var e = false;
	//			        	for(var i = 0 ; i < arrTempUUID.length ; i++){
	//				    		if(v==arrTempUUID[i]){
	//				    			e = true;
	//				    			break;
	//				    		}
	//				    	}
	//			        	return e;
	//			        }
	//			        for(var j = 0 ; j < arrWazeExistentes.length ; j++){
	//			    		if(!isPresetTemp(arrWazeExistentes[j].key)){
	//			    			////console.log('key a eleiminar->'+arrWazeExistentes[j].key)
	//			    			deleteUUID(arrWazeExistentes[j].key);
	//			    		}
	//			    	}
						$.each(MapaIncidencias.markersWaze,function(a,b){
							if(b){
								b.marker.setMap(null);
							}
						});
						MapaIncidencias.markersWaze = [];
						$.each(MapaIncidencias.markers,function(r,q){
							if(q && q.tipo == 'waze'){
								MapaIncidencias.markers.splice(q,1);
							}
						});
				        $.each(arrWaze,function(i,waze){
							MapaIncidencias.addMarker({
								icon:waze.icon,
								index:i+'_waze',
								html:waze.html,
								punto:waze.punto,
								tipo:'waze',
								isRadioTetra:false,
								uuid:waze.uuid,
								objWaze:waze.objWaze
							})
						});
				        $.each(MapaIncidencias.polylines,function(s,t){
				        	t.setMap(null);
				        });
				        MapaIncidencias.polylines = [];
						if(response.jams){
							for (var i = 0; i < response.jams.length; i++) {
								MapaIncidencias.fillPolylines(response.jams[i].line,response.jams[i]);
							 }
						}
						procesandoWaze = false;
				    }
				});
			}
		},
		
		
		refreshWaze:function(options){
			options = options || {};
			if($('.btn-warning').length>0){
				
			} else {
				setInterval(function(){
					if(ENABLE_LOOP){
						if(!procesandoWaze){
							MapaIncidencias.ajaxWaze();
						}
					}
				}, (options.interval>=0?options.interval:INTERVALO_TIEMPO))
			}
		},

			ajaxTetra:function(){
			if($('.btn-warning').length>0){
//				console.log("call ajaxTetra --> No ejecuta porque el mapa esta en modo historico");
			} else {
				procesandoTetra = true;
				flagTetra = false;
				$.ajax({
				    url: PATH_PROYECTO_BASE+"cierre-calles/dolphin-service",
				    dataType: "json",
				    success: function( response ) {
				    	flagTetra = true;
				        var arr = response.items;
				        var arrTetra = [];
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
				        arrTetra = MapaIncidencias.getArrayTetra(arr);
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
				        procesandoTetra = false;
				    }
				});
			}
		},
		
		
		
		ajaxTetraTimelap:function(min){
			if($('.btn-warning').length>0){
				procesandoTetra = true;
				flagTetra = false;
				
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
				
				
//				if ($('#minuto').val()!=null || $('#minuto').val()!="" ){
//					var m = $('#minuto').val()
//					console.log("MINUTO: "+m);
////					incidencia.nroCasoVoxiva = $('#minuto').val();
////					$('#inputNroCasoVoxiva').val("");
//				}
				
				id = Ext.getCmp('idPlayer').getValue();
				
				$.ajax({
	//				url: PATH_PROYECTO_BASE+"mapa-incidencias/tetra-list-timelap",
//					url: PATH_PROYECTO_BASE+"cierre-calles/tetra-list-timelap",
					url: PATH_PROYECTO_BASE+"cierre-calles/tetra-list-timelap2",
					async:true,
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
				    	MapaIncidencias.arrTetraTimelap = [];
				    	
//				    	console.log("MapaIncidencias.arrTetraTimelap VACIADO");
//				    	console.log(MapaIncidencias.arrTetraTimelap);
//				    	
//				    	console.log("response.data de /tetra-list-timelap2 (se guarda en arrTetraTimelap)")
//				    	console.log(response.data);
				    	
				    	MapaIncidencias.arrTetraTimelap = response.data;
				    	
				    	console.log("MapaIncidencias.arrTetraTimelap ASIGNADO");
				    	console.log(MapaIncidencias.arrTetraTimelap);
				    	
				    	console.log("...vector de tetras creado");
				    	console.log(MapaIncidencias.arrTetraTimelap);
				    	
				    	flagTetra = true;
				        var arr = response.data;
				        var arrTetra2 = [];
						$.each(MapaIncidencias.markersTetraTimelap,function(a,b){
							if(b){
								b.marker.setMap(null);
							}
						});
						MapaIncidencias.markersTetraTimelap = [];
						$.each(MapaIncidencias.markers,function(r,q){
							if(q && q.tipo.indexOf('tetra')){
								MapaIncidencias.markers.splice(q,1);
							}
						});
				        arrTetra2 = MapaIncidencias.getArrayTetraTimelap(MapaIncidencias.arrTetraTimelap,min);
				        
				        console.log("arrTetra2");
				        console.log(arrTetra2);
				        
						$.each(arrTetra2,function(i,tetra){
							MapaIncidencias.addMarker2({
								icon:tetra.icon,
								index:i+'_tetra',
								html:tetra.html,
								punto:tetra.punto,
								tipo:tetra.tipoService,
								isRadioTetra:true,
								issi: tetra.issi
							});
//							$(".gm-style-iw").next("div").hide();
						});
				        
						console.log("...marcadores creados");
						console.log(MapaIncidencias.markersTetraTimelap);
						
						console.log("Posicion de MapaIncidencias.arrTetraTimelap[10], issi="+MapaIncidencias.arrTetraTimelap[10].issi);
						console.log(MapaIncidencias.arrTetraTimelap[10].posicion[40].latitud+"\t"+MapaIncidencias.arrTetraTimelap[10].posicion[40].longitud);
						console.log("Posicion de MapaIncidencias.markersTetraTimelap[10], issi="+MapaIncidencias.markersTetraTimelap[10].issi);
						console.log(MapaIncidencias.markersTetraTimelap[10].marker.getPosition().lat()+"\t"+MapaIncidencias.markersTetraTimelap[10].marker.getPosition().lng());
						
						
						setTimeout(function(){
							$("#pre-loading").hide();
							Ext.getCmp('container-controls').show();
						}, 1000);
						
//						setTimeout(() => {
//							$("#pre-loading").hide();
//							Ext.getCmp('container-controls').show();
//						}, 1000);
						
						procesandoTetra = false;
				    }
				});
		
			} else {
			
//			console.log("call ajaxTetraTimelap --> No ejecuta porque el mapa esta en modo historico");
			
			}
		},
		
		
		refreshTetra:function(){
				setInterval(function(){
					if(ENABLE_LOOP){
						if(!procesandoTetra){
							MapaIncidencias.ajaxTetra();
						}
					}
//				}, INTERVALO_TIEMPO)
				}, 30000)
		},


		
		ajaxVoxiva:function(i){
			if($('.btn-warning').length>0){
//				console.log("call ajaxVoxiva --> No ejecuta porque el mapa esta en modo historico");
			} else {
				procesandoVoxiva = true;
				flagVoxiva = false;
				
				var incidencia = {};
				
				if(i && i.tpoOperador && i.tpoOperador!=null){
					incidencia.tpoOperador = i.tpoOperador;
				}
				
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

				$.ajax({
			    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list2",
			    dataType: "json",
			    method: "GET",
			    data:incidencia,
			    success: function( response ) {
			    	flagVoxiva = true;
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
			    		
			    		var htmlInfo;
			    		
			    		htmlInfo = 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
									'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+(o.descMedio?o.descMedio:'DESCONOCIDO')+'</b></div>' +
									'<div><b>Nro Id Incidencia: </b><span>'+(o.idIncidencia)+'</span></div>'+
									'<div><b>Nro Caso Voxiva: </b><span>'+(o.nroCasoVoxiva?o.nroCasoVoxiva:'No tiene')+'</span></div>'+
									'<div><b>Unidad de Atención: </b><span>'+(o.descUnidad?o.descUnidad:'No especificado')+'</span></div>'+
									'<div><b>Tipo de Caso: </b><span>'+(o.descCaso?o.descCaso:'No especificado')+'</span></div>'+
									'<div><b>Tipo de Subcaso: </b><span>'+(o.descSubcaso?o.descSubcaso:'No especificado')+'</span></div>'+
									'<div><b>Nombre del reportante: </b><span>'+(o.nombReport?o.nombReport:'Desconocido')+'</span></div>'+
									'<div><b>Teléfono del reportante: </b><span>'+(o.telfReport?o.telfReport:'Desconocido')+'</span></div>'+
									'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString()+'</span></div>';
//									'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+

			    			if(o.fecEvento){
								htmlInfo +=	'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+
											'</div>';
							}else{
								htmlInfo += '<div><b>Fecha de incidencia: </b><span>Desconocida</span></div>'+
											'</div>';
							}
									
						
			    		var tipoUser = 0
			    		if(ROLROL==null || ROLROL==""){
			    			tipoUser = ROL*10000;
			    		} else {
			    			tipoUser = ROL*10000 + parseInt(ROLROL);
			    		} 
			    		
			    		
			    		switch(parseInt(ROL)){
				    		
			    		//ADMINISTRADORES, SUPERVISORES
			    			case 901:
				    		case 903: 
				    			htmlInfo += '<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Incidencia</button>';
				    			break;
				    		case 902:
					    		switch(parseInt(ROLROL)){
					    			
					    		//TELEFONISTAS, REDES, CAMARAS, PFI
						    		case 995: case 996: case 997: case 998: case 999: case 1000:	//TELEFONISTAS
						    		case 1001: 														//REDES
						    		case 1005: case 1006: case 1007:								//CAMARAS
						    		case 1016:														//PFI
						    			if(o.tpoOperador==ROLROL){
						    				// Añadiendo boton de actualizacion
											htmlInfo += '<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Incidencia</button>';
						    			}
						    			break;
					    			
						    	//RADIOS
						    		case 1002:
						    		case 1003:
						    		case 1004:
						    			// Añadiendo boton de bitacora
										htmlInfo += '<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Bitácora</button>';
						    			break;
						    		default: break;
					    		}
					    		
				    		default: break;
			    		}
			    		
//						if((tipoUser>9021004 && tipoUser<9021008) || (ROL==902 && o.tpoOperador!=ROLROL && !(tipoUser>9021001 && tipoUser<9021005)) || ROL==992 ) {
//							//solo vista
//							htmlInfo = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
//							'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
//							'<div><b>Nro Id Incidencia: </b><span>'+(o.idIncidencia)+'</span></div>'+
//							'<div><b>Nro Caso Voxiva: </b><span>'+(o.nroCasoVoxiva?o.nroCasoVoxiva:'No tiene')+'</span></div>'+
//							'<div><b>Unidad de Atención: </b><span>'+(o.descUnidad?o.descUnidad:'No especificado')+'</span></div>'+
//							'<div><b>Tipo de Caso: </b><span>'+(o.descCaso?o.descCaso:'No especificado')+'</span></div>'+
//							'<div><b>Tipo de Subcaso: </b><span>'+(o.descSubcaso?o.descSubcaso:'No especificado')+'</span></div>'+
//							'<div><b>Medio de reporte: </b><span>'+(o.descMedio?o.descMedio:'Desconocido')+'</span></div>'+
//							'<div><b>Nombre del reportante: </b><span>'+(o.nombReport?o.nombReport:'Desconocido')+'</span></div>'+
//							'<div><b>Teléfono del reportante: </b><span>'+(o.telfReport?o.telfReport:'Desconocido')+'</span></div>'+
////							'<div><b>Fecha de notificación: </b><span>'+o.fecNotificacion+'</span></div>'+
////							'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString('en-US')+'</span></div>'+
//							'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString()+'</span></div>'+
//							'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+
////							'<div><b>Fecha de incidencia: </b><span>'+o.fecEvento?new Date(o.fecEvento).toLocaleString():Desconocida+'</span></div>'+
//							'</div>'
//						} else if(tipoUser>9021001 && tipoUser<9021005) {
//							//solo bitacora
//							htmlInfo = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
//							'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
//							'<div><b>Nro Id Incidencia: </b><span>'+(o.idIncidencia)+'</span></div>'+
//							'<div><b>Nro Caso Voxiva: </b><span>'+(o.nroCasoVoxiva?o.nroCasoVoxiva:'No tiene')+'</span></div>'+
//							'<div><b>Unidad de Atención: </b><span>'+(o.descUnidad?o.descUnidad:'No especificado')+'</span></div>'+
//							'<div><b>Tipo de Caso: </b><span>'+(o.descCaso?o.descCaso:'No especificado')+'</span></div>'+
//							'<div><b>Tipo de Subcaso: </b><span>'+(o.descSubcaso?o.descSubcaso:'No especificado')+'</span></div>'+
//							'<div><b>Medio de reporte: </b><span>'+(o.descMedio?o.descMedio:'Desconocido')+'</span></div>'+
//							'<div><b>Nombre del reportante: </b><span>'+(o.nombReport?o.nombReport:'Desconocido')+'</span></div>'+
//							'<div><b>Teléfono del reportante: </b><span>'+(o.telfReport?o.telfReport:'Desconocido')+'</span></div>'+
////							'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString('en-US')+'</span></div>'+
//							'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString()+'</span></div>'+
//							'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+
////							'<div><b>Fecha de incidencia: </b><span>'+o.fecEvento?new Date(o.fecEvento).toLocaleString():Desconocida+'</span></div>'+
//							'</div>'+
//							'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Bitácora</button>'
////						} else if(tipoUser==9010000 || tipoUser==9030000 || (ROL==902 && o.tpoOperador==ROLROL) || (ROL==902 && o.nroCasoVoxiva!=null)){
//						} else if(tipoUser==9010000 || tipoUser==9030000 || (ROL==902 && o.tpoOperador==ROLROL) ){
//							// solo registro
//							htmlInfo = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
//							'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
//							'<div><b>Nro Id Incidencia: </b><span>'+(o.idIncidencia)+'</span></div>'+
//							'<div><b>Nro Caso Voxiva: </b><span>'+(o.nroCasoVoxiva?o.nroCasoVoxiva:'No tiene')+'</span></div>'+
//							'<div><b>Unidad de Atención: </b><span>'+(o.descUnidad?o.descUnidad:'No especificado')+'</span></div>'+
//							'<div><b>Tipo de Caso: </b><span>'+(o.descCaso?o.descCaso:'No especificado')+'</span></div>'+
//							'<div><b>Tipo de Subcaso: </b><span>'+(o.descSubcaso?o.descSubcaso:'No especificado')+'</span></div>'+
//							'<div><b>Medio de reporte: </b><span>'+(o.descMedio?o.descMedio:'Desconocido')+'</span></div>'+
//							'<div><b>Nombre del reportante: </b><span>'+(o.nombReport?o.nombReport:'Desconocido')+'</span></div>'+
//							'<div><b>Teléfono del reportante: </b><span>'+(o.telfReport?o.telfReport:'Desconocido')+'</span></div>'+
////							'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString('en-US')+'</span></div>'+
//							'<div><b>Fecha de notificación: </b><span>'+new Date(o.fecNotificacion).toLocaleString()+'</span></div>'+
//							'<div><b>Fecha de incidencia: </b><span>'+new Date(o.fecEvento).toLocaleString()+'</span></div>'+
////							'<div><b>Fecha de incidencia: </b><span>'+o.fecEvento?new Date(o.fecEvento).toLocaleString():Desconocida+'</span></div>'+
//							'</div>'+
//							'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Incidencia</button>'
//						}
				    	
				    	// USO DE CONDICIONAL PARA FILTRAR LAS INCIDENCIAS QUE NO VIENEN DE MAPEAR DESDE VOXIVA
				    	if (o.tpoOperador!=null && o.descUnidad) {
				    		var infowindow = new google.maps.InfoWindow({
					    		content: htmlInfo
				    		});
				    		
				    		google.maps.event.addListener(infowindow, 'domready', function (e) {
					    			var w = infowindow;
					    			var geo = this;
					    			$('#'+o.idIncidencia+'_btn_update_voxiva').unbind().click(function(){
											var id=o.idIncidencia;
											if (ROL==902 && ROLROL>1001 && ROLROL<1005){
												IncidenciaService.openFormBitacora({
						                    		title:'Bitácora de incidencia',
						                    		codIncidencia: id
						                    	});
											} else {
												IncidenciaService.openFormRegistroNuevo({
						                    		title:'Registro de Incidencia',
						                    		codIncidencia: id
						                    	});
											}
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
//						    		case 1001: 	image = PATH_PROYECTO_BASE+'images/redes.png'; break;	
						    		case 1005: case 1006: case 1007: image = PATH_PROYECTO_BASE+'images/camara.png'; break;
						    		default: image = PATH_PROYECTO_BASE+'images/phone_negro.png'; break;
					    		}
				    		} else if (o.nroCasoVoxiva!=null) {
				    			image = PATH_PROYECTO_BASE+'images/phone_gris.png';
				    		}
				    		
				    		var icon;
							if(MapaIncidencias.map.getZoom()<=16){	
									icon = {
									    url: image, // url
									    scaledSize: initSizeIcon, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
							}else{
								if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
					    		map: MapaIncidencias.map,
					    		draggable: false,
					    		visible:MapaIncidencias.getVisible('voxiva'),
					            mapTypeId: google.maps.MapTypeId.ROADMAP,
					            icon: icon
					    	});
					    	
					    	google.maps.event.addListener(marker, 'click', function () {
					    		infowindow.open(MapaIncidencias.map, marker);
					    		if (o.tpoOperador==ROLROL) { marker.setAnimation(null); }
					    		MapaIncidencias.setMarkerLeido(o.idIncidencia,o.tpoOperador);
					    	});
					    	
					    	if(o.indLeido+''!='S'){
						    	marker.setAnimation(google.maps.Animation.BOUNCE);
					    	}
					    	
					    	if ((incidencia.idIncidencia!=null && incidencia.idIncidencia!="")||(incidencia.nroCasoVoxiva!=null && incidencia.nroCasoVoxiva!="")){
								MapaIncidencias.map.setCenter(new google.maps.LatLng(parseFloat(o.coordenadas.split(' ')[0]), parseFloat(o.coordenadas.split(' ')[1])));
								MapaIncidencias.map.setZoom(18);
								marker.icon.scaledSize = iconScale3;
								google.maps.event.trigger(marker, 'click');
							} 
//					    	else {
////								MapaIncidencias.map.setCenter(new google.maps.LatLng(-12.121446, -77.030175));
////								MapaIncidencias.map.setZoom(15);
//								marker.icon.scaledSize = initSizeIcon;
//							}
					    	
					    	var objMarker = {
					    			marker : marker,
					    			tipo:'voxiva',
					    			idIncidencia:o.idIncidencia
					    	}
					    	
					    	MapaIncidencias.markers.push(objMarker);
					    	MapaIncidencias.markersVoxiva.push(objMarker);
				    	} else {
//				    		console.log("Id incidencia = "+o.idIncidencia+" NOOOOOO se mapea")
				    	}
				    	
			    	});
			    	
			    	procesandoVoxiva = false;

			    }});
			}	
		},
		
		ajaxVoxivaTimelap:function(incidencia){

			if($('.btn-warning').length>0){
				procesandoVoxiva = true;
				flagVoxiva = false;
				var incidencia = {};
				
//				if ($('#inputIncidencia').val()!=null || $('#inputIncidencia').val()!="" ){
//					incidencia.idIncidencia = $('#inputIncidencia').val();
////					$('#inputIncidencia').val("");
//				}
//				if ($('#inputNroCasoVoxiva').val()!=null || $('#inputNroCasoVoxiva').val()!="" ){
//					incidencia.nroCasoVoxiva = $('#inputNroCasoVoxiva').val();
////					$('#inputNroCasoVoxiva').val("");
//				}
//				
//				
////				if ($('#inputArea').val()=="Todas las areas"){
////					inc = {};
////				} else 
//				if ($('#inputArea').val()=="Area 1"){
//					incidencia.area = "1";
//				} else if ($('#inputArea').val()=="Area 2"){
//					incidencia.area = "2";
//				} else if ($('#inputArea').val()=="Area 3"){
//					incidencia.area = "3";
//				}
////				$('#inputArea').val("Todas las areas");
//				
//				if ($('#inputArea2').val()=="Area 1"){
//					incidencia.area = "1";
//				} else if ($('#inputArea2').val()=="Area 2"){
//					incidencia.area = "2";
//				} else if ($('#inputArea2').val()=="Area 3"){
//					incidencia.area = "3";
//				}
				
				incidencia.idincidencia = Ext.getCmp('idPlayer').getValue();
				
				
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

				$.ajax({
			    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list-timelap",
			    dataType: "json",
			    async: false,
			    method: "GET",
			    data:incidencia,
			    success: function( response ) {
			    	flagVoxiva = true;
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
//				    		console.log("Id incidencia = "+o.idIncidencia+" NOOOOOO se mapea")
				    	}
				    	
			    	});
			    	
			    	procesandoVoxiva = false;

			    }});
				
			} else {
				
//				console.log("call ajaxVoxivaTimelap --> No ejecuta porque el mapa esta en modo historico");
				
			}
		
			
		},
		
		
//		ajaxVoxivaExposicion:function(id){
		ajaxVoxivaExposicion:function(id,tpoExpo,fec1,fec2){
			
			if($('.btn-warning').length>0){
				
				procesandoVoxiva = true;
				flagVoxiva = false;
				
				var incidencia = {};
				
				if (id==null){
					tpoExposicion = tpoExpo;
					incidencia.tpoExpo=tpoExpo;
					incidencia.strFecIni=fec1;
					incidencia.strFecFin=fec2;
				} else {
					incidencia.IdIncidencia=id;
					incidencia.tpoExpo=tpoExposicion;
				}
				 
				$.ajax({
			    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list-exposicion",
			    dataType: "json",
			    async: false,
			    method: "GET",
			    data:incidencia,
			    success: function( response ) {
			    	flagVoxiva = true;
			    	
			    	if(id!=null){
			    		$.each(MapaIncidencias.markersVoxiva,function(i,v){
				    		if (v.idIncidencia==id){
				    			MapaIncidencias.map.setCenter(v.marker.position);
								MapaIncidencias.map.setZoom(18);
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
				    			
//				    			console.log("value");
//				    			console.log(value);
				    			
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
						
							htmlInfo2 = '<div style="float:left;"><div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:250px;" >' +
//										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:8px;margin-bottom:5px;"><b>'+o.param1+'</b></div>' +
//										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:8px;margin-bottom:5px;"><b>'+o.param1+'</b></div>' +
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:16px;margin-bottom:5px;"><b>'+o.idIncidencia+' - '+o.param1+'</b></div>' ;
										
										
							if(o.listaImagen[0].tpoImg==1013){
								htmlInfo2 +='<div>'+
											'	<img src="'+o.listaImagen[0].ruta+'" width="250px" >'+
											'</div>';
							} else if(o.listaImagen[0].tpoImg==1015){
								htmlInfo2 +='<div>'+
											'	<video width="250" height="150" controls="controls" preload="metadata" onclick="this.paused ? this.play() : this.pause();">'+
				    						'		<source src="'+o.listaImagen[0].ruta+'"#t=0.2 type="video/mp4">'+				    			 
				    						'	</video>'+
				    						'</div>';
							}
							
				    		htmlInfo2 += '</div>';
				    		
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
								if(MapaIncidencias.map.getZoom()<=16){	
										icon = {
										    url: image, // url
										    scaledSize: initSizeIcon, // scaled size
										    origin: null, // origin
							    			anchor: null // anchor
										};
								}else{
									if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
						    		map: MapaIncidencias.map,
						    		draggable: false,
						    		visible:MapaIncidencias.getVisible('voxiva'),
						            mapTypeId: google.maps.MapTypeId.ROADMAP,
						            icon: icon
						    	});
						    	
						    	google.maps.event.addListener(marker, 'click', function () {
//						    		infowindow.open(MapaIncidencias.map, marker);
						    		var id=o.idIncidencia;
						    		var incExpo = o;
						    		var title= "Incidencia nro."+o.idIncidencia+" - "+o.param1;
									console.log("Click en VER DESPLIEGUE");
									IncidenciaService.openFormExposicion({
			                    		title: title,
			                    		id: id,
			                    		incidencia: incExpo
//			                    		imagen: response.dataImagen
			                    	});
							    	Ext.id();
							    	return false;
						    	});
						    	
//						    	google.maps.event.trigger(marker, 'click');
						    	
					    		google.maps.event.addListener(marker, 'mouseover', function() {
					    			infowindow2.open(MapaIncidencias.map, marker);
					    			$(".gm-style-iw").next("div").hide();
					    		});

					    		google.maps.event.addListener(marker, 'mouseout', function() {
//					    		    infowindow.close(MapaIncidencias.map, marker);
					    		    infowindow2.close();
					    		});
						    	
////					    		if ((id!=null && o.idIncidencia==id)){
//					    		if ((incidencia.idIncidencia!=null && incidencia.idIncidencia!="")||(incidencia.nroCasoVoxiva!=null && incidencia.nroCasoVoxiva!="")){
////									MapaIncidencias.setCenterMap(o.coordenadas,o);
//									MapaIncidencias.map.setCenter(new google.maps.LatLng(parseFloat(o.coordenadas.split(' ')[0]), parseFloat(o.coordenadas.split(' ')[1])));
//									MapaIncidencias.map.setZoom(18);
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
		
		ajaxArbolExposicion:function(tpoExpo,fec1,fec2){
			
			console.log("parametro: "+tpoExpo+","+fec1+","+fec2);
			
			if($('.btn-warning').length>0){
				
				var incidencia = {};
				incidencia.tpoExpo=tpoExpo;
				incidencia.strFecIni=fec1;
				incidencia.strFecFin=fec2;
				
				console.log("mapa-incidencia/list-exposicion (parametro incidencia...)");
				console.log(incidencia);
				
				$.ajax({
				    url: PATH_PROYECTO_BASE+"mapa-incidencia/list-exposicion",
				    dataType: "json",
				    async: false,
				    method: "GET",
				    data:incidencia,
				    success: function( response ) {
				    	
				    	var htmlNavExpo="";
				    	
//				    	htmlNavExpo+=	
//				    					'<nav class="vertical_nav" style="z-index: 999 width:180px;">'+
//				    					'	<div class="container">'+
////				    					'		<div class="row">'+
//				    					'	   	<div class="well" style="width:180px;">'+
//				    					'			<div class="well" >'+
//				    					'				<div style="overflow-y: scroll; overflow-x: hidden; width:180px; height:600px;">'+
//		                				'					<ul class="nav nav-list">';
//				    	
//				    	$.each(response,function(i,v){
//				    		htmlNavExpo += 	'<li><label class="tree-toggler nav-header">'+v.name+'</label>'+
//				    						'    <ul class="nav nav-list tree" style="width: 100px;">';
//				    		$.each(v.children,function(i,r){
////				    			console.log("r");
////				    			console.log(r);
//					    		try{
//					    			htmlNavExpo +=	'<li><a href="#" style="width:100px;font-size:10px;" onclick="return fnInside('+r.name+')">'+
//					    									r.name2+'</a></li>';
//					    		}catch(e){
//					    			
//					    		}
//				    		});
//				    		htmlNavExpo += 	'    </ul>'+
//		                    				'</li>';
//				    	});
//				    	
//				    	htmlNavExpo+=	'    				</ul>'+
//				    					'				</div>'+
//								        '			</div>'+
//								    	'		</div>'+
//								    	'	</div>'+
//								    	'</nav>';
//				    	
////				    	console.log("htmlNavExpo");
////				    	console.log(htmlNavExpo);
//				    	
//				    	
//				    	
//				    	
//				    	
//				    	htmlNavExpo+=	
//				    					'<nav class="vertical_nav" style="z-index: 999 width:180px;">'+
//				    					'	<div class="container">'+
//			//	    					'		<div class="row">'+
//				    					'	   	<div class="well" style="width:180px;">'+
//				    					'			<div class="well" >'+
//				    					'				<div style="overflow-y: scroll; overflow-x: hidden; width:180px; height:600px;">'+
//			            				'					<ul class="nav nav-list">';
				    	
				    	
				    	
				    	htmlNavExpo +=	'<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">';
				    		
				    	$.each(response,function(i,v){
				    		
				    		var nArea= i;
				    		
				    		htmlNavExpo += 	
											'<div class="panel panel-default">'+
											'	<div class="panel-heading" role="tab" id="heading'+nArea+'">'+
											'		<h4 class="panel-title">'+
											'			<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+nArea+'" aria-expanded="true" aria-controls="collapse'+nArea+'">'+
											'				<label class="tree-toggler nav-header">'+v.name+'</label>'+
											'			</a>'+
											'		</h4>'+
											'	</div>'+
//											'	<div id="collapse'+nArea+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading'+nArea+'">';
				    		'	<div id="collapse'+nArea+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+nArea+'">';
				    				
											
				    			
				    		$.each(v.children,function(i,r){
			//	    			console.log("r");
			//	    			console.log(r);
					    		try{
					    			htmlNavExpo +=	
									    			'<div class="panel-body">'+
									    			'	<a href="#" style="width:100px;font-size:10px;" onclick="return fnInside('+r.name+')">'+
															r.name2+
													'	</a>'+
													'</div>';
					    		}catch(e){
					    			
					    		}
				    		});
				    		htmlNavExpo += 	'	</div>'+
				    			  			'</div>';
				    	});
				    	
				    	htmlNavExpo+=	'</div>';
				    	
				    	
				    	
//				    	console.log("htmlNavExpo");
//				    	console.log(htmlNavExpo);
				    	
//				    	$('#nav-exposicion').append(htmlNavExpo);
				    	$('#nav-exposicion').html(htmlNavExpo);
				    	
				    	
				    	
//				    	$('#nav-exposicion').tree({
//				            data: response
//				        });
	
				    }
				});
				
				
			} else {
				$('#nav-exposicion').empty();
				console.log("call ajaxVoxivaTimelap --> No ejecuta porque el mapa esta en modo historico");
				
			}
		},
		
		
		buildServiceVoxiva:function(){
			MapaIncidencias.ajaxVoxiva();
		},
		
		
		
		refreshVoxiva:function(){
				setInterval(function(){
					if(ENABLE_LOOP){
						if(!procesandoVoxiva){
						MapaIncidencias.ajaxVoxiva();
						}
					}
				}, INTERVALO_TIEMPO);
		},
		
		
		refreshCambista:function(){
				setInterval(function(){
							if(ENABLE_LOOP){
								if(!procesandoCambista){
									MapaIncidencias.ajaxCambista();
								}
							}
				}, INTERVALO_TIEMPO);
		},
		
		refreshReach:function(){
				setInterval(function(){
							if(ENABLE_LOOP){
								if(!procesandoReach){
									MapaIncidencias.ajaxReach();
								}
							}
				}, INTERVALO_TIEMPO);
		},
		
		refreshPos:function(){
				setInterval(function(){
							if(ENABLE_LOOP){
								if(!procesandoPos){
									MapaIncidencias.ajaxPos();
								}
							}
				}, INTERVALO_TIEMPO/2);
		},
		
		
		
	
		buildSubzonas:function(){
			for (var i=0; i < geoSubzonas.length; i++) {
        		var borderPolygon = [];
    			for (var j=0; j < geoSubzonas[i].length; j++) {
            		var tempLatLng = new google.maps.LatLng(geoSubzonas[i][j][0], geoSubzonas[i][j][1]);
            		borderPolygon.push(tempLatLng);
            	}
    			polygon = new google.maps.Polyline({
            		path: borderPolygon,
                    strokeOpacity: 0.6,
//	                strokeColor: '#01f66c',
//	                strokeColor: '#ff0000',
//	                strokeColor: '#ffc169',
	                strokeColor: '#0295ff',
	                strokeWeight: 2
    			});
    			capaSubzonas.push(polygon);
			}
			MapaIncidencias.showSubzonas(false);
		},
		
		buildZonas:function(){
			for (var i=0; i < geoZonas.length; i++) {
        		var borderPolygon = [];
    			for (var j=0; j < geoZonas[i].length; j++) {
            		var tempLatLng = new google.maps.LatLng(geoZonas[i][j][0], geoZonas[i][j][1]);
            		borderPolygon.push(tempLatLng);
            	}
    			polygon = new google.maps.Polyline({
            		path: borderPolygon,
                    strokeOpacity: 0.8,
	                strokeColor: '#0295ff',
	                strokeWeight: 2
    			});
    			capaZonas.push(polygon);
			}
			MapaIncidencias.showZonas(false);
		},
		
		buildAreas:function(){
			for (var i=0; i < geoAreas.length; i++) {
        		var borderPolygon = [];
    			for (var j=0; j < geoAreas[i].length; j++) {
            		var tempLatLng = new google.maps.LatLng(geoAreas[i][j][0], geoAreas[i][j][1]);
            		borderPolygon.push(tempLatLng);
            	}
    			polygon = new google.maps.Polyline({
            		path: borderPolygon,
                    strokeOpacity: 1.0,
//	                strokeColor: '#ff0000',
                    strokeColor: '#0295ff',
	                strokeWeight: 2
    			});
    			capaAreas.push(polygon);
			}
			MapaIncidencias.showAreas(false);
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
					capaSubzonas[i].setMap(MapaIncidencias.map);
				} else {
					capaSubzonas[i].setMap(null);
				}
			}
		},
		
		showZonas:function(v){
			for (var i=0; i < capaZonas.length; i++) {
				if(v){
					capaZonas[i].setMap(MapaIncidencias.map);
				} else {
					capaZonas[i].setMap(null);
				}
			}
		},
		
		showAreas:function(v){
			for (var i=0; i < capaAreas.length; i++) {
				if(v){
					capaAreas[i].setMap(MapaIncidencias.map);
				} else {
					capaAreas[i].setMap(null);
				}
			}
		},
		
//		showAreasExposicion:function(v){
//			
//			console.log("v: "+v);
//			for (var i=0; i < capaAreas.length; i++) {
//				if(v){
//					capaAreas[i].setMap(MapaIncidencias.map);
//				} else {
//					capaAreas[i].setMap(null);
//				}
//			}
//		}
		
		
		inPlayTrack:function(min){
			var pm = parseInt(min)+60;
			if(min!=null){
			
//			var numDeltas = 100;
//		    var delay = 10; //milliseconds
//		    var i = 0;
//		    var deltaLat;
//		    var deltaLng;
//		    
//		    i = 0;
//		    
//	        deltaLat = (MapaIncidencias.arrTetraTimelap[10].posicion[pm].longitud- MapaIncidencias.markersTetraTimelap[10].marker.getPosition().lat())/numDeltas;
//	        deltaLng = (MapaIncidencias.arrTetraTimelap[10].posicion[pm].latitud  - MapaIncidencias.markersTetraTimelap[10].marker.getPosition().lng())/numDeltas;
//	        moveMarker();
//			
//		    function moveMarker(){
//		        var latlng = new google.maps.LatLng(
//		        		MapaIncidencias.markersTetraTimelap[10].marker.getPosition().lat()+deltaLat,
//		        		MapaIncidencias.markersTetraTimelap[10].marker.getPosition().lng()+deltaLng
//		        	);
//		        MapaIncidencias.markersTetraTimelap[10].marker.setPosition(latlng);
//		        if(i!=numDeltas){
//		            i++;
//		            setTimeout(moveMarker, delay);
//		        }
//		    }
//		    transition(MapaIncidencias.markersTetraTimelap[10]);	
				
				$.each(MapaIncidencias.markersTetraTimelap,function(a,b){
					
//					function getByValue2(value) {
//						  var result  = MapaIncidencias.arrTetraTimelap.filter(function(o){return o.issi == value;} );
//						  return result? result[0] : null; // or undefined
//
//						}
//						
//					var t = getByValue2(b.issi);
//					
////					console.log("MATCH...");
////					console.log(b);
////					console.log(t);
//					
////					var worker1 = new Worker(getScriptPath(function(){
////					    self.addEventListener('message', function(e) {
////					        var value = 0;
////					        while(value <= e.data){
////					            self.postMessage(value);
////					            value++;
////					        }
////					    }, false);
////					}));
//					
////					var numDeltas = 100;
////				    var delay = 10; //milliseconds
////				    var i = 0;
////				    var deltaLat;
////				    var deltaLng;
////				    debugger;
////				    function moveMarker(){
////				    	console.log("llama al movemarker para issi="+b.issi);
////				        var latlng = new google.maps.LatLng(
////				        		MapaIncidencias.arrTetraTimelap[a].posicion[pm].longitud+deltaLng, 
////				        		MapaIncidencias.arrTetraTimelap[a].posicion[pm].latitud+deltaLat
////				        	);
////				        marker.setPosition(latlng);
////				        if(i!=numDeltas){
////				            i++;
////				            setTimeout(moveMarker, delay);
////				        }
////				    }
////				    
////				    function transition(b){
////				        i = 0;
////				        deltaLat = (MapaIncidencias.arrTetraTimelap[a].posicion[pm].latitud - b.marker.getPosition().getlat())/numDeltas;
////				        deltaLng = (MapaIncidencias.arrTetraTimelap[a].posicion[pm].longitud - b.marker.getPosition().getlng())/numDeltas;
////				        moveMarker();
////				    }
////					
////				    transition(b);	
//					
//					
//					
//					
//					
//					//ESTE ES CON MOVIMIENTOS SUAVES, PERO AUN ES INESTABLE
//					var numDeltas = 100;
//				    var delay = 10; //milliseconds
//				    var i = 0;
//				    var deltaLat = (t.posicion[pm].longitud - b.marker.getPosition().lat())/numDeltas;
//			        var deltaLng = (t.posicion[pm].latitud - b.marker.getPosition().lng())/numDeltas;
//			        moveMarker();
//					
//				    function moveMarker(){
//				        var latlng = new google.maps.LatLng(
//				        		b.marker.getPosition().lat()+deltaLat,
//				        		b.marker.getPosition().lng()+deltaLng
//				        	);
//				        b.marker.setPosition(latlng);
//				        if(i!=numDeltas){
//				            i++;
//				            setTimeout(moveMarker, delay);
//				        }
//				    }
				    
				    //ESTE ES EL QUE ESTABA FUNCIONANDO NORMAL, PERO SIN MOVIMIENTOS SUAVES
					b.marker.setPosition(
						new google.maps.LatLng(
							parseFloat(MapaIncidencias.arrTetraTimelap[a].posicion[pm].longitud),
							parseFloat(MapaIncidencias.arrTetraTimelap[a].posicion[pm].latitud)
						)
						
						//ESTE ES EL CORRETO DESPUES DE REESTRUCTURAR LA TABLA geo_sereno_ruta
//						new google.maps.LatLng(
//								parseFloat(MapaIncidencias.arrTetraTimelap[a].posicion[pm].latitud),
//								parseFloat(MapaIncidencias.arrTetraTimelap[a].posicion[pm].longitud)
//							)
					)
					
				});
				
//				setTimeout(function(){
//					
//					$.each(MapaIncidencias.markersTetraTimelap,function(a,b){
//						b.marker.setPosition(
//							new google.maps.LatLng(
//								parseFloat(MapaIncidencias.arrTetraTimelap[a].posicion[pm].longitud),
//								parseFloat(MapaIncidencias.arrTetraTimelap[a].posicion[pm].latitud)
//							)
//						)
//						
//					});
//				
//				}, 500);
	    	}
		}
		
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
		
		$('#update').click(function(){
			if($('.btn-warning').length>0){
				console.log("call ajaxVoxiva --> No ejecuta porque el mapa esta en modo historico");
//				window.alert("Mapa en modo histórico. Primero debe activar el modo alerta");
				bootbox.alert("Mapa en modo histórico. Primero debe activar el modo alerta");

			} else {
				$(this).find('i').addClass('fa-spin');
				console.log("$('#inputIncidencia').val() -> "+$('#inputIncidencia').val());
				console.log("$('#inputNroCasoVoxiva').val() -> "+$('#inputNroCasoVoxiva').val());
				console.log("$('#inputArea').val() -> "+$('#inputArea').val());
				
//				var incidencia = {};
//				
//				if ($('#inputIncidencia').val()!=null || $('#inputIncidencia').val()!="" ){
//					incidencia.idIncidencia = $('#inputIncidencia').val();
//					$('#inputIncidencia').val("");
//				}
//				if ($('#inputNroCasoVoxiva').val()!=null || $('#inputNroCasoVoxiva').val()!="" ){
//					incidencia.nroCasoVoxiva = $('#inputNroCasoVoxiva').val();
//					$('#inputNroCasoVoxiva').val("");
//				}
////				if ($('#inputArea').val()=="Todas las areas"){
////					inc = {};
////				} else 
//				if ($('#inputArea').val()=="Area 1"){
//					incidencia.area = "1";
//				} else if ($('#inputArea').val()=="Area 2"){
//					incidencia.area = "2";
//				} else if ($('#inputArea').val()=="Area 3"){
//					incidencia.area = "3";
//				}
//				$('#inputArea').val("Todas las areas");
				
				
				
//				console.log("incidencia");
//				console.log(incidencia);
				
//				var i = {};
//				if (ROL==902){
//					i.usrRegistra = DES_LOGIN;
//					i.usrRol = parseInt(ROL);
//					i.tpoOperador = parseInt(ROLROL);
//					if (ROLROL=="1002"||ROLROL=="1003"){
//						incidencia.area = AREA;
//					}
//				}
				MapaIncidencias.ajaxWaze();
				MapaIncidencias.ajaxTetra();
				MapaIncidencias.ajaxVoxiva();
				MapaIncidencias.ajaxCambista();
//				MapaIncidencias.ajaxReach();
//				MapaIncidencias.ajaxVoxivaTimelap(incidencia);
//				if(false){
////				if($('.btn-warning').length()){
//					MapaIncidencias.ajaxVoxivaTimelap(incidencia);
////					MapaIncidencias.ajaxTetraTimelap(incidencia);
//				} else {
//					MapaIncidencias.ajaxWaze();
//					MapaIncidencias.ajaxTetra();
//					MapaIncidencias.ajaxVoxiva(incidencia);
//					MapaIncidencias.ajaxCambista();
//					MapaIncidencias.ajaxReach();
//				}

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
		
		$('#myCases').click(function(){
			if(ROLROL<1002){
				incidencia.tpoOperador=ROLROL;
			}
			MapaIncidencias.ajaxVoxiva();
		});
		
//		setInterval(function(){
//			$.ajax({
//				url: PATH_PROYECTO_BASE+"mapa-incidencia/dolphin_service2",
//			    dataType: "json",
//			    success: function( response ) {
//			    	
//			    }
//			});
//		},30000);
		
//		$('#enableTimelap').on("click",function(){
//			console.log("click habilita");
//			var btnTimelap = this;
//			var className = $(btnTimelap).attr('class');
//			$('#update').hide();
//			$('#executeTimelap').show();
//			$('#enableTimelap').hide();
//			$('#disableTimelap').show();
//		});
//		
//		$('#disableTimelap').on("click",function(){
//			console.log("click deshabilita");
//			var btnTimelap = this;
//			var className = $(btnTimelap).attr('class');
//			$('#update').show();
//			$('#executeTimelap').hide();
//			$('#enableTimelap').hide();
//			$('#disableTimelap').show();
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
		
		
		$('#switchTimelap').click(function(){
			var btnTimelap = this;
			var className = $(btnTimelap).attr('class');
			var visible = false;
			if(className.indexOf('btn-warning')>=0){
				$(btnTimelap).removeClass('btn-warning');
				$(btnTimelap).addClass('btn-default');
				$('#update').click();
			}else{
				$.each(MapaIncidencias.markersWaze,function(a,b){
					if(b){
						b.marker.setMap(null);
					}
				});
				$.each(MapaIncidencias.polylines,function(s,t){
		        	t.setMap(null);
		        });
				$.each(MapaIncidencias.markersTetra,function(a,b){
					if(b){
						b.marker.setMap(null);
					}
				});
				$.each(MapaIncidencias.markersVoxiva,function(i,v){
		    		try{
		    			v.marker.setMap(null);
		    		}catch(e){
		    			
		    		}
		    	});
				$(btnTimelap).removeClass('btn-default');
				$(btnTimelap).addClass('btn-warning');
				visible = true;
			}
		});
		
		$('#switchExposicion').click(function(){
			var btnTimelap = this;
			var className = $(btnTimelap).attr('class');
//			var visible = false;
			if(className.indexOf('btn-warning')>=0){
				$(btnTimelap).removeClass('btn-warning');
				$(btnTimelap).addClass('btn-default');
				$("#nav-exposicion").hide("slow", function() {});
		        $(".nav-menu").show("slow", function() {});
				$('#update').click();
				tpoExposicion = null;
//				MapaIncidencias.ajaxArbolExposicion();
			}else{
				
				IncidenciaService.openPresentacion({
	        		title:'Definir presentacion'
	        	});
				
//				$.each(MapaIncidencias.markersWaze,function(a,b){
//					if(b){
//						b.marker.setMap(null);
//					}
//				});
//				$.each(MapaIncidencias.polylines,function(s,t){
//		        	t.setMap(null);
//		        });
//				$.each(MapaIncidencias.markersTetra,function(a,b){
//					if(b){
//						b.marker.setMap(null);
//					}
//				});
//				$.each(MapaIncidencias.markersVoxiva,function(i,v){
//		    		try{
//		    			v.marker.setMap(null);
//		    		}catch(e){
//		    			
//		    		}
//		    	});
//				$(btnTimelap).removeClass('btn-default');
//				$(btnTimelap).addClass('btn-warning');
//				visible = true;
//				$("#nav-exposicion").show("slow", function() {});
//		        $(".nav-menu").hide("slow", function() {});
//				MapaIncidencias.ajaxVoxivaExposicion();
//				MapaIncidencias.ajaxArbolExposicion();
			}
		});
		
		$('#myRange').change(function(){
		    var minuto =$(this).val();
		    console.log("valorCambiado");
		    console.log(minuto);
//		    MapaIncidencias.ajaxWaze();
//			MapaIncidencias.ajaxTetraTimelap();
		});
		
		$('#inputArea2').change(function(){
		    console.log("Se selecciono otra area");
		    MapaIncidencias.buildAreasExposicion();
		});
		
		$('#myCarousel').carousel('pause');

		
}