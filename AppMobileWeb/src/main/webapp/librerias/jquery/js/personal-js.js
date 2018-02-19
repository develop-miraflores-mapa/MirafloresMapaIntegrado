$(document).ready(function() {
	loadBundles($.i18n.browserLang());
});

function loadBundles(lang) {
	$.i18n.properties({
		name : 'app_mensajes_web',
		path : '/',
		mode : 'both',
		language : lang,
		callback : function() {
		}
	});
}

function getMessage(key) {
	var valor = $.i18n.prop(key);
	return valor;
}