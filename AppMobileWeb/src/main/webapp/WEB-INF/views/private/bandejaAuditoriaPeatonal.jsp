<%@ include file="../common/taglibs.jsp"%>
<html>
<head>
<jsp:include page="include/includescripts.jsp" />
<title>Auditoria Peatonal</title>
</head>
<body id="app_sesion">
<div class="bandeja-container-sesion">

<div class="bs-callout bs-callout-info"> <h4>Auditoria Peatonal</h4> </div>

	<div style="100%;" id="content-grid">
	</div>
</div>
</body>
<script type="text/javascript" src="<c:url value="/js/private/auditoriapeatonal/service/AuditoriaPeatonalService.js" />"></script>
<script type="text/javascript" src="<c:url value="/js/private/auditoriapeatonal/AuditoriaPeatonalApp.js" />"></script>
</html>