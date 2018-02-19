Ext.ns('AuditoriaPeatonalService');
AuditoriaPeatonalService = {
	loadGrid:function(){
			var objParametros = Ext.urlDecode(location.search.substr(1));
			
			var params = {};
			if(!Ext.isEmpty(Ext.getCmp('b-calle').getValue())){
				params.nomVia = Ext.getCmp('b-calle').getValue();
			}
			
			if(!Ext.isEmpty(Ext.getCmp('b-categoria').getValue())){
				params.desCategoria = Ext.getCmp('b-categoria').getValue();
			}
			
			if(!Ext.isEmpty(Ext.getCmp('b-cuadra1').getValue())){
				params.cuadraIni = Ext.getCmp('b-cuadra1').getValue();
			}
			
			if(!Ext.isEmpty(Ext.getCmp('b-cuadra2').getValue())){
				params.cuadraFin = Ext.getCmp('b-cuadra2').getValue();
			}
			
			if(!Ext.isEmpty(Ext.getCmp('b-fecIni').getValue()) && Ext.getCmp('b-fecIni').isValid()){
				params.strFecIni = Ext.Date.format(Ext.getCmp('b-fecIni').getValue(), 'Y-m-d');
			}
			
			if(!Ext.isEmpty(Ext.getCmp('b-fecFin').getValue()) && Ext.getCmp('b-fecFin').isValid()){
				params.strFecFin = Ext.Date.format(Ext.getCmp('b-fecFin').getValue(), 'Y-m-d');
			}
			
			
			
			if(Ext.getCmp('b-cuadra1').isValid() && Ext.getCmp('b-cuadra2').isValid()
				&& Ext.getCmp('b-fecIni').isValid() && Ext.getCmp('b-fecFin').isValid()){

					Ext.getCmp('grid-auditoria').store.proxy.extraParams = params;
					Ext.getCmp('grid-auditoria').store.reload();
			
			}
			
			
		}
};