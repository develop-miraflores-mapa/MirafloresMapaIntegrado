Ext.define('MOBILEAPP.store.AuditoriaPeatonalStore', {
	extend : 'Ext.data.Store',
	pageSize : 20,
	autoLoad : false,
	model : 'MOBILEAPP.model.AuditoriaPeatonalModel',
	proxy : {
		type : 'ajax',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			totalProperty : 'count'
		},
		simpleSortMode : true
		,timeout:99999999
	}
});