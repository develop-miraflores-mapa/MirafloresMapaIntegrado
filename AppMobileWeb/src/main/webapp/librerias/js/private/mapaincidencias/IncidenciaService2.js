Ext.ns('IncidenciaService');

////LISTA DE UNIDAD
//var SEGURIDAD_CIUDADANA = 1;
//var FISCALIZACION = 2;
//var SEGURIDAD_VIAL = 3;
//var DESARROLLO_HUMANO = 4;
//var DEFENSA_CIVIL = 5;
//var APOYO_AL_TURISTA = 6;
//
////LISTA DE CASO
//var ACCIDENTES_DE_TRANSITO = 1;
//var HECHOS_CONTRA_EL_PATRIMONIO = 2;
//var HECHOS_CONTRA_LA_VIDA_EL_CUERPO_Y_LA_SALUD = 3;
//var HECHOS_CONTRA_LA_LIBERTAD = 4;
//var HECHOS_CONTRA_LA_SEGURIDAD_PUBLICA = 5;
//var APOYO_AL_CONTRIBUYENTE = 6;
//var SOSPECHOSOS = 7;
//var OPERATIVOS = 8;
//var INFRACCION_MUNICIPALES = 9;
//var VEHICULOS_MAL_ESTACIONADOS = 10;
//var VEHICULOS_APARENTEMENTE_ABANDONADOS = 11;
//var PARADERO_INFORMAL = 12;
//var TRANSPORTE_PUBLICO_FUERA_DE_RUTA = 13;
//var HALLAZGO_DE_VEHICULO = 14;
//var CONGESTION_VEHICULAR = 15;
//var SEMAFOROS_INOPERATIVOS = 16;
//var VIOLENCIA_FAMILIAR = 17;
//var ATENCION_A_ORATE = 18;
//var ACTO_DE_RIESGO = 19;
//var DESASTRES_NATURALES = 20;
//var DERRUMBE = 21;
//var AFORO = 22;
//var ORIENTACION = 23;
//var APOYO_MEDICO = 24;
//var ORATES = 25;
//var SITUACION_PRECARIA = 26;
//var REDUCCION_DE_PATRIMONIO = 27;
//var LIBADORES_EN_VIA_PUBLICA = 28;
//
////LISTA DE SUBCASOS
//var ATROPELLO = 1;
//var CHOQUE = 2;
//var DESPISTE = 3;
//var INCENDIO_DE_VEHICULOS = 4;
//var VOLCADURA = 5;
//var INCIDENCIA_DELICTIVA = 6;
//var OTROS = 7;
//var HALLAZGO_DE_CADAVER = 8;
//var VENTA_DE_DROGAS = 9;
//var CONSUMO_DE_DROGAS = 10;
//var SUICIDIO = 11;
//var VIOLENCIA_SEXUAL = 12;
//var ACOSO_CALLEJERO = 13;
//var OFENSA_AL_PUDOR = 14;
//var TRATA_DE_PERSONAS = 15;
//var SECUESTRO = 16;
//var RAPTO = 17;
//var CONSUMO_DE_LICOR_EN_LA_VIA_PUBLICA = 18;
//var DESORDEN_EN_LA_VIA_PUBLICA = 19;
//var PERTURBACION_VECINAL = 20;
//var AUXILIO_MECANICO = 21;
//var AUXILIO_MEDICO = 22;
//var CONSULTAS = 23;
//var OTROS_APOYO = 24;
//var PERSONAS_SOSPECHOSAS = 25;
//var VEHICULOS_SOSPECHOSOS = 26;
//var ORDEN_PUBLICO = 27;
//var RUIDOS_MOLESTOS = 28;


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
											
											//console.log(response);
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
		
		//console.log('options');
		//console.log(options);
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
													//console.log(response);	
													var data = response.data;
													Ext.getCmp('medioIngreso').setValue(data.medioIngreso);
													Ext.getCmp('tipoCasoVoxiva').setValue(data.tipoCasoVoxiva);
													var tipoCaso = Ext.getCmp('tipoCasoVoxiva').displayTplData[0];
													//console.log(tipoCaso);	
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
		    							
		    							//Uso del componenete -->
		    							Util.windowGeoreferenciaPunto({
				                			width:600,
				                			height:600,
				                			idCanvasMap:'mapa-incidencia-geo',
				                			idCordenadas:'cordenadas',
				                			fnGrabar:function(punto,direccionData){
				                				//console.log('direccionData');
				                				//console.log(direccionData);
				                				Ext.getCmp('cordenadas').setValue(punto.lat+' '+punto.lng);
					                			//if(direccionData && direccionData.toponimia){
					                			//	Ext.getCmp('direccionIncidencia').setValue(direccionData.toponimia); 
					                			//}
				                				$.ajax({
				                					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
				     							    dataType: "json",
				     							    data:{latitud:punto.lat,longitud:punto.lng},
				     							    success: function( response ) {
				     							    	console.log(response);
				     							    	var result = response.result || [];
				     							    	if(result.length>0){
				     							    		var name = result[0];
				     							    		Ext.getCmp('direccionIncidencia').setValue(name.names[1]?name.names[1]:name.names[0]);
				     							    	}
				     							    }
				                				});
				                				IncidenciaService.setZonaSubZona(punto.lng+' '+punto.lat);
				                			}
				                		});
				                		//<-- end uso componente
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
		    						allowBlank:false
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
		    						labelStyle:'text-align:right;'
		    					}
		    					,
		    					{
		    						xtype:'datefield',
		    						width:260,
		    						fieldLabel:'Fecha Atención',
		    						labelWidth : 105,
		    						name:'fechaHoraAtencionVoxiva',
		    						format: 'd-m-Y',
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
		
		//listEstadoCalifica
		if(!Ext.isEmpty(Ext.getCmp('txt-incidencia').getValue())){
			params.incidenciaPresentada	= Ext.getCmp('txt-incidencia').getValue();
		}
		if(!Ext.isEmpty(Ext.getCmp('txt-fecha').getValue())){
		}
		if(!Ext.isEmpty(Ext.getCmp('cbxEstadosCalifStore').getValue())){
			//params.dni	= Ext.getCmp('txt-dni').getValue();
			Ext.each(Ext.getCmp('cbxEstadosCalifStore').getValue(),function(value,i){
				params['listEstadoCalifica['+i+']'] = value;
			});
		}
		if(!Ext.isEmpty(Ext.getCmp('medioIngresoSearch').getValue())){
			//params.dni	= Ext.getCmp('txt-dni').getValue();
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
		    	 
		    	 'codIncidencia','codUnidad','codCaso','codSubcaso','codMedio','codSituacion','codModalidad','codEstado',
		    	 'codSubestado','codSeveridad','codPosicion','codTipoHallazgo','nombReportante','telfReportante','dirIncidencia',
		    	 'cdraIncidencia','dptoIncidencia','zona','subZona','fecIncidencia','fecReporte','fecAtencion','fecCierre','detalle',
		    	 'flgIntervenido','flgOcupante','flgHallazgo','flgIdentificado','flgSexo','estReg'
		    	 
//		    	 'accionesIncidencia','calle','cuadraEvento','desCallles','desTipoIncidencia','descripcion','detalleGeometria','direccionFinal','direccionIncidencia'
//		    	 ,'dniRecepcionaIncidencia','estado','fecHoraFin','fecHoraInicio','horaLlamadaVoxiva','idCasoVoxiva','idDispositivo','idEvento','idIncidencia','idPreRegistro','idTipoVia'
//		    	 ,'idTipoViaCatastro','idUsuarioSesion','idVia','idViaCatastro','incidenciaPresentada','latitud','lineas','longitud','medioIngreso','nombreCalleFin','nombreCalleInicio','nombreRecepcionaIncidencia'
//		    	 ,'nombreReportaIncidencia','nombreTipoEvento','nroCasoVoxiva','severidad','strFecFin','strFecIni','subTipo','subTipoCasoVoxiva','telefReportaIncidencia','tipo','tipoCasoVoxiva','tipoCierre','tipoDireccion'
//		    	 ,'tipoEvento','tipoIncidencia','visible'
//		    	 ,'accionesIncidencia',
//		    	 {
//		    		 name:'desMedioIngreso'
//		    			,mapping:'desMedioIngreso'
//	    				,convert:function(v){
//	    					 if(v=='VOXIVA_MAP'){
//	    						 v= 'VOXIVA';
//	    					 }
//	    				return v;
//		    		 }
//			     }
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
					url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-incidencias',
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
				}
			});
			
		var grid = Ext.create('Ext.grid.Panel', {
		    store: store,
		    renderTo:'render',
		    title:'Administración de Incidencias',
		    id:'grid-incidencias',
		    border:true,
		    columns: [
		        { text: 'Id Incidencia',  dataIndex: 'codIncidencia' ,hidden:true },
		        { text: 'Medio Ingreso',  dataIndex: 'codMedio', width : 120   },
		        { text: 'Estado',  dataIndex: 'codSituacion', width : 180   },
		        { text: 'Fecha de Incidencia',  dataIndex: 'fecIncidencia' , width : 150 },
		        { text: 'Unidad de atención',  dataIndex: 'codUnidad' , flex : 1},
		        { text: 'Tipo de caso',  dataIndex: 'codCaso' , flex : 1},
		        { text: 'Tipo de sub-caso',  dataIndex: 'codSubcaso' , flex : 1},
		        { text: 'Descripción',  dataIndex: 'detalle' , flex : 1}
//		        ,
//		        {
//						            xtype:'actioncolumn',
//						       		width:50,
//						            align:'center',
//						            items: [{
//						            	
//						                icon: PATH_PROYECTO_BASE+'images/map_icon_16.png',
//						                tooltip: 'Ubicación',
//						                handler: function(grid, rowIndex, colIndex) {
//						                    var record = grid.getStore().getAt(rowIndex);
//						                    
//						                    
//						                    Ext.create('Ext.window.Window', {
//												    title: 'Ubicación Geográfica',
//												    height: 450,
//												    width: 500,
//												    modal:true,
//												    layout: 'fit',
//												    html:'<div id="canvas-map-ug" style="width:496px;height:404px;"></div>',
//												    listeners:{
//												    
//												    	afterrender:function(){
//												    	
//												    		var me = this;
//												    		
//												    		me.body.mask('Espere un moomento por favor.');
//												    		
//												  			Util.runAjax({
//																url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
//																params:{
//																	idIncidencia:record.data.idIncidencia
//																},
//																async : true,
//																method : 'POST',
//																success:function(http){
//																	var response = Ext.decode(http.responseText);
//																		
//									                        		me.body.unmask();
//									                        		var data = response.data;
//									                        		
//									                        		var detalleGeometria = {};
//									                        		
//									                        		if(data.detalleGeometria && data.detalleGeometria[0]){
//									                        		
//									                        			detalleGeometria = data.detalleGeometria[0]
//									                        			var geometria = detalleGeometria.geometria.split(' ');
//									                        			
//												                          var point = {lat: parseFloat(geometria[0]), lng: parseFloat(geometria[1])};
//																		  var map = new google.maps.Map(document.getElementById('canvas-map-ug'), {
//																		    zoom: 20,
//																		    center: point
//																		  });
//																		
//																		  var contentString = data.direccionIncidencia;
//																		
//																		  var infowindow = new google.maps.InfoWindow({
//																		    content: contentString
//																		  });
//																		
//																		  var marker = new google.maps.Marker({
//																		    position: point,
//																		    map: map
//																		  });
//																		  marker.addListener('click', function() {
//																		  	if(data.direccionIncidencia){
//																		    	infowindow.open(map, marker);
//																		  	}
//																		  });
//									                        			
//									                        		}
//									                        		
//																	
//																}
//															});
//												    		
//												    	}
//												    	
//												    }
//												}).show();
//																			                    
//						                    
//						                    
//						                }
//						            }]
//		        }
//			        ,
//			        {
//							            xtype:'actioncolumn',
//							       		width:50,
//							            align:'center',
//							            items: [{
//							            	
//							                icon: PATH_PROYECTO_BASE+'images/delete_16.png',
//							                tooltip: 'Eliminar',
//							                handler: function(grid, rowIndex, colIndex) {
//							                    var record = grid.getStore().getAt(rowIndex);
//							                    
//												Ext.Msg.confirm('Confirmar', '¿Seguro de eliminar el registro seleccionado?', function(btn, text){
//												    if (btn == 'yes'){
//												        
//												    	Util.runAjax({
//																	url:PATH_PROYECTO_BASE+'mapa-incidencia/eliminar-incidencia',
//																	params:{
//																		idIncidencia:record.data.idIncidencia
//																	},
//																	async : true,
//																	method : 'POST',
//																	success:function(http){
//																		var response = Ext.decode(http.responseText);
//																		
//																		IncidenciaService.buscar();
//										                        		
//																	}
//																});
//												    	
//												    }
//												});
//							                    
//							                    
//							                }
//							            }]
//			} 
							        
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
			            
//			            cbxMedios,
//			            
//			            cbxEstadosCalifStore,
//			            
//			            {
//			            	xtype:'textfield',
//			            	emptyText:'Incidencia',
//			            	id:'txt-incidencia',
//			            	listeners:{
//			            		specialkey : function(f, e) {
//									if (e.getKey() == e.ENTER) {
//										IncidenciaService.buscar();
//									}
//								}
//			            	}
//			            },
//			            {
//			            	xtype:'textfield',
//			            	emptyText:'DD-MM-YYYY HH:MM',
//			            	id:'txt-fecha',
//			            	listeners:{
//			            		specialkey : function(f, e) {
//									if (e.getKey() == e.ENTER) {
//										IncidenciaService.buscar();
//									}
//								}
//			            	}
//			            	
//			            },
//			            {
//	                    iconCls:'btnBuscarSmall'
//	                    ,handler:function(){
//		                    	IncidenciaService.buscar();
//		                    }	
//		                },
			              '->',
//		               {
//		            	  	text:'Nuevo'
//		                    ,id:'btnAddGeo'
//		                    ,iconCls:'btnAddSmall'
////			                    ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
//		                    ,handler:function(){
//		                    	IncidenciaService.openFormRegistro({
//		                    		title:'Registrar Usuario'
//		                    	});
//		                    }
//		                }
		                ,
		                {
		            	  	text:'NuevoForm'
		                    ,id:'btnAddGeo2'
		                    ,iconCls:'btnAddSmall'
//		                    ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
		                    ,handler:function(){
		                    	IncidenciaService.openFormRegistroNuevo({
		                    		title:'Registrar Incidencia'
		                    	});
		                    }
		                }
		                ,
//						{
//							iconCls : 'btnEditSmall',
//							text:'Editar',
//							id:'btnEditar',
//							disabled:true,
//							handler : function() {
//								
//								var record = Ext.getCmp('grid-incidencias').getSelectionModel().getSelection();
//								
//								//console.log("record");
//								//console.log(record);
//								
//								IncidenciaService.openFormRegistro({
//		                    		title:'Editar Inicidencia',
//		                    		idIncidencia: record[0].data.idIncidencia
//		                    	});
//							}
//						},
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
	

	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////																							////////////////
////////////////									NUEVA IMPLEMENTACION									////////////////
////////////////																							////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	resetAll: function(){
		Ext.getCmp('txtCarnetExt').setHidden(true);
		Ext.getCmp('cbxNacionalidad').setHidden(true);
		Ext.getCmp('txtDirecReport').setHidden(true);
		Ext.getCmp('txtCdraReport').setHidden(true);
		Ext.getCmp('cbxSeveridad').setHidden(true);
		Ext.getCmp('cbxEstado').setHidden(true);
		Ext.getCmp('cbxSubEstado').setHidden(true);
		Ext.getCmp('cbxModalidad').setHidden(true);
		Ext.getCmp('pnSospechoso').setHidden(true);
		Ext.getCmp('chkIdentificado').setHidden(true);
		Ext.getCmp('txtNmbSospechoso').setHidden(true);
		Ext.getCmp('txtEdadSospechoso').setHidden(true);
		Ext.getCmp('txtDniSospechoso').setHidden(true);
		Ext.getCmp('txtCaractSospechoso').setHidden(true);
		Ext.getCmp('cbxMotivo').setHidden(true);
		Ext.getCmp('cbxTpoHallazgo').setHidden(true);
		Ext.getCmp('cbxSexo').setHidden(true);
		Ext.getCmp('cbxAnimal').setHidden(true);
		Ext.getCmp('pnVehiculo').setHidden(true);
		Ext.getCmp('chkVehiculo').setHidden(true);
		Ext.getCmp('txtClase').setHidden(true);
		Ext.getCmp('txtMarca').setHidden(true);
		Ext.getCmp('txtModelo').setHidden(true);
		Ext.getCmp('txtPlaca').setHidden(true);
		Ext.getCmp('txtColor').setHidden(true);
		Ext.getCmp('txtAnio').setHidden(true);
		Ext.getCmp('chkOcupante').setHidden(true);
		Ext.getCmp('txtCantidad').setHidden(true);
		Ext.getCmp('chkIdentificado').setHidden(true);
		Ext.getCmp('chkIntervenido').setHidden(true);
		Ext.getCmp('pnInvolucrado').setHidden(true);
		Ext.getCmp('pnConductor').setHidden(true);
	},

	dinamizarFormulario: function(vUnidad, vCaso){
		IncidenciaService.resetAll();
		switch( vUnidad ) {
		case SEGURIDAD_CIUDADANA:
			switch( vCaso ) {
			case ACCIDENTES_DE_TRANSITO:
				Ext.getCmp('cbxSeveridad').setHidden(false);
				Ext.getCmp('pnInvolucrado').setHidden(false);
				Ext.getCmp('pnConductor').setHidden(false);
				break;
			case HECHOS_CONTRA_EL_PATRIMONIO:
				Ext.getCmp('cbxEstado').setHidden(false);
				Ext.getCmp('cbxSubEstado').setHidden(false);
				Ext.getCmp('cbxModalidad').setHidden(false);
				Ext.getCmp('chkIntervenido').setHidden(false);
				break;
			case HECHOS_CONTRA_LA_VIDA_EL_CUERPO_Y_LA_SALUD:
				Ext.getCmp('cbxTpoHallazgo').setHidden(false);
				break;
			case HECHOS_CONTRA_LA_LIBERTAD:
				Ext.getCmp('cbxMotivo').setHidden(false);
				Ext.getCmp('pnInvolucrado').setHidden(false);
//				Ext.getCmp('pnIntervenido').setHidden(false);
				break;
			case HECHOS_CONTRA_LA_SEGURIDAD_PUBLICA:
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
			break;
		case VENTA_DE_DROGAS:
			break;
		case CONSUMO_DE_DROGAS:
			break;
		case SUICIDIO:
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
			Ext.getCmp('cbxMotivo').setHidden(false);
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

	openFormBuscaPersona:function(options){
		options = options || {};
		hWin = 400;
		wWin = 600;
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    height: hWin,
		    width: wWin,
		    modal:true,
		    overflowY: 'scroll',
		    id:'win-form-buscaPersona',
		    layout: 'column',
		    //bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
			items: [
////				{
////                 	   id:'cbx-tipoDoc-busqueda',
////					   xtype:'ComboGeneric',
////	            	   root:'data',
////	            	   autoLoad:true,
////	            	   url:PATH_PROYECTO_BASE+'persona/listar-tipo-documento',
////	            	   queryMode: 'local',
////	            	   emptyText:'Tipo Documento',
////	            	   valueField:'idDocumento',
////	            	   displayField :'nombre',
////	            	   width:170,
////	            	   forceSelection:false,
////	            	   model:
////	            		   {
////	            		   	nameModel:'MTipoDoc'
////	            		   	,fields:['idDocumento','nombre'
////	            		   	]	
////	            		   }
////	            	  ,listeners:{
////	            	  	select:function(f,record){
////	            	  		
////	            	  		PersonaService.loadDataPersona();
////	            	  		
////	            	  		}
////	            	  }	   
////             	
////	             }
////	             
////	             ,
//	             
//	             {
//	            	 xtype:'textfield'
//	            	,emptyText:'Número de DNI'
//	            	,id:'txtNumeroDni'
//	            	,width:130	
//	        		,listeners:{
////	            		specialkey : function(f, e) {
////							if (e.getKey() == e.ENTER) {
////								PersonaService.loadDataPersona();
////							}
////						}
//	        		}
//	             },
//	               
//	             {
//	            	 xtype:'textfield'
//            		,emptyText:'Nombres y/o apellidos'
//            		,id:'txtNombPersona'
//	            	,width:150	
//            		,listeners:{
////	            		specialkey : function(f, e) {
////							if (e.getKey() == e.ENTER) {
////								PersonaService.loadDataPersona();
////							}
////						}
//	            	}
//               },
//	             
//	        {
//	             iconCls:'btnBuscarSmall'
//	             ,handler:function(){
//	             	PersonaService.loadDataPersona();
//	             }	
//	         },
				
				{
		            xtype: 'textfield',
                    id: 'txtNombPersona',
		            padding: '10 5 0 5',
		            width: 300,
		            fieldLabel: 'Nombres y/o Apellidos',
                    hideLabel: true,
                    ariaLabel: 'daa',
                    emptyText: 'Nombre y/o apellidos'
		        },
		        {
		            xtype: 'textfield',
		            padding: '10 5 0 5',
		            width: 120,
		            fieldLabel: 'Doc. Identidad',
		            labelAlign: 'top',
		            hideLabel: true,
		            ariaLabel: 'daa',
                    emptyText: 'Numero de DNI'
		        },
		        {
		            xtype: 'button',
		            height: 30,
		            margin: '10 5 0 5',
		            padding: '',
		            width: 80,
		            text: 'Buscar'
		        },
		        {
		            xtype: 'gridpanel',
		            height: 198,
		            padding: '20 10 0 10',
		            scrollable: 'vertical',
		            width: 580,
		            bodyBorder: true,
		            header: false,
		            overlapHeader: false,
		            title: 'Persona',
		            titleCollapse: false,
		            hideHeaders: false,
		            rowLines: false,
		            columns: [
		                {
		                    xtype: 'gridcolumn',
		                    width: 312,
		                    text: 'Nombre y Apellido'
		                },
//		                {
//		                    xtype: 'numbercolumn',
//		                    width: 95,
//		                    text: 'Edad'
//		                },
		                {
		                    xtype: 'gridcolumn',
		                    width: 150,
		                    text: 'Doc. Identidad'
		                }
		            ],
		            viewConfig: {
		                border: 'border: 5, style: {borderColer: \'black\', borderStyle: \'solid\'}',
		                height: 154,
		                width: 728
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
				
				//console.log(response);
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
	
	
	openFormRegistroNuevo:function(options){

		
		options = options || {};
		
		//Construccion de combo unidad
		var unidadModel = Ext.create('Ext.data.Model',{
			fields: [
		        {name: 'codUnidad',  type: 'int'},
		        {name: 'descUnidad',   type: 'string'},
		    ]
//		    ,proxy: {
//		        type: 'json',
//		        url : '/lista-unidad'
//		    }
		});
		
//		var unidadStore = Ext.create('Ext.data.Store', {
//			model: unidadModel,
//		    proxy: {
//		    	type: 'ajax',
//		    	url: '/lista-unidad',
//		        reader: {
//		        	type: 'json',
//		            rootProperty: 'users'
//		        }
//		    },
//		    autoLoad: true
////			fields: [],
////		    data : []
//		});

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

		
		var tpoHallazgoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"776", "name":"HUMANO"},
		        {"value":"777", "name":"ANIMAL"}
		    ]
		});
//		
		var maestroTipoModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codTipo',  type: 'int'},
				{name: 'codTpoPadre',  type: 'int'},
		        {name: 'descTipo',   type: 'string'},
		    ]
			});
		
		
//		
//		var subCasoStore = Ext.create('Ext.data.Store', {
//			fields: [],
//		    data : []
//		});		
			
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    height: 750,
		    width: 900,
		    modal:true,
		    scrollable: true,
		    id:'win-form-registro',
		    layout: 'column',
		    bodyStyle:'padding:10px 10px 0px 10px;',
		    items: [
		        {
		            xtype: 'form',
		            region: 'center',
		            layout: 'column',
//		            scrollable: true,
		            bodyPadding: 10,
//		            manageHeight: false,
//		            title: 'REGISTRO DE INCIDENCIA',
		            items: [
		                {
		                    xtype: 'form',
		                    id:'formEspecificacionIncidencia',
		                    height: 140,
		                    padding: '',
		                    width: 782,
		                    layout: 'column',
		                    items: [
		                        {
		                            xtype: 'label',
		                            dock: 'top',
		                            width: 413,
		                            text: 'Especificación de Incidencia'
		                        },
		                        {
		                        	id:'tipoUnidad',
//									allowBlank:false,
									xtype:'ComboGeneric',
//									xtype: 'combobox',
		                            id: 'cbxUnidad',
		                            margin: '10 10 0 10 ',
		                            width: 500,
		                            fieldLabel: 'Unidad de atención',
		                            labelWidth: 120,
		                            emptyText: 'Seleccione la unidad de atención',
		                            
		                            extraParams:{
//									   identificador:'VOX_CASO'
									},
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
//					            		{
//			            		   		nameModel:'CalleGeo',
//			            		   		fields:[
//			            		   			'ideGrupoElemento',
//			            		   			'ideGrupoElement1',
//			            		   			'desNombre',
//			            		   			'clvAbreviarGrupo',
//			            		   			'ref1',
//			            		   			'codEstado',
//					            		   	{
//					            		   		name:'displayValue',
//					            		   		mapping:'desNombre',
//					            		   		convert:function(v,record){
//					            		   			return v.split('_')[1];
//					            		   		}
//					            		   	}
//		            		   			]
//					            	}
//					            	proxy: {
//					    		    	type: 'ajax',
//					    		    	url: '/lista-unidad',
//					    		        reader: {
//					    		        	type: 'json',
//					    		            rootProperty: 'users'
//					    		        }
//					    		    }
					            	listeners:{
					            		select:function(f,record){
//					            	  		Ext.getCmp('cbxSubTipoCaso').reset();
					            	  		var vStoreCaso = Ext.getCmp('cbxCaso').store;
					            	  		vStoreCaso.removeAll();
					            	  		Ext.getCmp('cbxCaso').reset();
					            	  		Ext.getCmp('cbxSubCaso').reset();
					            	  		Ext.getCmp('cbxModalidad').reset();
//					            	  		Ext.getCmp('cbxCaso').setDisabled(true);
//					            	  		Ext.getCmp('cbxSubEstado').setDisabled(true);
					            	  		vStoreCaso.load({
            	  								params:{
            	  										cod:record.data.codUnidad
            									},
            	  								callback:function(){
//            	  									if(vStoreCaso.count()>0){
//            	  										Ext.getCmp('cbxCaso').setDisabled(false);
//            	  									} else {
//            	  										Ext.getCmp('cbxCaso').setDisabled(true);
//            	  									}
            	  								}		
            	  							});
					            		}
				            		}
		                        },
		                        {
		                            id: 'cbxCaso',
		                            xtype: 'ComboGeneric',
		                            margin: '5 10 0 10 ',
		                            width: 762,
		                            fieldLabel: 'Tipo de caso',
		                            labelWidth: 120,
		                            emptyText: 'Seleccione el tipo de caso',
		                            extraParams:{
									   cod: '-1'
									},
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
//					            		{
//			            		   		nameModel:'CalleGeo',
//			            		   		fields:[
//			            		   			'ideGrupoElemento',
//			            		   			'ideGrupoElement1',
//			            		   			'desNombre',
//			            		   			'clvAbreviarGrupo',
//			            		   			'ref1',
//			            		   			'codEstado',
//					            		   	{
//					            		   		name:'displayValue',
//					            		   		mapping:'desNombre',
//					            		   		convert:function(v,record){
//					            		   			return v.split('_')[1];
//					            		   		}
//					            		   	}
//		            		   			]
//					            	}
//					            	proxy: {
//					    		    	type: 'ajax',
//					    		    	url: '/lista-unidad',
//					    		        reader: {
//					    		        	type: 'json',
//					    		            rootProperty: 'users'
//					    		        }
//					    		    }
					            	listeners:{
					            		select:function(f,record){
//					            	  		Ext.getCmp('cbxSubTipoCaso').reset();
					            	  		var vStoreSubCaso = Ext.getCmp('cbxSubCaso').store;
					            	  		console.log(vStoreSubCaso);
					            	  		vStoreSubCaso.removeAll();
					            	  		Ext.getCmp('formDetalleIncidencia').reset();
					            	  		Ext.getCmp('cbxSubCaso').reset();
					            	  		Ext.getCmp('cbxModalidad').reset();
//					            	  		Ext.getCmp('cbxCaso').setDisabled(true);
//					            	  		Ext.getCmp('cbxSubEstado').setDisabled(true);
					            	  		//console.log("codCaso: "+record.data.codCaso);
					            	  		vStoreSubCaso.load({
            	  								params:{
            	  										cod:record.data.codCaso
            									},
            	  								callback:function(){
//            	  									if(vStoreCaso.count()>0){
//            	  										Ext.getCmp('cbxCaso').setDisabled(false);
//            	  									} else {
//            	  										Ext.getCmp('cbxCaso').setDisabled(true);
//            	  									}
            	  								}		
            	  							});
					            	  			var vUnidad = Ext.getCmp('cbxUnidad').getValue();
						            	  		var vCaso = Ext.getCmp('cbxCaso').getValue();
						            	  		console.log(vUnidad);
						            	  		console.log(vCaso);
						            	  		IncidenciaService.dinamizarFormulario(vUnidad, vCaso);
						            	  	
					            	  		
					            		},
					            		
				            		}
		                        },
		                        {
		                            id: 'cbxSubCaso',
		                            xtype: 'ComboGeneric',
		                            margin: '5 10 0 10 ',
		                            width: 762,
		                            fieldLabel: 'Sub-tipo de caso',
		                            labelWidth: 120,
		                            emptyText: 'Seleccione el tipo de sub-caso',
		                            extraParams:{
										   cod: '-1'
										},
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
//						            		{
//				            		   		nameModel:'CalleGeo',
//				            		   		fields:[
//				            		   			'ideGrupoElemento',
//				            		   			'ideGrupoElement1',
//				            		   			'desNombre',
//				            		   			'clvAbreviarGrupo',
//				            		   			'ref1',
//				            		   			'codEstado',
//						            		   	{
//						            		   		name:'displayValue',
//						            		   		mapping:'desNombre',
//						            		   		convert:function(v,record){
//						            		   			return v.split('_')[1];
//						            		   		}
//						            		   	}
//			            		   			]
//						            	}
//						            	proxy: {
//						    		    	type: 'ajax',
//						    		    	url: '/lista-unidad',
//						    		        reader: {
//						    		        	type: 'json',
//						    		            rootProperty: 'users'
//						    		        }
//						    		    }
					            	listeners:{
					            		
					            		select:function(f,record){
					            			var v = record.data.codSubcaso
					            			IncidenciaService.onChangeSubCaso(v);
//					            			Ext.getCmp('cbxMotivo').store.load();
					            			
//					            			if (record.data.codSubcaso==AUXILIO_MECANICO) {
//					            				Ext.getCmp('pnVehiculo').setHidden(false);
//					            				Ext.getCmp('pnInvolucrado').setHidden(true);
//					            			} else if (record.data.codSubcaso==AUXILIO_MEDICO) {
//					            				Ext.getCmp('pnVehiculo').setHidden(true);
//					            				Ext.getCmp('pnInvolucrado').setHidden(false);
//					            			}
////						            	Ext.getCmp('cbxSubTipoCaso').reset();
//					            	  		var vStoreSubCaso = Ext.getCmp('cbxSubCaso').store;
//					            	  		vStoreSubCaso.removeAll();
//					            	  		Ext.getCmp('cbxSubCaso').reset();
//					            	  		Ext.getCmp('cbxModalidad').reset();
////						            	  		Ext.getCmp('cbxCaso').setDisabled(true);
////						            	  		Ext.getCmp('cbxSubEstado').setDisabled(true);
//					            	  		vStoreSubCaso.load({
//            	  								params:{
//            	  										cod:record.data.codCaso
//            									},
//            	  								callback:function(){
////	            	  									if(vStoreCaso.count()>0){
////	            	  										Ext.getCmp('cbxCaso').setDisabled(false);
////	            	  									} else {
////	            	  										Ext.getCmp('cbxCaso').setDisabled(true);
////	            	  									}
//            	  								}		
//            	  							});
					            		}
				            		}
		                        }
		                    ]
		                },
		                {
		                    xtype: 'form',
//		                    height: 133,
		                    id: 'formDatosReportante',
		                    margin: '20 0 0 0 ',
		                    width: 782,
		                    maxHeight: 140,
//		                    minHeight: 40,
		                    layout: 'column',
		                    items: [
		                        {
		                            xtype: 'label',
		                            dock: 'top',
		                            margin: '',
		                            padding: '',
		                            width: 782,
		                            text: 'Datos del Reportante'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtNombReport',
		                            margin: '10 5 0 10',
		                            padding: '',
		                            width: 490,
		                            fieldLabel: 'Nombre',
		                            labelWidth: 60,
		                            emptyText: 'Nombre del reportante'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtTelfRepor',
		                            margin: '10 5 0 10',
		                            padding: '',
		                            width: 179,
		                            fieldLabel: 'Telefono',
		                            labelWidth: 60,
		                            emptyText: 'Teléfono'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtCarnetExt',
		                            hidden: true,
		                            margin: '5 5 0 10',
		                            width: 183,
		                            fieldLabel: 'C. Ext.',
		                            labelWidth: 60,
		                            emptyText: 'Carnet de extr.'
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxNacionalidad',
		                            hidden: true,
		                            margin: '5 5 0 10',
		                            width: 292,
		                            fieldLabel: 'Nacionalidad',
		                            labelWidth: 80,
		                            emptyText: 'Nacionalidad'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtDirecReport',
		                            hidden: true,
		                            margin: '5 5 0 10',
		                            width: 365,
		                            fieldLabel: 'Dirección',
		                            labelWidth: 60,
		                            emptyText: 'Dirección del reportante'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtCdraReport',
		                            hidden: true,
		                            margin: '5 5 0 10',
		                            width: 110,
		                            fieldLabel: 'Cdra.',
		                            labelWidth: 40,
		                            emptyText: 'Cuadra'
		                        }
		                    ]
		                },
		                {
		                    xtype: 'form',
		                    id: 'formUbicacionIncidencia',
		                    margin: '20 0 0 0 ',
		                    width: 782,
		                    layout: 'column',
		                    items: [
		                        {
		                            xtype: 'label',
		                            dock: 'top',
		                            width: 780,
		                            text: 'Ubicación de Incidencia'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtDireccion',
		                            margin: '10 5 0 10',
		                            padding: '',
		                            width: 300,
		                            fieldLabel: 'Dirección:',
		                            labelAlign: 'top',
		                            labelWidth: 70,
		                            emptyText: 'Dirección',
		                            editable:false
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtCuadra',
		                            margin: '10 5 0 5',
		                            width: 80,
		                            fieldLabel: 'Cdra / Nro:',
		                            labelAlign: 'top',
		                            labelClsExtra: '',
		                            labelWidth: 70,
		                            emptyText: 'Cdra/Nro'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtDpto',
		                            margin: '10 5 0 5',
		                            width: 80,
		                            fieldLabel: 'Dpto / Of:',
		                            labelAlign: 'top',
		                            labelWidth: 70,
		                            emptyText: 'Dpto/Of'
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtZona',
		                            margin: '10 0 0 5',
		                            width: 90,
		                            fieldLabel: 'Zona:',
		                            labelAlign: 'top',
		                            emptyText: 'Zona',
		                            editable:false
		                        },
		                        {
		                            xtype: 'textfield',
		                            id: 'txtSubZona',
		                            margin: '10 5 0 0',
		                            width: 90,
		                            fieldLabel: 'SubZona',
		                            labelAlign: 'top',
		                            emptyText: 'SubZona',
		                            editable:false
		                        },
		                        {
		    						xtype:'textfield',
		    						width:400,
		    						fieldLabel:'Coordenadas',
		    						labelWidth : 100,
		    						name:'cordenadas',
		    						style:'margin-bottom:10px;',
		    						id:'coordenadas',
		    						allowBlank:false,
		    						readOnly:true,
		    						hidden:true
		    					},
		                        {
		                            xtype: 'button',
		                            id: 'btnMapear',
		                            margin: '40 10 0 10',
		                            text: 'Mapear',
		                            handler:function(){
		    							//Uso del componenete -->
		    							Util.windowGeoreferenciaPunto({
				                			width:600,
				                			height:600,
				                			idCanvasMap:'mapa-incidencia-geo',
				                			idCordenadas:'coordenadas',
				                			fnGrabar:function(punto,direccionData){
				                				//console.log('direccionData');
				                				//console.log(direccionData);
				                				Ext.getCmp('coordenadas').setValue(punto.lat+' '+punto.lng);
					                			//if(direccionData && direccionData.toponimia){
					                			//	Ext.getCmp('direccionIncidencia').setValue(direccionData.toponimia); 
					                			//}
				                				$.ajax({
				                					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
				     							    dataType: "json",
				     							    data:{latitud:punto.lat,longitud:punto.lng},
				     							    success: function( response ) {
				     							    	console.log(response);
				     							    	var result = response.result || [];
				     							    	if(result.length>0){
				     							    		var name = result[0];
				     							    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1]:name.names[0]);
				     							    	}
				     							    }
				                				});
				                				IncidenciaService.setZonaSubZona2(punto.lng+' '+punto.lat);
				                			}
				                		});
				                		//<-- end uso componente
		    						}
		                            
		                        }
		                    ]
		                },
		                {
		                    xtype: 'form',
		                    id: 'formDetalleIncidencia',
//		                    height: 1525,
//		                    maxHeight: 1500,
//		                    minHeight: 600,
		                    margin: '20 0 0 0',
		                    width: 782,
		                    layout: 'column',
		                    items: [
		                        {
		                            xtype: 'label',
		                            dock: 'top',
		                            width: 801,
		                            text: 'Detalle de Incidencia'
		                        },
		                        {
		                            xtype: 'textareafield',
		                            height: 173,
		                            id: 'txtDetalle',
		                            margin: '10 5 0 10',
		                            width: 460,
		                            fieldLabel: 'Detalle de evento',
		                            labelAlign: 'top',
		                            emptyText: 'Describa el detalle de la incidencia o la acción tomada'
		                        },
		                        {
		                            xtype: 'datefield',
		                            id: 'fecEvento',
		                            margin: '40 5 0 5',
		                            width: 280,
		                            fieldLabel: 'Fecha de evento',
		                            labelWidth: 120
		                        },
		                        {
		                            xtype: 'timefield',
		                            id: 'hrEvento',
		                            margin: '5 5 0 5',
		                            width: 280,
		                            fieldLabel: 'Hora de evento',
		                            labelWidth: 120
		                        },
		                        {
		                            xtype: 'datefield',
		                            id: 'fecAtencion',
		                            margin: '5 5 0 5',
		                            width: 280,
		                            fieldLabel: 'Fecha de atención',
		                            labelWidth: 120
		                        },
		                        {
		                            xtype: 'timefield',
		                            id: 'hrAtencion',
		                            margin: '5 5 0 5',
		                            width: 280,
		                            fieldLabel: 'Hora de atención',
		                            labelWidth: 120
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxSeveridad',
		                            hidden: true,
		                            margin: '10 200 0 10',
		                            width: 320,
		                            fieldLabel: 'Severidad',
		                            labelWidth: 70
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxEstado',
		                            hidden: true,
		                            margin: '5 5 0 10',
		                            width: 240,
		                            fieldLabel: 'Estado',
		                            labelAlign: 'top',
		                            labelWidth: 70
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxSubEstado',
		                            hidden: true,
		                            margin: '5 5 0 5',
		                            width: 240,
		                            fieldLabel: 'Sub-estado',
		                            labelAlign: 'top',
		                            labelWidth: 70
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxModalidad',
		                            hidden: true,
		                            margin: '5 5 0 5',
		                            width: 254,
		                            fieldLabel: 'Modalidad',
		                            labelAlign: 'top',
		                            labelWidth: 70
		                        },
		                        {
		                            xtype: 'container',
		                            height: 197,
		                            id: 'pnSospechoso',
		                            hidden: true,
		                            width: 782,
		                            layout: 'column',
		                            items: [
		                                {
		                                    xtype: 'radiogroup',
		                                    id: 'chkIdentificado',
		                                    margin: '10 703 0 10',
		                                    padding: '',
		                                    width: 277,
		                                    fieldLabel: '¿Sospechoso identificado?',
		                                    labelWidth: 160,
		                                    items: [
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'Si'
		                                        },
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'No'
		                                        }
		                                    ]
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    id: 'txtNmbSospechoso',
		                                    margin: '0 10 0 10',
		                                    padding: '',
		                                    width: 360,
		                                    fieldLabel: 'Nombre',
		                                    labelWidth: 60
		                                },
		                                {
		                                    xtype: 'numberfield',
		                                    id: 'txtEdadSospechoso',
		                                    margin: '0 10 0 10',
		                                    padding: '',
		                                    width: 120,
		                                    fieldLabel: 'Edad',
		                                    labelWidth: 40
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    id: 'txtDniSospechoso',
		                                    margin: '0 10 0 10',
		                                    padding: '',
		                                    width: 150,
		                                    fieldLabel: 'DNI',
		                                    labelWidth: 30
		                                },
		                                {
		                                    xtype: 'button',
		                                    id: 'btnBuscarPersona',
		                                    margin: '0 10 0 10',
		                                    text: 'Buscar'
		                                },
		                                {
		                                    xtype: 'textareafield',
		                                    height: 96,
		                                    id: 'txtCaractSospechoso',
		                                    margin: '10 10 0 10',
		                                    width: 755,
		                                    fieldLabel: 'Características del sospechoso',
		                                    labelAlign: 'top'
		                                }
		                            ]
		                        },
		                        {
		                            xtype: 'textfield',
//		                            xtype: 'combobox',
		                            id: 'cbxMotivo',
		                            hidden: true,
		                            margin: '10 550 0 10',
		                            width: 205,
		                            fieldLabel: 'Motivo',
		                            labelWidth: 50
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxTpoHallazgo',
		                            hidden: true,
		                            width: 280,
		                            margin: '10 10 0 10',
		                            fieldLabel: 'Tipo de cadáver',
		                            store: tpoHallazgoStore,
		            			    queryMode: 'local',
		            			    name:'tpoHallazgo',
//		            			    forceSelection:true,
//		            			    style:'margin-bottom:10px;',
		            			    valueField: 'value',
		            			    displayField: 'name',
		            			    listeners:{
		            			    	select:function(f,record){
		            			    		if(record.data.value == 776){
		            			    			Ext.getCmp('cbxSexo').setHidden(false);
				    							Ext.getCmp('cbxAnimal').set(true);
				    							Ext.getCmp('cbxSexo').setHidden(false);
				    							Ext.getCmp('cbxAnimal').setHidden(true);
				    						} else { if (record.data.value == 777){
					    							Ext.getCmp('cbxSexo').setHidden(true);
					    							Ext.getCmp('cbxAnimal').setHidden(false);}
				    						}
		            			    	}
		            			    }
		                        },
		                        {
		                            xtype: 'combobox',
		                            id: 'cbxSexo',
		                            hidden: true,
		                            margin: '10 10 0 10',
		                            fieldLabel: 'Sexo',
		                            labelWidth: 35
		                        },
		                        {
		                            xtype: 'ComboGeneric',
		                            id: 'cbxAnimal',
		                            hidden: true,
		                            margin: '10 10 0 10',
		                            width: 231,
		                            fieldLabel: 'Clase',
		                            labelWidth: 35,
		                            extraParams:{
//										   identificador:'VOX_CASO'
									},
					            	root:'data',
					            	autoLoad:true,
					            	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=778',
					            	queryMode: 'local',
					            	valueField:'codTipo',
					            	displayField :'descTipo',
					            	forceSelection:true,
					            	style:'margin-bottom:10px;',
					            	name:'tipoAnimal',
					            	model: maestroTipoModel
		                        },
		                        {
		                            xtype: 'container',
		                            height: 170,
		                            id: 'pnVehiculo',
		                            hidden: true,
		                            width: 782,
		                            layout: 'column',
		                            items: [
		                                {
		                                    xtype: 'radiogroup',
		                                    id: 'chkVehiculo',
		                                    margin: '10 703 0 10',
		                                    padding: '',
		                                    width: 277,
		                                    fieldLabel: '¿Vehículo identificado?',
		                                    labelWidth: 160,
		                                    items: [
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'Si'
		                                        },
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'No'
		                                        }
		                                    ]
		                                },
		                                {
		                                    xtype: 'label',
		                                    margin: '8 0 0 10',
		                                    width: 61,
		                                    text: 'Vehículo:'
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    ariaLabel: 'daa',
		                                    id: 'txtClase',
		                                    width: 156,
		                                    fieldLabel: 'Clase',
		                                    hideLabel: true,
		                                    editable: false,
		                                    emptyText: 'Clase',
		                                    vtypeText: ''
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    ariaLabel: 'daa',
		                                    id: 'txtMarca',
		                                    width: 124,
		                                    fieldLabel: 'Clase',
		                                    hideLabel: true,
		                                    editable: false,
		                                    emptyText: 'Marca',
		                                    vtypeText: ''
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    ariaLabel: 'daa',
		                                    id: 'txtModelo',
		                                    width: 87,
		                                    fieldLabel: 'Clase',
		                                    hideLabel: true,
		                                    editable: false,
		                                    emptyText: 'Modelo',
		                                    vtypeText: ''
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    ariaLabel: 'daa',
		                                    id: 'txtPlaca',
		                                    width: 73,
		                                    fieldLabel: 'Clase',
		                                    hideLabel: true,
		                                    editable: false,
		                                    emptyText: 'Placa',
		                                    vtypeText: ''
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    ariaLabel: '',
		                                    id: 'txtColor',
		                                    width: 120,
		                                    fieldLabel: 'Color',
		                                    hideLabel: true,
		                                    editable: false,
		                                    emptyText: 'Color',
		                                    vtypeText: ''
		                                },
		                                {
		                                    xtype: 'textfield',
		                                    ariaLabel: '',
		                                    id: 'txtAnio',
		                                    width: 60,
		                                    fieldLabel: 'Anio',
		                                    hideLabel: true,
		                                    editable: false,
		                                    emptyText: 'año',
		                                    vtypeText: ''
		                                },
		                                {
		                                    xtype: 'button',
		                                    id: 'btnBuscarVehiculo',
		                                    margin: '0 10 0 10',
		                                    text: 'Buscar'
		                                },
		                                {
		                                    xtype: 'radiogroup',
		                                    id: 'chkOcupante',
		                                    margin: '10 10 0 10',
		                                    padding: '',
		                                    width: 230,
		                                    fieldLabel: '¿Algún ocupante?',
		                                    labelWidth: 120,
		                                    items: [
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'Si'
		                                        },
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'No'
		                                        }
		                                    ]
		                                },
		                                {
		                                    xtype: 'numberfield',
		                                    id: 'txtCantidad',
		                                    margin: '10 10 0 10',
		                                    width: 130,
		                                    fieldLabel: 'Cantidad',
		                                    labelWidth: 60
		                                },
		                                {
		                                    xtype: 'radiogroup',
		                                    id: 'chkIdentificado',
		                                    margin: '10 10 0 10',
		                                    width: 230,
		                                    fieldLabel: '¿Algún identificado?',
		                                    labelWidth: 120,
		                                    items: [
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'Si'
		                                        },
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'No'
		                                        }
		                                    ]
		                                },
		                                {
		                                    xtype: 'radiogroup',
		                                    id: 'chkIntervenido',
		                                    margin: '10 700 0 10',
		                                    width: 230,
		                                    fieldLabel: '¿Algún intervenido?',
		                                    labelWidth: 120,
		                                    items: [
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'Si'
		                                        },
		                                        {
		                                            xtype: 'radiofield',
		                                            boxLabel: 'No'
		                                        }
		                                    ]
		                                }
		                            ]
		                        },
		                        {
		                            xtype: 'container',
		                            height: 165,
		                            id: 'pnInvolucrado',
		                            hidden: true,
		                            margin: '10 0 0 0',
		                            width: 782,
		                            layout: 'column',
		                            items: [
		                                {
		                                    xtype: 'label',
		                                    dock: 'top',
		                                    margin: '0 10 0 10',
		                                    width: 600,
		                                    text: 'Involucrado (Agraviado, victima, ocupante, etc )'
		                                },
		                                {
		                                    xtype: 'button',
		                                    height: 30,
		                                    id: 'btnNuevoInvolucrado',
		                                    margin: '0 10 0 10',
		                                    text: 'Añadir involucrado...',
		                                    handler:function(){
		        		                    	IncidenciaService.openFormBuscaPersona({
		        		                    		title:'Buscar persona'
		        		                    	});
		        		                    }
		                                },
		                                {
		                                    xtype: 'gridpanel',
		                                    margin: '0 10 10 10',
		                                    width: 626,
		                                    bodyBorder: true,
		                                    header: false,
		                                    title: 'My Grid Panel',
		                                    columns: [
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 344,
		                                            dataIndex: 'string',
		                                            text: 'Nombres y Apellidos'
		                                        },
		                                        {
		                                            xtype: 'numbercolumn',
		                                            width: 86,
		                                            dataIndex: 'number',
		                                            text: 'Edad'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 132,
		                                            dataIndex: 'string',
		                                            text: 'Doc. de Identidad'
		                                        },
		                                        {
		                                            xtype: 'actioncolumn',
		                                            width: 53,
		                                            dataIndex: 'chkDelete',
		                                            text: ''
		                                        }
		                                    ],
		                                    viewConfig: {
		                                        margin: '',
		                                        stripeRows: false
		                                    }
		                                }
		                            ]
		                        },
		                        {
		                            xtype: 'container',
		                            height: 167,
		                            id: 'pnConductor',
		                            hidden: true,
		                            margin: '10 0 0 0',
		                            width: 782,
		                            layout: 'column',
		                            items: [
		                                {
		                                    xtype: 'label',
		                                    margin: '0 10 0 10',
		                                    width: 608,
		                                    text: 'Conductor UT1'
		                                },
		                                {
		                                    xtype: 'button',
		                                    id: 'btnNuevoConductor',
		                                    height: 30,
		                                    margin: '0 10 0 10',
		                                    text: 'Añadir conductor...'
		                                },
		                                {
		                                    xtype: 'gridpanel',
		                                    margin: '0 10 10 10',
		                                    width: 770,
		                                    bodyBorder: true,
		                                    header: false,
		                                    title: 'My Grid Panel',
		                                    columns: [
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 333,
		                                            dataIndex: 'string',
		                                            text: 'Nombres y Apellidos'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 120,
		                                            dataIndex: 'string',
		                                            text: 'DNI / L.C.'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 120,
		                                            dataIndex: 'string',
		                                            text: 'Clase vehiculo'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 106,
		                                            dataIndex: 'string',
		                                            text: 'Placa'
		                                        },
		                                        {
		                                            xtype: 'actioncolumn',
		                                            width: 58,
		                                            dataIndex: 'string',
		                                            text: ''
		                                        }
		                                    ],
		                                    viewConfig: {
		                                        margin: '',
		                                        width: 716
		                                    }
		                                }
		                            ]
		                        },
		                        {
		                            xtype: 'container',
		                            height: 166,
		                            id: 'pnInterviniente',
		                            margin: '20 0 0 0',
		                            width: 782,
		                            layout: 'column',
		                            items: [
		                                {
		                                    xtype: 'label',
		                                    margin: '0 10 0 10',
		                                    width: 595,
		                                    text: 'Interviniente'
		                                },
		                                {
		                                    xtype: 'button',
		                                    id: 'btnNuevoInterviniente',
		                                    height: 30,
		                                    margin: '0 10 0 10',
		                                    text: 'Añadir interviniente...'
		                                },
		                                {
		                                    xtype: 'gridpanel',
		                                    margin: '0 10 10 10',
		                                    width: 770,
		                                    bodyBorder: true,
		                                    header: false,
		                                    title: 'My Grid Panel',
		                                    columns: [
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 172,
		                                            dataIndex: 'string',
		                                            text: 'Tipo de Fuerza'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 167,
		                                            dataIndex: 'string',
		                                            text: 'Unidad o Puesto'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 232,
		                                            dataIndex: 'string',
		                                            text: 'Nombre de interviniente'
		                                        },
		                                        {
		                                            xtype: 'gridcolumn',
		                                            width: 125,
		                                            dataIndex: 'string',
		                                            text: 'Apoyo policial'
		                                        },
		                                        {
		                                            xtype: 'actioncolumn',
		                                            width: 58,
		                                            dataIndex: 'string',
		                                            text: ''
		                                        }
		                                    ],
		                                    viewConfig: {
		                                        margin: '',
		                                        width: 716
		                                    }
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


	
}


window.onload = function(){

	IncidenciaService.init();
	
}

