<%@ include file="../common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<jsp:include page="include/includescripts.jsp" />

<html>
  <head>
  	
  	<style type="text/css">

legend{
	margin-bottom: 0px !important;
	border-bottom: 0px !important;
}

/* .x-fieldset .x-fieldset-header{
	padding: 0px !important;
} */

.x-fieldset {
	border-top: 0px solid #bbb !important;
}

.x-fieldset-default {
	border-top: 0px solid #bbb !important;
}

element.style {
	border-width: 0px !important;
}
</style>
  
	<script type="text/javascript">
		var DES_LOGIN = '${usuarioLoginMap.desLoginUser}';
		var UNIDAD_ATENCION;
		var TIPO_CASO;
		var TIPO_SUBCASO;
	</script>

    <title>Dashboard de Prueba</title>
    <script type="text/javascript" src="http://code.highcharts.com/highcharts.js"></script>
    <script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/PruebaServices.js" />"></script>
    
  </head>
  <body>
  
  </body>
  
  
  
</html>