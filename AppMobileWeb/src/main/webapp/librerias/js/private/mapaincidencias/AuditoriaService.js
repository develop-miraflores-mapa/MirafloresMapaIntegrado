var timeTest = /^(2[0-3]|[0-1][0-9]):[0-5][0-9]$/i;
Ext.apply(Ext.form.field.VTypes, {
    //  vtype validation function
    time: function(val, field) {
        return timeTest.test(val);
    },
    // vtype Text property: The error text to display when the validation function returns false
    timeText: 'Hora no válida. Debe estar en formato "hh:mm" de 24 horas.',
    // vtype Mask property: The keystroke filter mask
    timeMask: /[\d\s:amp]/i
});

Ext.ns('AuditoriaService');
AuditoriaService = {

					
	init:function(){
		if(ROL==901||ROL==903||ROL==902){
			this.buildGridAuditoria();
		} else {
			Ext.Msg.alert('ACCESO DENEGADO','¡No tiene privilegios para acceder!', Ext.emptyFn);
		}
	}
	,
	buildGridAuditoria:function(){
		
		var perfilStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		    	{'value':901, 'name':'ADMINISTRADOR'},
		    	{'value':902, 'name':'OPERADOR'},
		    	{'value':903, 'name':'SUPERVISOR'},
		    	{'value':906, 'name':'ESTADISTICO'},
		    	{'value':992, 'name':'PLATAFORMA DE FUERZA  INTEGRADAS'}
		    ]
		});
		
		var rolStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		    	{'value':995, 'name':'OPERADOR DE ATENCION 1 (AZUL)'},
		    	{'value':996, 'name':'OPERADOR DE ATENCION 2 (VERDE)'},
		    	{'value':997, 'name':'OPERADOR DE ATENCION 3 (AMARILLO)'},
		    	{'value':998, 'name':'OPERADOR DE ATENCION 4 (NARANJA)'},
		    	{'value':999, 'name':'OPERADOR DE ATENCION 5 (ROJO)'},
		    	{'value':1000, 'name':'OPERADOR DE ATENCION 6 (MORADO)'},
		    	{'value':1001, 'name':'OPERADOR DE REDES SOCIALES'},
		    	{'value':1002, 'name':'RADIO OPERADOR AREA 1'},
		    	{'value':1003, 'name':'RADIO OPERADOR AREA 2'},
		    	{'value':1004, 'name':'RADIO OPERADOR AREA 3'},
		    	{'value':1005, 'name':'OPERADOR DE VIDEOVIGILANCIA AREA 1'},
		    	{'value':1006, 'name':'OPERADOR DE VIDEOVIGILANCIA AREA 2'},
		    	{'value':1007, 'name':'OPERADOR DE VIDEOVIGILANCIA AREA 3'}
		    ]
		});
		
		var txtUsuario = {
		        xtype:'textfield',
		        fieldLabel: 'Usuario',
		        labelWidth: 40,
		        width: 200,
		        margin: '0 0 0 10',
//		        emptyText:'Usuario',
		        name:'desLoginUser',
		        id:'valor',
	        	listeners:{
	        		specialkey : function(f, e) {
						if (e.getKey() == e.ENTER) {
							AuditoriaService.buscar();
						}
					}
	        	}
		};
        
		var cbxPerfil = Ext.create('Ext.form.ComboBox', {
			id: 'codPerfil',
			fieldLabel: 'Perfil',
			labelWidth: 40,
	        width: 300,
	        margin: '0 0 0 10',
			store: perfilStore,
            queryMode: 'local',
            forceSelection:true,
            valueField: 'value',
            displayField: 'name',
            name:'codPerfil',
//            listeners:{
//				select:function(f,record){
//					console.log(record);
//					if(record.data.value==902){
//						Ext.getCmp('ideRolRol').reset();
//						Ext.getCmp('ideRolRol').enable();
//						Ext.getCmp('ideRolRol').allowBlank=false;
//					} else {
//						Ext.getCmp('ideRolRol').reset();
//						Ext.getCmp('ideRolRol').disable();
//						Ext.getCmp('ideRolRol').allowBlank=true;
//					}
//				}
//            }
        });
	
		var cbxRol = Ext.create('Ext.form.ComboBox', {
    		id: 'codRol',
    		fieldLabel: 'Rol',
    		labelWidth: 40,
	        width: 300,
	        margin: '0 0 0 10',
    		store: rolStore,
    		queryMode: 'local',
    		forceSelection:true,
    		valueField: 'value',
    		displayField: 'name',
//    		allowBlank:false,
    		name:'codRol',
    		listeners:{
    			
    		}
    	});
		
        var fecDesde = {
				xtype: 'datefield',
				id: 'fecDesde',
				fieldLabel: 'Desde',
				labelWidth: 40,
				margin: '0 0 0 10',
				width: 140,
				editable: false,
	    		hideTrigger : true,
			};
        var fecHasta = {
				xtype: 'datefield',
				id: 'fecHasta',
				fieldLabel: 'Hasta',
				margin: '0 0 0 10',
				labelWidth: 40,
				width: 140,
				editable: false,
	    		hideTrigger : true,
			};
		
		var btnConsultar = {
	            xtype: 'button',
	            id: 'btnConsultar',
	            margin: '0 0 0 10',
	            text: 'Consultar',
	            handler:function(){
	            	console.log("click Consultar");
	            	AuditoriaService.buscar();
	            }
	        };
		
		var btnLimpiar = {
	            xtype: 'button',
	            id: 'btnLimpiar',
	            margin: '0 0 0 10',
	            text: 'Limpiar',
	            handler:function(){
	            	Ext.getCmp('valor').reset();
	            	Ext.getCmp('codPerfil').reset();
	            	Ext.getCmp('codRol').reset();
	            	Ext.getCmp('fecDesde').reset();
	            	Ext.getCmp('fecHasta').reset();
	            }
	        };
		
		Ext.define('AuditoriaModel', {
			     extend: 'Ext.data.Model',
			     fields: [
			    	 	'id',
				    	'tipo',
				    	'valor',
				    	'fecRegistra',
				    	'desIpRegistra',
				    	'codPerfil',
				    	'codRol',
				    	{
					       	name:'strFecRegistra',
					       	mapping : 'fecRegistra',
					       	convert : function(v){
					       		if(v){ return Ext.Date.format(new Date(v), 'd/m/Y h:i:s A'); }
					       		else{ return ""; }
					       	}
						},
				    	{
				    		name:'descPerfil',
					       	mapping : 'codPerfil',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       		case 901: str = "ADMINISTRADOR"; break;
								    case 902: str = "OPERADOR"; break;
								    case 903: str = "SUPERVISOR"; break;
								    case 906: str = "ESTADISTICO"; break;
								    case 992: str = "PLATAFORMA DE FUERZA  INTEGRADAS";
						       		default: str = ""; break;
					       		}
							    return str;
					       	}
				    	},
				    	{
				    		name:'descRol',
					       	mapping : 'codRol',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       		case 995: str = "OPERADOR DE ATENCION 1 (AZUL)"; break;
						       		case 996: str = "OPERADOR DE ATENCION 2 (VERDE)"; break;
						       		case 997: str = "OPERADOR DE ATENCION 3 (AMARILLO)"; break;
						       		case 998: str = "OPERADOR DE ATENCION 4 (NARANJA)"; break;
						       		case 999: str = "OPERADOR DE ATENCION 5 (ROJO)"; break;
						       		case 1000: str = "OPERADOR DE ATENCION 6 (MORADO)"; break;
						       		case 1001: str = "OPERADOR DE REDES SOCIALES"; break;
						       		case 1002: str = "RADIO OPERADOR AREA 1"; break;
						       		case 1003: str = "RADIO OPERADOR AREA 2"; break;
						       		case 1004: str = "RADIO OPERADOR AREA 3"; break;
						       		case 1005: str = "OPERADOR DE VIDEOVIGILANCIA AREA 1"; break;
						       		case 1006: str = "OPERADOR DE VIDEOVIGILANCIA AREA 2"; break;
						       		case 1007: str = "OPERADOR DE VIDEOVIGILANCIA AREA 3"; break;
						       		default: str = ""; break;
					       		}
							    return str;
					       	}
				    	}
				]
			});
			 
		var auditoriaStore = Ext.create('Ext.data.Store', {
				autoLoad : true,
				model : 'AuditoriaModel',
				pageSize: 30,
				proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'cierre-calles/bandeja-auditoria',
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
				}
			});
				
		var gridAuditoria = Ext.create('Ext.grid.Panel', {
			    store: auditoriaStore,
			    renderTo:'render',
			    title:'Auditoria de usuarios',
			    id:'grid-auditoria',
			    overflowX: 'scroll',
//			    width: 1600,
			    align: 'center',
			    autoScroll: true,
			    border:true,
			    columns: [
			    	{ text: 'Id',  dataIndex: 'id', width: 100, locked:true },
			        { text: 'Tipo',  dataIndex: 'tipo', width: 120, locked:true },
			        { text: 'Usuario',  dataIndex: 'valor' , flex: 1},	//width: 120 
			        { text: 'Fecha de login',  dataIndex: 'strFecRegistra' , flex: 1},	//width: 180 
			        { text: 'IP Máquina',  dataIndex: 'desIpRegistra' ,  flex: 1},
			        { text: 'Perfil',  dataIndex: 'descPerfil' , flex: 1 },
			        { text: 'Rol',  dataIndex: 'descRol' ,  flex: 1},
//			        {
//			            xtype:'actioncolumn',
//			       		width:30,
//			            align:'center',
//			            locked: true,
//			            lockable: true,
////			            hidden:true,
//			            items: [{
//			            	
//			                icon: PATH_PROYECTO_BASE+'images/edit_16.png',
//			                tooltip: 'Editar',
//			                handler: function(grid, rowIndex, colIndex) {
//			                	var record = grid.getStore().getAt(rowIndex);
//			                	IncidenciaService.openFormRegistroNuevo({
//				           			titulo:'Editar incidencia',
//				           			codIncidencia: record.data.idIncidencia
//				           		});
//			                    
//			                }
//			            }]
//			        },
//			        {
//			            xtype:'actioncolumn',
//			       		width:30,
//			            align:'right',
//			            lockable: true,
//			            locked: true,
//			            items: [{
//			            	
//			                icon: PATH_PROYECTO_BASE+'images/delete_16.png',
//			                tooltip: 'Eliminar',
//			                handler: function(grid, rowIndex, colIndex) {
//			                	var record = grid.getStore().getAt(rowIndex);
//			                    Ext.Msg.confirm('Confirmar', '¿Seguro de eliminar el registro seleccionado?', function(btn, text){
//								    if (btn == 'yes'){
//								    	Util.runAjax({
//											url:PATH_PROYECTO_BASE+'mapa-incidencia/desactivar-incidencia',
//											params:{
//												cod:record.data.idIncidencia
//											},
////											async : true,
//											async : false,
//											method : 'POST',
//											success:function(http){
//												var response = Ext.decode(http.responseText);
//												
//												IncidenciaService.buscar2();
//											}
//										});
//								    }
//								});
//			                }
//			            }]
//			        }
				],
				height: 709,
				width:1540,
				dockedItems: [
					{
					    xtype: 'pagingtoolbar',
					    store: auditoriaStore,   // same store GridPanel is using
					    dock: 'bottom',
					    displayInfo: true
					},
                    {
			            xtype: 'toolbar',
			            items: [
			            	txtUsuario,
			            	cbxPerfil,
			            	cbxRol,
			            	fecDesde,
			            	fecHasta,
			            	btnConsultar,
			            	btnLimpiar,
			            	'->',
//			                {
//			            	  	text:'Nuevo',
//			                    id:'btnAddGeo2',
//			                    iconCls:'btnAddSmall',
//			                    handler:function(){
//			                    	IncidenciaService.openFormRegistroNuevo({
//			                    		title:'Registrar Incidencia'
//			                    	});
//			                    }
//			                },
//			                {
//								iconCls : 'btnEditSmall',
//								text:'Editar',
//								id:'btnEditar',
//								disabled:true,
//								handler : function() {
//									var record = Ext.getCmp('grid-incidencias').getSelectionModel().getSelection();
//									IncidenciaService.openFormRegistroNuevo({
//			                    		title:'Editar Incidencia',
//			                    		codIncidencia: record[0].data.idIncidencia
//			                    	});
//								}
//							},
//							{
//			                	xtype: 'button',
//								text: 'Exportar...',
////								glyph: Packt.util.Glyphs.getGlyph('excel'),
//								listeners: {
////								click: 'onExportExcel'
//								},
//								handler:function(){
//									/*$.ajax({
//										url:PATH_PROYECTO_BASE+'mapa-incidencia/export-excel',
//										dataType: "json",
////										data:{latitud:punto.lat,longitud:punto.lng},
//									    success: function( response ) {
////									    	var result = response.result || [];
////									    	if(result.length>0){
////									    		var name = result[0];
////									    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
////									    	}
//									    }
//			        				});*/
//									IncidenciaService.openFormExportacion({
//    		                    		title:'Exportar incidencias'
//    		                    	})
////									window.open(PATH_PROYECTO_BASE+'mapa-incidencia/export-excel', "_blank");
//								}
//							},
							{
					            xtype:'splitbutton',
					            text: DES_LOGIN,
					            iconCls: 'btnUser16',
					            menu: [
					            		{
					            			text: 'Ver Mapa',
					            			iconCls: 'btnMap16',
					            			href:PATH_PROYECTO_BASE+'cierre-calles/mapa'
					            		},
					            		{
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
			
//		gridAuditoria.on('select',function(){
//				if(Ext.getCmp('btnEditar')){
//					Ext.getCmp('btnEditar').setDisabled(false);
//				}
//			});
//			
//		auditoriaStore.on('load',function(){
//				if(Ext.getCmp('btnEditar')){
//					Ext.getCmp('btnEditar').setDisabled(true);
//				}
//			});
		
//		new Ext.Viewport({
//	        layout: 'anchor',
//	        frame: true,
//	        items: [{
//	            anchor: '100% 50%',
//	            layout: 'fit',
//	            items: [myGridPanel]
//	        }]
//	    }).render(...);
	
	},
	
	buscar:function(){
		var grid = Ext.getCmp('grid-auditoria');
		var store = grid.store;
		var auditoria = {};
		if(!Ext.isEmpty(Ext.getCmp('valor').getValue())){ auditoria.valor = Ext.getCmp('valor').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('codPerfil').getValue())){ auditoria.codPerfil = Ext.getCmp('codPerfil').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('codRol').getValue())){ auditoria.codRol = Ext.getCmp('codRol').getValue(); }
		if(Ext.getCmp('fecDesde').getValue()!=null){ auditoria.fecDesde = Ext.Date.format(Ext.getCmp('fecDesde').getValue(), 'd/m/Y'); }
    	if(Ext.getCmp('fecHasta').getValue()!=null){ auditoria.fecHasta = Ext.Date.format(Ext.getCmp('fecHasta').getValue(), 'd/m/Y'); }
//		if(!Ext.isEmpty(Ext.getCmp('fecDesde').getValue())){ auditoria.fecDesde = Ext.getCmp('fecDesde').getValue(); }
//		if(!Ext.isEmpty(Ext.getCmp('fecHasta').getValue())){ auditoria.fecHasta = Ext.getCmp('fecHasta').getValue(); }
		console.log("auditoria");
		console.log(auditoria);
		store.proxy.extraParams = auditoria;
		store.load();
	}
	
}


window.onload = function(){

	AuditoriaService.init();
	
}

