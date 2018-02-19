Ext.define('MOBILEAPP.store.CierreCallesStore', {
	extend : 'Ext.data.Store',
	pageSize : 20,
	autoLoad : false,
	model : 'MOBILEAPP.model.CierreCalleModel',
	proxy : {
		type : 'ajax',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			totalProperty : 'total'
		},
		simpleSortMode : true
		,timeout:99999999
	}
});