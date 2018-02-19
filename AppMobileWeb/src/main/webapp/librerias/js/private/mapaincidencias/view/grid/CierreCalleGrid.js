Ext.define(
				"MOBILEAPP.view.grid.CierreCalleGrid",
				{
					extend : "Ext.grid.Panel",
					alias : 'widget.cierreCalleGrid',
					reconfigurarColumnas : function(store, columns) {
						var me = this;
						if (me.lockable) {
							me.reconfigureLockable(store, columns);
							return;
						}

						if (columns) {
							me.headerCt.removeAll();
							me.headerCt.add(columns);
						}

						if (store) {
							store = Ext.StoreManager.lookup(store);
							me.bindStore(store);
						} else {
							me.getView().refresh();
						}
					},
					getColumnas : function() {
						var columnas = new Array();

						var me = this;

						function styleRow(v) {
							return (v ? v : '');
						}
						
						function styleRowDirCardinal(v) {
							var map = new Object();
							map["NORTH"] = "NORTE";
							map["SOUTH"] = "SUR";
							map["EAST"] = "ESTE";
							map["WEST"] = "OESTE";
							map["NORTH_WEST"] = "NOR-OESTE";
							map["SOUTH_WEST"] = "SUR-OESTE";
							map["NORTH_EAST"] = "NOR-ESTE";
							map["SOUTH_EAST"] = "SUR-ESTE";
							map["BOTH_DIRECTIONS"] = "AMBAS DIRECCIONES";
							
							return (map[v] ? map[v] : '');
						}
						
						

						function styleRowFecha(v) {
							return (v ? Ext.Date.format(new Date(v), 'd/m/Y h:i:s A')
									: '');
						}

						function styleRowFormatFecha(v) {

							return (v ? Ext.Date.format(new Date(v), 'd/m/Y')
									: '');
						}

						function rowEstado(v) {
							var estado = '';

							if (v == 'S') {
								estado = '<span class="text-info"><b>Si</b></span>';
							} else {
								if (v == 'N') {
									estado = '<span class="text-danger"><b>No</b></span>';
								}
							}

							return estado;
						}

						function styleRowDocumentoFinal(v, a, r) {

							var data = r.data;

							if(Ext.isEmpty(data.urlFoto)){
								return '';
							}
							
							return '<a href="/'
									+ data.urlFoto
									+ '" class="btn btn-default" target="_blank"><span class="glyphicon glyphicon-picture"></span></a>';
						}
						
						function renderTipoEvento(v,a,r){
							return v+(r.data.tipoEvento == 8749?(r.data.tipoCierre=='T'?' <span style="color:red;">(Cierre Total)</span>':' <span style="color:green;">(Cierre Parcial)</span>'):'');
							
						}

						columnas.push({
							header : "ID",
							dataIndex : 'idIncidencia',
							width : 60,
							hidden:true,
							renderer : styleRow
						});
						
						
						columnas.push({
							header : "Tipo de Evento",
							dataIndex : 'nombreTipoEvento',
							width : 180,
							renderer : renderTipoEvento
						});
						
						
						columnas.push({
							header : "Calles",
							dataIndex : 'desCallles',
							flex : 1,
							renderer : styleRow
						});
						
						
						columnas.push({
							header : "Descripción",
							dataIndex : 'descripcion',
							flex : 1,
							renderer : styleRow
						});

//						columnas.push({
//							header : "Dirección Cardinal",
//							dataIndex : 'direccionFinal',
//							width : 150,
//							renderer : styleRowDirCardinal
//						});
						

						columnas.push({
							header : "Inicio",
							dataIndex : 'fecHoraInicio',
							width : 180,
							renderer : styleRowFecha
						});
						
						columnas.push({
							header : "Fin",
							dataIndex : 'fecHoraFin',
							width : 180,
							renderer : styleRowFecha
						});

						if(IS_CONSULTA){
						
								columnas.push({
							            xtype:'actioncolumn',
							       		width:50,
							            align:'center',
							            items: [{
							            	
							                icon: PATH_PROYECTO_BASE+'images/map_icon.png',
							                tooltip: 'Ver Mapa',
							                handler: function(grid, rowIndex, colIndex) {
							                    var rec = grid.getStore().getAt(rowIndex);
							                    
							                    var strPuntos = [];
							           							                    
							                    Ext.each(rec.data.detalleGeometria,function(item){
														var str = item.geometria.split(' ')[1]+' '+item.geometria.split(' ')[0]+'_-_-_'+item.desdireccion;
															strPuntos.push(str);
														});
							                   																		
							                    Ext.create('Ext.window.Window', {
												    title: 'Ubicación Georeferencial',
												    height: (IS_CONSULTA?410:500),
												    width: (IS_CONSULTA?720:850),
												    modal:true,
												    id:'win-panel-mapa',
												    layout: 'fit',
												    items: {  
												        xtype: 'panel',
												        border: false,
												        html:'<iframe style="width:100%;height:100%;" scrolling="no" frameborder="0" src="'+PATH_PROYECTO_BASE+'cierre-calles/view-mapa-consulta?idIncidencia='+rec.data.idIncidencia+'&puntos='+strPuntos.join('_______')+'"></iframe>'
												      
												    }
												}).show();
							                    
							                }
							            }]
							        });
							
						
						}

						return columnas;

					},

					initComponent : function() {

						var me = this;

						this.textMask = 'Obteniendo Registros';

						var store = Ext.getStore('CierreCallesStore');

						store.proxy.extraParams = this.extraParams || {};
						store.proxy.url = this.url
								|| PATH_PROYECTO_BASE+'mapa-incidencia/incidencias-list';
						this.store = store;
						
						store.on('load',function(){
							if(Ext.getCmp('btnEditarCierreCalle')){
								Ext.getCmp('btnEditarCierreCalle').setDisabled(true);
							}
							
							if(Ext.getCmp('btnEliminarCierreCalle')){
								Ext.getCmp('btnEliminarCierreCalle').setDisabled(true);
							}
						});
						
						
						var hideButons = IS_CONSULTA;
						
						this.columns = this.getColumnas();

						if(!IS_CONSULTA){
						this.dockedItems = {
							xtype : 'toolbar',
							items : [
									{
										xtype : 'textfield',
										emptyText : 'Tipo de Evento',
										id : 'b-tipo-evento',
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													CierreCalle.service.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'textfield',
										emptyText : 'Descripción',
										id : 'b-descripcion',
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													CierreCalle.service.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'textfield',
										emptyText : 'Calles',
										id : 'b-calles',
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													CierreCalle.service.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'datefield',
										emptyText : 'Fecha Inicio',
										id : 'b-fecIni',
										width:130,
										listeners : {
											change : function(f) {
												if (f.getValue()) {
													Ext.getCmp('b-fecFin').setMinValue(f.getValue());
												}
												Ext.getCmp('b-fecFin').reset();
											},
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													CierreCalle.service.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'datefield',
										emptyText : 'Fecha Fin',
										id : 'b-fecFin',
										width:130,
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													CierreCalle.service.loadGrid();
												}
											}
										}
									},
									{
										iconCls : 'btnBuscarSmall',
										handler : function() {
											CierreCalle.service.loadGrid();
										}
									}
									,
									{
										iconCls : 'exportExcel',
										text:'Exportar',
//										hidden:true,
										handler : function() {
											
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
															
										
										$.each(params,function(name,value){
											$('#'+name).val(value);
										});
											
											
										document.getElementById('form_exportar_excel').submit();	
											
											
										}
									}
									,
									'->'
									,
									{
										iconCls : 'btnAddSmall',
										text:'Nuevo',
										hidden:hideButons,
										href:PATH_PROYECTO_BASE+'cierre-calles/registro?token=6df112b7e941caffe79bd04f788d05e6',
										hrefTarget:'_self',
										handler : function() {
											CierreCalle.service.loadGrid();
										}
									}
									,
									{
										iconCls : 'btnEditSmall',
										text:'Editar',
										hidden:hideButons,
										id:'btnEditarCierreCalle',
										hrefTarget:'_self',
										disabled:true,
										handler : function() {
											//CierreCalle.service.loadGrid();
										}
									}
									,
									{
										iconCls : 'btnRemovemall',
										text:'Eliminar',
										hidden:hideButons,
										id:'btnEliminarCierreCalle',
										disabled:true,
										handler : function() {
											CierreCalle.service.anularIncidencia();
										}
									}
										]
						};
						
					}

						this.bbar = Ext.create('Ext.PagingToolbar', {
							store : store,
							displayInfo : true,
							displayMsg : 'Mostrando {0} - {1} de {2}',
							emptyMsg : "No se Encontraron Registros"
						});

						store.load();

						this.callParent(arguments);

					}
				});
