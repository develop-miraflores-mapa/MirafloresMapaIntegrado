<%@ include file="../common/taglibs.jsp"%>
<html>
<head>
<script type="text/javascript">

var DES_LOGIN = '${usuarioLoginMap.desLoginUser}';

</script>
<jsp:include page="include/includescripts.jsp" />
<title>Administracion de Usuarios</title>

</head>
<body >
<div id="render"></div>
</body>
 <script type="text/javascript" src="<c:url value="/js/private/mapaincidencias/UsuarioService.js" />"></script>
</html>