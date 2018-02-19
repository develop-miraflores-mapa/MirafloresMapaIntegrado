Ext.Loader.setConfig({
			enabled : true
		});

Ext.application({
	name : 'MOBILEAPP',
	autoCreateViewport : false,
	appFolder : PATH_PROYECTO_BASE+'js/private/auditoriapeatonal/',
	controllers : ['AuditoriaPeatonalController'],
	launch : function() {
		
		var height=(parent.window?$(parent.window).height()-190:$(window).height()-120);
		
        Ext.widget('auditoriaPeatonalGrid', {
											id:'grid-auditoria',
								   		 	height: height,
										    width:$('.bandeja-container-sesion').width(),
										    style:'border:1px #e1e1e1 solid;',
										    renderTo: 'content-grid'
											}
									);     
        
        $(window).resize(function(){
        	if(Ext.getCmp('grid-auditoria')){
        		Ext.getCmp('grid-auditoria').setWidth($('.bandeja-container-sesion').width());
        	}
        });
				
		
	}
});