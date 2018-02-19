Ext.ns('CierreCalle');
CierreCalle.service = {

	selectGridCierreCalle:function(thisGrid, record, index){
			if(Ext.getCmp('btnEditarCierreCalle')){
					Ext.getCmp('btnEditarCierreCalle').setDisabled(false);
					Ext.getCmp('btnEditarCierreCalle').setHref(PATH_PROYECTO_BASE+'cierre-calles/registro?token=6df112b7e941caffe79bd04f788d05e6&id='+record.data.idIncidencia);
					Ext.getCmp('btnEliminarCierreCalle').setDisabled(false);	
			}
	},
	
	loadGrid:function(){
			var params = {
				tipoIncidencia:8766
			};
			if(!Ext.isEmpty(Ext.getCmp('b-tipo-evento').getValue())){
				params.desTipoIncidencia = Ext.getCmp('b-tipo-evento').getValue();
			}
			if(!Ext.isEmpty(Ext.getCmp('b-descripcion').getValue())){
				params.descripcion = Ext.getCmp('b-descripcion').getValue();
			}
			if(!Ext.isEmpty(Ext.getCmp('b-calles').getValue())){
				params.DesCallles = Ext.getCmp('b-calles').getValue();
			}
			if(!Ext.isEmpty(Ext.getCmp('b-fecIni').getValue()) && Ext.getCmp('b-fecIni').isValid()){
				params.strFecIni = Ext.Date.format(Ext.getCmp('b-fecIni').getValue(), 'Y-m-d');
			}
			if(!Ext.isEmpty(Ext.getCmp('b-fecFin').getValue()) && Ext.getCmp('b-fecFin').isValid()){
				params.strFecFin = Ext.Date.format(Ext.getCmp('b-fecFin').getValue(), 'Y-m-d');
			}
			if(Ext.getCmp('b-fecIni').isValid() && Ext.getCmp('b-fecFin').isValid()){
					Ext.getCmp('grid-cierre-calles').store.proxy.extraParams = params;
					Ext.getCmp('grid-cierre-calles').store.reload();
			}
	},
	
	anularIncidencia:function(){
			var record = Ext.getCmp('grid-cierre-calles').getSelectionModel().getSelection();
			Ext.Msg.confirm('Confirmar', '¿Seguro de eliminar el registro seleccionado?', function(btn, text){
				    if (btn == 'yes'){
					    	Util.runAjax({
										url:PATH_PROYECTO_BASE+'mapa-incidencia/anular-incidencia',
										params:{
											id:record[0].data.idIncidencia
										},
										async : true,
										method : 'POST',
										success:function(http){
											var response = Ext.decode(http.responseText);
											Ext.getCmp('grid-cierre-calles').store.load();
			    						}
									});
				    }
			});
	},
	
	printMapBlank:function(render,zoom,center,direccion){
			var myLatLng = center || {lat: -12.121084126455873, lng: -77.02935755252838};
			var map = new google.maps.Map(document.getElementById(render), {
				    zoom: zoom || 16,
				    center: myLatLng,
				    mapTypeId: google.maps.MapTypeId.ROADMAP
				});
			google.maps.event.addListenerOnce(map, 'idle', function(){
				    CierreCalle.service.showBrujula(render);
				});
			
			
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
	},
		
	printPolyline:function(config){
			console.log('en el printPolyline')
			var puntos = config.puntos || [];
			var centro = puntos[0];
			if(puntos.length==0){
					return;
				}
			var flightPlanCoordinates = [];
			var zoom = 14;
			if(puntos.length == 2){
					zoom = 17;
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
					    zoom: config.zoom ||  zoom,
					    mapTypeId: google.maps.MapTypeId.ROADMAP,
					    center: {lat: centro.latitud, lng: centro.longitud}
				});
			google.maps.event.addListenerOnce(map, 'idle', function(){
			    CierreCalle.service.showBrujula(config.render);
			});		  
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
	},
	
	showBrujula:function(idMap,image,size){
			$('#'+idMap).find('#'+idMap+'_brujula').remove();
			$('#'+idMap).append('<div id="'+idMap+'_brujula" style="position: absolute;width: '
					+(size)+'px;height: '+(size)+'px;top: 5px;right: 5px;"><img src="'
					+(image?image:PATH_PROYECTO_BASE+'images/brujula.png')+'" /></div>');
	}
	
}