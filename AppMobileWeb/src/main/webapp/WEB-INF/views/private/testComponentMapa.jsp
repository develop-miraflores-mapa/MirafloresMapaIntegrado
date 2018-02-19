<%@ include file="../common/taglibs.jsp"%>
<html>
<head>
<jsp:include page="include/includescripts.jsp" />
<title>Test Mapa</title>

</head>
<body >
<div id="render"></div>
</body>

<script type="text/javascript">


Ext.onReady(function(){

	Ext.widget('form',{
		renderTo:'render'
		,title:'Test Mapa'
		,width:500
		,layout:'form'
		,items:[
		        {
			        fieldLabel:'Longitud',	
			       	xtype:'textfield',
			       	id:'latitud'
			       	
		        }
		        ,
		        {
		        	fieldLabel:'Latitud',	
			       	xtype:'textfield',
			       	id:'longitud'	 	
		        }
		       ],
		       buttons:[
		                {
		                	text:'Test'
		                	,handler:function(){
		                		//Uso del componenete -->
		                		Util.windowGeoreferenciaPunto(
		                		{
		                			width:600,
		                			height:600
		                			,fnGrabar:function(punto){
		                				
		                				console.log(punto)
		                				
		                				Ext.getCmp('latitud').setValue(punto.lat);
		                				Ext.getCmp('longitud').setValue(punto.lng);
		                				
		                				
		                			}
		                		}	
		                		
		                		);
		                		//<-- end uso componente
		                	}
		                }
		                ]
		
	})
	
	
});



</script>


</html>