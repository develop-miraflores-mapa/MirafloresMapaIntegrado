<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>


	
<html >
  <head>
    <meta charset="UTF-8">
    
    <link rel="stylesheet"
	href="<c:url value="/bootstrap/css/bootstrap.min.css" />">
	
    <title>Municipalidad de Miraflores</title>
   
   <link rel="stylesheet" href="<c:url value="/css/login-style.css" />" />
   
  </head>

  <body>

    <body>
    <form action="<c:url value='/autenticar'/>" method="post" id="j_form_login"> 
	<div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>Login</h1>
			</div>

			<div class="login-form">
				<div class="control-group">
					<input type="text" class="login-field" value="${username}" placeholder="Usuario" id="login-name" type="text" name="userName" >
					<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
					<input type="password" class="login-field" value="" placeholder="Contraseña" id="login-pass" name="password">
					<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>

				<input type="submit" class="btn btn-primary btn-large btn-block"  value="Acceder al Sistema"/>
			</div>
			<div style="width:100%;text-align: center;padding: 12px 0px 0px 0px;color: red;font-size: 14px;">${mensajeError}</div>
				
		</div>
	</div>
	</form>
</body>
    
    
    
    
    
  </body>
</html>
