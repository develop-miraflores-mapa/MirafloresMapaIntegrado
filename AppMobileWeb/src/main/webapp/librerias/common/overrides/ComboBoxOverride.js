/**
 * Sobrescritura la objeto Ext.form.field.ComboBox.
 * Creado por @author <a href="jose.sanchez@miraflores.gob.pe">
 * Jose Sanchez</a> el 21/07/2015
 */
Ext.override(Ext.form.field.ComboBox, {
	beforequery:function (record) {
		console.log('Hace esto');
        record.query = new RegExp(record.query, 'i');
        record.forceAll = true;
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent(arguments);
        this.enableRegEx = true;
        this.on('beforequery',this.beforequery);
    }
});


