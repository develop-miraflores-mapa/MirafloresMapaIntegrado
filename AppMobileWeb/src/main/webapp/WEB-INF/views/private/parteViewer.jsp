<%@ include file="../common/taglibs.jsp"%>
<html>
<head>

<!-- <script type="text/javascript">

var DES_LOGIN = '${usuarioLoginMap.desLoginUser}';

</script> -->

<link rel="stylesheet" href="<c:url value="/bootstrap/css/bootstrap.min.css" />">
<script src="<c:url value="/js/public/mapaincidencias/jquery-2.1.4.min.js" />"></script>
		
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="<c:url value="/bootstrap/js/bootstrap.min.js" />"></script>
<link href="<c:url value="/css/bootstrapValidator.css" />" rel="stylesheet">

<jsp:include page="include/includescripts.jsp" />



<title>Visor de Partes</title>



<script type="text/javascript">

	function getParamsByUrl(){
		return Ext.urlDecode(location.search.substr(1));	
	}

	
	
</script>




</head>
<body >
	<div id="render2">
</body>


	<script>

		$(document)
				.ready(
						function() {
							/* $('#yourDivName').html('yourtHTML'); */
							var opcionesUrl=getParamsByUrl();
							
							var htmlImagen="";
							var htmlSlider="";
							var htmlSlide="";
							var dataImagenGaleria="";
							
							 try {
								var cod = opcionesUrl.idIncidencia;

								$.ajax({
									url: PATH_PROYECTO_BASE+"mapa-incidencia/get-parte-incidencia",
									async : false,
									method : 'GET',
									dataType: "json",
								    data:{ cod: cod },
								    success: function( response ) {
								    	var result = response.data || [];
								    	if(result.length>0){
									    	console.log("result");
									    	console.log(result);

									    	$.each(result, function( index, value ) {	
								    			var activo="";
								    			if(index==0){
								    				activo="active";
								    			}
								    			if(value.tpoImg==1013){
								    				htmlImagen+=	'   <div class="item '+activo+'" >'+
												    				'		<div style="width:100%;align:center;font-family:Verdana;color:#000000;font-size:14px;margin-bottom:5px;">'+
																	'			<b>'+value.titulo+'</b></div>' +
																	'   	<div><center><img src="'+value.ruta+'" width="80%" heigth="100%"></center></div><br/>'+
																	'   	<div style="color:#000000;font-size:10px;">'+
																				value.descripcion+
																	'		</div>'+
																	'   </div>';
										    		htmlSlide+='	<li data-target="#myCarousel" data-slide-to="'+index+'" class="'+activo+'"></li>';
								    			} 
								    			
							    			});
							    			
								    		var dataImagenGaleria=	
							    								'<div id="myCarousel" class="carousel slide" data-interval="false">'+
																'	<ol class="carousel-indicators">'+
																  		htmlSlide+
																'  	</ol>'+
																'  	<div class="carousel-inner">'+
																		htmlImagen +
																'  </div>'+
																'  <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="width: 30px;">'+
																'    <span class="glyphicon glyphicon-chevron-left"></span>'+
																'    <span class="sr-only">Previous</span>'+
																'  </a>'+
																'  <a class="right carousel-control" href="#myCarousel" data-slide="next" style="width: 30px;">'+
																'    <span class="glyphicon glyphicon-chevron-right"></span>'+
																'    <span class="sr-only">Next</span>'+
																'  </a>'+
																'</div>';
																
																
											htmlSlider = 
						   						'<div class="slides-table" style="float:center; width:100%;">'+
												'<div class="slides-container" style="float:center; width:100%; heigth=100%">'+
													dataImagenGaleria+
												'</div>'+
												'</div>'+
												'</div>';

									    } else {
									    	window.alert("No hay Partes asociados a la incidencia.");
										}
								    }
								});

							} catch (e) {
								console.error("Exception thrown", e.stack);
							}
													
							$('#render2').append(htmlSlider); 
							/* $('#render2').prepend(htmlSlider); */  
							/* $('#yourDivName').prepend('yourtHTML'); */
						}
						)
	</script>
 
 
 
</html>