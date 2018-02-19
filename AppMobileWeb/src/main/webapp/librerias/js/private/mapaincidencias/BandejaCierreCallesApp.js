Ext.Loader.setConfig({
			enabled : true
		});

Ext.application({
	name : 'MOBILEAPP',
	autoCreateViewport : false,
	appFolder : PATH_PROYECTO_BASE+'js/private/mapaincidencias/',
	controllers : ['CierreCalleController'],
	launch : function() {
		
		console.log('Is Consulta->'+IS_CONSULTA);
		
		var height=($(window).height()-110);
		
		if(IS_CONSULTA)
		{
			
			
			console.log(Ext.getBody().getWidth());
			$('#busqueda-responsive').show();
			
			$(window).resize(function(){
				if(Ext.getCmp('busqueda-consulta')){
				
					Ext.getCmp('busqueda-consulta').setWidth($('#busqueda-responsive').width()-15);
					
					Ext.getCmp('grid-cierre-calles').setWidth($('#busqueda-responsive').width()+34);
					
				}
			});
			
			Ext.widget('panel',{
					renderTo: 'busqueda-responsive',
					id:'busqueda-consulta',
					width:$('#busqueda-responsive').width()-15,
					layout:'column',
					items:[
							
									{
										xtype : 'textfield',
										emptyText : 'Tipo de Evento',
										id : 'b-tipo-evento',
										style:'margin:0px 10px 10px 0px;',
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
										style:'margin:0px 10px 10px 0px;',
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
										style:'margin:0px 10px 10px 0px;',
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
										style:'margin:0px 10px 10px 0px;',
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
										style:'margin:0px 10px 10px 0px;',
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
										xtype:'button',
										style:'margin:0px 10px 0px 0px;background:#f5f5f5;border:1px #ccc solid;',
										handler : function() {
											CierreCalle.service.loadGrid();
										}
									}
									,
									{
										iconCls : 'exportExcel',
										text:'Exportar',
										xtype:'button',
										cls:'btn-exportar-tool',
										style:'background:#f5f5f5;border:1px #ccc solid;color:#333 !important',
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
									
										
					]
			});
			
		}
		
		
		
		//busqueda-responsive
		
		
		
		
        Ext.widget('cierreCalleGrid', {
											id:'grid-cierre-calles',
								   		 	height: height,
										    width:(IS_CONSULTA?$('#busqueda-responsive').width()+15:$('.bandeja-container-sesion').width()),
										    style:'border:1px #e1e1e1 solid;',
										    renderTo: 'content-grid',
											    extraParams:{
											    	tipoIncidencia:8766
											    }
											}
									);     
        
        $(window).resize(function(){
        	if(Ext.getCmp('grid-auditoria')){
        		Ext.getCmp('grid-auditoria').setWidth($('.bandeja-container-sesion').width());
        	}
        });
				
		
	}
});