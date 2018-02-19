Ext.ns('PreRegistroService');

PreRegistroService = {

	init:function(){
		this.buildGridUsuario();
	}
	,
	buscar:function(){
	
		var grid = Ext.getCmp('grid-preregistro');
		var store = grid.store;
		

//txt-direccion
		
		var params = {};
		
		if(!Ext.isEmpty(Ext.getCmp('txt-expediente').getValue())){
			params.numExpediente = Ext.getCmp('txt-expediente').getValue();
		}
		
//		if(!Ext.isEmpty(Ext.getCmp('txt-cuadra').getValue())){
//			params.cuadra = Ext.getCmp('txt-cuadra').getValue();
//		}
		
		if(!Ext.isEmpty(Ext.getCmp('txt-empresa').getValue())){
			params.empresa = Ext.getCmp('txt-empresa').getValue();
		}
		
		if(!Ext.isEmpty(Ext.getCmp('txt-direccion').getValue())){
			params.direccion = Ext.getCmp('txt-direccion').getValue();
		}
		
		store.proxy.extraParams = params;
//		store.proxy.extraParams.desUsuario = DES_LOGIN;
		
		store.load();
		
		
	},
	buildGridUsuario:function(){
		
			Ext.define('Registro', {
			     extend: 'Ext.data.Model',
			     fields: ['id','direccion', 'cuadra', 'motivo','empresa','fecRegistro','ipRegistro','numExpediente','anioExpediente',{
			     
			     	name:'desMotivo',
			     	mapping:'empresa',
			     	convert:function(a){
//			     	
			     		return 'TRABAJOS DE EMERGENCIA DE :'+a;
			     	}
			     	
			     }]
			 });
			 
			 
			var store = Ext.create('Ext.data.Store', {
					autoLoad : true,
					model : 'Registro',
					proxy : {
						type : 'ajax',
						url:PATH_PROYECTO_BASE+'mapa-incidencia/list-pre-registro-cierre-calle',
						actionMethods : 'POST',
//						extraParams:{
//						
//							desUsuario:DES_LOGIN
//						
//						}, 
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
			    title:'Pre-registro de cierre de calles',
			    id:'grid-preregistro',
			    border:true,
			    columns: [
			   		{ text: 'Expediente',  dataIndex: 'numExpediente' , width:140 },
//			   		{ text: 'Año',  dataIndex: 'anioExpediente' , width:70 },
			        { text: 'Dirección',  dataIndex: 'direccion' , flex:1  },
			        { text: 'Motivo',  dataIndex: 'desMotivo' , flex:1 },
			        {
							            xtype:'actioncolumn',
							       		width:50,
							            align:'center',
							            items: [{
							                icon: PATH_PROYECTO_BASE+'images/form_16.png',
							                tooltip: 'Eliminar',
							                handler: function(grid, rowIndex, colIndex) {
							                    var record = grid.getStore().getAt(rowIndex);
							                    window.location = PATH_PROYECTO_BASE+'mapa-incidencia/registro-atencion-rapida?idPreRegistro='+record.data.id
							                }
							            }]
			} 
							        
			    ],
			    dockedItems : {
			            xtype: 'toolbar',
			            items: [
			            {
			            	xtype:'textfield',
			            	emptyText:'Expediente',
			            	id:'txt-expediente',
			            	listeners:{
			            		specialkey : function(f, e) {
									if (e.getKey() == e.ENTER) {
										PreRegistroService.buscar();
									}
								}
			            	}
			            },
			            {
			            	xtype:'textfield',
			            	emptyText:'Dirección',
			            	id:'txt-direccion',
			            	listeners:{
			            		specialkey : function(f, e) {
									if (e.getKey() == e.ENTER) {
										PreRegistroService.buscar();
									}
								}
			            	}
			            },
			            
			            {
			            	xtype:'textfield',
			            	emptyText:'Empresa',
			            	id:'txt-empresa',
			            	listeners:{
			            		specialkey : function(f, e) {
									if (e.getKey() == e.ENTER) {
										PreRegistroService.buscar();
									}
								}
			            	}
			            	
			            },
			            {
	                    iconCls:'btnBuscarSmall'
	                    ,handler:function(){
		                		PreRegistroService.buscar();
		                    }	
		                }
			                    
			            ]
			        },
			    tools:[
					{
					    type:'refresh',
					  
					    callback: function(panel, tool, event) {
							PreRegistroService.buscar();				    	
					    }
					}],
			    height: $(window).height()-30,
			    width:$(window).width()-30
			 
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
			 
		
	}
	
}


window.onload = function(){

	PreRegistroService.init();
	
}
