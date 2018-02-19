Ext.define('common.ComboBox', {
	extend : 'Ext.form.field.ComboBox',
	alias : 'widget.ComboGeneric',
	initComponent : function() {

		var me = this;
		
		Ext.define( me.model.nameModel ,{
		     extend: 'Ext.data.Model',
		     fields: me.model.fields
		 });

		 var store = Ext.create('Commons.StoreGeneric', {
		     model: me.model.nameModel,
		     proxy: {
		         type: 'ajax',
		         url: me.url,
		         reader: {
		             type: 'json',
		             root: me.root
		         }
		 		,extraParams: me.extraParams || {}
		     },
		     autoLoad: me.autoLoad
		 });
		 
	    me.store = store;
		 		
        this.callParent(arguments);
	}

});