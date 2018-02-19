var MIDService = {

	objSelected:null,
	
	incidenciasVoxiva:[],
	
	changeEstado:function(options){
	
			options = options || {};
			
			$('#estado-vox').val('');
			if(MIDService.objSelected.estadoVoxiva){
				if(!options.noSetValueCalif){
	    			$('#estado-vox').val(MIDService.objSelected.estadoVoxiva);
				}
			}
		
			$('#sub-estado-vox').val('');
			
			try{
	    		 $('#estado-vox').selectpicker('destroy', true);
	    		 $('#sub-estado-vox').selectpicker('destroy', true);
	    		 
	    	}catch(e){
	    		
	    	}
	    	
	    	$("#estado-vox").attr('disabled','disabled');
	    	$("#sub-estado-vox").attr('disabled','disabled');
	    
			
			if($("#sub-tipo-caso option:selected").attr('data-enableEstado') && $("#sub-tipo-caso option:selected").attr('data-enableEstado') == '1'){
				$("#estado-vox").removeAttr('disabled');
			}else{
				$("#estado-vox").attr('disabled','disabled');
			}
			
				$('#formRegistrarIncidencia').bootstrapValidator('resetField', 'estadoVoxiva');
	    	    $('#formRegistrarIncidencia').bootstrapValidator('resetField', 'subEstadoVoxiva');
			
			$('#estado-vox').selectpicker({liveSearch:true});
			$('#sub-estado-vox').selectpicker({liveSearch:true});
		
	},
	
	getSubEstado:function(options){
	
		options = options || {};
		
		 	     $('#sub-estado-vox').selectpicker('destroy', true);
  	 		
			   	  $('#sub-estado-vox').find('option').remove();
	    		  $('#sub-estado-vox').append('<option value="">::ESCOJA::</option>');
	    		  
	    		  if($("#estado-vox").val().length>0){
	    		  
				  $.ajax({
	    			    url: PATH_PROYECTO_BASE+"catalogo/get-catalogo-by-grupo?idGrupo="+$("#estado-vox option:selected").attr('data-idgrupo'),
	    			    dataType: "json",
	    			    success: function( response ) {
		    	
					    		response.data = response.data || [];
					    		
					    		$.each(response.data, function(k, v){
					    			
					    			$('#sub-estado-vox').append('<option value="'+v.referencia+'">'+v.desNombre+'</option>');
					    			
					    		});
					    		
					    		
					    		if(response.data.length == 0){
					    		
					    			$('#formRegistrarIncidencia').bootstrapValidator('resetField', 'subEstadoVoxiva');
					    			$("#sub-estado-vox").attr('disabled','disabled');
					    			
					    		}else{
					    			 $("#sub-estado-vox").removeAttr('disabled');
					    			 
					    			   	if(MIDService.objSelected.subEstadoVoxiva){
											$("#sub-estado-vox").val(MIDService.objSelected.subEstadoVoxiva);
											$('#sub-tipo-caso').selectpicker('refresh');
					  					}
					    			 
					    			 $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'subEstadoVoxiva');
					    		}
					    		
					    		$('#sub-estado-vox').selectpicker({liveSearch:true});
					    		
	    			    	
	    			    }
				  }); 
	    		  }else{
	    		  	$('#sub-estado-vox').selectpicker({liveSearch:true});
	    		  }
		
	},
	
	getSubTipoCaso:function(tipoCaso){
		
		 var me=this;
		
		  $('#sub-tipo-caso').selectpicker('destroy', true);
	
		  $("#sub-tipo-caso").find('option').remove();
		  $("#sub-tipo-caso").append('<option value="">::ESCOJA::</option>');
		  
		  $('#estado-vox').val('');
		  $('#sub-estado-vox').val('');
			
			try{
	    		 $('#estado-vox').selectpicker('destroy', true);
	    		 $('#sub-estado-vox').selectpicker('destroy', true);
	    		 
	    	}catch(e){
	    		
	    	}
	    	$("#sub-tipo-caso").attr('disabled','disabled');
	    	$("#estado-vox").attr('disabled','disabled');
	    	$("#sub-estado-vox").attr('disabled','disabled');
	    	
	    	
	    	
	    	 $('#estado-vox').selectpicker({liveSearch:true});
	    	 $('#sub-estado-vox').selectpicker({liveSearch:true});
		  
		  if($("#tipo-caso").val().length>0){
		  
		  	
			  $.ajax({
    			    url: PATH_PROYECTO_BASE+"catalogo/get-catalogo-by-grupo?idGrupo="+(tipoCaso || $("#tipo-caso option:selected").attr('data-idgrupo')),
    			    dataType: "json",
    			    success: function( response ) {
	    	
				    		response.data = response.data || [];
				    		
				    		$.each(response.data, function(k, v){
				    			
				    			$("#sub-tipo-caso").append('<option data-enableEstado="'+v.referencia2+'" value="'+v.referencia+'">'+v.desNombre+'</option>');
				    			
				    		});
				    		
				    		if(response.data.length == 0){
				    		
				    			$('#formRegistrarIncidencia').bootstrapValidator('resetField', 'subTipoCasoVoxiva');
				    			$("#sub-tipo-caso").attr('disabled','disabled');
				    			
				    			
				    		}else{
				    			$("#sub-tipo-caso").removeAttr('disabled');
				    			
				    			
				    			if(MIDService.objSelected.subTipoCasoVoxiva){
								  	$('#sub-tipo-caso').val(MIDService.objSelected.subTipoCasoVoxiva);
						    		$('#sub-tipo-caso').selectpicker('refresh');
						    		
						    		
						    		me.changeEstado();
							    	me.getSubEstado();
						    		
								  }
								  $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'subTipoCasoVoxiva');
				    			
				    		}
				    		
				    		$("#sub-tipo-caso").selectpicker({liveSearch:true});
    			    	
    			    }
			  }); 
		  
		   }else{
		   		$("#sub-tipo-caso").selectpicker({liveSearch:true});
		   }
	
	},
	
	buildLists:function(){
		
		var me = this;
		/**Build Caso **/
		
		function clearForm(){

		    	$('#tipo-caso').val('');
		    	$('#tipo-caso').selectpicker('refresh');	
		    	
		    	$('#estado-vox').val('');
		    	$('#estado-vox').selectpicker('refresh');	
		    	
		    	$('#sub-estado-vox').val('');
		    	$('#sub-estado-vox').selectpicker('refresh');	
		    	
		    	$('#sub-tipo-caso').selectpicker('destroy', true);
	
			    $("#sub-tipo-caso").find('option').remove();
			    $("#sub-tipo-caso").append('<option value="">::ESCOJA::</option>');
			  
			    $('#sub-tipo-caso').val('');
		    	$('#sub-tipo-caso').selectpicker('refresh');	
		  
		}
		 
		 $('#myModalRegistro').on('shown.bs.modal', function (e) {
		 	  $('#formRegistrarIncidencia').bootstrapValidator('resetForm', true);
			  $('#actualizarBtn').hide();
			  
			  MIDService.objSelected = MIDService.objSelected || {};
				  if(MIDService.objSelected.tipoCasoVoxiva){
				  	$('#tipo-caso').val(MIDService.objSelected.tipoCasoVoxiva);
		    		$('#tipo-caso').selectpicker('refresh');
				  }else{
				  
				  	if($('#latitud').val().length>0 && $('#longitud').val().length){
				  			$('#tipo-caso').val('3');
		    				$('#tipo-caso').selectpicker('refresh');
				  	}
				  	
				  }
				  me.getSubTipoCaso();
				  
				  if(MIDService.objSelected.nombreReportaIncidencia){
				  	$('#reportante-nombre').val(MIDService.objSelected.nombreReportaIncidencia);
				  }else{
				  	$('#reportante-nombre').val('');
				  }
				  
				  if(MIDService.objSelected.telefReportaIncidencia){
				  	$('#reportante-telefono').val(MIDService.objSelected.telefReportaIncidencia);
				  }else{
				  	$('#reportante-telefono').val('');
				  }
				  
				  if(MIDService.objSelected.horaLlamadaVoxiva){
				  	var f1 = MIDService.objSelected.horaLlamadaVoxiva.split(' ')[0];
				  	$('#fec-incidencia').val(f1);
				  }else{
					  var date = new Date();
					  var formatted = moment(date).format('DD-MM-YYYY'); 
				  	$('#fec-incidencia').val(formatted);
				  }
				  
				  if(MIDService.objSelected.horaLlamadaVoxiva){
				  	$('#hora-incidencia').val(MIDService.objSelected.horaLlamadaVoxiva.split(' ')[1]);
				  }else{
				  	$('#hora-incidencia').val('');
				  }
				  
				  if(MIDService.objSelected.fechaHoraAtencionVoxiva){
				  	var f2 = MIDService.objSelected.fechaHoraAtencionVoxiva.split(' ')[0];
				  	$('#fec-atencion').val(f2);
				  }else{
				  	$('#fec-atencion').val('');
				  }
				  
				  if(MIDService.objSelected.fechaHoraAtencionVoxiva){
				  	$('#hora-atencion').val(MIDService.objSelected.fechaHoraAtencionVoxiva.split(' ')[1]);
				  }else{
				  	$('#hora-atencion').val('');
				  }
				  
				  if(MIDService.objSelected.incidenciaPresentada){
				  	$('#incidencia-presentada').val(MIDService.objSelected.incidenciaPresentada);
				  }else{
				  	$('#incidencia-presentada').val('');
				  }
				  
				  if(MIDService.objSelected.accionesIncidencia){
				  	$('#accion-tomada').val(MIDService.objSelected.accionesIncidencia);
				  }else{
				  	$('#accion-tomada').val('');
				  }
				  
				  if(MIDService.objSelected.nombreRecepcionaIncidencia){
				  	$('#operador-cargo').val(MIDService.objSelected.nombreRecepcionaIncidencia);
				  }else{
				  	$('#operador-cargo').val('');
				  }
				  
				  if(MIDService.objSelected.dniRecepcionaIncidencia){
				  	$('#operador-dni').val(MIDService.objSelected.dniRecepcionaIncidencia);
				  }else{
				  	$('#operador-dni').val('');
				  }
				  
				  
				  if(MIDService.objSelected.estadoCalifVoxiva){
				  	$('#calificacion-caso').val(MIDService.objSelected.estadoCalifVoxiva);
				  	
				  	if(MIDService.objSelected.estadoCalifVoxiva =='4' || MIDService.objSelected.estadoCalifVoxiva =='5'){
					
						$('#hora-atencion').removeAttr('disabled');
						$('#fec-atencion').removeAttr('disabled');
						
					}else{
					
						$('#hora-atencion').val('');
						$('#hora-atencion').attr('disabled','disabled');
						
						$('#fec-atencion').val('');
						$('#fec-atencion').attr('disabled','disabled');
						
					}
				  	
				  }else{
				  	
					  	$('#calificacion-caso').val('1');
					  	$('#fec-atencion').val('');
						$('#fec-atencion').attr('disabled','disabled');
						
						$('#hora-atencion').val('');
						$('#hora-atencion').attr('disabled','disabled');
						
				  }
				  
				  $('#calificacion-caso').selectpicker('refresh');	
				  
				   
				  me.getSubEstado();
				  
				  
				  if(MIDService.objSelected.importanteVoxiva){
				  	$('#importante').val(MIDService.objSelected.importanteVoxiva);
				  }else{
				  	$('#importante').val('S');
				  }
				  
				  $('#importante').selectpicker('refresh');	
				  
				  if(MIDService.objSelected.llamadaDevueltaVoxiva){
				  	$('#llamada-devuelta').val(MIDService.objSelected.llamadaDevueltaVoxiva);
				  }else{
				 	 $('#llamada-devuelta').val('N');
				  }
				  
				  $('#llamada-devuelta').selectpicker('refresh');	
				  
				  if(MIDService.objSelected.unidIntervVoxiva){
				  	$('#unid-interviniente').val(MIDService.objSelected.unidIntervVoxiva);
				  }else{
				  	 $('#unid-interviniente').val('');
				  }
				  $('#unid-interviniente').selectpicker('refresh');	
				  
				  if(MIDService.objSelected.desUnidIntervVoxiva){
				  	$('#unidad-nombre').val(MIDService.objSelected.desUnidIntervVoxiva);
				  }else{
				  	$('#unidad-nombre').val('');
				  }
				  
				 
				  
				  if(MIDService.objSelected.direccionIncidencia){
				  	$('#direccionIncidencia-text').val(MIDService.objSelected.direccionIncidencia);
				  	///catastro/get-name-street?latitud=-12.122272&longitud=-77.035123
				  }else{
					  
					  console.log('MIDService.geoCords->');
					  console.log(MIDService.geoCords);
					  
					  if(MIDService.geoCords){
						  
						  $.ajax({
							    url: PATH_PROYECTO_BASE+"catastro/get-name-street",
							    dataType: "json",
							    data:{latitud:MIDService.geoCords.lat(),longitud:MIDService.geoCords.lng()},
							    success: function( response ) {
							    	
							    	console.log(response);
							    	var result = response.result || [];
							    	if(result.length>0){
							    		
							    		var name = result[0];
							    		
							    		$('#direccionIncidencia-text').val(name.names[1]?name.names[1]:name.names[0]);
							    	}
							    	
							    }
							    ,
							    error:function(){
							    	$('#direccionIncidencia-text').val('');
							    }
							  }
						  );
						  
					  }
				  	
				  }
				  
				  if(MIDService.objSelected.cuadraEvento){
				  	$('#cuadraEvento').val(MIDService.objSelected.cuadraEvento);
				  }else{
				  	$('#cuadraEvento').val('');
				  }
				  
				  
				  
		  });
					
		  $('#btnCancelar2').click(function(){
		  		$('#formRegistrarIncidencia').bootstrapValidator('resetForm', true);
		  });
		 
		 $("#myModalRegistro").on('hidden.bs.modal', function () {
		 		 clearForm()
			     $('#actualizarBtn').show();
		 })
		
		
		$.ajax({
		    url: PATH_PROYECTO_BASE+"catalogo/get-grupo-voxiva",
		    dataType: "json",
		    data:{identificador:'VOX_CASO'},
		    success: function( response ) {
		    	
		    	try{
		    		 $('#tipo-caso').selectpicker('destroy', true);
		    	}catch(e){
		    	}
		    	
		    	$("#tipo-caso").append('<option value="">::ESCOJA::</option>');
		    	
		    	if(response.success){
		    		
		    		response.data = response.data || [];
		    		
		    		$.each(response.data, function(k, v){
		    			$("#tipo-caso").append('<option data-idgrupo="'+v.ideGrupoElemento+'" value="'+v.ref1+'">'+v.desNombre.split('_')[1]+'</option>');
		    			
		    		});
		    		
		    		$("#tipo-caso").selectpicker({liveSearch:true});
		    		
		    		$("#sub-tipo-caso").selectpicker({liveSearch:true});
		    		
		    	}
		    	
		    }
		});
		
  	 	$("#tipo-caso").change(function() {
  	 		me.getSubTipoCaso();
  	 	});
		
  	 	
		$("#sub-tipo-caso").change(function() {

			me.changeEstado({noSetValueCalif:true});
			
		});
	
		/**Build Estado **/
		
		$.ajax({
		    url: PATH_PROYECTO_BASE+"catalogo/get-grupo-voxiva",
		    dataType: "json",
		    data:{identificador:'VOX_ESTADO'},
		    success: function( response ) {
		    	
		    	try{
		    		 $('#estado-vox').selectpicker('destroy', true);
		    	}catch(e){
		    	}
		    	
		    	$("#estado-vox").append('<option value="">::ESCOJA::</option>');
		    	
		    	//console.log('response estado');
		    	//console.log(response);
		    	
		    	if(response.success){
		    		
		    		response.data = response.data || [];
		    		
		    		$.each(response.data, function(k, v){
		    			
		    			$("#estado-vox").append('<option data-idgrupo="'+v.ideGrupoElemento+'" value="'+v.ref1+'">'+v.desNombre.split('_')[1]+'</option>');
		    			
		    		});
		    		
		    		$("#estado-vox").selectpicker({liveSearch:true});
		    		
		    		$('#sub-estado-vox').selectpicker({liveSearch:true});
		    		
		    	}
		    	
		    }
		});
		


$("#estado-vox").change(function() {
		
		me.getSubEstado()
	  
	  
});


/** Mask inputs and datepicker **/

$('#cuadraEvento').mask('000000');	

$('#fec-incidencia').datetimepicker({

format:'DD-MM-YYYY'

}).on("dp.change", function(e) {

   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strFecLlamada');
   
}).on("dp.update", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strFecLlamada');
   
}).on("dp.error", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strFecLlamada');
   
});

$('#hora-incidencia').datetimepicker({

format:'HH:mm'

}).on("dp.change", function(e) {

   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strHoraLlamada');
   
}).on("dp.update", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strHoraLlamada');
   
}).on("dp.error", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strHoraLlamada');
   
});


$('#fec-atencion').datetimepicker({

format:'DD-MM-YYYY'

}).on("dp.change", function(e) {

   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strFecAtencion');
   
}).on("dp.update", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strFecAtencion');
   
}).on("dp.error", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strFecAtencion');
   
});


$('#hora-atencion').datetimepicker({

format:'HH:mm'

}).on("dp.change", function(e) {

   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strHoraAtencion');
   
}).on("dp.update", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strHoraAtencion');
   
}).on("dp.error", function(e) {
	
   $('#formRegistrarIncidencia').bootstrapValidator('revalidateField', 'strHoraAtencion');
   
});


$('#operador-dni').mask('00000000');	

//ccc

$('#formRegistrarIncidencia')
.bootstrapValidator(
		{
			// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later

			feedbackIcons : {
				valid : 'glyphicon glyphicon-success',
				invalid : 'glyphicon glyphicon-requerid',
				validating : 'glyphicon glyphicon-refresh'
			},
			excluded: [':disabled', ':hidden', ':not(:visible)'],
			fields : {
				'tipoCasoVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja el caso'
						}
					}
				}
				,
				'subTipoCasoVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja sub-caso'
						}
					}
				}
				,
				'estadoVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja el sub-estado'
						}
					}
				}
				,
				'subEstadoVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja el sub-estado'
						}
					}
				}
				,
				'estadoCalifVoxiva'  : {
					validators : {
						notEmpty : {
							message : 'Escoja una calificación'
						}
					}
				}
				,
				'importanteVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja un valor'
						}
					}
				}
				,
				'llamadaDevueltaVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja un valor'
						}
					}
				}
				,
				'nombreReportaIncidencia' : {
					validators : {
						notEmpty : {
							message : 'Ingrese el nombre de la persona que reportó el caso'
						}
					}
				}
				,
				'strFecLlamada' : {
					validators : {
						notEmpty : {
							message : 'Ingrese la fecha de la incidencia'
						},
						date: {
	                        format: 'DD-MM-YYYY',
	                        message: 'Formato de fecha invalido. Ej (DD-MM-YY)'
	                    }
					}
				}
				,
				'strHoraLlamada' : {
					validators : {
						notEmpty : {
							message : 'Ingrese la hora de la incidencia'
						}
					}
				}
				,
				'strFecAtencion' : {
					validators : {
						notEmpty : {
							message : 'Ingrese la fecha de atención'
						},
						date: {
	                        format: 'DD-MM-YYYY',
	                        message: 'Formato de fecha invalido. Ej (DD-MM-YY)'
	                    }
					}
				}
				,
				'strHoraAtencion' : {
					validators : {
						notEmpty : {
							message : 'Ingrese la hora de atención'
						}
					}
				}
				,
				'incidenciaPresentada' : {
					validators : {
						notEmpty : {
							message : 'Describa la incidencia presentada'
						}
					}
				}
				,
				'accionesIncidencia' : {
					validators : {
						notEmpty : {
							message : 'Describa la acción tomada'
						}
					}
				},
				'unidIntervVoxiva' : {
					validators : {
						notEmpty : {
							message : 'Escoja un valor'
						}
					}
				}
//				,
//				'nombreRecepcionaIncidencia' : {
//					validators : {
//						notEmpty : {
//							message : 'Ingrese el operador'
//						}
//					}
//				}
//				,
//				'dniRecepcionaIncidencia' : {
//					validators : {
//						notEmpty : {
//							message : 'Ingrese el dni'
//						}
//					}
//				}
				

			}
		})
		 .on('error.form.bv', function(e) {
	            //console.log('error.form.bv');
	            // You can get the form instance and then access API
	            var $form = $(e.target);
	            ////console.log($form.data('bootstrapValidator').getInvalidFields());
	            
	            $('#btnEnviar2').removeAttr('disabled');
	            // If you want to prevent the default handler (bootstrapValidator._onError(e))
	            // e.preventDefault();
	            
	        })
.on(
		'success.form.bv',
		function(e) {
			// Prevent form submission
			e.preventDefault();
			// Get the form instance
			var $form = $(e.target);
			// Get the BootstrapValidator instance
			var bv = $form.data('bootstrapValidator');

			//console.log('llego!');

			//console.log('tipo-caso value: '+$("#tipo-caso option:selected").val()+' text: '+$("#tipo-caso option:selected").text())
			var incidenciaJson = {};
			$.each($form.serializeArray(),function(key,valor){
				if(valor.value && valor.value != 'null' && valor.value.length>0 && valor.value != '::ESCOJA::'){
					incidenciaJson[valor.name] = valor.value;
				}
			});
			
			incidenciaJson.horaLlamadaVoxiva = $('#fec-incidencia').val()+' '+$('#hora-incidencia').val(); 
			if(!MIDService.objSelected.medioIngreso){
				if($('#medioWaze').val().length==0){
					incidenciaJson.medioIngreso = 9831;
				}else{
					incidenciaJson.medioIngreso = $('#medioWaze').val();
				}
			}
			incidenciaJson.desEstadoVoxiva = $("#estado-vox option:selected").text();
			incidenciaJson.desSubEstadoVoxiva = $("#sub-estado-vox option:selected").text();
			incidenciaJson.desEstadoCalifVoxiva = $("#calificacion-caso option:selected").text();
			incidenciaJson.fechaHoraAtencionVoxiva = $('#fec-atencion').val()+' '+$('#hora-atencion').val(); 
			incidenciaJson.direccionFinal = $("#tipo-caso option:selected").text();
			incidenciaJson.subTipoCasoVoxiva =$("#sub-tipo-caso option:selected").val()
			//console.log(incidenciaJson);
			
			if($('#latitud').val().length>0 && $('#longitud').val().length){
				incidenciaJson.latitud = $('#latitud').val();
				incidenciaJson.longitud = $('#longitud').val();
			}
			
			waitingDialog.show('Espere un momento por favor.', { progressType: 'primary'});
			
			$.ajax({
				url: PATH_PROYECTO_BASE+"mapa-incidencia/actualizar-geoincidencia",
				dataType: "json",
				data:incidenciaJson,
				method:'POST',
				success: function( response ) {
				
					$('#myModalRegistro').modal('hide');	
				
					waitingDialog.hide();
					MapaIncidencias.refreshVoxiva();
					
						$('.'+response.data.idIncidencia+'_incidenciapresentada').html(response.data.incidenciaPresentada); 
						$('.'+response.data.idIncidencia+'_reportante').html(response.data.nombreReportaIncidencia); 
						$('.'+response.data.idIncidencia+'_fecHora').html(response.data.horaLlamadaVoxiva); 
						$('.'+response.data.idIncidencia+'_acciones').html(response.data.accionesIncidencia); 
						$('.'+response.data.idIncidencia+'_operador').html(response.data.nombreRecepcionaIncidencia); 
						$('.'+response.data.idIncidencia+'_direccionIncidencia').html(response.data.direccionIncidencia);
						
						
						if(response.data.estadoCalifVoxiva+'' != '1'){
							$.each(MapaIncidencias.markersVoxiva,function(i,v){
		            
				            	if(v.idIncidencia+'' == ''+$('#idIncidencia-form').val()){
				            		v.marker.setMap(null);
				            	}
				            });
						}
						
					swal({
						        text: 'Actualizacion correcta.',
						        type: "success",
						        showCancelButton: false,
						        confirmButtonClass: 'btn-success',
						        confirmButtonText: 'Ok'
						      });
					
				}
			});
			
			

		});
		
		
$('#calificacion-caso').change(function(){

if($(this).val() == '4' || $(this).val() =='5'){

$('#fec-atencion').removeAttr('disabled');
$('#hora-atencion').removeAttr('disabled');

}else{

$('#fec-atencion').val('');
$('#fec-atencion').attr('disabled','disabled');

$('#hora-atencion').val('');
$('#hora-atencion').attr('disabled','disabled');

}

});							

	
	//bbb
		
		
	}
	
}