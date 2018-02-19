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

<script type="text/javascript">

Ext.override(Ext.form.field.ComboBox, {
	beforequery:function (record) {
	
        
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent(arguments);
   
        this.on('beforequery',this.beforequery);
    }
});

</script>
<style>
html, body, #map_canvas{
    margin:0 !important;
    padding:0  !important;
    height: 100%;
}
.gm-style-mtc {
  display: none;
}

#buscador-container{
	display: none;
	position: fixed;top:7px;left: 7px;width: 409px;z-index:3000;
	background:transparent;
	
	/* border:solid 1px #ccc;
-moz-border-radius-topleft: 5px;
-moz-border-radius-topright:5px;
-moz-border-radius-bottomleft:5px;
-moz-border-radius-bottomright:5px;
-webkit-border-top-left-radius:5px;
-webkit-border-top-right-radius:5px;
-webkit-border-bottom-left-radius:5px;
-webkit-border-bottom-right-radius:5px;
border-top-left-radius:5px;
border-top-right-radius:5px;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
padding: 10px 15px 10px 15px;	 */
}

.x-form-trigger-wrap{

border : 0px #fff solid !important; 

}

</style>
<!-- API Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&oe=utf8"></script>


<title>Recojo de Basura - Miraflores</title>

</head>
<body >
	<div id="buscador-container"><div id="cbxBuscador"></div></div>
	<div id="map_canvas"></div>
	
<script type="text/javascript">

var flightPlanCoordinates = [];
var map;

function buildComboBoxBusqueda(){
	
	var cbx = Ext.widget('ComboGeneric',{
		   hideTrigger : true,
		   id:'cbx-geo-calles-linea',
		   allowBlank:true,
		   width:380,
	  	   root:'data',
	  	   autoLoad:true,
	  	   url:'/mobileApps/mapa-incidencia/recojo-basura',
	  	   queryMode: 'remote',
	  	   emptyText:'Buscar horario de recojo por calle',
	  	   minChars:3,
	  	   valueField:'id',
	  	   displayField :'displayValue',
	  	   queryDelay : 2000,
	  	   /* forceSelection:true, */
	  	   border:false,
	  	   style:'border:0px;',
	  	 	fieldStyle:'border:1px #fff solid;font-size:14px;',
			
	  	   model:
	  		   {
	  		   	nameModel:'RecojoBasuraGeo'
	  		   	,fields:['id','nombreVia','nombre','puntoIni','puntoFin','poligono','sector','cuadra','lado','horaPasoPromedio','detalle'
	  		   	,{
	  		   		name:'displayValue',
	  		   		mapping:'nombre',
	  		   		convert:function(v,record){
	  		   			return v+'. CDRA: '+record.data.cuadra+' LADO: '+record.data.lado;
	  		   		}
	  		   	}
	  		   	]	
	  		   }
	  	  ,listeners:{
	  	  	select:function(f,record){
	  	  		
	  	  	map = new google.maps.Map(document.getElementById('map_canvas'), {
	  			zoom: 18,
	  			center: new google.maps.LatLng(-12.121446, -77.030175),
	  		    mapTypeId: google.maps.MapTypeId.ROADMAP
	  		});
	  		
	  		  		
	  	  	console.log(record);
	  	  	var item = record.data;
			var arr = [];
			
			var a,b;
			
			if(item.giro == '+1L' && !Ext.isEmpty(item.geometria)){
				
				var arr2 = item.geometria.split(':::');
				var p1,p2;
				
				console.log(arr2)
				
				Ext.each(arr2,function(g,j){
					
					arr.push({lat:  parseFloat(g.split(',')[0]) , lng: parseFloat(g.split(',')[1])});
					
					if(j==0){
						p1 = g;
					}
					
					if(j==1){
						p2 = g;
					}
					
				});
				
				a = (parseFloat(p1.split(',')[0])+parseFloat(p2.split(',')[0]))/2;
				b = (parseFloat(p1.split(',')[1])+parseFloat(p2.split(',')[1]))/2;
				
			}else{
				
				a = (parseFloat(item.puntoIni.split(',')[0])+parseFloat(item.puntoFin.split(',')[0]))/2;
				b = (parseFloat(item.puntoIni.split(',')[1])+parseFloat(item.puntoFin.split(',')[1]))/2;
				
				arr.push({lat:  parseFloat(item.puntoIni.split(',')[0]) , lng: parseFloat(item.puntoIni.split(',')[1])});
				arr.push({lat:  parseFloat(item.puntoFin.split(',')[0]) , lng: parseFloat(item.puntoFin.split(',')[1])});
			}
			//console.log(arr);
			
		   var flightPath = new google.maps.Polyline({
			    path: arr,
			    geodesic: true,
			    strokeColor: '#0C6BB5',
			    strokeWeight: 10,
			    strokeOpacity: 0.6
			  });

			flightPath.setMap(map); 
			
			 var infowindow = new google.maps.InfoWindow({
		    					content: '<span style="color:#0C6BB5;font-weight: bold;">'+item.nombre+' CUADRA '+item.cuadra+'</span><br>'
					    		+'<b>LADO: </b> '+ item.lado+'<br>'	
					    		/* +'<b>SECTOR: </b> '+ parseInt(item.sector)+'<br>' */	
					    		+'<b>HORA RECOJO PROMEDIO: </b> '+ item.horaPasoPromedio+'<br>'	
					    		+(item.detalle?item.detalle.toUpperCase()+'<br>':'')	
		    				});
			
			 
			 
			 infowindow.setPosition(new google.maps.LatLng(a,b));
			 infowindow.open(map, flightPath);
			 
			 map.setCenter(new google.maps.LatLng(a,b));
			 map.setZoom(19);
			 
			 
			google.maps.event.addListener(flightPath, "click", function (event) {
				
				infowindow.setPosition(event.latLng);
				infowindow.open(map, flightPath);
				
	        });
 		
	  	  		
	  	  		
	  	  	/* 	flightPathLineaTemp=null;
					FormularioCierreCalles.arrMarkerLineaTemp = [];
	  	  		
	  	  		var config = {
	  	  			lat:record.data.punto.split(' ')[1],
	  	  			lon:record.data.punto.split(' ')[0],
	  	  			idContent:'mapa-selector-linea',
	  	  			zoom:18
	  	  			
	  	  		}
	  	  	
	  	  		FormularioCierreCalles.buildMapaSelectorLinea(config);
	  	  		 */
	  	  		 Ext.getCmp('panel-buscador').collapse();
	  	  	}
	  	  }	   
	
		
	});
	
	Ext.widget('panel',{
		
		renderTo:'cbxBuscador',
		title:'<div id="titulo-panel">Buscador</div>',
		width:400,
		id:'panel-buscador',
		bodyStyle:'padding:10px;',
		collapsible:true,
		collapseDirection:'left',
		titleCollapse:true,
		height:95,
		listeners:{
			afterrender:function(thisPanel){
				
				$('#panel-buscador').click(function(){
					
					if(thisPanel.collapsed){
						Ext.getCmp('panel-buscador').expand();
					}
					
				});
				
				
			},
			collapse:function(){
				Ext.getCmp('panel-buscador').setHeight(135);
			}
		    ,
		    beforeexpand : function(){
		    	Ext.getCmp('panel-buscador').setHeight(95);
		    }
		},
		items:[
			cbx
		       ]
		
	})
	
}

$(document).ready(function(){
	
	map = new google.maps.Map(document.getElementById('map_canvas'), {
		zoom: 16,
		center: new google.maps.LatLng(-12.121446, -77.030175),
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	google.maps.event.addListenerOnce(map, 'idle', function(){
		$('#buscador-container').show();
		buildComboBoxBusqueda();
	});
	


	
	/* setTimeout(function(){
		
		map.setCenter(new google.maps.LatLng(-12.111816, -77.000827));
		map.setZoom(18);
	}, 15000) */
	
});

</script>	

</body>
</html>