var waitingDialog = waitingDialog
		|| (function($) {
			'use strict';

			// Creating modal dialog's DOM
			var $dialog = $('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">'
					+ '<div class="modal-dialog modal-m">'
					+ '<div class="modal-content">'
					+ '<div class="modal-header"><h3 style="margin:0;"></h3></div>'
					+ '<div class="modal-body">'
					+ '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>'
					+ '</div>' + '</div></div></div>');

			return {
				/**
				 * Opens our dialog
				 * 
				 * @param message
				 *            Custom message
				 * @param options
				 *            Custom options: options.dialogSize - bootstrap
				 *            postfix for dialog size, e.g. "sm", "m";
				 *            options.progressType - bootstrap postfix for
				 *            progress bar type, e.g. "success", "warning".
				 */
				show : function(message, options) {
					// Assigning defaults
					if (typeof options === 'undefined') {
						options = {};
					}
					if (typeof message === 'undefined') {
						message = 'Loading';
					}
					var settings = $.extend({
						dialogSize : 'm',
						progressType : '',
						onHide : null
					// This callback runs after the dialog was hidden
					}, options);

					// Configuring dialog
					$dialog.find('.modal-dialog').attr('class', 'modal-dialog')
							.addClass('modal-' + settings.dialogSize);
					$dialog.find('.progress-bar').attr('class', 'progress-bar');
					if (settings.progressType) {
						$dialog.find('.progress-bar').addClass(
								'progress-bar-' + settings.progressType);
					}
					$dialog.find('h3').text(message);
					// Adding callbacks
					if (typeof settings.onHide === 'function') {
						$dialog.off('hidden.bs.modal').on('hidden.bs.modal',
								function(e) {
									settings.onHide.call($dialog);
								});
					}
					// Opening dialog
					$dialog.modal();
				},
				/**
				 * Closes dialog
				 */
				hide : function() {
					$dialog.modal('hide');
				}
			};

		})(jQuery);

var objResultados = [];

var recordSelected = null;

function getRecord(value) {
	if (objResultados.length == 0) {
		return null;
	}

	var record = null;
	for (var i = 0; i < objResultados.length; i++) {
		if (value == objResultados[i]['DES_NOM_COMPLETO']) {
			record = objResultados[i];
		}
	}
	return record;
}

$(function() {
	
	
	$.get( PATH_PROYECTO_BASE+"auditoria-peatonal/get-catalogo?idGrupo=319", function( resp ) {
		
			$.each(resp.data, function(a, b) {
				$('#categoria').append(
						'<option value="' + b.c + '" >' + b.n.toUpperCase()
								+ '</option>');
			});

			
		});
	
	$("#numCuadra").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });

	for (var i = 1; i < 40; i++) {
		$('#subZona').append('<option value="' + i + '" >' + i + '</option>');
	}

//	$(document).ready(function(){
		
//	});

	
	function showError(msg){
		swal({
						title : "",
						text : msg,
						type : "error",
						showCancelButton : false,
						confirmButtonClass : 'btn-error',
						confirmButtonText : 'Aceptar'
			});
	}

	$("#cbxCalles").autocomplete(
			{
				minLength : 3,
				autoselect : true,
				showHint : false,
				source : [ function(q, add) {

					$.getJSON(
							PATH_PROYECTO_BASE+"auditoria-peatonal/listar-calles-miraflores?query="
									+ encodeURIComponent(q), function(resp) {
								var arr = new Array();
								objResultados = resp.data;
								recordSelected = null;
								$.each(resp.data, function(i, o) {
									arr.push(o['DES_NOM_COMPLETO']);
								});

								add(arr);
							});
				} ]

			}).on('selected.xdsoft', function(e, value) {
		recordSelected = getRecord(value);

		//$('#form-registro').bootstrapValidator('revalidateField', 'nomVia');

	});
	
	$('#btn-enviar').click(function(){
		
		
		if($('#cbxCalles').val().length == 0){
			showError('Ingrese el nombre de la calle.');
			return;
		}
		
		if (!recordSelected) {
			showError('Ha ingresado una calle incorecta.');
			return;
		}
		
		if ($('#numCuadra').val().length == 0) {
			showError('Ingrese el número de cuadra.');
			return;
		}
		
		if($('#lado').val().length == 0){
		
			showError('Eliga el lado.');
			return;
			
		}
		
		if($('#subZona').val().length == 0){
		
			showError('Seleccione la Zona.');
			return;
			
		}
		
		if($('#categoria').val().length == 0){
		
			showError('Seleccione un problema.');
			return;
			
		}
		
		if($('#descripcion').val().length == 0){
		
			showError('Ingrese una breve descripción del problema.');
			return;
			
		}
		
		if(!$('input[name="solucionRapida"]').is(':checked')){
		
			showError('Indique si el problema es de rapida solución.');
			return;
			
		}
	
		// Get the form instance
		var $form = $('#form-registro');

		// Get the BootstrapValidator instance
		var bv = $form.data('bootstrapValidator');

		var predata = $form.serialize().split('&');

		var fd = new FormData();
		$.each(predata, function(a, b) {

			if (b.split('=')[0] != 'nomVia' && b.split('=')[0] != 'descripcion') {
				fd.append(b.split('=')[0], b.split('=')[1]);
			}

		});
		
		

		$.each($('#foto')[0].files, function(i, file) {
			fd.append('foto', file);
		});

		fd.append('nomVia', recordSelected['DES_NOM_COMPLETO']);

		fd.append('codVia', recordSelected['CALL']);
		
		fd.append('descripcion', $('#descripcion').val());

		waitingDialog.show('Registrando...');

		$.ajax({
			url : PATH_PROYECTO_BASE+"auditoria-peatonal/registrar-formulario",
			contentType : "multipart/form-data; charset=UTF-8",
			data : fd,
			cache : false,
			contentType : false,
			processData : false,
			type : 'POST',
			success : function(data) {

				waitingDialog.hide();

				if (data.success) {
					swal({
						title : "",
						text : "Los datos se registraron de forma correcta.",
						type : "success",
						showCancelButton : false,
						confirmButtonClass : 'btn-success',
						confirmButtonText : 'Aceptar'
					});
				
				    $('select[name=subZona]').val(0);
				    $('select[name=lado]').val(0);
				    $('select[name=categoria]').val(0);
				    $('.selectpicker').selectpicker('refresh');
				
				    $('#form-registro')[0].reset();
				    $('#form-registro').bootstrapValidator('resetForm', true);
					
					
				
					
				} else {

					$('#btn-enviar').removeAttr('disabled');

					swal({
						title : "",
						text : data.message,
						type : "error",
						showCancelButton : false,
						confirmButtonClass : 'btn-error',
						confirmButtonText : 'Aceptar'
					});
				}

			},
			error : function(xhr, ajaxOptions, thrownError) {
				swal({
					title : "",
					text : 'Error de conexion.',
					type : "error",
					showCancelButton : false,
					confirmButtonClass : 'btn-error',
					confirmButtonText : 'Aceptar'
				});
			}
		});

		
	});

	
});