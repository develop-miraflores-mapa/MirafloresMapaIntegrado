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



Ext.define('BitacoraModel', {
    extend: 'Ext.data.Model',
    fields: [
     	'idBitacora',
		'idIncidencia',
		'fecha',
		'descripcion',
		'usuario',
		'estReg',
		{
	       	name:'fecha',
	       	mapping : 'fecha',
	       	convert : function(v){
	       		console.log("v");
	       		console.log(v);
	       		if(v){ return moment(new Date(v)).format("DD/MM/YYYY HH:mm:ss"); }
	       		else{ return ""; }
	       	}
		},
		{
	       	name:'descripcion',
	       	mapping : 'descripcion',
	       	convert : function(v){
	       		if(v){
	       			var html = "<div style='width:360px !important;height:auto;'>"+v+"</div>";
	       			return moment(html);
	       		}else{
	       			return "";
	       		}
	       	
	       	}
		}
    ]
});


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

//var situacionStore = Ext.create('Ext.data.Store', {
//			    fields: ['name', 'value'],
//			    data : [
//			        {"value":"873", "name":"NUEVO"},
//			        {"value":"870", "name":"ATENDIDO"},
//			    ]
//			});
//
//var medioStore = Ext.create('Ext.data.Store', {
//			    fields: ['name', 'value'],
//			    data : [
//			        {"value":797, "name":"CORREO ELECTRONICO"},
//			        {"value":798, "name":"PRESENCIAL"},
//			        {"value":799, "name":"LLAMADA TELEFONICA"},
//			        {"value":800, "name":"FACEBOOK"},
//			        {"value":801, "name":"TWITTER"},
//			        {"value":802, "name":"CAMARA"}
//			    ]
//			});
//
//Ext.define('IntervinienteModel', {
//		extend : 'Ext.data.Model',
//		fields : [ 
//					'codInterv',
//					'idIncidencia',
//					'codTpoInterv',
////					'codTpoPuesto',
//					'descTpoInterv',
//					'descTpoPuesto',
//					'nombInterv',
//					'apoyoPolicial'
////					,'estReg',
////					'infoInterv'
//		         ]
//	});

//Ext.define('InvolucradoModel', {
//		extend : 'Ext.data.Model',
//		fields : [ 
//					'codInvoluc',
//					'idIncidencia',
//					'codTpoInvoluc',
//					'codTpoDoc',
//					'descTpoInvoluc',
//					'descTpoDoc',
//					'nombInvoluc',
//					'edadInvoluc',
//					'numDocInvoluc',
//					'descObserv'
////					,'codVehic',
////					'codClaseVehic',
////					'codMarcaVehic',
////					'codColorVehic',
////					'claseVehic',
////					'marcaVehic',
////					'modelVehic',
////					'placaVehic',
////					'colorVehic',
////					'anioVehic',
////					'estReg'
//		         ]
//	});
//
//Ext.define('VehiculoModel', {
//	extend : 'Ext.data.Model',
//	fields : [ 
//					'cod_vehic',
//					'id_incidencia',
//					'cod_clase_vehic',
//					'cod_marca_vehic',
//					'cod_color_vehic',
//					'clase_vehic',
//					'marca_vehic',
//					'model_vehicv',
//					'placa_vehic',
//					'color_vehic',
//					'anio_vehic',
//					'est_reg'
//	         ]
//});

Ext.ns('IncidenciaService');
IncidenciaService = {

					
	init:function(){
		this.buildGridIncidencia();
		console.log(DES_LOGIN);
//		if (DES_LOGIN='PFI.TRANSITO'){
//			Ext.getCmp('cbxUnidadX').setValue(1);
//			Ext.getCmp('cbxCasoX').setValue(1);
//			Ext.getCmp('cbxUnidadX').setDisabled(true);
//			Ext.getCmp('cbxCasoX').setDisabled(true);
//		}
//		if (DES_LOGIN='PFI.FISCALIZ'){
//			Ext.getCmp('cbxUnidadX').setValue(2);
//			Ext.getCmp('cbxUnidadX').setDisabled(true);
//		}
//		if (DES_LOGIN='PFI.DEFENSA'){
//			Ext.getCmp('cbxUnidadX').setValue('5');
//			Ext.getCmp('cbxUnidadX').setDisabled(true);
//		}
//		if (DES_LOGIN='PFI.BOMBEROS'){
//			Ext.getCmp('cbxUnidadX').setValue('');
//		}
//		if (DES_LOGIN='PFI.PNP'){
//			Ext.getCmp('cbxUnidadX').setValue('');
//		}
//		if (DES_LOGIN='PFI.BILINGUE'){
//			Ext.getCmp('cbxUnidadX').setValue('');
//		}
		
	}
	,
	setZonaSubZona:function(punto){
	
				    					Util.runAjax({
										url:PATH_PROYECTO_BASE+'catastro/get-sector-zona-by-cordenada',
//										async : true,
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
		        {"value":990, "name":"WAZE"}
		    ]
		});
		
		var asignadoStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		        {"value":"995", "name":"AZUL"},
		        {"value":"996", "name":"VERDE"},
		        {"value":"997", "name":"AMARILLO"},
		        {"value":"998", "name":"NARANJA"},
		        {"value":"999", "name":"ROJO"},
		        {"value":"1000", "name":"MARRON"}
		    ]
		});

		var txtNroId = {
	    		xtype: 'textfield',
				id: 'txtNroId',
				margin: '0 5 0 0',
				width: 80,
				emptyText:'Nro Id',
				labelAlign: 'top',
				maskRe: /[0-9]/
			};
		
		var txtNroCaso = {
	    		xtype: 'textfield',
				id: 'txtNroCaso',
				margin: '0 5 0 0',
				width: 80,
				emptyText:'Nro Voxiva',
				labelAlign: 'top',
				maskRe: /[0-9]/
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
				listeners:{}
			};
		
		var cbxCasoX = {
				xtype: 'ComboGeneric',
				id: 'cbxCasoX',
				margin: '0 5 0 0',
				width: 180,
				emptyText:'Tipo de caso',
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-caso',
				queryMode: 'local',
				valueField:'codCaso',
				displayField :'descCaso',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoCaso',
				model: unidadModel,
				listeners:{}
			};
		
		var cbxSubcasoX = {
				xtype: 'ComboGeneric',
				id: 'cbxSubcasoX',
				margin: '0 5 0 0',
				width: 180,
				emptyText:'Tipo de Subcaso',
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-subcaso',
				queryMode: 'local',
				valueField:'codSubcaso',
				displayField :'descSubcaso',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoSubcaso',
				model: subCasoModel,
				listeners:{}
			};
		
		var cbxMedioX = Ext.create('Ext.form.ComboBox', {
				store: medioStore,
			    queryMode: 'local',
			    id:'cbxMedioX',
			    emptyText:'Medio',
				forceSelection:true,
			    valueField: 'value',
			    displayField: 'name',
			    labelAlign: 'left',
			    width:150,
			    margin: '0 5 0 0',
			    emptyText:'Medio de Ingreso',
			    name:'medioIngreso',
			    listeners:{
			    }
			}); 
	
		var cbxSituacionX = Ext.create('Ext.form.ComboBox', {
			    store: situacionStore,
			    queryMode: 'local',
			    id:'cbxSituacionX',
			    emptyText:'Situación',
			    forceSelection:true,
			    labelAlign: 'left',
			    valueField: 'value',
			    displayField: 'name',
			    width:150,
			    margin: '0 5 0 0',
	//		    emptyText:'Situación de reporte',
			    name:'situacionReporte',
			    listeners:{
			    }
			}); 
		
		var btnConsultar = {
	            xtype: 'button',
	            id: 'btnConsultar',
	            margin: '0 5 0 0',
	            text: 'Consultar',
	            handler:function(){
	            	IncidenciaService.buscar2();
	            }
	        };
		
		var btnLimpiar = {
	            xtype: 'button',
	            id: 'btnLimpiar',
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
	            }
	        };
		
		Ext.define('IncidenciaGeneric', {
			     extend: 'Ext.data.Model',
			     fields: [
						'idIncidencia',
						'codUnidad',
						'codCaso',
						'codSubcaso',
						'codMedio',
						'codSituacion',
						'descUnidad',
						'descCaso',
						'descSubcaso',
						'descMedio',
						'descSituacion',
						'nombReport',
						'telfReport',
						'coordenadas',
						'descVia',
						'cdra',
						'zona',
						'subzona',
						'area',
						'descripcion',
						'fecNotificacion',
						'fecEvento',
						'fecAtencion',
						'fecCierre',
						'codSeveridad',
						'codEstado',
						'codSubestado',
						'codModalidad',
						'descMotivo',
						'tpoHallazgo',
						'estReg',
						'nroCasoVoxiva',
						'visible',
						'usrRegistra',
						'usrModifica',
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
						}
				]
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
		
//		var store = Ext.create('Ext.data.Store', {
//			autoLoad : true,
//			model : 'IncidenciaGeneric',
//			pageSize: 20,
//			proxy : {
//				type : 'ajax',
//				url:PATH_PROYECTO_BASE+'mapa-incidencia/incidencias-list-generic',
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
			    overflowX: 'scroll',
			    width: 1600,
			    align: 'center',
			    autoScroll: true,
			    border:true,
			    columns: [
			        { text: 'Id',  dataIndex: 'idIncidencia', width: 60, locked:true },
			        { text: 'Vox',  dataIndex: 'nroCasoVoxiva', width: 60 },
			        { text: 'Medio',  dataIndex: 'descMedio' , width: 180},	//width: 120 
			        { text: 'Situación',  dataIndex: 'descSituacion' , width: 80},	//width: 180 
			        { text: 'Unidad',  dataIndex: 'descUnidad' ,  width: 200},
			        { text: 'Caso',  dataIndex: 'descCaso' , width: 300 },
			        { text: 'Subcaso',  dataIndex: 'descSubcaso' ,  width: 300},
//			        { text: 'Reportante',  dataIndex: 'nombReport' , flex : 1},
//			        { text: 'Telf',  dataIndex: 'telfReport' , flex : 1},
			        { text: 'Georreferencia',  dataIndex: 'coordenadas', hidden:true , flex : 1},
			        { text: 'Area',  dataIndex: 'area', hidden:true, width: 100},
			        { text: 'Zona',  dataIndex: 'zona', hidden:true, width: 120 },
			        { text: 'Subzona',  dataIndex: 'subzona', hidden:true, width: 120},
			        { text: 'Via',  dataIndex: 'descVia', width: 160}, 
			        { text: 'Cdra',  dataIndex: 'cdra', width: 60 },
//			        { text: 'Descripción',  dataIndex: 'descripcion', hidden:true, flex : 1},
			        { text: 'F.Notific',  dataIndex: 'strFecNotificacion' , width: 180 },
			        { text: 'F.Evento',  dataIndex: 'strFecEvento', hidden:true, width: 180 },
			        { text: 'F.Atención',  dataIndex: 'strFecAtencion', hidden:true, width: 180 },
//			        { text: 'F.Cierre',  dataIndex: 'fecCierre', hidden:true, flex : 1},
			        { text: 'Severidad',  dataIndex: 'strSeveridad', hidden:true, width: 160 },
			        { text: 'Estado',  dataIndex: 'strEstado', hidden:true , width: 120 },
			        { text: 'Subestado',  dataIndex: 'strSubestado', hidden:true, width: 120 },
			        { text: 'Modalidad',  dataIndex: 'strModalidad', hidden:true, flex : 1},
			        { text: 'Motivo',  dataIndex: 'descMotivo', hidden:true, flex : 1},
			        { text: 'Tipo Hallazgo',  dataIndex: 'strTpoHallazgo', hidden:true, flex : 1},
//			        { text: 'Est. Reg.',  dataIndex: 'estReg', hidden:true, flex : 1},
//			        { text: 'Visible',  dataIndex: 'visible', hidden:true, flex : 1},
			        { text: 'U. Registro',  dataIndex: 'usrRegistra', width: 160 },
			        { text: 'U. Modific.',  dataIndex: 'usrModifica', width: 160 },
			        {
			            xtype:'actioncolumn',
			       		width:30,
			            align:'center',
//			            locked: true,
			            lockable: true,
			            hidden:true,
			            items: [{
			            	
			                icon: PATH_PROYECTO_BASE+'images/edit_16.png',
			                tooltip: 'Editar',
			                handler: function(grid, rowIndex, colIndex) {
			                	var record = grid.getStore().getAt(rowIndex);
			                	IncidenciaService.openFormRegistroNuevo({
				           			titulo:'Editar incidencia',
				           			codIncidencia: record.data.idIncidencia
				           		});
			                    
			                }
			            }]
			        },
			        {
			            xtype:'actioncolumn',
			       		width:30,
			            align:'right',
			            lockable: true,
			            locked: true,
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
												cod:record.data.idIncidencia
											},
//											async : true,
											async : false,
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
//				height: $(window).height()-30,
//				width:$(window).width()-30,
				height: 709,
				width:1540,
				dockedItems: [
					{
					    xtype: 'pagingtoolbar',
					    store: store,   // same store GridPanel is using
					    dock: 'bottom',
					    displayInfo: true
					},
                    {
			            xtype: 'toolbar',
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
			                {
			            	  	text:'Nuevo',
			                    id:'btnAddGeo2',
			                    iconCls:'btnAddSmall',
			                    handler:function(){
			                    	IncidenciaService.openFormRegistroNuevo({
			                    		title:'Registrar Incidencia'
			                    	});
			                    }
			                },
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
							{
			                	xtype: 'button',
								text: 'Exportar...',
//								glyph: Packt.util.Glyphs.getGlyph('excel'),
								listeners: {
//								click: 'onExportExcel'
								},
								handler:function(){
									/*$.ajax({
										url:PATH_PROYECTO_BASE+'mapa-incidencia/export-excel',
										dataType: "json",
//										data:{latitud:punto.lat,longitud:punto.lng},
									    success: function( response ) {
//									    	var result = response.result || [];
//									    	if(result.length>0){
//									    		var name = result[0];
//									    		Ext.getCmp('txtDireccion').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
//									    	}
									    }
			        				});*/
									IncidenciaService.openFormExportacion({
    		                    		title:'Exportar incidencias'
    		                    	})
//									window.open(PATH_PROYECTO_BASE+'mapa-incidencia/export-excel', "_blank");
								}
							},
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
	

	
	
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////// ////////////////
// ////////////// NUEVA IMPLEMENTACION 2 ////////////////
// ////////////// ////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
			case 418: 
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
		if(vCaso==8||(vCaso>10&&vCaso<32)){
			Ext.getCmp('cbxSubCaso').disable();
		} else {
			Ext.getCmp('cbxSubCaso').enable();
		}
	},
	
	onChangeSubCaso: function(vSubcaso){
		switch( vSubcaso ) {
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
	    				console.log("interviniente añadido...");
	    				console.log(interviniente);
	    				Ext.getCmp('tbInterv').store.add(interviniente);
	    				Ext.getCmp('wInterviniente').close();
	    				Ext.id();
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
							Ext.getCmp('claseInvoluc').reset();
							Ext.getCmp('marcaInvoluc').reset();
							Ext.getCmp('claseInvoluc').reset();
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
                width: 565,
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
        
		var claseInvoluc = {
                xtype: 'textfield',
                id: 'claseInvoluc',
                margin: '0 20 5 0',
                width: 210,
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
	    		name:'marcaVehicInvoluc',
	    		model: maestroTipoModel
            };
		
        var	marcaInvoluc = {
                xtype: 'textfield',
                id: 'marcaInvoluc',
                margin: '0 0 5 0',
                width: 210,
                fieldLabel: 'Marca',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
                emptyText: 'Marca'
            };
        
        var modelInvoluc = {
                xtype: 'textfield',
                id: 'modelInvoluc',
                margin: '0 20 5 0',
                width: 210,
                fieldLabel: 'Modelo',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
                emptyText: 'Modelo'
            };
        
        var placaInvoluc = {
                xtype: 'textfield',
                id: 'placaInvoluc',
                margin: '0 0 5 0',
                width: 210,
                fieldLabel: 'Placa',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
                emptyText: 'Placa'
            };
        
        var colorInvoluc = {
                xtype: 'textfield',
                id: 'colorInvoluc',
                margin: '0 20 0 0',
                width: 210,
                fieldLabel: 'Color',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    fieldStyle: 'text-transform:uppercase',
                emptyText: 'Color'
            };
        
        var anioInvoluc = {
                xtype: 'textfield',
                id: 'anioInvoluc',
                width: 210,
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
		    maxHeight: 600,
		    minHeight: 280,
		    width: 600,
		    modal:true,
		    overflowY: 'scroll',
		    id: 'wInvolucrado',
		    itemId: 'wInvolucrado',
		    layout: 'column',
			items: [
				{
		            xtype: 'form',
		            id: 'formInvolucrado',
		            region: 'center',
		            scrollable: true,
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
	    				console.log("involucrado agregado...");
	    				console.log(involucrado);
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
			    emptyText: 'Clase'
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
//	    		name:'marcaVehic',
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
                emptyText: 'Marca'
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
                emptyText: 'Modelo'
            };
        
        var placaVehic = {
                xtype: 'textfield',
                id: 'placaVehic',
                margin: '0 0 5 0',
                width: 210,
                fieldLabel: 'Placa',
                labelWidth: 50,
//                hidden:true,
                enforceMaxLength: true,
			    maxLength: 20,
			    allowBlank: false,
			    fieldStyle: 'text-transform:uppercase',
                emptyText: 'Placa'
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
                emptyText: 'Color'
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
			    emptyText: 'Año'
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
		    maxHeight: 600,
		    minHeight: 280,
		    width: 430,
		    heigth: 280,
		    modal:true,
		    overflowY: 'scroll',
		    id: 'wVehiculo',
		    itemId: 'wVehiculo',
		    layout: 'column',
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
			items: [
				{
		            xtype: 'form',
		            id: 'formVehiculo',
		            region: 'center',
		            scrollable: true,
		            layout: 'form',
		            width: 400,
//		            bodyPadding: 10,
//				 	manageHeight: false,
//				 	title: 'INVOLUCRADO',
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
	    				Ext.getCmp('wInterviniente').close();
	    				Ext.id();
	    			}
	    		}
			]
		}).show();
	
	},
	
	
	
	openFormExportacion:function(options){

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
//		    maxHeight: 600,
//		    minHeight: 280,
		    width: 360,
		    heigth: 40,
		    modal:true,
//		    overflowY: 'scroll',
		    id: 'wExportacion',
		    itemId: 'wExportacion',
		    layout: 'form',
		    // bodyStyle:'width:100%;padding:0px 0px 0px 0px;',
			items: [
				{
		            xtype: 'form',
		            id: 'formExportacion',
//		            region: 'center',
//		            scrollable: true,
		            layout: 'column',
//		            width: 180,
//		            bodyPadding: 10,
//				 	manageHeight: false,
//				 	title: 'INVOLUCRADO',
		            items: [
		            	fecDesde,
		            	fecHasta
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
	    					window.open(PATH_PROYECTO_BASE+'mapa-incidencia/export-excel?fec1='
	    									+fec1+'&fec2='+fec2, "_blank");
		    				Ext.getCmp('wExportacion').close();
		    				Ext.id();
	    				} else {
	    					console.log("Por favor, indique la fecha de inicio y fin para la exportación");
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
	
	
	setZonaSubZona2:function(punto){
		console.log("PUNTO");
		console.log(punto);
		Util.runAjax({
			url:PATH_PROYECTO_BASE+'catastro/get-sector-zona-by-cordenada',
//			async : true,
			async : false,
			method : 'POST',
			params:{punto:punto},
			success:function(http){
				var response = Ext.decode(http.responseText);
				if(response.data && response.data.nombresector){ Ext.getCmp('txtZona').setValue(response.data.nombresector); }
					else{ 
						Ext.getCmp('txtZona').setValue(''); 
						Ext.getCmp('txtZona').setReadOnly(false);
					}
				if(response.data && response.data.codi_zona){ Ext.getCmp('txtSubZona').setValue(response.data.codi_zona); }
					else{ 
						Ext.getCmp('txtSubZona').setValue(''); 
						Ext.getCmp('txtSubZona').setReadOnly(false);
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
//		if(!Ext.isEmpty(Ext.getCmp('fecNotificacion').getValue())){}
//		if(!Ext.isEmpty(Ext.getCmp('fecEvento').getValue())){}
		store.proxy.extraParams = params;
		store.load();
	},
	
	openFormRegistroNuevo:function(options){
		
		options = options || {};
		
		
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
			        {"value":990, "name":"WAZE"}
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
				  		vStoreSubCaso.removeAll();
				  		Ext.getCmp('formDetalle').reset();
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
				fieldStyle: 'text-transform:uppercase',
				readOnly:true
			};

		var txtCuadra =	{
				xtype: 'textfield',
				id: 'txtCuadra',
				margin: '10 0 0 0',
				width: 155,
				fieldLabel: 'Cdra / Nro:',
				labelClsExtra: '',
				enforceMaxLength: true,
			    maxLength: 10,
			    fieldStyle: 'text-transform:uppercase',
				labelWidth: 70
			};
		
		var txtDpto = {	
				xtype: 'textfield',
				id: 'txtDpto',
				margin: '10 0 0 20',
				width: 185,
				fieldLabel: 'Dpto / Of:',
				enforceMaxLength: true,
			    maxLength: 500,
			    fieldStyle: 'text-transform:uppercase',
				labelWidth: 60
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
				readOnly:true
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
		
//		var latitud = {
//				xtype:'textfield',
//				width:400,
//				fieldLabel:'latitud',
//				labelWidth : 100,
//				name:'latitud',
//				style:'margin-bottom:10px;',
//				id:'latitud',
//				margin: '10 10 10 20',
//				allowBlank:false,
//				readOnly:true,
//				hidden:true
//			};
//		
//		var longitud = {
//				xtype:'textfield',
//				width:400,
//				fieldLabel:'longitud',
//				labelWidth : 100,
//				name:'longitud',
//				style:'margin-bottom:10px;',
//				id:'longitud',
//				margin: '10 10 10 20',
//				allowBlank:false,
//				readOnly:true,
//				hidden:true
//			};
		
		var btnMapear = {
	            xtype: 'button',
	            id: 'btnMapear',
	            margin: '10 0 0 0',
	            width: '80',
	            text: 'Mapear',
	            handler:function(){
					Util.windowGeoreferenciaPunto({
	        			width:600,
	        			height:600,
	        			idCanvasMap:'mapa-incidencia-geo',
	        			idCordenadas:'coordenadas',
	        			fnGrabar:function(punto,direccionData){
	        				Ext.getCmp('coordenadas').setValue(punto.lat+' '+punto.lng);
//	        				Ext.getCmp('latitud').setValue(punto.lat);
//	        				Ext.getCmp('longitud').setValue(punto.lng);
	        				console.log("direccionData: "+direccionData);
//	        				console.log("Latitud y Longitud: ");
//	        				console.log(Ext.getCmp('latitud').getValue());
//	        				console.log(Ext.getCmp('longitud').getValue());
	        				
	        				$.ajax({
	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
								    dataType: "json",
								    data:{latitud:punto.lat,longitud:punto.lng},
								    success: function( response ) {
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
	    		height: 130,
	    		id: 'txtDetalle',
	    		padding: '',
	    		width: 580,
	    		fieldLabel: 'Detalle de evento',
	    		labelAlign: 'top',
	    		enforceMaxLength: true,
	    		fieldStyle: 'text-transform:uppercase',
			    maxLength: 3100,
			    emptyText: 'Describa el detalle de la incidencia o la acción tomada'
    		};

	    var fecNotificacion = {
	    		xtype: 'datefield',
	    		id: 'fecNotificacion',
	    		width: 100,
	    		fieldLabel: 'Fecha de notificación',
	    		hideLabel: true,
	    		editable: false,
	    		disabled: true,
	    		hideTrigger : true,
	    	};

	    var horNotificacion = {
	    		xtype: 'textfield',
	    		id: 'horNotificacion',
	    		width: 65,
	    		fieldLabel: 'Hora de notificación',
	    		hideLabel: true,
	    		disabled: true,
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
	    		hideTrigger : true,
	    	};

	    var horAtencion = {
	    		xtype: 'textfield',
	    		id: 'horAtencion',
	    		width: 65,
	    		fieldLabel: 'Hora de atención',
	    		hideLabel: true,
	    		enforceMaxLength: true,
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
		
		var cbxMedio = Ext.create('Ext.form.ComboBox', {
				store: medioStore,
			    queryMode: 'local',
			    id:'cbxMedio',
			    forceSelection:true,
			    valueField: 'value',
			    displayField: 'name',
			    labelAlign: 'left',
			    fieldLabel: 'Medio',
			    labelWidth: 40,
			    width:250,
			    margin: '10 10 10 10',
			    allowBlank:false,
//			    emptyText:'Medio de Ingreso',
			    name:'medioIngreso',
			    listeners:{
			    }
			}); 
		
		var cbxSituacion = Ext.create('Ext.form.ComboBox', {
			    store: situacionStore,
			    queryMode: 'local',
			    id:'cbxSituacion',
			    forceSelection:true,
			    labelAlign: 'left',
			    fieldLabel: 'Situacion',
			    allowBlank:false,
			    valueField: 'value',
			    displayField: 'name',
			    labelWidth: 60,
			    width:300,
			    margin: '10 10 10 10',
//			    emptyText:'Situación de reporte',
			    name:'situacionReporte',
			    listeners:{
			    }
			});

		var cbxAsignado = Ext.create('Ext.form.ComboBox', {
		    store: asignadoStore,
		    queryMode: 'local',
		    id:'cbxAsignado',
		    forceSelection:true,
		    labelAlign: 'left',
		    fieldLabel: 'Asignado a',
		    allowBlank:false,
		    valueField: 'value',
		    displayField: 'name',
		    labelWidth: 60,
		    width:250,
		    margin: '10 10 10 10',
//		    emptyText:'Situación de reporte',
		    name:'situacionReporte',
		    listeners:{
		    }
		});
		
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
                hidden: true,
                dataIndex: 'claseVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Clase'
            };
        var colMarcaInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
                hidden: true,
                dataIndex: 'marcaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Marca'
            };
        var colModelInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
                hidden: true,
                dataIndex: 'modelVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Model'
            };
        var colPlacaInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
                hidden: true,
                dataIndex: 'placaVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Placa'
            };
        var colColorInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
                hidden: true,
                dataIndex: 'colorVehic',
                fieldStyle: 'text-transform:uppercase',
                text: 'Color'
            };
        var colAnioInvoluc = {
                xtype: 'gridcolumn',
                width: 60,
                hidden: true,
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
	    				
	    					if(options.optForm){
	    						var coord = options.optForm;
    							var thisWin = Ext.getCmp('win-form-registro');
//		    					thisWin.body.mask('Obteniendo información...');
		    					console.log("obteniendo la direccion...");
		    					$.ajax({
    	        					url: PATH_PROYECTO_BASE+"catastro/get-name-street",
	    	        					async : true,
										method : 'GET',    
	    	        					dataType: "json",
    								    data:{ latitud:options.optForm.split(' ')[0],longitud:options.optForm.split(' ')[1] },
    								    success: function( response ) {
    								    	console.log("hay respuesta de get-name-street");
    								    	var result = response.result || [];
    								    	console.log("cantidad de resultados: "+result.length)
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
		    					console.log("options.optForm.split(' ')[1]+' '+options.optForm.split(' ')[0]");
		    					console.log(options.optForm.split(' ')[1]+' '+options.optForm.split(' ')[0]);
		    					Ext.getCmp('coordenadas').setValue(options.optForm.split(' ')[0]+' '+options.optForm.split(' ')[1]);
		    					console.log("Ext.getCmp('coordenadas').getValue()");
		    					console.log(Ext.getCmp('coordenadas').getValue());
		    					
		    					
//		    					Util.runAjax({
//	    							url: PATH_PROYECTO_BASE+"catastro/get-name-street",
//	    							async : true,
//									method : 'GET',
//									dataType: "json",
//									data:{latitud:options.optForm.split('_')[0],longitud:options.optForm.split('_')[1]},
////									params:{latitud:options.optForm.split('_')[0],longitud:options.optForm.split('_')[1]},
//     							    success: function( response ) {
//     							    	try {
//     							    		console.log("Latitud: "+options.optForm.split(' ')[0]);
//											console.log("Longitud: "+options.optForm.split(' ')[1]);
//											console.log("RESPONSE...");
//											console.log(response);
//											var response = Ext.decode(http.responseText);
//											var name = response.result[0];
//											
//											Ext.getCmp('direccionIncidencia').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
//										} catch (e) {
//											// TODO: handle exception
//										}
////     							    	console.log(response);
////     							    	var result = response.result || [];
////     							    	if(result.length>0){
////     							    		var name = result[0];
////     							    		Ext.getCmp('direccionIncidencia').setValue(name.names[1]?name.names[1].toUpperCase():name.names[0].toUpperCase());
////     							    	}
//     							    	Ext.getCmp('cbxUnidad').setValue(1);
//     							    },
//     							    
////									url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
////									async : true,
////									method : 'GET',
////									params:{idIncidencia:options.idIncidencia},
////									success:function(http){
////										try{
////											var response = Ext.decode(http.responseText);
////											// console.log(response);
////											var data = response.data;
////										} catch(e) {
////											
////										}
////									}
//	    						});
	    						IncidenciaService.setZonaSubZona2(options.optForm.split(' ')[1]+' '+options.optForm.split(' ')[0]);
	    					}
	    					
	    					if(options.codIncidencia){
	    						console.log("options.codIncidencia = "+ options.codIncidencia);
	    						var cod = options.codIncidencia;
	    						console.log("cod");
	    						console.log(cod);
		    					var thisWin = Ext.getCmp(idWin+'win-form-registro');
		    					thisWin.body.mask('Obteniendo información...');
		    					console.log("obteniendo la incidencia...");
		    					Util.runAjax({
		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-incidencia',
//		    						url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
		    						async : true,
//		    						async : false,
									method : 'GET',
									params:{ idIncidencia: cod},
									timeout:1000,
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
															Ext.getCmp('tbVehic').store.loadData(data.vehiculos);
//															if (data.usrRegistra!=null){ Ext.getCmp('txtUsrRegistra').setValue(data.usrRegistra); }
//															if (data.usrModifica!=null){ Ext.getCmp('txtUsrModifica').setValue(data.usrModifica); }
													}
													
													if (data.usrRegistra!=null){ Ext.getCmp('txtUsrRegistra').setValue(data.usrRegistra); }
													if (data.usrModifica!=null){ Ext.getCmp('txtUsrModifica').setValue(data.usrModifica); }
													
													if (data.codMedio!=null){ Ext.getCmp('cbxMedio').setValue(data.codMedio); }
													if (data.codSituacion!=null){ Ext.getCmp('cbxSituacion').setValue(data.codSituacion); }
																										
													
											//	PARA SECCION ESPECIFICACION DE INCIDENCIA

													if (data.codUnidad!=null) { 
															Ext.getCmp('cbxUnidad').setValue(data.codUnidad); 
															Ext.getCmp('cbxCaso').store.load({
							            	  						params: { cod: data.codUnidad }
							            	  					});
														}
													if (data.codCaso!=null){ 
															console.log("data.codCaso: "+data.codCaso);
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
				            	  			
				            	  					if (data.coordenadas!=null){ Ext.getCmp('coordenadas').setValue(data.coordenadas); 
				            	  						console.log("Ext.getCmp('coordenadas').setValue(data.coordenadas)");
				            	  						console.log(Ext.getCmp('coordenadas').setValue(data.coordenadas));
				            	  					}
				            	  					if (data.descVia==null||data.zona==null||data.subzona==null){
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
					            	  					} else {
					            	  						if (data.descVia!=null){ Ext.getCmp('txtDireccion').setValue(data.descVia); }
					            	  						if (data.zona!=null){ Ext.getCmp('txtZona').setValue(data.zona); }
						            	  					if (data.subzona!=null){ Ext.getCmp('txtSubZona').setValue(data.subzona); }
					            	  					}
				            	  					if (data.cdra!=null){ Ext.getCmp('txtCuadra').setValue(data.cdra); }
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


				            	  					

													
													
//													var a = Ext.getCmp('fecNotificacion').getValue();
//							    					console.log("Ext.getCmp('fecNotificacion').getValue() = "+ a);
//							    					console.log("Ext.getCmp('fecNotificacion').getValue() = "+ Ext.getCmp('fecNotificacion').getValue().toLocaleDateString());
//							    					
//							    					
//							    					var fecha = Ext.getCmp('fecNotificacion').getValue().toLocaleDateString().split('/');
//							    					var hora = Ext.getCmp('horNotificacion').getValue().split(':');
//							    					console.log("dia: "+fecha[0]+ " mes: "+fecha[1]+" año: "+[2]);
//							    					console.log("hora: "+hora[0]+ "y minutos: "+hora[1]);
//							    					var date = new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1]);
////							    					
//							    					console.log("timestamp reconstruido: "+date);
//							    					console.log("fecha reconstruida: "+date.getTime());
////							    					
//													var dateString = '17-09-2013 10:08';
//												    var dateTimeParts = dateString.split(' ');
//												    var timeParts = dateTimeParts[1].split(':'); 
//												    var dateParts = dateTimeParts[0].split('-');
//												    var date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
//
//													console.log(date.getTime()); //1379426880000
//													console.log(date); //Tue Sep 17 2013 10:08:00 GMT-0400
//													
//													var timestampNumber = new Date("2013/09/05 15:34").getTime();
//													console.log("Timestamp de prueba generado: "+timestampNumber);
//													console.log("Timestamp de prueba generado: "+timestampNumber.toLocaleString());
//													
//													var d = new Date(1469433907836);
//													console.log("Date d = "+d);
//													console.log("d.toLocaleString(): "+d.toLocaleString());     // 7/25/2016, 1:35:07 PM
//													console.log("d.toLocaleDateString(): "+d.toLocaleDateString()); // 7/25/2016
//													console.log("d.toDateString(): "+d.toDateString());       // Mon Jul 25 2016
//													console.log("d.toTimeString(): "+d.toTimeString());       // 13:35:07 GMT+0530 (India Standard Time)
//													console.log("d.toLocaleTimeString(): "+d.toLocaleTimeString()); // 1:35:07 PM
							    					
													
													

				            	  					
//							    					var d = new Date(1469433907836);
//
//							    					d.toLocaleString()     // 7/25/2016, 1:35:07 PM
//							    					d.toLocaleDateString() // 7/25/2016
//							    					d.toDateString()       // Mon Jul 25 2016
//							    					d.toTimeString()       // 13:35:07 GMT+0530 (India Standard Time)
//							    					d.toLocaleTimeString() // 1:35:07 PM
							    					
							    					//.toLocaleDateString()
							    					
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
				            	  					
				            	  					console.log("Carga exitosa de detalle de incidencia");
				            	  					
											thisWin.body.unmask();
										
										} catch(e) {
										
//											thisWin.close();
											thisWin.destroy();
											Ext.id();
										
										}
									}
								});
	    					}
	    				}
	    			},
		            items: [
		            	
		            	idIncidencia,
		            	txtUsrRegistra,
		            	txtUsrModifica,
		            	
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
		                            width: 280,
		                            layout: 'column',
		                            fieldLabel: 'Zona-SubZ',
		                            labelWidth: 70,
		                            items: [
		                            	txtZona,
		                            	txtSubZona,
		                                coordenadas
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
		                    	txtDirecReport
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
				                            height: 30,
				                            id: 'gpNotificacion',
				                            margin: '30 0 0 20',
				                            width: 260,
				                            layout: 'column',
				                            fieldLabel: 'Notific.',
				                            labelWidth: 60,
//				                            hidden:true,
				                            items: [
				                            	fecNotificacion,
				                            	horNotificacion
				                            ]
				                        },
				                    	{
				                            xtype: 'fieldcontainer',
				                            height: 30,
				                            id: 'gpEvento',
				                            margin: '5 0 0 20',
				                            width: 260,
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
				                            height: 30,
				                            id: 'gpAtencion',
				                            margin: '5 0 0 20',
				                            width: 260,
				                            layout: 'column',
				                            fieldLabel: 'Atención',
				                            labelWidth: 60,
//				                            hidden:true,
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
				                                    bodyBorder: true,
				                                    header: false,
				                                    border:true,
				                                    title: 'My Grid Panel',
//				                                    height: 35,
//			                                        maxHeight: 140,
//			                                        minHeight: 35,
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
				                                            items: [{
				                                            	icon: PATH_PROYECTO_BASE+'images/delete_16.png',
				                                            	tooltip: 'Eliminar',
				                                                handler: function(grid, rowIndex, colIndex) {
				                                                    var rec = grid.getStore().getAt(rowIndex);
				                                                    Ext.Msg.confirm('Confirmar', '¿Está seguro de eliminar el vehiculo seleccionado?', function(btn, text){
				    												    if (btn == 'yes'){
				    												    	grid.getStore().remove(rec);
				    												    }
				    												});
//				                                                    rec.set("estReg","I");
//				                                                    alert("Involucrado " + rec.get('nombReport') + " ha sido eliminado.");
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
//				                                    height: 35,
//			                                        maxHeight: 140,
//			                                        minHeight: 35,
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
					                                    colCodClaseInvoluc,
					                                    colCodMarcaInvoluc,
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
//				                                                    rec.set("estReg","I");
//				                                                    alert("Involucrado " + rec.get('nombReport') + " ha sido eliminado.");
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
//				                                                    rec.set("estReg","I");
//				                                                    alert("Interviniente " + rec.get('nombInterv') + " ha sido eliminado.");
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
                            xtype: 'fieldcontainer',
                            id: 'pnMedioSituacion',
                            margin: '10 0 0 0',
                            width: 865,
                            layout: 'column',
                            fieldLabel: 'Propiedades de registro',
                            labelAlign: 'top',
                            items: [
                            	cbxMedio,
                            	cbxSituacion,
                            	cbxAsignado
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
		    				
		    				
		    				var fecha = Ext.getCmp('fecNotificacion').getValue();
//    						obj['fecNotificacion'] = Ext.Date.format(fecha, 'd/m/Y')+" "+Ext.getCmp('horNotificacion').getValue()+":00";
		    				
		    				
		    				var form = Ext.getCmp('formIncidencia').getForm();
		    				
		    				if(form.isValid()){
		    					console.log("El formulario es valido");
		    					var thisWin = Ext.getCmp(idWin+'win-form-registro');
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
//		    					if(incidencia.coordenadas){
//		    						incidencia.latitud = incidencia.coordenadas.split(' ')[0];
//		    						incidencia.longitud = incidencia.coordenadas.split(' ')[1];
//		    					}
		    					console.log("incidencia");
		    					console.log(incidencia);
		    					
//								incidencia.desEstadoVoxiva = Ext.getCmp('cbxEstado').getRawValue();
//								incidencia.desSubEstadoVoxiva = Ext.getCmp('cbxSubEstado').getRawValue();
//								incidencia.desEstadoCalifVoxiva = Ext.getCmp('cbxEstadosCalif').getRawValue();
//								incidencia.direccionFinal = Ext.getCmp('tipoCasoVoxiva').getRawValue();
		    					
		    					console.log("Ext.getCmp('idIncidencia').getValue(): "+Ext.getCmp('idIncidencia').getValue());
		    					console.log("Ext.getCmp('txtUsrModifica').getValue(): "+Ext.getCmp('txtUsrModifica').getValue());
		    					if(Ext.getCmp('idIncidencia').getValue()!=null){ incidencia.idIncidencia = Ext.getCmp('idIncidencia').getValue(); }
		    					
		    					if (Ext.getCmp('txtUsrRegistra').getValue()!=null && Ext.getCmp('txtUsrRegistra').getValue()!=""){ incidencia.usrModifica = DES_LOGIN; }
		    					else { incidencia.usrRegistra = DES_LOGIN; }
		    					
		    					console.log("incidencia.usrRegistra: "+incidencia.usrRegistra);
		    					console.log("incidencia.usrModifica: "+incidencia.usrModifica);
		    					
		    					if(Ext.getCmp('cbxMedio').getValue()!=null){ 
		    						incidencia.codMedio = Ext.getCmp('cbxMedio').getValue();
		    						incidencia.descMedio = Ext.getCmp('cbxMedio').getRawValue();
		    					}
		    					if(Ext.getCmp('cbxSituacion').getValue()!=null){ 
		    						incidencia.codSituacion = Ext.getCmp('cbxSituacion').getValue();
		    						incidencia.descSituacion = Ext.getCmp('cbxSituacion').getRawValue();
//		    						var val = Ext.getCmp('cbxSituacion').getValue();
//		    						if (val==870 || val==871) {
//		    							Ext.getCmp('fecEvento').setAllowBlank(false);
//		    							Ext.getCmp('horEvento').setAllowBlank(false);
//		    						}
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
		    					
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.codGeometria = Ext.getCmp('').getValue(); }
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.codTpoVia = Ext.getCmp('').getValue(); }
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.descTpoVia = Ext.getCmp('').getValue(); }
		    					if(Ext.getCmp('txtDireccion').getValue()!=null){ incidencia.descVia = Ext.getCmp('txtDireccion').getValue(); }
		    					if(Ext.getCmp('txtCuadra').getValue()!=null){ incidencia.cdra = Ext.getCmp('txtCuadra').getValue(); }
		    					if(Ext.getCmp('txtDpto').getValue()!=null){ incidencia.dpto = Ext.getCmp('txtDpto').getValue(); }
		    					if(Ext.getCmp('txtZona').getValue()!=null){ incidencia.zona = Ext.getCmp('txtZona').getValue(); }
		    					if(Ext.getCmp('txtSubZona').getValue()!=null){ incidencia.subzona = Ext.getCmp('txtSubZona').getValue(); }
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
//		    						var fecha = Ext.getCmp('fecAtencion').getValue().toLocaleDateString().split('/');
//			    					var hora = Ext.getCmp('horAtencion').getValue().split(':');
//		    						incidencia.fecNotificacion = new Date(fecha[2], parseInt(fecha[1], 10) - 1, fecha[0], hora[0], hora[1]); 
		    					}
//		    					
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.fecEvento = Ext.getCmp('').getValue(); }
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.fecAtencion = Ext.getCmp('').getValue(); }
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.fecCierre = Ext.getCmp('').getValue(); }
		    					if(Ext.getCmp('cbxSeveridad').getValue()!=null){ incidencia.codSeveridad = Ext.getCmp('cbxSeveridad').getValue(); }
		    					if(Ext.getCmp('cbxEstado').getValue()!=null){ incidencia.codEstado = Ext.getCmp('cbxEstado').getValue(); }
		    					if(Ext.getCmp('cbxSubEstado').getValue()!=null){ incidencia.codSubestado = Ext.getCmp('cbxSubEstado').getValue(); }
		    					if(Ext.getCmp('cbxModalidad').getValue()!=null){ incidencia.codModalidad = Ext.getCmp('cbxModalidad').getValue(); }
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.codMotivo = Ext.getCmp('').getValue(); }
		    					if(Ext.getCmp('txtMotivo').getValue()!=null){ incidencia.descMotivo = Ext.getCmp('txtMotivo').getValue(); }
//		    					if(Ext.getCmp('cbxTpoHallazgo').getValue()!=null){ incidencia.tpoHallazgo = Ext.getCmp('cbxTpoHallazgo').getValue(); }
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.tpoSexo = Ext.getCmp('').getValue(); }
		    					
//		    					if(Ext.getCmp('').getValue()!=null){ incidencia.estReg = Ext.getCmp('').getValue(); }
		    					
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
		    					
		    					
		    					console.log("incidencia a registrar: ->");
		    					console.log(incidencia);
		    					
		    					Util.runAjax({
//									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-form-mapa',
									url:PATH_PROYECTO_BASE+'mapa-incidencia/registrar-incidencia',
//									async : true,
									async : false,
									method : 'POST',
									params:incidencia,
									timeout:1000,
									success:function(http){
										var response = Ext.decode(http.responseText);
										thisWin.body.unmask();
										Ext.Msg.alert('Message', 'Incidencia registrada');
										if($("#map-canvas").length){
					    					console.log("existe DIV para map-canvas");
	    									MapaIncidencias.ajaxVoxiva();
					    				}else{
					    					console.log("no existe DIV para map-canvas");
					    					IncidenciaService.buscar2();
					    				}
//										thisWin.close();
										thisWin.destroy();
										
									}
								});
		    					
		    					
//		    					setTimeout(() => {
//									
//								}, 2000);
		    				} else {
		    					console.log("El formulario NO es valido");
		    					Ext.Msg.alert('Formulario incompleto','Algunos campos son obligatorios o no tienen un formato especifico', Ext.emptyFn);
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
		
	},
	
	
	
openFormBitacora:function(options){
	
		
		options = options || {};
		
		
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
	    		height: 130,
	    		id: 'txtDescripcion',
	    		padding: '',
	    		width: 580,
	    		fieldLabel: 'Respuesta',
	    		labelAlign: 'top',
	    		enforceMaxLength: true,
	    		allowBlank: false,
	    		fieldStyle: 'text-transform:uppercase',
			    maxLength: 2000,
			    emptyText: 'Describa la respuesta o accion de seguimiento'
    		};

		var txtUsuario = {
	    		xtype: 'textfield',
				id: 'txtUsuario',
				width: 0,
				fieldLabel: 'Usuario',
				hidden: true,
				editable: false,
				labelAlign: 'top',
				fieldStyle: 'text-transform:uppercase',
				labelWidth: 0
			};
		
		// MODELS Y STORES PARA LOS GRID-PANELS
		
//		var bitacoraModel = Ext.create('Ext.data.Model', {
//			id: 'BitacoraModel',
//			fields : [ 
//				{name: 'idBitacora',  type: 'int'},
//				{name: 'idIncidencia',  type: 'int'},
//				{name: 'fecha',  type: 'date'},
//				{name: 'descripcion',  type: 'string'},
//				{name: 'usuario',  type: 'string'},
//				{name: 'estReg',  type: 'string'},
//				{
//			       	name:'strFecha',
//			       	mapping : 'fecha',
//			       	convert : function(v){
//			       		if(v){ return Ext.Date.format(new Date(v), 'd/m/Y h:i:s A'); }
//			       		else{ return ""; }
//			       	}
//				}
//			]
//		});
		
		var bitacoraStore = Ext.create('Ext.data.Store', {
			    autoLoad : true,
				model : 'BitacoraModel',
				extraParams:{ cod: '-1' },
				//pageSize: 20,
				proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'mapa-incidencia/get-bitacora-by-incidencia',
					async: true,
//					async: false,
					actionMethods : 'POST',
					reader : {
						root : 'data'
					},
					simpleSortMode : true,
					timeout:99999999
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
                dataIndex: 'strFecha',
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
//		    height: 600,
		    width: 600,
		    modal:true,
		    closeAction: 'destroy',
//		    scrollable: true,
		    id: idWin+'win-form-bitacora',
		    layout: 'form',
		    bodyStyle:'padding:10px 10px 0px 10px;',
			listeners : {

				afterrender : function() {

					console.log("options.codIncidencia = "+ options.codIncidencia);
					var cod = options.codIncidencia;
					console.log("cod");
					console.log(cod);
					var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
					thisWin.body.mask('Obteniendo información...');
					console.log("obteniendo la incidencia...");
					Util.runAjax({
								url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-bitacora-by-incidencia',
								// url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
								async : true,
//								async : false,
								method : 'GET',
								params : {
									cod : cod
								},
								timeout : 1000,
								success : function(http) {
									try {
										var response = Ext.decode(http.responseText);
										var data = response.data;

										console.log("data (datos de carga): ");
										console.log(data);
										
										Ext.getCmp('idIncidenciaX').setValue(cod);
										Ext.getCmp('tbBitacora').store.loadData(data);
										
										console.log(Ext.getCmp('tbBitacora').store.data);
										console.log("Carga exitosa de la bitacora");

										thisWin.body.unmask();

									} catch (e) {
										// thisWin.close();
										thisWin.destroy();
										Ext.id();
									}
								}
							});

				}
			},
			items : [
					{
						xtype: 'gridpanel',
						id: 'tbBitacora',
						// width: 900,
						height: 280,
						store: bitacoraStore,
						header: false,
						autoLoad: true,
						bodyBorder: true,
						border: true,
						overflowX: 'scroll',
					    autoScroll: true,
						title: 'Bitacora',
						columns: [ 
							{ text: 'Id',  dataIndex: 'idBitacora', hidden:true, width: 0 },
							{ text: 'N° Incid',  dataIndex: 'idIncidencia', hidden:true, width: 0 },
							{ text: 'Fecha y hora',  dataIndex: 'fecha', hidden:false, width: 160 },
							{ text: 'Descripción',  dataIndex: 'descripcion', hidden:false, width: 380 },
							{ text: 'Usuario',  dataIndex: 'usuario', hidden:true, width: 180 },
							{ text: 'Estado',  dataIndex: 'estReg', hidden:true, width: 0 }
						],
						
						viewConfig: {
							height: 280,
							margin : '',
//							maxHeight : 0,
//							minHeight : 140,
							stripeRows : false
						}
					},
					{
						xtype : 'form',
						// height: 148,
						layout : 'form',
						id : idWin+'formBitacora',
						// bodyPadding: 10,
						header : false,
						title : 'Respuesta nueva',
						items : [ 
							idIncidenciaX, 
							txtDescripcion 
						]
					} 
			],
			buttons : [
					{
						text : 'Grabar',
						handler : function() {
							var form = Ext.getCmp(idWin+'formBitacora').getForm();
							if (form.isValid()) {
								console.log("El formulario es valido");
								var thisWin = Ext.getCmp(idWin+ 'win-form-bitacora');
//								thisWin.body.mask('Espere un momento por favor.');
								
								var respuesta = new Object();

								console.log("DES_LOGIN: "+ DES_LOGIN);
								respuesta.idIncidencia = Ext.getCmp('idIncidenciaX').getValue();
								respuesta.usuario = DES_LOGIN;
								respuesta.descripcion = Ext.getCmp('txtDescripcion').getValue();

								console.log("respuesta");
								console.log(respuesta);
								
//								var params = {};
//								if(!Ext.isEmpty(Ext.getCmp('idIncidenciaX').getValue())){ params.idIncidencia	= Ext.getCmp('idIncidenciaX').getValue(); }
//								if(!Ext.isEmpty(Ext.getCmp('txtDescripcion').getValue())){ params.descripcion	= Ext.getCmp('txtDescripcion').getValue(); }
//								console.log("params (1)");
//								console.log(params);
								
								Util.runAjax({
										url : PATH_PROYECTO_BASE+ 'mapa-incidencia/actualizar-bitacora',
										async : false,
										method : 'POST',
										params : respuesta,
										timeout : 1000,
										success : function(http) {
											thisWin.body.unmask();
											Ext.Msg.alert('Message','Respuesta registrada');
										}
								});
								
								var gridBitacora = Ext.getCmp('tbBitacora');
								var store = gridBitacora.store;
								store.proxy.extraParams = {cod: Ext.getCmp('idIncidenciaX').getValue()};
								//store.loadData(respuesta.idIncidencia);
								store.load();
								
//								Util.runAjax({
//										url : PATH_PROYECTO_BASE+ 'mapa-incidencia/get-bitacora-by-incidencia',
////										 url:PATH_PROYECTO_BASE+'mapa-incidencia/get-geometria-by-id-incidencia',
//										async : true,
////										async : false,
//										method : 'GET',
//										params : {
//											cod : respuesta.idIncidencia
//										},
//										timeout : 1000,
//										success : function(http) {}
//								});
								
//								var response = Ext.decode(http.responseText);
//								var gridBitacora = Ext.getCmp('tbBitacora');
//								var store = gridBitacora.store;
//								store.proxy.extraParams = Ext.getCmp('idIncidenciaX').getValue();
//								
//								console.log("Ext.getCmp('idIncidenciaX').getValue()");
//								console.log(Ext.getCmp('idIncidenciaX').getValue());
//								store.load();
								

							} else {
								console.log("Respuesta vacía");
								Ext.Msg.alert('¡No puede registrar una respuesta vacía!', Ext.emptyFn);
							}

						}
					},
					{
						text : 'Cerrar',
						handler : function() {
							// Ext.getCmp(idWin+'win-form-registro').close();
							Ext.getCmp(idWin+ 'win-form-bitacora').destroy();
						}
					} ]

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

