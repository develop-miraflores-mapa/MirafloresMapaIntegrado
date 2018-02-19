<%@ include file="../common/taglibs.jsp"%>
<html>
<head>

<jsp:include page="include/includescripts.jsp" />

<!-- Ext Js 6 -->
<link href="<c:url value="/ext/theme-triton/resources/theme-triton-all.css" />" rel="stylesheet" />
<script type='text/javascript'  src="<c:url value="/ext/ext-all.js" />"></script>
<script type='text/javascript' src="<c:url value="/ext/theme-triton/theme-triton.js" />"></script>
<script type='text/javascript' src="<c:url value="/ext/locale/locale-es.js" />"></script>

<script type='text/javascript' src="<c:url value="/common/IncludeGenerator.js" />"></script>
<script type='text/javascript' src="<c:url value="/common/IncludeBaseGeneric.js" />"></script>



<title>Formulario de Pre Registro de Cierre de Calles</title>

</head>
<body >
	

	
<script type="text/javascript">
Ext.onReady(function(){
	
	Ext.create('Ext.window.Window', {
	    title: 'Formulario de Pre Registro de Cierre de Calles',
	    height: 275,
	    width: 600,
	    resizable:false,
	    draggable :false,
	    id:'win-pre-registro',
	    closable:false,
	    items: [
	            {
	            	xtype:'form',
	            	layout: 'column',
	            	id:'form-preregistro',
	            	bodyStyle:'padding:15px;',
	            	items:[
							{
								xtype:'textfield'
								,fieldLabel:'Expediente'
								,labelWidth:75
								,style:'margin:0px 10px 10px 0px;'
								,width:565
								,name:'numExpediente'
								,allowBlank:false
							}
							/* ,
							{
								xtype:'textfield'
								,fieldLabel:'Año'
								,labelWidth:50
								,width:115
								,style:'margin:0px 0px 10px 0px;'
								,name:'anioExpediente'
								,allowBlank:false
							} */
							,
							Ext.widget('ComboGeneric',{
								  hideTrigger : true,
								   id:'cbx-geo-calles',
								   allowBlank:false,
								   width:565,
								   fieldLabel:'Dirección',
				            	   root:'data',
				            	   labelWidth:75,
				            	   autoLoad:false,
				            	   url:'/mobileApps/catastro/obtener-georeferencia-via',
				            	   queryMode: 'remote',
				            	   minChars:3,
				            	   valueField:'gid',
				            	   style:'margin:0px 0px 10px 0px;',
				            	   displayField :'displayValue',
				            	   queryDelay : 1000,
				            	   forceSelection:true,
				            	   name:'gid',
				            	   model:
				            		   {
				            		   	nameModel:'CalleGeo'
				            		   	,fields:['gid','toponimia','tipo','cdra','punto','poligono'
				            		   	,{
				            		   		name:'displayValue',
				            		   		mapping:'toponimia',
				            		   		convert:function(v,record){
				            		   			return v+' CUADRA '+record.data.cdra;
				            		   		}
				            		   	}
				            		   	]	
				            		   }
				            	  ,listeners:{
				            	  	select:function(f,record){
									
								
				            	  		
				            	  	}
				            	  }	   
							})
							,
							 {
			                	xtype : 'checkboxfield',
			                	style : 'margin:0px 0px 6px 80px;',
			                    boxLabel  : 'Más de una dirección',
			                    name      : 'masDeUnaDireccion',
			                    inputValue: 'S',
			                    id        : 'masDeUnaDireccion'
			                }
							,
							{
								xtype:'textfield'
								,fieldLabel:'Empresa'
								,labelWidth:75
								,width:565
								,style:'margin:0px 0px 10px 0px;'
								,name:'empresa'
								,allowBlank:false
							}
						/* 	,
							{
								xtype:'textarea'
								,fieldLabel:'Motivo'
								,labelWidth:75
								,width:565
								,style:'margin:0px 0px 0px 0px;'
								,name:'motivo'
								,allowBlank:false
							} */
	            	       ]
	            	
	            }
	            ],
	            buttons:[
		                     {
		                    	 text:'Registrar',
		                    	 handler:function(){
		                    		
		                    		var form = Ext.getCmp('form-preregistro').getForm();
		                    		 
		                    		if(form.isValid()){ 
		                    			
			                    		Ext.getCmp('win-pre-registro').body.mask('Espere un momento por favor.');
			     						
			                    		
			                    		var formValues = form.getValues();
			                    		
			                    		if(!formValues.masDeUnaDireccion){
			                    			formValues.masDeUnaDireccion = 'N';
			                    		}
			                    		
			                    		formValues.direccion = Ext.getCmp('cbx-geo-calles').getRawValue();
			                    		
			     					 	Util.runAjax({
			     							url:'/mobileApps/mapa-incidencia/pre-registro-cierre-calle',
			     							params : formValues,
			     							async : true,
			     							method : 'POST',
			     							success:function(http){
			     								Ext.getCmp('win-pre-registro').body.unmask();
			     								var response = Ext.decode(http.responseText);
			     								
			     								if(response.data){ form.reset(); }
			     								
			     								Ext.Msg.show({
		     			                    	    title:'OK!',
		     			                    	    message: response.message,
		     			                    	    buttons: Ext.Msg.OK ,
		     			                    	    icon: Ext.Msg.INFO
		     			                    	});
			                             		
			     							}
			     						});
			     						
			                    	 }
		                    		 
		                    	 }
		                     }
	                    ]
	}).show();
	
})






</script>	

</body>
</html>