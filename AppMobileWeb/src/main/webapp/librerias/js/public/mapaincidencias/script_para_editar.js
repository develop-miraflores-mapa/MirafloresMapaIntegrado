
var center = new google.maps.LatLng(-12.121446, -77.030175);
var INTERVALO_TIEMPO = (30000)*4;
var arrPuntosGlobales = [];
var markers = [];
var iterator = 0;
var map;
var flagWaze = false;
var flagTetra = false;
var flagVoxiva = false;
var markerClusterer = null;
var wazeReady = false;
var dolphinReady = false;
var ENABLE_LOOP = true;

var isMobile = {
	        Android: function () {
	            return navigator.userAgent.match(/Android/i);
	        },
	        BlackBerry: function () {
	            return navigator.userAgent.match(/BlackBerry/i);
	        },
	        iOS: function () {
	            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	        },
	        Opera: function () {
	            return navigator.userAgent.match(/Opera Mini/i);
	        },
	        Windows: function () {
	            return navigator.userAgent.match(/IEMobile/i);
	        },
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

if(isMobile.any()){
	initSizeIcon = new google.maps.Size(22, 25);
}

var iconScale2 = new google.maps.Size(32, 35);
var iconScale3 = new google.maps.Size(45, 48);

var procesandoWaze = false;
var procesandoTetra = false;
var procesandoVoxiva = false;
var procesandoCambista = false;

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



//$('.menu--link').addClass('menu-link-activo');

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
		});

setInterval(function(){
						$('#map-canvas').css('height',($(window).height()-50)+'px');
					},
					1000
		);

var flightPathAprox = null;
var infowindowAprox = null; 

var MapaIncidencias = {
		setMarkerLeido:function(idIncidencia){
						$.ajax({
							    url: PATH_PROYECTO_BASE+"mapa-incidencia/set-estado-marker-mapa",
							    dataType: "json",
							    data:{idIncidencia:idIncidencia}
							});
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
						  
						flightPathAprox = new google.maps.Polyline({
								    path: cordenadasSelected,
								    geodesic: true,
								    strokeColor: '#336699',
								    strokeOpacity: 0.8,
								    strokeWeight: 8
							});
						
						flightPathAprox.setMap(MapaIncidencias.map);
						  
						if(infowindowAprox){
									infowindowAprox.close();
							}
						  
						infowindowAprox = new google.maps.InfoWindow({
									content: data.toponimia+' CDRA. '+data.cdra
							});
								
						infowindowAprox.setPosition(center);
						infowindowAprox.open(MapaIncidencias.map);	
						
					    google.maps.event.addListener(flightPathAprox, 'click', function(event) {
									infowindowAprox.setPosition(event.latLng);
									infowindowAprox.open(MapaIncidencias.map);
							});
						
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
								}else{
									if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
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
	
		init:function(){
						setInterval(function(){
								if($('.gm-style-iw').length>0){
										ENABLE_LOOP = false;
								}else{
										ENABLE_LOOP = true;
								}
							}, 1000);
						MapaIncidencias.map = new google.maps.Map(document.getElementById('map-canvas'), {
								zoom: 14,
								center: new google.maps.LatLng(-12.121446, -77.030175),
						        mapTypeId: google.maps.MapTypeId.ROADMAP
							});
						google.maps.event.addListener(MapaIncidencias.map, 'idle', function() {
								$('#actualizarBtn').css('z-index','9999999999');
							});
						google.maps.event.addListener(MapaIncidencias.map, 'click', function(event) {
								IncidenciaService.openFormRegistroNuevo({
						        		title:'Registrar Incidencia'
						        	});
								$.ajax({
										url: PATH_PROYECTO_BASE+"catastro/get-name-street",
									    dataType: "json",
									    data:{latitud:event.latLng.lat(),longitud:event.latLng.lng()},
									    success: function( response ) {
									    	var result = response.result || [];
									    	if(result.length>0){
									    		var name = result[0];
									    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1]:name.names[0]);
									    		Ext.getCmp('coordenadas').setValue(event.latLng.lat()+' '+event.latLng.lng());
									    		Ext.getCmp('latitud').setValue(event.latLng.lat());
									    		Ext.getCmp('longitud').setValue(event.latLng.lng());
									    	}
									    }
									});
								IncidenciaService.setZonaSubZona2(event.latLng.lng()+' '+event.latLng.lat());
							});
						google.maps.event.addListener(MapaIncidencias.map, 'bounds_changed', function() {
								if(MapaIncidencias.markers.length>0)				{ MapaIncidencias.redimensionIcons(MapaIncidencias.markers); }
								if(MapaIncidencias.markersVigilantes.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersVigilantes); }
								if(MapaIncidencias.markersEstacionamientos.length>0){ MapaIncidencias.redimensionIcons(MapaIncidencias.markersEstacionamientos); }
								if(MapaIncidencias.markersCambistas.length>0)		{ MapaIncidencias.redimensionIcons(MapaIncidencias.markersCambistas); }
							});				
						MapaIncidencias.buildWazeService();
						MapaIncidencias.buildTetraService();
						MapaIncidencias.buildServiceVoxiva();
						MapaIncidencias.buildVigilantesService();
						MapaIncidencias.buildEstacionamientoService();
						MapaIncidencias.buildCambistasService();
						MapaIncidencias.refreshWaze();
						MapaIncidencias.refreshTetra();
						MapaIncidencias.refreshVoxiva();
						MapaIncidencias.refreshCambista();
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
				if(options.tipo == 'waze'){
							if(options.objWaze  && (options.objWaze && options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('HAZARD_ON_ROAD_CAR_STOPPED')>-1)){
								btnAddVoxWaze = '<br><div style="margin-top:10px;"><button data-cor-y="'+options.objWaze.location.y
												+'" data-cor-x="'+options.objWaze.location.x
												+'" class="btn btn-warning btn-sm saveWazeVoxiva" style="display:inline;margin-right:20px">Registrar Incidencia</button></div>';
						}
					}
				var infowindow = new google.maps.InfoWindow({
							index: options.index,
							content: options.html+btnAddVoxWaze
					});
				if(options.tipo == 'waze' && options.objWaze && (options.objWaze.subtype.indexOf('ACCIDENT')>-1 || options.objWaze.subtype.indexOf('HAZARD_ON_ROAD_CAR_STOPPED')>-1)){
							google.maps.event.addListener(infowindow, 'domready', function (e){
								    	var geo = this;
				    					$('.saveWazeVoxiva').click(function(){
					    						MIDService.geoCords = 	geo.position;
				    							MIDService.objSelected = null;
				    							$('#idIncidencia-form').val('');
				    							$('#medioWaze').val('9841');
				    							$('#latitud').val($(this).attr('data-cor-y'));
				    							$('#longitud').val($(this).attr('data-cor-x'));
				    							$('#myModalRegistro').modal();
											});
									});
								}
				var visible = true;
				switch(options.tipo){
								case 'waze':		visible = MapaIncidencias.getVisible('waze'); break;
								case 'tetra1':		visible = MapaIncidencias.getVisible('tetra1'); break;
								case 'tetra2':		visible = MapaIncidencias.getVisible('tetra2'); break;
								case 'tetra3':		visible = MapaIncidencias.getVisible('tetra3'); break;
								case 'tetra4':		visible = MapaIncidencias.getVisible('tetra4'); break;
								case 'tetra5':		visible = MapaIncidencias.getVisible('tetra5');	break;	
								case 'tetra6':		visible = MapaIncidencias.getVisible('tetra6');	break;				
								case 'tetra7':		visible = MapaIncidencias.getVisible('tetra7'); break;
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
						}else{
							if(MapaIncidencias.map.getZoom() > 16 && MapaIncidencias.map.getZoom() <= 17){	
								icon = {
									    url: image, // url
									    scaledSize: iconScale2, // scaled size
									    origin: null, // origin
						    			anchor: null // anchor
									};
							}else{
								if(MapaIncidencias.map.getZoom() > 17){
										icon = {
										    url: image, // url
										    scaledSize: iconScale3, // scaled size
										    origin: null, // origin
							    			anchor: null // anchor
										};
								}
							}
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
						marker : marker
						,tipo:options.tipo
						,punto:options.punto
						,uuid:options.uuid
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
		
		buildServiceVoxiva:function(){
			$.ajax({
		    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list",
		    dataType: "json",
		    success: function( response ) {
		    	MIDService.incidenciasVoxiva = [];
		    	var tituloV = 'ALERTA MIRAFLORES'; 
		    	$.each(response.data,function(i,o){
		    		
		    		if(o.medioIngreso+''=='399'){tituloV='FACEBOOK';}
		    		else{
		    			if(o.medioIngreso+''=='9832'){tituloV='WHATSAPP';}
		    			else{
		    				if(o.medioIngreso+''=='400'){tituloV='TWITTER';}
		    				else{
		    					if(o.medioIngreso+''=='314'){tituloV='LLAMADA TELEFÓNICA';}
		    					else{
			    					tituloV='ALERTA MIRAFLORES';
			    				}
			    			}
		    			}
			    	}
		    		
		    		function callDescUnidad(u){
			    			var t;
			    			switch(u){
			    				case 1: t="SEGURIDAD CIUDADANA"; break;
			    				case 2: t="FISCALIZACION"; break;
			    				case 3: t="SEGURIDAD VIAL"; break;
			    				case 4: t="DESARROLLO HUMANO"; break;
			    				case 5: t="DEFENSA CIVIL"; break;
			    				case 6: t="APOYO AL TURISTA"; break;
			    				default: t=""
			    			}
			    			return t;
		    		}
		    		
		    		function callDescCaso(c){
			    			var t ;
			    			switch(c){
				    				case 1: t="ACCIDENTES DE TRANSITO"; break;
				    				case 2: t="HECHOS CONTRA EL PATRIMONIO"; break;
				    				case 3: t="HECHOS CONTRA LA VIDA EL CUERPO Y LA SALUD"; break;
				    				case 4: t="HECHOS CONTRA LA LIBERTAD"; break;
				    				case 5: t="HECHOS CONTRA LA SEGURIDAD PUBLICA"; break;
				    				case 6: t="APOYO AL CONTRIBUYENTE"; break;
				    				case 7: t="SOSPECHOSOS"; break;
				    				case 8: t="OPERATIVOS"; break;
				    				case 9: t="INFRACCION MUNICIPALES"; break;
				    				case 10: t="VEHICULOS MAL ESTACIONADOS"; break;
				    				case 11: t="VEHICULOS APARENTEMENTE ABANDONADOS"; break;
				    				case 12: t="PARADERO INFORMAL"; break;
				    				case 13: t="TRANSPORTE PUBLICO FUERA DE RUTA"; break;
				    				case 14: t="HALLAZGO DE VEHICULO"; break;
				    				case 15: t="CONGESTION VEHICULAR"; break;
				    				case 16: t="SEMAFOROS INOPERATIVOS"; break;
				    				case 17: t="VIOLENCIA FAMILIAR"; break;
				    				case 18: t="ATENCION A ORATE"; break;
				    				case 19: t="ACTO DE RIESGO"; break;
				    				case 20: t="DESASTRES NATURALES"; break;
				    				case 21: t="DERRUMBE"; break;
				    				case 22: t="AFORO"; break;
				    				case 23: t="ORIENTACION"; break;
				    				case 24: t="APOYO MEDICO"; break;
				    				case 25: t="ORATES"; break;
				    				case 26: t="SITUACION PRECARIA"; break;
				    				case 27: t="REDUCCION DE PATRIMONIO"; break;
				    				case 28: t="LIBADORES EN VIA PUBLICA"; break;
				    				case 29: t="DESORDEN EN VIA PUBLICA"; break;
				    				case 30: t="AMBULANTES"; break;
				    				default: t=""
			    			}
			    			return t;
		    		}
		    		
		    		function callDescSubCaso(s){
			    			var t;
			    			switch(s) {
				    				case 1: t="ATROPELLO"; break;
				    				case 2: t="CHOQUE"; break;
				    				case 3: t="DESPISTE"; break;
				    				case 4: t="INCENDIO_DE_VEHICULOS"; break;
				    				case 5: t="VOLCADURA"; break;
				    				case 6: t="INCIDENCIA_DELICTIVA"; break;
				    				case 7: t="OTROS"; break;
				    				case 8: t="HALLAZGO_DE_CADAVER"; break;
				    				case 9: t="VENTA_DE_DROGAS"; break;
				    				case 10: t="CONSUMO_DE_DROGAS"; break;
				    				case 11: t="SUICIDIO"; break;
				    				case 12: t="VIOLENCIA_SEXUAL"; break;
				    				case 13: t="ACOSO_CALLEJERO"; break;
				    				case 14: t="OFENSA_AL_PUDOR"; break;
				    				case 15: t="TRATA_DE_PERSONAS"; break;
				    				case 16: t="SECUESTRO"; break;
				    				case 17: t="RAPTO"; break;
				    				case 18: t="CONSUMO_DE_LICOR_EN_LA_VIA_PUBLICA"; break;
				    				case 19: t="DESORDEN_EN_LA_VIA_PUBLICA"; break;
				    				case 20: t="PERTURBACION_VECINAL"; break;
				    				case 21: t="AUXILIO_MECANICO"; break;
				    				case 22: t="AUXILIO_MEDICO"; break;
				    				case 23: t="CONSULTAS"; break;
				    				case 24: t="OTROS"; break;
				    				case 25: t="PERSONAS_SOSPECHOSAS"; break;
				    				case 26: t="VEHICULOS_SOSPECHOSOS"; break;
				    				case 27: t="ORDEN_PUBLICO"; break;
				    				case 28: t="RUIDOS_MOLESTOS"; break;
				    				default: t=""
			    			}
			    			return t;
		    		}

		    		var infowindow = new google.maps.InfoWindow({
				    		content:	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
										'<div><b>ID: </b><span>'+(o.idIncidencia)+'</span></div>'+
										'<div><b>ID Unidad de Atención: </b><span>'+(o.codUnidad?callDescUnidad(o.codUnidad):'')+'</span></div>'+
										'<div><b>ID Tipo de Caso: </b><span>'+(o.codCaso?callDescCaso(o.codCaso):'')+'</span></div>'+
										'<div><b>ID Tipo de SubCaso: </b><span>'+(o.codSubcaso?callDescSubCaso(o.Subcaso):'')+'</span></div>'+
										'<div><b>Incidencia: </b><span class="'+o.idIncidencia+'_incidenciapresentada">'+(o.descripcion!=null?o.descripcion:"")+'</span></div>'+
										'<div><b>Reporta: </b><span class="'+o.idIncidencia+'_reportante">'+(o.nombReport!=null?o.nombReport:"")+'</span></div>'+
										'<div><b>Telf. Reporta: </b><span class="'+o.idIncidencia+'_telefreportante">'+(o.telfReport!=null?o.telfReport:"")+'</span></div>'+
										'<div><b>Fecha de Evento: </b><span class="'+o.idIncidencia+'_fechaEvento">'+(o.fecEvento!=null?o.fecEvento:"")+'</span></div>'+
										'</div>'+
										'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Incidencia</button>'
			    	});
			    	
		    		google.maps.event.addListener(infowindow, 'domready', function (e) {
		    		    console.log("entra al PRIMERO");
		    			var geo = this;
		    					$('#'+o.idIncidencia+'_btn_update_voxiva').click(function(){
									console.log("click en boton actualizar para abrir form");
		    						$('#latitud').val('');
			    					$('#longitud').val('');
			    					MIDService.geoCords = 	geo.position;
	    							$('#idIncidencia-form').val(o.idIncidencia);
									$('#medioWaze').val('');
									waitingDialog.show('Espere un momento por favor.', { progressType: 'primary'});
									
									var id=o.idIncidencia;
									
									console.log("id");
									console.log(id);
									
									$.ajax({
										    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list",
										    dataType: "json",
										    data:{idIncidencia:o.idIncidencia},
										    success: function( response ) {
										    	MIDService.objSelected = response.data[0];
										    	waitingDialog.hide();
										    	IncidenciaService.openFormRegistroNuevo({
						                    		title:'Actualizar Inicidencia',
						                    		codIncidencia: id
						                    	});
//												$('#myModalRegistro').modal();
										    	}
								    });
							});
					});
		    		
//			    	var icon = {
//					    url: PATH_PROYECTO_BASE+'images/phone_azul.png', // url
//					    scaledSize: new google.maps.Size(24, 27), // scaled size
//					    origin: new google.maps.Point(0,0), // origin
//					    anchor: new google.maps.Point(0, 0) // anchor
//					};
					
			    	var image = PATH_PROYECTO_BASE+'images/phone_azul.png';
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
			    		position: new google.maps.LatLng(parseFloat(o.longitud), parseFloat(o.latitud)),
			    		map: MapaIncidencias.map,
			    		draggable: false,
			            mapTypeId: google.maps.MapTypeId.ROADMAP,
			            
			            icon: icon
			    	});
			    	
			    	if(o.indLeido+''!='S'){
				    	marker.setAnimation(google.maps.Animation.BOUNCE);
			    	}
			    	
			    	google.maps.event.addListener(marker, 'click', function () {
			    		infowindow.open(MapaIncidencias.map, marker);
			    		marker.setAnimation(null);
			    		MapaIncidencias.setMarkerLeido(o.idIncidencia);
			    	});
			    	
			    	var objMarker = {
			    			marker : marker
			    			,tipo:'voxiva'
			    			,idIncidencia:o.idIncidencia
			    	}
			    	
			    	MapaIncidencias.markers.push(objMarker);
			    	MapaIncidencias.markersVoxiva.push(objMarker);
			    	
		    	});
		    	
		    	
		    }});
			
		}
		,
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
		       
		       
//		       ////console.log(jam)
		
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
				    content: '<b style="color:#C04B3A;"> Tráfico Denso</b><br>' +
				    		'<p>' +
				    			'En '+jam.street+' en '+jam.city+'<br>' +
				    			'Velocidad Media: ' +Math.round((jam.speed*18)/5)+' km/h<br>' +
				    			(jam.delay<0?'Via Bloqueda':('Tiempo de Conducción: '+Math.round(jam.delay/60)+' Minuto'+(Math.round(jam.delay/60)>1?'s':'')))+
				    			'<br>Hace '+(minutes>=60?(horas+' Hora'+(horas>1?'s':'')):(minutes+' Minuto'+(interval>1?'s':'')))+
				    		'</p>'
				  });
	       	   
//	       	   //CARLOS
//		       	var infowindow2 = new google.maps.InfoWindow({
//				    content: '<b style="color:#C04B3A;"> SOLO ES UNA PRUEBA</b><br>'
//				  });
//		       	var marker2 = new google.maps.Marker({
//		            position: center,
//		            draggable: true,
//		            map: MapaIncidencias.map,
//		            title:'Ejemplo marcador arrastrable'
//		        });
			  
			   google.maps.event.addListener(flightPath, 'click', function(event) {
				    //infowindow.position = event.latLng;
				    
//				    infowindow.setContent(toolTip);
					infowindow.setPosition(event.latLng);
					infowindow.open(MapaIncidencias.map);
				 }); 
		       
			
			}
		,getArrayTetra:function(arr){
			
			var tipo,obj;
			var arrTetra = [];
	        for (var i = 0; i < arr.length; i++) {
	        	
	        	if(arr[i].detalle){
	        	
	        	obj = new Object();
	        	obj['punto'] = new google.maps.LatLng(arr[i].longitud, arr[i].latitude);
	        	
	        	
	        	//obj['icon'] =PATH_PROYECTO_BASE+'images/icon_radio_tetra_32.png';
	        	obj['isRadioTetra'] = true;
	        	
	        	var estadoDesc;
	        	
//	        	if(!arr[i].detalle){
//	        		console.log(arr[i])
//	        	}
	        	
	        	var area = arr[i].detalle.area;
	        	
	        	
	        	
	        	if(area.indexOf("AREA") >= 0){
	        		
	        		estadoDesc = arr[i].detalle.area;
	        		obj['icon'] =PATH_PROYECTO_BASE+'images/serenazgo.png';
	        		tipo = 'tetra6';
	        		
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
	        		
	        		
	        	}else
	        	
	        	if(area.indexOf("TRANSITO") >= 0){
	        		
	        		estadoDesc = arr[i].detalle.area;
	        		obj['icon'] =PATH_PROYECTO_BASE+'images/transito.png';
	        		tipo = 'tetra4';
	        		
	        	}else
	        	
        		if(area.indexOf("COMISARIA") >= 0 || area.indexOf("PNP") >= 0){
	        		
	        		estadoDesc = arr[i].detalle.area;
	        		obj['icon'] =PATH_PROYECTO_BASE+'images/police.png';
	        		tipo = 'tetra5';
	        		
	        	}else
	        		
	        	if(area.indexOf("FISCALIZACION") >= 0){
		        		
		        		estadoDesc = arr[i].detalle.area;
		        		obj['icon'] =PATH_PROYECTO_BASE+'images/fiscalizacion.png';
		        		tipo = 'tetra7';
		        		
	        	}else	
	        	
	        	if(arr[i].estado+''=='001' || arr[i].estado+''=='010'){
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
	        	
	        	
				obj['html'] = '<div id="detalle'+arr[i].issi+'" style="padding: 5px 0px 5px 0px;width:200px;" >' +
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
		}
		,buildTetraService:function(){
			
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
		    		
		    	}else{
		    		
		    		////console.log("No hay datos que mostrar de -> /mobileApps/cierre-calles/dolphin-service");
		    		
		    	}
		    	
	
		    }
		});
			
		}
		,
		
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
					var infowindow = new google.maps.InfoWindow({
			    		content:'<b>Nombre: </b>'+e.nombre+'<br>' +
			    				'<b>Placa: </b>'+e.placa+'<br>' +
			    				'<b>Dirección: </b>'+e.ubicacionActual.direccion+'<br>' +
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
				    		content:'<b>Dni: </b>'+e.numDocIdent+'<br>' +
				    				'<b>Placa: </b>'+e.numPlaca+'<br>' +
				    				'<b>Dirección: </b>'+e.direccion+'<br>' +
				    				'<b>Alerta: </b>'+e.desAlerta+'<br>'+
				    				'<br><div style="margin-top:10px;"><button data-cor-y="'+e.latitud+'" data-cor-x="'+e.longitud+'" class="btn btn-warning btn-sm saveCambistaVoxiva" style="display:inline;margin-right:20px">Registrar Incidencia</button></div>'
				    				
				    	});
				    	
				   						
						var image = PATH_PROYECTO_BASE+'images/dolarAlerta.png';
					var icon;
					
					
					google.maps.event.addListener(infowindow, 'domready', function (e) {
		    			
						var geo = this;
				    					$('.saveCambistaVoxiva').click(function(){
				    							
				    							//console.log($(this).attr('data-cor-y'));
				    							//console.log($(this).attr('data-cor-x'));
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
				    			marker : marker
				    			,tipo:'cambistas'
				    	}
				    	
				    	MapaIncidencias.markersCambistas.push(objMarker);
					});
		    		
					procesandoCambista = false;
		    	
	
		    }
		});
			
		
		
		
			
		}
		
		,
		buildCambistasService:function(){
			
			MapaIncidencias.ajaxCambista();
			
		},
		buildEstacionamientoService:function(){
		
			
			
			var arrVigilantes = [];
			
			$.ajax({
		    url: PATH_PROYECTO_BASE+"mapa-incidencia/estacionamientos",
		    dataType: "json",
		    data:{
		    	publico:'N'
		    	,tipo:9396
		    },
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
				    			marker : marker
				    			,tipo:'estacionamientos'
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
		    
//			        ////console.log(data);
			        
			        
					$.each(data,function(i,vigilante){
						

//						MapaIncidencias.addMarker({
//							
//							icon:PATH_PROYECTO_BASE+'images/icon_vigilantes.png',
//							index:i+'_vigilante',
//							html:'<b>'+vigilante.nombreCompleto+'</b><br>'+vigilante.prestacionServicio+'<br><b>Área '+vigilante.area+'</b>',
//							punto: new google.maps.LatLng(parseFloat(vigilante.cordenadas.split(',')[0]), parseFloat(vigilante.cordenadas.split(',')[1])),
//							tipo:'vigilante'+vigilante.area,
//							isRadioTetra:false
//						});
						
						
						var infowindow = new google.maps.InfoWindow({
				    		content:'<b>'+vigilante.nombreCompleto+'</b><br>'+vigilante.prestacionServicio+'<br><b>Telefono:</b> '+vigilante.telefono+'<br><b>Cargo: </b>'+vigilante.cargo+'<br><b>Área:</b> '+vigilante.area+''
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
//				    		visible:true,
				            mapTypeId: google.maps.MapTypeId.ROADMAP,
				            icon:icon
				           // icon: new google.maps.MarkerImage( PATH_PROYECTO_BASE+'images/icon_vigilantes'+vigilante.area+'.png' , undefined, undefined, undefined, new google.maps.Size(32,36))
				    	});
				    	
				    	google.maps.event.addListener(marker, 'click', function () {
				    		infowindow.open(MapaIncidencias.map, marker);
				    	});
				    	
				    	var objMarker = {
				    			marker : marker
				    			,tipo:'vigilante'+vigilante.area
				    	}
				    	
				    	MapaIncidencias.markersVigilantes.push(objMarker);
					});
		    		
		    	
	
		    }
		});
			
		}
		,getArrayWaze:function(arr){
		
			var arrWaze = [];
			
			
			
			for (var i = 0; i < arr.length; i++) {
				
				obj = new Object();
				obj['uuid'] = arr[i].uuid;
				obj['punto'] = new google.maps.LatLng(arr[i].location.y, arr[i].location.x);
	
	
				if(arr[i].subtype == 'ACCIDENT_MINOR'){
						obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
						obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
						'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE LEVE</b></div>' +
						'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> ' +
								'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
//								+'<br /><div><button class="btn btn-info">Reportar Incidencia</button></div>';
								//'<b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
				}else{
					if(arr[i].subtype == 'ACCIDENT_MINOR'){
						obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
						obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
						'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE GRAVE</b></div>' +
						'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
								'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
//								+'<br /><div><button class="btn btn-info">Reportar Incidencia</button></div>';
								//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
					}else{
						if(arr[i].subtype == "JAM_MODERATE_TRAFFIC"){
							obj['icon'] =PATH_PROYECTO_BASE+'images/moderado_waze.png';
							obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
							'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO MODERADO</b></div>' +
							'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
									'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
									//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
						}else{
						
							if(arr[i].subtype == "JAM_HEAVY_TRAFFIC"){
								obj['icon'] =PATH_PROYECTO_BASE+'images/grave_waze.png';
								obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
								'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO GRAVE</b></div>' +
								'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
										'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
										//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
							}else{
								if(arr[i].subtype+""=="JAM_STAND_STILL_TRAFFIC"){
									obj['icon'] =PATH_PROYECTO_BASE+'images/paro_total.png';
									obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
									'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO ALTO TOTAL</b></div>' +
									'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
											''; 
											//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
								}else{
									if(arr[i].subtype+""=="JAM_LIGHT_TRAFFIC"){
										obj['icon'] =PATH_PROYECTO_BASE+'images/paro_total.png';
										obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO</b></div>' +
										'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
												'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
												//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
									}else{
										
										if(arr[i].type+""=="CONSTRUCTION"){
												obj['icon'] =PATH_PROYECTO_BASE+'images/construccion_waze.png';
												obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
												'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>CONSTRUCCIÓN</b></div>' +
												'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
														'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
														//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
											}
											else
											{
												if(arr[i].type+""=="ROAD_CLOSED"){
					
														var titulo = '';

														switch(arr[i].subtype){
															
															case 'ROAD_CLOSED_HAZARD':
																titulo = 'Via Cerrada: Peligro';
															break;
															
															case 'ROAD_CLOSED_CONSTRUCTION':
																titulo = 'Via Cerrada: Construcción';
															break;
															
															case 'ROAD_CLOSED_EVENT':
																titulo = 'Via Cerrada: Evento';
															break;
															
															default:
																titulo = 'Via Cerrada';
															break;
															
														}
														
														titulo = titulo.toUpperCase();
													
														obj['icon'] =PATH_PROYECTO_BASE+'images/calle_cerrada_waze.png';
														obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
														'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+titulo+'</b></div>' +
														'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
														
													}else{
													
														if(arr[i].type+""=="HAZARD" ||  arr[i].type+""=="WEATHERHAZARD" ){
					
															var titulo = '';

															obj['icon'] =PATH_PROYECTO_BASE+'images/peligro_waze.png';
															
															switch(arr[i].subtype){
																
																case 'HAZARD_ON_ROAD':
																	titulo = 'Peligro vial';
																break;
																
																case 'HAZARD_ON_SHOULDER':
																	titulo = 'Peligro en la berma';
																break;
																
																case 'HAZARD_WEATHER':
																	titulo = 'Peligro de clima';
																break;
																
																case 'HAZARD_ON_ROAD_OBJECT':
																	titulo = 'Objetos en la vía';
																break;
																
																case 'HAZARD_ON_ROAD_POT_HOLE':
																	titulo = 'Bache';
																break;
																	
																case 'HAZARD_ON_ROAD_ROAD_KILL':
																	titulo = 'Peligro de atropellamientos';
																break;
																
																case 'HAZARD_ON_SHOULDER_CAR_STOPPED':
																	titulo = 'Vehículo detenido a un lado de la vía';
																break;
																
																case 'HAZARD_ON_SHOULDER_ANIMALS':
																	titulo = 'Peligro de animales en la berma';
																break;
																
																case 'HAZARD_ON_SHOULDER_MISSING_SIGN':
																	titulo = 'Peligro de falta de señal en la berma';
																break;
																
																case 'HAZARD_WEATHER_FOG':
																	titulo = 'Peligro de niebla';
																break;
																
																case 'HAZARD WEATHER_HAIL':
																	titulo = 'Peligro de granizo';
																break;
																
																case 'HAZARD_WEATHER_HEAVY_RAIN':
																	titulo = 'Peligro de  fuertes lluvias';
																break;
																
																case 'HAZARD_WEATHER_HEAVY_SNOW':
																	titulo = 'Peligro de fuertes nevadas';
																break;
																
																case 'HAZARD_WEATHER_FLOOD':
																	titulo = 'Peligro de inundaciones';
																break;
																
																case 'HAZARD_WEATHER_MONSOON':
																	titulo = 'Peligro de vientos fuertes';
																break;
//															
																case 'HAZARD_WEATHER_TORNADO':
																	titulo = 'Peligro de tornado ';
																break;
																
																case 'HAZARD_WEATHER_HEAT_WAVE':
																	titulo = 'Peligro de ola de calor';
																break;
																
																case 'HAZARD_WEATHER_HURRICANE':
																	titulo = 'Peligro de huracán';
																break;
																
																case 'HAZARD_WEATHER_FREESING_RAIN':
																	titulo = 'Peligro de lluvias';
																break;
																
																case 'HAZARD_ON_ROAD_LANE_CLOSED':
																	titulo = 'Peligro en la vía: carriles cerrados';
																break;
																
																case 'HAZARD_ON_ROAD_OIL':
																	titulo = 'Peligro de aceite en la vía';
																break;
																
																case 'HAZARD_ON_ROAD_ICE':
																	titulo = 'Peligro de hielo en la vía';
																break;
																
																case 'HAZARD_ON_ROAD_CONSTRUCTION':
																obj['icon'] =PATH_PROYECTO_BASE+'images/construccion_waze.png';
																	titulo = 'construcción';
																break;
																
																case 'HAZARD_ON_ROAD_CAR_STOPPED':
																	titulo = 'Automóvil detenido sobre el camino';
																break;
																
																default:
																	titulo = 'Peligro vial';
																break;
																
															}
														
															titulo = titulo.toUpperCase();
															
															
															obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
															'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+titulo+'</b></div>' +
															'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																	'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
																	//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
															
														}else{
														
															if(arr[i].type == 'JAM'){
															obj['icon'] =PATH_PROYECTO_BASE+'images/moderado_waze.png';
															obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
															'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>EMBOTELLAMIENTO</b></div>' +
															'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																	'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A");
																	//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
															}else{
																
																if(arr[i].type.indexOf('ACCIDENT')>=0){
																	
																	obj['icon'] =PATH_PROYECTO_BASE+'images/accidente_waze.png';
																	obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
																	'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>ACCIDENTE</b></div>' +
																	'<div>'+(arr[i].reportDescription?'<p>'+arr[i].reportDescription+'</p>':'')+'' +
																			'<b>Fecha: </b>'+moment(new Date(arr[i].pubMillis)).format("DD/MM/YYYY HH:mm:ss A"); 
																			//+'<b>Calle:</b> '+(arr[i].street?arr[i].street:'')+'<br /> <b>Distrito:</b> '+(arr[i].city?arr[i].city:'')+'<br /><b>Valoración:</b> '+arr[i].reportRating+'</div></div>';
																	
																}else{
																	
																    obj['icon'] =PATH_PROYECTO_BASE+'images/defecto_waze.png';
																    obj['html'] = '<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
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
		}
		,buildWazeService:function(){
			
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
			
		}
		,
		
		ajaxWaze:function(){
		
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
				        
				      // arrTempUUID = [];
				        
				        arrWaze = MapaIncidencias.getArrayWaze(arr);
				        
//				        $.each(arrWaze,function(i,waze){
//				        	arrTempUUID.push(waze.uuid);
//				        });
//				        
//				        function isPresetTemp(v){
//				        	//arrTempUUID	
//				        	var e = false;
//				        	for(var i = 0 ; i < arrTempUUID.length ; i++){
//					    		if(v==arrTempUUID[i]){
//					    			e = true;
//					    			break;
//					    		}
//					    	}
//				        	return e;
//				        }
//				        
//				        for(var j = 0 ; j < arrWazeExistentes.length ; j++){
//				    		if(!isPresetTemp(arrWazeExistentes[j].key)){
//				    			////console.log('key a eleiminar->'+arrWazeExistentes[j].key)
//				    			deleteUUID(arrWazeExistentes[j].key);
//				    		}
//				    	}
				       
				        
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
			
		},
		
		refreshWaze:function(options){
			
			options = options || {};
				
			setInterval(function(){
				
				if(ENABLE_LOOP){
				
					if(!procesandoWaze){
						MapaIncidencias.ajaxWaze();
					}
					
				}
				
			}, (options.interval>=0?options.interval:INTERVALO_TIEMPO))
			
			
		}
		,
		ajaxTetra:function(){
		
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
		ajaxVoxiva:function(){
		
			
				procesandoVoxiva = true;
				
				flagVoxiva = false;
				
				$.ajax({
			    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list",
			    dataType: "json",
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
			    		
			    		if(o.medioIngreso+''=='399'){
				    			tituloV='FACEBOOK';
				    		}else{
				    			if(o.medioIngreso+''=='9832'){
				    				tituloV='WHATSAPP';
				    			}else{
				    				if(o.medioIngreso+''=='400'){
					    				tituloV='TWITTER';
					    			}else{
					    				if(o.medioIngreso+''=='314'){
					    					tituloV='LLAMADA TELEFÓNICA';
					    				}else{
					    					tituloV='ALERTA MIRAFLORES';
					    				}
					    			}
				    			}
				    		}
			    		
					  
			    		function callDescUnidad(u){
			    			var t;
			    			switch(u){
			    				case 1: t="SEGURIDAD CIUDADANA"; break;
			    				case 2: t="FISCALIZACION"; break;
			    				case 3: t="SEGURIDAD VIAL"; break;
			    				case 4: t="DESARROLLO HUMANO"; break;
			    				case 5: t="DEFENSA CIVIL"; break;
			    				case 6: t="APOYO AL TURISTA"; break;
			    				default: t=""
			    			}
			    			return t;
			    		}
			    		
			    		function callDescCaso(c){
			    			var t ;
			    			switch(c){
			    				case 1: t="ACCIDENTES DE TRANSITO"; break;
			    				case 2: t="HECHOS CONTRA EL PATRIMONIO"; break;
			    				case 3: t="HECHOS CONTRA LA VIDA EL CUERPO Y LA SALUD"; break;
			    				case 4: t="HECHOS CONTRA LA LIBERTAD"; break;
			    				case 5: t="HECHOS CONTRA LA SEGURIDAD PUBLICA"; break;
			    				case 6: t="APOYO AL CONTRIBUYENTE"; break;
			    				case 7: t="SOSPECHOSOS"; break;
			    				case 8: t="OPERATIVOS"; break;
			    				case 9: t="INFRACCION MUNICIPALES"; break;
			    				case 10: t="VEHICULOS MAL ESTACIONADOS"; break;
			    				case 11: t="VEHICULOS APARENTEMENTE ABANDONADOS"; break;
			    				case 12: t="PARADERO INFORMAL"; break;
			    				case 13: t="TRANSPORTE PUBLICO FUERA DE RUTA"; break;
			    				case 14: t="HALLAZGO DE VEHICULO"; break;
			    				case 15: t="CONGESTION VEHICULAR"; break;
			    				case 16: t="SEMAFOROS INOPERATIVOS"; break;
			    				case 17: t="VIOLENCIA FAMILIAR"; break;
			    				case 18: t="ATENCION A ORATE"; break;
			    				case 19: t="ACTO DE RIESGO"; break;
			    				case 20: t="DESASTRES NATURALES"; break;
			    				case 21: t="DERRUMBE"; break;
			    				case 22: t="AFORO"; break;
			    				case 23: t="ORIENTACION"; break;
			    				case 24: t="APOYO MEDICO"; break;
			    				case 25: t="ORATES"; break;
			    				case 26: t="SITUACION PRECARIA"; break;
			    				case 27: t="REDUCCION DE PATRIMONIO"; break;
			    				case 28: t="LIBADORES EN VIA PUBLICA"; break;
			    				case 29: t="DESORDEN EN VIA PUBLICA"; break;
			    				case 30: t="AMBULANTES"; break;
			    				default: t=""
			    			}
			    			return t;
			    		}

			    		function callDescSubCaso(s){
			    			var t;
			    			switch(s) {
			    				case 1: t="ATROPELLO"; break;
			    				case 2: t="CHOQUE"; break;
			    				case 3: t="DESPISTE"; break;
			    				case 4: t="INCENDIO_DE_VEHICULOS"; break;
			    				case 5: t="VOLCADURA"; break;
			    				case 6: t="INCIDENCIA_DELICTIVA"; break;
			    				case 7: t="OTROS"; break;
			    				case 8: t="HALLAZGO_DE_CADAVER"; break;
			    				case 9: t="VENTA_DE_DROGAS"; break;
			    				case 10: t="CONSUMO_DE_DROGAS"; break;
			    				case 11: t="SUICIDIO"; break;
			    				case 12: t="VIOLENCIA_SEXUAL"; break;
			    				case 13: t="ACOSO_CALLEJERO"; break;
			    				case 14: t="OFENSA_AL_PUDOR"; break;
			    				case 15: t="TRATA_DE_PERSONAS"; break;
			    				case 16: t="SECUESTRO"; break;
			    				case 17: t="RAPTO"; break;
			    				case 18: t="CONSUMO_DE_LICOR_EN_LA_VIA_PUBLICA"; break;
			    				case 19: t="DESORDEN_EN_LA_VIA_PUBLICA"; break;
			    				case 20: t="PERTURBACION_VECINAL"; break;
			    				case 21: t="AUXILIO_MECANICO"; break;
			    				case 22: t="AUXILIO_MEDICO"; break;
			    				case 23: t="CONSULTAS"; break;
			    				case 24: t="OTROS"; break;
			    				case 25: t="PERSONAS_SOSPECHOSAS"; break;
			    				case 26: t="VEHICULOS_SOSPECHOSOS"; break;
			    				case 27: t="ORDEN_PUBLICO"; break;
			    				case 28: t="RUIDOS_MOLESTOS"; break;
			    				default: t=""
			    			}
			    			return t;
			    		}
			    		
			    		var infowindow = new google.maps.InfoWindow({
				    		content: 	'<div class="detalle-acordion" style="padding: 5px 0px 5px 0px;width:300px;" >' +
							    		'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
										'<div><b>ID: </b><span>'+(o.idIncidencia)+'</span></div>'+
											//llamar funciones CON condicionales
											'<div><b>ID Unidad de Atención: </b><span>'+(o.codUnidad?callDescUnidad(o.codUnidad):'')+'</span></div>'+
											'<div><b>ID Tipo de Caso: </b><span>'+(o.codCaso?callDescCaso(o.codCaso):'')+'</span></div>'+
											'<div><b>ID Tipo de SubCaso: </b><span>'+(o.codSubcaso?callDescSubCaso(o.Subcaso):'')+'</span></div>'+
											'<div><b>Incidencia: </b><span class="'+o.idIncidencia+'_incidenciapresentada">'+(o.descripcion!=null?o.descripcion:"")+'</span></div>'+
											'<div><b>Reporta: </b><span class="'+o.idIncidencia+'_reportante">'+(o.nombReport!=null?o.nombReport:"")+'</span></div>'+
											'<div><b>Telf. Reporta: </b><span class="'+o.idIncidencia+'_telefreportante">'+(o.telfReport!=null?o.telfReport:"")+'</span></div>'+
											'<div><b>Fecha de Evento: </b><span class="'+o.idIncidencia+'_fechaEvento">'+(o.fecEvento!=null?o.fecEvento:"")+'</span></div>'+
										'</div>'+
										'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia
														+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i
														+'" style="display:inline;margin-right:20px">Actualizar Incidencia</button>'
							
//										'<div style="width:100%;float:left;font-family:Verdana;color:#d90016;font-size:14px;margin-bottom:5px;"><b>'+tituloV+'</b></div>' +
//							
//										'<div><b>ID: </b><span>'+(o.idIncidencia)+'</span></div>'+
//										'<div><b>ID Caso Voxiva: </b><span>'+(o.idCasoVoxiva?o.idCasoVoxiva:'')+'</span></div>'+
//
//										'<div><b>Incidencia: </b><span class="'+o.idIncidencia+'_incidenciapresentada">'+(o.incidenciaPresentada!=null?o.incidenciaPresentada:"")+'</span></div>'+
//										'<div><b>Reporta: </b><span class="'+o.idIncidencia+'_reportante">'+(o.nombreReportaIncidencia!=null?o.nombreReportaIncidencia:"")+'</span></div>'+
//										'<div><b>Direcci&oacute;n: </b><span class="'+o.idIncidencia+'_direccionIncidencia">'+(o.direccionIncidencia!=null?o.direccionIncidencia:"")+'</span></div>'+
////									'<div><b>Descripci&oacute;n: </b>'+(o.descripcion!=null?o.descripcion:"")+'</div>'+
//										'<div><b>Fecha y Hora: </b><span class="'+o.idIncidencia+'_fecHora">'+(o.horaLlamadaVoxiva!=null?o.horaLlamadaVoxiva:"")+'</span></div>'+
//										'<div><b>Acciones: </b><span class="'+o.idIncidencia+'_acciones">'+(o.accionesIncidencia!=null?o.accionesIncidencia:"")+'</span></div>'+
//										'<div><b>Operador Recepci&oacute;n: </b><span class="'+o.idIncidencia+'_operador">'+(o.nombreRecepcionaIncidencia!=null?o.nombreRecepcionaIncidencia:"")+'</span></div>'+
//										'</div>'+
//										'<br /><div style="margin:0 auto"><button class="btn btn-info btn-sm saveUpdateVoxiva" id="'+o.idIncidencia+'_btn_update_voxiva"  data-id="'+o.idCasoVoxiva+'"  data-index="'+i+'" style="display:inline;margin-right:20px">Actualizar Incidencia</button>'
				    	});
				    	
			    		
			    		google.maps.event.addListener(infowindow, 'domready', function (e) {
				    			console.log("entra al SEGUNDO");
				    			var geo = this;
				    			$('#'+o.idIncidencia+'_btn_update_voxiva').click(function(){
										$('#latitud').val('');
			    						$('#longitud').val('');
			    						MIDService.geoCords = 	geo.position;
										$('#idIncidencia-form').val(o.idIncidencia);
										$('#medioWaze').val('');
										waitingDialog.show('Espere un momento por favor.', { progressType: 'primary'});
										var id=o.idIncidencia;
											
										console.log("id");
										console.log(id);
										
										$.ajax({
									    url: PATH_PROYECTO_BASE+"mapa-incidencia/voxiva-list",
									    dataType: "json",
									    data:{idIncidencia:o.idIncidencia},
									    success: function( response ) {
										    	MIDService.objSelected = response.data[0];
										    	waitingDialog.hide();
										    	IncidenciaService.openFormRegistroNuevo({
						                    		title:'Actualizar Inicidencia',
						                    		codIncidencia: id
						                    	});
										    	//VERIFINCANDO SI CUANDO SE VA ACTUALIZAR LOS Cmp NECESARIOS TIENEN LOS DATOS
//						    					console.log("Cmp idIncidencia = "+Ext.getCmp('idIncidencia').getValue()); //solo es necesario cuando se actualiza
						    					console.log("Cmp coordenadas = "+Ext.getCmp('coordenadas').getValue());
						    					console.log("Cmp latitud = "+Ext.getCmp('latitud').getValue());
						    					console.log("Cmp longitud = "+Ext.getCmp('longitud').getValue());
						    					console.log("Cmp txtSubZona = "+Ext.getCmp('txtSubZona').getValue());
						    					console.log("Cmp txtZona = "+Ext.getCmp('txtZona').getValue());
						    					console.log("Cmp txtDireccion = "+Ext.getCmp('txtDireccion').getValue());
//												$('#myModalRegistro').modal();
										    	}
									    });
								});
						});
			    		
			    		
			    		
						var image = PATH_PROYECTO_BASE+'images/phone_azul.png';
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
				    		position: new google.maps.LatLng(parseFloat(o.longitud), parseFloat(o.latitud)),
				    		map: MapaIncidencias.map,
				    		draggable: false,
				    		visible:MapaIncidencias.getVisible('voxiva'),
				            mapTypeId: google.maps.MapTypeId.ROADMAP,
				            icon: icon
				    	});
				    	
				    				    	
				    	if(o.indLeido+''!='S'){
					    	marker.setAnimation(google.maps.Animation.BOUNCE);
				    	}
				    	
				    	google.maps.event.addListener(marker, 'click', function () {
				    		infowindow.open(MapaIncidencias.map, marker);
				    		marker.setAnimation(null);
				    		MapaIncidencias.setMarkerLeido(o.idIncidencia);
				    	});
				    	
				    	var objMarker = {
				    			marker : marker
				    			,tipo:'voxiva'
				    			,idIncidencia:o.idIncidencia
				    	}
				    	
				    	MapaIncidencias.markers.push(objMarker);
				    	MapaIncidencias.markersVoxiva.push(objMarker);
				    	
			    	});
			    	
			    	procesandoVoxiva = false;
			    }});
				
			
			
			
		}
		,refreshVoxiva:function(){
			
			setInterval(function(){
				
						if(ENABLE_LOOP){
							if(!procesandoVoxiva){
							MapaIncidencias.ajaxVoxiva();
							}
						}
				
			}, INTERVALO_TIEMPO);
			
		
		}
		
		,refreshCambista:function(){
			
			setInterval(function(){
				
						if(ENABLE_LOOP){
							if(!procesandoCambista){
								MapaIncidencias.ajaxCambista();
							}
						}
				
			}, INTERVALO_TIEMPO);
			
		
		}
		
//		//CARLOS
//		,openInfoWindow:function(marker) {
//		    var markerLatLng = marker.getPosition();
//		    infoWindow.setContent([
//		    	'La posicion del marcador es:',
//		        markerLatLng.lat(),
//		        ', ',
//		        markerLatLng.lng(),
//		        '&lt;br/&gt;&lt;br/&gt;Arr&amp;aacute;strame y haz click para actualizar la posici&amp;oacute;n.'
//		    ].join(''));
//		    infoWindow.open(map, marker);
//		}
		
		
		
}

window.onload = function(){

	MIDService.buildLists();
	
	MapaIncidencias.init();
	
	$('#update').click(function(){
		$(this).find('i').addClass('fa-spin');
		
		MapaIncidencias.ajaxWaze();
		MapaIncidencias.ajaxTetra();
		MapaIncidencias.ajaxVoxiva();
		MapaIncidencias.ajaxCambista();
		
	});	
	
	 $('[data-toggle="tooltip"]').tooltip()
	
	setInterval(function(){

	if(flagTetra && flagVoxiva && flagWaze){
	
		$('#update').find('i').removeClass('fa-spin');
			
		}
	
	},500);
	
	
	
}



