Ext.define('IntervinienteModel', {
		extend : 'Ext.data.Model',
		fields : [ 
					'codInterv',
					'idIncidencia',
					'codTpoInterv',
//					'codTpoPuesto',
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
					'estReg',
//					'codVehic',
					'codClaseVehic',
					'codMarcaVehic',
//					'codColorVehic',
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
				'codVehic',
				'idIncidencia',
//				'codClaseVehic',
//				'codMarcaVehic',
//				'codColorVehic',
				'claseVehic',
				'marcaVehic',
				'modelVehic',
				'placaVehic',
				'colorVehic',
				'anioVehic',
				'estReg'
	         ]
});


Ext.define('HistorialModel', {
    extend: 'Ext.data.Model',
    fields: [
     	'idBitacora',
		'idIncidencia',
		'fecha',
		'descripcion',
		'usuario',
		'estReg'
		,
		{
	       	name:'fecha',
	       	mapping : 'fecha',
	       	convert : function(v){
	       		if(v){ return moment(new Date(v)).format("DD/MM/YYYY hh:mm:ss A"); }
	       		else{ return ""; }
	       	}
		}
    ]
});


Ext.define('BitacoraModel', {
    extend: 'Ext.data.Model',
    fields: [
     	'idBitacora',
		'idIncidencia',
		'fecha',
		'descripcion',
		'usuario',
		'estReg'
		,
		{
	       	name:'fecha',
	       	mapping : 'fecha',
	       	convert : function(v){
	       		if(v){ return moment(new Date(v)).format("DD/MM/YYYY hh:mm:ss A"); }
	       		else{ return ""; }
	       	}
		}
    ]
});

Ext.define('AdjuntoModel', {
    extend: 'Ext.data.Model',
    fields: [
    	'adjunto',
    	'idImg',
    	'idIncidencia',
    	'nombre',
    	'ruta',
    	'archivo',
    	'tpoImg',
    	'titulo',
    	'descripcion',
    	'tpoExpo',
    	{
	       	name:'descTpoImg',
	       	mapping : 'tpoImg',
	       	convert : function(v){
	       		var str;
	       		switch (v) {
		       	   	case 1013:	str = 'IMAGEN'; break; 
			       	case 1014:	str = 'AUDIO'; break; 
			       	case 1015:	str = 'VIDEO'; break; 
			       	default:	str = ''; break;
	       		}
			    return str;
	       	}
		},
		{
	       	name:'descTpoExpo',
	       	mapping : 'tpoExpo',
	       	convert : function(v){
	       		var str;
	       		switch (v) {
		       	   	case 1019:	str = 'CODISEC'; break; 
			       	case 1020:	str = 'SALA CRISIS'; break;
			       	case 1025:	str = 'NINGUNA'; break; 
			       	case 1026:	str = 'PARTE'; break; 
			       	default:	str = ''; break;
	       		}
			    return str;
	       	}
		},
    ]
});

//var mapPlayer;

var incidenciaExpo = {};

// custom Vtype for vtype:'time'
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

var zonaTest = /^(ZONA|Zona|zona)\s[0-1][0-9]$/i;
Ext.apply(Ext.form.field.VTypes, {
    //  vtype validation function
    zona: function(val, field) {
        return zonaTest.test(val);
    },
    // vtype Text property: The error text to display when the validation function returns false
    zonaText: 'Zona no válida. Debe estar en la forma "ZONA [DIGITO][DIGITO]"',
    // vtype Mask property: The keystroke filter mask
    zonaMask: /[\d\s:amp]/i
});

var subzonaTest = /^[0-1][0-9][A-D]$/i;
Ext.apply(Ext.form.field.VTypes, {
    //  vtype validation function
    subzona: function(val, field) {
        return subzonaTest.test(val);
    },
    // vtype Text property: The error text to display when the validation function returns false
    subzonaText: 'SubZona no válida. Debe estar en la forma "[DIGITO][DIGITO][LETRA A-D]"',
    // vtype Mask property: The keystroke filter mask
    zonaMask: /[\d\s:amp]/i
});


var tpoDocStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			    	{"value":"23", "name":"DNI"},
			    	{"value":"25", "name":"CE"},
			    	{"value":"867", "name":"LC"}
			    ]
			});

var tpoIntervStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			    	{"value":"836", "name":"AMBULANCIA"},
			    	{"value":"837", "name":"BOMBEROS"},
			    	{"value":"838", "name":"UNIDAD MOVIL"},
			    	{"value":"839", "name":"UNIDAD MOTORIZADA"},
			    	{"value":"840", "name":"SERENO TACTICO"},
			    	{"value":"841", "name":"BRIGADA CANINA"},
			    	{"value":"842", "name":"POLICIA"},
			    	{"value":"843", "name":"TRANSITO"},
			    	{"value":"844", "name":"FISCALIZADOR"},
			    	{"value":"875", "name":"OTROS"}
			    ]
			});

Ext.ns('IncidenciaService');
IncidenciaService = {

	init:function(){
		if(ROL==901||ROL==903||ROL==902||ROL==992){
			this.buildGridIncidencia();
		} else {
			Ext.Msg.alert('ACCESO DENEGADO','¡No tiene privilegios para acceder!', Ext.emptyFn);
		}
	},

	setZonaSubZona:function(punto){
		Util.runAjax({
			url:PATH_PROYECTO_BASE+'catastro/get-sector-zona-by-cordenada',
			async : false,
			method : 'POST',
			params:{punto:punto},
			success:function(http){
				var response = Ext.decode(http.responseText);
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

	
	buildGridIncidencia:function(){
		
		var unidadModel = Ext.create('Ext.data.Model',{
			fields: [
		        {name: 'codUnidad',  type: 'int'},
		        {name: 'descUnidad',   type: 'string'},
		    ]
		});
		
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
		
		var tipoModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codTipo',  type: 'int'},
		        {name: 'codTpoPadre',  type: 'int'},
		        {name: 'descTipo',   type: 'string'},
		    ]
		});
		
		var situacionStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"873", "name":"NUEVO"},
		        {"value":"870", "name":"ATENDIDO"},
//		        {"value":"871", "name":"ATENDIDO/FALSA ALARMA"},
		        {"value":"872", "name":"DESCARTADO"},
		        {"value":"874", "name":"REPETIDO"}
		    ]
		});
		
		var medioStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":797, "name":"CORREO ELECTRONICO"},
		        {"value":798, "name":"PRESENCIAL"},
		        {"value":799, "name":"LLAMADA TELEFONICA"},
		        {"value":800, "name":"FACEBOOK"},
		        {"value":801, "name":"TWITTER"},
		        {"value":802, "name":"CAMARA"},
		        {"value":904, "name":"WHATSAPP"},
		        {"value":905, "name":"ALERTA MIRAFLORES"},
		        {"value":948, "name":"POS"},
		        {"value":990, "name":"WAZE"},
		        {"value":1009, "name":"REACH"}
		    ]
		});
		
		var asignadoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		    	{"value":"995", "name":"OPERADOR 1 (AZUL)"},
		        {"value":"996", "name":"OPERADOR 2 (VERDE)"},
		        {"value":"997", "name":"OPERADOR 3 (AMARILLO)"},
		        {"value":"998", "name":"OPERADOR 4 (NARANJA)"},
		        {"value":"999", "name":"OPERADOR 5 (ROJO)"},
		        {"value":"1000", "name":"OPERADOR 6 (MORADO)"},
		        {"value":"1001", "name":"REDES SOCIALES"},
		        {"value":"1016", "name":"PFI"}
		    ]
		});
		
		var txtNroId = {
	    		xtype: 'textfield',
				id: 'txtNroId',
				margin: '0 5 0 0',
				width: 80,
				emptyText:'Nro Id',
				labelAlign: 'top',
				maskRe: /[0-9]/,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var txtNroCaso = {
	    		xtype: 'textfield',
				id: 'txtNroCaso',
				margin: '0 5 0 0',
				width: 80,
				emptyText:'Nro Voxiva',
				labelAlign: 'top',
				maskRe: /[0-9]/,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};

		var cbxUnidadX = {
				xtype: 'ComboGeneric',
				id: 'cbxUnidadX',
				margin: '0 5 0 0',
				width: 180,
				emptyText:'Unidad de atención',
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
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                },
					select:function(f,record){
						var vStoreCaso = Ext.getCmp('cbxCasoX').store;
				  		vStoreCaso.removeAll()
				  		Ext.getCmp('cbxCasoX').reset();
				  		Ext.getCmp('cbxSubcasoX').reset();
				  		vStoreCaso.load({
								params:{ cod: record.data.codUnidad },
								callback:function(){
								}		
							});
					}
	            }
			};
		
		var cbxCasoX = {
				xtype: 'ComboGeneric',
				id: 'cbxCasoX',
				margin: '0 5 0 0',
				width: 180,
				emptyText:'Tipo de caso',
				root:'data',
				autoLoad:true,
				extraParams:{ cod: '-1' },
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-caso-por-unidad',
				queryMode: 'local',
				valueField:'codCaso',
				displayField :'descCaso',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoCaso',
				model: unidadModel,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                },
	                select:function(f,record){
	        	  		var vStoreSubCaso = Ext.getCmp('cbxSubcasoX').store;
	        	  		vStoreSubCaso.removeAll();
	        	  		Ext.getCmp('cbxSubcasoX').reset();
	        	  		vStoreSubCaso.load({
	        					params:{ cod:record.data.codCaso },
	        					callback:function(){}		
	        				});
	        		}
	            }
			};
		
		var cbxSubcasoX = {
				xtype: 'ComboGeneric',
				id: 'cbxSubcasoX',
				margin: '0 5 0 0',
				width: 180,
				emptyText:'Tipo de Subcaso',
				root:'data',
				autoLoad:true,
				extraParams:{ cod: '-1' },
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-subcaso-por-caso',
				queryMode: 'local',
				valueField:'codSubcaso',
				displayField :'descSubcaso',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoSubcaso',
				model: subCasoModel,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var cbxMedioX = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=796',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'tipoModel',
				queryMode: 'local',
				id:'cbxMedioX',
			    emptyText:'Medio',
				forceSelection:true,
				labelAlign: 'left',
			    width:150,
			    margin: '0 5 0 0',
			    name:'medioIngreso',
			    listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var cbxSituacionX = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=869',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'tipoModel',
				queryMode: 'local',
			    id:'cbxSituacionX',
			    emptyText:'Situación',
			    forceSelection:true,
			    labelAlign: 'left',
			    width:150,
			    margin: '0 5 0 0',
			    name:'situacionReporte',
			    listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			}; 
		
		var fecDesdeX = {
				xtype: 'datefield',
				id: 'fecDesdeX',
				emptyText: 'Desde',
				width: 80,
				editable: false,
	    		hideTrigger : true,
	    		listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
        var fecHastaX = {
				xtype: 'datefield',
				id: 'fecHastaX',
				emptyText: 'Hasta',
				width: 80,
				editable: false,
	    		hideTrigger : true,
	    		listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
        
		var cbxAsignadoX = Ext.create('Ext.form.ComboBox', {
			    store: asignadoStore,
			    queryMode: 'local',
			    id:'cbxAsignadoX',
			    forceSelection:true,
			    labelAlign: 'left',
			    fieldLabel: 'Asignado a',
			    valueField: 'value',
			    displayField: 'name',
			    labelWidth: 60,
			    width:240,
			    margin: '0 0 0 10',
			    listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			});
		
		var chkReasignadoX = {
	            xtype: 'checkboxfield',
	            id: 'chkReasignadoX',
	            boxLabel: 'Solo alertas no reasignadas',
	            margin: '0 0 0 20',
	        };
		
		var txtReportX = {
				xtype: 'textfield',
				id: 'txtReportX',
				margin: '0 5 0 5',
				width: 160,
				emptyText:'Nomb. Report.',
				labelAlign: 'top',
//				fieldStyle: 'text-transform:uppercase',
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var txtTelfX = {
				xtype: 'textfield',
				id: 'txtTelfX',
				margin: '0 5 0 0',
				width: 120,
				emptyText:'Telf. Report',
				labelAlign: 'top',
				maskRe: /[0-9]/,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var txtViaX = {
				xtype: 'textfield',
				id: 'txtViaX',
				margin: '0 5 0 0',
				width: 120,
				emptyText:'Nombre de vía',
				labelAlign: 'top',
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var txtCdraX = {
				xtype: 'textfield',
				id: 'txtCdraX',
				margin: '0 5 0 0',
				width: 40,
				emptyText:'Cdra',
				labelAlign: 'top',
				maskRe: /[0-9]/,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) { IncidenciaService.buscar2(); }
	                }
	            }
			};
		
		var btnConsultar = {
	            xtype: 'button',
	            id: 'btnConsultar',
	            margin: '0 5 0 0',
	            text: 'Consultar',
	            iconCls:'btnBuscarSmall',
	            handler:function(){
	            	IncidenciaService.buscar2();
	            }
	        };
		
		var btnLimpiar = {
	            xtype: 'button',
	            id: 'btnLimpiar',
	            iconCls:'btnCleanSmall',
	            margin: '0 5 0 0',
	            text: 'Limpiar',
	            handler:function(){
	            	Ext.getCmp('txtNroId').reset();
	            	Ext.getCmp('txtNroCaso').reset();
	            	if (DES_LOGIN!='PFI.TRANSITO'&&DES_LOGIN!='PFI.FISCALIZ'&&DES_LOGIN!='PFI.DEFENSA'){
            			Ext.getCmp('cbxUnidadX').reset();
            		}
            		if (DES_LOGIN!='PFI.TRANSITO'){
            			Ext.getCmp('cbxCasoX').reset();
            		}
	            	Ext.getCmp('cbxSubcasoX').reset();
	            	Ext.getCmp('cbxMedioX').reset();
	            	Ext.getCmp('cbxSituacionX').reset();
	            	Ext.getCmp('fecDesdeX').reset();
	            	Ext.getCmp('fecHastaX').reset();
	            	Ext.getCmp('cbxAsignadoX').reset();
	            	Ext.getCmp('txtReportX').reset();
	            	Ext.getCmp('txtTelfX').reset();
	            	Ext.getCmp('txtViaX').reset();
	            	Ext.getCmp('txtCdraX').reset();
	            	Ext.getCmp('chkReasignadoX').reset();
	            }
	        };
		
		var btnExportExcel ={
            	xtype: 'button',
				text: 'Exportar',
            	id: 'btnExportExcel',
				iconCls:'exportExcel',
				listeners: {
				},
//				handler:function(){
//					IncidenciaService.openFormExportacion({
//                		title:'Exportar incidencias'
//                	})
//				}
				
				handler:function(){
//    				var form = Ext.getCmp('formExportacion').getForm();
					
    				if(Ext.getCmp('fecDesdeX').getValue()!=null && Ext.getCmp('fecHastaX').getValue()!=null){
    					
    					if(Ext.getCmp('fecDesdeX').getValue()<=Ext.getCmp('fecHastaX').getValue()){
    						var fec1 = Ext.Date.format(Ext.getCmp('fecDesdeX').getValue(), 'd/m/Y');
        					var fec2 = Ext.Date.format(Ext.getCmp('fecHastaX').getValue(), 'd/m/Y');
        					
        					var url = PATH_PROYECTO_BASE+'mapa-incidencia/export-excel?fec1='+fec1+'&fec2='+fec2;
        					
        					var unidad, caso, subcaso;
        					if(Ext.getCmp('cbxUnidadX').getValue()!=null){ 
        						url += "&unidad="+Ext.getCmp('cbxUnidadX').getValue();
        						if(Ext.getCmp('cbxCasoX').getValue()!=null){
            						url += "&caso="+Ext.getCmp('cbxCasoX').getValue();
            						if(Ext.getCmp('cbxSubcasoX').getValue()!=null){
                						url += "&subcaso="+Ext.getCmp('cbxSubcasoX').getValue();
                					}
            					}
        					}
        					
        					window.open(url, "_blank");
    	    				
    					}else{
    						
    						Ext.Msg.alert('Rango de fechas inconsistente','La fecha de inicio no puede ser mayor que la fecha de fin', Ext.emptyFn);
    						
    					}
    					
	    				
    				} else {
    					Ext.Msg.alert('Rango de fechas requerido','Por favor, indique la fecha de inicio y fin para la exportación', Ext.emptyFn);
    				}
    			}
			};
		
		var btnAddGeo2 = {
        	  	text:'Nuevo',
                id:'btnAddGeo2',
//                iconCls:'btnNewReg',
                iconCls:'btnAddSmall',
                handler:function(){
                	IncidenciaService.openFormRegistroNuevo({
                		title:'Registrar Incidencia'
                	});
                }
            };
		
		var btnMenuUser = {
	            xtype:'splitbutton',
	            id: 'btnMenuUser',
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
	        };
		
		var btnReasignar = {
//				iconCls : 'btnReasignar',
            	xtype: 'button',
				text:'Reasignar...',
				id:'btnReasignar',
				iconcls: 'btnReasignarSmall',
//				disabled:true,
				handler : function() {
					var grid = Ext.getCmp('grid-incidencias');
					var selection= grid.getSelectionModel(); 
					var params = {};
					var listIds = [];
					var idx = -1;
					var valid = 1;
					var esNuevo = true;
					for(i=0;i < grid.store.getCount();i++){
						if(selection.isSelected(i)){
							if(grid.store.data.items[i].data.codSituacion!=873){
								esNuevo = false;
							}
							idx = idx+1;
							listIds.push = grid.store.data.items[i].data.idIncidencia; 
							if(grid.store.data.items[i].data.tpoOperador==1001){ valid=0; }
							params['listIds['+idx+']'] = grid.store.data.items[i].data.idIncidencia;
						}
					}
					if(!esNuevo){
						Ext.Msg.alert('Selección restringida','Sólo puede reasignar incidencias nuevas', Ext.emptyFn);
					} else if (valid==0){
						Ext.Msg.alert('Selección restringida','No puede reasignar incidencias para operador de redes sociales', Ext.emptyFn);
					} else if (idx<0){
						Ext.Msg.alert('Selección requerida','Debe seleccionar al menos un registro para reasignar', Ext.emptyFn);
					} else {
						IncidenciaService.openFormReasignacion({
                    		options: params
                    	})
					}
				},
            };
		
		Ext.define('IncidenciaGeneric', {
			     extend: 'Ext.data.Model',
			     fields: [
						'idIncidencia','codUnidad','codCaso','codSubcaso','codMedio','codSituacion',
						'descUnidad','descCaso','descSubcaso','descMedio','descSituacion',
						'nombReport','telfReport','coordenadas','descVia','cdra','zona','subzona','area','descripcion',
						'fecNotificacion','fecEvento','fecAtencion','fecCierre',
						'codSeveridad','codEstado','codSubestado','codModalidad','descMotivo','tpoHallazgo',
						'estReg','nroCasoVoxiva','visible','tpoOperador','usrRegistra','usrModifica','urlAudio','param1','param2',
						{
					       	name:'strFecNotificacion',
					       	mapping : 'fecNotificacion',
					       	convert : function(v){
					       		if(v){ return Ext.Date.format(new Date(v), 'd/m/Y h:i:s A'); }
					       		else{ return ""; }
					       	}
						},
						{
					       	name:'strFecEvento',
					       	mapping : 'fecEvento',
					       	convert : function(v){
					       		if(v){ return Ext.Date.format(new Date(v), 'd/m/Y h:i:s A'); }
					       		else{ return ""; }
					       	}
						},
						{
					       	name:'strFecAtencion',
					       	mapping : 'fecAtencion',
					       	convert : function(v){
					       		if(v){ return Ext.Date.format(new Date(v), 'd/m/Y h:i:s A'); }
					       		else{ return ""; }
					       	}
						},
						{
					       	name:'strSeveridad',
					       	mapping : 'codSeveridad',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       	   	case 846:	str = 'DAÑOS MATERIALES'; break; 
							       	case 847:	str = 'DAÑOS MATERIALES/LESIONES'; break; 
							       	case 848:	str = 'LESIONES LEVES'; break; 
							       	case 849:	str = 'LESIONES GRAVES'; break; 
							       	case 850:	str = 'FATAL'; break; 
							       	default:	str = ''; break;
					       		}
							    return str;
					       	}
						},
						{
					       	name:'strEstado',
					       	mapping : 'codEstado',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       		case 829:	str = 'COMETIDO'; break; 
						       		case 830:	str = 'FRUSTRADO'; break; 
							       	default:	str = ''; break;
					       		}
							    return str;
					       	}
						},
						{
					       	name:'strSubestado',
					       	mapping : 'codSubestado',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       		case 832:	str = 'CON CAPTURA'; break; 
						       		case 833:	str = 'SIN CAPTURA'; break; 
							       	default:	str = ''; break;
					       		}
							    return str;
					       	}
						},
						{
					       	name:'strModalidad',
					       	mapping : 'codModalidad',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       		case 852:	str = 'ASALTO A MANO ARMADA'; break; 
						       		case 853:	str = 'ARREBATO'; break; 
						       		case 854:	str = 'CASCADA'; break; 
						       		case 855:	str = 'COGOTEO'; break; 
						       		case 856:	str = 'ESCALAMIENTO'; break; 
						       		case 857:	str = 'FORADO'; break; 
						       		case 858:	str = 'HURTO SIMPLE'; break; 
						       		case 859:	str = 'HURTO AGRAVADO'; break; 
						       		case 860:	str = 'HURTO ESTACIONADO'; break; 
						       		case 861:	str = 'PUERTA FRACTURADA'; break; 
						       		case 862:	str = 'ROBO'; break; 
						       		case 863:	str = 'ROBO AGRAVADO'; break; 
						       		case 864:	str = 'TENDERO'; break; 
						       		default:	str = ''; break;
					       		}
							    return str;
					       	}
						},
						{
					       	name:'strTpoHallazgo',
					       	mapping : 'tpoHallazgo',
					       	convert : function(v){
					       		var str;
					       		switch (v) {
						       		case 776:	str = 'HUMANO'; break; 
						       		case 777:	str = 'ANIMAL'; break; 
							       	default:	str = ''; break;
					       		}
							    return str;
					       	}
						},
						{
					       	name:'strTpoOperador',
					       	mapping : 'tpoOperador',
					       	convert : function(v){
					       		var str = null;
					       		switch (v) {
						       	   	case 995:	str = 'OPERADOR 1 (AZUL)'; break; 
							       	case 996:	str = 'OPERADOR 2 (VERDE)'; break; 
							       	case 997:	str = 'OPERADOR 3 (AMARILLO)'; break; 
							       	case 998:	str = 'OPERADOR 4 (NARANJA)'; break; 
							       	case 999:	str = 'OPERADOR 5 (ROJO)'; break;
							       	case 1000:	str = 'OPERADOR 6 (MORADO)'; break;
							       	case 1001:	str = 'REDES SOCIALES'; break;
							       	case 1016:	str = 'PFI'; break;
							       	default: break;
					       		}
							    return str;
					       	}
						},
				]
			});
			 
		var store = Ext.create('Ext.data.Store', {
				autoLoad : true,
				model : 'IncidenciaGeneric',
				pageSize: 30,
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
				
		var grid = Ext.create('Ext.grid.Panel', {
			    store: store,
			    renderTo:'render',
			    title:'Administración de Incidencias',
			    id:'grid-incidencias',
//			    overflowX: 'scroll',
//			    width: 1700,
			    align: 'center',
			    autoScroll: true,
			    border:true,
			    columns: [
	                { text: 'Id',  dataIndex: 'idIncidencia', width: 60, locked:true },
			        {
			            xtype:'actioncolumn',
			       		width:30,
			            align:'center',
			            locked: true,
			            lockable: true,
			            items: [{
			                icon: PATH_PROYECTO_BASE+'images/edit_16.png',
			                tooltip: 'Editar',
			                handler: function(grid, rowIndex, colIndex) {
			                	var record = grid.getStore().getAt(rowIndex);
			                	if (ROL==901 || ROL==903 
			                			|| (ROL==902 && record.data.tpoOperador==ROLROL && ROLROL==1016)
//			                			|| (ROL==902 && record.data.tpoOperador==ROLROL && ROLROL!=1016 && record.data.codSituacion==873)){
			                			|| (ROL==902 && ROLROL!=1016 && record.data.codSituacion==873)){
			                		IncidenciaService.openFormRegistroNuevo({
					           			title:'Editar incidencia', 
					           			codIncidencia: record.data.idIncidencia
					           		});
			                	} else {
			                		Ext.Msg.alert('Acceso no autorizado', 'No puede editar este registro');
			                	}
			                	
			                }
			            }]
			        },
			        {
			            xtype:'actioncolumn',
			       		width:30,
			       		id:'colDelete',
			            align:'right',
			            lockable: true,
			            locked: true,
//			            hidden: true,
			            items: [{
			            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
			                tooltip: 'Eliminar',
			                hidden: function () {
				    			if (ROL == 901) {
				    	             return false;
				    	        } else {
				    	            return true;
				    	        }
				            },
			                handler: function(grid, rowIndex, colIndex) {
			                	var record = grid.getStore().getAt(rowIndex);
			                	if (ROL==901 || ROL==903){
			                		Ext.Msg.confirm('Confirmar', '¿Seguro de eliminar el registro seleccionado?', function(btn, text){
									    if (btn == 'yes'){
									    	Util.runAjax({
												url:PATH_PROYECTO_BASE+'mapa-incidencia/desactivar-incidencia',
												params:{ cod:record.data.idIncidencia },
												async : false,
												method : 'POST',
												success:function(http){
													var response = Ext.decode(http.responseText);
													IncidenciaService.buscar2();
												}
											});
									    }
									});
			                	} else {
			                		Ext.Msg.alert('Acción no autorizada', 'No puede eliminar este registro');
			                	}
			                }
			            }]
			        },
			        { text: 'F.Notific',  dataIndex: 'strFecNotificacion', width: 150 },
			        { text: 'Vox',  dataIndex: 'nroCasoVoxiva', width: 60 },
			        { text: 'Coordenadas',  dataIndex: 'coordenadas', hidden:true, width: 200},
			        { text: 'Situación',  dataIndex: 'descSituacion', width: 80},	//width: 180 
			        { text: 'Medio',  dataIndex: 'descMedio', width: 130},	//width: 120 
			        { text: 'Unidad',  dataIndex: 'descUnidad',  width: 140},
			        { text: 'Caso',  dataIndex: 'descCaso', width: 220 },
			        { text: 'Subcaso',  dataIndex: 'descSubcaso',  width: 240},
			        { text: 'Reportante',  dataIndex: 'nombReport', width: 180},
			        { text: 'Telf. Report.',  dataIndex: 'telfReport' , width: 90},
			        { text: 'Area',  dataIndex: 'area', hidden:true, width: 100},
			        { text: 'Zona',  dataIndex: 'zona', hidden:true, width: 120 },
			        { text: 'Subzona',  dataIndex: 'subzona', hidden:true, width: 120},
			        { text: 'Via',  dataIndex: 'descVia', hidden:true, width: 160}, 
			        { text: 'Cdra',  dataIndex: 'cdra', hidden:true, width: 60 },
//			        { text: 'Descripción',  dataIndex: 'descripcion', hidden:true, flex : 1},
			        { text: 'F.Evento',  dataIndex: 'strFecEvento', hidden:true, width: 150 },
			        { text: 'F.Atención',  dataIndex: 'strFecAtencion', hidden:true, width: 150 },
//			        { text: 'F.Cierre',  dataIndex: 'fecCierre', hidden:true, flex : 1},
			        { text: 'Severidad',  dataIndex: 'strSeveridad', hidden:true, width: 160 },
			        { text: 'Estado',  dataIndex: 'strEstado', hidden:true , width: 120 },
			        { text: 'Subestado',  dataIndex: 'strSubestado', hidden:true, width: 120 },
			        { text: 'Modalidad',  dataIndex: 'strModalidad', hidden:true, flex : 1},
			        { text: 'Motivo',  dataIndex: 'descMotivo', hidden:true, flex : 1},
			        { text: 'Tipo Hallazgo',  dataIndex: 'strTpoHallazgo', hidden:true, flex : 1},
//			        { text: 'Est. Reg.',  dataIndex: 'estReg', hidden:true, flex : 1},
//			        { text: 'Visible',  dataIndex: 'visible', hidden:true, flex : 1},
			        { text: 'Asignado a',  dataIndex: 'strTpoOperador', width: 150 },
			        { text: 'U. Registro',  dataIndex: 'usrRegistra', width: 160 },
			        { text: 'U. Modific.',  dataIndex: 'usrModifica', hidden:true, width: 160 }
			    ],
			    
				selModel: {
	                selType: 'checkboxmodel'
	            },
				height: $(window).height()-30,
				width:$(window).width()-30,
				dockedItems: [
					{
					    xtype: 'pagingtoolbar',
					    store: store,
					    dock: 'bottom',
					    displayInfo: true
					},
					{
			            xtype: 'toolbar',
			            id: 'toolbarLine1',
			            dock: 'top',
			            items: [
			            	txtNroId,
			            	txtNroCaso,
			            	cbxMedioX,
							cbxSituacionX,
			            	cbxUnidadX,
			            	cbxCasoX,
			            	cbxSubcasoX,
			            	btnConsultar,
			            	btnLimpiar,
			            	'->',
			            	btnAddGeo2,
			            	btnExportExcel,
			                btnMenuUser
			            ]
			        },
			        {
			            xtype: 'toolbar',
			            id: 'toolbarLine2',
			            dock: 'top',
			            items: [
			            	'Período',
			            	fecDesdeX,
			            	'a',
			                fecHastaX,
			                cbxAsignadoX,
			                txtReportX,
			                txtTelfX,
			                txtViaX,
			                txtCdraX,
			                chkReasignadoX,
			                '->',
			                btnReasignar
			            ]
					}
				],
				listeners:{
    				afterrender:function(){
    					if(ROL==902){
    						Ext.getCmp('chkReasignadoX').setHidden(true); Ext.getCmp('chkReasignadoX').disable();
    						Ext.getCmp('btnExportExcel').setHidden(true); Ext.getCmp('btnExportExcel').disable();
    						Ext.getCmp('btnReasignar').setHidden(true); Ext.getCmp('btnReasignar').disable();
    					}
    					if(ROLROL>994 && ROLROL>1002){
    						
    					}
    					if(ROL==901){
    						Ext.getCmp('colDelete').setHidden(false);
    					}else{
    						Ext.getCmp('colDelete').setHidden(true);
    					}
    					if(ROL==992){
    						Ext.getCmp('toolbarLine2').setHidden(true);
    						Ext.getCmp('btnExportExcel').setHidden(true); Ext.getCmp('btnExportExcel').disable();
    					}
    				}
				}
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
	

	reiniciarForm: function(){
		
		Ext.getCmp('txtCarnetExt').reset();
		Ext.getCmp('cbxNacionalidad').reset();
		Ext.getCmp('txtDirecReport').reset();
		Ext.getCmp('cbxSeveridad').reset();
		Ext.getCmp('cbxTpoHallazgo').reset();
		Ext.getCmp('txtMotivo').reset();
		Ext.getCmp('cbxEstado').reset();
		Ext.getCmp('cbxSubEstado').reset();
		Ext.getCmp('cbxModalidad').reset();
//		Ext.getCmp('pnInvoluc').reset();
//		Ext.getCmp('pnVehic').reset();
		
		Ext.getCmp('txtCarnetExt').setHidden(true);
		Ext.getCmp('cbxNacionalidad').setHidden(true);
		Ext.getCmp('txtDirecReport').setHidden(true);
		Ext.getCmp('cbxSeveridad').setHidden(true);
		Ext.getCmp('cbxTpoHallazgo').setHidden(true);
		Ext.getCmp('txtMotivo').setHidden(true);
		Ext.getCmp('cbxEstado').setHidden(true);
		Ext.getCmp('cbxSubEstado').setHidden(true);
		Ext.getCmp('cbxModalidad').setHidden(true);
		Ext.getCmp('pnInvoluc').setHidden(true);
		Ext.getCmp('pnVehic').setHidden(true);
	
	},
	
	onChangeUnidadCaso: function(vUnidad, vCaso){
		IncidenciaService.reiniciarForm();
		var uc = vUnidad*100+vCaso;
		switch( uc ) {
			case 101: 
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				Ext.getCmp('cbxSeveridad').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 102: 
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				Ext.getCmp('cbxEstado').setHidden(false);
				Ext.getCmp('cbxSubEstado').setHidden(false);
				Ext.getCmp('cbxModalidad').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 103: 
			case 105: 
			case 106: 
			case 107: 
			case 209: 
			case 313: 
			case 314: 
			case 315: 
			case 316: 
			case 317: 
			case 419: 
			case 520: 
			case 521: 
			case 522: 
			case 523: 
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				break;
			case 210: 
				Ext.getCmp('txtDirecReport').setHidden(false);
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				break;
			case 104:
			case 418:
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 108: 
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 311: 
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				Ext.getCmp('pnVehic').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 312: 
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtTelfReport').setHidden(false);
				Ext.getCmp('pnVehic').setHidden(false);
				break;
			case 624: 
				Ext.getCmp('txtCarnetExt').setHidden(false);
				Ext.getCmp('cbxNacionalidad').setHidden(false);
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtCarnetExt').setHidden(false);
				Ext.getCmp('cbxNacionalidad').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 625: 
			case 626: 
			case 627: 
			case 628: 
			case 629: 
			case 630: 
			case 631: 
				Ext.getCmp('txtCarnetExt').setHidden(false);
				Ext.getCmp('cbxNacionalidad').setHidden(false);
				Ext.getCmp('txtNombReport').setHidden(false);
				Ext.getCmp('txtCarnetExt').setHidden(false);
				Ext.getCmp('cbxNacionalidad').setHidden(false);
				break;
			default: break;
		}
		
		switch(vCaso){
			case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 9: case 10: case 18:
				Ext.getCmp('cbxSubCaso').enable();
				break;
			default:
				Ext.getCmp('cbxSubCaso').disable();
				break;
		}
	},
		
	onChangeSubCaso: function(vSubcaso){
		switch( vSubcaso ) {
			case 6:
			case 7:
			case 8:
			case 9:
			case 12:
			case 13:
				Ext.getCmp('tbVehic').getStore().removeAll();
				Ext.getCmp('tbVehic').getStore().sync();
				Ext.getCmp('pnVehic').setHidden(true);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 10:
			case 11:
				Ext.getCmp('pnVehic').setHidden(false);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 14:
				Ext.getCmp('cbxTpoHallazgo').setHidden(false);
				break;
			case 15:
			case 16:
			case 17:
				Ext.getCmp('cbxTpoHallazgo').setHidden(true);
				break;
			case 25:
				Ext.getCmp('txtMotivo').setHidden(false);
				break;
			case 24:
			case 26:
				Ext.getCmp('txtMotivo').setHidden(true);
				break;
			case 27:
				Ext.getCmp('pnVehic').setHidden(false);
				Ext.getCmp('tbInvoluc').getStore().removeAll();
				Ext.getCmp('tbInvoluc').getStore().sync();
				Ext.getCmp('pnInvoluc').setHidden(true);
				break;
			case 28:
				Ext.getCmp('tbVehic').getStore().removeAll();
				Ext.getCmp('tbVehic').getStore().sync();
				Ext.getCmp('pnVehic').setHidden(true);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 29:
			case 30:
				Ext.getCmp('tbVehic').getStore().removeAll();
				Ext.getCmp('tbVehic').getStore().sync();
				Ext.getCmp('pnVehic').setHidden(true);
				Ext.getCmp('pnInvoluc').setHidden(true);
				break;
			case 31:
				Ext.getCmp('tbVehic').getStore().removeAll();
				Ext.getCmp('tbVehic').getStore().sync();
				Ext.getCmp('pnVehic').setHidden(true);
				Ext.getCmp('pnInvoluc').setHidden(false);
				break;
			case 32:
				Ext.getCmp('pnVehic').setHidden(false);
				Ext.getCmp('tbInvoluc').getStore().removeAll();
				Ext.getCmp('tbInvoluc').getStore().sync();
				Ext.getCmp('pnInvoluc').setHidden(true);
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
		
		var codInterv = {
				xtype: 'textfield',
				id: 'codInterv',
				margin: '10 0 0 0 ',
				width: 0,
				hidden: true,
				editable: false,
				fieldLabel: 'Cod.Interv',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
				};
		
		var idIncidenciaInterv = {
				xtype: 'textfield',
				id: 'idIncidenciaInterv',
				margin: '10 0 0 0 ',
				width: 0,
				hidden: true,
				editable: false,
				fieldLabel: 'Id Incidencia',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
			};
		
		var cbxTpoInterv = {
				xtype: 'ComboGeneric',
				id: 'cbxTpoInterv',
				//             width: 380,
				fieldLabel: 'Tipo de Interv.',
				labelWidth: 120,
				root:'data',
				autoLoad:true,
				allowBlank: false,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=835',
				queryMode: 'local',
				valueField:'codTipo',
				displayField :'descTipo',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoFuerzaInterv',
				model: maestroTipoModel
			};
		
		var cbxTpoPuesto = {
				xtype: 'ComboGeneric',
				id: 'cbxTpoPuesto',
				//                width: 380,
				fieldLabel: 'Unidad o Puesto',
				labelWidth: 120,
				hidden: true,
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=835',
				queryMode: 'local',
				valueField:'codTipo',
				displayField :'descTipo',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoPuestoInterv',
				model: maestroTipoModel
		    };
		
		var descTpoPuesto = {
				xtype: 'textfield',
				id: 'descTpoPuesto',
				//             width: 380,
				fieldLabel: 'Unidad o puesto',
				name: 'descTpoPuesto',
				enforceMaxLength: true,
				allowBlank: false,
			    maxLength: 100,
			    fieldStyle: 'text-transform:uppercase',
			    labelWidth: 120
			};
		
		var nombInterv = {
				xtype: 'textfield',
				id: 'nombInterv',
				//             width: 380,
				fieldLabel: 'Nombre de Interv.',
				name: 'nombInterv',
				enforceMaxLength: true,
				allowBlank: false,
			    maxLength: 200,
			    fieldStyle: 'text-transform:uppercase',
			    labelWidth: 120
			};
		
		var apoyoPolicialInterv = {
				xtype: 'textfield',
				id: 'apoyoPolicialInterv',
				//             width: 380,
				fieldLabel: 'Apoyo policial',
				name: 'apoyoPolicial',
				enforceMaxLength: true,
			    maxLength: 200,
			    fieldStyle: 'text-transform:uppercase',
			    labelWidth: 120
			};
		
		var infoInterv = {
				xtype: 'textfield',
				id: 'infoInterv',
				//           width: 380,
				fieldLabel: 'Info. Adic.',
				name: 'infoInterv',
				hidden: true,
				enforceMaxLength: true,
			    maxLength: 2000,
			    fieldStyle: 'text-transform:uppercase',
			    labelWidth: 120
			};
		
		var estRegInterv = {
				xtype: 'textfield',
				id: 'estRegInterv',
				//           width: 380,
				fieldLabel: 'Estado',
				name: 'estReg',
				hidden: true,
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 120
			};
    
		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    maxHeight: 600,
		    minHeight: 100,
		    width: 400,
//		    heigth: 280,
		    modal:true,
		    overflowY: 'scroll',
		    id: 'wInterviniente',
		    itemId: 'wInterviniente',
		    layout: 'column',
			items: [
				{
		            xtype: 'form',
		            id: 'formInterviniente',
		            region: 'center',
//		            scrollable: true,
		            layout: 'form',
		            padding: '0 10 0 0',
		            width: 380,
//		            bodyPadding: 10,
//				 	manageHeight: false,
//				 	title: 'INVOLUCRADO',
		            items: [
		            	codInterv,
		            	idIncidenciaInterv,
		            	cbxTpoInterv,
		            	descTpoPuesto,
		            	nombInterv,
		            	apoyoPolicialInterv,
		            	infoInterv
		            ]
		        }
			]
			,
			buttons:[
	    		{
	    			text:'Agregar',
	    			handler:function(){
	    				try{
	    					var interviniente = Ext.create('IntervinienteModel', {
	    						codInterv: 		Ext.getCmp('codInterv').getValue(),
		    					idIncidencia: 	Ext.getCmp('idIncidencia').getValue(),
		    					codTpoInterv: 	Ext.getCmp('cbxTpoInterv').getValue(),
//		    					codTpoPuesto: 	999999,//Ext.getCmp('cbxTpoPuesto').getValue(),
		    					descTpoInterv: 	Ext.getCmp('cbxTpoInterv').getRawValue(),
		    					descTpoPuesto: 	Ext.getCmp('descTpoPuesto').getValue(),
		    					nombInterv: 	Ext.getCmp('nombInterv').getValue(),
		    					apoyoPolicial: 	Ext.getCmp('apoyoPolicialInterv').getValue(),
		    					infoInterv: 	Ext.getCmp('infoInterv').getValue(),
		    					estReg: 		'A' //Ext.getCmp('estRegInterv').getValue()
		    				});
		    				Ext.getCmp('tbInterv').store.add(interviniente);
		    				Ext.getCmp('wInterviniente').close();
		    				Ext.id();
	    				}catch(e){
	    					console.error("Exception thrown", e.stack);
	    				}
	    				
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wInterviniente').close();
	    				Ext.id();
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
		
		var codInvoluc = {
                xtype: 'textfield',
                id: 'codInvoluc',
                margin: '10 0 0 0 ',
                width: 0,
                hidden: true,
                editable: false,
                fieldLabel: 'Cod.Involuc',
                fieldStyle: 'text-transform:uppercase',
                labelWidth: 0
            };
		
        var idIncidenciaInvoluc = {
                xtype: 'textfield',
                id: 'idIncidenciaInvoluc',
                margin: '10 0 0 0 ',
                width: 0,
                hidden: true,
                editable: false,
                fieldLabel: 'Id Incidencia',
                fieldStyle: 'text-transform:uppercase',
                labelWidth: 0
            };
        
    	var cbxTpoInvoluc = {
                xtype: 'ComboGeneric',
                id: 'cbxTpoInvoluc',
                margin: '0 20 0 0 ',
                fieldLabel: 'Tipo',
                labelWidth: 60,
                root:'data',
                editable: false,
                allowBlank: false,
            	autoLoad:true,
            	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=803',
            	queryMode: 'local',
            	valueField:'codTipo',
            	displayField :'descTipo',
            	forceSelection:true,
            	style:'margin-bottom:10px;',
            	name:'tipoInvolucrado',
            	model: maestroTipoModel,
            	listeners:{
					select:function(f,record){
						if (Ext.getCmp('cbxTpoInvoluc').getValue()==868) {
							Ext.getCmp('conductorVehiculo').setHidden(false);
						} else {
							Ext.getCmp('conductorVehiculo').setHidden(true);
							Ext.getCmp('cbxClaseInvoluc').reset();
							Ext.getCmp('cbxMarcaInvoluc').reset();
							Ext.getCmp('modelInvoluc').reset();
							Ext.getCmp('placaInvoluc').reset();
							Ext.getCmp('colorInvoluc').reset();
							Ext.getCmp('anioInvoluc').reset();
						}
					}
				}
            };
    	
        var nombInvoluc = {
                xtype: 'textfield',
                id: 'nombInvoluc',
                width: 310,
                fieldLabel: 'Nombre',
                labelWidth: 65,
                enforceMaxLength: true,
                allowBlank: false,
			    maxLength: 200,
			    fieldStyle: 'text-transform:uppercase',
                autoLoad:true,
            };
        
        var cbxTpoDocInvoluc = {
                xtype: 'ComboGeneric',
                id: 'cbxTpoDocInvoluc',
                margin: '10 20 0 0 ',
                fieldLabel: 'Tpo. Doc.',
                editable: false,
                allowBlank: false,
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
            };
        
        var numDocInvoluc = {
                xtype: 'textfield',
                id: 'numDocInvoluc',
                margin: '10 20 0 0 ',
                width: 200,
                fieldLabel: 'Num. Doc.',
                enforceMaxLength: true,
                allowBlank: false,
			    maxLength: 15,
			    vtype: 'alphanum',
			    fieldStyle: 'text-transform:uppercase',
                labelWidth: 65
            };
        
        var edadInvoluc = {
                xtype: 'textfield',
                id: 'edadInvoluc',
                margin: '10 0 0 0 ',
                width: 90,
                fieldLabel: 'Edad',
                enforceMaxLength: true,
			    maxLength: 2,
			    maskRe: /[0-9]/,
			    fieldStyle: 'text-transform:uppercase',
                labelWidth: 40
            };
        
        var estRegInvoluc = {
                xtype: 'textfield',
                id: 'estRegInvoluc',
                margin: '10 0 0 0 ',
                width: 0,
                fieldLabel: 'Estado',
                hidden: true,
                fieldStyle: 'text-transform:uppercase',
                labelWidth: 0
            };
        
        var descObservInvoluc = {
                xtype: 'textareafield',
                height: 82,
                id: 'descObservInvoluc',
                margin: '10 0 0 0',
                width: 545,
                fieldLabel: 'Observaciones y/o características',
                enforceMaxLength: true,
			    maxLength: 1000,
			    fieldStyle: 'text-transform:uppercase',
                labelWidth: 120
            };
		
        var codVehicInvoluc = {
                xtype: 'textfield',
                id: 'codVehicInvoluc',
                margin: '10 0 0 0 ',
                width: 0,
                hidden: true,
                editable: false,
                fieldLabel: 'Cod. Vehic',
                fieldStyle: 'text-transform:uppercase',
                labelWidth: 0
            };
        
        var cbxClaseInvoluc = {
        		xtype: 'ComboGeneric',
	    		id: 'cbxClaseInvoluc',
	    		margin: '0 20 5 0',
                width: 200,
//	    		hidden: true,
	    		fieldLabel: 'Clase',
	    		labelWidth: 50,
	    		extraParams:{	},
	    		root:'data',
	    		autoLoad:true,
	    		url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=949', 
	    		queryMode: 'local',
	    		valueField:'codTipo',
	    		displayField :'descTipo',
	    		forceSelection:true,
	    		style:'margin-bottom:10px;',
	    		name:'claseVehicInvoluc',
	    		model: maestroTipoModel
            };
        
		var claseInvoluc = {
                xtype: 'textfield',
                id: 'claseInvoluc',
                margin: '0 20 5 0',
                width: 200,
                fieldLabel: 'Clase',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
			    emptyText: 'Clase'
            };
		
		var cbxMarcaInvoluc = {
        		xtype: 'ComboGeneric',
	    		id: 'cbxMarcaInvoluc',
	    		margin: '0 0 5 0',
                width: 200,
//	    		hidden: true,
	    		fieldLabel: 'Marca',
	    		labelWidth: 50,
	    		extraParams:{	},
	    		root:'data',
	    		autoLoad:true,
	    		url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=964', 
	    		queryMode: 'local',
	    		valueField:'codTipo',
	    		displayField :'descTipo',
	    		forceSelection:true,
	    		style:'margin-bottom:10px;',
	    		name:'marcaVehicInvoluc',
	    		model: maestroTipoModel
            };
		
        var	marcaInvoluc = {
                xtype: 'textfield',
                id: 'marcaInvoluc',
                margin: '0 0 5 0',
                width: 200,
                fieldLabel: 'Marca',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Marca'
            };
        
        var modelInvoluc = {
                xtype: 'textfield',
                id: 'modelInvoluc',
                margin: '0 20 5 0',
                width: 200,
                fieldLabel: 'Modelo',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Modelo'
            };
        
        var placaInvoluc = {
                xtype: 'textfield',
                id: 'placaInvoluc',
                margin: '0 0 5 0',
                width: 200,
                fieldLabel: 'Placa',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Placa'
            };
        
        var colorInvoluc = {
                xtype: 'textfield',
                id: 'colorInvoluc',
                margin: '0 20 0 0',
                width: 200,
                fieldLabel: 'Color',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Color'
            };
        
        var anioInvoluc = {
                xtype: 'textfield',
                id: 'anioInvoluc',
                width: 200,
                fieldLabel: 'Año',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 4,
//			    vtype: 'num',
//			    maskRe: /^[1-9][0-9][0-9][0-9]$/,
//			    fieldStyle: 'text-transform:uppercase',
			    emptyText: 'Año'
            };
        
        Ext.create('Ext.window.Window', {
		    title: options.title,
		    heigth: 280,
//		    maxHeight: 600,
		    minHeight: 100,
		    width: 600,
		    modal:true,
//		    overflowY: 'scroll',
		    id: 'wInvolucrado',
		    itemId: 'wInvolucrado',
		    layout: 'column',
			items: [
				{
		            xtype: 'form',
		            id: 'formInvolucrado',
		            region: 'center',
//		            scrollable: true,
//		            overflowY: 'scroll',
		            width: 585,
		            layout: 'column',
		            overflowY: 'scroll',
		            bodyPadding: 10,
		            items: [
		            	codInvoluc,
		            	idIncidenciaInvoluc,
		            	cbxTpoInvoluc,
		            	nombInvoluc,
		            	cbxTpoDocInvoluc,
		            	numDocInvoluc,
		            	edadInvoluc,
		            	estRegInvoluc,
		            	descObservInvoluc,
		            	{
		                    xtype: 'fieldcontainer',
		                    id: 'conductorVehiculo',
		                    margin: '10 0 0 0',
		                    width: 565,
		                    layout: 'column',
		                    fieldLabel: 'Vehiculo',
		                    labelWidth: 120,
		                    hidden: true,
		                    items: [
		                    	cbxClaseInvoluc,
		                    	cbxMarcaInvoluc,
		                    	modelInvoluc,
		                    	placaInvoluc,
		                    	colorInvoluc,
		                    	anioInvoluc
		                    ]
		                }
		            ]
				}
			],
			buttons:[
	    		{
	    			text:'Agregar',
	    			handler:function(){
	    				var involucrado = Ext.create('InvolucradoModel', {
		    					codInvoluc: 	Ext.getCmp('codInvoluc').getValue(),
		    					idIncidencia: 	Ext.getCmp('idIncidencia').getValue(),
		    					codTpoInvoluc:	Ext.getCmp('cbxTpoInvoluc').getValue(),
		    					codTpoDoc: 		Ext.getCmp('cbxTpoDocInvoluc').getValue(),
		    					descTpoInvoluc:	Ext.getCmp('cbxTpoInvoluc').getRawValue(),
		    					descTpoDoc: 	Ext.getCmp('cbxTpoDocInvoluc').getRawValue(),
		    					nombInvoluc: 	Ext.getCmp('nombInvoluc').getValue(),
		    					edadInvoluc: 	Ext.getCmp('edadInvoluc').getValue(),
		    					numDocInvoluc: 	Ext.getCmp('numDocInvoluc').getValue(),
		    					descObserv: 	Ext.getCmp('descObservInvoluc').getValue(),
		    					estReg: 		'A', //Ext.getCmp('estRegInvoluc').getValue(),
		    					codClaseVehic: 	Ext.getCmp('cbxClaseInvoluc').getValue(),
		    					claseVehic: 	Ext.getCmp('cbxClaseInvoluc').getRawValue(),
		    					codMarcaVehic: 	Ext.getCmp('cbxMarcaInvoluc').getValue(),
		    					marcaVehic: 	Ext.getCmp('cbxMarcaInvoluc').getRawValue(),
		    					modelVehic: 	Ext.getCmp('modelInvoluc').getValue(),
		    					placaVehic: 	Ext.getCmp('placaInvoluc').getValue(),
		    					colorVehic: 	Ext.getCmp('colorInvoluc').getValue(),
		    					anioVehic: 		Ext.getCmp('anioInvoluc').getValue(),
	    				});
	    				Ext.getCmp('tbInvoluc').store.add(involucrado);
	    				Ext.getCmp('wInvolucrado').close();
	    				Ext.id();
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wInvolucrado').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	},

	
	openFormVehiculo:function(options){

		options = options || {};
		
		var maestroTipoModel = Ext.create('Ext.data.Model', {
				fields: [
			        {name: 'codTipo',  type: 'int'},
					{name: 'codTpoPadre',  type: 'int'},
			        {name: 'descTipo',   type: 'string'},
			    ]
			});
		
		var codVehic = {
				xtype: 'textfield',
				id: 'codVehic',
				margin: '10 0 0 0 ',
				width: 0,
				hidden: true,
				editable: false,
				fieldLabel: 'Cod.Interv',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
				};
		
		var idIncidenciaVehic = {
				xtype: 'textfield',
				id: 'idIncidenciaVehic',
				margin: '10 0 0 0 ',
				width: 0,
				hidden: true,
				editable: false,
				fieldLabel: 'Id Incidencia',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
			};
		
		var cbxClaseVehic = {
        		xtype: 'ComboGeneric',
	    		id: 'cbxClaseVehic',
	    		margin: '0 20 5 0',
                width: 210,
//	    		hidden: true,
	    		fieldLabel: 'Clase',
	    		labelWidth: 50,
	    		extraParams:{	},
	    		root:'data',
	    		autoLoad:true,
	    		url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=949', 
	    		queryMode: 'local',
	    		valueField:'codTipo',
	    		displayField :'descTipo',
	    		forceSelection:true,
	    		style:'margin-bottom:10px;',
	    		name:'claseVehicInvoluc',
	    		model: maestroTipoModel
            };
        
		var claseVehic = {
                xtype: 'textfield',
                id: 'claseVehic',
                margin: '0 20 5 0',
                width: 210,
                fieldLabel: 'Clase',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
                allowBlank: false,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//			    emptyText: 'Clase'
            };
		
		var cbxMarcaVehic = {
        		xtype: 'ComboGeneric',
	    		id: 'cbxMarcaVehic',
	    		margin: '0 0 5 0',
                width: 210,
//	    		hidden: true,
	    		fieldLabel: 'Marca',
	    		labelWidth: 50,
	    		extraParams:{	},
	    		root:'data',
	    		autoLoad:true,
	    		url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=964', 
	    		queryMode: 'local',
	    		valueField:'codTipo',
	    		displayField :'descTipo',
	    		forceSelection:true,
	    		style:'margin-bottom:10px;',
	    		name:'marcaVehic',
	    		model: maestroTipoModel
            };
		
        var	marcaVehic = {
                xtype: 'textfield',
                id: 'marcaVehic',
                margin: '0 0 5 0',
                width: 210,
                fieldLabel: 'Marca',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
                maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Marca'
            };
        
        var modelVehic = {
                xtype: 'textfield',
                id: 'modelVehic',
                margin: '0 20 5 0',
                width: 210,
                fieldLabel: 'Modelo',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Modelo'
            };
        
        var placaVehic = {
                xtype: 'textfield',
                id: 'placaVehic',
                margin: '0 0 5 0',
                width: 210,
                fieldLabel: 'Placa',
                labelWidth: 50,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Placa'
            };
        
        var colorVehic = {
                xtype: 'textfield',
                id: 'colorVehic',
                margin: '0 20 0 0',
                width: 210,
                fieldLabel: 'Color',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
//                emptyText: 'Color'
            };
        
        var anioVehic = {
                xtype: 'textfield',
                id: 'anioVehic',
                width: 210,
                fieldLabel: 'Año',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 4,
//			    vtype: 'num',
//			    maskRe: /^[1-9][0-9][0-9][0-9]$/,
//			    fieldStyle: 'text-transform:uppercase',
//			    emptyText: 'Año'
            };
		
		var estRegVehic = {
				xtype: 'textfield',
				id: 'estRegVehic',
				//           width: 380,
				fieldLabel: 'Estado',
				name: 'estReg',
				hidden: true,
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 120
			};
    
		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    maxHeight: 600,
		    minHeight: 100,
		    width: 300,
//		    heigth: 280,
		    modal:true,
//		    overflowY: 'scroll',
		    id: 'wVehiculo',
		    itemId: 'wVehiculo',
		    layout: 'fit',
			items: [
				{
		            xtype: 'form',
		            id: 'formVehiculo',
		            region: 'center',
		            layout: 'form',
		            items: [
		            	codVehic,
		            	idIncidenciaVehic,
		            	cbxClaseVehic,
		            	cbxMarcaVehic,
//		            	claseVehic,
//		            	marcaVehic,
		            	modelVehic,
		            	placaVehic,
		            	colorVehic,
		            	anioVehic,
		            	estRegVehic,

		            ]
		        }
			]
			,
			buttons:[
	    		{
	    			text:'Agregar',
	    			handler:function(){
	    				var vehiculo = Ext.create('VehiculoModel', {
		    					codVehic:		Ext.getCmp('codVehic').getValue(),
		    					idIncidencia:	Ext.getCmp('idIncidencia').getValue(),
//		    					codColorVehic:	Ext.getCmp('codColorVehic').getValue(),
		    					codClaseVehic:	Ext.getCmp('cbxClaseVehic').getValue(),
		    					claseVehic:		Ext.getCmp('cbxClaseVehic').getRawValue(),
		    					codMarcaVehic:	Ext.getCmp('cbxMarcaVehic').getValue(),
		    					marcaVehic:		Ext.getCmp('cbxMarcaVehic').getRawValue(),
		    					modelVehic:		Ext.getCmp('modelVehic').getValue(),
		    					placaVehic:		Ext.getCmp('placaVehic').getValue(),
		    					colorVehic:		Ext.getCmp('colorVehic').getValue(),
		    					anioVehic:		Ext.getCmp('anioVehic').getValue(),
		    					estReg:			'A'	//Ext.getCmp('codInterv').getValue(),
	    				});
	    				Ext.getCmp('tbVehic').store.add(vehiculo);
	    				Ext.getCmp('wVehiculo').close();
	    				Ext.id();
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wVehiculo').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	
	openFormReasignacion:function(options){

		options = options || {};
		
		var asignadoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		    	{"value":"995", "name":"OPERADOR 1 (AZUL)"},
		        {"value":"996", "name":"OPERADOR 2 (VERDE)"},
		        {"value":"997", "name":"OPERADOR 3 (AMARILLO)"},
		        {"value":"998", "name":"OPERADOR 4 (NARANJA)"},
		        {"value":"999", "name":"OPERADOR 5 (ROJO)"},
		        {"value":"1000", "name":"OPERADOR 6 (MORADO)"}
		    ]
		});
		
		var cbxAsignadoX2 = Ext.create('Ext.form.ComboBox', {
		    store: asignadoStore,
		    queryMode: 'local',
		    id:'cbxAsignadoX2',
		    forceSelection:true,
		    labelAlign: 'left',
		    fieldLabel: 'Reasignar a',
		    allowBlank:false,
		    valueField: 'value',
		    displayField: 'name',
		    labelWidth: 70,
		    width:240,
		    listeners:{
		    }
		});
		
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    modal:true,
		    id: 'wReasignacion',
		    itemId: 'wReasignacion',
		    layout: 'form',
			items: [
				{
		            xtype: 'form',
		            id: 'formReasignacion',
		            items: [
		            	cbxAsignadoX2
		            ],
		        }
			],
			buttons:[
	    		{
	    			text:'Reasignar',
	    			handler:function(){
	    				var form = Ext.getCmp('formReasignacion').getForm();
	    				if(form.isValid()){
	    					var thisWin = Ext.getCmp('wReasignacion');
	    					var params = {};
		    				params.listIds = options.options;
		    				params.tpoOperador = Ext.getCmp('cbxAsignadoX2').getValue();
							Ext.Msg.confirm('Confirmar', '¿Está seguro de reasignar las incidencias seleccionadas al '+Ext.getCmp('cbxAsignadoX2').getRawValue()+'?', function(btn, text){
							    if (btn == 'yes'){
							    	Util.runAjax({
										url:PATH_PROYECTO_BASE+'mapa-incidencia/reasignar-operador',
										async : false,
										method : 'POST',
										params: params,
										timeout:1000,
										success:function(http){
											var response = Ext.decode(http.responseText);
											thisWin.body.unmask();
											Ext.Msg.alert('Estado de reasignación', 'Reasignacion satisfactoria');
											if($("#map-canvas").length){
						    					MapaIncidencias.ajaxVoxiva(incidencia);
						    				}else{
						    					IncidenciaService.buscar2();
						    				}
//												thisWin.close();
											thisWin.destroy();
										}
									});
							    }
							});
	    				} else {
	    					Ext.Msg.alert('Operador requerido','Debe seleccionar el operador a reasignar', Ext.emptyFn);
	    				}
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wReasignacion').close();
//	    				Ext.id();
	    			}
	    		}
				
			]
		}).show();
	},
	
	openFormExportacion:function(options){

		options = options || {};
		
		var unidadModel = Ext.create('Ext.data.Model',{
			fields: [
		        {name: 'codUnidad',  type: 'int'},
		        {name: 'descUnidad',   type: 'string'},
		    ]
		});
		
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
		
		var fecDesde = {
				xtype: 'datefield',
				id: 'fecDesde',
				fieldLabel: 'Desde',
				labelWidth: 40,
				margin: '0 20 0 0',
				width: 140,
				editable: false,
	    		hideTrigger : true,
	    		allowBlank: false
			};
        var fecHasta = {
				xtype: 'datefield',
				id: 'fecHasta',
				fieldLabel: 'Hasta',
				labelWidth: 40,
				width: 140,
				editable: false,
	    		hideTrigger : true,
	    		allowBlank: false
			};
        var cbxUnidadExport = {
				xtype: 'ComboGeneric',
				id: 'cbxUnidadExport',
				fieldLabel: 'Unidad',
				labelWidth: 40,
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-unidad',
				queryMode: 'local',
				valueField:'codUnidad',
				displayField :'descUnidad',
				forceSelection:false,
				name:'unidad',
				model: unidadModel,
				allowBlank:true,
				listeners:{
					select:function(f,record){
						var vStoreCaso = Ext.getCmp('cbxCasoExport').store;
				  		vStoreCaso.removeAll()
				  		Ext.getCmp('cbxCasoExport').reset();
				  		Ext.getCmp('cbxSubCasoExport').reset();
				  		vStoreCaso.load({
								params:{ cod: record.data.codUnidad },
								callback:function(){
								}		
							});
					}
				}
			};
		
		var cbxCasoExport = {
				xtype: 'ComboGeneric',
				id: 'cbxCasoExport',
				fieldLabel: 'Caso',
				labelWidth: 40,
				extraParams:{ cod: '-1' },
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-caso-por-unidad',
				queryMode: 'local',
				valueField:'codCaso',
				displayField :'descCaso',
				forceSelection:false,
				name:'caso',
				model: casoModel,
				allowBlank:true,
				listeners:{
					select:function(f,record){
				  		var vStoreSubCaso = Ext.getCmp('cbxSubCasoExport').store;
				  		vStoreSubCaso.removeAll();
				  		Ext.getCmp('cbxSubCasoExport').reset();
				  		vStoreSubCaso.load({
								params:{ cod:record.data.codCaso },
								callback:function(){}		
							});
					}
				}
			};
		
		var cbxSubCasoExport = {
				xtype: 'ComboGeneric',
	            id: 'cbxSubCasoExport',
	            fieldLabel: 'Subcaso',
	            labelWidth: 40,
	            extraParams:{ cod: '-1' },
	        	root:'data',
	        	autoLoad:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-subcaso-por-caso',
	        	queryMode: 'local',
	        	valueField:'codSubcaso',
	        	displayField :'descSubcaso',
	        	forceSelection:true,
	        	name:'tipoSubCaso',
	        	model: subCasoModel,
	        	listeners:{
	        		select:function(f,record){
	        		}
	        	}
			};
    
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    width: 420,
		    minHeigth: 40,
		    modal:true,
		    id: 'wExportacion',
		    itemId: 'wExportacion',
		    layout: 'fit',
			items: [
				{
		            xtype: 'form',
		            id: 'formExportacion',
		            layout: 'form',
		            items: [
		            	fecDesde,
		            	fecHasta,
		            	cbxUnidadExport,
		            	cbxCasoExport,
		            	cbxSubCasoExport
		            ],
		        }
			],
			buttons:[
	    		{
	    			text:'Exportar',
	    			handler:function(){
	    				var form = Ext.getCmp('formExportacion').getForm();
	    				if(form.isValid()){
	    					
	    					var fec1 = Ext.Date.format(Ext.getCmp('fecDesde').getValue(), 'd/m/Y');
	    					var fec2 = Ext.Date.format(Ext.getCmp('fecHasta').getValue(), 'd/m/Y');
	    					var unidad = Ext.getCmp('cbxUnidadExport').getValue();
	    					var caso = Ext.getCmp('cbxUnidadExport').getValue();
	    					var subcaso = Ext.getCmp('cbxUnidadExport').getValue();
	    					
	    					window.open(PATH_PROYECTO_BASE+'mapa-incidencia/export-excel?fec1='
	    									+fec1+'&fec2='+fec2+'&unidad=null'+unidad+'&caso='+caso+'&subcaso='+subcaso, "_blank");
		    				
	    					Ext.getCmp('wExportacion').close();
		    				Ext.id();
		    				
	    				} else {
	    					Ext.Msg.alert('Rango de fechas requerido','Por favor, indique la fecha de inicio y fin para la exportación', Ext.emptyFn);
	    				}
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wExportacion').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	
	
	openPresentacion:function(options){
		
		options = options || {};
		
		var presentacionStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			    	{"value":"1019", "name":"CODISEC"},
			        {"value":"1020", "name":"SALA CRISIS"},
			    ]
			});
		
		var cbxPresentacion = Ext.create('Ext.form.ComboBox', {
			    store: presentacionStore,
			    queryMode: 'local',
			    id:'cbxPresentacion',
			    forceSelection:true,
			    labelAlign: 'left',
			    fieldLabel: 'Asignado a',
			    valueField: 'value',
			    displayField: 'name',
			    labelWidth: 60,
			    width:240,
			    margin: '0 0 0 10',
			    allowBlank:false,
			    name:'tpoExpo',
			    listeners: {
	                
	            }
			});
		
//		var cbxPresentacion = {
//				xtype: 'ComboGeneric',
//				root:'data',
//				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=1018',
//			    valueField: 'codTipo',
//			    displayField: 'descTipo',
//			    autoLoad:true,
//			    model:'maestroTipoModel',
//				queryMode: 'local',
//				id:'cbxPresentacion',
//			    forceSelection:true,
//				fieldLabel: 'Presentación',
////				width: 150,
////			    labelWidth: 70,
////			    margin: '5 0 0 5',
//			    allowBlank:false,
//			    name:'tpoExpo',
//			    listeners:{
//			    }
//			};
		
		var fecExpoDesde = {
				xtype: 'datefield',
				id: 'fecExpoDesde',
				fieldLabel: 'Desde',
//				labelWidth: 40,
//				margin: '0 20 0 0',
//				width: 140,
				editable: false,
	    		hideTrigger : true,
	    		allowBlank: false
			};
        var fecExpoHasta = {
				xtype: 'datefield',
				id: 'fecExpoHasta',
				fieldLabel: 'Hasta',
//				labelWidth: 40,
//				width: 140,
				editable: false,
	    		hideTrigger : true,
	    		allowBlank: false
			};
    
		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    width: 200,
//		    heigth: 40,
		    modal:true,
		    id: 'wPresentacion',
		    itemId: 'wPresentacion',
		    layout: 'form',
			items: [
				{
		            xtype: 'form',
		            id: 'formPresentacion',
		            layout: 'form',
		            items: [
		            	cbxPresentacion,
		            	fecExpoDesde,
		            	fecExpoHasta
		            ],
		        }
			],
			buttons:[
	    		{
	    			text:'Aceptar',
	    			handler:function(){
	    				var form = Ext.getCmp('formPresentacion').getForm();
	    				if(form.isValid()){
	    					var tpoExpo = Ext.getCmp('cbxPresentacion').getValue();
	    					var fec1 = Ext.Date.format(Ext.getCmp('fecExpoDesde').getValue(), 'd/m/Y');
	    					var fec2 = Ext.Date.format(Ext.getCmp('fecExpoHasta').getValue(), 'd/m/Y');
	    					if(Ext.getCmp('fecExpoDesde').getValue()<=Ext.getCmp('fecExpoHasta').getValue()){
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
	    						$('#switchExposicion').removeClass('btn-default');
	    						$('#switchExposicion').addClass('btn-warning');
//	    						visible = true;
	    						$("#nav-exposicion").show("slow", function() {});
	    				        $(".nav-menu").hide("slow", function() {});
	    						MapaIncidencias.ajaxVoxivaExposicion(null,tpoExpo,fec1,fec2);
	    						MapaIncidencias.ajaxArbolExposicion(tpoExpo,fec1,fec2);
	    						
//	    						window.open(PATH_PROYECTO_BASE+'mapa-incidencia/export-excel?fec1='
//    									+fec1+'&fec2='+fec2, "_blank");
			    				Ext.getCmp('wPresentacion').close();
			    				Ext.id();
	    					}else{
	    						Ext.Msg.alert('Rango de fechas inconsistente','La fecha de inicio no puede ser mayor que la fecha de fin', Ext.emptyFn);
	    					}
	    					
	    				} else {
	    					Ext.Msg.alert('Rango de fechas requerido','Por favor, indique la fecha de inicio y fin para la exportación', Ext.emptyFn);
	    				}
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wExportacion').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	
	
	openBandejaVoxiva:function(options){

		options = options || {};
		
		var fecDesde = {
				xtype: 'datefield',
				id: 'fecDesde',
				fieldLabel: 'Desde',
				labelWidth: 40,
				margin: '0 20 0 0',
				width: 140,
				editable: false,
	    		hideTrigger : true,
	    		allowBlank: false
			};
        var fecHasta = {
				xtype: 'datefield',
				id: 'fecHasta',
				fieldLabel: 'Hasta',
				labelWidth: 40,
				width: 140,
				editable: false,
	    		hideTrigger : true,
	    		allowBlank: false
			};
    
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    width: 360,
		    heigth: 40,
		    modal:true,
		    id: 'wExportacion',
		    itemId: 'wExportacion',
		    layout: 'form',
			items: [
				{
		            xtype: 'form',
		            id: 'formExportacion',
		            layout: 'column',
		            items: [
		            	fecDesde,
		            	fecHasta
		            ],
		        }
			],
			buttons:[
	    		{
	    			text:'XXXX',
	    			handler:function(){
	    				var form = Ext.getCmp('formExportacion').getForm();
	    				if(form.isValid()){
	    				
	    				} else {
	    					Ext.Msg.alert('...','...', Ext.emptyFn);
	    				}
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	setCombosSector:function(zona, subzona){
//		debugger;
		var area,z;
		if(zona.includes("PLAYA")){
			area=1;
			z=15;
		}else{
			var z =parseInt(zona.split(" ")[1]);
			if(z<8&&z!=4)				{ area=1; }
			else if ((z>7&&z<11)||z==4)	{ area=2; }
			else if (z>10)				{ area=3; }
		}
		Ext.getCmp('cbxArea').setValue(area);
		var vStoreZona = Ext.getCmp('cbxZona').store;
		var vStoreSubzona = Ext.getCmp('cbxSubzona').store;
		
		vStoreZona.load({
				params:{ codArea:area, modo:2 },
				callback:function(){
				}		
			});
		Ext.getCmp('cbxZona').setValue(z);
		
		vStoreSubzona.load({
			params:{ descSubzona:subzona, modo:3 },
			callback:function(){
			}		
		});
//		Ext.getCmp('cbxSubzona').setRawValue(subzona);
		vStoreSubzona.on('load',function(ds,records,o){
			Ext.getCmp('cbxSubzona').setValue(records[0].data.codSubzona);
			});
//		Ext.getCmp('cbxSubzona').setHideTrigger(false);
//		Ext.getCmp('cbxSubzona').select(0, true);
		
		Ext.getCmp('cbxArea').disable();
		Ext.getCmp('cbxZona').disable();
		Ext.getCmp('cbxSubzona').disable();
		
		Ext.getCmp('cbxArea').setHideTrigger(true);
		Ext.getCmp('cbxZona').setHideTrigger(true);
		Ext.getCmp('cbxSubzona').setHideTrigger(true);
		
	},
	
	setZonaSubZona2:function(punto){
		console.log("setZonaSubZona2... coordenadas = "+punto);
		Util.runAjax({
			url:PATH_PROYECTO_BASE+'catastro/get-sector-zona-by-cordenada',
//			async : true,
			async : false,
			method : 'POST',
			params:{punto:punto},
			success:function(http){
				
				var response = Ext.decode(http.responseText);
				var area,zona,subzona;
				if(response.data && response.data.nombresector && response.data.codi_zona){
					
					zona = response.data.nombresector;
					subzona = response.data.codi_zona
					
					IncidenciaService.setCombosSector(zona,subzona);
					
				}else{
					
					Ext.getCmp('cbxArea').reset();
					Ext.getCmp('cbxZona').reset();
					Ext.getCmp('cbxSubzona').reset();
					
					Ext.getCmp('cbxArea').enable();
					Ext.getCmp('cbxZona').enable();
					Ext.getCmp('cbxSubzona').enable();
					
					Ext.getCmp('cbxArea').setHideTrigger(false);
					Ext.getCmp('cbxZona').setHideTrigger(false);
					Ext.getCmp('cbxSubzona').setHideTrigger(false);
					
				}
				
			}
		});
	},
	
	buscar2:function(){
		var grid = Ext.getCmp('grid-incidencias');
		var store = grid.store;
		var params = {};
		if(!Ext.isEmpty(Ext.getCmp('txtNroId').getValue())){ params.idIncidencia	= Ext.getCmp('txtNroId').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('txtNroCaso').getValue())){ params.nroCasoVoxiva	= Ext.getCmp('txtNroCaso').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('cbxMedioX').getValue())){ params.codMedio	= Ext.getCmp('cbxMedioX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('cbxSituacionX').getValue())){ params.codSituacion	= Ext.getCmp('cbxSituacionX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('cbxUnidadX').getValue())){ params.codUnidad = Ext.getCmp('cbxUnidadX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('cbxCasoX').getValue())){ params.codCaso = Ext.getCmp('cbxCasoX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('cbxSubcasoX').getValue())){ params.codSubcaso = Ext.getCmp('cbxSubcasoX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('fecDesdeX').getValue())){ params.strFecIni = Ext.Date.format(Ext.getCmp('fecDesdeX').getValue(), 'd/m/Y'); }
		if(!Ext.isEmpty(Ext.getCmp('fecHastaX').getValue())){ params.strFecFin = Ext.Date.format(Ext.getCmp('fecHastaX').getValue(), 'd/m/Y'); }
		if(!Ext.isEmpty(Ext.getCmp('cbxAsignadoX').getValue())){ params.tpoOperador = Ext.getCmp('cbxAsignadoX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('txtReportX').getValue())){ params.nombReport = Ext.getCmp('txtReportX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('txtTelfX').getValue())){ params.telfReport = Ext.getCmp('txtTelfX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('txtViaX').getValue())){ params.descVia = Ext.getCmp('txtViaX').getValue(); }
		if(!Ext.isEmpty(Ext.getCmp('txtCdraX').getValue())){ params.cdra = Ext.getCmp('txtCdraX').getValue(); }
		if(Ext.getCmp('chkReasignadoX').getValue()){ params.flgReasignado = "N"; }
		store.proxy.extraParams = params;
		store.load({
				params: params,
				start: 0,
		});
		
	},
	
	
	updateHistorial:function(){
		var gridBitacora = Ext.getCmp('tbBitacora');
		var store = gridBitacora.store;
		var params = {};
		if(!Ext.isEmpty(Ext.getCmp('idIncidenciaX').getValue())){ params.cod = Ext.getCmp('idIncidenciaX').getValue() };
		store.proxy.extraParams = params;
		store.load();
	},
	
	
	
	
	openFormRegistroNuevo:function(options){
		
		options = options || {};
		
		function asignadoForm(){
			switch(ROL){
				//ADMINISTRADOR Y SUPERVISOR
				case 901: 
				case 903:
					Ext.getCmp('cbxAsignado').setValue(data.tpoOperador);
					Ext.getCmp('cbxAsignado').setDisabled(false);
					Ext.getCmp('cbxAsignado').allowBlank = false;
					break;
				//OPERADOR
				case 902: 
					switch(ROLROL){
						//TELEFONISTAS
						case 995:	//azul
						case 996:	//verde
						case 997:	//amarillo
						case 998:	//naranja
						case 999:	//rojo
						case 1000:	//morado
							Ext.getCmp('cbxAsignado').setValue(data.tpoOperador);
							Ext.getCmp('cbxAsignado').setDisabled(true);
							Ext.getCmp('cbxAsignado').allowBlank = false;
					  		break;
						//REDES, CAMARAS, PFI
						case 1001:	//redes
						case 1005:	//camara 1
						case 1006:	//camara 2 
						case 1007: 	//camara 3
						case 1016:	//pfi
							Ext.getCmp('cbxAsignado').setDisabled(true);
							Ext.getCmp('cbxAsignado').allowBlank = true;
					  		break;
						//RADIOS
						case 1002:	//radio 1
						case 1003:	//radio 2
						case 1004: 	//radio 3
							Ext.getCmp('cbxAsignado').setDisabled(false);
							Ext.getCmp('cbxAsignado').allowBlank = false;
							break;
					}
					break;
				//PFI
				case 992: break;
				default: break;
			}
		}
		
		function asignadoNuevoForm(){
			switch(ROL){
				//ADMINISTRADOR Y SUPERVISOR
				case 901: 
				case 903:
//					Ext.getCmp('cbxAsignado').setValue(data.tpoOperador);
					Ext.getCmp('cbxAsignado').setDisabled(false);
					Ext.getCmp('cbxAsignado').allowBlank = false;
					break;
				//OPERADOR
				case 902: 
					switch(ROLROL){
						//TELEFONISTAS
						case 995:	//azul
						case 996:	//verde
						case 997:	//amarillo
						case 998:	//naranja
						case 999:	//rojo
						case 1000:	//morado
							Ext.getCmp('cbxAsignado').setValue(ROLROL);
							Ext.getCmp('cbxAsignado').setDisabled(true);
							Ext.getCmp('cbxAsignado').allowBlank = false;
					  		break;
						//REDES, CAMARAS, PFI
						case 1001:	//redes
						case 1005:	//camara 1
						case 1006:	//camara 2 
						case 1007: 	//camara 3
						case 1016:	//pfi
							Ext.getCmp('cbxAsignado').setDisabled(true);
							Ext.getCmp('cbxAsignado').allowBlank = true;
					  		break;
						//RADIOS
						case 1002:	//radio 1
						case 1003:	//radio 2
						case 1004: 	//radio 3
							Ext.getCmp('cbxAsignado').setDisabled(false);
							Ext.getCmp('cbxAsignado').allowBlank = false;
							break;
					}
					break;
				//PFI
				case 992: break;
				default: break;
			}
		}
		
		// DEFINICION DE MODELOS
		
		var unidadModel = Ext.create('Ext.data.Model',{
			fields: [
		        {name: 'codUnidad',  type: 'int'},
		        {name: 'descUnidad',   type: 'string'},
		    ]
		});
		
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
		
		var areaModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codArea',  type: 'string'},
				{name: 'descArea',   type: 'string'},
		    ]
		});
		
		var zonaModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codZona',  type: 'int'},
				{name: 'descZona',   type: 'string'},
		    ]
		});
		
		var subzonaModel = Ext.create('Ext.data.Model', {
			fields: [
		        {name: 'codSubzona',  type: 'int'},
				{name: 'descSubzona',   type: 'string'},
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
		
		var situacionStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":"873", "name":"NUEVO"},
			        {"value":"870", "name":"ATENDIDO"},
//			        {"value":"871", "name":"ATENDIDO/FALSA ALARMA"},
			        {"value":"872", "name":"DESCARTADO"},
			        {"value":"874", "name":"REPETIDO"}
			    ]
			});

		var medioStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			        {"value":797, "name":"CORREO ELECTRONICO"},
			        {"value":798, "name":"PRESENCIAL"},
			        {"value":799, "name":"LLAMADA TELEFONICA"},
			        {"value":800, "name":"FACEBOOK"},
			        {"value":801, "name":"TWITTER"},
			        {"value":802, "name":"CAMARA"},
			        {"value":904, "name":"WHATSAPP"},
			        {"value":905, "name":"ALERTA MIRAFLORES"},
			        {"value":948, "name":"POS"},
			        {"value":990, "name":"WAZE"},
			        {"value":1009, "name":"REACH"}
			    ]
			});
		
		var asignadoStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			    	{"value":"995", "name":"OPERADOR 1 (AZUL)"},
			        {"value":"996", "name":"OPERADOR 2 (VERDE)"},
			        {"value":"997", "name":"OPERADOR 3 (AMARILLO)"},
			        {"value":"998", "name":"OPERADOR 4 (NARANJA)"},
			        {"value":"999", "name":"OPERADOR 5 (ROJO)"},
			        {"value":"1000", "name":"OPERADOR 6 (MORADO)"}
			    ]
			});
		
		var subzonaStore = Ext.create('Ext.data.Store', {
			    fields: ['name', 'value'],
			    data : [
			    	{"value":"01A", "name":"01A"},
			    	{"value":"01B", "name":"01B"},
			    	{"value":"02A", "name":"02A"},
			    	{"value":"02B", "name":"02B"},
			    	{"value":"02C", "name":"02C"},
			    	{"value":"03A", "name":"03A"},
			    	{"value":"03B", "name":"03B"},
			    	{"value":"03C", "name":"03C"},
			    	{"value":"04A", "name":"04A"},
			    	{"value":"04B", "name":"04B"},
			    	{"value":"05A", "name":"05A"},
			    	{"value":"05B", "name":"05B"},
			    	{"value":"06A", "name":"06A"},
			    	{"value":"06B", "name":"06B"},
			    	{"value":"06C", "name":"06C"},
			    	{"value":"07A", "name":"07A"},
			    	{"value":"07B", "name":"07B"},
			    	{"value":"08A", "name":"08A"},
			    	{"value":"08B", "name":"08B"},
			    	{"value":"08C", "name":"08C"},
			    	{"value":"09A", "name":"09A"},
			    	{"value":"09B", "name":"09B"},
			    	{"value":"10A", "name":"10A"},
			    	{"value":"10B", "name":"10B"},
			    	{"value":"10C", "name":"10C"},
			    	{"value":"11A", "name":"11A"},
			    	{"value":"11B", "name":"11B"},
			    	{"value":"11C", "name":"11C"},
			    	{"value":"11D", "name":"11D"},
			    	{"value":"12A", "name":"12A"},
			    	{"value":"12B", "name":"12B"},
			    	{"value":"12C", "name":"12C"},
			    	{"value":"13A", "name":"13A"},
			    	{"value":"13B", "name":"13B"},
			    	{"value":"13C", "name":"13C"},
			    	{"value":"13D", "name":"13D"},
			    	{"value":"14A", "name":"14A"},
			    	{"value":"14B", "name":"14B"},
			    	{"value":"14C", "name":"14C"}
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
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
		var idReach =	{
				xtype: 'textfield',
				id: 'idReach',
				margin: '10 0 0 0',
				width: 10,
				hidden:true,
				disabled: true,
				fieldLabel: 'idReach',
				labelClsExtra: '',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
		var idOjoVial =	{
				xtype: 'textfield',
				id: 'idOjoVial',
				margin: '10 0 0 0',
				width: 10,
				hidden:true,
				disabled: true,
				fieldLabel: 'idOjoVial',
				labelClsExtra: '',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
		var codComer =	{
				xtype: 'textfield',
				id: 'codComer',
				margin: '10 0 0 0',
				width: 10,
				hidden:true,
				disabled: true,
				fieldLabel: 'codComer',
				labelClsExtra: '',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
		var fieldAudio =	{
				xtype: 'textfield',
				id: 'fieldAudio',
				margin: '10 0 0 0',
				width: 10,
				hidden:true,
				disabled: true,
				fieldLabel: 'id',
				labelClsExtra: '',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
		var btnUrlAudio = {
				xtype: 'button',
				text:'Audio',
				margin: '22 0 0 0',
//				icon: PATH_PROYECTO_BASE+'images/audio_voxiva.png',
                iconCls:'btnAudioSmall',
                tooltip: 'Escuchar audio',
                id: 'btnUrlAudio',
                handler: function() {
                	var linkAudio 
                	if (Ext.getCmp('fieldAudio').getValue()!=null && Ext.getCmp('fieldAudio').getValue()!=""){
                		linkAudio = Ext.getCmp('fieldAudio').getValue();
                	}
                	if(linkAudio!=null && linkAudio!="") {

                		//Construccion de url de audio de ambiente voxiva desarrollo
//                		var url = "http://demoalertamiraflores.alertaperu.net/ivr_recordings_demoalertamiraflores/questionnaire/"+linkAudio.replace('.m8','.wav');
//                		var url = "http://demoalertamiraflores.alertaperu.net/ivr_recordings_demoalertamiraflores/questionnaire/72_CASE_DETAIL_F008_"+linkAudio+".wav";

                		//Construccion de url de audio de ambiente voxiva produccion
                		var url = "http://miraflores.alertaperu.net/ivr_recordings_citizenmirafloresalerta/questionnaire/72_CASE_DETAIL_F008_"+linkAudio+".wav";
//                		var url = "http://demoalertamiraflores.alertaperu.net/ivr_recordings_demoalertamiraflores/questionnaire/"+linkAudio.replace('.m8','.wav');
                		window.open(url);

                	} else {
                		Ext.Msg.alert('Sin grabación', 'No existe audio para esta incidencia');
                	}
                	
                },
		}
		
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
				  		Ext.getCmp('cbxSubCaso').enable();
				  		Ext.getCmp('cbxModalidad').reset();
				  		var vStoreCaso = Ext.getCmp('cbxCaso').store;
				  		vStoreCaso.load({
								params:{ cod: record.data.codUnidad },
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
				  		vStoreSubCaso.removeAll();
//				  		Ext.getCmp('formDetalle').reset();		// AQUI ES DONDE SE BLANQUEA LAS FECHAS
				  		Ext.getCmp('cbxSubCaso').reset();
				  		vStoreSubCaso.load({
								params:{ cod:record.data.codCaso },
								callback:function(){}		
							});
						var vUnidad = Ext.getCmp('cbxUnidad').getValue();
				  		var vCaso = Ext.getCmp('cbxCaso').getValue();
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
		        		if (record.data.fecNotificacion!=null){
  							Ext.getCmp('fecNotificacion').setValue(new Date(data.fecNotificacion));
    						Ext.getCmp('horNotificacion').setValue(new Date(data.fecNotificacion).toLocaleTimeString('en-GB').substring(0, 5));
		        		}
	        		}
	        	}
			};
        
		
		// COMPONENTES PARA UBICACION DE INCIDENCIA
		
		var txtDireccion = {
				xtype: 'textfield',
				id: 'txtDireccion',
				width: 360,
				fieldLabel: 'Dirección',
				labelWidth: 50,
				emptyText: 'Dirección',
				allowBlank:false,
				fieldStyle: 'text-transform:uppercase',
				readOnly:true
			};

		var txtCuadra =	{
				xtype: 'textfield',
				id: 'txtCuadra',
				margin: '10 0 0 0',
				width: 100,
				fieldLabel: 'Cuadra',
				labelClsExtra: '',
				enforceMaxLength: true,
				maxLength: 2,
			    maskRe: /[0-9]/,
			    fieldStyle: 'text-transform:uppercase',
				labelWidth: 50
			};
		
		var txtNumero =	{
				xtype: 'textfield',
				id: 'txtNumero',
				margin: '10 0 0 20',
				width: 100,
				fieldLabel: 'Número',
				labelClsExtra: '',
				enforceMaxLength: true,
			    maxLength: 4,
			    maskRe: /[0-9]/,
			    fieldStyle: 'text-transform:uppercase',
				labelWidth: 50
			};
		
		var txtDpto = {	
				xtype: 'textfield',
				id: 'txtDpto',
				margin: '10 0 0 20',
				width: 120,
				fieldLabel: 'Dpto/Of',
				enforceMaxLength: true,
			    maxLength: 500,
			    fieldStyle: 'text-transform:uppercase',
				labelWidth: 50
			};
		
		var txtZona = {
				xtype: 'textfield',
				id: 'txtZona',
				width: 100,
				fieldLabel: 'Zona:',
				hideLabel: true,
				labelWidth: 60,
				emptyText: 'Zona',
				allowBlank:false,
//				vtype: 'zona',
				fieldStyle: 'text-transform:uppercase',
				readOnly:true
			};
		
		var txtSubZona = {
				xtype: 'textfield',
				id: 'txtSubZona',
				width: 100,
				fieldLabel: 'SubZona',
				hideLabel: true,
				emptyText: 'SubZona',
				fieldStyle: 'text-transform:uppercase',
				allowBlank:false,
//				vtype: 'subzona',
				readOnly:true
			};
		
//		var cbxSubzona = Ext.create('Ext.form.ComboBox', {
//				store: subzonaStore,
//			    queryMode: 'local',
//			    id:'cbxSubzona',
//			    forceSelection:true,
//			    valueField: 'value',
//			    displayField: 'name',
//			    labelAlign: 'left',
//			    fieldLabel: 'SubZona',
//			    hideLabel: true,
//				hideTrigger: true,
//				width:100,
//			    allowBlank:false,
//			    name:'subzona',
//			    isDroppable:false,
//			    listeners:{
//			    }
//			}); 
		
		
		var cbxArea = {
				xtype: 'ComboGeneric',
				id: 'cbxArea',
				root:'data',
				emptyText: 'AREA',
				autoLoad:true,
				width: 70,
				hideTrigger: true,
				allowBlank:false,
				disabled:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-zonificacion?modo=1',
				queryMode:'local',
				valueField:'codArea',
				displayField :'descArea',
				forceSelection:true,
				name:'codArea',
				model: areaModel,
				listeners:{
					select:function(f,record){
						Ext.getCmp('cbxZona').reset();
						Ext.getCmp('cbxSubzona').reset();
						
						console.log("record.data");
						console.log(record.data);
						
						var sector = {};
						sector.codArea = record.data.codArea;
						sector.modo = 2;
						
						console.log(sector);
						
						var vStoreZona = Ext.getCmp('cbxZona').store;
						vStoreZona.load({
								params: sector,
//								params: { codArea:record.data.codArea, modo:2 },
								callback:function(){
								}		
							});
					}
				}
			};
		
		var cbxZona = {
				xtype: 'ComboGeneric',
				id: 'cbxZona',
				extraParams:{ codZona: '-1' },
				emptyText: 'ZONA',
				root:'data',
				autoLoad:true,
				width: 100,
				hideTrigger: true,
				allowBlank:false,
				disabled:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-zonificacion',
				queryMode: 'local',
				valueField:'codZona',
				displayField :'descZona',
				forceSelection:true,
				name:'codZona',
				model: zonaModel,
				listeners:{
					
					select:function(f,record){
						Ext.getCmp('cbxSubzona').reset();
						
						console.log("record.data");
						console.log(record.data);
						
						var sector2 = {};
						sector2.codZona = record.data.codZona;
						sector2.modo = 3;
						
						console.log(sector2);
						
						var vStoreSubzona = Ext.getCmp('cbxSubzona').store;
						vStoreSubzona.load({
								params: sector2,
//								params: { codZona:record.data.codZona, modo:3 },
								callback:function(){
								}		
							});
					}
				}
			};	
		
		var cbxSubzona = {
				xtype: 'ComboGeneric',
	            id: 'cbxSubzona',
	            extraParams:{ codSubzona: '-1' },
	            emptyText: 'SUBZONA',
	        	root:'data',
	        	autoLoad:true,
	        	width: 90,
	        	hideTrigger: true,
				allowBlank:false,
				disabled:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/get-zonificacion',
	        	queryMode: 'local',
	        	valueField:'codSubzona',
	        	displayField :'descSubzona',
	        	forceSelection:true,
	        	name:'codSubzona',
	        	model: subzonaModel,
	        	listeners:{
	        		select:function(f,record){
	        			
	        		}
	        	}
			};
		
		var coordenadas = {
				xtype:'textfield',
				fieldLabel:'Coordenadas',
				labelWidth : 0,
				name:'cordenadas',
				style:'margin-bottom:10px;',
				id:'coordenadas',
				allowBlank:false,
				fieldStyle: 'text-transform:uppercase',
				readOnly:true,
				hidden:true
			};
		
		var btnMapear = {
	            xtype: 'button',
	            id: 'btnMapear',
	            margin: '10 0 0 0',
	            width: 80,
	            text: 'Mapear',
	            handler:function(){
					Util.windowGeoreferenciaPunto({
	        			width:600,
	        			height:600,
	        			idCanvasMap:'mapa-incidencia-geo',
	        			idCordenadas:'coordenadas',
	        			fnGrabar:function(punto,direccionData){
	        				Ext.getCmp('coordenadas').setValue(punto.lat+' '+punto.lng);
	        				Ext.getCmp('txtDireccion').setValue(null);
//	        				Ext.getCmp('txtZona').setValue(null);
//	        				Ext.getCmp('txtSubZona').setValue(null);
	        				Ext.getCmp('cbxArea').reset();
	        				Ext.getCmp('cbxZona').reset();
	        				Ext.getCmp('cbxSubzona').reset();
	        				$.ajax({
	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
								    dataType: "json",
								    data:{latitud:punto.lat,longitud:punto.lng},
								    success: function( response ) {
								    	var result = response.result || [];
								    	if(result.length>0){
								    		var name = result[0];
								    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
								    	} else {
								    		Ext.getCmp('txtDireccion').setReadOnly(false);
								    	}
								    },
								    failure: function(){
								    	Ext.getCmp('txtDireccion').setReadOnly(false);
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
				enforceMaxLength: true,
			    maxLength: 300,
			    labelWidth: 60,
			    maskRe: /[a-zA-Z\s]/,
			    fieldStyle: 'text-transform:uppercase',
//			    allowBlank:false
			};

	    var txtTelfReport = {
	    		xtype: 'textfield',
				id: 'txtTelfReport',
				margin: '0 10 0 0',
				width: 110,
				fieldLabel: 'Telefono',
				labelAlign: 'top',
				labelWidth: 60,
				enforceMaxLength: true,
			    maxLength: 10,
				maskRe: /[0-9]/,
//			    vtype: 'num',
				fieldStyle: 'text-transform:uppercase',
//				allowBlank:false
			};
	
	    var txtCarnetExt = {	
	    		xtype: 'textfield',
				hidden: true,
				id: 'txtCarnetExt',
				margin: '0 10 0 0',
				width: 124,
				fieldLabel: 'Pass. / Carnet Ext.',
				labelAlign: 'top',
				enforceMaxLength: true,
			    maxLength: 50,
				vtype: 'alphanum',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 60
	    	};
	
	    var cbxNacionalidad = {
	    		xtype: 'ComboGeneric',
	    		hidden: true,
				id: 'cbxNacionalidad',
				margin: '0 10 0 0',
				labelAlign: 'top',
				width: 180,
				fieldLabel: 'Nacionalidad',
	            root:'data',
	            autoLoad:true,
	        	url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=680',
	        	queryMode: 'local',
	        	valueField:'codTipo',
	        	displayField :'descTipo',
	        	forceSelection:true,
	        	style:'margin-bottom:10px;',
	        	name:'tipoEstado',
	        	model: maestroTipoModel,
	        	
	    	};
	
	    var txtDirecReport = {	
	    		xtype: 'textfield',
				id: 'txtDirecReport',
				margin: '0 10 0 0',
				width: 258,
				fieldLabel: 'Dirección',
//				disabled: true,
				labelAlign: 'top',
				enforceMaxLength: true,
			    maxLength: 500,
			    hidden: true,
			    fieldStyle: 'text-transform:uppercase',
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
				enforceMaxLength: true,
			    maxLength: 4,
			    fieldStyle: 'text-transform:uppercase',
				labelWidth: 40
			};
	    
	    
	    //	COMPONENTES PARA DETALLE DE INCIDENCIA
		
	    var txtDetalle = {
	    		xtype: 'textareafield',
                width: 310,
                fieldLabel: 'Información adicional',
                labelAlign: 'top',
	    		id: 'txtDetalle',
	    		enforceMaxLength: true,
	    		fieldStyle: 'text-transform:uppercase',
			    maxLength: 3100
    		};

	    var fecNotificacion = {
	    		xtype: 'datefield',
	    		id: 'fecNotificacion',
	    		width: 100,
	    		fieldLabel: 'Fecha de notificación',
	    		hideLabel: true,
	    		editable: false,
	    		readOnly: true,
//	    		disabled: true,
	    		hideTrigger : true,
	    	};

	    var horNotificacion = {
	    		xtype: 'textfield',
	    		id: 'horNotificacion',
	    		width: 65,
	    		fieldLabel: 'Hora de notificación',
	    		hideLabel: true,
	    		readOnly: true,
//	    		disabled: true,
	    		enforceMaxLength: true,
			    maxLength: 5,
			    editable: false,
			    vtype: 'time',
	    	};
	    
	    var fecEvento = {
	    		xtype: 'datefield',
	    		id: 'fecEvento',
	    		width: 100,
	    		fieldLabel: 'Fecha de evento',
	    		editable: false,
	    		hideLabel: true,
	    		hideTrigger : true,
	    	};

	    var horEvento = {
	    		xtype: 'textfield',
	    		id: 'horEvento',
	    		width: 65,
	    		fieldLabel: 'Hora de evento',
	    		hideLabel: true,
	    		enforceMaxLength: true,
			    maxLength: 5,
			    vtype: 'time',
//			    allowBlank: false,
			    fieldStyle: 'text-transform:uppercase',
	    		emptyText: 'hh:mm'
//	    			,hidden:true
	    	};

		var fecAtencion = {
	    		xtype: 'datefield',
	    		id: 'fecAtencion',
	    		width: 100,
	    		fieldLabel: 'Fecha de atención',
	    		hideLabel: true,
	    		editable: false,
	    		readOnly: true,
	    		hideTrigger : true,
	    	};

	    var horAtencion = {
	    		xtype: 'textfield',
	    		id: 'horAtencion',
	    		width: 65,
	    		fieldLabel: 'Hora de atención',
	    		hideLabel: true,
	    		enforceMaxLength: true,
	    		readOnly: true,
			    maxLength: 5,
			    vtype: 'time',
			    fieldStyle: 'text-transform:uppercase',
	    		emptyText: 'hh:mm'
//	    			,hidden:true
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
			    enforceMaxLength: true,
			    maxLength: 100,
			    fieldStyle: 'text-transform:uppercase',
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
		
		var cbxMedio = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=796',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'maestroTipoModel',
				queryMode: 'local',
				id:'cbxMedio',
			    emptyText:'Medio',
				forceSelection:true,
				labelAlign: 'left',
				fieldLabel: 'Medio',
				labelWidth: 40,
				width:200,
			    margin: '5 5 10 5',
			    allowBlank:false,
			    name:'medioIngreso',
			    listeners:{
			    }
			};

		var cbxSituacion = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=869',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'maestroTipoModel',
				queryMode: 'local',
			    id:'cbxSituacion',
			    emptyText:'Situación',
			    forceSelection:true,
			    labelWidth: 60,
			    fieldLabel: 'Situacion',
			    allowBlank:false,
			    labelAlign: 'left',
			    width:160,
			    margin: '5 5 10 5',
			    name:'situacionReporte',
			    listeners:{
			    	select:function(f,record){
						var v = record.data.codTipo;
						if(v==870){
			    			Ext.getCmp('fecEvento').allowBlank = false;
			    			Ext.getCmp('horEvento').allowBlank = false;
			    		}else{
			    			Ext.getCmp('fecEvento').allowBlank = true;
			    			Ext.getCmp('horEvento').allowBlank = true;
			    		}
			    		
			    	}
			    }
			};
		
		var txtTituloIncidencia = {
	    		xtype: 'textfield',
				id: 'txtTituloIncidencia',
				width: 230,
				margin: '5 5 10 5',
				fieldLabel: 'Título',
//				labelAlign: 'top',
				labelWidth: 40,
				hidden: true,
				disabled: true
			};
		
		var cbxAsignado = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=994',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'maestroTipoModel',
				queryMode: 'local',
			    id:'cbxAsignado',
			    forceSelection:true,
			    fieldLabel: 'Asignado a',
			    allowBlank:false,
			    labelAlign: 'left',
			    labelWidth: 70,
			    width:245,
			    margin: '5 5 10 5',
			    name:'operadorReporte',
			    listeners:{
			    	
			    }
			};

//		var cbxAsignado = Ext.create('Ext.form.ComboBox', {
//			    store: asignadoStore,
//			    queryMode: 'local',
//			    id:'cbxAsignado',
//			    forceSelection:true,
//			    labelAlign: 'left',
//			    fieldLabel: 'Asignado a',
//			    allowBlank:false,
//			    valueField: 'value',
//			    displayField: 'name',
//			    labelWidth: 70,
//			    width:240,
//			    margin: '5 5 10 5',
//	//		    emptyText:'Situación de reporte',
//			    listeners:{
//			    }
//			});

		var txtUsrRegistra = {
	    		xtype: 'textfield',
				id: 'txtUsrRegistra',
				width: 0,
				fieldLabel: 'UsrRegistra',
				hidden: true,
				editable: false,
				labelAlign: 'top',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
			};
		
		var txtUsrModifica = {
	    		xtype: 'textfield',
				id: 'txtUsrModifica',
				width: 0,
				fieldLabel: 'UsrModifica',
				hidden: true,
				editable: false,
				labelAlign: 'top',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
			};
		
		
		// MODELS Y STORES PARA LOS GRID-PANELS
		
		var intervModel = Ext.create('Ext.data.Model', {
				id: 'IntervModel',
				fields : [ 
					{name: 'codInterv',  type: 'int'},
					{name: 'idIncidencia',  type: 'int'},
					{name: 'codTpoInterv',  type: 'int'},
					{name: 'codTpoPuesto',  type: 'int'},
					{name: 'descTpoInterv',  type: 'string'},
					{name: 'descTpoPuesto',  type: 'string'},
					{name: 'nombInterv',  type: 'string'},
					{name: 'apoyoPolicial',  type: 'string'},
					{name: 'infoInterv',  type: 'string'},
					{name: 'estReg',  type: 'string'}
				]
			});
		
		var intervStore = Ext.create('Ext.data.Store', {
			    autoLoad : true,
				model : intervModel,
				extraParams:{ cod: '-1' },
				//pageSize: 20,
				proxy : {
					type : 'ajax',
//					async : true,
					url:PATH_PROYECTO_BASE+'mapa-incidencia/get-interviniente-by-incidencia',
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true,
					timeout:99999999
				}
			});
		
		var involucModel = Ext.create('Ext.data.Model', {
				id: 'InvolucModel',
				fields : [
					{name: 'codInvoluc',  type: 'int'},
					{name: 'idIncidencia',  type: 'int'},
					{name: 'codTpoInvoluc',  type: 'int'},
					{name: 'codTpoDoc',  type: 'int'},
					{name: 'descTpoInvoluc',  type: 'string'},
					{name: 'descTpoDoc',  type: 'string'},
					{name: 'nombInvoluc',  type: 'string'},
					{name: 'edadInvoluc',  type: 'string'},
					{name: 'numDocInvoluc',  type: 'string'},
					{name: 'descObserv',  type: 'string'},
					{name: 'codVehic',  type: 'int'},
					{name: 'codClaseVehic',  type: 'int'},
					{name: 'codMarcaVehic',  type: 'int'},
					{name: 'codColorVehic',  type: 'int'},
					{name: 'claseVehic',  type: 'string'},
					{name: 'marcaVehic',  type: 'string'},
					{name: 'modelVehic',  type: 'string'},
					{name: 'placaVehic',  type: 'string'},
					{name: 'colorVehic',  type: 'string'},
					{name: 'anioVehic',  type: 'string'},
					{name: 'estReg',  type: 'string'},
	
				]
			});
		
		var involucStore = Ext.create('Ext.data.Store', {
		    autoLoad : true,
			model : involucModel,
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
		
		var vehicModel = Ext.create('Ext.data.Model', {
			id: 'VehicModel',
			fields : [ 
				{name: 'codVehic',  type: 'int'},
				{name: 'idIncidencia',  type: 'int'},
				{name: 'codClaseVehic',  type: 'int'},
				{name: 'codMarcaVehic',  type: 'int'},
				{name: 'codColorVehic',  type: 'int'},
				{name: 'claseVehic',  type: 'string'},
				{name: 'marcaVehic',  type: 'string'},
				{name: 'modelVehic',  type: 'string'},
				{name: 'placaVehic',  type: 'string'},
				{name: 'colorVehic',  type: 'string'},
				{name: 'anioVehic',  type: 'string'},
				{name: 'estReg',  type: 'string'},
			]
		});
	
		var vehicStore = Ext.create('Ext.data.Store', {
			    autoLoad : true,
				model : vehicModel,
				extraParams:{ cod: '-1' },
				//pageSize: 20,
				proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'mapa-incidencia/get-vehiculo-by-incidencia',
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true,
					timeout:99999999
				}
			});
		
		var historialStore = Ext.create('Ext.data.Store', {
		    autoLoad : true,
			model : 'HistorialModel',
			extraParams:{ cod: '-1' },
			proxy : {
				type : 'ajax',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-solo-historial-bitacora-by-incidencia',
				actionMethods : 'POST',
				reader : {
					root : 'data'
				},
				simpleSortMode : true,
				timeout:99999999
			}
			
		});

		
		//	COLUMNAS PARA GRID DE INTERVINIENTES
		
        var colCodInterv = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codInterv',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Interv'
            };
        var colIdIncidenciaInterv = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'idIncidencia',
                fieldStyle: 'text-transform:uppercase',
                text: 'Id Incidencia'
            };
        var colcodTpoInterv = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codTpoInterv',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Tpo Interv'
            };
        var colCodTpoPuesto = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'codTpoPuesto',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Tpo Puesto'
            };
        var colDescTpoInterv = {
                xtype: 'gridcolumn',
                width: 220,
                dataIndex: 'descTpoInterv',
                fieldStyle: 'text-transform:uppercase',
                text: 'Tipo Interv'
            };
        var colDescTpoPuesto = {
                xtype: 'gridcolumn',
                width: 160,
                dataIndex: 'descTpoPuesto',
                fieldStyle: 'text-transform:uppercase',
                text: 'Unidad/Puesto'
            };
        var colNombInterv = {
                xtype: 'gridcolumn',
                width: 180,
                dataIndex: 'nombInterv',
                fieldStyle: 'text-transform:uppercase',
                text: 'Nombre de interviniente'
            };
        var colApoyoPolicial = {
                xtype: 'gridcolumn',
                width: 180,
                dataIndex: 'apoyoPolicial',
                fieldStyle: 'text-transform:uppercase',
                text: 'Apoyo policial'
            };
        var colInfoInterv = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'infoInterv',
                fieldStyle: 'text-transform:uppercase',
                text: 'Info Adic.'
            };
         var colEstRegInterv = {
                xtype: 'gridcolumn',
                width: 0,
                dataIndex: 'estReg',
                fieldStyle: 'text-transform:uppercase',
                text: 'Estado'
            };
		
         
		//	COLUMNAS PARA GRID DE INVOLUCRADOS
		
        var colCodInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Involuc'
            };
        var colIdIncidenciaInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'idIncidencia',
                fieldStyle: 'text-transform:uppercase',
                text: 'Id Incidencia'
            };
        var colCodTpoInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codTpoInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Tpo Involuc'
            };
        var colCodTpoDoc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codTpoDoc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Tpo Doc'
            };
        var colDescTpoInvoluc = {
                xtype: 'gridcolumn',
                width: 200,
                dataIndex: 'descTpoInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Tipo Involuc'
            };
        var colNombInvoluc = {
                xtype: 'gridcolumn',
                width: 240,
                dataIndex: 'nombInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Nombre Involucrado'
            };
        var colDescTpoDoc = {
                xtype: 'gridcolumn',
                width: 120,
                dataIndex: 'descTpoDoc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Tipo Doc',
                //hidden: true
        	};
        var colNumDocInvoluc = {
                xtype: 'gridcolumn',
                width: 100,
                dataIndex: 'numDocInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Nro Documento',
                //hidden: true
            };
        var colEdadInvoluc = {
                xtype: 'gridcolumn',
                width: 80,
                dataIndex: 'edadInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Edad'
            };
        var colDescObserv = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'descObserv',
                fieldStyle: 'text-transform:uppercase',
                text: 'Observación'
            };
        var colCodVehicInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codVehicInvoluc',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Vehic'
            };
        var colCodClaseInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codClaseVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Clase Vehic'
            };
        var colCodMarcaInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codMarcaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Marca Vehic'
            };
        var colCodColorInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codColorVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Color Vehic'
            };
        var colClaseInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'claseVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Clase'
            };
        var colMarcaInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'marcaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Marca'
            };
        var colModelInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'modelVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Model'
            };
        var colPlacaInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'placaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Placa'
            };
        var colColorInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'colorVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Color'
            };
        var colAnioInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
//                hidden: true,
                dataIndex: 'anioVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Año'
            };
        var colEstRegInvoluc = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'estReg',
                fieldStyle: 'text-transform:uppercase',
                text: 'Estado'
            };
		
		
        //	COLUMNAS PARA GRID DE VEHICULOS
		
        var colCodVehic = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Interv'
            };
        var colIdIncidenciaVehic = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'idIncidencia',
                fieldStyle: 'text-transform:uppercase',
                text: 'Id Incidencia'
            };
        var colCodClaseVehic = {
                xtype: 'gridcolumn',
                width: 30,
                hidden: true,
                dataIndex: 'codClaseVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Clase Vehic'
            };
        var colCodMarcaVehic = {
                xtype: 'gridcolumn',
                width: 30,
                hidden: true,
                dataIndex: 'codMarcaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Marca Vehic'
            };
        var colCodColorVehic = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'codColorVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Cod Color Vehic'
            };
        var colClaseVehic = {
                xtype: 'gridcolumn',
                width: 200,
//                hidden: true,
                dataIndex: 'claseVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Clase'
            };
        var colMarcaVehic = {
                xtype: 'gridcolumn',
                width: 200,
//                hidden: true,
                dataIndex: 'marcaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Marca'
            };
        var colModelVehic = {
                xtype: 'gridcolumn',
                width: 100,
//                hidden: true,
                dataIndex: 'modelVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Model'
            };
        var colPlacaVehic = {
                xtype: 'gridcolumn',
                width: 100,
//                hidden: true,
                dataIndex: 'placaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Placa'
            };
        var colColorVehic = {
                xtype: 'gridcolumn',
                width: 120,
//                hidden: true,
                dataIndex: 'colorVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Color'
            };
        var colAnioVehic = {
                xtype: 'gridcolumn',
                width: 100,
//                hidden: true,
                dataIndex: 'anioVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Año'
            };
        var colEstRegVehic = {
                xtype: 'gridcolumn',
                width: 0,
//                hidden: true,
                dataIndex: 'estReg',
                fieldStyle: 'text-transform:uppercase',
                text: 'Estado'
            };
		
       
        var idWin = Ext.id();
        
        var tpoUser = 0
		if(ROLROL==null || ROLROL==""){
			tpoUser = ROL*10000;
		} else {
			tpoUser = ROL*10000 + parseInt(ROLROL);
		} 
        
        if (options.codIncidencia && options.codIncidencia!=null){
        	options.title = options.title+" - Incidencia nro."+options.codIncidencia;
        } else {
        	options.title = options.title+" - Nuevo";
        }
        
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    height: 750,
		    width: 980,
		    modal:true,
		    closeAction: 'destroy',
		    scrollable: true,
		    id: idWin+'win-form-registro',
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
		            editable: false,
		            listeners:{
		    			
	    				afterrender:function(){
	    					
	    					console.log("options");
	    					console.log(options);
	    					
	    					console.log("ROL="+ROL);
	    					console.log("ROLROL="+ROLROL);
	    					
	    					if(options.optForm){
	    						
	    						console.log("NUEVO REGISTRO POR WAZE");
	    						
	    						var coord = options.optForm;
    							var thisWin = Ext.getCmp(idWin+'win-form-registro');
//		    					thisWin.body.mask('Obteniendo información...');
		    					$.ajax({
    	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
	    	        					async : true,
										method : 'GET',
	    	        					dataType: "json",
    								    data:{ latitud:options.optForm.split(' ')[0],longitud:options.optForm.split(' ')[1] },
    								    success: function( response ) {
    								    	var result = response.result || [];
    								    	if(result.length>0){
    								    		var name = result[0];
    								    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
    								    	}
    								    }
    	        				});
		    					Ext.getCmp('cbxUnidad').setValue(1);
		    					Ext.getCmp('cbxCaso').store.load({
        	  						params: { cod: 1 }
        	  					});
		    					Ext.getCmp('btnMapear').disable();
		    					Ext.getCmp('coordenadas').setValue(options.optForm.split(' ')[0]+' '+options.optForm.split(' ')[1]);
		    					
		    					if (ROLROL!=1002 && ROLROL!=1003 && (ROLROL!=null||ROLROL!="")) {
		    						Ext.getCmp('cbxAsignado').setValue(ROLROL);
		    						Ext.getCmp('cbxAsignado').setDisabled(true);
		    					}
	    						Ext.getCmp('cbxSituacion').setValue(873);
	    						Ext.getCmp('cbxMedio').setValue(990);
	    						
	    						IncidenciaService.setZonaSubZona2(options.optForm.split(' ')[1]+' '+options.optForm.split(' ')[0]);
	    						
	    						
	    					} else if(options.optReach){
	    						
	    						console.log("NUEVO REGISTRO POR REACH");
	    						
	    						var coord = options.optReach.locationLat+' '+options.optReach.locationLng;
	    						var thisWin = Ext.getCmp(idWin+'win-form-registro');
	    						Ext.getCmp('idReach').setValue(options.optReach.id);
	    						$.ajax({
    	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
	    	        					async : true,
										method : 'GET',
	    	        					dataType: "json",
    								    data:{ latitud:options.optReach.locationLat, longitud:options.optReach.locationLng },
    								    success: function( response ) {
    								    	var result = response.result || [];
    								    	if(result.length>0){
    								    		var name = result[0];
    								    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
    								    	}
    								    }
    	        				});
	    						
	    						var tipifReach = parseInt(options.optReach.incidentType);
	    						var tipifNew = 0;
	    						
	    						Util.runAjax({
		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-tipif-from-reach',
//		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
		    						async : true,
//		    						async : false,
									method : 'GET',
									params:{ tipifReach: tipifReach},
//									timeout:1000,
									success:function(http){
										try{
											var response = Ext.decode(http.responseText);
											var data = response.data;
											if (data.unidad!=null) { 
													Ext.getCmp('cbxUnidad').setValue(data.unidad); 
													Ext.getCmp('cbxCaso').store.load({
					            	  						params: { cod: data.unidad }
					            	  					});
												}
											if (data.caso!=null){ 
													Ext.getCmp('cbxCaso').setValue(data.caso); 
													IncidenciaService.onChangeUnidadCaso(data.unidad, data.caso);	// PERSONALIZA FORM
													Ext.getCmp('cbxSubCaso').store.load({
							            	  				params: { cod: data.caso }
									            	  	});
													
												}
		            	  					if (data.subcaso!=null){ 
			            	  						Ext.getCmp('cbxSubCaso').setValue(data.subcaso);
			            	  						IncidenciaService.onChangeSubCaso(data.subcaso);
			            	  					}

										} catch(e) {
											console.error("Exception thrown", e.stack);
//											thisWin.close();
											thisWin.destroy();
											Ext.id();
										
										}
									}
								});
	    						Ext.getCmp('btnMapear').disable();
								Ext.getCmp('coordenadas').setValue(options.optReach.locationLat+' '+options.optReach.locationLng);
	    						Ext.getCmp('cbxSituacion').setValue(873);
	    						Ext.getCmp('cbxMedio').setValue(1009);
	    						
	    						if (tpoUser==9010000 || tpoUser>9021001){
	    							Ext.getCmp('cbxAsignado').setDisabled(false);
									Ext.getCmp('cbxAsignado').allowBlank = true;
								} else if(tpoUser>9010000 && tpoUser<9021001) {
									Ext.getCmp('cbxAsignado').setValue(ROLROL);
									Ext.getCmp('cbxAsignado').setDisabled(true);
									Ext.getCmp('cbxAsignado').allowBlank = false;
								} else if(tpoUser==9021001) {
									Ext.getCmp('cbxAsignado').setDisabled(true);
									Ext.getCmp('cbxAsignado').allowBlank = true;
								}
	    						
	    						IncidenciaService.setZonaSubZona2(options.optReach.locationLng+' '+options.optReach.locationLat);
	    						
	    						
	    						
	    					} else if(options.optPos){
	    						
	    						console.log("NUEVO REGISTRO POR POS");
	    						
	    						var coord = options.optPos.latitud+' '+options.optPos.longitud;
	    						var thisWin = Ext.getCmp(idWin+'win-form-registro');
	    						Ext.getCmp('codComer').setValue(options.optPos.codComer);
	    						Ext.getCmp('coordenadas').setValue(options.optPos.latitud+' '+options.optPos.longitud);
	    						IncidenciaService.setZonaSubZona2(options.optPos.longitud+' '+options.optPos.latitud);
	    						try {
	    							
	    							$.ajax({
	    	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
		    	        					async : true,
											method : 'GET',
		    	        					dataType: "json",
	    								    data:{ latitud:options.optPos.latitud, longitud:options.optPos.longitud },
	    								    success: function( response ) {
	    								    	var result = response.result || [];
	    								    	if(result.length>0){
	    								    		var name = result[0];
	    								    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
	    								    	}
	    								    },
	    								    failure: function(){
	    								    	Ext.Msg.alert("Mapeo incompleto", "No se puede obtener la vía dentro de un lote. Por favor, digítela manualmente", Ext.emptyFn);
	    								    }
	    	        				});
	    							
								} catch (e) {
									console.error("Exception thrown", e.stack);
								}
								
								Ext.getCmp('txtNombReport').setValue(options.optPos.nombComer);
								Ext.getCmp('txtDetalle').setValue("COD COMERCIO: "+options.optPos.codComer+
																	". GIRO COMERCIAL: "+options.optPos.descGiro+
																	". DIRECCION: "+options.optPos.dirComer);
								
								if (options.optPos.fecUltima!=null){
    	  							Ext.getCmp('fecNotificacion').setValue(new Date(options.optPos.fecUltima));
		    						Ext.getCmp('horNotificacion').setValue(new Date(options.optPos.fecUltima).toLocaleTimeString('en-GB').substring(0, 5));
	    						} else {
	    							var fecha = new Date();
		    						Ext.getCmp('fecNotificacion').setValue(fecha);
		    						Ext.getCmp('horNotificacion').setValue(fecha.toLocaleTimeString('en-GB').substring(0, 5));
	    						}
	    						
	    						Ext.getCmp('cbxSituacion').setValue(873);
	    						Ext.getCmp('cbxMedio').setValue(948);
	    						
	    						if (tpoUser==9010000 || tpoUser>9021001){
	    							Ext.getCmp('cbxAsignado').setDisabled(false);
									Ext.getCmp('cbxAsignado').allowBlank = true;
								} else if(tpoUser>9010000 && tpoUser<9021001) {
									Ext.getCmp('cbxAsignado').setValue(ROLROL);
									Ext.getCmp('cbxAsignado').setDisabled(true);
									Ext.getCmp('cbxAsignado').allowBlank = false;
								} else if(tpoUser==9021001) {
									Ext.getCmp('cbxAsignado').setDisabled(true);
									Ext.getCmp('cbxAsignado').allowBlank = true;
								}

	    						
	    					} else if(options.codIncidencia){
	    						
	    						console.log("SE ABRE REGISTRO ESTANDAR");
	    						
	    						var cod = options.codIncidencia;
		    					var thisWin = Ext.getCmp(idWin+'win-form-registro');
		    					thisWin.body.mask('Obteniendo información...');
		    					Util.runAjax({
		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-incidencia',
		    						async : true,
//		    						async : false,
									method : 'GET',
									params:{ idIncidencia: cod},
									success:function(http){
										try{
											var response = Ext.decode(http.responseText);
											var data = response.data;
											
											//	PARA CAPTURAR EL idIncidencia SI ES QUE EL REGISTRO EXITIERA
													if (data.idIncidencia!=null){
															Ext.getCmp('idIncidencia').setValue(data.idIncidencia);
															Ext.getCmp('fieldAudio').setValue(data.urlAudio);
															Ext.getCmp('tbInvoluc').store.loadData(data.involucrados);
															Ext.getCmp('tbInterv').store.loadData(data.intervinientes);
															Ext.getCmp('tbVehic').store.loadData(data.vehiculos);
															Ext.getCmp('tbHistorial').store.loadData(data.bitacora);
													}
													
													if (data.usrRegistra!=null){ Ext.getCmp('txtUsrRegistra').setValue(data.usrRegistra); }
													if (data.usrModifica!=null){ Ext.getCmp('txtUsrModifica').setValue(data.usrModifica); }
													
													if (data.codMedio!=null){ Ext.getCmp('cbxMedio').setValue(data.codMedio); }
													if (data.codSituacion!=null){ Ext.getCmp('cbxSituacion').setValue(data.codSituacion); }
													
													if (data.param1!=null){ 
														Ext.getCmp('txtTituloIncidencia').setValue(data.param1);
													}
													
													if(data.tpoOperador!=null){
														Ext.getCmp('cbxAsignado').setValue(data.tpoOperador);
													}
													switch(parseInt(ROL)){
							    						case 901: case 903:
							    							Ext.getCmp('cbxAsignado').setDisabled(false);
	//														Ext.getCmp('cbxAsignado').allowBlank = false;
															break;
							    						case 902:
							    							if(ROLROL>1001 && ROLROL<1005){
							    								Ext.getCmp('cbxAsignado').setDisabled(false);
							    							}else{
							    								Ext.getCmp('cbxAsignado').setDisabled(true);
							    							}
							    							break;
							    						default: break;
						    						}
													
//													if ((tpoUser==9010000 || tpoUser>9021001)&&!DES_LOGIN.includes("PFI.")){
//														if (data.codMedio==800||data.codMedio==801||data.codMedio==904){
//																Ext.getCmp('cbxAsignado').setValue(data.tpoOperador);
//																Ext.getCmp('cbxAsignado').setDisabled(false);
//																Ext.getCmp('cbxAsignado').allowBlank = true;
//														} else {
//															if(data.tpoOperador!=null){
//																Ext.getCmp('cbxAsignado').setValue(data.tpoOperador);
//															}
//															Ext.getCmp('cbxAsignado').setDisabled(false);
//															Ext.getCmp('cbxAsignado').allowBlank = false;
//														}
//													} else if(tpoUser>9010000 && tpoUser<9021001) {
//														Ext.getCmp('cbxAsignado').setValue(data.tpoOperador!=null?data.tpoOperador:ROLROL);
//														Ext.getCmp('cbxAsignado').setDisabled(true);
//														Ext.getCmp('cbxAsignado').allowBlank = false;
//													} else if(tpoUser==9021001 || DES_LOGIN.includes("PFI.")) {
//														Ext.getCmp('cbxAsignado').setDisabled(true);
//														Ext.getCmp('cbxAsignado').allowBlank = true;
//													}
												
													if (tpoUser==9010000){
														Ext.getCmp('txtTituloIncidencia').setDisabled(false);
														Ext.getCmp('txtTituloIncidencia').setHidden(false);
														Ext.getCmp('btnAdjuntar').setHidden(false);
													}
													
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
				            	  			
				            	  					if (data.coordenadas!=null){ 
				            	  						Ext.getCmp('coordenadas').setValue(data.coordenadas); 
				            	  					}
				            	  					
				            	  					if (data.descVia==null||data.zona==null||data.subzona==null){
					            	  						if(data.coordenadas!=null && data.coordenadas!=""){
					            	  							try{
					            	  								$.ajax({
							            	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
							            								    dataType: "json",
							            								    data:{
							            								    	latitud:data.coordenadas.split(' ')[0],
							            								    	longitud:data.coordenadas.split(' ')[1]
							            								    },
							            								    success: function( response ) {
							            								    	var result = response.result || [];
							            								    	if(result.length>0){
							            								    		var name = result[0];
							            								    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
							            								    	}
							            								    }
							            	        				});
						            	  							IncidenciaService.setZonaSubZona2(data.coordenadas.split(' ')[1]+' '+data.coordenadas.split(' ')[0]);
					            	  							} catch(e) {
					            	  								console.log("Ocurrio una excepcion al obtener via, zona o subzona cuando se abre incidencia. El detalle es el siguiente...");
					            	  								console.error("Exception thrown", e.stack);
					            	  							}
					            	  							
					            	  						}
					            	  						
					            	  					} else {
					            	  						if (data.descVia!=null){ Ext.getCmp('txtDireccion').setValue(data.descVia); }
					            	  						
					            	  						IncidenciaService.setCombosSector(data.zona,data.subzona);
					            	  						
//					            	  						if (data.zona!=null){ Ext.getCmp('txtZona').setValue(data.zona); }
//						            	  					if (data.subzona!=null){ Ext.getCmp('txtSubZona').setValue(data.subzona); }
					            	  					}
				            	  					if (data.cdra!=null){ Ext.getCmp('txtCuadra').setValue(data.cdra); }
				            	  					if (data.numero!=null){ Ext.getCmp('txtNumero').setValue(data.numero); }
				            	  					if (data.dpto!=null){ Ext.getCmp('txtDpto').setValue(data.dpto); }
				            	  					
				            	  					
								    		// PARA SECCION DATOS DE REPORTANTE

										    		if (data.nombReport!=null){ Ext.getCmp('txtNombReport').setValue(data.nombReport); }
													if (data.telfReport!=null){ Ext.getCmp('txtTelfReport').setValue(data.telfReport); }
													if (data.dirReport!=null){ Ext.getCmp('txtDirecReport').setValue(data.dirReport); }
				            	  					if (data.cextReport!=null){ Ext.getCmp('txtCarnetExt').setValue(data.cextReport); }
				            	  					if (data.codNacReport!=null){ Ext.getCmp('cbxNacionalidad').setValue(data.codNacReport); }
				            	  					
				            	  					

					    					//	PARA SECCION DETALLE

				            	  					if (data.descripcion!=null){ Ext.getCmp('txtDetalle').setValue(data.descripcion); }
				            	  					
				            	  					if (data.fecNotificacion!=null){
				            	  							Ext.getCmp('fecNotificacion').setValue(new Date(data.fecNotificacion));
								    						Ext.getCmp('horNotificacion').setValue(new Date(data.fecNotificacion).toLocaleTimeString('en-GB').substring(0, 5));
							    					}
				            	  					if (data.fecEvento!=null){
								    						Ext.getCmp('fecEvento').setValue(new Date(data.fecEvento));
								    						Ext.getCmp('horEvento').setValue(new Date(data.fecEvento).toLocaleTimeString('en-GB').substring(0, 5));
								    					}
				            	  					if (data.fecAtencion!=null){
								    						Ext.getCmp('fecAtencion').setValue(new Date(data.fecAtencion));
								    						Ext.getCmp('horAtencion').setValue(new Date(data.fecAtencion).toLocaleTimeString('en-GB').substring(0, 5));
								    					}
				            	  					if (data.codSeveridad!=null){ Ext.getCmp('cbxSeveridad').setValue(data.codSeveridad); }
				            	  					if (data.codEstado!=null){ Ext.getCmp('cbxEstado').setValue(data.codEstado); }
				            	  					if (data.codSubestado!=null){ 
				            	  							Ext.getCmp('cbxSubEstado').setValue(data.codSubestado); 
				            	  							if(data.codSubestado==830){
					            	  				    			Ext.getCmp('cbxSubEstado').setDisabled(false);
					            	  				    		}else{
					            	  				    			Ext.getCmp('cbxSubEstado').setDisabled(true);
					            	  				    		}
				            	  						}
				            	  					if (data.codModalidad!=null){ Ext.getCmp('cbxModalidad').setValue(data.codModalidad); }
				            	  					if (data.descMotivo!=null){ Ext.getCmp('txtMotivo').setValue(data.descMotivo); }
				            	  					if (data.tpoHallazgo!=null){ Ext.getCmp('cbxTpoHallazgo').setValue(data.tpoHallazgo); }
				            	  				
				            	  			thisWin.body.unmask();
											
				            	  			if (data.coordenadas==null || data.coordenadas=="") {
	            	  							Ext.Msg.alert("Medio de reporte: ALERTA MIRAFLORES", "Por favor, especifique la ubicación de la incidencia", Ext.emptyFn);
	            	  						}
				            	  			
										} catch(e) {
											console.error("Exception thrown", e.stack);
//											thisWin.close();
											thisWin.destroy();
											Ext.id();
										
										}
									}
								});
		    					
	    					
	    					} else {
	    						
	    						console.log("NUEVO REGISTRO");
	    						
	    						var fecha = new Date();
	    						Ext.getCmp('fecNotificacion').setValue(fecha);
	    						Ext.getCmp('horNotificacion').setValue(fecha.toLocaleTimeString('en-GB').substring(0, 5));
	    						
	    						Ext.getCmp('cbxSituacion').setValue(873);
	    						
//	    						debugger;
	    						switch(parseInt(ROL)){
		    						case 901: case 903:
		    							Ext.getCmp('cbxAsignado').setDisabled(false);
										break;
		    						case 902:
		    							if(ROLROL>1001 && ROLROL<1005){
		    								Ext.getCmp('cbxAsignado').setDisabled(false);
		    							}else{
		    								console.log("NO ES RADIO");
		    								Ext.getCmp('cbxAsignado').setValue(ROLROL);
		    								Ext.getCmp('cbxAsignado').setDisabled(true);
		    							}
		    							break;
		    						default: break;
	    						}
	    						
//	    						if ((tpoUser==9010000 || tpoUser>9021001)&&!DES_LOGIN.includes("PFI.")){
//									Ext.getCmp('cbxAsignado').setDisabled(false);
//									Ext.getCmp('cbxAsignado').allowBlank = false;
//								} else if(tpoUser>9010000 && tpoUser<9021001) {
//									Ext.getCmp('cbxAsignado').setValue(ROLROL);
//									Ext.getCmp('cbxAsignado').setDisabled(true);
//									Ext.getCmp('cbxAsignado').allowBlank = false;
//								} else if(tpoUser==9021001 || DES_LOGIN.includes("PFI."))  {
//									Ext.getCmp('cbxAsignado').setDisabled(true);
//									Ext.getCmp('cbxAsignado').allowBlank = true;
//								}
	    						
	    					}
	    					
	    					
	    				}
	    			},
		            items: [
		            	
		            	idIncidencia,
		            	idReach,
//		            	idOjoVial,
		            	codComer,
		            	fieldAudio,
		            	txtUsrRegistra,
		            	txtUsrModifica,
		            	
                //	FORMULARIO DE ESPECIFICACION DE INCIDENCIA
		            	
		                {
		                    xtype: 'fieldset',
		                    minHeight: 120,
		                    id: 'pnEspecificacion',
		                    width: 490,
		                    style: 'border-width: 0px',
		                    title: 'Tipificación de incidencia',
		                    items: [
		                    	cbxUnidad,
		                    	cbxCaso,
		                    	cbxSubCaso,
		                    ]
		                },
		                
                //	FORMULARIO DE UBICACION DE INCIDENCIA
		                
		                {
		                    xtype: 'fieldset',
		                    minHeight: 100,
		                    id: 'pnUbicacion',
		                    margin: '0 0 0 15',
		                    width: 390,
		                    layout: 'column',
		                    title: 'Ubicación de incidencia',
		                    items: [
		                        txtDireccion,
		                        txtCuadra,
		                        txtNumero,
		                        txtDpto,
		                        {
		                            xtype: 'fieldcontainer',
		                            height: 34,
		                            margin: '10 0 0 0',
		                            width: 280,
		                            layout: 'column',
//		                            fieldLabel: 'Zona-SubZ',
//		                            labelWidth: 70,
		                            items: [
//		                            	txtZona,
//		                            	txtSubZona,
		                            	cbxArea,
		                            	cbxZona,
		                            	cbxSubzona,
		                            	coordenadas,
		                            ]
		                        },
		                        btnMapear
		                    ]
		                },
		                
                //	FORMULARIO DE DATOS DEL REPORTANTE
		                
		                {
		                    xtype: 'fieldset',
		                    height: 80,
		                    id: 'pnReportante',
//		                    minHeight: 75,
		                    width: 900,
		                    layout: 'column',
		                    title: 'Datos del reportante',
		                    items: [
		                    	txtNombReport,
		                    	txtTelfReport,
		                    	txtCarnetExt,
		                    	cbxNacionalidad,
		                    	txtDirecReport,
		                    	btnUrlAudio,
		                    ]
		                },

                //	FORMULARIO DE DETALLE DE INCIDENCIA
	
		                {	
		                	xtype: 'form',
		                	id: 'formDetalle',
		                	bodyBorder: false,
		                	items: [
				                {
				                    xtype: 'fieldset',
				                    id: 'pnDetalle',
				                    width: 900,
				                    layout: 'column',
				                    defaults : { xtype: 'form', },
				                    title: 'Detalle de incidencia',
				                    items: [
				                    	{
				                            xtype: 'container',
				                            width: 855,
				                            layout: {
				                                type: 'hbox',
				                                align: 'stretch'
				                            },
				                            items: [
				                                {
				                                    xtype: 'container',
				                                    width: 344,
				                                    items: [
				                                    	txtDetalle,
				                                    	{
				                                            xtype: 'fieldcontainer',
				                                            margin: '',
				                                            layout: 'column',
				                                            fieldLabel: 'Fecha de Notificación',
				                                            labelWidth: 140,
				                                            items: [
				                                            	fecNotificacion,
								                            	horNotificacion
				                                            ]
				                                        },
				                                        {
				                                            xtype: 'fieldcontainer',
				                                            margin: '',
				                                            width: 400,
				                                            layout: 'column',
				                                            fieldLabel: 'Fecha de Incidencia',
				                                            labelWidth: 140,
				                                            items: [
				                                            	fecEvento,
								                            	horEvento
				                                            ]
				                                        },
				                                        {
				                                            xtype: 'fieldcontainer',
				                                            margin: '',
				                                            width: 400,
				                                            layout: 'column',
				                                            fieldLabel: 'Fecha de Atención',
				                                            labelWidth: 140,
				                                            items: [
				                                            	fecAtencion,
								                            	horAtencion
				                                            ]
				                                        }
				                                        
				                                    ]
				                                },
				                                {
				                                    xtype: 'fieldcontainer',
				                                    fieldLabel: 'Historial de seguimiento',
				                                    labelAlign: 'top',
//				                                    layout: 'column',
//				                                    layout: 'form',
				                                    height: 175,
				                                    items: [
				                                        {
				                                        	xtype: 'gridpanel',
				                                            id: 'tbHistorial',
				                                            height: 130,
				                                            margin: '0 10 0 0',
				                                            width: 510,
				                                            store: historialStore,
				                                            bodyBorder: true,
				                                            header: false,
				                                            autoLoad: true,
				                                            border:true,
				                                            title: 'My Grid Panel',
				                                            listeners : {
				                                            	cellclick : function(view, cell, cellIndex, record,row, rowIndex, e) {
				                                            		Ext.Msg.alert('Descripcion de acción', Ext.getCmp('tbHistorial').getStore().getAt(rowIndex).data.descripcion, Ext.emptyFn);
				                                                }
				                                            },
				                                            columns: [
				                                            	{
//                        												xtype: 'numbercolumn',
                        												width: 0,
                        								                hidden: true,
                        								                dataIndex: 'idBitacora',
                        								                text: 'Id Bitacora'
                        										},								
                        										{
//                        												xtype: 'numbercolumn',
                        												width: 0,
                        								                hidden: true,
                        								                dataIndex: 'idIncidencia',
                        								                text: 'Id Incidencia'
                        										},
                        										{
//				                                            			xtype: 'datecolumn',
                        								                width: 160,
                        								                dataIndex: 'fecha',
                        								                text: 'Fecha Hora'
//                        								                ,renderer:Ext.util.Format.dateRenderer('d-m-Y H:i'), 
//                        								                editor: new Ext.form.DateField({
//                        								                    name: 'fecha', 
//                        								                    width:160	, 
//                        								                    allowBlank:false
//                        								                }) 
                        										},
                        										{
//				                                            			xtype: 'gridcolumn',
                        								                width: 330,
                        								                dataIndex: 'descripcion',
                        								                text: 'Accion de Respuesta',
                        								                variableRowHeight: true
                        										},
                        										{
//                        												xtype: 'gridcolumn',
                        								                width: 0,
                        								                hidden: true,
                        								                dataIndex: 'usuario',
                        								                text: 'Usuario'
                        										},
                        										{
//                        												xtype: 'gridcolumn',
                        								                width: 0,
                        								                hidden: true,
                        								                dataIndex: 'estReg',
                        								                text: 'Estado'
                        										}
				                                            ],
				                                            viewConfig: {
//						                                        height: 35,
						                                        margin: '',
						                                        maxHeight: 140,
						                                        minHeight: 35,
						                                        stripeRows: false,
						                                        width: 160
						                                    }
				                                        },
				                                        {
						                                    xtype: 'button',
						                                    id: 'btnAllHist',
//						                                    margin: '0 0 0 765',
//						                                    width: 100,
						                                    text: 'Ver todo',
						                                    handler:function(){
						                                    	var fullRespuesta = "";
			                                            		Ext.getCmp('tbHistorial').getStore().each(function(record) {
			                                                        fullRespuesta = fullRespuesta + record.get("fecha") + ": " + record.get("descripcion") + '</br>';
				                                                    });
			                                            		Ext.Msg.alert('Descripcion de acción', fullRespuesta, Ext.emptyFn);
						        	                    	}
						                                }
				                                    ]
				                                }
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
				                            id: 'pnVehic',
				                            margin: '10 0 0 0',
				                            width: 865,
				                            hidden: true,
				                            fieldLabel: 'Vehiculos involucrados',
				                            labelAlign: 'top',
				                            items: [
				                                {
				                                    xtype: 'gridpanel',
				                                    id: 'tbVehic',
				                                    width: 865,
				                                    store: vehicStore,
				                                    bodyBorder: true,
				                                    header: false,
				                                    autoLoad: true,
				                                    header: false,
				                                    border:true,
				                                    title: 'My Grid Panel',
				                                    columns: [
				                                    	colCodVehic,
				                                    	colIdIncidenciaVehic,
				                                    	colCodClaseVehic,
				                                    	colCodMarcaVehic,
//				                                    	colCodColorVehic,
				                                    	colClaseVehic,
				                                    	colMarcaVehic,
				                                    	colModelVehic,
				                                    	colPlacaVehic,
				                                    	colColorVehic,
				                                    	colAnioVehic,
				                                    	colEstRegVehic,
				                                        {
				                                            xtype:'actioncolumn', 
				                                            width:40,
				                                            tdCls:'delete',
				                                            items: [
				                                            	{
					                                            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
					                                            	tooltip: 'Eliminar',
					                                                handler: function(grid, rowIndex, colIndex) {
					                                                    var rec = grid.getStore().getAt(rowIndex);
					                                                    Ext.Msg.confirm('Confirmar', '¿Está seguro de eliminar el vehiculo seleccionado?', function(btn, text){
					    												    if (btn == 'yes'){
					    												    	grid.getStore().remove(rec);
					    												    }
					    												});
					                                                }
					                                            }
				                                            ]
				                                        }
				                                    ],
				                                    viewConfig: {
				                                        margin: '',
				                                        maxHeight: 140,
				                                        minHeight: 35,
				                                        stripeRows: false
				                                    }
				                                },
				                                {
				                                    xtype: 'button',
				                                    id: 'btnNewVehic',
				                                    margin: '0 0 0 765',
				                                    width: 100,
				                                    text: 'Agregar',
				                                    handler:function(){
				        		                    	IncidenciaService.openFormVehiculo({
				        		                    		title:'Vehiculo'
				        		                    	})
				        	                    	}
				                                }
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
				                                    border:true,
				                                    title: 'My Grid Panel',
				                                    columns: [
				                                    	colCodInvoluc,
				                                    	colIdIncidenciaInvoluc,
				                                    	colCodTpoInvoluc,
				                                    	colCodTpoDoc,
				                                    	colDescTpoInvoluc,
				                                    	colNombInvoluc,
				                                    	colDescTpoDoc,
				                                    	colNumDocInvoluc,
				                                    	colEdadInvoluc,
					                                    colDescObserv,
//					                                    colCodVehicInvoluc,
//					                                    colCodClaseInvoluc,
//					                                    colCodMarcaInvoluc,
//					                                    colCodColorInvoluc,
					                                    colClaseInvoluc,
					                                    colMarcaInvoluc,
					                                    colModelInvoluc,
					                                    colPlacaInvoluc,
					                                    colColorInvoluc,
					                                    colAnioInvoluc,
					                                    colEstRegInvoluc,
				                                        {
				                                            xtype:'actioncolumn', 
				                                            width:40,
				                                            tdCls:'delete',
				                                            items: [{
				                                            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
				                                            	tooltip: 'Eliminar',
				                                                handler: function(grid, rowIndex, colIndex) {
				                                                    var rec = grid.getStore().getAt(rowIndex);
				                                                    Ext.Msg.confirm('Confirmar', '¿Está seguro de eliminar el involucrado seleccionado?', function(btn, text){
				                                                    	grid.getStore().remove(rec);
				    												});
				                                                }
				                                            }]
				                                        }
				                                    ],
				                                    viewConfig: {
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
				                            margin: '10 0 10 0',
				                            width: 865,
				                            fieldLabel: 'Fuerzas intervinientes',
				                            labelAlign: 'top',
				                            items: [
				                                {
				                                    xtype: 'gridpanel',
				                                    id: 'tbInterv',
				                                    margin: '',
				                                    store: intervStore,
				                                    width: 865,
				                                    autoLoad: true,
				                                    bodyBorder: true,
				                                    header: false,
				                                    border:true,
				                                    title: 'My Grid Panel',
				                                    columns: [
				                                    	colCodInterv,
				                                    	colIdIncidenciaInterv,
				                                    	colcodTpoInterv,
//				                                    	colCodTpoPuesto,
				                                    	colDescTpoInterv,
				                                    	colDescTpoPuesto,
				                                    	colNombInterv,
				                                    	colApoyoPolicial,
				                                    	colInfoInterv,
				                                    	colEstRegInterv,
				                                        {
				                                            xtype:'actioncolumn', 
				                                            width:40,
				                                            tdCls:'delete',
				                                            items: [{
				                                            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
				                                            	tooltip: 'Eliminar',
				                                                handler: function(grid, rowIndex, colIndex) {
				                                                    var rec = grid.getStore().getAt(rowIndex);
				                                                    var rec = grid.getStore().getAt(rowIndex);
				                                                    Ext.Msg.confirm('Confirmar', '¿Está seguro de eliminar el interviniente seleccionado?', function(btn, text){
				                                                    	grid.getStore().remove(rec);
				    												});
				                                                }
				                                            }]
				                                        }
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
		    			},
		    			{
		    				xtype: 'fieldset',
                            id: 'pnMedioSituacion',
                            margin: '10 0 0 0',
                            width: 900,
                            layout: 'column',
                            title: 'Propiedades de incidencia',
                            labelAlign: 'top',
                            items: [
                            	cbxMedio,
                            	cbxSituacion,
                            	cbxAsignado,
                            	txtTituloIncidencia
                            ]
                        }
		            ]
		        }
		    ]
			,
		    	buttons:[
		    		{
//			    		xtype: 'button',
//			    		id: 'btnAdjuntar',
//			    		margin: '5 0 5 0',
			    		text: 'Ver Parte',
			    		id: 'btnParte',
//			    		hidden: true,
//			    		width: 80,
			    		handler: function(){ 
			    			
			    			var url = PATH_PROYECTO_BASE+'mapa-incidencia/visor-partes?idIncidencia='+Ext.getCmp('idIncidencia').getValue();
//							window.open(url, "_blank", "toolbar=1, scrollbars=1, resizable=1, width=" + 1015 + ", height=" + 800);
							window.open(url, "_blank", "toolbar=1, scrollbars=1, resizable=1");
			    			
//			    			Util.runAjax({
//								url : PATH_PROYECTO_BASE+ 'mapa-incidencia/actualizar-bitacora',
//								async : true,
//								method : 'POST',
//								params : respuesta,
////								timeout : 1000,
//								success : function(http) {
//									thisWin.body.unmask();
//									Ext.Msg.alert('Message','Respuesta registrada');
//									IncidenciaService.updateHistorial();
//									Ext.getCmp('txtDescripcion').reset();
////									Util.runAjax({
////										url : PATH_PROYECTO_BASE+ 'mapa-incidencia/set-estado-marker-respuesta',
////										async : true,
////										method : 'POST',
////										params : {idIncidencia: respuesta.idIncidencia},
////										timeout : 1000,
////										success : function(http) {
////												MapaIncidencias.refreshVoxiva();
////											}
////									});
//								}
//			    			});
			    			
			    		}
		    		},
		    		{
//			    		xtype: 'button',
//			    		id: 'btnAdjuntar',
//			    		margin: '5 0 5 0',
			    		text: 'Adjuntos',
			    		id: 'btnAdjuntar',
			    		hidden: true,
//			    		width: 80,
			    		handler: function(){ 
			    			if (Ext.getCmp('idIncidencia').getValue()!=null){
			    				var id = Ext.getCmp('idIncidencia').getValue();
				    			IncidenciaService.openFormAdjunto({
			                		title:'Archivos adjuntos de incidencia',
			                		id: id
				    			});
			    			}else{
			    				Ext.Msg.alert("Observación", "Primero debe guardar el registro.", Ext.emptyFn);
			    			}
			    			
		                	
			    			
			    		}
		    		},
		    		{
		    			text:'Grabar',
		    			handler:function(){
		    				
		    				var fecha = Ext.getCmp('fecNotificacion').getValue();
		    				var form = Ext.getCmp('formIncidencia').getForm();
		    				
		    				if(form.isValid()){
		    					var thisWin = Ext.getCmp(idWin+'win-form-registro');
		    					thisWin.body.mask('Espere un momento por favor.');
		    					var incidencia =  new Object();
		    					
		    					if(Ext.getCmp('idIncidencia').getValue()!=null){ incidencia.idIncidencia = Ext.getCmp('idIncidencia').getValue(); }
		    					
		    					if (Ext.getCmp('txtUsrRegistra').getValue()!=null && Ext.getCmp('txtUsrRegistra').getValue()!=""){ 
		    						incidencia.usrModifica = DES_LOGIN; 
		    					} else { 
		    						incidencia.usrRegistra = DES_LOGIN; 
		    					}
		    					if(Ext.getCmp('cbxMedio').getValue()!=null){ 
		    						incidencia.codMedio = Ext.getCmp('cbxMedio').getValue();
		    						incidencia.descMedio = Ext.getCmp('cbxMedio').getRawValue();
		    					}
		    					if(Ext.getCmp('cbxSituacion').getValue()!=null){ 
		    						incidencia.codSituacion = Ext.getCmp('cbxSituacion').getValue();
		    						incidencia.descSituacion = Ext.getCmp('cbxSituacion').getRawValue();
		    					}
		    					
		    					
		    					if(Ext.getCmp('cbxAsignado').getValue()!=null){ 
		    						incidencia.tpoOperador = Ext.getCmp('cbxAsignado').getValue();
		    					}
		    					
//		    					if(Ext.getCmp('cbxAsignado').getValue()!=null){ 
//		    						incidencia.tpoOperador = Ext.getCmp('cbxAsignado').getValue();
//		    					} else if (ROL==902 && ROLROL>994 && ROLROL<1001){
//		    						incidencia.tpoOperador = ROLROL;
//		    					} else if (ROL==902 && ROLROL==1001) {
//		    						incidencia.tpoOperador = 1001;
//		    					} else if (ROL==901||ROL==903){
//		    						if(DES_LOGIN.indexOf("PFI.") >= 0){
//		    							incidencia.tpoOperador = 1016;
//		    						}else{
//		    							var n=0;
//			    						switch (Math.floor(Math.random()*10)){
//				    						case 0: n=995; break;
//				    						case 1: n=996; break;
//				    						case 2: n=997; break;
//				    						case 3: n=998; break;
//				    						case 4: n=999; break;
//				    						case 5: n=1000; break;
//				    						default: break;
//			    						}
//			    						incidencia.tpoOperador = n;
//		    						}
//		    					}
		    					
		    					if(Ext.getCmp('txtTituloIncidencia').getValue()!=null){ 
		    						incidencia.param1 = Ext.getCmp('txtTituloIncidencia').getValue();
		    					}
		    					
		    					// SETEANDO DESDE ESPECIFICACION DE INCIDENCIA

		    					if(Ext.getCmp('cbxUnidad').getValue()!=null){ 
			    						incidencia.codUnidad = Ext.getCmp('cbxUnidad').getValue();
			    						incidencia.descUnidad = Ext.getCmp('cbxUnidad').getRawValue();
			    					}
		    					if(Ext.getCmp('cbxCaso').getValue()!=null){ 
			    						incidencia.codCaso = Ext.getCmp('cbxCaso').getValue();
			    						incidencia.descCaso = Ext.getCmp('cbxCaso').getRawValue();
			    					}
		    					if(Ext.getCmp('cbxSubCaso').getValue()!=null){ 
			    						incidencia.codSubcaso = Ext.getCmp('cbxSubCaso').getValue();
			    						incidencia.descSubcaso = Ext.getCmp('cbxSubCaso').getRawValue();
			    					}
		    					
		    					// SETEANDO DESDE DATOS DEL REPORTANTE
		    					
		    					if(Ext.getCmp('txtNombReport').getValue()!=null){ incidencia.nombReport = Ext.getCmp('txtNombReport').getValue(); }
		    					if(Ext.getCmp('txtTelfReport').getValue()!=null){ incidencia.telfReport = Ext.getCmp('txtTelfReport').getValue(); }
		    					if(Ext.getCmp('txtDirecReport').getValue()!=null){ incidencia.dirReport = Ext.getCmp('txtDirecReport').getValue(); }
		    					if(Ext.getCmp('txtCarnetExt').getValue()!=null){ incidencia.cextReport = Ext.getCmp('txtCarnetExt').getValue(); }
		    					if(Ext.getCmp('cbxNacionalidad').getValue()!=null){ incidencia.codNacReport = Ext.getCmp('cbxNacionalidad').getValue(); }
		    					
		    					
		    					// SETEANDO DESDE UBICACION DE INCIDENCIA
		    					
		    					if(Ext.getCmp('txtDireccion').getValue()!=null){ incidencia.descVia = Ext.getCmp('txtDireccion').getValue(); }
		    					if(Ext.getCmp('txtCuadra').getValue()!=null){ incidencia.cdra = Ext.getCmp('txtCuadra').getValue(); }
		    					if(Ext.getCmp('txtNumero').getValue()!=null){ incidencia.numero = Ext.getCmp('txtNumero').getValue(); }
		    					if(Ext.getCmp('txtDpto').getValue()!=null){ incidencia.dpto = Ext.getCmp('txtDpto').getValue(); }
//		    					if(Ext.getCmp('txtArea').getValue()!=null){ incidencia.area = Ext.getCmp('txtArea').getValue(); }
		    					
//		    					if(Ext.getCmp('txtZona').getValue()!=null){ incidencia.zona = Ext.getCmp('txtZona').getValue(); }
//		    					if(Ext.getCmp('txtSubZona').getValue()!=null){ incidencia.subzona = Ext.getCmp('txtSubZona').getValue(); }
		    					if(Ext.getCmp('cbxArea').getValue()!=null){ 
		    						incidencia.area = Ext.getCmp('cbxArea').getValue();
		    						incidencia.codArea = Ext.getCmp('cbxArea').getValue();
		    					}
		    					if(Ext.getCmp('cbxZona').getValue()!=null){ 
		    						incidencia.zona = Ext.getCmp('cbxZona').getRawValue();
		    						incidencia.codZona = Ext.getCmp('cbxZona').getValue();
		    					}
		    					if(Ext.getCmp('cbxSubzona').getValue()!=null){ 
		    						incidencia.subzona = Ext.getCmp('cbxSubzona').getRawValue();
		    						incidencia.codSubzona = Ext.getCmp('cbxSubzona').getValue();
		    					}
		    					
		    					if(Ext.getCmp('coordenadas').getValue()!=null){ incidencia.coordenadas = Ext.getCmp('coordenadas').getValue(); }
		    					
		    					
		    					// SETEANDO DESDE DETALLE DE INCIDENCIA
		    					if(Ext.getCmp('txtDetalle').getValue()!=null){ incidencia.descripcion = Ext.getCmp('txtDetalle').getValue(); }
		    					if(Ext.getCmp('fecNotificacion').getValue()!=null && Ext.getCmp('horNotificacion').getValue()!=null){
		    						
		    						
		    						var fecha = Ext.getCmp('fecNotificacion').getValue();
		    						incidencia.fecNotificacion = Ext.Date.format(fecha, 'd/m/Y')+" "+Ext.getCmp('horNotificacion').getValue()+":00";
		    						
//		    						var fecha = Ext.getCmp('fecNotificacion').getValue().toLocaleDateString().split('/');
//			    					var hora = Ext.getCmp('horNotificacion').getValue().split(':');
//			    					console.log("new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1])");
//			    					console.log(new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1]).getTime());
//		    						incidencia.fecNotificacion = Ext.Date.format(new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1]), 'd/m/Y h:i:s A');
//		    						console.log("incidencia.fecNotificacion");
//		    						console.log(incidencia.fecNotificacion);
		    					}
		    					if(Ext.getCmp('fecEvento').getValue()!=null && Ext.getCmp('horEvento').getValue()!=null){
		    						var fecha = Ext.getCmp('fecEvento').getValue();
		    						incidencia.fecEvento = Ext.Date.format(fecha, 'd/m/Y')+" "+Ext.getCmp('horEvento').getValue()+":00";
//		    						var fecha = Ext.getCmp('fecEvento').getValue().toLocaleDateString().split('/');
//			    					var hora = Ext.getCmp('horEvento').getValue().split(':');
//		    						incidencia.fecNotificacion = new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1]); 
		    					}
		    					if(Ext.getCmp('fecAtencion').getValue()!=null && Ext.getCmp('horAtencion').getValue()!=null){
		    						var fecha = Ext.getCmp('fecAtencion').getValue();
		    						incidencia.fecAtencion = Ext.Date.format(fecha, 'd/m/Y')+" "+Ext.getCmp('horAtencion').getValue()+":00";
//		    						var fecha = Ext.getCmp('fecAtencion').getValue().toLocaleDateString().split('/');
//			    					var hora = Ext.getCmp('horAtencion').getValue().split(':');
//		    						incidencia.fecNotificacion = new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1]); 
		    					}

		    					if(Ext.getCmp('cbxSeveridad').getValue()!=null){ incidencia.codSeveridad = Ext.getCmp('cbxSeveridad').getValue(); }
		    					if(Ext.getCmp('cbxEstado').getValue()!=null){ incidencia.codEstado = Ext.getCmp('cbxEstado').getValue(); }
		    					if(Ext.getCmp('cbxSubEstado').getValue()!=null){ incidencia.codSubestado = Ext.getCmp('cbxSubEstado').getValue(); }
		    					if(Ext.getCmp('cbxModalidad').getValue()!=null){ incidencia.codModalidad = Ext.getCmp('cbxModalidad').getValue(); }
		    					if(Ext.getCmp('txtMotivo').getValue()!=null){ incidencia.descMotivo = Ext.getCmp('txtMotivo').getValue(); }

		    					
		    					// SETEANDO LISTA DE INTERVINIENTES
		    					var listInterv = Ext.getCmp('tbInterv');
		    					if (listInterv.store.data!=null){
			    					Ext.each(listInterv.store.data.items, function(v,k){
			    						if (v.data.codInterv!=null){ incidencia['intervinientes['+k+'].codInterv'] = v.data.codInterv; }
			    						if (incidencia.idIncidencia!=null){ incidencia['intervinientes['+k+'].idIncidencia'] = incidencia.idIncidencia; }
			    						if (v.data.codTpoInterv!=null){ incidencia['intervinientes['+k+'].codTpoInterv'] = v.data.codTpoInterv; }
			    						if (v.data.codTpoPuesto!=null){ incidencia['intervinientes['+k+'].codTpoPuesto'] = v.data.codTpoPuesto; }
			    						if (v.data.descTpoInterv!=null){ incidencia['intervinientes['+k+'].descTpoInterv'] = v.data.descTpoInterv; }
			    						if (v.data.descTpoPuesto!=null){ incidencia['intervinientes['+k+'].descTpoPuesto'] = v.data.descTpoPuesto; }
			    						if (v.data.nombInterv!=null){ incidencia['intervinientes['+k+'].nombInterv'] = v.data.nombInterv; }
			    						if (v.data.apoyoPolicial!=null){ incidencia['intervinientes['+k+'].apoyoPolicial'] = v.data.apoyoPolicial; }
			    						if (v.data.estReg!=null){ incidencia['intervinientes['+k+'].estReg'] = v.data.estReg; }
			    					});
		    					}
		    					
		    					// SETEANDO LISTA DE INVOLUCRADOS
		    					var listInvoluc = Ext.getCmp('tbInvoluc');
		    					if (listInvoluc.store.data!=null){
		    						Ext.each(listInvoluc.store.data.items, function(v,k){
			    						if (v.data.codInvoluc!=null){ incidencia['involucrados['+k+'].codInvoluc'] = v.data.codInvoluc; }
			    						if (incidencia.idIncidencia!=null){ incidencia['involucrados['+k+'].idIncidencia'] = incidencia.idIncidencia; }
			    						if (v.data.codTpoInvoluc!=null){ incidencia['involucrados['+k+'].codTpoInvoluc'] = v.data.codTpoInvoluc; }
			    						if (v.data.codTpoDoc!=null){ incidencia['involucrados['+k+'].codTpoDoc'] = v.data.codTpoDoc; }
			    						if (v.data.descTpoInvoluc!=null){ incidencia['involucrados['+k+'].descTpoInvoluc'] = v.data.descTpoInvoluc; }
			    						if (v.data.descTpoDoc!=null){ incidencia['involucrados['+k+'].descTpoDoc'] = v.data.descTpoDoc; }
			    						if (v.data.nombInvoluc!=null){ incidencia['involucrados['+k+'].nombInvoluc'] = v.data.nombInvoluc; }
			    						if (v.data.edadInvoluc!=null){ incidencia['involucrados['+k+'].edadInvoluc'] = v.data.edadInvoluc; }
			    						if (v.data.numDocInvoluc!=null){ incidencia['involucrados['+k+'].numDocInvoluc'] = v.data.numDocInvoluc; }
			    						if (v.data.descObserv!=null){ incidencia['involucrados['+k+'].descObserv'] = v.data.descObserv; }
//			    						if (v.data.codVehicInvoluc!=null){ incidencia['involucrados['+k+'].codVehic'] = v.data.codVehicInvoluc; }
			    						
			    						if (v.data.codClaseVehic!=null){ incidencia['involucrados['+k+'].codClaseVehic'] = v.data.codClaseVehic; }
			    						if (v.data.codMarcaVehic!=null){ incidencia['involucrados['+k+'].codMarcaVehic'] = v.data.codMarcaVehic; }
			    						
			    						if (v.data.claseVehic!=null){ incidencia['involucrados['+k+'].claseVehic'] = v.data.claseVehic; }
			    						if (v.data.marcaVehic!=null){ incidencia['involucrados['+k+'].marcaVehic'] = v.data.marcaVehic; }
			    						if (v.data.modelVehic!=null){ incidencia['involucrados['+k+'].modelVehic'] = v.data.modelVehic; }
			    						if (v.data.placaVehic!=null){ incidencia['involucrados['+k+'].placaVehic'] = v.data.placaVehic; }
			    						if (v.data.colorVehic!=null){ incidencia['involucrados['+k+'].colorVehic'] = v.data.colorVehic; }
			    						if (v.data.anioVehic!=null){ incidencia['involucrados['+k+'].anioVehic'] = v.data.anioVehic; }
			    						if (v.data.estReg!=null){ incidencia['involucrados['+k+'].estReg'] = v.data.estReg; }
			    					});
		    					}
		    					
		    					// SETEANDO LISTA DE VEHICULOS
		    					var listVehic = Ext.getCmp('tbVehic');
		    					if (listVehic.store.data!=null){
		    						Ext.each(listVehic.store.data.items, function(v,k){
		    							if (v.data.codVehic!=null){ incidencia['vehiculos['+k+'].codVehic'] = v.data.codInvoluc; }
			    						if (incidencia.idIncidencia!=null){ incidencia['vehiculos['+k+'].idIncidencia'] = incidencia.idIncidencia; }
			    						if (v.data.codClaseVehic!=null){ incidencia['vehiculos['+k+'].codClaseVehic'] = v.data.codClaseVehic; }
			    						if (v.data.claseVehic!=null){ incidencia['vehiculos['+k+'].claseVehic'] = v.data.claseVehic; }
			    						if (v.data.codMarcaVehic!=null){ incidencia['vehiculos['+k+'].codMarcaVehic'] = v.data.codMarcaVehic; }
			    						if (v.data.marcaVehic!=null){ incidencia['vehiculos['+k+'].marcaVehic'] = v.data.marcaVehic; }
			    						if (v.data.modelVehic!=null){ incidencia['vehiculos['+k+'].modelVehic'] = v.data.modelVehic; }
			    						if (v.data.placaVehic!=null){ incidencia['vehiculos['+k+'].placaVehic'] = v.data.placaVehic; }
			    						if (v.data.colorVehic!=null){ incidencia['vehiculos['+k+'].colorVehic'] = v.data.colorVehic; }
			    						if (v.data.anioVehic!=null){ incidencia['vehiculos['+k+'].anioVehic'] = v.data.anioVehic; }
			    						if (v.data.estReg!=null){ incidencia['vehiculos['+k+'].estReg'] = v.data.estReg; }
			    					});
		    					}
		    					
		    					Util.runAjax({
									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-incidencia',
									async : false,
									method : 'POST',
									params:incidencia,
									timeout:1000,
									success:function(http){
										var response = Ext.decode(http.responseText);
										thisWin.body.unmask();
										
										//desactivando caso de reach
										
										if(Ext.getCmp('idReach').getValue()!=null && Ext.getCmp('idReach').getValue()!=""){
				    						var idReachForm= Ext.getCmp('idReach').getValue();
				    						if (incidencia.codMedio==1009) {
					    						Util.runAjax({
													url:PATH_PROYECTO_BASE+'mapa-incidencia/desactivar-reach',
													params:{ cod:idReachForm },
													async : false,
													method : 'POST',
													success:function(http){
														if($("#map-canvas").length){
									    					MapaIncidencias.ajaxReach();
									    				}else{
									    					IncidenciaService.buscar2();
									    				}
													}
												});
					    					} else {
					    						
					    					}
				    					}
										
//				    					if(Ext.getCmp('codComer').getValue()!=null && Ext.getCmp('codComer').getValue()!=""){
//				    						var codComerForm= Ext.getCmp('codComer').getValue();
//				    						if (incidencia.codMedio==948) {
//					    						Util.runAjax({
//													url:PATH_PROYECTO_BASE+'mapa-incidencia/desactivar-pos',
//													params:{ cod:codComerForm },
//													async : false,
//													method : 'POST',
//													success:function(http){
//														if($("#map-canvas").length){
//									    					MapaIncidencias.ajaxPos();
//									    				}else{
//									    					IncidenciaService.buscar2();
//									    				}
//													}
//												});
//					    					}
//				    					}
				    					
				    					if(Ext.getCmp('cbxMedio').getValue()==1010 && Ext.getCmp('cbxSituacion').getValue()==870){
//				    					if(Ext.getCmp('cbxMedio').getRawValue()=="OJO VIAL" && Ext.getCmp('cbxSitucion').getRawValue()=="ATENDIDO"){
//				    						var part = Ext.getCmp('txtDescripcion').getValue();
				    						var part = incidencia.descripcion;
				    						var idOjoVial = part.split('*')[0];
				    						IncidenciaService.openFormOjoVial({
				    							title: "Actualizar internamiento vehicular",
				    							id: idOjoVial
				    						});
				    						
				    					}
//				    					if(Ext.getCmp('cbxMedio').getValue()==1010 && Ext.getCmp('cbxSituacion').getValue()==870){
//				    						console.log("SE TRATA DE UN CASO DE ATENCION OJO VIAL");
//				    						var idOjoVial = Ext.getCmp('idOjoVial').getValue();
//				    						IncidenciaService.openFormOjoVial({
//				    							title: 'Actualizar internamiento vehicular',
//				    							id: idOjoVial
//				    						});
//				    					}
				    					
										Ext.Msg.alert('Incidencia Nro.'+response.incidencia.idIncidencia, 'Registro guardado satisfactoriamente');
									
										if($("#map-canvas").length){
					    					MapaIncidencias.ajaxVoxiva(incidencia);
					    				}else{
					    					IncidenciaService.buscar2();
					    				}
//										thisWin.close();
										thisWin.destroy();
										
									}
								});
		    					
		    					
//		    					Util.runAjax({
//									url:PATH_PROYECTO_BASE+'mapa-incidencia/desactivar-reach',
//									async : false,
//									method : 'POST',
//									params:incidencia,
//									timeout:1000,
//									success:function(http){
//										var response = Ext.decode(http.responseText);
//										thisWin.body.unmask();
//										Ext.Msg.alert('Message', 'Incidencia registrada');
//										if($("#map-canvas").length){
//					    					MapaIncidencias.ajaxVoxiva(incidencia);
//					    				}else{
//					    					IncidenciaService.buscar2();
//					    				}
////										thisWin.close();
//										thisWin.destroy();
//									}
//								});
		    					
		    					
//		    					setTimeout(() => {
//									
//								}, 2000);
		    				} else {
		    					Ext.Msg.alert('Formulario incompleto','Algunos campos son obligatorios o no tienen un formato especifico', Ext.emptyFn);
		    				}
		    				
		    			}
		    		}
		    		,
		    		{
		    			text:'Cancelar',
		    			handler:function(){
//		    				Ext.getCmp(idWin+'win-form-registro').close();
		    				Ext.getCmp(idWin+'win-form-registro').destroy();
		    			}
		    		}
		    ]
	
		}).show();
		
	},
	
	
	
openFormBitacora:function(options){
	
		
		options = options || {};
		
		var txtUnidadHist = {
				xtype: 'displayfield',
				id: 'txtUnidadHist',
                width: 280,
                fieldLabel: 'Unidad',
                labelWidth: 60,
                value: 'No especificado'
			};
		
		var txtCasoHist = {
				xtype: 'displayfield',
				id: 'txtCasoHist',
                width: 280,
                fieldLabel: 'Caso',
                labelWidth: 60,
                value: 'No especificado'
			}; 
		
		var txtSubcasoHist = {
				xtype: 'displayfield',
				id: 'txtSubcasoHist',
                width: 280,
                fieldLabel: 'Subcaso',
                labelWidth: 60,
                value: 'No especificado'
			};
		
		var txtDireccionHist = {
				xtype: 'displayfield',
				id: 'txtDireccionHist',
                width: 590,
                fieldLabel: 'Dirección',
                labelWidth: 60,
                value: 'No especificado'
		};
		
		var txtRegistrante = {
				xtype: 'displayfield',
				id: 'txtRegistrante',
                width: 260,
                fieldLabel: 'Registrante',
                labelWidth: 80,
                value: 'No especificado',
                fieldStyle: 'text-transform:uppercase'
			};
		
		var txtReportante = {
				xtype: 'displayfield',
				id: 'txtReportante',
                width: 260,
                fieldLabel: 'Reportante',
                labelWidth: 80,
                value: 'No especificado'
			};
		
		var txtTelefono = {
				xtype: 'displayfield',
				id: 'txtTelefono',
                width: 260,
                fieldLabel: 'Teléfono',
                labelWidth: 80,
                value: 'No especificado'
			};
		
		var txtNotificacion = {
				xtype: 'displayfield',
//				xtype: 'datefield',
				id: 'txtNotificacion',
                width: 280,
                fieldLabel: 'Fec. Notif:',
                labelWidth: 80,
//                format: 'd/m/Y hh:mm:ss',
                value: 'No especificado',
//                hideTrigger: true
//                renderer: Ext.util.Format.dateRenderer('m/d/Y')
			};
		
		var txtEvento = {
				xtype: 'displayfield',
//				xtype: 'datefield',
				id: 'txtEvento',
                width: 280,
                fieldLabel: 'Fec. Evento:',
                labelWidth: 80,
//                format: 'd/m/Y hh:mm:ss',
                value: 'No especificado',
//                hideTrigger: true
//                renderer: Ext.util.Format.dateRenderer('m/d/Y')
			};
		
		var txtInformacionHist = {
				xtype: 'textareafield',
				id: 'txtInformacionHist',
                width: 585,
                fieldLabel: 'Información',
                labelWidth: 80,
                editable: false
		};
		
		var colIdBitacora = {
				xtype: 'numbercolumn',
				width: 0,
                hidden: true,
                dataIndex: 'idBitacora',
                text: 'Id Bitacora'
		};
		
		var colIdIncidenciaBitacora = {
				xtype: 'numbercolumn',
				width: 0,
                hidden: true,
                dataIndex: 'idIncidencia',
                text: 'Id Incidencia'
		};
		
		var colFechaHora = {
				xtype: 'datecolumn',
                width: 180,
                dataIndex: 'fecha',
                text: 'Fecha Hora'
		};
		
		var colRespuesta = {
				xtype: 'gridcolumn',
                width: 300,
                dataIndex: 'descripcion',
                text: 'Respuesta',
                variableRowHeight: true
		};
		
		var colUsuario = {
				xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'usuario',
                text: 'Usuario'
		};
		
		var colEstReg = {
				xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'estReg',
                text: 'Estado'
		};
		
		var idIncidenciaX =	{
				xtype: 'textfield',
				id: 'idIncidenciaX',
				margin: '10 0 0 0',
				width: 10,
				hidden:true,
				fieldLabel: 'id',
				labelClsExtra: '',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
	    var txtDescripcion = {
				xtype: 'textareafield',
	    		id: 'txtDescripcion',
	    		padding: '',
	    		fieldLabel: 'Respuesta',
	    		labelWidth: 60,
	    		enforceMaxLength: true,
	    		allowBlank: false,
	    		fieldStyle: 'text-transform:uppercase',
			    maxLength: 2000,
			    emptyText: 'Describa la respuesta o accion de seguimiento'
    		};

	    var fileAdjunto = {
	    		xtype: 'filefield',
                margin: '0 128 0 0',
                width: 380,
                fieldLabel: 'Adjunto:',
                labelWidth: 60,
                buttonText: 'Buscar...'
	    	};
		
		var btnRegistrar = {
	    		xtype: 'button',
                width: 80,
                text: 'Registrar',
                handler : function() {
					var form = Ext.getCmp(idWin+'formBitacora').getForm();
					if (form.isValid()) {
						var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
//						thisWin.body.mask('Espere un momento por favor.');
						
						var respuesta = new Object();

						respuesta.idIncidencia = Ext.getCmp('idIncidenciaX').getValue();
						respuesta.usuario = DES_LOGIN;
						respuesta.descripcion = Ext.getCmp('txtDescripcion').getValue();
						
						Util.runAjax({
								url : PATH_PROYECTO_BASE+ 'mapa-incidencia/actualizar-bitacora',
								async : true,
								method : 'POST',
								params : respuesta,
//								timeout : 1000,
								success : function(http) {
									var gridBitacora = Ext.getCmp('tbBitacora');
									var store = gridBitacora.store;
									store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaX').getValue()};
									//store.loadData(respuesta.idIncidencia);
									store.load();
									thisWin.body.unmask();
									Ext.Msg.alert('Message','Respuesta registrada');
								}
						});
						
						
						
//						Util.runAjax({
//								url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-bitacora-by-incidencia',
////								 url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
//								async : true,
////								async : false,
//								method : 'GET',
//								params : {
//									cod : respuesta.idIncidencia
//								},
//								timeout : 1000,
//								success : function(http) {}
//						});
						
//						var response = Ext.decode(http.responseText);
//						var gridBitacora = Ext.getCmp('tbBitacora');
//						var store = gridBitacora.store;
//						store.proxy.extraParams = Ext.getCmp('idIncidenciaX').getValue();
//						
//						console.log("Ext.getCmp('idIncidenciaX').getValue()");
//						console.log(Ext.getCmp('idIncidenciaX').getValue());
//						store.load();
						

					} else {
						Ext.Msg.alert('¡No puede registrar una respuesta vacía!', Ext.emptyFn);
					}

				}
	    	};
		// MODELS Y STORES PARA LOS GRID-PANELS
		
		var bitacoraStore = Ext.create('Ext.data.Store', {
			    autoLoad : true,
				model : 'BitacoraModel',
//				model : bitacoraModel,
				extraParams:{ cod: '-1' },
				//pageSize: 20,
				proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'mapa-incidencia/get-solo-historial-bitacora-by-incidencia',
					async: true,
//					async: false,
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true,
//					timeout:99999999
				}
			});
		
		//	COLUMNAS PARA GRID DE LA BITACORA
		
		var colIdBitacora = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'idBitacora',
                fieldStyle: 'text-transform:uppercase',
                text: 'Id'
            };
        var colIdIncidencia = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'idIncidencia',
                fieldStyle: 'text-transform:uppercase',
                text: 'N° Incid'
            };
        var colFechaBitacora = {
                xtype: 'gridcolumn',
                width: 200,
//                hidden: true,
//                dataIndex: 'strFecha',
                dataIndex: 'fecha',
                fieldStyle: 'text-transform:uppercase',
                text: 'Fecha y hora'
            };
        var colDescripcionBitacora = {
                xtype: 'gridcolumn',
                width: 600,
//                hidden: true,
                dataIndex: 'descripcion',
                fieldStyle: 'text-transform:uppercase',
                text: 'Descripción'
            };
        var colUsuarioBitacora = {
                xtype: 'gridcolumn',
                width: 180,
//                hidden: true,
                dataIndex: 'usuario',
                fieldStyle: 'text-transform:uppercase',
                text: 'Usuario'
            };
        var colEstRegBitacora = {
                xtype: 'gridcolumn',
                width: 0,
                hidden: true,
                dataIndex: 'estReg',
                fieldStyle: 'text-transform:uppercase',
                text: 'Estado'
            };
		
        
        var idWin = Ext.id();
        
		Ext.create('Ext.window.Window', {
			title: options.title,
		    modal:true,
		    closeAction: 'destroy',
		    id: idWin+'win-form-bitacora',
		    layout: 'fit',
		    bodyPadding: '0 0 0 0',
		    items: [
			    {
		            xtype: 'form',
		            region: 'center',
		            layout: 'form',
	                id: idWin+'formBitacora',
	                margin: '0 0 0 0',
	            	listeners : {
		
						afterrender : function() {
							try{
								var cod = options.codIncidencia;
								var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
								thisWin.body.mask('Obteniendo información...');
								
								Util.runAjax({
									url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-bitacora-by-incidencia',
									async : true,
//									async : false,
									method : 'GET',
									params : {
										cod : cod
									},
//									timeout : 1000,
									success : function(http) {
										try {
											var response = Ext.decode(http.responseText);
											var data = response.data;
		
											try{
												Ext.getCmp('idIncidenciaX').setValue(data.idIncidencia);
												Ext.getCmp('txtUnidadHist').setValue(data.descUnidad);
												Ext.getCmp('txtCasoHist').setValue(data.descCaso);
												Ext.getCmp('txtSubcasoHist').setValue(data.descSubcaso?data.descSubcaso:"No tiene");
												Ext.getCmp('txtRegistrante').setValue(data.usrRegistra);
												Ext.getCmp('txtReportante').setValue(data.nombReport?data.nombReport:"No especificado");
												Ext.getCmp('txtTelefono').setValue(data.telfReport!=""?data.telfReport:"No especificado");
												Ext.getCmp('txtNotificacion').setValue(Ext.Date.format(new Date(data.fecNotificacion), 'd/m/Y h:i:s A'));
												if(data.fecEvento){
													Ext.getCmp('txtEvento').setValue(Ext.Date.format(new Date(data.fecEvento), 'd/m/Y h:i:s A'));
												}else{
													Ext.getCmp('txtEvento').setValue("Desconocida");
												}
												
												Ext.getCmp('txtDireccionHist').setValue(data.descVia||' CDRA.'||data.cdra||' [AREA '||data.area||' - '||data.zona||' - '||data.subzona||']');
												Ext.getCmp('txtInformacionHist').setValue(data.descripcion?data.descripcion:"Sin información");
												Ext.getCmp('tbBitacora').store.loadData(data.bitacora);
											}catch(e){
												console.error("Exception thrown", e.stack);
											}
											
											thisWin.body.unmask();
		
										} catch (e) {
											// thisWin.close();
											thisWin.destroy();
											Ext.id();
										}
									}
								});
							}catch(e){
								console.error("Exception thrown", e.stack);
							}
						}
					},
					items: [
				        {
				            xtype: 'fieldset',
				            minHeight: 100,
				            width: 620,
				            title: 'Informacion de incidencia',
				            layout: {
				                type: 'column',
				                manageOverflow: 0
				            },
				            items: [
				                {
				                    xtype: 'container',
				                    width: 758,
				                    layout: 'column',
				                    items: [
				                        {
				                            xtype: 'container',
				                            margin: '0 20 0 0',
				                            width: 300,
				                            layout: 'column',
		//		                            fieldLabel: 'Tipificación',
		//		                            labelAlign: 'top',
				                            items: [
				                            	txtUnidadHist,
				                            	txtCasoHist,
				                            	txtSubcasoHist,
				                            	txtDireccionHist
				                            ]
				                        },
				                        {
				                            xtype: 'container',
				                            width: 280,
				                            layout: 'column',
				                            items: [
				                            	txtRegistrante,
				                            	txtReportante,
				                            	txtTelefono,
				                            	txtNotificacion,
				                            	txtEvento
				                            ]
				                        }
				                    ]
				                },
				                txtInformacionHist
				            ]
				        },
				        {
				            xtype: 'fieldset',
				            height: 275,
				            width: 620,
				            title: 'Historial de incidencia',
				            layout: {
				                type: 'anchor',
				                manageOverflow: 0
				            },
				            items: [
				                {
				                    xtype: 'gridpanel',
				                    id: 'tbBitacora',
				                    bodyBorder: true,
				                    title: '',
				                    margin: '0 10 0 0',
		//		                  	width: 900,
									height: 140,
									store: bitacoraStore,
									header: false,
									autoLoad: true,
									border: true,
									overflowX: 'scroll',
								    autoScroll: true,
								    listeners : {
                                    	cellclick : function(view, cell, cellIndex, record,row, rowIndex, e) {
                                    		Ext.Msg.alert('Descripcion de acción', Ext.getCmp('tbBitacora').getStore().getAt(rowIndex).data.descripcion, Ext.emptyFn);
                                        }
                                    },
									columns: [
										{
		//										xtype: 'numbercolumn',
												width: 0,
								                hidden: true,
								                dataIndex: 'idBitacora',
								                text: 'Id Bitacora'
										},								
										{
		//										xtype: 'numbercolumn',
												width: 0,
								                hidden: true,
								                dataIndex: 'idIncidencia',
								                text: 'Id Incidencia'
										},
										{
//												xtype: 'datecolumn',
								                width: 160,
								                dataIndex: 'fecha',
								                text: 'Fecha Hora'
										},
										{
//												xtype: 'gridcolumn',
								                width: 400,
								                dataIndex: 'descripcion',
								                text: 'Respuesta'
//								                ,variableRowHeight: true
										},
										{
		//										xtype: 'gridcolumn',
								                width: 0,
								                hidden: true,
								                dataIndex: 'usuario',
								                text: 'Usuario'
										},
										{
		//										xtype: 'gridcolumn',
								                width: 0,
								                hidden: true,
								                dataIndex: 'estReg',
								                text: 'Estado'
										}
		//								colIdBitacora,
		//		                    	colIdIncidenciaBitacora,
		//		                    	colFechaHora,
		//		                    	colRespuesta,
		//		                    	colUsuario,
		//		                    	colEstReg,
				                    ],
				                    viewConfig: {
				                        height: 140,
				                        margin : '',
		//								maxHeight : 0,
		//								minHeight : 140,
				                        stripeRows : false
				                    }
				                },
				                {
                                    xtype: 'button',
                                    id: 'btnAllHist',
//                                    margin: '0 0 0 765',
//                                    width: 100,
                                    text: 'Ver todo',
                                    handler:function(){
                                    	var fullRespuesta = "";
                                		Ext.getCmp('tbBitacora').getStore().each(function(record) {
                                            fullRespuesta = fullRespuesta + record.get("fecha") + ": " + record.get("descripcion") + '</br>';
                                            });
                                		Ext.Msg.alert('Descripcion de acción', fullRespuesta, Ext.emptyFn);
        	                    	}
                                },
			                	{
				                    xtype: 'container',
				                    layout: {
				                        type: 'vbox',
				                        align: 'stretch',
				                        padding: '10 10 0 0'
				                    },
				                    items: [
				                    	idIncidenciaX,
				                    	txtDescripcion,
				                    ]
				                }
				            ]
				        }
				    ],
					buttons : [
						{
							text : 'Grabar',
							handler : function() {
								var form = Ext.getCmp(idWin+'formBitacora').getForm();
								if (form.isValid()) {
									var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
			//						thisWin.body.mask('Espere un momento por favor.');
									
									var respuesta = new Object();
			
									respuesta.idIncidencia = Ext.getCmp('idIncidenciaX').getValue();
									respuesta.usuario = DES_LOGIN;
									respuesta.descripcion = Ext.getCmp('txtDescripcion').getValue();
									
									Util.runAjax({
											url : PATH_PROYECTO_BASE+ 'mapa-incidencia/actualizar-bitacora',
											async : true,
											method : 'POST',
											params : respuesta,
//											timeout : 1000,
											success : function(http) {
												thisWin.body.unmask();
												Ext.Msg.alert('Message','Respuesta registrada');
												IncidenciaService.updateHistorial();
												Ext.getCmp('txtDescripcion').reset();
//												Util.runAjax({
//													url : PATH_PROYECTO_BASE+ 'mapa-incidencia/set-estado-marker-respuesta',
//													async : true,
//													method : 'POST',
//													params : {idIncidencia: respuesta.idIncidencia},
//													timeout : 1000,
//													success : function(http) {
//															MapaIncidencias.refreshVoxiva();
//														}
//												});
											}
									});
									
//									var gridBitacora = Ext.getCmp('tbBitacora');
//									var store = gridBitacora.store;
//									store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaX').getValue()};
//									console.log("pide la carga del store");
//									//store.loadData(respuesta.idIncidencia);
//									store.load();
//									console.log("termina la carga del store");
									
		//							Util.runAjax({
		//									url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-bitacora-by-incidencia',
		////									 url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
		//									async : true,
		////									async : false,
		//									method : 'GET',
		//									params : {
		//										cod : respuesta.idIncidencia
		//									},
		//									timeout : 1000,
		//									success : function(http) {}
		//							});
		//							
		//							var response = Ext.decode(http.responseText);
		//							var gridBitacora = Ext.getCmp('tbBitacora');
		//							var store = gridBitacora.store;
		//							store.proxy.extraParams = Ext.getCmp('idIncidenciaX').getValue();
		//							
		//							console.log("Ext.getCmp('idIncidenciaX').getValue()");
		//							console.log(Ext.getCmp('idIncidenciaX').getValue());
		//							store.load();
									
								} else {
									Ext.Msg.alert('CAMPO OBLIGATORIO','¡No puede registrar una respuesta vacía!', Ext.emptyFn);
								}
			
							}
						},
						{
							text : 'Cerrar',
							handler : function() {
								// Ext.getCmp(idWin+'win-form-registro').close();
								Ext.getCmp(idWin+ 'win-form-bitacora').destroy();
							}
						}
			    	]
			    }
		    ]

		}).show();
		
	
},
	

	
openDetalleIncidencia:function(options){
	
		
		options = options || {};
		
		var showId = {
				xtype: 'displayfield',
				id: 'showId',
                fieldLabel: 'Id',
                value: 'No especificado'
			};
        var showMedio = {
	            xtype: 'displayfield',
	            id: 'showMedio',
	            height: 150,
	            fieldLabel: 'Medio',
	            value: 'No especificado'
	        };
        var showSituacion = {
	            xtype: 'displayfield',
	            id: 'showSituacion',
	            height: 150,
	            fieldLabel: 'Situación',
	            value: 'No especificado'
	        };
        var showUnidad = {
	            xtype: 'displayfield',
	            id: 'showUnidad',
	            fieldLabel: 'Unidad',
	            value: 'No especificado'
	        };
        var showCaso = {
	            xtype: 'displayfield',
	            id: 'showCaso',
	            fieldLabel: 'Caso',
	            value: 'No especificado'
	        };
        var showSubcaso = {
	            xtype: 'displayfield',
	            id: 'showSubcaso',
	            fieldLabel: 'Subcaso',
	            value: 'No especificado'
	        };
        var showArea = {
	            xtype: 'displayfield',
	            id: 'showArea',
	            fieldLabel: 'Area',
	            value: 'No especificado'
	        };
        var showZona = {
	            xtype: 'displayfield',
	            id: 'showZona',
	            fieldLabel: 'Zona',
	            value: 'No especificado'
	        };
        var showSubzona = {
	            xtype: 'displayfield',
	            id: 'showSubzona',
	            fieldLabel: 'Sub-zona',
	            value: 'No especificado'
	        };
        var showDireccion = {
	            xtype: 'displayfield',
	            id: 'showDireccion',
	            fieldLabel: 'Direccion:',
	            value: 'No especificado'
	        };
        var showFecha = {
	            xtype: 'displayfield',
	            id: 'showFecha',
	            fieldLabel: 'Fec.Notif',
	            value: 'No especificado'
	        };
        var showFechaEvento = {
	            xtype: 'displayfield',
	            id: 'showFechaEvento',
	            fieldLabel: 'Fec.Evento',
	            value: 'No especificado'
	        };
        var showInfo = {
	            xtype: 'textareafield',
	            id: 'showInfo',
	            fieldLabel: 'Info Adic'
	        };
		
        var idWin = Ext.id();
        
        var url ="http://digital2.miraflores.gob.pe:8180/adjuntos/mapa/no-image.png";
        
		Ext.create('Ext.window.Window', {
			title: options.title,
//		    height: 600,
		    width: 1000,
		    modal:true,
		    closeAction: 'destroy',
//		    scrollable: true,
		    id: idWin+ 'win-detalle-incidencia',
		    layout: 'fit',
		    bodyPadding: '0 0 0 0',
//		    bodyStyle:'padding:10px 10px 0px 10px;',
		    
		    items: [
		        {
		            xtype: 'container',
		            xtype: 'form',
		            region: 'center',
		            layout: {
		                type: 'hbox',
		                align: 'stretch'
		            },
		            id: idWin+'detalleIncidencia',
	                margin: '0 0 0 0',
		            listeners : {
		        		
						afterrender : function() {
							try{
								
								var data = options.incidencia;
								var dataImg = options.imagen;
								if(dataImg){
									if(dataImg[0]){
										if(dataImg[0].ruta){
											url = dataImg[0].ruta;
										}
									}
									Ext.getCmp('showImagen').setSrc(url);
								}
								
								var thisWin = Ext.getCmp(idWin+ 'win-detalle-incidencia');
								thisWin.body.mask('Obteniendo información...');
								
								if (data.idIncidencia!=null){ Ext.getCmp('showId').setValue(data.idIncidencia); }
								if (data.descMedio!=null){ Ext.getCmp('showMedio').setValue(data.descMedio); }
								if (data.descSituacion!=null){ Ext.getCmp('showSituacion').setValue(data.descSituacion); }
								if (data.descUnidad!=null){ Ext.getCmp('showUnidad').setValue(data.descUnidad); }
								if (data.descCaso!=null){ Ext.getCmp('showCaso').setValue(data.descCaso); }
								if (data.descSubcaso!=null){ Ext.getCmp('showSubcaso').setValue(data.descSubcaso); }
								if (data.area!=null){ Ext.getCmp('showArea').setValue(data.area); }
								if (data.zona!=null){ Ext.getCmp('showZona').setValue(data.zona); }
								if (data.subzona!=null){ Ext.getCmp('showSubzona').setValue(data.subzona); }
								if (data.descVia!=null){
									var direccion
									if(data.cdra){
										direccion = data.descVia+" CDRA "+data.cdra;
									}else{
										direccion = data.descVia;
									}
									
									Ext.getCmp('showDireccion').setValue(direccion);
								}
								if (data.fecNotificacion!=null){ Ext.getCmp('showFecha').setValue(Ext.Date.format(new Date(data.fecNotificacion), 'd/m/Y h:i:s A')); }
								if (data.fecEvento!=null){ 
									Ext.getCmp('showFechaEvento').setValue(Ext.Date.format(new Date(data.fecEvento), 'd/m/Y h:i:s A')); 
								}else{
									Ext.getCmp('showFechaEvento').setValue("Desconocida");
								}
								if (data.descripcion!=null){ Ext.getCmp('showInfo').setValue(data.descripcion); }
								
								// FALTA SETEAR IMAGEN EN 'showImagen'
								
        	  					thisWin.body.unmask();
							}catch(e){
								console.error("Exception thrown", e.stack);
							}
						}
					},
		            items: [
		                {
		                    xtype: 'image',
		                    id: 'showImagen',
		                    flex: 1,
		                    style : {
		                    	
		                    	width : '400px',
		                    	height : '600px',
		                    	margin : '10px'
		                    	
		                    },
//		                    width:
//		                    height: 424,
		                    //src: url
		                },
		                {
		                    xtype: 'container',
		                    height: 380,
		                    width: 317,
		                    layout: 'form',
		                    items: [
		                    	showId,
		                    	showMedio,
		                    	showSituacion,
		                    	showUnidad,
		                        showCaso,
		                        showSubcaso,
		                        showArea,
		                        showZona,
		                        showSubzona,
		                        showDireccion,
		                        showFecha,
		                        showFechaEvento,
		                        showInfo
		                    ]
		                }
		            ],
		            buttons : [
						{
							text : 'Cerrar',
							handler : function() {
								// Ext.getCmp(idWin+'win-form-registro').close();
								Ext.getCmp(idWin+ 'win-detalle-incidencia').destroy();
							}
						}
			    	]
		    
		        } 
		    ]

		}).show();
		
	},
	
//	openFormAdjunto2:function(options){
//		
//		options = options || {};
//		
//		var btnRegistrar = {
//    		xtype: 'button',
//            width: 80,
//            text: 'Registrar',
//            handler : function() {
//				var form = Ext.getCmp(idWin+'formBitacora').getForm();
//				if (form.isValid()) {
//					var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
//					
//					var respuesta = new Object();
//
//					respuesta.idIncidencia = Ext.getCmp('idIncidenciaX').getValue();
//					respuesta.usuario = DES_LOGIN;
//					respuesta.descripcion = Ext.getCmp('txtDescripcion').getValue();
//					
//					Util.runAjax({
//							url : PATH_PROYECTO_BASE+ 'mapa-incidencia/actualizar-bitacora',
//							async : true,
//							method : 'POST',
//							params : respuesta,
//							success : function(http) {
//								var gridBitacora = Ext.getCmp('tbBitacora');
//								var store = gridBitacora.store;
//								store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaX').getValue()};
//								//store.loadData(respuesta.idIncidencia);
//								store.load();
//								thisWin.body.unmask();
//								Ext.Msg.alert('Message','Respuesta registrada');
//							}
//					});
//					
//				} else {
//					Ext.Msg.alert('¡No puede registrar una respuesta vacía!', Ext.emptyFn);
//				}
//
//			}
//    	};
//	// MODELS Y STORES PARA LOS GRID-PANELS
//	
//	var bitacoraStore = Ext.create('Ext.data.Store', {
//		    autoLoad : true,
//			model : 'BitacoraModel',
//			extraParams:{ cod: '-1' },
//			//pageSize: 20,
//			proxy : {
//				type : 'ajax',
//				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-solo-historial-bitacora-by-incidencia',
//				async: true,
//				actionMethods : 'POST',
//				reader : {
//					root : 'data'
//				},
//				simpleSortMode : true,
//			}
//		});
//	
//   
//    var idWin = Ext.id();
//    
//	Ext.create('Ext.window.Window', {
//		title: options.title,
//	    modal:true,
//	    closeAction: 'destroy',
//	    id: idWin+'win-form-bitacora',
//	    layout: 'fit',
//	    bodyPadding: '0 0 0 0',
//	    items: [
//		    {
//	            xtype: 'form',
//	            region: 'center',
//	            // scrollable: true,
//	            layout: 'form',
//                id: idWin+'formBitacora',
//                margin: '0 0 0 0',
//            	listeners : {
//	
//					afterrender : function() {
//						try{
//							var cod = options.codIncidencia;
//							var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
//							thisWin.body.mask('Obteniendo información...');
//							
//							Util.runAjax({
//								url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-bitacora-by-incidencia',
//								// url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
//								async : true,
//								method : 'GET',
//								params : {
//									cod : cod
//								},
//								success : function(http) {
//									try {
//										var response = Ext.decode(http.responseText);
//										var data = response.data;
//	
//										try{
//											Ext.getCmp('idIncidenciaX').setValue(data.idIncidencia);
//											Ext.getCmp('txtUnidadHist').setValue(data.descUnidad);
//											Ext.getCmp('txtCasoHist').setValue(data.descCaso);
//											Ext.getCmp('txtSubcasoHist').setValue(data.descSubcaso?data.descSubcaso:"No tiene");
//											Ext.getCmp('txtRegistrante').setValue(data.usrRegistra);
//											Ext.getCmp('txtReportante').setValue(data.nombReport?data.nombReport:"No especificado");
//											Ext.getCmp('txtTelefono').setValue(data.telfReport!=""?data.telfReport:"No especificado");
//											Ext.getCmp('txtNotificacion').setValue(Ext.Date.format(new Date(data.fecNotificacion), 'd/m/Y h:i:s A'));
//											if(data.fecEvento){
//												Ext.getCmp('txtEvento').setValue(Ext.Date.format(new Date(data.fecEvento), 'd/m/Y h:i:s A'));
//											}else{
//												Ext.getCmp('txtEvento').setValue("Desconocida");
//											}
//											
//											Ext.getCmp('txtDireccionHist').setValue(data.descVia||' CDRA.'||data.cdra||' [AREA '||data.area||' - '||data.zona||' - '||data.subzona||']');
//											Ext.getCmp('txtInformacionHist').setValue(data.descripcion?data.descripcion:"Sin información");
//											Ext.getCmp('tbBitacora').store.loadData(data.bitacora);
//										}catch(e){
//											console.error("Exception thrown", e.stack);
//										}
//										
//										thisWin.body.unmask();
//	
//									} catch (e) {
//										// thisWin.close();
//										thisWin.destroy();
//										Ext.id();
//									}
//								}
//							});
//						}catch(e){
//							console.error("Exception thrown", e.stack);
//						}
//					}
//				},
//			
//			
//			
//			
//				items: [
//			        {
//			            xtype: 'fieldset',
//			            minHeight: 100,
//			            width: 620,
//			            title: 'Informacion de incidencia',
//			            layout: {
//			                type: 'column',
//			                manageOverflow: 0
//			            },
//			            items: [
//			                {
//			                    xtype: 'container',
//			                    width: 758,
//			                    layout: 'column',
//			                    items: [
//			                        {
//			                            xtype: 'container',
//			                            margin: '0 20 0 0',
//			                            width: 300,
//			                            layout: 'column',
//			                            items: [
//			                            	txtUnidadHist,
//			                            	txtCasoHist,
//			                            	txtSubcasoHist,
//			                            	txtDireccionHist
//			                            ]
//			                        },
//			                        {
//			                            xtype: 'container',
//			                            width: 280,
//			                            layout: 'column',
//			                            items: [
//			                            	txtRegistrante,
//			                            	txtReportante,
//			                            	txtTelefono,
//			                            	txtNotificacion,
//			                            	txtEvento
//			                            ]
//			                        }
//			                    ]
//			                },
//			                txtInformacionHist
//			            ]
//			        },
//			        {
//			            xtype: 'fieldset',
//			            height: 275,
//			            width: 620,
//			            title: 'Historial de incidencia',
//			            layout: {
//			                type: 'anchor',
//			                manageOverflow: 0
//			            },
//			            items: [
//			                {
//			                    xtype: 'gridpanel',
//			                    id: 'tbBitacora',
//			                    bodyBorder: true,
//			                    title: '',
//			                    margin: '0 10 0 0',
//								height: 140,
//								store: bitacoraStore,
//								header: false,
//								autoLoad: true,
//								border: true,
//								overflowX: 'scroll',
//							    autoScroll: true,
//							    listeners : {
//                                	cellclick : function(view, cell, cellIndex, record,row, rowIndex, e) {
//                                		Ext.Msg.alert('Descripcion de acción', Ext.getCmp('tbBitacora').getStore().getAt(rowIndex).data.descripcion, Ext.emptyFn);
//                                    }
//                                },
//								columns: [
//
//			                    ],
//			                    viewConfig: {
//			                        height: 140,
//			                        margin : '',
//			                        stripeRows : false
//			                    }
//			                },
//			                {
//                                xtype: 'button',
//                                id: 'btnAllHist',
//                                text: 'Ver todo',
//                                handler:function(){
//                                	var fullRespuesta = "";
//                            		Ext.getCmp('tbBitacora').getStore().each(function(record) {
//                                        fullRespuesta = fullRespuesta + record.get("fecha") + ": " + record.get("descripcion") + '</br>';
//                                        });
//                            		Ext.Msg.alert('Descripcion de acción', fullRespuesta, Ext.emptyFn);
//    	                    	}
//                            },
//		                	{
//			                    xtype: 'container',
//			                    layout: {
//			                        type: 'vbox',
//			                        align: 'stretch',
//			                        padding: '10 10 0 0'
//			                    },
//			                    items: [
//			                    	idIncidenciaX,
//			                    	txtDescripcion,
//			                    ]
//			                }
//			            ]
//			        }
//			    ],
//				buttons : [
//					{
//						text : 'Grabar',
//						handler : function() {
//							var form = Ext.getCmp(idWin+'formBitacora').getForm();
//							if (form.isValid()) {
//								var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
//								var respuesta = new Object();
//		
//								respuesta.idIncidencia = Ext.getCmp('idIncidenciaX').getValue();
//								respuesta.usuario = DES_LOGIN;
//								respuesta.descripcion = Ext.getCmp('txtDescripcion').getValue();
//								
//								Util.runAjax({
//										url : PATH_PROYECTO_BASE+ 'mapa-incidencia/actualizar-bitacora',
//										async : true,
//										method : 'POST',
//										params : respuesta,
//										success : function(http) {
//											thisWin.body.unmask();
//											Ext.Msg.alert('Message','Respuesta registrada');
//											IncidenciaService.updateHistorial();
//											Ext.getCmp('txtDescripcion').reset();
//										}
//								});
//								
//								
//							} else {
//								Ext.Msg.alert('CAMPO OBLIGATORIO','¡No puede registrar una respuesta vacía!', Ext.emptyFn);
//							}
//		
//						}
//					},
//					{
//						text : 'Cerrar',
//						handler : function() {
//							// Ext.getCmp(idWin+'win-form-registro').close();
//							Ext.getCmp(idWin+ 'win-adjuntos').destroy();
//						}
//					}
//		    	]
//		    }
//	    ]
//
//	}).show();
//	
//
//
//		
//	},

	openFormOjoVial:function(options){

		options = options || {};
		
		var txtId =	{
				xtype: 'textfield',
				id: 'txtId',
				margin: '10 0 0 0',
				width: 10,
//				hidden:true,
				fieldLabel: 'Id. Internamiento',
				labelClsExtra: '',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 70,
				allowBlank: false,
				editable:false
			};
		
		var codigoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"1", "name":"05-101"},
		        {"value":"2", "name":"05-102"},
		        {"value":"3", "name":"05-103"},
		        {"value":"4", "name":"05-104"},
		        {"value":"5", "name":"05-105"}
		    ]
		});

		var cbxCodigo = Ext.create('Ext.form.ComboBox', {
					    store: codigoStore,
					    queryMode: 'local',
					    id:'cbxCodigo',
//					    emptyText:'Cod. Infracción',
					    fieldLabel:'Cod. Infracción',
					    forceSelection:true,
					    labelAlign: 'left',
					    valueField: 'value',
					    displayField: 'name',
					    allowBlank: false,
					    width:240,
					    listeners:{
					    }
					});
		
		var internaStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"0", "name":"SI"},
		        {"value":"1", "name":"NO"}
		    ]
		});

		var cbxInterna = Ext.create('Ext.form.ComboBox', {
					    store: internaStore,
					    queryMode: 'local',
					    id:'cbxInterna',
					    fieldLabel:'¿Con internamiento?',
//					    emptyText:'¿Internamiento?',
					    forceSelection:true,
					    labelAlign: 'left',
					    valueField: 'value',
					    displayField: 'name',
					    width:240,
					    allowBlank: false,
					    listeners:{
					    }
					}); 
		
		var estadoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"A", "name":"ACEPTADO"},
		        {"value":"R", "name":"RECHAZADO"}
		    ]
		});

		var cbxEstadoInter = Ext.create('Ext.form.ComboBox', {
					    store: estadoStore,
					    queryMode: 'local',
					    id:'cbxEstadoInter',
//					    emptyText:'Estado',
					    fieldLabel:'Estado',
					    forceSelection:true,
					    labelAlign: 'left',
					    valueField: 'value',
					    displayField: 'name',
					    allowBlank: false,
					    width:240,
					    listeners:{
					    }
					}); 
		    
		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    maxHeight: 600,
//		    minHeight: 280,
		    width: 360,
		    minHeigth: 40,
		    modal:true,
//		    overflowY: 'scroll',
		    id: 'wOjoVial',
		    itemId: 'wOjoVial',
		    layout: 'fit',
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
//		    afterrender: function(){
////            	var data = options.dataset;
////				var thisWin = Ext.getCmp('wOjoVial');
//            	console.log("SETANDO ID INTERNAMIENTO DESPUES DE RENDERIZAR formOjoVial");
//				Ext.getCmp('txtId').setValue(options.id);
//			},
		    items: [
				{
		            xtype: 'form',
		            id: 'formOjoVial',
//		            region: 'center',
//		            scrollable: true,
		            layout: 'form',
//		            width: 180,
//		            bodyPadding: 10,
//				 	manageHeight: false,
//				 	title: 'INVOLUCRADO',
		            
		            
		            
	            	listeners:{
	            		afterrender: function(){
	//		            	var data = options.dataset;
	//						var thisWin = Ext.getCmp('wOjoVial');
			            	Ext.getCmp('txtId').setValue(options.id);
		            	}
					},
		            items: [
		            	txtId,
		            	cbxCodigo,
		            	cbxInterna,
		            	cbxEstadoInter
		            ],
		        }
			],
			buttons:[
	    		{
	    			text:'Aceptar',
	    			handler:function(){
	    				var form = Ext.getCmp('formOjoVial').getForm();
	    				if(form.isValid()){
	    					var id = Ext.getCmp('txtId').getValue();
	    					var codigo = Ext.getCmp('cbxCodigo').getRawValue();
	    					var interna = Ext.getCmp('cbxInterna').getValue();
	    					var estado = Ext.getCmp('cbxEstadoInter').getValue();
	    					var cadena = id+"_"+codigo+"_"+interna+"_"+estado;
	    					console.log("cadena= "+cadena);
	    					Util.runAjax({
//	    						url:'http://172.16.10.150:8087/miraflores/envio-mapa-atencion.muni',	//PARA PRUEBAS
//	    						url:'http://200.48.5.166:8085/miraflores/envio-mapa-atencion.muni',
	    						url:'https://digital.miraflores.gob.pe:8443/miraflores/envio-mapa-atencion.muni',	
								async : true,
								method : 'POST',
								params:{cadena: cadena},
		    					success:function(http){ 
		    						Ext.getCmp('wOjoVial').close();
				    				Ext.id();
								},
								failure:function(){
									Ext.Msg.alert('Ocurrió un error inesperado', Ext.emptyFn);
								}
							});
	    				} else {
	    					Ext.Msg.alert('Formulario incompleto','Todos los campos son obligatorios \no la incidencia no trae el Id de internamiento', Ext.emptyFn);
	    				}
	    			}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp('wOjoVial').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	openFormAdjunto:function(options){

		options = options || {};
		
		var hiddenIncidencia = {
   			   	xtype : 'textfield',
			   	id:'idIncidenciaHidden',
			   	name : 'idIncidencia',
			//	   	allowBlank:false,
			   	hidden: true,
			   	editable: false
		   };
	    
//		var tpoImgStore = Ext.create('Ext.data.Store', {
//			    fields: ['name', 'value'],
//			    data : [
//			        {"value":1013, "name":"IMAGEN"},
//			        {"value":1014, "name":"AUDIO"},
//			        {"value":1015, "name":"VIDEO"}
//			    ]
//			});
//		
//		var txtTitulo = {
//			   	xtype : 'textfield',
//			   	margin: '5 5 0 5',
//			   	id:'txtTitulo',
//			   	fieldLabel: 'Título',
//			   	name : 'titulo',
//			   	labelWidth: 70,
//			   	maxLength: 40,
//			   	enforceMaxLength: true,
//			   	width: 295,
//		   };
//
//		var cbxTpoImg = {
//				xtype: 'ComboGeneric',
//				root:'data',
//				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=1012',
//			    valueField: 'codTipo',
//			    displayField: 'descTipo',
//			    autoLoad:true,
//			    model:'maestroTipoModel',
//				queryMode: 'local',
//				id:'cbxTpoImg',
//			    forceSelection:true,
//				fieldLabel: 'Tpo Adjunto',
//				width: 150,
//			    labelWidth: 70,
//			    margin: '5 5 0 5',
//			    allowBlank:false,
//			    name:'tpoImg',
//			    listeners:{
//			    }
//			};
//		
//		var cbxTpoExpo = {
//				xtype: 'ComboGeneric',
//				root:'data',
//				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=1018',
//			    valueField: 'codTipo',
//			    displayField: 'descTipo',
//			    autoLoad:true,
//			    model:'maestroTipoModel',
//				queryMode: 'local',
//				id:'cbxTpoExpo',
//			    forceSelection:true,
//				fieldLabel: 'Categoría',
//				width: 150,
//			    labelWidth: 50,
//			    margin: '5 0 0 5',
//			    allowBlank:false,
//			    name:'tpoExpo',
//			    listeners:{
//			    }
//			};
//
//		
//		var txDescInfo = {
//			   	xtype : 'textareafield',
//			   	id:'txDescInfo',
//			   	margin: '5 5 0 5',
//			   	fieldLabel: 'Descripción',
//			   	name : 'descripcion',
//			   	labelWidth: 70,
//			   	maxLength: 70,
//			   	enforceMaxLength: true,
//			   	width: 640,
//		   };
//		
//	    var uploadImagen = {
//	    		xtype: 'filefield',
//	    		margin: '5 5 5 5',
//                id: 'imagen',
//                width: 435,
//                name : 'adjunto',
//                fieldLabel: 'Adjunto:',
//                labelWidth: 70,
//                buttonText: 'Buscar...',
//                listeners:{ 
//                	change:function( thiss, value, eOpts ){ 
//	                	if (Ext.getCmp('idIncidencia').getValue()!=null){
//	                		Ext.getCmp('idIncidenciaHidden').setValue(Ext.getCmp('idIncidencia').getValue());
//	                	}
//	                } 
//                }
//	    	};
//		
//	    var btnSubir = {
//	    		xtype: 'button',
//	    		id: 'btnSubir',
//	    		margin: '5 5 5 5',
//	    		text: 'Cargar',
//	    		width: 60,
//	    		handler: function(){
//	    			IncidenciaService.openFormAdjuntoDetalle({
//	    				titulo: 'Adjuntar nuevo'
//	    			})
//	    		}
////	    		handler: function(){
////	    			var form = Ext.getCmp('formImage').getForm();
////	    			
////				   	if(form.isValid()){
////				   		
////					   	form.submit({ 
////						   	url: PATH_PROYECTO_BASE+'mapa-incidencia/registrar-imagen',  
////						   	waitMsg: 'Cargando imagen...', 
////						   	success: function(fp, o){
////							   	var gridAdjuntos = Ext.getCmp('tbAdjuntos');
////								var store = gridAdjuntos.store;
////								store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaHidden').getValue()};
////								store.load();
//////								thisWin.body.unmask();
////								Ext.getCmp('txtTitulo').reset();
////								Ext.getCmp('txDescInfo').reset();
////								Ext.getCmp('cbxTpoImg').reset();
////								Ext.getCmp('cbxTpoExpo').reset();
////								Ext.Msg.alert('Respuesta','Archivo cargado correctamente');
////						   	}, 
////						   	failure : function() { 
////						   		Ext.Msg.alert('ERROR', 'Error al subir la imagen');
////						   	}
////					   	}); 
////				   	
////				   	} else {
////				            Ext.Msg.alert('ERROR', 'Antes de subir la imagen, tiene que grabar el registro de incidencia');
////				   	}
////
////	    		}
//		   };	

	    var adjuntoStore = Ext.create('Ext.data.Store', {
		    autoLoad : true,
			model : 'AdjuntoModel',
			extraParams:{ cod: '-1' },
			//pageSize: 20,
			proxy : {
				type : 'ajax',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/get-list-adjuntos-by-incidencia',
				async: true,
				actionMethods : 'POST',
				reader : {
					root : 'data'
				},
				simpleSortMode : true,
			}
		});
	    
	    var html = '';
        var idWin = Ext.id();

		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    maxHeight: 600,
//		    height: 280,
//		    width: 680,
		    modal:true,
//		    overflowY: 'scroll',
		    id: idWin+'win-adjunto',
		    itemId: 'win-adjunto',
//		    layout: 'column',
//		    layout: 'fit',
		    layout: {
		        type: 'hbox',
		        align: 'stretch'
		    },
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
		    listeners:{
    			afterrender:function(){
    				
//					if(options.id!=null){
//						Ext.getCmp('idIncidenciaHidden').setValue(options.id);
//					}
    					console.log("options");
    					console.log(options);
    					
						var cod = options.id;
						var thisWin = Ext.getCmp(idWin+'win-adjuntos');
//						thisWin.body.mask('Consultando adjuntos...');
						Ext.getCmp('idIncidenciaHidden').setValue(cod);
						
						var store = Ext.getCmp('tbAdjuntos').store;
						store.proxy.extraParams = {cod: cod};
						store.load();
						
//						Util.runAjax({
////							url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-list-adjuntos-by-incidencia',
//							 url:PATH_PROYECTO_BASE+'mapa-incidencia/voxiva-list-exposicion',
//							async : true,
//							method : 'GET',
//							params : {
////								cod : cod
//								idIncidencia:cod
//							},
//							success : function(http) {
//								try {
//									var response = Ext.decode(http.responseText);
//									var data = response.data;
//									console.log
//									
//									try{
//										Ext.getCmp('tbAdjuntos').store.loadData(data[0].listaImagen);
//									}catch(e){
//										console.error("Exception thrown", e.stack);
//									}
//									thisWin.body.unmask();
//								} catch (e) {
//									// thisWin.close();
////									console.error("Exception thrown", e.stack);
////									thisWin.destroy();
//									Ext.id();
//								}
//							}
//						});
				
				}
		    },
			items: [
				
				{
                    xtype: 'fieldcontainer',
                    id: 'pnAdjuntos',
                    margin: '5 5 5 5',
                    width: 450,
                    heigth: 300,
//                    hidden: true,
                    fieldLabel: 'Lista de adjuntos',
                    labelAlign: 'top',
                    items: [
                    	{
                    		xtype: 'gridpanel',
		                    id: 'tbAdjuntos',
		                    bodyBorder: true,
//		                    margin: '0 10 0 0',
//							height: 280,
							store: adjuntoStore,
							header: false,
							autoLoad: true,
							border: true,
							autoScroll: true,
						    overflowX: 'scroll',
						    listeners : {
                            	cellclick: function(view, cell, cellIndex, record,row, rowIndex, e) {
//                            		Ext.Msg.alert('Descripcion de acción', Ext.getCmp('tbAdjuntos').getStore().getAt(rowIndex).data.r, Ext.emptyFn);
                            		var pathImg = Ext.getCmp('tbAdjuntos').getStore().getAt(rowIndex).data.ruta;
                            		var tipo = Ext.getCmp('tbAdjuntos').getStore().getAt(rowIndex).data.tpoImg;
                            		if(tipo==1013){
            							html = '<div><center><img src="'+pathImg+'" width="100%" heigth="100%"></center></div>';
            						}else if(tipo==1015){
            							html =	'<div>'+
            									'	<center>'+
            									'		<video width="100%" heigth="100%" controls="controls" preload="metadata" onclick="this.paused ? this.play() : this.pause();">'+
            									'  			<source src="'+pathImg+'"#t=0.2 type="video/mp4">'+				    			 
            									'			Your browser does not support the video tag.'+
            									'		</video>'+
            									'	</center>'+
            									'</div>';
            						}
            						
            						Ext.getCmp('pnMiniatura').setHtml(html);
                                }
                            },
							columns: [
								{ xtype: 'gridcolumn', width: 40, dataIndex: 'idImg', text: 'Id' },								
//								{ xtype: 'gridcolumn', width: 40, dataIndex: 'idIncidencia', text: 'Id Incidencia' },
//								{ xtype: 'gridcolumn', width: 100, dataIndex: 'nombre', text: 'Nombre original' },
//								{ xtype: 'gridcolumn', width: 100, dataIndex: 'ruta', text: 'Ubicacion' },
//								{ xtype: 'gridcolumn', width: 160, dataIndex: 'archivo', text: 'Archivo' },
								{ xtype: 'gridcolumn', width: 160, dataIndex: 'titulo', text: 'Título de adjunto' },
//								{ xtype: 'gridcolumn', width: 200, dataIndex: 'descripcion', text: 'Descripción' },
//								{ xtype: 'gridcolumn', width: 80, dataIndex: 'tpoImg', text: 'Tpo Adjunto' },
								{ xtype: 'gridcolumn', width: 80, dataIndex: 'descTpoImg', text: 'Tpo Adjunto' },
								{ xtype: 'gridcolumn', width: 100, dataIndex: 'descTpoExpo', text: 'Categoría' },
								{ 
									xtype:'actioncolumn', 
									width:30,
//								    align:'center',
//						            locked: true,
//						            lockable: true,
						            items: [{
						                icon: PATH_PROYECTO_BASE+'images/edit_16.png',
						                tooltip: 'Editar',
						                handler: function(grid, rowIndex, colIndex) {
						                	var record = grid.getStore().getAt(rowIndex);
					                		IncidenciaService.openFormAdjuntoDetalle({
							           			title:'Editar adjunto', 
							           			adjunto: record.data
							           		});
						                }
						            }]
						        },
								{
                                    xtype:'actioncolumn', 
                                    width:30,
                                    tdCls:'delete',
                                    items: [{
                                    	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
                                    	tooltip: 'Eliminar',
                                        handler: function(grid, rowIndex, colIndex) {
                                            var rec = grid.getStore().getAt(rowIndex);
                                            Ext.Msg.confirm('Confirmar', '¿Está seguro de eliminar el adjunto seleccionado?', function(btn, text){
											    if (btn == 'yes'){
											    	var idImg = rec.data.idImg;
											    	var idIncidencia = rec.data.idIncidencia;
											    	Util.runAjax({
														url:PATH_PROYECTO_BASE+'mapa-incidencia/delete-adjunto',
														async : true,
														method : 'POST',
//														params : rec.data,
														params : {
															idImg: idImg,
															idIncidencia: idIncidencia
														},
														success : function(http) {
															grid.getStore().remove(rec);
														}
													});
											    }
											});
                                        }
                                    }]
                                }
		                    ],
		                    viewConfig: {
		                        height: 140,
		                        margin : '',
//								maxHeight : 0,
//								minHeight : 140,
		                        stripeRows : false
		                    }
		                }
                    ]
            	},
		        {
		            xtype: 'panel',
		            id: 'pnMiniatura',
		            flex: 1,
		            width: 300,
		            heigth: 200,
//		            bodyPadding: 10,
		            html: html,
	                layout:{
	                	type: 'vbox',
		                align: 'center',
	                	pack: 'center'
	                },
	                autoLoad: true, 
	                bodyStyle:{"background-color":"black"}, 
	                listeners :{
	                	
	                }
		        },
		        hiddenIncidencia
		        
//		        {
//            		xtype: 'form',
//            		id: 'formImage',
////                	width: 310,
//                	layout: 'column',
////                	layout: 'form',
////                	hidden: true,
//                    items: [
//                    	
//                    	hiddenIncidencia,
////                    	txtTitulo,
////                    	cbxTpoImg,
////                    	cbxTpoExpo,
////                    	txDescInfo,
////                    	uploadImagen,
//////                    	btnSubir
//                    ]
//            	}
			]
			,
			buttons:[
				{
					text:'Nuevo',
		    		handler: function(){
		    			var idIncidencia = Ext.getCmp('idIncidenciaHidden').getValue();
		    			IncidenciaService.openFormAdjuntoDetalle({
		    				title: 'Adjuntar nuevo',
		    				adjunto:{ idIncidencia: idIncidencia }
		    			})
		    		}
				},
	    		{
	    			text:'Cerrar',
	    			handler:function(){
	    				Ext.getCmp(idWin+'win-adjunto').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	
	openFormAdjuntoDetalle:function(options){

		options = options || {};
		
		console.log("options");
		console.log(options);
		
		var txtIdImg = {
   			   	xtype : 'textfield',
			   	id:'txtIdImg',
			   	name : 'idImg',
			//	   	allowBlank:false,
			   	hidden: true,
			   	editable: false
		   };
		
		var txtIdIncidenciaImg = {
   			   	xtype : 'textfield',
			   	id:'txtIdIncidenciaImg',
			   	name : 'idIncidencia',
			//	   	allowBlank:false,
			   	hidden: true,
			   	editable: false
		   };
	    
		var txtTitulo = {
			   	xtype : 'textfield',
			   	margin: '5 5 0 5',
			   	id:'txtTitulo',
			   	fieldLabel: 'Título',
			   	name : 'titulo',
			   	labelWidth: 70,
			   	maxLength: 40,
			   	enforceMaxLength: true,
			   	width: 295,
		   };
		
		var txDescInfo = {
			   	xtype : 'textareafield',
			   	id:'txDescInfo',
			   	margin: '5 5 0 5',
			   	fieldLabel: 'Descripción',
			   	name : 'descripcion',
			   	labelWidth: 70,
			   	maxLength: 70,
			   	enforceMaxLength: true,
			   	width: 640,
		   };
		
	    var cbxTpoImg = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=1012',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'maestroTipoModel',
				queryMode: 'local',
				id:'cbxTpoImg',
			    forceSelection:true,
				fieldLabel: 'Tpo Adjunto',
				width: 150,
			    labelWidth: 70,
			    margin: '5 5 0 5',
			    allowBlank:false,
			    name:'tpoImg',
			    listeners:{
			    	
			    }
			};
		
		var cbxTpoExpo = {
				xtype: 'ComboGeneric',
				root:'data',
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-tipo-por-padre?cod=1018',
			    valueField: 'codTipo',
			    displayField: 'descTipo',
			    autoLoad:true,
			    model:'maestroTipoModel',
				queryMode: 'local',
				id:'cbxTpoExpo',
			    forceSelection:true,
				fieldLabel: 'Categoría',
				width: 150,
			    labelWidth: 50,
			    margin: '5 0 0 5',
			    allowBlank:false,
			    name:'tpoExpo',
			    listeners:{
			    	
			    }
			};

		var uploadImagen = {
	    		xtype: 'filefield',
	    		margin: '5 5 5 5',
                id: 'pathAdjunto',
                width: 435,
                name : 'adjunto',
                fieldLabel: 'Adjunto:',
                labelWidth: 70,
                buttonText: 'Buscar...',
                listeners:{ 
                	
                }
	    	};
	    
		var html = '';
        var idWin = Ext.id();

		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    maxHeight: 600,
		    minHeight: 100,
		    minWidth: 340,
//		    heigth: 280,
		    modal:true,
//		    overflowY: 'scroll',
		    id: idWin+'win-adjunto-detalle',
		    itemId: 'win-adjunto-detalle',
//		    layout: 'column',
//		    layout: 'fit',
		    layout: {
		        type: 'hbox',
		        align: 'stretch'
		    },
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
		    listeners:{
    			afterrender:function(){
    				
					if(options.adjunto!=null){
						
						console.log("options");
						console.log(options);
						
//						console.log("Ext.getCmp('cbxTpoExpo')");
//						console.log(Ext.getCmp('cbxTpoExpo').store.data.items);
//						
////						console.log("Ext.getCmp('cbxTpoExpo').store.getById(1025)");
////						console.log(Ext.getCmp('cbxTpoExpo').store.getById(0));
////						 .removeAt(index)
////						Ext.getCmp('cbxTpoExpo').store.remove(Ext.getCmp('cbxTpoExpo').store.data.items[0]);
////						Ext.getCmp('cbxTpoExpo').store.remove(Ext.getCmp('cbxTpoExpo').store.getById('extModel576-1'));
////						Ext.getCmp('cbxTpoExpo').getStore().removeAt(1);
////						
////						var index = Ext.StoreMgr.lookup("cbxTpoExpo").findExact('id',1026);
////						var rec = Ext.StoreMgr.lookup("cbxTpoExpo").getAt(index);
////						Ext.getCmp('cbxTpoExpo').getStore().removeAt(index);
////						
//						Ext.getCmp('cbxTpoExpo').store.remove(Ext.getCmp('cbxTpoExpo').store.first());
						
						var adj = options.adjunto;
						if(adj.idImg){ 
							Ext.getCmp('txtIdImg').setValue(adj.idImg); 
						}else{
							Ext.getCmp('pnMiniatura1').setHidden(true);
							Ext.getCmp('cbxTpoExpo').setValue(1025);
						}
						if(adj.idIncidencia!=null){
							Ext.getCmp('txtIdIncidenciaImg').setValue(adj.idIncidencia); 
//							Ext.getCmp('cbxTpoImg').allowBlank = true;
						}
						if(adj.titulo){ Ext.getCmp('txtTitulo').setValue(adj.titulo); }
						if(adj.descripcion){ Ext.getCmp('txDescInfo').setValue(adj.descripcion); }
						if(adj.tpoImg){
							Ext.getCmp('cbxTpoImg').setValue(adj.tpoImg);
							Ext.getCmp('cbxTpoImg').disable();
							Ext.getCmp('cbxTpoImg').setHidden(true);
						}
						if(adj.tpoExpo){ Ext.getCmp('cbxTpoExpo').setValue(adj.tpoExpo); }
						if(adj.ruta){ 
//							Ext.getCmp('pathAdjunto').setValue(adj.ruta);
							Ext.getCmp('pathAdjunto').disable();
							Ext.getCmp('pathAdjunto').setHidden(true);
						}
						
						if(adj.tpoImg==1013){
							html = '<div><center><img src="'+adj.ruta+'" width="90%" heigth="50%"></center></div>';
						}else if(adj.tpoImg==1015){
							html =	'<div>'+
									'	<center>'+
									'		<video width="95%" heigth="90%" controls="controls" preload="metadata" onclick="this.paused ? this.play() : this.pause();">'+
									'  			<source src="'+adj.ruta+'"#t=0.2 type="video/mp4">'+				    			 
									'			Your browser does not support the video tag.'+
									'		</video>'+
									'	</center>'+
									'</div>';
						}
						
						Ext.getCmp('pnMiniatura1').setHtml(html);	
						
					} else {
						
					}
					
				}
		    },
			items: [
				{
		            xtype: 'form',
		            width: 340,
		            layout: 'form',
		            id: 'formAdjunto',
		            bodyPadding: 10,
		            title: '',
		            items: [
		            	txtIdImg,
		        		txtIdIncidenciaImg,
		            	txtTitulo,
		            	txDescInfo,
		            	cbxTpoImg,
		            	cbxTpoExpo,
		            	uploadImagen,
		            ]
		        },
		        {
		            xtype: 'panel',
		            id: 'pnMiniatura1',
		            flex: 1,
		            width: 280,
//		            scrollable: true,
//		            ov	erflowY: 'scroll',
//		            bodyPadding: 10,
		            html: 	html,
	                layout:{
	                	type: 'vbox',
		                align: 'center',
	                	pack: 'center'
	                },
	                autoLoad: true, 
	                bodyStyle:{"background-color":"black"}, 
	                listeners :{
	                	
	                }
		        }
			]
			,
			buttons:[
				{
	    			text:'Grabar',
	    			handler:function(){
	    				
	    			},
		    		handler: function(){ 
		    			var form = Ext.getCmp('formAdjunto').getForm();
		    			
//		    			debugger;
		    			
					   	if(form.isValid()){
					   		
					   		var idImg = Ext.getCmp('txtIdImg').getValue();
					   		if(idImg && idImg!=null){
					   			
					   			var img ={}
					   			img.idImg = idImg;
					   			img.idIncidencia = Ext.getCmp('txtIdIncidenciaImg').getValue();
					   			img.titulo = Ext.getCmp('txtTitulo').getValue();
					   			img.descripcion = Ext.getCmp('txDescInfo').getValue();
					   			img.tpoExpo = Ext.getCmp('cbxTpoExpo').getValue();
					   			
					   			console.log("img");
					   			console.log(img);
					   			Util.runAjax({
									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-imagen',
									async : false,
									method : 'GET',
									params:img,
									timeout:1000,
									success:function(http){
										var gridAdjuntos = Ext.getCmp('tbAdjuntos');
										var store = gridAdjuntos.store;
										store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaHidden').getValue()};
										store.load();
		//								thisWin.body.unmask();
										Ext.getCmp(idWin+'win-adjunto-detalle').close();
					    				Ext.id();
										Ext.Msg.alert('OK','Archivo actualizado correctamente');
								   	}, 
								   	failure : function() { 
								   		Ext.Msg.alert('ERROR', 'Hubo un problema al actualizar adjunto');
								   	}
					   			});
					   			
//					   			$.ajax({ 
//								   	url: PATH_PROYECTO_BASE+'mapa-incidencia/registrar-imagen',  
//								   	waitMsg: 'Cargando imagen...', 
//								   	data:{img:img},
//								   	async : false,
//									method : 'GET',
//									dataType: "json",
//								   	success: function(fp, o){
//									   	var gridAdjuntos = Ext.getCmp('tbAdjuntos');
//										var store = gridAdjuntos.store;
//										store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaHidden').getValue()};
//										store.load();
//		//								thisWin.body.unmask();
//										Ext.getCmp(idWin+'win-adjunto-detalle').close();
//					    				Ext.id();
//										Ext.Msg.alert('OK','Archivo actualizado correctamente');
//								   	}, 
//								   	failure : function() { 
//								   		Ext.Msg.alert('ERROR', 'Hubo un problema al actualizar adjunto');
//								   	}
//							   	});
					   		}else{
					   			var pattern,tpoOk;
					   			switch(parseInt(Ext.getCmp('cbxTpoImg').getValue())){
						   			case 1013: pattern = /.?(png|jpg|svg|gif)$/i; break;
						   			case 1014: pattern = /.?(mp3)$/i; break;
						   			case 1015: pattern = /.?(mp4|webm)$/i; break;
						   			default: pattern = /^.?(xxxx)$/i; break;
					   			}
						   		if(parseInt(Ext.getCmp('cbxTpoExpo').getValue())==1026){
						   			tpoOk = Ext.getCmp('cbxTpoImg').getValue()!=1013?false:true;
					   			}else{
					   				tpoOk = true;
					   			}
					   			
					   			if(Ext.getCmp('pathAdjunto').getValue().match(pattern)){
					   				if(tpoOk){
					   					form.submit({ 
										   	url: PATH_PROYECTO_BASE+'mapa-incidencia/registrar-imagen',  
										   	waitMsg: 'Cargando imagen...', 
										   	success: function(fp, o){
											   	var gridAdjuntos = Ext.getCmp('tbAdjuntos');
												var store = gridAdjuntos.store;
												store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaHidden').getValue()};
												store.load();
												Ext.getCmp(idWin+'win-adjunto-detalle').close();
							    				Ext.id();
												Ext.Msg.alert('OK','Archivo cargado correctamente');
										   	}, 
										   	failure : function() { 
										   		Ext.Msg.alert('ERROR', 'Hubo un problema al subir el adjunto');
										   	}
									   	});
					   				}else{
					   					Ext.Msg.alert('Tipo de adjunto no permitido', 'Los Partes deben ser sólo imagenes.<br>Tipo de adjunto: IMAGEN');
					   				}
					   				
					   			}else{
					   				Ext.Msg.alert('Conflicto de formato', 'El archivo no corresponde al tipo de adjunto seleccionado.<br>'+
					   														'Los formatos permitidos son:<br>'+
					   														'<div style="padding-left:60px;">'+
					   														'	Imagen: png,jpg,svg,gif<br>'+
//					   														'	Audio: mp3<br>'+
					   														'	Video: mp4,webm'+
					   														'</div>');
					   			}
					   			
					   		}
						   	 
					   	
					   	} else {
					            Ext.Msg.alert('Campos obligatorios', 'Existen campos obligatorios');
					   	}
					   	
		    		}
	    		},
	    		{
	    			text:'Cancelar',
	    			handler:function(){
	    				Ext.getCmp(idWin+'win-adjunto-detalle').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	
		
	},
	
	openFormExposicion:function(options){

		options = options || {};
		
		var idIncidenciaAux = {
   			   	xtype : 'textfield',
			   	id:'idIncidenciaAux',
			   	name : 'idIncidenciaAux',
			//	   	allowBlank:false,
			   	hidden: true,
			   	editable: false
		   };
		
	    var htmlSlider = '';
	    
		var pnSlider = {
                xtype: 'panel',
                height: 640,
                width: 800,
                title: '',
                id: 'pnSlider',
                html: 	htmlSlider,
                layout:{
                	type: 'vbox',
	                align: 'center',
                	pack: 'center'
                },
                autoLoad: true, 
                bodyStyle:{"background-color":"black"}, 
                listeners :{
                	
                }
            };
		
		
		var idWin = Ext.id();

		
		Ext.create('Ext.window.Window', {
		    title: options.title,
//		    maxHeight: 600,
		    minHeight: 100,
		    minWidth: 320,
//		    heigth: 280,
		    modal:true,
//		    overflowY: 'scroll',
		    id: idWin+'wExposicion',
		    itemId: 'wExposicion',
//		    layout: 'column',
		    layout: 'fit',
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
		    listeners:{
    			afterrender:function(){
    				console.log("options.incidencia");
    				console.log(options.incidencia);
    				incidenciaExpo = options.incidencia;
    				
    				Ext.getCmp('idIncidenciaAux').setValue(incidenciaExpo.idIncidencia);
    				
    				var listaImagen=incidenciaExpo.listaImagen;
		    		var htmlImagen="";
		    		var htmlSlide="";
		    		var dataImagenGaleria="";
		    		
		    		if(listaImagen && listaImagen.length>0){
		    			$.each(listaImagen, function( index, value ) {	
				    			var activo="";
				    			if(index==0){
				    				activo="active";
				    			}
				    			if(value.tpoImg==1013){
				    				htmlImagen+=	'   <div class="item '+activo+'" >'+
													'   	<div><center><img src="'+value.ruta+'" width="80%" heigth="100%"></center></div><br/>'+
													'		<div style="width:100%;align:center;font-family:Verdana;color:#ffffff;font-size:20px;margin-bottom:5px;">'+
													'			<b>'+value.titulo+'</b></div>' +
													'   	<div style="color:#ffffff;font-size:18px;">'+
																value.descripcion+
													'		</div>'+
													'   </div>';
						    		htmlSlide+='	<li data-target="#myCarousel" data-slide-to="'+index+'" class="'+activo+'"></li>';
				    			} else if(value.tpoImg==1015){
				    				htmlImagen+=	'   <div class="item '+activo+'" >'+								
													'   	<div><center>'+
													'			<video width="90%" heigth="100%" controls loop controls="controls" preload="metadata" onclick="this.paused ? this.play() : this.pause();">'+
													'  				<source src="'+value.ruta+'"#t=0.2 type="video/mp4">'+				    			 
													'				Your browser does not support the video tag.'+
													'			</video>'+
													'		</center></div><br/>'+
													'		<div style="width:100%;align:center;font-family:Verdana;color:#ffffff;font-size:20px;margin-bottom:5px;">'+
													'			<b>'+value.titulo+'</b></div>' +
													'   	<div style="color:#ffffff;font-size:18px;">'+
																value.descripcion+
													'		</div>'+
													'   </div>';
				    				htmlSlide+=	'	<li data-target="#myCarousel" data-slide-to="'+index+'"  class="'+activo+'"></li>';
				    			}
				    			
		    			});
		    			
			    		var dataImagenGaleria=	
			    								'<div id="myCarousel" class="carousel slide" data-interval="false">'+
												'	<ol class="carousel-indicators">'+
												  		htmlSlide+
												'  	</ol>'+
												'  	<div class="carousel-inner">'+
														htmlImagen +
												'  </div>'+
												'  <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="width: 30px;">'+
												'    <span class="glyphicon glyphicon-chevron-left"></span>'+
												'    <span class="sr-only">Previous</span>'+
												'  </a>'+
												'  <a class="right carousel-control" href="#myCarousel" data-slide="next" style="width: 30px;">'+
												'    <span class="glyphicon glyphicon-chevron-right"></span>'+
												'    <span class="sr-only">Next</span>'+
												'  </a>'+
												'</div>'
			    		
			    		}
			    		
		    			htmlSlider = 
		    						'<div class="slides-table" style="float:center; width:800px;">'+
									'<div class="slides-container" style="float:center; width:800px; heigth=640px">'+
										dataImagenGaleria+
									'</div>'+
									'</div>'+
									'</div>'
						Ext.getCmp('pnSlider').setHtml(htmlSlider);				
		    			Ext.getCmp('pnSlider').updateLayout();

    			}
		    },
		    items: [
		    	idIncidenciaAux,
		    	{
		            xtype: 'container',
		            layout: {
		                type: 'hbox',
		                align: 'stretch'
		            },
		            items: [
		            	pnSlider,
		            ]
		        }
		    ],
			buttons:[
				{
					text: 'Despliegue de fuerzas',
//					iconCls: 'btnMap16',
					handler:function(){
						var id = Ext.getCmp('idIncidenciaAux').getValue();
	                	IncidenciaService.openSimulacion({
	                		title:'Despliegue de fuerzas',
	                		id: id,
	                		minuto: "0",
	                		
	                	})
	            	}
				},
	    		{
	    			text:'Cerrar',
	    			handler:function(){
	    				Ext.getCmp(idWin+'wExposicion').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},

	
	
inicializaMapaInterno:function(id){
		
		var i = incidenciaExpo;
		var markerExpo;
		
		MapaIncidencias.mapPlayer = new google.maps.Map(document.getElementById('mapPlayerCanvasInterno'), {
			zoom: 18,
			center: new google.maps.LatLng(parseFloat(i.coordenadas.split(' ')[0]), parseFloat(i.coordenadas.split(' ')[1])),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		});
		
		markerExpo = new google.maps.Marker({
    		position: new google.maps.LatLng(parseFloat(i.coordenadas.split(' ')[0]), parseFloat(i.coordenadas.split(' ')[1])),
    		map: MapaIncidencias.mapPlayer,
    		draggable: false,
    		visible:true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            icon: {
			    url: PATH_PROYECTO_BASE+'images/phone_gris.png',
			    scaledSize: new google.maps.Size(45, 48),
			    origin: null, // origin
    			anchor: null // anchor
			}
    	});
		markerExpo.setAnimation(google.maps.Animation.BOUNCE);
		MapaIncidencias.ajaxTetraTimelap(-20);
		
		
	},
	

//verificacion:function(){
//	for (var i = 0; int < MapaIncidencias.markersTetraTimelap.length; i++) {
//		MapaIncidencias.arrTetraTimelap[]
//		
//	}	$.each(MapaIncidencias.markersTetraTimelap,function(a,b){
//		
////		var w="";
////		if(b.issi==arrTetraTimelap[a].issi){
////			w +="OK";
////		} else {
////			w +="ERROR";
////		}
////		console.log("markersTetraTimelap["+a+"].issi = "+b.issi);
////		console.log("\tarrTetraTimelap["+a+"].issi = "+arrTetraTimelap[a].issi);
////		console.log("Son iguales? "+w);
//	});
//	},
	
	
openSimulacion:function(options) {
		options = options || {};
		
		var idWin = Ext.id();	
		var runner, playTrack, task;
		
		var pnMapPlayer = Ext.create('Ext.Panel', {
        	id: 'pnMapPlayer',
            html: '<div id="mapPlayerCanvasInterno" style="width:500px;height:300px"></div>',
            width: 960,
            height: 640,
            autoLoad: true, 
            listeners :{
            	
            }
        });
		
		var idPlayer = {
			   	xtype : 'textfield',
			   	id:'idPlayer',
//			   	name : 'idIncidenciaAux',
			//	   	allowBlank:false,
			   	hidden: true,
			   	editable: false
		   };
		
		var btnPlay = {
				xtype: 'button',
				id:'btnPlay',
				width: 60,
				margin: '5 5 5 5',
				text: 'Iniciar',
				listeners: {
					click:function(){
						if (Ext.getCmp('btnPlay').getText()=='Iniciar'){
							task.start();
							console.log("corriendo...");
							Ext.getCmp('btnPlay').setText('Pausar');
//							reproducir = true;
							
							// Start a simple clock task that updates a div once per second
//		            		playTrack = function() {
////		            			if (reproducir){
////		            				min = parseInt(Ext.getCmp('sldTrack').getValue())+1;
//		            				var min = parseInt(Ext.getCmp('sldTrack').getValue())+5;
////		            				MapaIncidencias.ajaxTetraTimelap(min);
////		            				MapaIncidencias.inPlayTrack(min);
//		            				
////		            				if (min%5==0){
////		            					MapaIncidencias.inPlayTrack(min);
////		            				}
//		            				MapaIncidencias.inPlayTrack(min);
//		            				if (min==15){
//		            					reproducir = false;
//		            					MapaIncidencias.inPlayTrack(-15);
//		    							Ext.getCmp('btnPlay').setText('Iniciar');
//		    							Ext.getCmp('sldTrack').setValue(-15);
//		    							Ext.getCmp('lblMinuto').setText("-15:00");
////		    							runner = new Ext.util.TaskRunner();
//		            				} else {
//		            					Ext.getCmp('sldTrack').setValue(min);
//			            				Ext.getCmp('lblMinuto').setText(min+":00");
//		            				}
////		            				console.log("corriendo...");
////		            			}
//		            		};
		            		
//		            		task = runner.newTask({
//		            		    run: function() {
//		            				var min = parseInt(Ext.getCmp('sldTrack').getValue())+5;
//		            				MapaIncidencias.inPlayTrack(min);
//		            				if (min==15){
//		            					reproducir = false;
//		            					MapaIncidencias.inPlayTrack(-15);
//		    							Ext.getCmp('btnPlay').setText('Iniciar');
//		    							Ext.getCmp('sldTrack').setValue(-15);
//		    							Ext.getCmp('lblMinuto').setText("-15:00");
//		            				} else {
//		            					Ext.getCmp('sldTrack').setValue(min);
//			            				Ext.getCmp('lblMinuto').setText(min+":00");
//		            				}
//			            		},
//		            		    interval: 2000
//		            		});
		            		
//		            		setInterval(() => {
//								playTrack();
//							}, 1000);
							
		            		
//		            		task = runner.newTask({
//		            			run: function() {
//		            				var min = parseInt(Ext.getCmp('sldTrack').getValue())+5;
//		            				MapaIncidencias.inPlayTrack(min);
//		            				if (min==15){
//		            					reproducir = false;
//		            					MapaIncidencias.inPlayTrack(-15);
//		    							Ext.getCmp('btnPlay').setText('Iniciar');
//		    							Ext.getCmp('sldTrack').setValue(-15);
//		    							Ext.getCmp('lblMinuto').setText("-15:00");
////		    							runner = new Ext.util.TaskRunner();
//		            				} else {
//		            					Ext.getCmp('sldTrack').setValue(min);
//			            				Ext.getCmp('lblMinuto').setText(min+":00");
//		            				}
//			            				console.log("corriendo...");
//		            			},
//		            			interval: 1000,
//		            			repeat: 1
//		            		});
//		            		
//		            		while(reproducir){
//		            			task.start();
//		            		}
		            		
						} else if (Ext.getCmp('btnPlay').getText()=='Pausar'){
							task.stop();
							console.log("...pausado");
							Ext.getCmp('btnPlay').setText('Iniciar');
//							reproducir = false;
							
						}
						
					}
				}
			};
			
			var btnStop = {
					xtype: 'button',
					id:'btnStop',
					width: 60,
					margin: '5 5 5 0',
					text: 'Detener',
					listeners: {
						click:function(){
//							reproducir = false;
							task.stop();
							console.log("...detenido");
							Ext.getCmp('btnPlay').setText('Iniciar');
							Ext.getCmp('sldTrack').setValue(-20);
							Ext.getCmp('lblMinuto').setText("-20:00");
//							runner = new Ext.util.TaskRunner();
//							console.log(runner);
//							runner.stop();
							
							
						}
					}
				};
			
			var sldTrack = {
					xtype: 'slider',
					id:'sldTrack',
					margin: '5 5 5 0',
	                width: 750,
//	                value: -60,
	                value: -20,
	                increment: 2,
	                maxValue: 20,
	                minValue: -20,
	                tipText: function(thumb){
	                    return Ext.String.format('<b>{0} min</b>', thumb.value);
	                },
	                listeners: {
	                	change:function(slider, thumb, n, o){
	                		MapaIncidencias.inPlayTrack(n.value);
                			Ext.getCmp('sldTrack').setValue(n.value);
                			Ext.getCmp('lblMinuto').setText(n.value+":00");
	                	}
	                }
				};
			
			var lblMinuto = {
					xtype: 'label',
					id:'lblMinuto',
					width: 40,
					margin: '5 5 5 0',
//					text: '-60:00'
					text: '-20:00'
				};
			
			var btnCerrar = {
					xtype: 'button',
					id:'btnCerrar',
	    			text:'Cerrar',
	    			handler:function(){
//		    				Ext.getCmp(idWin+'wSimulacion').close();
//	    				reproducir=false;
//	    				runner.stop();
	    				console.log("SE CERRO VENTANA");
	            		task.stop();
						task.destroy();
						runner.destroy();
	    				console.log("...destruido");
//	    				Ext.getCmp(idWin+'wSimulacion').close();
	    				Ext.getCmp(idWin+'wSimulacion').destroy();
	    				Ext.id();
	    			}
	    		};
			
		Ext.create('Ext.window.Window', {
		    title: options.title,
		    height: 750,
		    width: 1000,
		    modal:true,
		    closeAction: 'destroy',
//		    scrollable: true,
		    id: idWin+'wSimulacion',
		    layout: 'fit',
//		    bodyStyle:'padding:10px 10px 0px 10px;',
		    listeners: {
		    	destroy: function(){
		    		task.stop();
					task.destroy();
					runner.destroy();
		    	}
		    },
		    items: [ 
		    	{
		            xtype: 'panel',
		            region: 'center',
		            // scrollable: true,
		            layout: 'form',
		            id: 'formSimulacion',
		            html: '<div id="pre-loading" style="position: absolute;z-index: 999;background: #FFF;width: 100%;height: 100%;"><img src = "/mobileApps/images/loading.gif" style="width: 100px;position: relative;top: 45%;left: 45%;" /></div><div id="mapPlayerCanvasInterno" style="align:center;width:975px;height:665px">jjjjj</div>',
//		            bodyPadding: 10,
//		            overflowY: 'scroll',
		            editable: false,
		            listeners:{
		    			
		            	afterrender : function(){
		            		
		            		Ext.getCmp('idPlayer').setValue(options.id);
		            		IncidenciaService.inicializaMapaInterno(options.id);	
		            		
//		            		var min = -20;
//		            		var markerExpo;
		            		
		            		
		            		runner = new Ext.util.TaskRunner();
		            		
		            		task = runner.newTask({
		            		    run: function() {
		            				var min = parseInt(Ext.getCmp('sldTrack').getValue())+2;
		            				
		            				if (min>20){
//		            					reproducir = false;
//		            					MapaIncidencias.inPlayTrack(-20);
//		    							Ext.getCmp('btnPlay').setText('Iniciar');
		    							Ext.getCmp('sldTrack').setValue(-20);
		    							Ext.getCmp('lblMinuto').setText("-20:00");
		            				} else {
		            					MapaIncidencias.inPlayTrack(min);
		            					Ext.getCmp('sldTrack').setValue(min);
			            				Ext.getCmp('lblMinuto').setText(min+":00");
		            				}
			            		},
		            		    interval: 2000
//		            		    interval: 5000
		            		});
		            		
		            	},
		            	
		            	close:function(win){
		            		console.log("SE CERRO VENTANA");
		            		task.stop();
							task.destroy();
							runner.destroy();
							Ext.getCmp('btnPlay').setText('Iniciar');
							Ext.getCmp('sldTrack').setValue(-20);
							Ext.getCmp('lblMinuto').setText("-20:00");
							Ext.getCmp(idWin+'wSimulacion').destroy();
		            	}
		            	
	    			},
	    			
		            items: [
		            ]
		        }
		    ],
		    dockedItems: [
				{
					xtype: 'container',
					dock: 'bottom',
					id:'container-controls',
					hidden : true,
					layout: 'column',
					items: [
						idPlayer,
						btnPlay,
						btnStop,
						sldTrack,
						lblMinuto,
						btnCerrar
					]
				}
			],
	    	buttons:[
	    		
		    ]
	
		}).show();

	}

}

//var min = -15;
//var reproducir = false;
//
//function refreshPlay(){
//	setInterval(function(){
//		if (reproducir){
//			min = parseInt(Ext.getCmp('sldTrack').getValue())+1;
//			Ext.getCmp('sldTrack').setValue(min)
//		}
//		
//		
//	}, 5000);
//}

window.onload = function(){

	IncidenciaService.init();
	$('#myCarousel').carousel('pause');
	
    $('#'+idWin+'wSimulacion').on('shown.bs.modal', function (){
	    google.maps.event.trigger(mapPlayer, "resize");
	});
	
}