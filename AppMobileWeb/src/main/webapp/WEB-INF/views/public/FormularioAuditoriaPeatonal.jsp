<%@ include file="../common/taglibs.jsp"%>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<jsp:include page="include/includescripts.jsp" />
<title>Auditoria Peatonal</title>
</head>
<body>
	<div class="container">
		<div class="panel panel-primary">
			<div class="panel-heading header-formulario">
				<h1 class="panel-title">Auditoria Peatonal</h1>
			</div>
			<div class="panel-body">

				<form class="form-horizontal" id="form-registro" method="POST"
					enctype="multipart/form-data">
					<fieldset>
						<div class="form-group">
							<label for="cbxCalles" class="col-lg-3 control-label">Nombre
								de la calle</label>
							<div class="col-lg-8">
								<input id="cbxCalles" type="search" class="form-control"
									name="nomVia">
							</div>
						</div>

						<div class="row">
							<div class="col-lg-6">
								<div class="form-group">
									<label for="numCuadra" class="col-lg-6 control-label">Número
										de cuadra</label>
									<div class="col-lg-6">
										<input type="text" class="form-control" id="numCuadra"
											name="numCuadra">
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label for="lado" class="col-lg-5 control-label">Lado</label>
									<div class="col-lg-5">
										<select id="lado" name="lado"
											class="selectpicker form-control" style="width: 100%">
											<option  value="">:SELECCIONE::</option>
											<option value="PAR">PAR</option>
											<option value="IMPAR">IMPAR</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="subZona" class="col-lg-3 control-label">Zona</label>
							<div class="col-lg-8">
								<select id="subZona" name="subZona"
									class="selectpicker form-control" data-live-search="true"
									style="width: 100%">
									<option value="">::Seleccione::</option>
								</select>
							</div>
						</div>

						<div class="form-group">
							<label for="categoria" class="col-lg-3 control-label">Problema</label>
							<div class="col-lg-8">
								<select id="categoria" class="form-control" 
									name="idCategoria" style="width: 100%">
									<option value="">::Seleccione::</option>
								</select>
							</div>
						</div>

						<div class="form-group">
							<label for="descripcion" class="col-lg-3 control-label">Breve
								descripción</label>
							<div class="col-lg-8">
								<textarea class="form-control" id="descripcion"
									name="descripcion"></textarea>
							</div>
						</div>

						<div class="form-group">
							<label class="col-lg-3 control-label">Señalar si es de rápida solución</label>
							<div class="col-lg-8">
								<div class="radio">
									<label> <input type="radio" name="solucionRapida"
										id="solucionRapida1" value="S"> Si
									</label>
								</div>
								<div class="radio" style="display: inline-block;">
									<label> <input type="radio" name="solucionRapida"
										id="solucionRapida2" value="N"> No
									</label>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label class="col-lg-3 control-label">Subir uno foto</label>
							<div class="col-lg-8">
								<div class="fileinput fileinput-new" data-provides="fileinput">
									<div class="fileinput-preview thumbnail"
										data-trigger="fileinput" style="width: 250px; height: 200px;"></div>
									<div>
										<span class="btn btn-default btn-file"><span
											class="fileinput-new">Buscar Imagen</span><span
											class="fileinput-exists">Cambiar</span><input type="file"
											name="foto" id="foto"></span> <a href="#"
											class="btn btn-default fileinput-exists"
											data-dismiss="fileinput">Limpiar</a>
									</div>
								</div>
							</div>
						</div>

						<div class="form-group text-center">

							<button type="button" onclick="javascript: window.location='/mobileApps/auditoria-peatonal/registro';" class="btn btn-danger">Cancelar</button>
							<button type="button" id="btn-enviar" class="btn btn-primary">Registrar</button>

						</div>

					</fieldset>
				</form>

			</div>
		</div>
	</div>
</body>
<script type="text/javascript" language="javascript" src="<c:url value="/js/public/AuditoriaPeatonal.js" />"></script>
</html>