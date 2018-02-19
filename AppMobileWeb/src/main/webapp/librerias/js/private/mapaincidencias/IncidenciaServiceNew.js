Ext.define('IntervinienteModel', {
		extend : 'Ext.data.Model',
		fields : [ 
					'codInterv',
					'idIncidencia',
					'codTpoInterv',
					'codTpoPuesto',
					'descTpoInterv',
					'descTpoPuesto',
					'nombInterv',
					'apoyoPolicial',
					'estReg',
					'infoInterv'
		         ]
	});

Ext.define('InvolucradoModel', {
		extend : 'Ext.data.Model',
		fields : [ 
					'codInvoluc',
					'idIncidencia',
					'codTpoInvoluc',
					'codTpoDoc',
					'descTpoInvoluc',
					'descTpoDoc',
					'nombInvoluc',
					'edadInvoluc',
					'numDocInvoluc',
					'descObserv',
					'codVehic',
					'codClaseVehic',
					'codMarcaVehic',
					'codColorVehic',
					'claseVehic',
					'marcaVehic',
					'modelVehic',
					'placaVehic',
					'colorVehic',
					'anioVehic'
		         ]
	});

Ext.define('VehiculoModel', {
	extend : 'Ext.data.Model',
	fields : [ 
					'cod_vehic',
					'id_incidencia',
					'cod_clase_vehic',
					'cod_marca_vehic',
					'cod_color_vehic',
					'clase_vehic',
					'marca_vehic',
					'model_vehicv',
					'placa_vehic',
					'color_vehic',
					'anio_vehic',
					'est_reg'
	         ]
});

Ext.ns('IncidenciaService');
IncidenciaService = {

					
	init:function(){
		this.buildGridIncidencia();
		
	}
	,
	setZonaSubZona:function(punto){
	
				    					Util.runAjax({
										url:PATH_PROYECTO_BASE+'catastro/get-sector-zona-by-cordenada',
										async : true,
										method : 'POST',
										params:{punto:punto},
										success:function(http){
											var response = Ext.decode(http.responseText);
											
											// console.log(response);
											if(response.data && response.data.nombresector){
												Ext.getCmp('zona').setValue(response.data.nombresector);
											}else{
												Ext.getCmp('zona').setValue('');
											}
											
											if(response.data && response.data.codi_zona){
												Ext.getCmp('subZona').setValue(response.data.codi_zona);
											}else{
												Ext.getCmp('subZona').setValue('');
											}
											
											
										}
									});
	
	},
	openFormRegistro:function(options){
		
		options = options || {};
		
		// console.log('options');
		// console.log(options);
		var wWin  = 740;
		var hWin  = 660;
		var bwWin = wWin-25;
		
		
		var estadosUnidInter = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":"9", "name":"AMBULANCIA"},
			        {"value":"3", "name":"BICICLETA"},
			        {"value":"4", "name":"BRIGADA CANINA"},
			        {"value":"5", "name":"BRIGADA PLAYERA"},
			        {"value":"6", "name":"CÁMARA DE VIDEO"},
			        {"value":"2", "name":"MOTORIZADO"},
			        {"value":"8", "name":"OPERADOR"},
			        {"value":"7", "name":"SERVICIO TÁCTICO"},
			        {"value":"1", "name":"UNIDAD MÓVIL"}
			    ]
			});
			
			var estadosCalifStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":"1", "name":"NUEVO"},
			        {"value":"4", "name":"ATENDIDO"},
			        {"value":"5", "name":"ATENDIDO/FALSA ALARMA"},
			        {"value":"2", "name":"DESCARTADO"},
			        {"value":"3", "name":"REPETIDO"}
			    ]
			});
			
			var cbxEstadosCalifStore = Ext.create('Ext.form.ComboBox', {
			    store: estadosCalifStore,
			    queryMode: 'local',
			    id:'cbxEstadosCalif',
			    forceSelection:true,
			    displayField: 'name',
			    fieldLabel: 'Califique el caso',
			   	width : (bwWin/2)-60,
			   	labelWidth : 100, 
			    valueField: 'value',
			    name:'estadoCalifVoxiva',
			    allowBlank:false,
			    value:'1',
			    listeners:{
			    
			    	select:function(f){
			    	
			    		if(f.getValue()==4 || f.getValue()==5){
			    			Ext.getCmp('fechaHoraAtencionVoxiva').setDisabled(false);
							Ext.getCmp('horaAtencion').setDisabled(false);
			    		}else{
			    			Ext.getCmp('fechaHoraAtencionVoxiva').reset();
							Ext.getCmp('horaAtencion').reset();
			    			Ext.getCmp('fechaHoraAtencionVoxiva').setDisabled(true);
							Ext.getCmp('horaAtencion').setDisabled(true);
			    		}
			    		
			    	}
			    	
			    }
			}); 
			
			var siNoStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":"S", "name":"SI"},
			        {"value":"N", "name":"NO"}
			    ]
			});
			
			var mediosStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":9831, "name":"ALERTA MIRAFLORES"},
			        {"value":399, "name":"FACEBOOK"},
			        {"value":9832, "name":"WHATSAPP"},
			        {"value":400, "name":"TWITTER"},
			        {"value":314, "name":"LLAMADA TELEFÓNICA"}
			    ]
			});
			
			var cbxMedios = Ext.create('Ext.form.ComboBox', {
			    store: mediosStore,
			    queryMode: 'local',
			    id:'medioIngreso',
			    forceSelection:true,
			    displayField: 'name',
			    fieldLabel: 'Medio ingreso',
			   	width : (bwWin),
			   	labelWidth : 100, 
			   	style:'margin-bottom:10px;',
			    valueField: 'value',
			    name:'medioIngreso',
			    allowBlank:false,
			    listeners:{
			    
			    	select:function(f){
			    	
			    	}
			    	
			    }
			}); 
			
			var cbxImportante = Ext.create('Ext.form.ComboBox', {
			    store: siNoStore,
			    queryMode: 'local',
			    id:'cbxImportante',
			     labelStyle:'text-align:right;',
			    forceSelection:true,
			    displayField: 'name',
			    fieldLabel: '¿Importante?',
			   	width : (bwWin/4)+20,
			   	labelWidth : 100, 
			   	allowBlank:false,
			   	style:'margin-bottom:10px;',
			    valueField: 'value',
			    value:'S',
			    name:'importanteVoxiva',
			    listeners:{
			    
			    	select:function(f){
			    	
			    	}
			    	
			    }
			}); 
			
			var cbxLlamadaDevuelta = Ext.create('Ext.form.ComboBox', {
			    store: siNoStore,
			    queryMode: 'local',
			    id:'cbxLlamadaDevuelta',
			    forceSelection:true,
			    style:'margin-bottom:10px;',
			    displayField: 'name',
			    allowBlank:false,
			     labelStyle:'text-align:right;',
			    fieldLabel: '¿Llamada devuelta?',
			   	width : (bwWin/4)+42,
			   	labelWidth : 130, 
			    valueField: 'value',
			    value:'S',
			    name:'llamadaDevueltaVoxiva',
			    listeners:{
			    
			    	select:function(f){
			    	
			    	}
			    	
			    }
			});
			
			var cbxUnidInterv = Ext.create('Ext.form.ComboBox', {
			    store: estadosUnidInter,
			    queryMode: 'local',
			    id:'unidIntervVoxiva',
			    name:'unidIntervVoxiva',
			    forceSelection:true,
			    style:'margin-bottom:10px;',
			    displayField: 'name',
			    fieldLabel: 'U. Interviniente',
			   	width : (bwWin/2),
			   	labelWidth : 100, 
			    valueField: 'value',
			    listeners:{
			    
			    	select:function(f){
			    	
			    	}
			    	
			    }
			});
			
			
			
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    height: hWin,
		    width: wWin,
		    modal:true,
		    id:'win-form-registro',
		    layout: 'column',
		    bodyStyle:'padding:10px 10px 0px 10px;',
		    items: [
		    		{
		    			xtype:'form',
		    			layout: 'column',
		    			width:bwWin,
		    			id:'form-registro-incidencia',
		    			listeners:{
		    			
		    				afterrender:function(){
		    				
		    					if(options.idIncidencia){
			    					var thisWin = Ext.getCmp('win-form-registro');
			    					thisWin.body.mask('Obteniendo información...');
			    					Util.runAjax({
											url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
											async : true,
											method : 'GET',
											params:{idIncidencia:options.idIncidencia},
											success:function(http){
												try{
													var response = Ext.decode(http.responseText);
													// console.log(response);
													var data = response.data;
													Ext.getCmp('medioIngreso').setValue(data.medioIngreso);
													Ext.getCmp('tipoCasoVoxiva').setValue(data.tipoCasoVoxiva);
													var tipoCaso = Ext.getCmp('tipoCasoVoxiva').displayTplData[0];
													// console.log(tipoCaso);
				            	  			  		var storeSubTipoCaso = Ext.getCmp('cbxSubTipoCaso').store;
							            	  		storeSubTipoCaso.removeAll();
							            	  		if(tipoCaso){
							            	  			storeSubTipoCaso.load({
							            	  				params:{
							            	  					idGrupo:tipoCaso.ideGrupoElemento
							            	  				}
							            	  				,
			            	  								callback:function(){
			            	  									if(storeSubTipoCaso.count()>0){
			            	  										Ext.getCmp('cbxSubTipoCaso').setDisabled(false);
			            	  										Ext.getCmp('cbxSubTipoCaso').setValue(data.subTipoCasoVoxiva);
			            	  										var subTipoCaso = Ext.getCmp('cbxSubTipoCaso').displayTplData[0];
			            	  										if(subTipoCaso.referencia2 == '1'){
												            	  		Ext.getCmp('cbxEstado').setDisabled(false);
												            	  		Ext.getCmp('cbxEstado').setValue(data.estadoVoxiva);
												            	  		if(data.estadoVoxiva){
            	  								            	  			var estadoCaso = Ext.getCmp('cbxEstado').displayTplData[0];
													            	  		var storeSubEstado = Ext.getCmp('cbxSubEstado').store;
													            	  		storeSubEstado.removeAll();
													            	  		storeSubEstado.load({
									            	  								params:{
									            	  										idGrupo:estadoCaso.ideGrupoElemento
							            	  										}
							            	  										,
									            	  								callback:function(){
									            	  									Ext.getCmp('cbxSubEstado').setValue(data.subEstadoVoxiva);
									            	  									if(storeSubEstado.count()>0){
									            	  										Ext.getCmp('cbxSubEstado').setDisabled(false);
									            	  									} else {
									            	  										Ext.getCmp('cbxSubEstado').setDisabled(true);
									            	  									}
									            	  									thisWin.body.unmask();
									            	  								}		
									            	  						});
													            	  	} else {
												            	  			thisWin.body.unmask();
												            	  		}
												            		} else {
											            	  			Ext.getCmp('cbxEstado').setDisabled(true);
											            	  			thisWin.body.unmask();
											            	  		}
			            	  									}else{
			            	  										thisWin.body.unmask();
			            	  										Ext.getCmp('cbxSubTipoCaso').setDisabled(true);
			            	  									}
							            	  									
							            	  				}		
				            	  						});
													}else{
														thisWin.body.unmask();
													}
							            	  		
													Ext.getCmp('cbxEstadosCalif').setValue(data.estadoCalifVoxiva);
				            	  					Ext.getCmp('cbxImportante').setValue(data.importanteVoxiva);
				            	  					Ext.getCmp('cbxLlamadaDevuelta').setValue(data.llamadaDevueltaVoxiva);
				            	  					Ext.getCmp('nombreReportaIncidencia').setValue(data.nombreReportaIncidencia);
				            	  					Ext.getCmp('telefReportaIncidencia').setValue(data.telefReportaIncidencia);
				            	  					Ext.getCmp('direccionIncidencia').setValue(data.direccionIncidencia);
				            	  					Ext.getCmp('incidenciaPresentada').setValue(data.incidenciaPresentada);
				            	  					Ext.getCmp('accionesIncidencia').setValue(data.accionesIncidencia);
				            	  					Ext.getCmp('unidIntervVoxiva').setValue(data.unidIntervVoxiva);
				            	  					Ext.getCmp('desUnidIntervVoxiva').setValue(data.desUnidIntervVoxiva);
				            	  					Ext.getCmp('nombreRecepcionaIncidencia').setValue(data.nombreRecepcionaIncidencia);
													Ext.getCmp('dniRecepcionaIncidencia').setValue(data.dniRecepcionaIncidencia);
													Ext.getCmp('cuadraEvento').setValue(data.cuadraEvento);
													
				            	  					if(data.horaLlamadaVoxiva){
														var horaLlamadaVoxiva = Ext.Date.parse(data.horaLlamadaVoxiva, "d-m-Y H:i");
														Ext.getCmp('horaLlamadaVoxiva').setValue(horaLlamadaVoxiva);
														Ext.getCmp('horaIncidencia').setValue(horaLlamadaVoxiva);
													}
													
													if(data.fechaHoraAtencionVoxiva && (data.estadoCalifVoxiva+''=='4' || data.estadoCalifVoxiva+''=='5')){
														var fechaHoraAtencionVoxiva = Ext.Date.parse(data.fechaHoraAtencionVoxiva, "d-m-Y H:i");
														Ext.getCmp('fechaHoraAtencionVoxiva').setValue(fechaHoraAtencionVoxiva);
														Ext.getCmp('horaAtencion').setValue(fechaHoraAtencionVoxiva);
													} else {
														Ext.getCmp('fechaHoraAtencionVoxiva').setDisabled(true);
														Ext.getCmp('horaAtencion').setDisabled(true);
													}
													
													var detalleGeometria = data.detalleGeometria;
													
													if(detalleGeometria && detalleGeometria.length>0){
														Ext.getCmp('cordenadas').setValue(detalleGeometria[0].geometria);
														IncidenciaService.setZonaSubZona(detalleGeometria[0].geometria.split(' ')[1]+detalleGeometria[0].geometria.split(' ')[0]);
													}
													
													if(Ext.getCmp('idIncidencia')){
														Ext.getCmp('idIncidencia').destroy();
													}
													
													Ext.getCmp('form-registro-incidencia').add({
												        xtype: 'hiddenfield',
												        name: 'idIncidencia',
												        id:'idIncidencia',
												        value: data.idIncidencia
											   		});
													
												} catch(e) {
													thisWin.close();
												}
											}
										});
		    						}
		    					}
		    				},
		    				
		    				items:[
		    					cbxMedios
		    					,
	    						{
		    						xtype:'textfield',
		    						width:(bwWin-200),
		    						fieldLabel:'Cordenadas',
		    						labelWidth : 100,
		    						name:'cordenadas',
		    						style:'margin-bottom:10px;',
		    						id:'cordenadas',
		    						allowBlank:false,
		    						readOnly:true
		    					}
		    					,
		    					{
		    						xtype:'button',
		    						width:200,
		    						text:'Establecer Cordenadas',
		    						handler:function(){
		    							
		    							// Uso del componenete -->
		    							Util.windowGeoreferenciaPunto({
				                			width:600,
				                			height:600,
				                			idCanvasMap:'mapa-incidencia-geo',
				                			idCordenadas:'cordenadas',
				                			fnGrabar:function(punto,direccionData){
				                				// console.log('direccionData');
				                				// console.log(direccionData);
				                				Ext.getCmp('cordenadas').setValue(punto.lat+' '+punto.lng);
					                			// if(direccionData &&
												// direccionData.toponimia){
					                			// Ext.getCmp('direccionIncidencia').setValue(direccionData.toponimia);
					                			// }
				                				$.ajax({
				                					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
				     							    dataType: "json",
				     							    data:{latitud:punto.lat,longitud:punto.lng},
				     							    success: function( response ) {
				     							    	console.log(response);
				     							    	var result = response.result || [];
				     							    	if(result.length>0){
				     							    		var name = result[0];
				     							    		Ext.getCmp('direccionIncidencia').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
				     							    	}
				     							    }
				                				});
				                				IncidenciaService.setZonaSubZona(punto.lng+' '+punto.lat);
				                			}
				                		});
				                		// <-- end uso componente
		    						}
		    					}
		    					,
		    					{
		    						xtype:'textfield'
		    						,width:(bwWin/2)
		    						,fieldLabel:'Zona'
		    						,labelWidth : 100
		    						,name:'zona'
		    						,maxHeight:20 
		    						,readOnly:true
		    						,style:'margin-bottom:10px;'
		    						,id:'zona'
		    						,allowBlank:true
		    					}
		    					,
		    					{
		    						xtype:'textfield'
		    						,width:(bwWin/2)
		    						,fieldLabel:'Sub-zona'
		    						,labelWidth : 103
		    						,name:'subZona'
		    						,style:'margin-bottom:10px;'
		    						,id:'subZona'
		    						,readOnly:true
		    						,allowBlank:true
		    						,labelStyle:'text-align:right;'
		    					}
		    					,
		    					{
		    						xtype:'textfield'
		    						,width:(bwWin-150)
		    						,fieldLabel:'Dirección'
		    						,labelWidth : 100
		    						,name:'direccionIncidencia'
		    						,style:'margin-bottom:10px;'
		    						,id:'direccionIncidencia'
		    						,allowBlank:true
		    					}
		    					,
		    					{
		    						xtype:'textfield',
		    						width:(150),
		    						fieldLabel:'Número',
		    						labelWidth : 60,
		    						labelStyle:'text-align:right;',
		    						name:'cuadraEvento',
		    						style:'margin-bottom:10px;',
		    						id:'cuadraEvento',
		    						allowBlank:true
		    					}
				    			,
				    			{
				    				id:'tipoCasoVoxiva',
									allowBlank:false,
									xtype:'ComboGeneric',
									width:(bwWin/2),
									labelWidth : 100, 
									extraParams:{
									   identificador:'VOX_CASO'
									},
					            	root:'data',
					            	autoLoad:true,
					            	fieldLabel: 'Tipo de caso',
					            	url:PATH_PROYECTO_BASE+'catalogo/get-grupo-voxiva',
					            	queryMode: 'local',
					            	valueField:'ref1',
					            	displayField :'displayValue',
					            	forceSelection:true,
					            	style:'margin-bottom:10px;',
					            	name:'tipoCasoVoxiva',
					            	model: {
			            		   		nameModel:'CalleGeo',
			            		   		fields:[
			            		   			'ideGrupoElemento',
			            		   			'ideGrupoElement1',
			            		   			'desNombre',
			            		   			'clvAbreviarGrupo',
			            		   			'ref1',
			            		   			'codEstado',
					            		   	{
					            		   		name:'displayValue',
					            		   		mapping:'desNombre',
					            		   		convert:function(v,record){
					            		   			return v.split('_')[1];
					            		   		}
					            		   	}
		            		   			]	
					            	},
					            	listeners:{
					            		select:function(f,record){
					            	  		Ext.getCmp('cbxSubTipoCaso').reset();
					            	  		var storeSubTipoCaso = Ext.getCmp('cbxSubTipoCaso').store;
					            	  		storeSubTipoCaso.removeAll();
					            	  		Ext.getCmp('cbxEstado').reset();
					            	  		Ext.getCmp('cbxEstado').setDisabled(true);
					            	  		Ext.getCmp('cbxSubEstado').reset();
					            	  		Ext.getCmp('cbxSubEstado').setDisabled(true);
					            	  		storeSubTipoCaso.load({
            	  								params:{
            	  										idGrupo:record.data.ideGrupoElemento
            									},
            	  								callback:function(){
            	  									if(storeSubTipoCaso.count()>0){
            	  										Ext.getCmp('cbxSubTipoCaso').setDisabled(false);
            	  									} else {
            	  										Ext.getCmp('cbxSubTipoCaso').setDisabled(true);
            	  									}
            	  								}		
            	  							});
					            		}
				            		}	   
				    			}
				    			,
				    			{	
				    				id:'cbxSubTipoCaso',
				    				allowBlank:false,
				    				xtype:'ComboGeneric',
				    				width:(bwWin/2),
				    				labelWidth : 130,
				    				disabled:true,
				    				labelStyle:'text-align:right;',
				    				extraParams:{
				    					idGrupo:'-1'
				    				},
				    				root:'data',
				    				autoLoad:true,
				    				fieldLabel: 'Sub-tipo de caso',
				    				url: PATH_PROYECTO_BASE+"catalogo/get-catalogo-by-grupo",
				    				queryMode: 'local',
				    				valueField:'referencia',
				    				displayField :'displayValue',
				    				forceSelection:true,
				    				style:'margin-bottom:10px;',
				    				name:'subTipoCasoVoxiva',
				    				model: {
				    					nameModel:'CalleGeo',
			    						fields:[
			    							'referencia',
			    							'ideElemento',
			    							'desNombre',
			    							{
			    								name:'displayValue',
			    								mapping:'desNombre',
			    								convert:function(v,record){
			    									return v;
			    								}
			    							}
			    						]	
				    				},
				    				listeners:{
				    					select:function(f,record){
				    						Ext.getCmp('cbxEstado').reset();
				    						if(record.data.referencia2 == '1'){
				    							Ext.getCmp('cbxEstado').setDisabled(false);
				    						}else{
				    							Ext.getCmp('cbxEstado').setDisabled(true);
				    						}
				    					}
				    				}	   
				    			}
				    			,
				    			{
			    				   	id:'cbxEstado',
								   	allowBlank:false,
								   	xtype:'ComboGeneric',
								   	width:(bwWin/2),
								   	labelWidth : 100, 
								   	extraParams:{
								   					identificador:'VOX_ESTADO'
								   	},
								   	root:'data',
								   	autoLoad:true,
								   	disabled:true,
								   	fieldLabel: 'Estado',
								   	url:PATH_PROYECTO_BASE+'catalogo/get-grupo-voxiva',
								   	queryMode: 'local',
								   	valueField:'ref1',
								   	displayField :'displayValue',
								   	forceSelection:true,
								   	style:'margin-bottom:10px;',
								   	name:'estadoVoxiva',
								   	model: {
								   		nameModel:'CalleGeo',
				            		   	fields:[
				            		   		'ideGrupoElemento',
				            		   		'ideGrupoElement1',
				            		   		'desNombre',
				            		   		'clvAbreviarGrupo',
				            		   		'ref1',
				            		   		'codEstado',
				            		   		{
					            		   		name:'displayValue',
					            		   		mapping:'desNombre',
					            		   		convert:function(v,record){
					            		   			return v.split('_')[1];
					            		   		}
				            		   		}
				            		   	]	
								   	},
								   	listeners:{
					            	  	select:function(f,record){
					            	  		Ext.getCmp('cbxSubEstado').reset();
					            	  		var storeSubEstado = Ext.getCmp('cbxSubEstado').store;
					            	  		storeSubEstado.removeAll();
					            	  		storeSubEstado.load({
            	  								params:{
            	  									idGrupo:record.data.ideGrupoElemento
            	  								},
            	  								callback:function(){
            	  									if(storeSubEstado.count()>0){
            	  										Ext.getCmp('cbxSubEstado').setDisabled(false);
            	  									}else{
            	  										Ext.getCmp('cbxSubEstado').setDisabled(true);
            	  									}
            	  								}		
            	  							});
					            	  	}
					            	}	   
				    			}
				    			,
				    			{
				    				id:'cbxSubEstado',
				    				allowBlank:false,
				    				xtype:'ComboGeneric',
				    				width:(bwWin/2),
				    				labelWidth : 130,
				    				disabled:true,
				    				name:'subEstadoVoxiva',
				    				labelStyle:'text-align:right;',
				    				extraParams:{
				    					idGrupo:'-1'
				    				},
				    				root:'data',
				    				autoLoad:true,
				    				fieldLabel: 'Sub-estado',
				    				url: PATH_PROYECTO_BASE+"catalogo/get-catalogo-by-grupo",
				    				queryMode: 'local',
				    				valueField:'referencia',
				    				displayField :'displayValue',
				    				forceSelection:true,
				    				style:'margin-bottom:10px;',
				    				model: {
				    					nameModel:'CalleGeo',
				    					fields:[
				    						'referencia',
				    						'ideElemento',
				    						'desNombre',
				    						{
				    							name:'displayValue',
				    							mapping:'desNombre',
				    							convert:function(v,record){
				    								return v;
				    							}
				    						}
				    					]	
				    				},
				    				listeners:{
				    					select:function(f,record){
				    					}
				    				}	   
				    			}
				    			,
				    			cbxEstadosCalifStore
				    			,
				    			cbxImportante
				    			,
				    			cbxLlamadaDevuelta
				    			,
	    						{
				    				xtype:'textfield',
									width:(bwWin-220),
									fieldLabel:'Reportante',
									labelWidth : 100,
									name:'nombreReportaIncidencia',
									style:'margin-bottom:10px;',
									id:'nombreReportaIncidencia',
									allowBlank:false
	    						}
	    						,
	    						{
	    							xtype:'textfield',
			    					width:(220),
			    					fieldLabel:'Telef. Reportante',
			    					labelWidth : 110,
			    					name:'telefReportaIncidencia',
			    					style:'margin-bottom:10px;',
			    					id:'telefReportaIncidencia',
		    						labelStyle:'text-align:right;',
		    						allowBlank:true
			    				}
			    				,
			    				{
		    						xtype:'datefield',
		    						width:255,
		    						fieldLabel:'Fecha Incidencia',
		    						labelWidth : 100,
		    						format: 'd-m-Y',
		    						emptyText:'DD-MM-YYYY',
		    						name:'horaLlamadaVoxiva',
		    						style:'margin-bottom:10px;',
		    						id:'horaLlamadaVoxiva',
		    						editable: false,
		    						allowBlank:false,
		    					}
		    					,
		    					{
		    						xtype:'timefield',
		    						width:90,
		    						hideTrigger:true,
		    						format:'H:i',
		    						name:'horaIncidencia',
		    						style:'margin-bottom:10px;margin-left:10px;',
		    						id:'horaIncidencia',
		    						emptyText:'HH:MM',
		    						allowBlank:false,
		    						labelStyle:'text-align:right;',
		    						name        : 'startTime',
		    	                    minValue    : '00:00',
		    	                    maxValue    : '24:00',
// value : '08:00',
		    	                    format      : 'H:i',
		    	                    increment   : 1,
		    					}
		    					,
		    					{
		    						xtype:'datefield',
		    						width:260,
		    						fieldLabel:'Fecha Atención',
		    						labelWidth : 105,
		    						name:'fechaHoraAtencionVoxiva',
		    						format: 'd-m-Y',
		    						editable: false,
		    						emptyText:'DD-MM-YYYY',
		    						style:'margin-bottom:10px;',
		    						id:'fechaHoraAtencionVoxiva',
		    						allowBlank:false,
		    						labelStyle:'text-align:right;'
		    					}
		    					,
		    					{
		    						xtype:'timefield',
		    						width:90,
		    						hideTrigger:true,
		    						format:'H:i',
		    						emptyText:'HH:MM',
		    						name:'horaAtencion',
		    						style:'margin-bottom:10px;margin-left:10px;',
		    						id:'horaAtencion',
		    						allowBlank:false,
		    						labelStyle:'text-align:right;',
		    						name        : 'startTim',
		    	                    minValue    : '00:00',
		    	                    maxValue    : '24:00',
// value : '08:00',
		    	                    format      : 'H:i',
		    	                    increment   : 1,
		    					}
		    					,
		    					{
		    						xtype:'textarea'
		    						,width:(bwWin/2)
		    						,fieldLabel:'Incidencia presentada'
		    						,labelWidth : 100
		    						,name:'incidenciaPresentada'
		    						,maxHeight:20 
		    						,style:'margin-bottom:10px;'
		    						,id:'incidenciaPresentada'
		    						,allowBlank:false
		    					}
		    					,
		    					{
		    						xtype:'textarea'
		    						,width:(bwWin/2)
		    						,fieldLabel:'Acción Tomada'
		    						,labelWidth : 103
		    						,name:'accionesIncidencia'
		    						,style:'margin-bottom:10px;'
		    						,id:'accionesIncidencia'
		    						,allowBlank:true
		    						,labelStyle:'text-align:right;'
		    					}
		    					,
		    					cbxUnidInterv
	    					,
	    					{
	    						xtype:'textfield'
	    						,width:(bwWin/2)
	    						,fieldLabel:'Nom. Unidad'
	    						,labelWidth : 103
	    						,name:'desUnidIntervVoxiva'
	    						,style:'margin-bottom:10px;'
	    						,id:'desUnidIntervVoxiva'
	    						,allowBlank:true
	    						,labelStyle:'text-align:right;'
	    					}
	    					,
	    					{
	    						xtype:'textfield'
	    						,width:(bwWin-250)
	    						,fieldLabel:'Ope. a cargo'
	    						,labelWidth : 100
	    						,name:'nombreRecepcionaIncidencia'
	    						,style:'margin-bottom:10px;'
	    						,id:'nombreRecepcionaIncidencia'
	    						,allowBlank:true
	    					}
	    					,
	    					{
	    						xtype:'textfield'
	    						,width:(250)
	    						,fieldLabel:'Dni Operador'
	    						,labelWidth : 100
	    						,name:'dniRecepcionaIncidencia'
	    						,style:'margin-bottom:10px;'
	    						,id:'dniRecepcionaIncidencia'
	    						,labelStyle:'text-align:right;'
	    						,allowBlank:true
	    					}
		    			]
		    		}	
		    	],
		    	buttons:[
		    		{
		    			text:'Grabar',
		    			handler:function(){
		    				var form = Ext.getCmp('form-registro-incidencia').getForm();
		    				if(form.isValid()){
		    					var thisWin = Ext.getCmp('win-form-registro');
		    					thisWin.body.mask('Espere un momento por favor.');
		    					var incidencia = form.getValues();
		    					if(!Ext.isEmpty(incidencia.horaLlamadaVoxiva)){
		    						incidencia.horaLlamadaVoxiva = incidencia.horaLlamadaVoxiva+' '+incidencia.horaIncidencia;
		    					}
		    					if(!Ext.isEmpty(incidencia.fechaHoraAtencionVoxiva)){
		    						incidencia.fechaHoraAtencionVoxiva = incidencia.fechaHoraAtencionVoxiva+' '+incidencia.horaAtencion;
		    					}
		    					if(!Ext.isEmpty(incidencia.cordenadas)){
		    						incidencia.latitud = incidencia.cordenadas.split(' ')[0];
		    						incidencia.longitud = incidencia.cordenadas.split(' ')[1];
		    					}
								incidencia.desEstadoVoxiva = Ext.getCmp('cbxEstado').getRawValue();
								incidencia.desSubEstadoVoxiva = Ext.getCmp('cbxSubEstado').getRawValue();
								incidencia.desEstadoCalifVoxiva = Ext.getCmp('cbxEstadosCalif').getRawValue();
								incidencia.direccionFinal = Ext.getCmp('tipoCasoVoxiva').getRawValue();
		    					
		    					Util.runAjax({
									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-form-mapa',
									async : true,
									method : 'POST',
									params:incidencia,
									success:function(http){
										var response = Ext.decode(http.responseText);
										thisWin.body.unmask();
										IncidenciaService.buscar();
										thisWin.close();
										
									}
								});
		    				}
		    			}
		    		}
		    		,
		    		{
		    			text:'Cancelar',
		    			handler:function(){
		    				Ext.getCmp('win-form-registro').close();
		    			}
		    		}
		    ]
		}).show();
	}
	,
	buscar:function(){
		var grid = Ext.getCmp('grid-incidencias');
		var store = grid.store;
		var params = {};
		
		// listEstadoCalifica
		if(!Ext.isEmpty(Ext.getCmp('txt-incidencia').getValue())){
			params.incidenciaPresentada	= Ext.getCmp('txt-incidencia').getValue();
		}
		if(!Ext.isEmpty(Ext.getCmp('txt-fecha').getValue())){
		}
		if(!Ext.isEmpty(Ext.getCmp('cbxEstadosCalifStore').getValue())){
			// params.dni = Ext.getCmp('txt-dni').getValue();
			Ext.each(Ext.getCmp('cbxEstadosCalifStore').getValue(),function(value,i){
				params['listEstadoCalifica['+i+']'] = value;
			});
		}
		if(!Ext.isEmpty(Ext.getCmp('medioIngresoSearch').getValue())){
			// params.dni = Ext.getCmp('txt-dni').getValue();
			Ext.each(Ext.getCmp('medioIngresoSearch').getValue(),function(value,j){
				params['listmedios['+j+']'] = value;
			});
		}
		store.proxy.extraParams = params;
		store.load();
	}
	,
	buildGridIncidencia:function(){
		Ext.define('IncidenciaGeneric', {
		     extend: 'Ext.data.Model',
		     fields: [
		    	 'codIncidencia', 'codUnidad', 'codCaso', 'codSubcaso', 'codMedio', 'codSituacion', 
		    	 'nombReport', 'telfReport', 'codGeometria', 'coordenadas', 'direccion', 'cdra', 'dpto', 'zona', 'subzona', 
		    	 'descripcion', 'fecEvento', 'horEvento', 'fecAtencion', 'horAtencion', 
		    	 'codSeveridad', 'codEstado', 'codSubestado', 'codModalidad', 'motivo', 'tpoHallazgo', 'descSospechoso', 
		    	 'estReg', 'fecCreacion', 'fecCierre', 'descUnidad', 'descCaso', 'descSubcaso', 'descMedio', 'descSituacion', 
			]
		});
			 
		var estadosCalifStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"0", "name":"CREADO"},
		        {"value":"1", "name":"NUEVO"},
		        {"value":"4", "name":"ATENDIDO"},
		        {"value":"5", "name":"ATENDIDO/FALSA ALARMA"},
		        {"value":"2", "name":"DESCARTADO"},
		        {"value":"3", "name":"REPETIDO"}
		    ]
		});
		
		var cbxEstadosCalifStore = Ext.create('Ext.form.ComboBox', {
		    store: estadosCalifStore,
		    queryMode: 'local',
		    id:'cbxEstadosCalifStore',
		    forceSelection:true,
		    displayField: 'name',
		   	width : 190,
		   	emptyText:'Estado',
		    valueField: 'value',
		    multiSelect:true,
		    listeners:{
		    
		    	change:function(f){
		    		IncidenciaService.buscar();
		    	}
		    	
		    }
		}); 
		 
		
		var mediosStore = Ext.create('Ext.data.Store', {
	    fields: ['name', 'value'],
	    data : [
	        {"value":9831, "name":"VOXIVA"},
	        {"value":399, "name":"FACEBOOK"},
	        {"value":9832, "name":"WHATSAPP"},
	        {"value":9841, "name":"WAZE"}
	    ]
		});
		
		var cbxMedios = Ext.create('Ext.form.ComboBox', {
		    store: mediosStore,
		    queryMode: 'local',
		    id:'medioIngresoSearch',
		    forceSelection:true,
		    displayField: 'name',
		    width:150,
		    emptyText:'Medio de Ingreso',
		    valueField: 'value',
		    name:'medioIngreso',
		    multiSelect:true,
		    listeners:{
		    	change:function(f){
		    		IncidenciaService.buscar();
		    	}
		    }
		}); 
		 
		var store = Ext.create('Ext.data.Store', {
				autoLoad : true,
				model : 'IncidenciaGeneric',
				pageSize: 20,
				proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'mapa-incidencia/bandeja-incidencias',
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
				}
			});
		
				
		
//		var storeIncidencia = Ext.create('Ext.data.Store', {
//			autoLoad : true,
//			model : 'IncidenciaGeneric',
//			proxy : {
//				type : 'ajax',
//				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-incidencia-por-id',
//				actionMethods : 'POST',
//				reader : {
//					root : 'data'
//				},
//				simpleSortMode : true
//				,timeout:99999999
//			}
//		});
		
		var grid = Ext.create('Ext.grid.Panel', {
		    store: store,
		    renderTo:'render',
		    title:'Administración de Incidencias',
		    id:'grid-incidencias',
		    border:true,
		    columns: [
		        { text: 'Id Incidencia',  dataIndex: 'codIncidencia' ,hidden:true },
//		        { text: 'Medio Ingreso',  dataIndex: 'descMedio', width : 120   },
//		        { text: 'Estado',  dataIndex: 'descSituacion', width : 180   },
		        { text: 'Unidad de atención',  dataIndex: 'descUnidad' , flex : 1},
		        { text: 'Tipo de caso',  dataIndex: 'descCaso' , flex : 1},
		        { text: 'Tipo de sub-caso',  dataIndex: 'descSubcaso' , flex : 1},
//		        { text: 'Fecha de incidencia',  dataIndex: 'fecEvento' , flex : 1},
		        
		        {
		            xtype:'actioncolumn',
		       		width:50,
		            align:'center',
		            hidden:true,
		            items: [{
		            	
		                icon: PATH_PROYECTO_BASE+'images/edit_16.png',
		                tooltip: 'Editar',
		                handler: function(grid, rowIndex, colIndex) {
//		                    var rec = grid.getStore().getAt(rowIndex).data;
		                	var record = grid.getStore().getAt(rowIndex);
		                	console.log(record);
		                    
		                    IncidenciaService.openFormRegistroNuevo({
			           			titulo:'Editar incidencia',
//			           			record:rec	 
			           			codIncidencia: record.data.codIncidencia
			           		});
		                    
		                }
		            }]
		        },
		        
		        {
		            xtype:'actioncolumn',
		       		width:50,
		            align:'center',
		            items: [{
		            	
		                icon: PATH_PROYECTO_BASE+'images/delete_16.png',
		                tooltip: 'Eliminar',
		                handler: function(grid, rowIndex, colIndex) {
		                    var record = grid.getStore().getAt(rowIndex);
		                    
							Ext.Msg.confirm('Confirmar', '¿Seguro de eliminar el registro seleccionado?', function(btn, text){
							    if (btn == 'yes'){
							        
							    	Util.runAjax({
												url:PATH_PROYECTO_BASE+'mapa-incidencia/desactivar-incidencia',
												params:{
													cod:record.data.codIncidencia
												},
												async : true,
												method : 'POST',
												success:function(http){
													var response = Ext.decode(http.responseText);
													
													IncidenciaService.buscar2();
					                        		
												}
											});
							    	
							    }
							});
		                    
		                    
		                }
		            }]
		        }
		        
							        
			],
			    height: $(window).height()-30,
			    width:$(window).width()-30
			 
			    ,dockedItems : [
			                    
						{
						    xtype: 'pagingtoolbar',
						    store: store,   // same store GridPanel is using
						    dock: 'bottom',
						    displayInfo: true
						},
			                    
			                    {
			            xtype: 'toolbar',
			            items: [
			            
// cbxMedios,
//			            
// cbxEstadosCalifStore,
//			            
// {
// xtype:'textfield',
// emptyText:'Incidencia',
// id:'txt-incidencia',
// listeners:{
// specialkey : function(f, e) {
// if (e.getKey() == e.ENTER) {
// IncidenciaService.buscar();
// }
// }
// }
// },
// {
// xtype:'textfield',
// emptyText:'DD-MM-YYYY HH:MM',
// id:'txt-fecha',
// listeners:{
// specialkey : function(f, e) {
// if (e.getKey() == e.ENTER) {
// IncidenciaService.buscar();
// }
// }
// }
//			            	
// },
// {
// iconCls:'btnBuscarSmall'
// ,handler:function(){
// IncidenciaService.buscar();
// }
// },
			            
			           
			           
			              '->',
// {
// text:'Nuevo'
// ,id:'btnAddGeo'
// ,iconCls:'btnAddSmall'
// // ,style:'border-right:0px; border-left:0px; border-top:0px;
// border-bottom:1px #DBDBDB solid;'
// ,handler:function(){
// IncidenciaService.openFormRegistro({
// title:'Registrar Usuario'
// });
// }
// }
		                ,
		                {
		            	  	text:'NuevoForm'
		                    ,id:'btnAddGeo2'
		                    ,iconCls:'btnAddSmall'
// ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px
// #DBDBDB solid;'
		                    ,handler:function(){
		                    	IncidenciaService.openFormRegistroNuevo({
		                    		title:'Registrar Incidencia'
		                    	});
		                    }
		                }
		                ,
		                {
							iconCls : 'btnEditSmall',
							text:'Editar',
							id:'btnEditar',
							disabled:true,
//							hidden:true,
							handler : function() {
								
								var record = Ext.getCmp('grid-incidencias').getSelectionModel().getSelection();
								
								console.log("record");
								console.log(record);
								console.log("codIncidencia = "+record[0].data.codIncidencia);
								
								IncidenciaService.openFormRegistroNuevo({
		                    		title:'Editar Inicidencia',
		                    		codIncidencia: record[0].data.codIncidencia
		                    		
		                    	});
								
								
							}
						}
		                ,
						{
				            xtype:'splitbutton',
				            text: DES_LOGIN,
				            iconCls: 'btnUser16',
				            menu: [
				            		{
				            			text: 'Ver Mapa',
				            			iconCls: 'btnMap16',
				            			href:PATH_PROYECTO_BASE+'cierre-calles/mapa'
				            		}
				            		,{
				            			text: 'Cerrar Sesion',
				            			iconCls: 'btnLogout16',
				            			href:PATH_PROYECTO_BASE+'log-out'
				            		}
				            ]
				        }
			                    
		            ]
		        }
						]
			});
			
			grid.on('select',function(){
			
				if(Ext.getCmp('btnEditar')){
					Ext.getCmp('btnEditar').setDisabled(false);
				}
				
			});
			
			store.on('load',function(){
				if(Ext.getCmp('btnEditar')){
					Ext.getCmp('btnEditar').setDisabled(true);
				}
				
			});
			 
		
	},
	

	
	
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////// ////////////////
// ////////////// NUEVA IMPLEMENTACION 2 ////////////////
// ////////////// ////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	reiniciarForm: function(){
		Ext.getCmp('txtCarnetExt').setHidden(true);
		Ext.getCmp('cbxNacionalidad').setHidden(true);
		Ext.getCmp('cbxSeveridad').setHidden(true);
		Ext.getCmp('cbxTpoHallazgo').setHidden(true);
		Ext.getCmp('txtMotivo').setHidden(true);
		Ext.getCmp('cbxEstado').setHidden(true);
		Ext.getCmp('cbxSubEstado').setHidden(true);
		Ext.getCmp('cbxModalidad').setHidden(true);
		Ext.getCmp('pnInvoluc').setHidden(true);
	},

	onChangeUnidadCaso: function(vUnidad, vCaso){
		IncidenciaService.reiniciarForm();
		switch( vUnidad ) {
		case SEGURIDAD_CIUDADANA:
			switch( vCaso ) {
			case ACCIDENTES_DE_TRANSITO:
				Ext.getCmp('cbxSeveridad').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case HECHOS_CONTRA_EL_PATRIMONIO:
				Ext.getCmp('cbxEstado').setHidden(false);
				Ext.getCmp('cbxSubEstado').setHidden(false);
				Ext.getCmp('cbxModalidad').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
// var v = Ext.getCmp('cbxEstado').store;
// v.load({ params:{ cod:828 });
				Ext.getCmp('cbxEstado').store.proxy.extraParams = {cod: '828'};
				Ext.getCmp('cbxEstado').store.load();
				break;
			case HECHOS_CONTRA_LA_VIDA_EL_CUERPO_Y_LA_SALUD:
				break;
			case HECHOS_CONTRA_LA_LIBERTAD:
				Ext.getCmp('txtMotivo').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case HECHOS_CONTRA_LA_SEGURIDAD_PUBLICA:
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case APOYO_AL_CONTRIBUYENTE:
				break;
			case SOSPECHOSOS:
				break;
			case OPERATIVOS:
				break;
			}
		default:
		}
	},
	
	
	onChangeSubCaso: function(vSubcaso){
		switch( vSubcaso ) {
		case ATROPELLO:
			break;
		case CHOQUE:
			break;
		case DESPISTE:
			break;
		case INCENDIO_DE_VEHICULOS:
			break;
		case VOLCADURA:
			break;
		case INCIDENCIA_DELICTIVA:
			break;
		case OTROS:
			break;
		case HALLAZGO_DE_CADAVER:
			IncidenciaService.reiniciarForm();
			Ext.getCmp('cbxTpoHallazgo').setHidden(false);
			break;
		case VENTA_DE_DROGAS:
			break;
		case CONSUMO_DE_DROGAS:
			break;
		case SUICIDIO:
			IncidenciaService.reiniciarForm();
			Ext.getCmp('cbxEstado').setHidden(false);
			Ext.getCmp('cbxEstado').store.proxy.extraParams = {cod: '825'};
			break;
		case VIOLENCIA_SEXUAL:
			break;
		case ACOSO_CALLEJERO:
			break;
		case OFENSA_AL_PUDOR:
			break;
		case TRATA_DE_PERSONAS:
			break;
		case SECUESTRO:
			break;
		case RAPTO:
			break;
		case CONSUMO_DE_LICOR_EN_LA_VIA_PUBLICA:
			break;
		case DESORDEN_EN_LA_VIA_PUBLICA:
			Ext.getCmp('txtMotivo').setHidden(false);
			break;
		case PERTURBACION_VECINAL:
			break;
		case AUXILIO_MECANICO:
			break;
		case AUXILIO_MEDICO:
			break;
		case CONSULTAS:
			break;
		case OTROS:
			break;
		case PERSONAS_SOSPECHOSAS:
			break;
		case VEHICULOS_SOSPECHOSOS:
			break;
		case ORDEN_PUBLICO:
			break;
		case RUIDOS_MOLESTOS:
			break;
		default:
		}
	},
	
	
	openFormInterviniente:function(options){

		options = options || {};
		
		var maestroTipoModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codTipo',  type: 'int'},
				{name: 'codTpoPadre',  type: 'int'},
		        {name: 'descTipo',   type: 'string'},
		    ]
			});
		
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    maxHeight: 600,
		    minHeight: 280,
		    width: 430,
		    heigth: 280,
		    modal:true,
		    overflowY: 'scroll',
		    id: 'wInterviniente',
		    itemId: 'wInterviniente',
		    layout: 'column',
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
			items: [
				{
		            xtype: 'form',
		            id: 'formInterviniente',
		            region: 'center',
		            scrollable: true,
		            layout: 'form',
		            width: 400,
//		            bodyPadding: 10,
// manageHeight: false,
// title: 'INVOLUCRADO',
		            items: [
		                 {
                             xtype: 'ComboGeneric',
                             id: 'cbxTpoInterv',
//                             width: 380,
                             fieldLabel: 'Tipo de fuerza',
                             labelWidth: 120,
                             root:'data',
 			            	 autoLoad:true,
                             url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=835',
                             queryMode: 'local',
                             valueField:'codTipo',
                             displayField :'descTipo',
                             forceSelection:true,
                             style:'margin-bottom:10px;',
                             name:'tipoFuerzaInterv',
                             model: maestroTipoModel
                         },
                         {
                             xtype: 'textfield',
                             id: 'txtPuestoInterv',
//                             width: 380,
                             fieldLabel: 'Unidad o puesto',
                             name: 'descPuesto',
                             labelWidth: 120
                         },
                         {
                             xtype: 'textfield',
                             id: 'txtNombInterv',
//                             width: 380,
                             fieldLabel: 'Nombre de fuerza',
                             name: 'nombInterv',
                             labelWidth: 120
                         },
                         {
                             xtype: 'textfield',
                             id: 'txtApoyoInterv',
//                             width: 380,
                             fieldLabel: 'Apoyo policial',
                             name: 'descApoyo',
                             labelWidth: 120
                         }
                    ]
		        }
			]
		,
		buttons:[
    		{
    			text:'Agregar',
    			handler:function(){
    				
    				var interviniente = Ext.create('IntervinienteModel', {
    					codTpoFuerza   : Ext.getCmp('cbxTpoInterv').getValue(),
    					descTpoFuerza : Ext.getCmp('cbxTpoInterv').getRawValue(),
    					descPuesto  : Ext.getCmp('txtPuestoInterv').getValue(),
    					nombInterv  : Ext.getCmp('txtNombInterv').getValue(),
    					descApoyo: Ext.getCmp('txtApoyoInterv').getValue()
    				});
    				
    				Ext.getCmp('tbInterv').store.add(interviniente);
    				Ext.getCmp('wInterviniente').close();

    			}
    		}
    		,
    		{
    			text:'Cancelar',
    			handler:function(){
    				Ext.getCmp('wInterviniente').close();
    			}
    		}
		]
		}).show();
	
	},

	openFormInvolucrado:function(options){
		options = options || {};
		
		var maestroTipoModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codTipo',  type: 'int'},
				{name: 'codTpoPadre',  type: 'int'},
		        {name: 'descTipo',   type: 'string'},
		    ]
			});
		
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    heigth: 280,
		    maxHeight: 600,
		    minHeight: 280,
		    width: 600,
		    modal:true,
		    overflowY: 'scroll',
		    id: 'wInvolucrado',
		    itemId: 'wInvolucrado',
		    layout: 'column',
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
			items: [
				{
		            xtype: 'form',
		            id: 'formInvolucrado',
		            region: 'center',
		            scrollable: true,
		            layout: 'column',
		            bodyPadding: 10,
// manageHeight: false,
// title: 'INVOLUCRADO',
		            items: [
		                {
		                    xtype: 'ComboGeneric',
		                    id: 'cbxTpoInvoluc',
		                    margin: '0 20 0 0 ',
		                    fieldLabel: 'Tipo',
		                    labelWidth: 60,
		                    root:'data',
			            	autoLoad:true,
			            	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=803',
			            	queryMode: 'local',
			            	valueField:'codTipo',
			            	displayField :'descTipo',
			            	forceSelection:true,
			            	style:'margin-bottom:10px;',
			            	name:'tipoInvolucrado',
			            	model: maestroTipoModel
		                },
		                {
		                    xtype: 'textfield',
		                    id: 'txtnombre',
		                    width: 310,
		                    fieldLabel: 'Nombre',
		                    labelWidth: 65,autoLoad:true,
		                },
		                {
		                    xtype: 'ComboGeneric',
		                    id: 'cbxTpoDocInvoluc',
		                    margin: '10 20 0 0 ',
		                    fieldLabel: 'Tpo. Doc.',
		                    labelWidth: 60,
		                    root:'data',
			            	autoLoad:true,
		                    url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=1',
			            	queryMode: 'local',
			            	valueField:'codTipo',
			            	displayField :'descTipo',
			            	forceSelection:true,
			            	style:'margin-bottom:10px;',
			            	name:'tipoDoc',
			            	model: maestroTipoModel
		                },
		                {
		                    xtype: 'textfield',
		                    id: 'txtNumDocInvoluc',
		                    margin: '10 20 0 0 ',
		                    width: 200,
		                    fieldLabel: 'Num. Doc.',
		                    labelWidth: 65
		                },
		                {
		                    xtype: 'textfield',
		                    id: 'txtEdadInvoluc',
		                    margin: '10 0 0 0 ',
		                    width: 90,
		                    fieldLabel: 'Edad',
		                    labelWidth: 40
		                },
		                {
		                    xtype: 'textareafield',
		                    height: 82,
		                    id: 'txtObservSospechoso',
		                    margin: '10 0 0 0',
		                    width: 565,
		                    fieldLabel: 'Observaciones y/o características',
		                    labelWidth: 120
		                }
//		                
//		                ,
//		                {
//		                    xtype: 'fieldcontainer',
//		                    id: 'conductorVehiculo',
//		                    margin: '10 0 0 0',
//		                    width: 565,
//		                    layout: 'column',
//		                    fieldLabel: 'Vehiculo',
//		                    labelWidth: 120,
//		                    hidden: true,
//		                    items: [
//		                        {
//		                            xtype: 'textfield',
//		                            id: 'cvClase',
//		                            margin: '0 20 5 0',
//		                            width: 210,
//		                            fieldLabel: 'Clase',
//		                            labelWidth: 50,
//		                            emptyText: 'Clase'
//		                        },
//		                        {
//		                            xtype: 'textfield',
//		                            id: 'cvMarca',
//		                            margin: '0 0 5 0',
//		                            width: 210,
//		                            fieldLabel: 'Marca',
//		                            labelWidth: 50,
//		                            emptyText: 'Marca'
//		                        },
//		                        {
//		                            xtype: 'textfield',
//		                            id: 'cvModelo',
//		                            margin: '0 20 5 0',
//		                            width: 210,
//		                            fieldLabel: 'Modelo',
//		                            labelWidth: 50,
//		                            emptyText: 'Modelo'
//		                        },
//		                        {
//		                            xtype: 'textfield',
//		                            id: 'cvPlaca',
//		                            margin: '0 0 5 0',
//		                            width: 210,
//		                            fieldLabel: 'Placa',
//		                            labelWidth: 50,
//		                            emptyText: 'Placa'
//		                        },
//		                        {
//		                            xtype: 'textfield',
//		                            id: 'cvColor',
//		                            margin: '0 20 0 0',
//		                            width: 210,
//		                            fieldLabel: 'Color',
//		                            labelWidth: 50,
//		                            emptyText: 'Color'
//		                        },
//		                        {
//		                            xtype: 'textfield',
//		                            id: 'cvAnio',
//		                            width: 210,
//		                            fieldLabel: 'Año',
//		                            labelWidth: 50,
//		                            emptyText: 'Año'
//		                        }
//		                    ]
//		                }
		            ]
				
		        }
// ,
// {
// xtype: 'button',
// height: 30,
// margin: '10 5 0 5',
// padding: '',
// width: 80,
// text: 'Buscar'
// }
				
			]
			,
			buttons:[
	    		{
	    			text:'Agregar',
	    			handler:function(){
	    				
	    				var involucrado = Ext.create('InvolucradoModel', {
	    					
	    					codTpoInvoluc	: Ext.getCmp('cbxTpoInvoluc').getValue(),
	    					descTpoInvoluc	: Ext.getCmp('cbxTpoInvoluc').getRawValue(),
	    					nombre		: Ext.getCmp('txtnombre').getValue(),
	    					codTpoDoc		: Ext.getCmp('cbxTpoDocInvoluc').getValue(),
	    					descTpoDoc		: Ext.getCmp('cbxTpoDocInvoluc').getRawValue(),
	    					numDoc			: Ext.getCmp('txtNumDocInvoluc').getValue(),
	    					edad			: Ext.getCmp('txtEdadInvoluc').getValue(),
	    					caracteristicas	: Ext.getCmp('txtObservSospechoso').getValue(),
	    				});
	    				
	    				console.log("involucrado");
	    				console.log(involucrado);
	    				
	    				Ext.getCmp('tbInvoluc').store.add(involucrado);
	    				Ext.getCmp('wInvolucrado').close();
	
	    			}
	    		}
	    		,
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wInvolucrado').close();
	    			}
	    		}
			]
			}).show();
	},
	
	setZonaSubZona2:function(punto){
		
		Util.runAjax({
			url:PATH_PROYECTO_BASE+'catastro/get-sector-zona-by-cordenada',
			async : true,
			method : 'POST',
			params:{punto:punto},
			success:function(http){
				var response = Ext.decode(http.responseText);
				
// console.log(response);
				if(response.data && response.data.nombresector){
					Ext.getCmp('txtZona').setValue(response.data.nombresector);
				}else{
					Ext.getCmp('txtZona').setValue('');
				}
				
				if(response.data && response.data.codi_zona){
					Ext.getCmp('txtSubZona').setValue(response.data.codi_zona);
				}else{
					Ext.getCmp('txtSubZona').setValue('');
				}
			}
		});
	},
	
	buscar2:function(){
		var grid = Ext.getCmp('grid-incidencias');
		var store = grid.store;
		var params = {};
		
		
		// POR AHORA LO COMENTO PORQUE NO ESTOY PONIENDO BUSCADOR
		
//		// listEstadoCalifica
//		if(!Ext.isEmpty(Ext.getCmp('txt-incidencia').getValue())){
//			params.incidenciaPresentada	= Ext.getCmp('txt-incidencia').getValue();
//		}
//		if(!Ext.isEmpty(Ext.getCmp('txt-fecha').getValue())){
//		}
//		if(!Ext.isEmpty(Ext.getCmp('cbxEstadosCalifStore').getValue())){
//			// params.dni = Ext.getCmp('txt-dni').getValue();
//			Ext.each(Ext.getCmp('cbxEstadosCalifStore').getValue(),function(value,i){
//				params['listEstadoCalifica['+i+']'] = value;
//			});
//		}
//		if(!Ext.isEmpty(Ext.getCmp('medioIngresoSearch').getValue())){
//			// params.dni = Ext.getCmp('txt-dni').getValue();
//			Ext.each(Ext.getCmp('medioIngresoSearch').getValue(),function(value,j){
//				params['listmedios['+j+']'] = value;
//			});
//		}
//		store.proxy.extraParams = params;
		store.load();
	}
	,
	
	openFormRegistroNuevo:function(options){

		
		options = options || {};
		
		
		// DEFINICION DE MODELOS
		
		var unidadModel = Ext.create('Ext.data.Model',{
			fields: [
		        {name: 'codUnidad',  type: 'int'},
		        {name: 'descUnidad',   type: 'string'},
		    ]
// ,proxy: {
// type: 'json',
// url : '/lista-unidad'
// }
		});
		
// var unidadStore = Ext.create('Ext.data.Store', {
// model: unidadModel,
// proxy: {
// type: 'ajax',
// url: '/lista-unidad',
// reader: {
// type: 'json',
// rootProperty: 'users'
// }
// },
// autoLoad: true
// // fields: [],
// // data : []
// });

		var casoModel = Ext.create('Ext.data.Model', {
		fields: [
	        {name: 'codCaso',  type: 'int'},
	        {name: 'codUnidad',  type: 'int'},
	        {name: 'descCaso',   type: 'string'},
	    ]
		});
		
		var subCasoModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codSubcaso',  type: 'int'},
				{name: 'codCaso',  type: 'int'},
		        {name: 'descSubcaso',   type: 'string'},
		    ]
			});

		var maestroTipoModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codTipo',  type: 'int'},
				{name: 'codTpoPadre',  type: 'int'},
		        {name: 'descTipo',   type: 'string'},
		    ]
			});
		
		var severidadModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codTipo',  type: 'int'},
		        {name: 'descTipo',  type: 'int'},
		        
		    ]
			});
		
		
		
		// CONSTRUCCION DE STORES ESTATICOS

		var tpoHallazgoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"776", "name":"HUMANO"},
		        {"value":"777", "name":"ANIMAL"}
		    ]
		});
		
		var tpoSubEstado = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"832", "name":"CON CAPTURA"},
		        {"value":"833", "name":"SIN CAPTURA"}
		    ]
		});
		

	// ************ CONSTRUCCION DE COMPONENTES DE FORMULARIO ************ //
		
		var idIncidencia =	{
				xtype: 'textfield',
				id: 'idIncidencia',
				margin: '10 0 0 0',
				width: 10,
				hidden:true,
				fieldLabel: 'id',
				labelClsExtra: '',
				labelWidth: 70
			};
		
		// COMPONENTES PARA ESPECIFICACION DE INCIDENCIA
		
		var cbxUnidad = {
				xtype: 'ComboGeneric',
				id: 'cbxUnidad',
				margin: '0 0 10 0',
				width: 455,
				fieldLabel: 'Unidad de atención',
				labelWidth: 120,
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-unidad',
				queryMode: 'local',
				valueField:'codUnidad',
				displayField :'descUnidad',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoUnidad',
				model: unidadModel,
				allowBlank:false,
				listeners:{
					select:function(f,record){
						IncidenciaService.reiniciarForm();
				  		Ext.getCmp('cbxCaso').reset();
				  		Ext.getCmp('cbxSubCaso').reset();
				  		Ext.getCmp('cbxModalidad').reset();
				  		var vStoreCaso = Ext.getCmp('cbxCaso').store;
				  		console.log(record.data.codUnidad);
				  		console.log("record.data.codUnidad");
				  		vStoreCaso.load({
								params:{ cod:record.data.codUnidad },
								callback:function(){
								}		
							});
					}
				}
			};
		
		var cbxCaso = {
				xtype: 'ComboGeneric',
				id: 'cbxCaso',
				margin: '0 0 10 0',
				width: 455,
				fieldLabel: 'Tipo de caso',
				labelWidth: 120,
				extraParams:{ cod: '-1' },
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-caso-por-unidad',
				queryMode: 'local',
				valueField:'codCaso',
				displayField :'descCaso',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoCaso',
				model: casoModel,
				allowBlank:false,
				listeners:{
					select:function(f,record){
				  		var vStoreSubCaso = Ext.getCmp('cbxSubCaso').store;
				  		console.log(vStoreSubCaso);
				  		vStoreSubCaso.removeAll();
				  		Ext.getCmp('formDetalle').reset();
				  		Ext.getCmp('cbxSubCaso').reset();
				  		vStoreSubCaso.load({
								params:{ cod:record.data.codCaso },
								callback:function(){}		
							});
						var vUnidad = Ext.getCmp('cbxUnidad').getValue();
				  		var vCaso = Ext.getCmp('cbxCaso').getValue();
				  		console.log(vUnidad);
				  		console.log(vCaso);
				  		IncidenciaService.onChangeUnidadCaso(vUnidad, vCaso);
					}
				}
			};
		
		var cbxSubCaso = {
				xtype: 'ComboGeneric',
	            id: 'cbxSubCaso',
	            width: 455,
	            fieldLabel: 'Sub-tipo de caso',
	            labelWidth: 120,
	            extraParams:{ cod: '-1' },
	        	root:'data',
	        	autoLoad:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-subcaso-por-caso',
	        	queryMode: 'local',
	        	valueField:'codSubcaso',
	        	displayField :'descSubcaso',
	        	forceSelection:true,
	        	style:'margin-bottom:10px;',
	        	name:'tipoSubCaso',
	        	model: subCasoModel,
	        	listeners:{
	        		select:function(f,record){
	        			var v = record.data.codSubcaso
	        			IncidenciaService.onChangeSubCaso(v);
		        		if (v==8) {	}
	        		}
	        	}
			};
        
		
		// COMPONENTES PARA UBICACION DE INCIDENCIA
		
		var txtDireccion = {
				xtype: 'textfield',
				id: 'txtDireccion',
				width: 360,
				fieldLabel: 'Dirección:',
				labelWidth: 70,
				emptyText: 'Dirección',
				allowBlank:false,
				readOnly:true
			};

		var txtCuadra =	{
				xtype: 'textfield',
				id: 'txtCuadra',
				margin: '10 0 0 0',
				width: 155,
				fieldLabel: 'Cdra / Nro:',
				labelClsExtra: '',
				labelWidth: 70
			};
		
		var txtDpto = {	
				xtype: 'textfield',
				id: 'txtDpto',
				margin: '10 0 0 20',
				width: 185,
				fieldLabel: 'Dpto / Of:',
				labelWidth: 60
			};
		
		var txtZona = {
				xtype: 'textfield',
				id: 'txtZona',
				width: 80,
				fieldLabel: 'Zona:',
				hideLabel: true,
				labelWidth: 60,
				emptyText: 'Zona',
				allowBlank:false,
				readOnly:true
			};
		
		var txtSubZona = {
				xtype: 'textfield',
				id: 'txtSubZona',
				width: 80,
				fieldLabel: 'SubZona',
				hideLabel: true,
				emptyText: 'SubZona',
				allowBlank:false,
				readOnly:true
			};
		
		var coordenadas = {
				xtype:'textfield',
				width:400,
				fieldLabel:'Coordenadas',
				labelWidth : 100,
				name:'cordenadas',
				style:'margin-bottom:10px;',
				id:'coordenadas',
				margin: '10 10 10 20',
				allowBlank:false,
				readOnly:true,
				hidden:true
			};
		
		var latitud = {
				xtype:'textfield',
				width:400,
				fieldLabel:'latitud',
				labelWidth : 100,
				name:'latitud',
				style:'margin-bottom:10px;',
				id:'latitud',
				margin: '10 10 10 20',
				allowBlank:false,
				readOnly:true,
				hidden:true
			};
		
		var longitud = {
				xtype:'textfield',
				width:400,
				fieldLabel:'longitud',
				labelWidth : 100,
				name:'longitud',
				style:'margin-bottom:10px;',
				id:'longitud',
				margin: '10 10 10 20',
				allowBlank:false,
				readOnly:true,
				hidden:true
			};
		
		var btnMapear = {
	            xtype: 'button',
	            id: 'btnMapear',
	            margin: '10 0 0 25',
	            text: 'Mapear',
	            handler:function(){
					Util.windowGeoreferenciaPunto({
	        			width:600,
	        			height:600,
	        			idCanvasMap:'mapa-incidencia-geo',
	        			idCordenadas:'coordenadas',
	        			fnGrabar:function(punto,direccionData){
	        				Ext.getCmp('coordenadas').setValue(punto.lat+' '+punto.lng);
	        				Ext.getCmp('latitud').setValue(punto.lat);
	        				Ext.getCmp('longitud').setValue(punto.lng);
	        				
	        				console.log("Latitud y Longitud: ");
	        				console.log(Ext.getCmp('latitud').getValue());
	        				console.log(Ext.getCmp('longitud').getValue());
	        				
	        				$.ajax({
	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
								    dataType: "json",
								    data:{latitud:punto.lat,longitud:punto.lng},
								    success: function( response ) {
								    	console.log(response);
								    	var result = response.result || [];
								    	if(result.length>0){
								    		var name = result[0];
								    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
								    	}
								    }
	        				});
	        				IncidenciaService.setZonaSubZona2(punto.lng+' '+punto.lat);
	        			}
	        		});
				}
	        };

		
		//	COMPONENTES PARA DATOS DEL REPORTANTE
		
		var txtNombReport =	{
				xtype: 'textfield',
				id: 'txtNombReport',
				margin: '0 10 0 0',
				width: 300,
				fieldLabel: 'Nombre',
				labelAlign: 'top',
				labelWidth: 60
				,allowBlank:false
			};

	    var txtTelfReport = {
	    		xtype: 'textfield',
				id: 'txtTelfReport',
				margin: '0 10 0 0',
				width: 110,
				fieldLabel: 'Telefono',
				labelAlign: 'top',
				labelWidth: 60,
				allowBlank:false
			};
	
	    var txtCarnetExt = {	
	    		xtype: 'textfield',
				hidden: true,
				id: 'txtCarnetExt',
				margin: '0 10 0 0',
				width: 124,
				fieldLabel: 'Pass. / Carnet Ext.',
				labelAlign: 'top',
				labelWidth: 60
	    	};
	
	    var cbxNacionalidad = {
	    		xtype: 'combobox',
				hidden: true,
				id: 'cbxNacionalidad',
				margin: '0 10 0 0',
				width: 180,
				fieldLabel: 'Nacionalidad',
				hideEmptyLabel: false,
				labelAlign: 'top',
				labelWidth: 80
			};
	
	    var txtDirecReport = {	
	    		xtype: 'textfield',
				id: 'txtDirecReport',
				margin: '0 10 0 0',
				width: 258,
				fieldLabel: 'Dirección',
				disabled: true,
				labelAlign: 'top',
				labelWidth: 60
	    	};

	    var txtCdraReport = {
	    		xtype: 'textfield',
				id: 'txtCdraReport',
				margin: '0 10 0 0',
				width: 110,
				fieldLabel: 'Cdra.',
				disabled: true,
				labelAlign: 'top',
				labelWidth: 40
			};
	    
	    
	    
	    
	    
	    var txtDetalle = {
	    		xtype: 'textareafield',
	    		height: 100,
	    		id: 'txtDetalle',
	    		padding: '',
	    		width: 525,
	    		fieldLabel: 'Detalle de evento',
	    		labelAlign: 'top',
	    		emptyText: 'Describa el detalle de la incidencia o la acción tomada'
    		};

	    var fecEvento = {
	    		xtype: 'datefield',
	    		id: 'fecEvento',
	    		width: 170,
	    		fieldLabel: 'Fecha de evento',
	    		hideLabel: true,
	    		emptyText: 'dd/mm/aaaa'
//	    		,hidden:true
	    	};

	    var horEvento = {
	    		xtype: 'textfield',
	    		id: 'horEvento',
	    		width: 80,
	    		fieldLabel: 'Hora de evento',
	    		hideLabel: true,
	    		emptyText: 'hh:mm'
//	    			,hidden:true
	    	};

		var fecAtencion = {
	    		xtype: 'datefield',
	    		id: 'fecAtencion',
	    		width: 170,
	    		fieldLabel: 'Fecha de atención',
	    		hideLabel: true,
	    		emptyText: 'dd/mm/aaaa'
	    			,hidden:true
	    	};

	    var horAtencion = {
	    		xtype: 'textfield',
	    		id: 'horAtencion',
	    		width: 80,
	    		fieldLabel: 'Hora de atención',
	    		hideLabel: true,
	    		emptyText: 'hh:mm'
	    			,hidden:true
	    	};

	    var cbxSeveridad = {
	    		xtype: 'ComboGeneric',
	    		id: 'cbxSeveridad',
	    		margin: '0 20 0 0',
	    		width: 320,
	    		hidden: true,
	    		fieldLabel: 'Severidad',
	    		labelWidth: 70,
	    		extraParams:{	},
	    		root:'data',
	    		autoLoad:true,
	    		url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=845',
	    		queryMode: 'local',
	    		valueField:'codTipo',
	    		displayField :'descTipo',
	    		forceSelection:true,
	    		style:'margin-bottom:10px;',
	    		name:'tipoSeveridad',
	    		model: severidadModel
	    	};
	    

	    var cbxTpoHallazgo = {
			    xtype: 'combobox',
			    id: 'cbxTpoHallazgo',
			    margin: '0 20 0 0',
			    hidden: true,
			    fieldLabel: 'Tipo de cadáver',
			    store: tpoHallazgoStore,
			    queryMode: 'local',
			    name:'tpoHallazgo',
			    // forceSelection:true,
			    // style:'margin-bottom:10px;',
			    valueField: 'value',
			    displayField: 'name',
			    listeners:{
			    	// select:function(f,record){
						// if(record.data.value == 776){
							// Ext.getCmp('cbxSexo').setHidden(false);
							// Ext.getCmp('cbxAnimal').set(true);
							// Ext.getCmp('cbxSexo').setHidden(false);
					  		// Ext.getCmp('cbxAnimal').setHidden(true);
						// } else { if (record.data.value == 777){
							// Ext.getCmp('cbxSexo').setHidden(true);
							// Ext.getCmp('cbxAnimal').setHidden(false);}
					// }
					// }
				}
	    	};
		
	    var txtMotivo = {
			    xtype: 'textfield',
			    id: 'txtMotivo',
			    margin: '0 20 0 0',
			    width: 205,
			    hidden: true,
			    fieldLabel: 'Motivo',
			    labelWidth: 50
		    };
	    
		var cbxEstado = {
	            xtype: 'ComboGeneric',
	            id: 'cbxEstado',
	            margin: '0 20 0 0',
	            width: 240,
	            hidden: true,
	            fieldLabel: 'Estado',
	            labelWidth: 50,
	        	root:'data',
	        	autoLoad:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=828',
	        	queryMode: 'local',
	        	valueField:'codTipo',
	        	displayField :'descTipo',
	        	forceSelection:true,
	        	style:'margin-bottom:10px;',
	        	name:'tipoEstado',
	        	model: maestroTipoModel,
	        	listeners:{
					select:function(f,record){
						Ext.getCmp('cbxSubEstado').reset();
						var v = record.data.codTipo;
						console.log("ESTE ES EL VALOR DEL COD_TIPO DEL cbxEstado = "+v);
			    		if(v==830){
			    			Ext.getCmp('cbxSubEstado').setDisabled(false);
			    		}else{
			    			Ext.getCmp('cbxSubEstado').setDisabled(true);
			    		}
			    		
			    	}
			    	
			    }
	        	
	        };
		
		var cbxSubEstado = {
	            xtype: 'ComboGeneric',
	            id: 'cbxSubEstado',
	            margin: '0 20 0 0',
	            width: 260,
	            hidden: true,
	            disabled:true,
	            fieldLabel: 'Sub-estado',
	            labelWidth: 75,
	            root:'data',
	        	autoLoad:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=831',
	        	queryMode: 'local',
	        	valueField:'codTipo',
	        	displayField :'descTipo',
	        	forceSelection:true,
	        	style:'margin-bottom:10px;',
	        	name:'tipoEstado',
	        	model: maestroTipoModel
	        };
		
		var cbxModalidad = {
	            xtype: 'ComboGeneric',
	            id: 'cbxModalidad',
	            margin: '0 20 0 0',
	            width: 290,
	            hidden: true,
	            fieldLabel: 'Modalidad',
	            labelWidth: 70,
	            root:'data',
	        	autoLoad:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=851',
	        	queryMode: 'local',
	        	valueField:'codTipo',
	        	displayField :'descTipo',
	        	forceSelection:true,
	        	style:'margin-bottom:10px;',
	        	name:'tipoEstado',
	        	model: maestroTipoModel,
	        };
	    
// Ext.getCmp('txtMotivo').store.load();
        			
// if (record.data.codSubcaso==AUXILIO_MECANICO) {
// Ext.getCmp('pnVehiculo').setHidden(false);
// Ext.getCmp('pnInvolucrado').setHidden(true);
// } else if (record.data.codSubcaso==AUXILIO_MEDICO) {
// Ext.getCmp('pnVehiculo').setHidden(true);
// Ext.getCmp('pnInvolucrado').setHidden(false);
// }
// // Ext.getCmp('cbxSubTipoCaso').reset();
// var vStoreSubCaso = Ext.getCmp('cbxSubCaso').store;
// vStoreSubCaso.removeAll();
// Ext.getCmp('cbxSubCaso').reset();
// Ext.getCmp('cbxModalidad').reset();
// // Ext.getCmp('cbxCaso').setDisabled(true);
// // Ext.getCmp('cbxSubEstado').setDisabled(true);
// vStoreSubCaso.load({
// params:{
// cod:record.data.codCaso
// },
// callback:function(){
// // if(vStoreCaso.count()>0){
// // Ext.getCmp('cbxCaso').setDisabled(false);
// // } else {
// // Ext.getCmp('cbxCaso').setDisabled(true);
// // }
// }
// });

		
		var intervStore = Ext.create('Ext.data.Store', {
		    autoLoad : true,
			model : 'IntervinienteModel',
			extraParams:{ cod: '-1' },
			//pageSize: 20,
			proxy : {
				type : 'ajax',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-interviniente-by-incidencia',
				actionMethods : 'POST',
				reader : {
					root : 'data'
				},
				simpleSortMode : true
				,timeout:99999999
			}
		});
		
//		Ext.create('Ext.data.Store', {
//		    id: 'intervStore',
//		    fields:[ 'index', 'codTpoFuerza', 'descTpoFuerza', 'descPuesto', 'nombInterv', 'descApoyo']
//		});
		
		
		var involucStore = Ext.create('Ext.data.Store', {
		    autoLoad : true,
			model : 'InvolucradoModel',
			extraParams:{ cod: '-1' },
			//pageSize: 20,
			proxy : {
				type : 'ajax',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-involucrado-by-incidencia',
				actionMethods : 'POST',
				reader : {
					root : 'data'
				},
				simpleSortMode : true
				,timeout:99999999
			}
		});
	
//		Ext.create('Ext.data.Store', {
//		    id: 'involucStore',
//		    fields:[ 'index', 'codTpoInvoluc', 'descTpoInvoluc', 'nombre', 'codTpoDoc', 'descTpoDoc', 'numDoc', 'edad', 'caracteristicas']
//		});
		

		var intervModel = Ext.create('Ext.data.Model', {
			fields : [ 
				{name: 'index',  type: 'int'},
				{name: 'codTpoFuerza',  type: 'int'},
				{name: 'descTpoFuerza',  type: 'string'},
				{name: 'descPuesto',  type: 'string'},
				{name: 'nombInterv',  type: 'string'},
				{name: 'apoyo',  type: 'string'}
			]
		});
	
			
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    height: 750,
		    width: 980,
		    modal:true,
		    scrollable: true,
		    id:'win-form-registro',
		    layout: 'fit',
		    bodyStyle:'padding:10px 10px 0px 10px;',
		    items: [ 
		    	{
		            xtype: 'form',
		            region: 'center',
		            // scrollable: true,
		            layout: 'column',
		            id: 'formIncidencia',
		            bodyPadding: 10,
		            overflowY: 'scroll',
		            listeners:{
		    			
	    				afterrender:function(){
	    					
	    					if(options.codIncidencia){
	    						console.log("options.codIncidencia = "+ options.codIncidencia);
	    						var cod = options.codIncidencia;
	    						console.log("cod");
	    						console.log(cod);
		    					var thisWin = Ext.getCmp('win-form-registro');
		    					thisWin.body.mask('Obteniendo información...');
		    					console.log("obteniendo la incidencia...");
		    					Util.runAjax({
		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-incidencia',
//		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
		    						async : true,
									method : 'GET',
									params:{ idIncidencia: cod},
									success:function(http){
										try{
											var response = Ext.decode(http.responseText);
											var data = response.data;
											
											console.log("data (datos de carga): ");
											console.log(data);
											

											//	PARA CAPTURAR EL idIncidencia SI ES QUE EL REGISTRO EXITIERA
													if (data.idIncidencia!=null){
															Ext.getCmp('idIncidencia').setValue(data.idIncidencia); 
//															Ext.getCmp('tbInvoluc').store.load({
//																params:{ cod:data.idIncidencia },
//																callback:function(){
//																}
//															});
															Ext.getCmp('tbInvoluc').store.loadData(data.involucrados);
//															Ext.getCmp('tbInterv').store.load({
//																params:{ cod:data.idIncidencia },
//																callback:function(){
//																}
//															});
															Ext.getCmp('tbInterv').store.loadData(data.intervinientes);
//															Ext.getCmp('tbVehic').store.loadData(data.vehiculos);
													}
													console.log("Ext.getCmp('tbInterv').store");
													console.log(Ext.getCmp('tbInterv').store);

											//	PARA SECCION ESPECIFICACION DE INCIDENCIA

													if (data.codUnidad!=null) { 
															Ext.getCmp('cbxUnidad').setValue(data.codUnidad); 
															Ext.getCmp('cbxCaso').store.load({
							            	  						params: { cod: data.codUnidad }
							            	  					});
														}
													if (data.codCaso!=null){ 
															Ext.getCmp('cbxCaso').setValue(data.codCaso); 
															IncidenciaService.onChangeUnidadCaso(data.codUnidad, data.codCaso);	// PERSONALIZA FORM
															Ext.getCmp('cbxSubCaso').store.load({
									            	  				params: { cod: data.codCaso }
											            	  	});
															
														}
				            	  					if (data.codSubcaso!=null){ 
					            	  						Ext.getCmp('cbxSubCaso').setValue(data.codSubcaso);
					            	  						IncidenciaService.onChangeSubCaso(data.codSubcaso);
					            	  					}
			            	  					
		            	  					
		            	  					//	PARA SECCION UBICACION DE INCIDENCIA
				            	  					
				            	  					console.log("data.coordenadas");
				            	  					console.log(data.coordenadas);
				            	  					
				            	  					if (data.coordenadas!=null){
							    						Ext.getCmp('coordenadas').setValue(data.coordenadas);
							    						Ext.getCmp('latitud').setValue(data.coordenadas.split(' ')[0]);
							    						Ext.getCmp('longitud').setValue(data.coordenadas.split(' ')[1]);
							    					}
//													if (data.coordenadas!=null){
//								    						Ext.getCmp('coordenadas').setValue(data.coordenadas);
//								    						Ext.getCmp('latitud').setValue(data.coordenadas.split(' ')[0]);
//								    						Ext.getCmp('longitud').setValue(data.coordenadas.split(' ')[1]);
//								    					}
							    					if (data.descVia!=null){
							    							Ext.getCmp('txtDireccion').setValue(data.descVia);
							    						}
						    						if (data.cdra!=null){
								    						Ext.getCmp('txtCuadra').setValue(data.cdra);
								    					}
							    					if (data.dpto!=null){
								    						Ext.getCmp('txtDpto').setValue(data.dpto);
								    					}
							    					if (data.zona!=null){
								    						Ext.getCmp('txtZona').setValue(data.zona);
								    					}
							    					if (data.subzona!=null){
								    						Ext.getCmp('txtSubZona').setValue(data.subzona);
								    					}

								    		
								    		// PARA SECCION DATOS DE REPORTANTE

										    		if (data.nombReport!=null){
															Ext.getCmp('txtNombReport').setValue(data.nombReport);
														}
													if (data.telfReport!=null){
															Ext.getCmp('txtTelfReport').setValue(data.telfReport);		    					
														}
					    					

					    					//	PARA SECCION DETALLE

							    					if (data.descripcion!=null){
								    						Ext.getCmp('txtDetalle').setValue(data.descripcion);
								    					}
							    					if (data.fecNotificacion!=null){
								    						Ext.getCmp('fecEvento').setValue(new Date(data.fecNotificacion));
								    						console.log("Hora de notificacion = "+new Date(data.fecNotificacion).toLocaleTimeString());
	//							    						Ext.getCmp('fecEvento').setValue(new Date());
								    					}
							    					
//							    					var d = new Date(1469433907836);
//
//							    					d.toLocaleString()     // 7/25/2016, 1:35:07 PM
//							    					d.toLocaleDateString() // 7/25/2016
//							    					d.toDateString()       // Mon Jul 25 2016
//							    					d.toTimeString()       // 13:35:07 GMT+0530 (India Standard Time)
//							    					d.toLocaleTimeString() // 1:35:07 PM
							    					
							    					
							    					//.toLocaleDateString()
//							    					if (data.fecEvento!=null){
//								    						Ext.getCmp('fecEvento').setRawValue(new Date(parseInt(data.fecEvento)));
//								    					}
//							    					if (data.fecAtencion!=null){
//								    						Ext.getCmp('fecNotificacion').setValue(new Date(data.fecNotificacion));
//						    						Ext.getCmp('fecAtencion').setRawValue(data.fecAtencion);
//								    					}
							    					if (data.fecNotificacion!=null){
								    						Ext.getCmp('horEvento').setValue(new Date(data.fecNotificacion).toLocaleTimeString().substring(0, 5));
								    					}
//							    					if (data.horAtencion!=null){
//								    						Ext.getCmp('horAtencion').setValue(data.horAtencion);
//								    					}


				            	  					if (data.codSeveridad!=null){
					            	  						Ext.getCmp('cbxSeveridad').setValue(data.codSeveridad); 	
					            	  					}
				            	  					if (data.codEstado!=null){
					            	  						Ext.getCmp('cbxEstado').setValue(data.codEstado); 			 
					            	  					}
				            	  					if (data.codSubestado!=null){
					            	  						Ext.getCmp('cbxSubEstado').setValue(data.codSubestado); 
				            	  							if(data.codSubestado==830){
				            	  				    			Ext.getCmp('cbxSubEstado').setDisabled(false);
				            	  				    		}else{
				            	  				    			Ext.getCmp('cbxSubEstado').setDisabled(true);
				            	  				    		}
					            	  					}
				            	  					if (data.codModalidad!=null){
					            	  						Ext.getCmp('cbxModalidad').setValue(data.codModalidad);		
					            	  					}
				            	  					if (data.motivo!=null){
					            	  						Ext.getCmp('txtMotivo').setValue(data.motivo);
					            	  					}
							    					if (data.tpoHallazgo!=null){
								    						Ext.getCmp('cbxTpoHallazgo').setValue(data.tpoHallazgo);
								    					}
							    					

											thisWin.body.unmask();
										
										} catch(e) {
										
											thisWin.close();
										
										}
									}
								});
	    					}
	    				}
	    			},
		            items: [
		            	
		            	idIncidencia,
		            	
                //	FORMULARIO DE ESPECIFICACION DE INCIDENCIA
		            	
		                {
		                    xtype: 'fieldset',
		                    height: 180,
		                    id: 'pnEspecificacion',
		                    width: 490,
		                    style: 'border-width: 0px',
		                    title: 'Especificación de incidencia',
		                    items: [
		                    	cbxUnidad,
		                    	cbxCaso,
		                    	cbxSubCaso,
		                    ]
		                },
		                
                //	FORMULARIO DE UBICACION DE INCIDENCIA
		                
		                {
		                    xtype: 'fieldset',
		                    height: 180,
		                    id: 'pnUbicacion',
		                    margin: '0 0 0 15',
		                    width: 395,
		                    layout: 'column',
		                    title: 'Ubicación de incidencia',
		                    items: [
		                        txtDireccion,
		                        txtCuadra,
		                        txtDpto,
		                        {
		                            xtype: 'fieldcontainer',
		                            height: 34,
		                            margin: '10 0 0 0',
		                            width: 265,
		                            layout: 'column',
		                            fieldLabel: 'Zona-SubZ',
		                            labelWidth: 70,
		                            items: [
		                            	txtZona,
		                            	txtSubZona,
		                                coordenadas,
		                                longitud,
		                                latitud
		                            ]
		                        },
		                        btnMapear
		                    ]
		                },
		                
                //	FORMULARIO DE DATOS DEL REPORTANTE
		                
		                {
		                    xtype: 'fieldset',
		                    height: 125,
		                    id: 'pnReportante',
		                    minHeight: 105,
		                    width: 900,
		                    layout: 'column',
		                    title: 'Datos del reportante',
		                    items: [
		                    	txtNombReport,
		                    	txtTelfReport,
		                    	txtCarnetExt,
		                    	cbxNacionalidad,
		                    	txtDirecReport,
		                    	txtCdraReport
		                    ]
		                },

                //	FORMULARIO DE DETALLE DE INCIDENCIA
	
		                {	
		                	xtype: 'form',
		                	id: 'formDetalle',
		                	items: [
				                {
				                    xtype: 'fieldset',
				                    id: 'pnDetalle',
				                    width: 900,
				                    layout: 'column',
				                    defaults : { xtype: 'form', },
				                    title: 'Detalle de incidencia',
				                    items: [
				                    	txtDetalle,
				                    	{
				                            xtype: 'fieldcontainer',
				                            height: 34,
				                            id: 'gpEvento1',
				                            margin: '30 0 0 20',
				                            width: 315,
				                            layout: 'column',
				                            fieldLabel: 'Evento',
				                            labelWidth: 60,
//				                            hidden:true,
				                            items: [
				                            	fecEvento,
				                            	horEvento
				                            ]
				                        },
				                        {
				                            xtype: 'fieldcontainer',
				                            height: 34,
				                            id: 'gpAtencion',
				                            margin: '5 0 10 20',
				                            width: 315,
				                            layout: 'column',
				                            fieldLabel: 'Atención',
				                            labelWidth: 60,
				                            hidden:true,
				                            items: [
				                            	fecAtencion,
				                            	horAtencion
				                            ]
				                        },
				                        {
				                            xtype: 'container',
				                            margin: '10 0 0 0',
				                            width: 865,
				                            layout: 'column',
				                            items: [
				                            	cbxSeveridad,
				                            	cbxTpoHallazgo,
				                            	txtMotivo
				                            ]
				                        },
				                        {
				                            xtype: 'container',
				                            margin: '10 0 0 0',
				                            width: 865,
				                            layout: 'column',
				                            items: [
				                                cbxEstado,
				                                cbxSubEstado,
				                                cbxModalidad	
				                            ]
				                        },
				                        {
				                            xtype: 'fieldcontainer',
				                            id: 'pnInvoluc',
				                            margin: '10 0 0 0',
				                            width: 865,
				                            hidden: true,
				                            fieldLabel: 'Involucrados en incidencia',
				                            labelAlign: 'top',
				                            items: [
				                                {
				                                    xtype: 'gridpanel',
				                                    id: 'tbInvoluc',
				                                    width: 865,
				                                    store: involucStore,
				                                    bodyBorder: true,
				                                    header: false,
				                                    autoLoad: true,
				                                    bodyBorder: true,
				                                    header: false,
				                                    title: 'My Grid Panel',
//				                                    height: 35,
//			                                        maxHeight: 140,
//			                                        minHeight: 35,
				                                    columns: [
				                                    	{
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codInvoluc',
				                                            text: 'Cod Involuc'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'idIncidencia',
				                                            text: 'Id Incidencia'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codTpoInvoluc',
				                                            text: 'Cod Tpo Involuc'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codTpoDoc',
				                                            text: 'Cod Tpo Doc'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 180,
				                                            dataIndex: 'descTpoInvoluc',
				                                            text: 'Tipo Involuc'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 240,
				                                            dataIndex: 'nombInvoluc',
				                                            text: 'Nombre Involucrado'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 40,
				                                            dataIndex: 'descTpoDoc',
				                                            text: 'Tipo Doc',
				                                            //hidden: true
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'numDocInvoluc',
				                                            text: 'Nro Documento',
				                                            //hidden: true
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 70,
				                                            dataIndex: 'edadInvoluc',
				                                            text: 'Edad'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 240,
				                                            dataIndex: 'descObserv',
				                                            text: 'Observación'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codVehic',
				                                            text: 'Cod Vehic'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codClaseVehic',
				                                            text: 'Cod Clase Vehic'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codMarcaVehic',
				                                            text: 'Cod Marca Vehic'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codColorVehic',
				                                            text: 'Cod Color Vehic'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'claseVehic',
				                                            text: 'Clase'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'marcaVehic',
				                                            text: 'Marca'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'modelVehic',
				                                            text: 'Model'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'placaVehic',
				                                            text: 'Placa'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'Color Vehic',
				                                            text: 'Color'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 100,
				                                            dataIndex: 'anioVehic',
				                                            text: 'Año'
				                                        },
				                                        {
				                                            xtype:'actioncolumn', 
				                                            width:40,
				                                            tdCls:'delete',
				                                            items: [{
				                                            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
				                                            	tooltip: 'Eliminar',
				                                                handler: function(grid, rowIndex, colIndex) {
				                                                    var rec = grid.getStore().getAt(rowIndex);
				                                                    grid.getStore().remove(rec);
				                                                    alert("Involucrado " + rec.get('nombre') + " ha sido eliminado.");
				                                                }
				                                            }]
				                                        }
//				                                        ,
//				                                        {
//				                                            xtype: 'actioncolumn',
//				                                            width: 30,
//				                                            dataIndex: 'chkDelete',
//				                                            text: ''
//				                                        },
//				                                        {
//				                                            xtype: 'actioncolumn',
//				                                            width: 30,
//				                                            dataIndex: 'chkDelete',
//				                                            text: ''
//				                                        }
				                                    ],
				                                    viewConfig: {
//				                                        height: 35,
				                                        margin: '',
				                                        maxHeight: 140,
				                                        minHeight: 35,
				                                        stripeRows: false
				                                    }
				                                },
				                                {
				                                    xtype: 'button',
				                                    id: 'btnNewInvoluc',
				                                    margin: '0 0 0 765',
				                                    width: 100,
				                                    text: 'Agregar',
				                                    handler:function(){
				        		                    	IncidenciaService.openFormInvolucrado({
				        		                    		title:'Involucrado'
				        		                    	})
				        	                    	}
				                                }
				                            ]
				                        },
				                        {
				                            xtype: 'fieldcontainer',
				                            id: 'pnInterv',
				                            margin: '10 0 0 0',
				                            width: 865,
				                            fieldLabel: 'Fuerzas intervinientes',
				                            labelAlign: 'top',
				                            items: [
				                                {
				                                    xtype: 'gridpanel',
				                                    id: 'tbInterv',
				                                    margin: '',
//				                                    store: Ext.data.StoreManager.lookup('intervStore'),
				                                    store: intervStore,
				                                    width: 865,
//				                                    height: 35,
//			                                        maxHeight: 140,
//			                                        minHeight: 35,
				                                    autoLoad: true,
				                                    bodyBorder: true,
				                                    header: false,
				                                    title: 'My Grid Panel',
				                                    columns: [
				                                    	{
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codInterv',
				                                            text: 'Cod Interv'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'idIncidencia',
				                                            text: 'Id Incidencia'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codTpoInterv',
				                                            text: 'Cod Tpo Interv'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            hidden: true,
				                                            dataIndex: 'codTpoPuesto',
				                                            text: 'Cod Tpo Puesto'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 180,
				                                            dataIndex: 'descTpoInterv',
				                                            text: 'Tipo Interv'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 160,
				                                            dataIndex: 'descTpoPuesto',
				                                            text: 'Unidad/Puesto'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 200,
				                                            dataIndex: 'nombInterv',
				                                            text: 'Nombre de interviniente'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 200,
				                                            dataIndex: 'apoyoPolicial',
				                                            text: 'Apoyo policial'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 0,
				                                            dataIndex: 'estReg',
				                                            hidden: true,
				                                            text: 'Estado'
				                                        },
				                                        {
				                                            xtype: 'gridcolumn',
				                                            width: 200,
				                                            dataIndex: 'infoInterv',
				                                            text: 'Info Adic.'
				                                        },
				                                        {
				                                            xtype:'actioncolumn', 
				                                            width:40,
				                                            tdCls:'delete',
				                                            items: [{
				                                            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
				                                            	tooltip: 'Eliminar',
				                                                handler: function(grid, rowIndex, colIndex) {
				                                                    var rec = grid.getStore().getAt(rowIndex);
				                                                    grid.getStore().remove(rec);
				                                                    alert("Interviniente " + rec.get('nombInterv') + " ha sido eliminado.");
				                                                }
				                                            }]
				                                        }
//				                                        ,{
//				                                            xtype: 'actioncolumn',
//				                                            keyMapTarget: true,
//				                                            draggable: false,
//				                                            width: 30,
//				                                            dataIndex: 'string',
//				                                            text: ''
//				                                        },
//				                                        {
//				                                            xtype: 'actioncolumn',
//				                                            width: 30,
//				                                            dataIndex: 'string',
//				                                            text: ''
//				                                        },
//				                                        {
//				                                            xtype: 'actioncolumn',
//				                                            width: 30,
//				                                            dataIndex: 'string',
//				                                            text: ''
//				                                        }
				                                    ],
				                                    viewConfig: {
//				                                        height: 35,
				                                        margin: '',
				                                        maxHeight: 140,
				                                        minHeight: 35,
				                                        stripeRows: false
				                                    }
				                                },
				                                {
				                                    xtype: 'button',
				                                    id: 'btnNewInterv',
				                                    margin: '0 0 0 765',
				                                    width: 100,
				                                    text: 'Agregar',
				                                    handler:function(){
				        		                    	IncidenciaService.openFormInterviniente({
				        		                    		title:'Fuerza Interviniente'
				        		                    	})
				        	                    	}
				                                }
				                            ]
				                        }
				                    ]
				                }
			                ]
		    			}
		            ]
		        }
		    ]
			,
		    	buttons:[
		    		{
		    			text:'Grabar',
		    			handler:function(){
		    				
		    				
		    				
		    				
		    				var form = Ext.getCmp('formIncidencia').getForm();
		    				
		    				if(form.isValid()){
		    					var thisWin = Ext.getCmp('win-form-registro');
		    					thisWin.body.mask('Espere un momento por favor.');
//		    					var incidencia = form.getValues();
		    					var incidencia =  new Object();
//		    					if(!Ext.isEmpty(incidencia.horaLlamadaVoxiva)){
//		    						incidencia.horaLlamadaVoxiva = incidencia.horaLlamadaVoxiva+' '+incidencia.horaIncidencia;
//		    					}
//		    					if(!Ext.isEmpty(incidencia.fechaHoraAtencionVoxiva)){
//		    						incidencia.fechaHoraAtencionVoxiva = incidencia.fechaHoraAtencionVoxiva+' '+incidencia.horaAtencion;
//		    					}
		    					
		    					//"-12.119222207483535 -77.03141212463379"
		    						
		    					//if(!Ext.isEmpty(incidencia.coordenadas)){
		    					if(incidencia.coordenadas){
		    						incidencia.latitud = incidencia.coordenadas.split(' ')[0];
		    						incidencia.longitud = incidencia.coordenadas.split(' ')[1];
		    					}
		    					console.log("incidencia");
		    					console.log(incidencia);
		    					
		    					console.log("idIncidencia");
		    					console.log(incidencia.idIncidencia);
//								incidencia.desEstadoVoxiva = Ext.getCmp('cbxEstado').getRawValue();
//								incidencia.desSubEstadoVoxiva = Ext.getCmp('cbxSubEstado').getRawValue();
//								incidencia.desEstadoCalifVoxiva = Ext.getCmp('cbxEstadosCalif').getRawValue();
//								incidencia.direccionFinal = Ext.getCmp('tipoCasoVoxiva').getRawValue();
		    					
		    					if(Ext.getCmp('idIncidencia').getValue()!=null){ 
		    						incidencia.idIncidencia = Ext.getCmp('idIncidencia').getValue();
		    					}
		    					if(Ext.getCmp('cbxUnidad').getValue()!=null){
		    						incidencia.codUnidad = Ext.getCmp('cbxUnidad').getValue();
		    					}
		    					if(Ext.getCmp('cbxCaso').getValue()!=null){
		    						incidencia.codCaso = Ext.getCmp('cbxCaso').getValue();
		    					}
		    					if(Ext.getCmp('cbxSubCaso').getValue()!=null){
		    						incidencia.codSubcaso = Ext.getCmp('cbxSubCaso').getValue();
		    					}
		    					if(Ext.getCmp('txtNombReport').getValue()!=null){
		    						incidencia.nombReport = Ext.getCmp('txtNombReport').getValue();
		    					}
		    					if(Ext.getCmp('txtTelfReport').getValue()!=null){
		    						incidencia.telfReport = Ext.getCmp('txtTelfReport').getValue();		    					
		    					}
		    					if(Ext.getCmp('coordenadas').getValue()!=null){
		    						incidencia.coordenadas = Ext.getCmp('coordenadas').getValue();
		    					}
		    					if(Ext.getCmp('txtDireccion').getValue()!=null){
		    						incidencia.direccion2 = Ext.getCmp('txtDireccion').getValue();
		    					}
//		    					if(Ext.getCmp('fecEvento').getValue()!=null){
//		    						incidencia.fecEvento = Ext.getCmp('fecEvento').getValue();
//		    					}
		    					if(Ext.getCmp('horEvento').getValue()!=null){
		    						incidencia.horEvento = Ext.getCmp('horEvento').getValue();
		    					}
//		    					if(Ext.getCmp('fecAtencion').getValue()!=null){
//		    						incidencia.fecAtencion = Ext.getCmp('fecAtencion').getValue();
//		    					}
		    					if(Ext.getCmp('horAtencion').getValue()!=null){
		    						incidencia.horAtencion = Ext.getCmp('horAtencion').getValue();
		    					}
		    					if(Ext.getCmp('cbxSeveridad').getValue()!=null){
		    						incidencia.codSeveridad = Ext.getCmp('cbxSeveridad').getValue();
		    					}
		    					if(Ext.getCmp('cbxEstado').getValue()!=null){
		    						incidencia.codEstado = Ext.getCmp('cbxEstado').getValue();
		    					}
		    					if(Ext.getCmp('cbxSubEstado').getValue()!=null){
		    						incidencia.codSubestado = Ext.getCmp('cbxSubEstado').getValue();
		    					}
		    					if(Ext.getCmp('cbxModalidad').getValue()!=null){
		    						incidencia.codModalidad = Ext.getCmp('cbxModalidad').getValue();
		    					}
		    					if(Ext.getCmp('txtMotivo').getValue()!=null){
		    						incidencia.motivo = Ext.getCmp('txtMotivo').getValue();
		    					}
		    					if(Ext.getCmp('cbxTpoHallazgo').getValue()!=null){
		    						incidencia.tpoHallazgo = Ext.getCmp('cbxTpoHallazgo').getValue();
		    					}
//		    					if(){
//		    						incidencia.descSospechoso = Ext.getCmp('').getValue();
//		    					}
//		    					if(){
//		    						incidencia.estReg = Ext.getCmp('').getValue();
//		    					}
//		    					if(){
//		    						incidencia.fecCreacion = Ext.getCmp('').getValue();
//		    					}
//		    					if(){
//		    						incidencia.fecCierre = Ext.getCmp('').getValue();
//		    					}
		    					
		    					console.log("incidencia.direccion2");
		    					console.log(incidencia.direccion2);
		    					
		    					incidencia.cdra = Ext.getCmp('txtCuadra').getValue();
		    					incidencia.dpto = Ext.getCmp('txtDpto').getValue();
		    					incidencia.zona = Ext.getCmp('txtZona').getValue();
		    					incidencia.subzona = Ext.getCmp('txtSubZona').getValue();
		    					incidencia.descripcion2 = Ext.getCmp('txtDetalle').getValue();
		    					
//		    					if (Ext.getCmp('cbxUnidad').getValue()==null
//		    							|| Ext.getCmp('cbxCaso').getValue()==null  )
//	    						{
//	    							alert("Especifique la incidencia. Al menos 'Unidad de atención' y 'Tipo de caso'");
//	    						}else if (Ext.getCmp('txtNombReport').getValue()==null
//		    							|| Ext.getCmp('txtTelfReport').getValue()==null  )
//	    						{
//	    							alert("Por favor, indique el nombre y telefono del reportante");
//	    						}else if (Ext.getCmp('coordenadas').getValue()==null )
//	    						{
//	    							alert("Por favor, verifique o vuelva a mapear la dirección de la incidencia");
//	    						}
//		    					console.log('incidencia.latitud = '+incidencia.latitud);
//		    					console.log('incidencia.longitud = '+incidencia.longitud);
//
//		    					console.log('incidencia.codUnidad = '+incidencia.codUnidad);
//		    					console.log('incidencia.codCaso = '+incidencia.codCaso);
//		    					console.log('incidencia.codSubcaso = '+incidencia.codSubcaso);
//		    					console.log('incidencia.nombReport = '+incidencia.nombReport);
//		    					console.log('incidencia.telfReport = '+incidencia.telfReport);
//		    					console.log('incidencia.coordenadas = '+incidencia.coordenadas);
//		    					console.log('incidencia.direccion = '+incidencia.direccion);
//		    					console.log('incidencia.cdra = '+incidencia.cdra);
//		    					console.log('incidencia.dpto = '+incidencia.dpto);
//		    					console.log('incidencia.zona = '+incidencia.zona);
//		    					console.log('incidencia.subzona = '+incidencia.subzona);
//		    					console.log('incidencia.descripcion = '+incidencia.descripcion);
//
		    					
//		    					if(Ext.isEmpty(Ext.getCmp('coordenadas').getValue())){
//		    						//mensaje seleccione ubicacion
//		    						console.log
//		    					}else{
//		    						
//		    						
//		    						
//		    					}
		    					
//		    					
//		    					console.log("incidencia");
//		    					console.log(incidencia);
//		    					
//		    					var rowsInterviniente = Ext.getCmp('tbInterv').getStore().getRange();
//		    					var rowsInvolucrado = Ext.getCmp('tbInvoluc').getStore().getRange();
//		    					
//		    					console.log("rowsInterv");
//		    					console.log(rowsInterviniente);
//		    					
//		    					console.log("rowsInvoluc");
//		    					console.log(rowsInvolucrado);
		    					
		    					
//								
		    					
		    					var listInterv = Ext.getCmp('tbInterv');
//		    					
//		    					
//		    					
//		    					console.log("listInterv");
//		    					console.log(listInterv.store.data.items);
		    					Ext.each(listInterv.store.data.items, function(v,k){
//		    						incidencia['intervinientes['+k+'].codInterv'] = 0;
		    						console.log("["+k+"] v.data.index: "+v.data.index);
		    						if (v.data.codInterv!=null){
		    							incidencia['intervinientes['+k+'].codInterv'] = v.data.codInterv;
		    						}
		    						if (incidencia.idIncidencia!=null){
		    							incidencia['intervinientes['+k+'].codincidencia'] = incidencia.idIncidencia;
		    						}
		    						incidencia['intervinientes['+k+'].tpoInterv'] = v.data.codTpoFuerza;
		    						incidencia['intervinientes['+k+'].descPuesto'] = v.data.descPuesto;
//		    						incidencia['intervinientes['+k+'].tpoPuesto'] = v.data.descPuesto;
		    						incidencia['intervinientes['+k+'].apoyo'] = v.data.nombInterv;
//		    						params['intervinientes['+k+'].apoyo'] = v.data.descApoyo;	---FALTA APOYO EN LA TABLA
		    					});
//		    					
		    					
		    					var listInvoluc = Ext.getCmp('tbInvoluc');
		    					
		    					Ext.each(listInterv.store.data.items, function(v,k){
//		    						incidencia['involucrados['+k+'].codInvolucrado'] = v.data.index; ----SE GENERA EN EL MAPPER
		    						if (v.data.codInvolucrado!=null){
		    							incidencia['intervinientes['+k+'].codInvolucrado'] = v.data.codInvolucrado;
		    						}
		    						if (incidencia.idIncidencia!=null){
		    							incidencia['involucrados['+k+'].codincidencia'] = incidencia.idIncidencia;
		    						}
		    						incidencia['involucrados['+k+'].tpoInvolucrado'] = v.data.codTpoInvoluc;
		    						incidencia['involucrados['+k+'].nombre'] = v.data.nombre;
		    						incidencia['involucrados['+k+'].edad'] = v.data.edad;
		    						incidencia['involucrados['+k+'].tpoDoc'] = v.data.codTpoDoc;   //----FALTA CODTPIDOC EN LA TABLA
		    						incidencia['involucrados['+k+'].numDoc'] = v.data.numDoc;
//		    						incidencia['involucrados['+k+'].caracteristicas'] = v.data.caracteristicas;   --FALTA CARACTERISTICAS NE LA TABLA
		    					});
		    					console.log("params-incidencia");
		    					console.log(incidencia);
		    					
		    					
		    					
		    					Util.runAjax({
									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-form-mapa',
									async : true,
									method : 'POST',
									params:incidencia,
									success:function(http){
										var response = Ext.decode(http.responseText);
										thisWin.body.unmask();
										alert("El incidencia ha sido registrada");
										if($("#map-canvas").length){
					    					console.log("existe");
	    									MapaIncidencias.ajaxVoxiva();
					    				}else{
					    					console.log("no existe");
					    					IncidenciaService.buscar2();
					    				}
										thisWin.close();
										
									}
								});
		    				}
		    				
		    				// ESTE SI FUNCIONA
//		    				if(form.isValid()){
//		    					var thisWin = Ext.getCmp('win-form-registro');
//		    				// thisWin.body.mask('Espere un momento por
//							// favor.');
//		    					var incidencia = form.getValues();
//// if(!Ext.isEmpty(incidencia.horaLlamadaVoxiva)){
//// incidencia.horaLlamadaVoxiva = incidencia.horaLlamadaVoxiva+'
//// '+incidencia.horaIncidencia;
//// }
//// if(!Ext.isEmpty(incidencia.fechaHoraAtencionVoxiva)){
//// incidencia.fechaHoraAtencionVoxiva = incidencia.fechaHoraAtencionVoxiva+'
//// '+incidencia.horaAtencion;
//// }
//// if(!Ext.isEmpty(incidencia.cordenadas)){
//// incidencia.latitud = incidencia.cordenadas.split(' ')[0];
//// incidencia.longitud = incidencia.cordenadas.split(' ')[1];
//// }
//// incidencia.desEstadoVoxiva = Ext.getCmp('cbxEstado').getValue();
//// incidencia.desSubEstadoVoxiva = Ext.getCmp('cbxSubEstado').getValue();
//// incidencia.desEstadoCalifVoxiva = Ext.getCmp('cbxEstadosCalif').getValue();
//// incidencia.direccionFinal = Ext.getCmp('tipoCasoVoxiva').getValue();
//		    					// incidencia.codGeometria =
//								// Ext.getCmp('').getValue();
//// incidencia.codMedio = Ext.getCmp('').getValue();
//// incidencia.codSituacion = Ext.getCmp('').getValue();
//
//		    					
//		    					incidencia.codUnidad = Ext.getCmp('cbxUnidad').getValue();
//		    					incidencia.codCaso = Ext.getCmp('cbxCaso').getValue();
//		    					incidencia.codSubcaso = Ext.getCmp('cbxSubCaso').getValue();
//		    					incidencia.nombReport = Ext.getCmp('txtNombReport').getValue();
//		    					incidencia.telfReport = Ext.getCmp('txtTelfReport').getValue();		    					
//		    					incidencia.coordenadas = Ext.getCmp('coordenadas').getValue();
//		    					incidencia.direccion = Ext.getCmp('txtDireccion').getValue();
//		    					incidencia.cdra = Ext.getCmp('txtCuadra').getValue();
//		    					incidencia.dpto = Ext.getCmp('txtDpto').getValue();
//		    					incidencia.zona = Ext.getCmp('txtZona').getValue();
//		    					incidencia.subzona = Ext.getCmp('txtSubZona').getValue();
//		    					incidencia.descripcion = Ext.getCmp('txtDetalle').getValue();
//		    					
////		    					var paramsFormTop = Util.serialize('nuevoProcesoForm');
////		    					var paramsGrid = Ext.getCmp('gridBandejaEtapaProceso');
////
//////		    					var listaResponsables = PROCESO.service.actions.getListIntegrantes(Ext.getCmp('panelResponsable'));
////		    					var ideResponsable = Ext.getCmp('ideResponsable').getValue();
////		    					var ideAprobador = Ext.getCmp('ideAprobador').getValue();
////
////		    					var params = new Object();
////		    					params['numAnio']=paramsFormTop.anio;
////		    					params['ideTipoTramite']=paramsFormTop.ideTipoTramite;
////		    					params['desCodigo']=paramsFormTop.codTramite;
////		    					params['desBaseLegal']=paramsFormTop.desBase;
////		    					params['desNota']=paramsFormTop.desNota;
////		    					
////		    					var registro = form.getValues();
////		    					if(Ext.getCmp('cbxUnidad').getValue()){
////		    						params['incidencia.codUnidad'] = Ext.getCmp('cbxUnidad').getValue();
////		    					}
////		    					if(Ext.getCmp('cbxCaso').getValue()){
////		    						params['incidencia.codCaso'] = Ext.getCmp('cbxCaso').getValue();
////		    					}
////		    					if(Ext.getCmp('cbxSubCaso').getValue()){
////		    						params['incidencia.codSubcaso'] = Ext.getCmp('cbxSubCaso').getValue();
////		    					}
////		    					if(Ext.getCmp('txtNombReport').getValue()){
////		    						params['incidencia.nombReport'] = Ext.getCmp('txtNombReport').getValue();
////		    					}
////		    					if(Ext.getCmp('txtTelfReport').getValue()){
////		    						params['incidencia.telfReport'] = Ext.getCmp('txtTelfReport').getValue();
////		    					}
////		    					if(Ext.getCmp('coordenadas').getValue()){
////		    						params['incidencia.coordenadas'] = Ext.getCmp('coordenadas').getValue();
////		    					}
////		    					if(Ext.getCmp('txtDireccion').getValue()){
////		    						params['incidencia.direccion'] = Ext.getCmp('txtDireccion').getValue();
////		    					}
////		    					if(Ext.getCmp('txtCuadra').getValue()){
////		    						params['incidencia.cdra'] = Ext.getCmp('txtCuadra').getValue();
////		    					}
////		    					if(Ext.getCmp('txtDpto').getValue()){
////		    						params['incidencia.dpto'] = Ext.getCmp('txtDpto').getValue();
////		    					}
////		    					if(Ext.getCmp('txtZona').getValue()){
////		    						params['incidencia.zona'] = Ext.getCmp('txtZona').getValue();
////		    					}
////		    					if(Ext.getCmp('txtSubZona').getValue()){
////		    						params['incidencia.subzona'] = Ext.getCmp('txtSubZona').getValue();
////		    					}
////		    					if(Ext.getCmp('txtDetalle').getValue()){
////			    					registro.incidencia.descripcion = Ext.getCmp('txtDetalle').getValue();
////		    					}
////		    					if(Ext.getCmp('fecEvento').getValue()){
////		    						params['registro.incidencia.fecEvento'] = Ext.getCmp('fecEvento').getRawValue();	    						
////			    					}
////		    					if(Ext.getCmp('fecAtencion').getValue()){
////		    						params['incidencia.fecAtencion'] = Ext.getCmp('fecAtencion').getRawValue();	
////			    					}
////		    					if(Ext.getCmp('horEvento').getValue()){
////		    						params['incidencia.horEvento'] = Ext.getCmp('horEvento').getValue();
////		    					}
////		    					if(Ext.getCmp('horAtencion').getValue()){
////			    					params['incidencia.horAtencion'] = Ext.getCmp('horAtencion').getValue();
////		    					}
////			    				if(Ext.getCmp('horEvento').getValue()){
////			    					params['incidencia.codSeveridad'] = Ext.getCmp('cbxSeveridad').getValue();
////			    				}
////			    				if(Ext.getCmp('cbxEstado').getValue()){
////			    					params['incidencia.codEstado'] = Ext.getCmp('cbxEstado').getValue();
////			    				}
////			    				if(Ext.getCmp('cbxSubEstado').getValue()){
////			    					params['.incidencia.codSubestado'] = Ext.getCmp('cbxSubEstado').getValue();
////			    				}
////			    				if(Ext.getCmp('cbxModalidad').getValue()){
////			    					params['incidencia.codModalidad'] = Ext.getCmp('cbxModalidad').getValue();
////			    				}
////			    				if(Ext.getCmp('txtMotivo').getValue()){
////			    					params['incidencia.motivo'] = Ext.getCmp('txtMotivo').getValue();
////			    				}
////			    				if(Ext.getCmp('cbxTpoHallazgo').getValue()){
////			    					params['incidencia.tpoHallazgo'] = Ext.getCmp('cbxTpoHallazgo').getValue();
////			    				}
////		    					
////		    					var listInterv = Ext.getCmp('tbInterv');
////		    					
////		    					Ext.each(listInterv.store.data.items, function(v,k){
//////		    						params['rowsInterviniente['+k+'].codInterv'] = v.data.index;
//////		    						params['rowsInterviniente['+k+'].codIncidencia'] = v.data.ideEtapa;
////		    						params['rowsInterviniente['+k+'].tpoInterv'] = v.data.codTpoFuerza;
////		    						params['rowsInterviniente['+k+'].tpoInterv'] = v.data.descPuesto;
////		    						params['rowsInterviniente['+k+'].tpoPuesto'] = v.data.descPuesto;
////		    						params['rowsInterviniente['+k+'].nombFuerza'] = v.data.nombInterv;
//////		    						params['rowsInterviniente['+k+'].apoyo'] = v.data.descApoyo;	---FALTA APOYO EN LA TABLA
////		    					});
////		    					
////		    					var listInvoluc = Ext.getCmp('tbInvoluc');
////		    					
////		    					Ext.each(listInterv.store.data.items, function(v,k){
//////		    						params['rowsInvolucrado['+k+'].codInvolucrado'] = v.data.index; ----SE GENERA EN EL MAPPER
//////		    						params['rowsinvolucrado['+k+'].codincidencia'] = v.data.in???;
////		    						params['rowsInvolucrado['+k+'].tpoInvolucrado'] = v.data.tpoInvolucrado;
////		    						params['rowsInvolucrado['+k+'].nombre'] = v.data.nombre;
////		    						params['rowsInvolucrado['+k+'].edad'] = v.data.edad;
//////		    						params['rowsInvolucrado['+k+'].tpoDoc'] = v.data.descApoyo;   ----FALTA CODTPIDOC EN LA TABLA
////		    						params['rowsInvolucrado['+k+'].numDoc'] = v.data.numDoc;
//////		    						params['rowsInvolucrado['+k+'].caracteristicas'] = v.data.caracteristicas;   --FALTA CARACTERISTICAS NE LA TABLA
////		    					});
//		    					
//		    					console.log("incidencia");
//		    					console.log(incidencia);
//		    					
//		    					var rowsInterviniente = Ext.getCmp('tbInterv').getStore().getRange();
//		    					var rowsInvolucrado = Ext.getCmp('tbInvoluc').getStore().getRange();
//		    					
//		    					console.log("rowsInterv");
//		    					console.log(rowsInterviniente);
//		    					
//		    					console.log("rowsInvoluc");
//		    					console.log(rowsInvolucrado);
//		    					
////		    					COMENTADO TEMPORALMENTE
//		    					Util.runAjax({
//									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-incidencia',
//									async : true,
//									method : 'POST',
//									params:incidencia,
//									success:function(http){
//										console.log(http)
//									// var response =
//									// Ext.decode(http.responseText);
//										// thisWin.body.unmask();
//										IncidenciaService.buscar2();
//										thisWin.close();
//										
//									}
//								});
//		    					
////		    					Util.runAjax({
////									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-incidencia2',
////									async : true,
////									method : 'POST',
////									params: {incidencia, rowsInterviniente, rowsInvolucrado}, 
////									success:function(http){
////										console.log(http)
////									// var response =
////									// Ext.decode(http.responseText);
////										// thisWin.body.unmask();
////										IncidenciaService.buscar2();
////										thisWin.close();
////										
////									}
////								});
//		    					
////		    					Util.runAjax({
////									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-incidencia4',
////									async : true,
////									method : 'POST',
////									params: registro, 
////									success:function(http){
////										console.log(http)
////									// var response =
////									// Ext.decode(http.responseText);
////										// thisWin.body.unmask();
////										IncidenciaService.buscar2();
////										thisWin.close();
////										
////									}
////								});
//		    					
//		    				}
		    			}
		    		}
		    		,
		    		{
		    			text:'Cancelar',
		    			handler:function(){
		    				Ext.getCmp('win-form-registro').close();
		    			}
		    		}
		    ]
	
		}).show();
		
		
//		console.log(options);
//		console.log("options");
//		if(options.record && options.record.cod_incidencia){
//			setTimeout(function(){ 
//				//thisForm=Ext.getCmp('formIncidencia').getForm();
//				//thisForm.loadRecord(options.record);
//				Ext.getCmp('txtNombReport').setValue(options.record.nomb_report);
//				Ext.getCmp('txtTelfReport').setValue(options.record.telf_report);		    					
//				Ext.getCmp('coordenadas').setValue(options.record.coordenadas);
//				Ext.getCmp('txtDireccion').setValue(options.record.direccion);
//				Ext.getCmp('txtCuadra').setValue(options.record.cdra);
//				Ext.getCmp('txtDpto').setValue(options.record.dpto);
//				Ext.getCmp('txtZona').setValue(options.record.zona);
//				Ext.getCmp('txtSubZona').setValue(options.record.subzona);
////				Ext.getCmp('txtDetalle').setValue(options.record.descripcion);
////				Ext.getCmp('fecEvento').setRawValue(options.record.fec_evento);	    						
////				Ext.getCmp('fecAtencion').setRawValue(options.record.fec_atencion);	
////				Ext.getCmp('horEvento').setValue(options.record.hor_evento);
////				Ext.getCmp('horAtencion').setValue(options.record.hor_atencion);
////				Ext.getCmp('cbxSeveridad').setValue(options.record.cod_severidad); 	
////				Ext.getCmp('cbxEstado').setValue(options.record.cod_estado); 			 
////				Ext.getCmp('cbxSubEstado').setValue(options.record.cod_subestado); 	
////				Ext.getCmp('cbxModalidad').setValue(options.record.cod_modalidad);		
////				Ext.getCmp('txtMotivo').setValue(options.record.motivo);
////				Ext.getCmp('cbxTpoHallazgo').setValue(options.record.tpo_hallazgo);
//				
//			}, 1000);	
//		}
//		
		
	}


	
}


window.onload = function(){

	IncidenciaService.init();
	
}

