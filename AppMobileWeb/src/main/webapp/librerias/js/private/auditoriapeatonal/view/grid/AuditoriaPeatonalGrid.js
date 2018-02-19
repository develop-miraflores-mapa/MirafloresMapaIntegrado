Ext
		.define(
				"MOBILEAPP.view.grid.AuditoriaPeatonalGrid",
				{
					extend : "Ext.grid.Panel",
					alias : 'widget.auditoriaPeatonalGrid',
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

						function styleRowFecha(v) {
							return (v ? Ext.Date.format(new Date(v), 'd/m/Y')
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

						columnas.push({
							header : "Calle",
							dataIndex : 'nomVia',
							flex : 1,
							renderer : styleRow
						});
						columnas.push({
							header : "Cuadra",
							dataIndex : 'numCuadra',
							width : 80,
							readonly : true,
							renderer : styleRow
						});

						columnas.push({
							header : "Lado",
							dataIndex : 'lado',
							width : 110,
							readonly : true,
							renderer : styleRow
						});

						columnas.push({
							header : "Categoria",
							dataIndex : 'desCategoria',
							flex : 1,
							renderer : styleRow
						});

						columnas.push({
							header : "Zona",
							dataIndex : 'subZona',
							width : 80,
							renderer : styleRow
						});

						columnas.push({
							header : "Descripción",
							dataIndex : 'descripcion',
							cellWrap: true,
							flex : 1,
							renderer : styleRow
						});

						columnas.push({
							header : "Fec. Registro",
							dataIndex : 'fechaRegistra',
							width : 110,
							renderer : styleRowFecha
						});

						columnas.push({
							header : "Solución Rápida",
							dataIndex : 'solucionRapida',
							width : 120,
							align:'center',
							renderer : rowEstado
						});

						columnas.push({
							header : "Foto",
							dataIndex : 'urlFoto',
							width : 70,
							align : 'center',
							renderer : styleRowDocumentoFinal
						});

						return columnas;

					},

					initComponent : function() {

						var me = this;

						this.textMask = 'Obteniendo Registros';

						var store = Ext.getStore('AuditoriaPeatonalStore');

						store.proxy.extraParams = this.extraParams || {};
						store.proxy.url = this.url
								|| PATH_PROYECTO_BASE+'auditoria-peatonal/listar-auditorias-peatonales';
						this.store = store;
						this.columns = this.getColumnas();

						this.dockedItems = {
							xtype : 'toolbar',
							items : [
									{
										xtype : 'textfield',
										emptyText : 'Calle',
										id : 'b-calle',
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													AuditoriaPeatonalService.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'textfield',
										emptyText : 'Categoria',
										id : 'b-categoria',
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													AuditoriaPeatonalService.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'numberfield',
										emptyText : 'Cuadra Inicio',
										id : 'b-cuadra1',
										minValue:1,
										width:130,
										listeners : {
											change:function(f){
												if (f.getValue()) {
													Ext.getCmp('b-cuadra2').setMinValue(f.getValue());
												}
												Ext.getCmp('b-cuadra2').reset();
											},
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													AuditoriaPeatonalService.loadGrid();
												}
											}
										}
									},
									{
										xtype : 'numberfield',
										emptyText : 'Cuadra Fin',
										width:130,
										minValue:1,
										id : 'b-cuadra2',
										listeners : {
											specialkey : function(f, e) {
												if (e.getKey() == e.ENTER) {
													AuditoriaPeatonalService.loadGrid();
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
													AuditoriaPeatonalService.loadGrid();
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
													AuditoriaPeatonalService.loadGrid();
												}
											}
										}
									},
									{
										iconCls : 'btnBuscarSmall',
										handler : function() {
											AuditoriaPeatonalService.loadGrid();
										}
									}
										]
						};

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
