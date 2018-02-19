var flightPathLineaTemp=null;
var FormularioCierreCalles = {
		markersSelectors:[],
		
		buildLinesSaves:function(map,dataIni){
		
			var flightPlanCoordinatesSave=[];
			var flightPathLineaSave;
			
			
			Ext.getCmp('grid-mapa-linea-selector').store.each(function(){
					var data = this.data;
					flightPlanCoordinatesSave = [];
					
					if(dataIni){
						
						if(!(dataIni.pointIni == data.pointIni && dataIni.pointFin == data.pointFin)){
							flightPlanCoordinatesSave.push({lat: parseFloat(data.pointIni.split(' ')[0]), lng: parseFloat(data.pointIni.split(' ')[1])});
						    flightPlanCoordinatesSave.push({lat: parseFloat(data.pointFin.split(' ')[0]), lng: parseFloat(data.pointFin.split(' ')[1])});
						    flightPathLineaSave = new google.maps.Polyline({
						    path: flightPlanCoordinatesSave,
						    geodesic: true,
						    strokeColor: '#0C6BB5',
					        strokeOpacity: 0.6,
					        strokeWeight: 6
						  });
						
				    		flightPathLineaSave.setMap(map);
						}
											
					}else{
						flightPlanCoordinatesSave.push({lat: parseFloat(data.pointIni.split(' ')[0]), lng: parseFloat(data.pointIni.split(' ')[1])});
						flightPlanCoordinatesSave.push({lat: parseFloat(data.pointFin.split(' ')[0]), lng: parseFloat(data.pointFin.split(' ')[1])});
						
						flightPathLineaSave = new google.maps.Polyline({
						    path: flightPlanCoordinatesSave,
						    geodesic: true,
						    strokeColor: '#0C6BB5',
					        strokeOpacity: 0.6,
					        strokeWeight: 6
						  });
						
				    flightPathLineaSave.setMap(map);
						
					}
					
			});
							
		
		},
		
		openWindowGeoLinea:function(options){
		
			options  = options || {};
			
			var record	=	options.record || {};
			var index 	=	options.index;
			
			var data	=	(record.data || {});
//			console.log(data);
			
			var direccionFinalStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":"NORTH", "name":"NORTE"},
			        {"value":"SOUTH", "name":"SUR"},
			        {"value":"EAST", "name":"ESTE"},
			        {"value":"WEST", "name":"OESTE"},
			        {"value":"NORTH_WEST", "name":"NOR-OESTE"},
			        {"value":"SOUTH_WEST", "name":"SUR-OESTE"},
			        {"value":"NORTH_EAST", "name":"NOR-ESTE"},
			        {"value":"SOUTH_EAST", "name":"SUR-ESTE"},
			        {"value":"BOTH_DIRECTIONS", "name":"AMBAS DIRECCIONES"}
			    ]
			});
			
			var cbxDireccionFinal = Ext.create('Ext.form.ComboBox', {
			    fieldLabel: 'D. Cardinal',
			    labelStyle:'padding-left:15px;',
			    store: direccionFinalStore,
			    queryMode: 'local',
			    name:'dirCardinal',
			    id:'cbxdireccionFinal-linea',
			    forceSelection:true,
			    displayField: 'name',
			   	width : (720/2),
			   	value:data.dirCardinal,
			    valueField: 'value',
			    allowBlank:false
			});
			
			Ext.create('Ext.window.Window', {
				    title: 'Georeferencia',
				    height: 610,
				    width: 750,
				    modal:true,
				    id:'win-geolinea',
				    layout: 'column',
				    tools:[
					{
					    type:'help',
					    id:'btnHelp-2',
					    hidden:!window.isAtencionRapidaForm,
					    listeners:{
					    
					    	afterrender:function(){
					    		$('#btnHelp-2').attr('data-placement','left');
					    		$('#btnHelp-2').attr('title',window.desDireccion);
					    		$('#btnHelp-2').tooltip({html:true});
					    	}
					    	
					    },
					    callback: function(panel, tool, event) {
					        // show help here
					    }
					}],
				    listeners:{
				    	close:function(){
				    
					    	flightPathLineaTemp=null;
					    	FormularioCierreCalles.arrMarkerLineaTemp = [];
					    	
					    }
				    },
			    items: [
			    {
							  hideTrigger : true,
							   id:'cbx-geo-calles-linea',
							   allowBlank:true,
							   xtype:'ComboGeneric',
							   width:750,
			            	   root:'data',
			            	   autoLoad:true,
			            	   url:PATH_PROYECTO_BASE+'catastro/obtener-georeferencia-via',
			            	   queryMode: 'remote',
			            	   emptyText:'Aproximar calles',
			            	   minChars:3,
			            	   valueField:'gid',
			            	   displayField :'displayValue',
			            	   queryDelay : 1000,
			            	   forceSelection:true,
			            	   model:
			            		   {
			            		   	nameModel:'CalleGeo'
			            		   	,fields:['gid','toponimia','tipo','cdra','punto','poligono'
			            		   	,{
			            		   		name:'displayValue',
			            		   		mapping:'toponimia',
			            		   		convert:function(v,record){
			            		   			return v+' CUADRA '+record.data.cdra;
			            		   		}
			            		   	}
			            		   	]	
			            		   }
			            	  ,listeners:{
			            	  	select:function(f,record){
			            	  		
			            	  		flightPathLineaTemp=null;
				    				FormularioCierreCalles.arrMarkerLineaTemp = [];
			            	  		
			            	  		var config = {
			            	  			lat:record.data.punto.split(' ')[1],
			            	  			lon:record.data.punto.split(' ')[0],
			            	  			idContent:'mapa-selector-linea',
			            	  			zoom:18,
			            	  			buildLineSave:true,
			            	  			notCenter:true
			            	  			
			            	  		}
			            	  		
			            	  	
			            	  		FormularioCierreCalles.buildMapaSelectorLinea(config);
			            	  		
			            	  	},
			            	  	afterrender:function(f){
			            	  	
			            	  		
			            	  		if(window.gidRegistro){
			            	  		
			            	  		this.store.load({
			            	  						params:{
			            	  								gid:window.gidRegistro
			            	  						},
			            	  						callback:function(response){
			            	  							f.setValue(window.gidRegistro);
			            	  							console.log(response)
			            	  							if(response && response[0] && response[0].data){
																		            
			            	  								flightPathLineaTemp=null;
										    				FormularioCierreCalles.arrMarkerLineaTemp = [];
									            	  		
									            	  		var config = {
									            	  			lat: parseFloat(response[0].data.punto.split(' ')[1]),
									            	  			lon: parseFloat(response[0].data.punto.split(' ')[0]),
									            	  			idContent:'mapa-selector-linea',
									            	  			zoom:18,
									            	  			buildLineSave:true,
									            	  			notCenter:true
									            	  			
									            	  		}
									            	  	
									            	  	setTimeout(function(){
									            	  	FormularioCierreCalles.buildMapaSelectorLinea(config);
									            	  	},200);
									            	  		
			            	  								
			            	  							}
			            	  						}
			            	  					   });
			            	  		}
			            	  		
			            	  		
			            	  	}
			            	  }	   
						}
						,
						{
							xtype:'panel'
							,width:750
							,height:380
							,html:'<div id="mapa-selector-linea"></div>'
							,listeners:{
							
								afterrender:function(){
									
									
									if(record.data){
										
									setTimeout(function(){
										
										flightPathLineaTemp=null;
				    					FormularioCierreCalles.arrMarkerLineaTemp = [];
			            	  				       
				    					var myLatlng = new google.maps.LatLng(parseFloat(data.pointIni.split(' ')[0]),parseFloat(data.pointIni.split(' ')[1]));
			
										var myOptions = {
											zoom : 16,
											center : myLatlng,
											mapTypeId : google.maps.MapTypeId.ROADMAP
										};
									
										var map = new google.maps.Map(document.getElementById('mapa-selector-linea'), myOptions);
				    					
									    var markerEl = new google.maps.Marker({
									        position: myLatlng, 
									        map: map,
													animation : google.maps.Animation.DROP,
													draggable : true
									    });
								
									    FormularioCierreCalles.arrMarkerLineaTemp.push(markerEl);
									    
									    
									     var markerEl2 = new google.maps.Marker({
									        position: new google.maps.LatLng(parseFloat(data.pointFin.split(' ')[0]),parseFloat(data.pointFin.split(' ')[1])), 
									        map: map,
													animation : google.maps.Animation.DROP,
													draggable : true
									    });
								
									    FormularioCierreCalles.arrMarkerLineaTemp.push(markerEl2);
									    
									    
									    	
								    	var flightPlanCoordinates=[];
								    	
								    	Ext.each(FormularioCierreCalles.arrMarkerLineaTemp,function(m){
								    	
								    			flightPlanCoordinates.push({lat: m.position.lat(), lng: m.position.lng()});
								    	
								    	});
								    	
								    	flightPathLineaTemp = new google.maps.Polyline({
										    path: flightPlanCoordinates,
										    geodesic: true,
										    strokeColor: '#0C6BB5',
									        strokeOpacity: 0.6,
									        strokeWeight: 6
										  });
										
										  flightPathLineaTemp.setMap(map);
									    
									    
									    
									     google.maps.event.addListener(markerEl, 'dragend', function(event) {																		
											if(flightPathLineaTemp){
									     		
									     		var flightPlanCoordinates2=[];
									    	
									    	Ext.each(FormularioCierreCalles.arrMarkerLineaTemp,function(m){
									    	
									    			flightPlanCoordinates2.push({lat: m.position.lat(), lng: m.position.lng()});
									    	
									    	});
									    	
									    	flightPathLineaTemp.setPath(flightPlanCoordinates2);
									     		
											}
									     	//event.latLng.lat()
											
										});
										
										google.maps.event.addListener(markerEl2, 'dragend', function(event) {																		
											if(flightPathLineaTemp){
									     		
									     		var flightPlanCoordinates2=[];
									    	
									    	Ext.each(FormularioCierreCalles.arrMarkerLineaTemp,function(m){
									    	
									    			flightPlanCoordinates2.push({lat: m.position.lat(), lng: m.position.lng()});
									    	
									    	});
									    	
									    	flightPathLineaTemp.setPath(flightPlanCoordinates2);
									     		
											}
									     	//event.latLng.lat()
											
										});
										
										
										FormularioCierreCalles.buildLinesSaves(map,data)
			            	  		
			            	  		},100);
										
									}else{
										
									setTimeout(function(){
									
										var config = {
				            	  			lat:-12.121084126455873,
				            	  			lon:-77.02935755252838,
				            	  			idContent:'mapa-selector-linea',
				            	  			zoom:18,
				            	  			buildLineSave:true
				            	  			
				            	  		}
				            	  	
				            	  		FormularioCierreCalles.buildMapaSelectorLinea(config);
										
									},100);
										
									}
									
									
									
								}
								
							}
						},
						{
							xtype:'form'
							,width:750
							,layout:'column'
							,border:false
							,id:'form-geolinea'
							,bodyStyle:'padding:20px 0px 10px 10px;'
							,items:[
									{
										xtype:'textfield',
										fieldLabel : 'Dirección',
										width : (720/2),
										allowBlank:false,
										name:'desCalle',
										id:'desCalleLinea',
										value:data.desCalle
									},
									cbxDireccionFinal
									,
									{
										xtype:'textfield',
										fieldLabel : 'Intersección 1',
										width : (720/2),
										style:'margin-top:10px;',
										name:'interseccion1',
										id:'interseccion1',
										value:data.intercepcion1
									}
									,
									{
										xtype:'textfield',
										fieldLabel : 'Intersección 2',
										width : (720/2),
										style:'margin-top:10px;',
										labelStyle:'padding-left:15px;',
										name:'interseccion2',
										id:'interseccion2',
										value:data.intercepcion2
									}
							]
						}
						],
						buttons:[
								{
									text:'Grabar'
									,handler:function(){
									
//										console.log('Punto Inicial : '+FormularioCierreCalles.arrMarkerLineaTemp[0].position.lat()+' '+FormularioCierreCalles.arrMarkerLineaTemp[0].position.lng());
//										console.log('Punto Final   : '+FormularioCierreCalles.arrMarkerLineaTemp[1].position.lat()+' '+FormularioCierreCalles.arrMarkerLineaTemp[1].position.lng());
//										
										
										console.log(FormularioCierreCalles.arrMarkerLineaTemp[0]);
										
										if(Ext.isEmpty(FormularioCierreCalles.arrMarkerLineaTemp[0]+""=="undefined")){
											Ext.Msg.show({
							                        	    title:'Error',
							                        	    message: 'Debe seleccionar el punto inicial.',
							                        	    buttons: Ext.Msg.OK ,
							                        	    icon: Ext.Msg.ERROR
							                        	});
							               return;         	
										}
										
										
										if(Ext.isEmpty(FormularioCierreCalles.arrMarkerLineaTemp[1]+""=="undefined")){
											Ext.Msg.show({
							                        	    title:'Error',
							                        	    message: 'Debe seleccionar el punto final.',
							                        	    buttons: Ext.Msg.OK ,
							                        	    icon: Ext.Msg.ERROR
							                        	});
							               return;         	
										}
										
//										return;
										
										if(Ext.getCmp('form-geolinea').getForm().isValid()){
											
											if(FormularioCierreCalles.arrMarkerLineaTemp.length!=2){
											Ext.Msg.show({
							                        	    title:'Error',
							                        	    message: 'No ha ubicado el punto inicial y/o final en el mapa.',
							                        	    buttons: Ext.Msg.OK ,
							                        	    icon: Ext.Msg.ERROR
							                        	});
							               return;  
											}
											
											var values = Ext.getCmp('form-geolinea').getForm().getValues();
											

											var rec = Ext.create('PolyLine',{
																				desCalle:values.desCalle
																				,intercepcion1:values.interseccion1
																				,intercepcion2:values.interseccion2
																				,dirCardinal:values.dirCardinal
																				,pointIni:FormularioCierreCalles.arrMarkerLineaTemp[0].position.lat()+' '+FormularioCierreCalles.arrMarkerLineaTemp[0].position.lng()
																				,pointFin:FormularioCierreCalles.arrMarkerLineaTemp[1].position.lat()+' '+FormularioCierreCalles.arrMarkerLineaTemp[1].position.lng()
																				});
											
											if(record.data){
												
												Ext.getCmp('grid-mapa-linea-selector').store.remove(record);
												Ext.getCmp('grid-mapa-linea-selector').store.insert(index,rec)
												
											}else{
					    																						
					    						Ext.getCmp('grid-mapa-linea-selector').store.add(rec);
												
											}
											
											Ext.getCmp('win-geolinea').close();
										}
										
									}
								}
						]
				}).show();
		
		},
		
		registrarFormulario:function(){
		
			var form = Ext.getCmp('form-registro-incidencia-mapa');
			
			if(form.getForm().isValid()){
				
				var tipoEvento = Ext.getCmp('cbx-tipo-evento').getValue();
            		
				var storeDiasTrabajo = Ext.getCmp('grid-mapa-linea-selector-trabajo').store;
                		
    			if(storeDiasTrabajo.count()==0){
					Ext.Msg.show({
	                        	    title:'Error',
	                        	    message: 'Debe ingresar por lo menos un dia de trabajo.',
	                        	    buttons: Ext.Msg.OK ,
	                        	    icon: Ext.Msg.ERROR
	                        	});
	               return;         	
				}	
    			
				var storeGeometria = null;
				
//            	if(tipoEvento+'' == '8748'){
//            		
//            		storeGeometria = Ext.getCmp('grid-mapa-selector').store;
//				
//					if(storeGeometria.count()==0){
//						Ext.Msg.show({
//		                        	    title:'Error',
//		                        	    message: 'Debe ingresar por lo menos un punto georeferencial.',
//		                        	    buttons: Ext.Msg.OK ,
//		                        	    icon: Ext.Msg.ERROR
//		                        	});
//		               return;         	
//					}
//            		
//            		if(storeGeometria.count()>1){
//            			Ext.Msg.show({
//                    	    title:'Error',
//                    	    message: 'El tipo de evento no permite mas de un punto geo-referencial.',
//                    	    buttons: Ext.Msg.OK ,
//                    	    icon: Ext.Msg.ERROR
//                    	});
//						return;
//            		}
//            		
//            		var countBlank = 0 , blankPosition = 0 , countTempBlank=0;
//            	
//	            	storeGeometria.each(function(){
//	            		if(Ext.isEmpty(this.data.direccion) && countBlank == 0){
//	            			countBlank++;
//	            			countTempBlank = countTempBlank;
//	            			var editor = Ext.getCmp('grid-mapa-selector').plugins[0];
//						    editor.startEdit(countTempBlank ,0);
//	            		}
//	            		countTempBlank++;
//	            	});
//	            	
//	            	if(countBlank>0){
//	            		return;
//	            	}
//            		
//            	}else{
            		
            		storeGeometria = Ext.getCmp('grid-mapa-linea-selector').store;
            		
//            		if(tipoEvento+'' == '8749'){
            			if(storeGeometria.count()==0){
							Ext.Msg.show({
			                        	    title:'Error',
			                        	    message: 'Debe ingresar por lo menos un punto georeferencial.',
			                        	    buttons: Ext.Msg.OK ,
			                        	    icon: Ext.Msg.ERROR
			                        	});
			               return;         	
						}
//            		}
            		
//            	}
            	
            			
            
            			
				var formValues = form.getForm().getValues(); 
				
//				var horaIni = Ext.getCmp('horaInicio').getValue();
//				var horaFin = Ext.getCmp('horaFin').getValue();
//				
//				formValues.fecHoraInicio = formValues['fecInicio-inputEl']+' '+Ext.Date.format(horaIni,'H:i:s');
//				formValues.fecHoraFin = formValues['fecFin-inputEl']+' '+Ext.Date.format(horaFin,'H:i:s');
				
					
				console.log("formValues");
				console.log(formValues);
				
				var i = 0;
				storeGeometria.each(function(){
				
					var data = this.data;
					
//					if(tipoEvento+'' == '8748'){
//					
//						formValues['detalleGeometria['+i+'].geometria'] = data.longitud+' '+data.latitud;
//						formValues['detalleGeometria['+i+'].desdireccion'] = data.direccion;
//					
//					}else{
//					
						formValues['lineas['+i+'].pointIni'] = data.pointIni;
						formValues['lineas['+i+'].pointFin'] = data.pointFin;
						formValues['lineas['+i+'].desCalle'] = data.desCalle;
						formValues['lineas['+i+'].intercepcion1'] = data.intercepcion1;
						formValues['lineas['+i+'].intercepcion2'] = data.intercepcion2;
						formValues['lineas['+i+'].dirCardinal'] = data.dirCardinal;
						
//					}
					
					i++;
				});
				
				console.log("storeDiasTrabajo");
				console.log(storeDiasTrabajo);
				
				
				var j = 0;
				var fechas_invalidas = 0;
				storeDiasTrabajo.each(function(){
				
					var data = this.data;
					
//					console.log("dias data");
//					console.log(data);
					
					console.log(data.horaInicio+'->'+Ext.isDate(data.horaInicio))
					
					if(Ext.isDate(data.horaInicio)){
						formValues['dias['+j+'].horaInicio'] = Ext.Date.format(data.horaInicio, 'H:i:s')
					}else{
						formValues['dias['+j+'].horaInicio'] = data.horaInicio;
					}
					
					if(Ext.isEmpty(formValues['dias['+j+'].horaInicio'])){
						fechas_invalidas++;
					}
					
					if(Ext.isDate(data.horaFin)){
						formValues['dias['+j+'].horaFin'] = Ext.Date.format(data.horaFin, 'H:i:s')
					}else{
						formValues['dias['+j+'].horaFin'] = data.horaFin;
					}
					
					if(Ext.isEmpty(formValues['dias['+j+'].horaFin'])){
						fechas_invalidas++;
					}
					
					formValues['dias['+j+'].desDia'] = data.desDia;
					formValues['dias['+j+'].fecRegistra'] = Ext.Date.format(data.fecRegistra,'d/m/Y');
					
					j++;
				});
				
				if(fechas_invalidas > 0){
					Ext.Msg.show({
                	    title:'Error',
                	    message: 'Los campos fecha de incio y fin necesitan un valor.',
                	    buttons: Ext.Msg.OK ,
                	    icon: Ext.Msg.ERROR
                	});
					return; 	
				}
				
				
				formValues.fecHoraInicio = formValues['dias[0].fecRegistra']+' '+formValues['dias[0].horaInicio'];
				
				if((j-1)>0){
					formValues.fecHoraFin = formValues['dias['+(j-1)+'].fecRegistra']+' '+formValues['dias['+(j-1)+'].horaFin'];
				}else{
					formValues.fecHoraFin = formValues['dias[0].fecRegistra']+' '+formValues['dias[0].horaFin'];	
				}
				
				formValues.fecHoraInicio = formValues.fecHoraInicio.trim();
				formValues.fecHoraFin = formValues.fecHoraFin.trim();
				
				formValues.tipoIncidencia = 8766;
				
				if(IS_UPDATE){
					formValues.idIncidencia = ID_INCIDENCIA;
				}
				
				if(Ext.getCmp('chkCierreTotal').checked){
					formValues.tipoCierre = 'T';
				}else{
					formValues.tipoCierre = 'P';
				}
				
				
				if(parent.IDE_ROL_MAIN_JSP != 6){
					formValues.visible = 'S';
				}else{
					if(Ext.getCmp('chkVisible').checked){
						formValues.visible = 'S';
					}else{
						formValues.visible = 'N';
					}
				}
				
				//console.log(formValues);
				if(parent.IDE_USUARIO_MAIN_JSP){
					formValues.idUsuarioSesion = parent.IDE_USUARIO_MAIN_JSP;
				}else{
					formValues.idUsuarioSesion = 3;
				}
				
				formValues.medioIngreso =  MEDIO_INGRESO;
				
				if(window.idPreRegistro){
					formValues.idPreRegistro = window.idPreRegistro;
				}
				
				console.log(formValues)
				
				Ext.get('main-content').mask('Obteniendo Datos.');
						
						Util.runAjax({
							url:PATH_PROYECTO_BASE+'cierre-calles/registrar-incidencia',
							params:formValues,
							async : true,
							method : 'POST',
							success:function(http){
								Ext.get('main-content').unmask();
								var response = Ext.decode(http.responseText);
							
								if(response.success){
									
									Ext.Msg.show({
			                    	    title:'OK!',
			                    	    message: 'Registro realizado de forma correcta.',
			                    	    buttons: Ext.Msg.OK ,
			                    	    icon: Ext.Msg.INFO,
			                    	    closable:false,
			                    	    fn: function(buttonId) {
			                    	    	
									        if (buttonId === "ok") {
									            // do on OK pressed
									        	if(window.idPreRegistro){
									        		window.location = PATH_PROYECTO_BASE+'mapa-incidencia/admin-pre-registro';
									        	}									        	
									        }
									    }
			                    	});
			                    	
									if(!IS_UPDATE){
										form.getForm().reset();
										storeGeometria.removeAll();
										storeDiasTrabajo.removeAll();
										Ext.getCmp('grid-mapa-selector').setDisabled(true);
										FormularioCierreCalles.printMapBlank('map');
									}
									
								}
                        		
							}
						});
				
			}
			
			
		}
		,
		
		printPolylinePreview:function(config){
		
			var centro = {latitud:parseFloat(config.data[0].pointFin.split(' ')[0]) , longitud:parseFloat(config.data[0].pointFin.split(' ')[1])};
			
			var zoom = 18;
			
						
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
			
			google.maps.event.addListenerOnce(map, 'idle', function(){
			    FormularioCierreCalles.showBrujula(config.render,'brujula-1');
			});		  
		
			Ext.each(config.data,function(item,index){
			
				var flightPlanCoordinates = [];
				flightPlanCoordinates.push({lat: parseFloat(item.pointIni.split(' ')[0]), lng: parseFloat(item.pointIni.split(' ')[1])});
				
				flightPlanCoordinates.push({lat: parseFloat(item.pointFin.split(' ')[0]), lng: parseFloat(item.pointFin.split(' ')[1])});
				
						
				  var flightPath = new google.maps.Polyline({
				    path: flightPlanCoordinates,
				    geodesic: true,
				    strokeColor: '#0C6BB5',
			        strokeOpacity: 0.6,
			        strokeWeight: 6,
			        map:map
				  });
			
			  flightPath.setMap(map);
			  
			   var infowindow = new google.maps.InfoWindow({
					    content: item.desCalle
					  });
			  
			   google.maps.event.addListener(flightPath, 'click', function(event) {
				    //infowindow.position = event.latLng;
				    
//				    infowindow.setContent(toolTip);
					infowindow.setPosition(event.latLng);
					infowindow.open(map);
				 }); 
			
				
				
			});
			
			
			
			
	  
			
		}
		,
		printPolyline:function(config){
		
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
					    center: {lat: centro.latitud, lng: centro.longitud},
					    mapTypeId: google.maps.MapTypeId.ROADMAP
					  });
			
			google.maps.event.addListenerOnce(map, 'idle', function(){
			    FormularioCierreCalles.showBrujula(config.render,'brujula-1');
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
		arrMarkerLineaTemp:[],
		buildMapaSelectorLinea:function(config){
			
			var marker;
			var myLatlng = new google.maps.LatLng(parseFloat(config.lat) , parseFloat(config.lon) );
			
			var myOptions = {
				zoom : config.zoom || 15,
				center : myLatlng,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
		
			var map = new google.maps.Map(document.getElementById(config.idContent), myOptions);
					
			google.maps.event.addListenerOnce(map, 'idle', function(){
			    FormularioCierreCalles.showBrujula(config.idContent,'brujula-2');
			});
			
			google.maps.event.addListener(map, 'click', function(event) {
			 
				placeMarker(event.latLng);

			});
			
			function placeMarker(location) {
				
				
				if(FormularioCierreCalles.arrMarkerLineaTemp.length<2){
				
			    var markerEl = new google.maps.Marker({
			        position: location, 
			        map: map,
							animation : google.maps.Animation.DROP,
							draggable : true
			    });
		
			    FormularioCierreCalles.arrMarkerLineaTemp.push(markerEl);
			    
			    if(FormularioCierreCalles.arrMarkerLineaTemp.length == 2){
			    	
			    	var flightPlanCoordinates=[];
			    	
			    	Ext.each(FormularioCierreCalles.arrMarkerLineaTemp,function(m){
			    	
			    			flightPlanCoordinates.push({lat: m.position.lat(), lng: m.position.lng()});
			    	
			    	});
			    	
			    	flightPathLineaTemp = new google.maps.Polyline({
					    path: flightPlanCoordinates,
					    geodesic: true,
					    strokeColor: '#0C6BB5',
				        strokeOpacity: 0.6,
				        strokeWeight: 6
					  });
					
					  flightPathLineaTemp.setMap(map);
					  
					  /* *
					   * Obtener 
					   * */
					  
					  if(flightPlanCoordinates[1]){
						  var point =flightPlanCoordinates[1];
						  $.ajax({
							    url: PATH_PROYECTO_BASE+"catastro/get-name-street",
							    dataType: "json",
							    data:{latitud:point.lat,longitud:point.lng},
							    success: function( response ) {
							    	
							    	console.log(response);
							    	var result = response.result || [];
							    	if(result.length>0){
							    		
							    		var name = result[0];
							    		
							    		Ext.getCmp('desCalleLinea').setValue(name.names[1]?name.names[1]:name.names[0]);
							    	}
							    	
							    }
							   
							  });
						  
					  }
					  
			    }
			    
			    
			    
			     google.maps.event.addListener(markerEl, 'dragend', function(event) {																		
					if(flightPathLineaTemp){
			     		
			     		var flightPlanCoordinates2=[];
			    	
			    	Ext.each(FormularioCierreCalles.arrMarkerLineaTemp,function(m){
			    	
			    			flightPlanCoordinates2.push({lat: m.position.lat(), lng: m.position.lng()});
			    	
			    	});
			    	
			    	flightPathLineaTemp.setPath(flightPlanCoordinates2);
			     		
			    	
			    	 console.log("flightPlanCoordinates2");
					  console.log(flightPlanCoordinates2[1]);
					  
					  if(flightPlanCoordinates2[1]){
						  var point =flightPlanCoordinates2[1];
						  $.ajax({
							    url: PATH_PROYECTO_BASE+"catastro/get-name-street",
							    dataType: "json",
							    data:{latitud:point.lat,longitud:point.lng},
							    success: function( response ) {
							    	
							    	console.log(response);
							    	var result = response.result || [];
							    	if(result.length>0){
							    		
							    		var name = result[0];
							    		
							    		Ext.getCmp('desCalleLinea').setValue(name.names[1]?name.names[1]:name.names[0]);
							    	}
							    	
							    }
							   
							  });
						  
					  }
			    	
			    	
					}
			     	//event.latLng.lat()
					
				});
			    
				}
			  
			}
		
			if(config.buildLineSave){
				FormularioCierreCalles.buildLinesSaves(map);

				if(!config.notCenter){
				var c = 0;
		  		var r;
		  		Ext.getCmp('grid-mapa-linea-selector').store.each(function(){
		  			if(c==0){
		  				r = this.data;
		  			}
		  			c++;
		  		});
		  			if(r){
		  				var center = new google.maps.LatLng(parseFloat(r.pointIni.split(' ')[0]) , parseFloat(r.pointIni.split(' ')[1]) );
		  				map.setCenter(center);
		  			}
		  		
			}
			}
			
			
		}
		,
	
		buildMapaSelector:function(config){
			
			var marker;
			var myLatlng = new google.maps.LatLng(parseFloat(config.lat) , parseFloat(config.lon) );
			
			if(!config.notAddPunto){
			Ext.getCmp(config.idBtnComand).punto={
					lat:parseFloat(config.lat)
					,lng:parseFloat(config.lon)
				}
			}
			
			var myOptions = {
				zoom : config.zoom || 15,
				center : myLatlng,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
		
			var map = new google.maps.Map(document.getElementById(config.idContent), myOptions);
			//google.maps.event.trigger(map, 'resize');
			
			google.maps.event.addListenerOnce(map, 'idle', function(){
			    FormularioCierreCalles.showBrujula(config.idContent,'brujula-2');
			});
			
			google.maps.event.addListener(map, 'click', function(event) {
			 
				placeMarker(event.latLng);

			});
			
			function placeMarker(location) {
				
				Ext.each(FormularioCierreCalles.markersSelectors,function(m){
					m.setMap(null);
				});
				
				FormularioCierreCalles.markersSelectors = [];
				
			    var markerEl = new google.maps.Marker({
			        position: location, 
			        map: map,
							animation : google.maps.Animation.DROP,
							draggable : true
			    });
		
			    FormularioCierreCalles.markersSelectors.push(markerEl);
			    
			    google.maps.event.addListener(markerEl, 'dragend', function(event) {																		
					Ext.getCmp(config.idBtnComand).punto={
						lat:event.latLng.lat()
						,lng:event.latLng.lng()
					}
					
				});
			    
			   	Ext.getCmp(config.idBtnComand).punto={
					lat:location.lat()
					,lng:location.lng()
				}
			}
			
		
			if(!config.noMarker){

				marker = new google.maps.Marker({
							map : map,
							position: myLatlng,
							animation : google.maps.Animation.DROP,
							draggable : true
				});
				
				google.maps.event.addListener(marker, 'dragend', function(event) {																		
					Ext.getCmp(config.idBtnComand).punto={
						lat:event.latLng.lat()
						,lng:event.latLng.lng()
					}
				});

			}
			
		},
	
		openWindowGeo:function(options){
		
			options = options || {};
			
			var idBtnComand = 'btn-addgeometria'
			
			Ext.create('Ext.window.Window', {
			    title: 'Georeferencia',
			    height: 440,
			    width: 580,
			    modal:true,
			    fixed:true,
			    id:'win-selector-mapa',
			    layout: 'column',
			    tools:[
					{
					    type:'help',
					    id:'btnHelp-1',
					    hidden:!window.isAtencionRapidaForm,
					    listeners:{
					    
					    	afterrender:function(){
					    		
					    		$('#btnHelp-1').attr('data-placement','left');
					    		$('#btnHelp-1').attr('title',window.desDireccion);
					    	
					    		 $('#btnHelp-1').tooltip({html:true})
					    	}
					    	
					    },
					    callback: function(panel, tool, event) {
					        // show help here
					    }
					}],
			    items: [
			    {
							  hideTrigger : true,
							   id:'cbx-geo-calles',
							   allowBlank:true,
							   xtype:'ComboGeneric',
							   width:580,
			            	   root:'data',
			            	   autoLoad:true,
			            	   url:PATH_PROYECTO_BASE+'catastro/obtener-georeferencia-via',
			            	   queryMode: 'remote',
			            	   emptyText:'Aproximar calles',
			            	   minChars:3,
			            	   valueField:'gid',
			            	   displayField :'displayValue',
			            	   queryDelay : 1000,
			            	   forceSelection:true,
			            	   model:
			            		   {
			            		   	nameModel:'CalleGeo'
			            		   	,fields:['gid','toponimia','tipo','cdra','punto','poligono'
			            		   	,{
			            		   		name:'displayValue',
			            		   		mapping:'toponimia',
			            		   		convert:function(v,record){
			            		   			return v+' CUADRA '+record.data.cdra;
			            		   		}
			            		   	}
			            		   	]	
			            		   }
			            	  ,listeners:{
			            	  	select:function(f,record){
			            	  		var config = {
			            	  			lat:parseFloat(record.data.punto.split(' ')[1]),
			            	  			lon:parseFloat(record.data.punto.split(' ')[0]),
			            	  			idContent:'mapa-selector',
			            	  			dragable:false,
			            	  			zoom:18,
			            	  			noMarker:true,
			            	  			idBtnComand:idBtnComand
			            	  			
			            	  		}
			            	  	
			            	  		FormularioCierreCalles.buildMapaSelector(config);
			            	  		
			            	  	}
			            	  	,
			            	  	afterrender:function(f){
			            	  	
			            	  		
			            	  		if(window.gidRegistro){
			            	  		
			            	  		this.store.load({
			            	  						params:{
			            	  								gid:window.gidRegistro
			            	  						},
			            	  						callback:function(response){
			            	  							
			            	  										            	  							
			            	  							f.setValue(window.gidRegistro);
			            	  							
			            	  							
			            	  							if(response && response[0] && response[0].data){
																            
			            	  								flightPathLineaTemp=null;
										    				FormularioCierreCalles.arrMarkerLineaTemp = [];
									            	  		
									            	  		var config = {
									            	  			lat: parseFloat(response[0].data.punto.split(' ')[1]),
									            	  			lon: parseFloat(response[0].data.punto.split(' ')[0]),
									            	  			idContent:'mapa-selector',
									            	  			zoom:18,
									            	  			idBtnComand:idBtnComand
									            	  			
									            	  		}
									            	  	
									            	  	
									            	  		setTimeout(function(){
										            	  	FormularioCierreCalles.buildMapaSelector(config);
										            	  	},200);
									            	  		
									            	
									            	  		
			            	  								
			            	  							}
			            	  						}
			            	  					   });
			            	  		}
			            	  		
			            	  		
			            	  	}
			            	  }	   
						}
						,
						{
							xtype:'panel'
							,width:580
							,height:350
							,html:'<div id="mapa-selector"></div>'
							,listeners:{
							
								afterrender:function(){
								
									setTimeout(function(){
									
											var config = {
			            	  			lat:-12.121084126455873,
			            	  			lon:-77.02935755252838,
			            	  			idContent:'mapa-selector',
			            	  			dragable:false,
			            	  			zoom:18,
			            	  			noMarker:true,
			            	  			idBtnComand:idBtnComand,
			            	  			notAddPunto:true
			            	  			
			            	  		}
			            	  		
			            	  	
			            	  		FormularioCierreCalles.buildMapaSelector(config);
										
									},100);
									
									
								}
								
							}
						}
			    ],
			    buttons:[
					    {
					    	text:'Aceptar',
					    	height:35,
					    	id:idBtnComand,
					    	handler:function(a){

					    		var punto = a.punto;
					    		
					    		if(!punto){
					    			return;
					    		}
							
							var calle = null;					    		

								try{
					    		calle = Ext.getCmp('cbx-geo-calles').displayTplData[0];
								}catch(e){}

					    		var direccion = '';
					    		var cuadra = '';
					    		
					    		if(calle){
					    			direccion = calle.displayValue;
					    			cuadra = calle.cdra;
					    		}
					    		
					    		var record = Ext.create('GeometriaDetalle',{latitud:punto.lat,longitud:punto.lng,direccion:direccion,cuadra:cuadra});
					    		
					    		Ext.getCmp('grid-mapa-selector').store.add(record);
					    		
					    		var editor = Ext.getCmp('grid-mapa-selector').plugins[0];
					    		
					    		editor.startEdit(Ext.getCmp('grid-mapa-selector').store.count()-1 ,0);
					    		
					    		Ext.getCmp('win-selector-mapa').close();
					    		
					    	}
					    }
			    ]
			}).show();
		
		}
		,
		
		buildGridPolyLine:function(renderTo){
		
			var arrcardinales = [
			        {"value":"NORTH", "name":"NORTE"},
			        {"value":"SOUTH", "name":"SUR"},
			        {"value":"EAST", "name":"ESTE"},
			        {"value":"WEST", "name":"OESTE"},
			        {"value":"NORTH_WEST", "name":"NOR-OESTE"},
			        {"value":"SOUTH_WEST", "name":"SUR-OESTE"},
			        {"value":"NORTH_EAST", "name":"NOR-ESTE"},
			        {"value":"SOUTH_EAST", "name":"SUR-ESTE"},
			        {"value":"BOTH_DIRECTIONS", "name":"AMBAS DIRECCIONES"}
			    ];
			
			 Ext.define('PolyLine', {
			     extend: 'Ext.data.Model',
			     fields: ['idLinea','pointIni', 'pointFin', 'desCalle','intercepcion1','intercepcion2','idIncidencia','dirCardinal',
			     			{
			     				name:'displayCardinal',
			     				mapping:'dirCardinal',
			     				convert:function(v,r,o){
			     					var value = '';
			     					for(var i = 0 ; i < arrcardinales.length ; i++){
			     						if(arrcardinales[i].value == r.data.dirCardinal  ){
			     							value = arrcardinales[i].name;
			     							break;
			     						}
			     						
			     					}
			     					return value;
			     				}
			     			}
			     		]
			 });
			
			var store = Ext.create('Ext.data.Store', {
			    storeId:'geometriaLineaStore',
			    model:'PolyLine',
			    data:{'items':[
			    ]},
			    proxy: {
			        type: 'memory',
			        reader: {
			            type: 'json',
			            root: 'items'
			        }
			    }
			});
			
			
			
			store.on('datachanged',function(thisStore){
				
				if(thisStore.count() > 0){
				
					var records = [];
					var i = 0;
					thisStore.each(function(){
						var data = this.data;
						records[i] = data;
						i++;
					});
					
					FormularioCierreCalles.printPolylinePreview({render:'map',data:records});
						
				}else{
				
					FormularioCierreCalles.printMapBlank('map');
				
				}
				
							
			});
			

			var grid =  Ext.create('Ext.grid.Panel', {
			    store: Ext.data.StoreManager.lookup('geometriaLineaStore'),
			    renderTo:renderTo,
			    hidden:true,
			    viewConfig : {
//		        plugins: {
//		            ptype: 'gridviewdragdrop',
//		            dragText: 'Arrastre la fila para reordenar la lista'
//		        },
		        listeners:{
		            drop:function(){
		            	grid.getView().refresh();
		            }
		        }
		    },
			    id:'grid-mapa-linea-selector',
			    columns: [
			        { text: 'Punto Inicial',  dataIndex: 'pointIni' , width:110 ,hidden:true },
			        { text: 'Punto Final',  dataIndex: 'pointFin' , width:110 ,hidden:true },
			        { text: 'Dirección', dataIndex: 'desCalle' , width: 350},
			        { text: 'D. Cardinal', dataIndex: 'displayCardinal' , width: 170},
			        { text: 'Intersepción 1', dataIndex: 'intercepcion1' , width: 350},
			        { text: 'Intersepción 2', dataIndex: 'intercepcion2' , width: 350}
			    ],
			    height: 202,
			    width: 428,
			    plugins: {
				        ptype: 'cellediting',
				        clicksToEdit: 2
				    },
			    dockedItems : {
			            xtype: 'toolbar',
//									            style:'margin:0px 0px 0px 0px;border-top:1px #e1e1e1 solid !important;border-left:1px #e1e1e1 solid !important;border-right:1px #e1e1e1 solid !important;',
			            items: [
			              '->',
			                {
			            	  	text:'Agregar'
			                    ,id:'btnAddGeoLinea'
			                    ,iconCls:'btnAddSmall'
			                    ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){

			                    	FormularioCierreCalles.openWindowGeoLinea();
			                    	
//			                    	var tipoEvento = Ext.getCmp('cbx-tipo-evento').getValue();
//			                    	var count = Ext.getCmp('grid-mapa-selector').store.count();
//			                    	
//			                    	if(tipoEvento+'' == '8748'){
//			                    		if(count>0){
//			                    			Ext.Msg.show({
//				                        	    title:'Error',
//				                        	    message: 'El tipo de evento no permite mas de un punto geo-referencial.',
//				                        	    buttons: Ext.Msg.OK ,
//				                        	    icon: Ext.Msg.ERROR
//				                        	});
//											return;
//			                    		}
//			                    	}
//			                    	
//			                    	
//			                    	if(tipoEvento+'' == '8749'){
//			                    	if(count>1){
//			                    			Ext.Msg.show({
//				                        	    title:'Error',
//				                        	    message: 'El tipo de evento permite como maximo 2 puntos geo-referenciales.',
//				                        	    buttons: Ext.Msg.OK ,
//				                        	    icon: Ext.Msg.ERROR
//				                        	});
//											return;
//			                    		}
//			                    	}
//			                    	
//			                    	FormularioCierreCalles.openWindowGeo();
			                    	
			                    }
			                }
			              ,
			                {
			            	  	text:'Quitar'
				                ,id:'btnRemoveGeoLinea'
			                    ,iconCls:'btnRemovemall'
			                    ,disabled:true
			                     ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){
			                    	var record = grid.getSelectionModel().getSelection()[0];
			                    	grid.store.remove(record);
			                    	//CecoService.removeRowGridAgenda(me,rowEditing);
			                    	
			                    }
			                }
			                    
			            ]
			        }
			});
			
			grid.on('itemdblclick',function(thisGrid, record, item, index, e, eOpts){
				
				FormularioCierreCalles.openWindowGeoLinea({
					record:record
					,index:index
				});
				
			});
			
//				grid.on('edit', function(editor, e) {
//			    // commit the changes right after editing finished
//			    e.record.commit();
//				
//				var geometrias = [];
//				
//				store.each(function(){
//					geometrias.push(this.data);
//				});
//				
////				printMapBlank:function(render,zoom,center)
//				if(geometrias.length==0){
//					FormularioCierreCalles.printMapBlank('map');
//				}
//				
//				if(geometrias.length==1){
//					FormularioCierreCalles.printMapBlank('map',16,{lat:geometrias[0].latitud , lng:geometrias[0].longitud},geometrias[0].direccion);
//				}else{
//					FormularioCierreCalles.printPolyline({
//						render:'map',
//						puntos:geometrias
//					});
//				}
//				
//				
//							
//			
//			    
//			});
			
			grid.on('select',function(){
//										Ext.getCmp('btnEditarGeo').setDisabled(false);
										Ext.getCmp('btnRemoveGeoLinea').setDisabled(false);
									});
								
			
		
			
		
		},
		
		//
		
		buildGridPolyLineTrabajos:function(renderTo){
			
			
			 Ext.define('horarioTrabajoModel', {
			     extend: 'Ext.data.Model',
			     fields: ['id','idIncidencia',
			              'horaInicio', 
			              'horaFin', 
			              'desDia','estado', 'fecRegistra']
			 });
			
			var store = Ext.create('Ext.data.Store', {
			    model:'horarioTrabajoModel',
			    data:{'items':[
			    ]},
			    proxy: {
			        type: 'memory',
			        reader: {
			            type: 'json',
			            root: 'items'
			        }
			    }, sortOnLoad: true
			    , sorters: [{ property: 'fecRegistra', direction : 'ASC' },  { property: 'horaInicio', direction : 'ASC' }]
			});
			
			 var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			        clicksToMoveEditor: 1,
			        autoCancel: false
			    });
			

			var grid =  Ext.create('Ext.grid.Panel', {
			    store: store,
			    renderTo:renderTo,
			    disabled:true,
			    viewConfig : {
		        listeners:{
			        	drop:function(){
			            	grid.getView().refresh();
			            }
		        	}
			    },
			    
			    
			    id:'grid-mapa-linea-selector-trabajo',
			    columns: [
			        
						{ 
							text: 'Fecha',  dataIndex: 'fecRegistra' , width:90,
							editor : {
										xtype:'datefield',
										id:'fecRegistra',
										 allowBlank:false,
										width:215
									},
							
							renderer : function(v){
								return Ext.isDate(v) ? Ext.Date.format(v, 'd/m/Y') : '';
							},
				              sortable: false
						},
			        
			        { 
			        	text: 'Dia Trabajo',  dataIndex: 'desDia' , width:100, 
			        	editor : {
			        		xtype:'textfield',
							id:'desDia',
							name : 'desDia',
							readOnly : true
							
			        	},renderer : function(value, metaData, record, rowIdx, colIdx, store, view){
			        		
			        		var v = record.get('fecRegistra');
			        		
			        		 var strDay = "";
								
								if(!Ext.isEmpty(v) && Ext.isDate(v)){
									var dayOfWeek = v.getDay();
									
									switch (dayOfWeek) {
									case 0:
										strDay = "DOMINGO";
										break;
										
									case 1:
										strDay = "LUNES";
										break;
									case 2:
										strDay  = "MARTES";				
										break;
																			
									case 3:
										strDay = "MIERCOLES";
										break;
										
									case 4:
										strDay = "JUEVES";
										break;
										
									case 5:
										strDay = "VIERNES";
										break;
										
									case 6:
										strDay = "SABADO";
										break;
									}
									
								}
			        		
							record.data.desDia = strDay;
		                    return strDay;
		                },
			              sortable: false
			        },
			        
			        
			        
			        { 
			        	text: 'Hora Inicio',  dataIndex: 'horaInicio' , width:110,
			        	editor : {
									xtype : 'timefield',
									width:100,	
							        increment: 30,
							        labelWidth : 90,
							        id:'inicioTrabajo',
							         allowBlank:false,
									labelStyle : 'font-weight: normal;text-align:right;'
								},
								renderer : function(v){
									return Ext.isDate(v) ? Ext.Date.format(v, 'H:i A') : (v?v:'');
								},
					              sortable: false
			        },
			        { 
			        	text: 'Hora Fin', dataIndex: 'horaFin' , width: 110,
			        	editor : {
									xtype : 'timefield',
									width:100,	
							        increment: 30,
							        labelWidth : 90,
							        id:'finTrabajo',
							         allowBlank:false,
									labelStyle : 'font-weight: normal;text-align:right;'
								},
								renderer : function(v){
									return Ext.isDate(v) ? Ext.Date.format(v, 'H:i A') :  (v?v:'');
								},
					              sortable: false
			        }
			    ],
			    height: 202,
			    width: 428,
			    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
			        clicksToEdit: 2,
			        pluginId: 'cellplugin'
			    })],
			    dockedItems : {
			            xtype: 'toolbar',
//									            style:'margin:0px 0px 0px 0px;border-top:1px #e1e1e1 solid !important;border-left:1px #e1e1e1 solid !important;border-right:1px #e1e1e1 solid !important;',
			            items: [
			              '->',
			                {
			            	  	text:'Agregar'
			                    ,id:'btnAddGeoLineaTrabajo'
			                    ,iconCls:'btnAddSmall'
			                    ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){

			                    	var gridStore = Ext.getCmp('grid-mapa-linea-selector-trabajo').store;
					                var r = Ext.create('horarioTrabajoModel', {
					                	idIncidencia: 0,
					                	horaInicio: '',
					                	horaFin: '',
					                	desDia: '',
					                	fecRegistra: '',
					                	estado : ''
					                });
					                
					                gridStore.insert(0, r);
					                
					                var plugin = grid.getPlugin('cellplugin');
			                        plugin.startEdit(0, 0);
			                    	
			                    }
			                }
			              ,
			                {
			            	  	text:'Quitar'
				                ,id:'btnRemoveGeoLineaTrabajo'
			                    ,iconCls:'btnRemovemall'
			                    ,disabled:true
			                     ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){
			                    	var gridStore = Ext.getCmp('grid-mapa-linea-selector-trabajo').store;
			                    	var record = grid.getSelectionModel().getSelection()[0];
			                    	gridStore.remove(record);
			                    	
			                    }
			                }
			                    
			            ]
			        }
			});
			
								
			grid.on('select',function(){
				Ext.getCmp('btnRemoveGeoLineaTrabajo').setDisabled(false);
			});
		
			
		
		},
		
		///
		
		
		buildGridGeometria:function(renderTo){
		
			
			 Ext.define('GeometriaDetalle', {
			     extend: 'Ext.data.Model',
			     fields: ['latitud','longitud', 'direccion', 'descripcion','cuadra']
			 });
			
			var store = Ext.create('Ext.data.Store', {
			    storeId:'geometriaStore',
			    model:'GeometriaDetalle',
			    data:{'items':[
			    ]},
			    proxy: {
			        type: 'memory',
			        reader: {
			            type: 'json',
			            root: 'items'
			        }
			    }
			});
			
			
			
			store.on('datachanged',function(thisStore){
				
				var geometrias = [];
				
				thisStore.each(function(){
					geometrias.push(this.data);
				});
				
//				printMapBlank:function(render,zoom,center)
				if(geometrias.length==0){
					FormularioCierreCalles.printMapBlank('map');
				}
				
				if(geometrias.length==1){
					FormularioCierreCalles.printMapBlank('map',16,{lat:geometrias[0].latitud , lng:geometrias[0].longitud},geometrias[0].direccion);
				}else{
					FormularioCierreCalles.printPolyline({
						render:'map',
						puntos:geometrias
					});
				}
				
				
							
			});
			
		
			

			var grid =  Ext.create('Ext.grid.Panel', {
			    store: Ext.data.StoreManager.lookup('geometriaStore'),
			    renderTo:renderTo,
			    disabled:true,
			    viewConfig : {
		        plugins: {
		            ptype: 'gridviewdragdrop',
		            dragText: 'Arrastre la fila para reordenar la lista'
		        },
		        listeners:{
		            drop:function(){
		            	grid.getView().refresh();
		            }
		        }
		    },
			    id:'grid-mapa-selector',
			    columns: [
			        { text: 'Latitud',  dataIndex: 'latitud' , width:110 ,hidden:true },
			        { text: 'Longitud',  dataIndex: 'longitud' , width:110 ,hidden:true },
			        { text: 'Dirección', dataIndex: 'direccion' , flex: 1, editor: {
                xtype: 'textfield'
            }}
			    ],
			    height: 200,
			    width: 428,
			    plugins: {
				        ptype: 'cellediting',
				        clicksToEdit: 2
				    },
			    dockedItems : {
			            xtype: 'toolbar',
//									            style:'margin:0px 0px 0px 0px;border-top:1px #e1e1e1 solid !important;border-left:1px #e1e1e1 solid !important;border-right:1px #e1e1e1 solid !important;',
			            items: [
			              '->',
			                {
			            	  	text:'Agregar'
			                    ,id:'btnAddGeo'
			                    ,iconCls:'btnAddSmall'
			                    ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){

			                    	var tipoEvento = Ext.getCmp('cbx-tipo-evento').getValue();
			                    	var count = Ext.getCmp('grid-mapa-selector').store.count();
			                    	
			                    	if(tipoEvento+'' == '8748'){
			                    		if(count>0){
			                    			Ext.Msg.show({
				                        	    title:'Error',
				                        	    message: 'El tipo de evento no permite mas de un punto geo-referencial.',
				                        	    buttons: Ext.Msg.OK ,
				                        	    icon: Ext.Msg.ERROR
				                        	});
											return;
			                    		}
			                    	}
			                    	
			                    	
			                    	if(tipoEvento+'' == '8749'){
			                    	if(count>1){
			                    			Ext.Msg.show({
				                        	    title:'Error',
				                        	    message: 'El tipo de evento permite como maximo 2 puntos geo-referenciales.',
				                        	    buttons: Ext.Msg.OK ,
				                        	    icon: Ext.Msg.ERROR
				                        	});
											return;
			                    		}
			                    	}
			                    	
			                    	FormularioCierreCalles.openWindowGeo();
			                    	
			                    }
			                }
			              ,
			                {
			            	  	text:'Quitar'
				                ,id:'btnRemoveGeo'
			                    ,iconCls:'btnRemovemall'
			                    ,disabled:true
			                     ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){
			                    	var record = grid.getSelectionModel().getSelection()[0];
			                    	grid.store.remove(record);
			                    	//CecoService.removeRowGridAgenda(me,rowEditing);
			                    	
			                    }
			                }
			                    
			            ]
			        }
			});
			
				grid.on('edit', function(editor, e) {
			    // commit the changes right after editing finished
			    e.record.commit();
				
				var geometrias = [];
				
				store.each(function(){
					geometrias.push(this.data);
				});
				
//				printMapBlank:function(render,zoom,center)
				if(geometrias.length==0){
					FormularioCierreCalles.printMapBlank('map');
				}
				
				if(geometrias.length==1){
					FormularioCierreCalles.printMapBlank('map',16,{lat:geometrias[0].latitud , lng:geometrias[0].longitud},geometrias[0].direccion);
				}else{
					FormularioCierreCalles.printPolyline({
						render:'map',
						puntos:geometrias
					});
				}
				
				
							
			
			    
			});
			
			grid.on('select',function(){
//										Ext.getCmp('btnEditarGeo').setDisabled(false);
										Ext.getCmp('btnRemoveGeo').setDisabled(false);
									});
								
			
		},
	
		init : function(){

			console.log('sesion parent user ->'+parent.IDE_USUARIO_MAIN_JSP);
			console.log('sesion parent window user ->'+parent.window.IDE_USUARIO_MAIN_JSP);
			
			var sveridadStore = Ext.create('Ext.data.Store', {
						    fields: ['name', 'value'],
						    data : [
						        {"name":"Menor", "value":"MINOR"},
						        {"name":"Mayor", "value":"MAJOR"},
						        {"name":"Grave", "value":"HEAVY"}
						    ]
						});

			
			
			var cbxSeveridad = Ext.create('Ext.form.ComboBox', {
			    fieldLabel: 'Severidad',
			    store: sveridadStore,
			    queryMode: 'local',
			    name:'severidad',
			    id:'cbxSeveridad',
			    forceSelection:true,
			    displayField: 'name',
			    width:215,
			    valueField: 'value',
			    allowBlank:false
			});
			
			var direccionFinalStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":"NORTH", "name":"NORTE"},
			        {"value":"SOUTH", "name":"SUR"},
			        {"value":"EAST", "name":"ESTE"},
			        {"value":"WEST", "name":"OESTE"},
			        {"value":"NORTH_WEST", "name":"NOR-OESTE"},
			        {"value":"SOUTH_WEST", "name":"SUR-OESTE"},
			        {"value":"NORTH_EAST", "name":"NOR-ESTE"},
			        {"value":"SOUTH_EAST", "name":"SUR-ESTE"},
			        {"value":"BOTH_DIRECTIONS", "name":"AMBAS DIRECCIONES"}
			    ]
			});
			
			var cbxDireccionFinal = Ext.create('Ext.form.ComboBox', {
			    fieldLabel: 'Dirección Cardinal',
			    store: direccionFinalStore,
			    queryMode: 'local',
			    name:'direccionFinal',
			    id:'cbxdireccionFinal',
			    forceSelection:true,
			    displayField: 'name',
			     width : 430,
			    valueField: 'value',
			    allowBlank:true,
				hidden:true,
				disabled:true
			});
			
			Ext.widget('form',{
				border:false
				,id:'form-registro-incidencia-mapa'
				,renderTo:'form-registro'
				,layout : 'column'
				,defaults : {
						style : 'margin-bottom:10px;',
						labelStyle : 'font-weight: normal;',
						labelWidth : 80
					}
				,items:[
				        {
							  fieldLabel : 'Tipo Evento',
							  width : 430,
							  id:'cbx-tipo-evento',
							   allowBlank:false,
							   xtype:'ComboGeneric',
			            	   root:'data',
			            	   autoLoad:true,
			            	   url:PATH_PROYECTO_BASE+'catalogo/get-catalogo-by-grupo-custom',
			            	   queryMode: 'local',
			            	   emptyText:'Seleccione',
			            	   extraParams : {
			            		   idGrupo:323
			            	   },
			            	   valueField:'c',
			            	   displayField :'n',
			            	   queryDelay : 1000,
			            	   forceSelection:true,
			            	   name:'tipoEvento',
			            	   model:
			            		   {
			            		   	nameModel:'CatalogoFast'
			            		   	,fields:['c','n']	
			            		   }
			            	  ,listeners:{
			            	  	select:function(f,record){
			            	  	
			            	  		
			            	  	}
			            	  	,change:function(f){
			            	  		FormularioCierreCalles.printMapBlank('map');
			            	  		
			            	  		Ext.getCmp('grid-mapa-selector').store.removeAll();
			            	  		Ext.getCmp('grid-mapa-linea-selector').store.removeAll();
			            	  		Ext.getCmp('grid-mapa-linea-selector-trabajo').store.removeAll();
			            	  		
	                    			Ext.getCmp('nombreCalleInicio').setDisabled(false);
	            	  				Ext.getCmp('nombreCalleFin').setDisabled(false);
	                    			Ext.getCmp('chkCierreTotal').setDisabled(false);
	                    			
	                    			Ext.getCmp('cbxdireccionFinal').setDisabled(false);
	                    			Ext.getCmp('grid-mapa-selector').hide();
	            	  				Ext.getCmp('grid-mapa-linea-selector').show();
	            	  				Ext.getCmp('grid-mapa-linea-selector-trabajo').setDisabled(false);
			            	  		
			            	  	}
			            	  	
			            	  }
			               
							
						}
						,
						{
							xtype:'textarea',
							fieldLabel : 'Descripción',
							width : 430,
							name:'descripcion',
							maxLength:500,
							id:'descripcion',
							 allowBlank:false,
							height:30,
							value:(window.desDetallePrevio?window.desDetallePrevio:'')
						}
						,
//						{
//							xtype:'datefield',
//							fieldLabel : 'Fecha Inicio',
//							id:'fecInicio',
//							 allowBlank:false,
//							width:215	
//						}
//						,
//						{
//							xtype : 'timefield',
//							fieldLabel : 'Hora Inicio',
//							width:215,	
//					        increment: 30,
//					        labelWidth : 90,
//					        id:'horaInicio',
//					         allowBlank:false,
//							labelStyle : 'font-weight: normal;text-align:right;'
//						}
//						,
//						{
//							xtype:'datefield',
//							fieldLabel : 'Fecha Fin',
//							 allowBlank:false,
//							id:'fecFin',
//							width:215	
//						}
//						,
//						{
//							xtype : 'timefield',
//							fieldLabel : 'Hora Fin',
//							width:215,	
//							id:'horaFin',
//							 allowBlank:false,
//					        increment: 30,
//					        labelWidth : 90,
//							labelStyle : 'font-weight: normal;text-align:right;'
//						},
						{
							xtype:'textfield',
							fieldLabel : 'Inicio Intersección',
							width : 430,
							name:'nombreCalleInicio',
							maxLength:200,
							id:'nombreCalleInicio',
							disabled:true,
							hidden:true
						}
						,
						{
							xtype:'textfield',
							fieldLabel : 'Fin Intersección',
							width : 430,
							name:'nombreCalleFin',
							maxLength:200,
							id:'nombreCalleFin',
							disabled:true,
							hidden:true
						}
						,
						cbxSeveridad
						,
						{
		                    boxLabel  : '<span style="font-weight: normal;">Cierre Total</span>',
		                    name      : 'cierreTotal',
		                    inputValue: 'T',
		                    id        : 'chkCierreTotal',
		                    xtype:'checkboxfield',
		                    boxLabelAlign :'before',
		                    style:'margin-left:15px;',
		                    width:105,
		                    disabled:true
		                }
		                ,
		                {
		                    boxLabel  : '<span style="font-weight: normal;">Visible?</span>',
		                    name      : 'visible',
		                    inputValue: 'S',
		                    hidden : (parent.IDE_ROL_MAIN_JSP == 6?false:true),
		                    id        : 'chkVisible',
		                    xtype:'checkboxfield',
		                    boxLabelAlign :'before',
		                    style:'margin: 0px 0px 0px 25px;',
		                    width:70
		                }
						,
						
						
						
						cbxDireccionFinal
						,
						
						{
							xtype:'panel',
							border:false,
							width:430,
							html:'<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<h3 class="panel-title">Detalle de Trabajos</h3>'+
									'</div>'+
									'<div class="panel-body" style="padding:0px;" id="content-grid-detalle-trabajo"></div>'+
								'</div>'
							,listeners:{
								afterrender:function(){
								
									FormularioCierreCalles.buildGridPolyLineTrabajos('content-grid-detalle-trabajo');
									
								}
							}		
						},
						
						{
							xtype:'panel',
							border:false,
							width:430,
							html:'<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<h3 class="panel-title">Detalle de Georeferencia</h3>'+
									'</div>'+
									'<div class="panel-body" style="padding:0px;" id="content-grid-detalle-georeferencia"></div>'+
									'<div class="panel-body" style="padding:0px;" id="content-grid-detalle-georeferencia-linea"></div>'+
								'</div>'
							,listeners:{
								afterrender:function(){
								
									FormularioCierreCalles.buildGridGeometria('content-grid-detalle-georeferencia');
									FormularioCierreCalles.buildGridPolyLine('content-grid-detalle-georeferencia-linea');
									
								}
							}		
						}
						
						,
						{
							xtype:'button'
							,text:'Grabar'
							,style:'float:right;margin:-20px 10px 0px 0px;padding:1px;'
				
							,handler:function(){
								FormularioCierreCalles.registrarFormulario();
							}
						}
				        ],
				        listeners:{
				        	afterrender : function(){
				        		
				        		if(IS_UPDATE){
				        		
				        			Ext.get('main-content').mask('Obteniendo Datos.');
						
									Util.runAjax({
										url:PATH_PROYECTO_BASE+'mapa-incidencia/get-incidencia-by-id',
										params:{
											id:ID_INCIDENCIA
										},
										async : true,
										method : 'POST',
										success:function(http){
											Ext.get('main-content').unmask();
											var response = Ext.decode(http.responseText);
											
											
											if(response.incidencia){
												var incidencia = response.incidencia;
												if(!Ext.isEmpty(incidencia.tipoEvento)){
													Ext.getCmp('cbx-tipo-evento').setValue(incidencia.tipoEvento)
												}
												
												if(!Ext.isEmpty(incidencia.descripcion)){
													Ext.getCmp('descripcion').setValue(incidencia.descripcion)
												}
												
//												Ext.getCmp('fecInicio').setValue(new Date(incidencia.fecHoraInicio));
//												Ext.getCmp('horaInicio').setValue(new Date(incidencia.fecHoraInicio));
//												
//												Ext.getCmp('fecFin').setValue(new Date(incidencia.fecHoraFin));
//												Ext.getCmp('horaFin').setValue(new Date(incidencia.fecHoraFin));
												
												if(incidencia.tipoEvento+'' == '8748'){
			                    	
					            	  				Ext.getCmp('nombreCalleInicio').setDisabled(true);
					            	  				Ext.getCmp('nombreCalleFin').setDisabled(true);
					            	  				Ext.getCmp('chkCierreTotal').reset();
					            	  				Ext.getCmp('chkCierreTotal').setDisabled(true);
					            	  				
					            	  				
					                    		}else{
					                    		
					                    			Ext.getCmp('nombreCalleInicio').setDisabled(false);
					            	  				Ext.getCmp('nombreCalleFin').setDisabled(false);
					            	  				
					            	  				Ext.getCmp('nombreCalleInicio').setValue(incidencia.nombreCalleInicio);
					            	  				Ext.getCmp('nombreCalleFin').setValue(incidencia.nombreCalleFin);
					            	  				Ext.getCmp('chkCierreTotal').setDisabled(false);
					            	  				
					            	  				if(incidencia.tipoCierre == 'T'){
														Ext.getCmp('chkCierreTotal').checked = true;
														Ext.getCmp('chkCierreTotal').setRawValue(true)
					            	  				}
					                    		
					                    		}
					                    		
					                    		if(incidencia.visible == 'S'){
														Ext.getCmp('chkVisible').checked = true;
														Ext.getCmp('chkVisible').setRawValue(true)
					            	  			}
					                    		
					                    		
					                    		
					                    		Ext.getCmp('cbxSeveridad').setValue(incidencia.severidad);
					                    		
					                    		Ext.getCmp('cbxdireccionFinal').setValue(incidencia.direccionFinal);

					                    		
//					                    		if(incidencia.tipoEvento+'' == '8748'){
//					                    			
//					                    			var geometrias = [];
//												
//												Ext.each(incidencia.detalleGeometria,function(item){
//													var data = {
//														latitud: parseFloat(item.geometria.split(' ')[1]),
//														longitud:parseFloat(item.geometria.split(' ')[0]),
//														direccion:item.desdireccion
//													}
//													geometrias.push(data);
//													
//													
//								     	    		var record = Ext.create('GeometriaDetalle',{latitud:data.latitud,longitud:data.longitud,direccion:data.direccion});
//					    		
//					    							Ext.getCmp('grid-mapa-selector').store.add(record);
//													
//												});
//					                    			
//					                    		}else{
					                    			Ext.each(incidencia.lineas,function(item){
					                    			
					                    				var record = Ext.create('PolyLine',item);
					    																						
							    						Ext.getCmp('grid-mapa-linea-selector').store.add(record);
					                    				
					                    			});
					                    			
					                    			var gridStoreDias = Ext.getCmp('grid-mapa-linea-selector-trabajo').store;
					                    			
					                    			Ext.each(incidencia.dias,function(item){
					                    				
					                    				  var r = Ext.create('horarioTrabajoModel', {
											                	idIncidencia: item.idIncidencia,
											                	horaInicio: item.horaInicio,
											                	horaFin: item.horaFin,
											                	desDia: item.desDia,
											                	fecRegistra: new Date(item.fecRegistra)
											                });
											                
					                    				  gridStoreDias.insert(0, r);
					                    				
					                    			});
					                    		
									              
					                    			
//					                    		}	
					                    		

												
											}
			                        		
										}
									});
				        			
				        		}else{
				        		
				        			Ext.getCmp('chkVisible').checked = true;
									Ext.getCmp('chkVisible').setRawValue(true);
				        			
				        		}
				        		
				        	}
				        }
			});
			
			FormularioCierreCalles.printMapBlank('map');
			
		}
		,printMapBlank:function(render,zoom,center,direccion){
			var myLatLng = center || {lat: -12.121084126455873, lng: -77.02935755252838};
			
			var map = new google.maps.Map(document.getElementById(render), {
				    zoom: zoom || 16,
				    center: myLatLng
			});
			
			google.maps.event.addListenerOnce(map, 'idle', function(){
			    FormularioCierreCalles.showBrujula(render,'brujula-1');
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
		showBrujula:function(idMap,idBrujula,image,size){
		
			$('#'+idMap).find('#'+idBrujula).remove();
			$('#'+idMap).append('<div id="'+idBrujula+'" style="position: absolute;width: '+(size)+'px;height: '+(size)+'px;top: 5px;right: 5px;"><img src="'+(image?image:PATH_PROYECTO_BASE+'images/brujula.png')+'" /></div>');
			
		}
		
};

FormularioCierreCalles.init();
