Ext.Loader.setConfig({
	        enabled: true,
	        paths : {
	           'Chart' : 'chart'
	        }
	    });
	
		Ext.require('Ext.data.JsonStore');
		Ext.require('Ext.window.Window');
		Ext.require('Ext.grid.Panel');
		Ext.require('Chart.ux.Highcharts');
		Ext.require('Chart.ux.Highcharts.Serie');
		Ext.require('Chart.ux.Highcharts.PieSerie');
		Ext.require('Chart.ux.Highcharts.ColumnSerie');
		
		Ext.define('ChartModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'unidad', type: 'int'},
		    	{name: 'caso', type: 'int'},
		    	{name: 'subcaso', type: 'int'},
		    	{name: 'fecha', type: 'date'},
		    	{name: 'hora', type: 'int'},
		    	{name: 'dia', type: 'string'},
		    	{name: 'mes', type: 'int'},
		    	{name: 'anio', type: 'int'},
		    	{name: 'valor', type: 'int'},
		    	{name: 'estado', type: 'int'},
		    	{name: 'subestado', type: 'int'},
		    	{name: 'area', type: 'string'},
		    	{name: 'zona', type: 'string'},
		    	{name: 'subzona', type: 'string'},
		    	{name: 'tpoVia', type: 'string'},
		    	{name: 'nombVia', type: 'string'},
		    	{name: 'cdra', type: 'string'},
		    	{name: 'coordenadas', type: 'string'},
		    	{name: 'descUnidad', type: 'string'},
		    	{name: 'descCaso', type: 'string'},
		    	{name: 'descSubcaso', type: 'string'}
		    ]
		});
		
		Ext.define('DataModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'unidad', type: 'int'},
		    	{name: 'caso', type: 'int'},
		    	{name: 'subcaso', type: 'int'},
		    	{name: 'fecha', type: 'date'},
		    	{name: 'hora', type: 'int'},
		    	{name: 'dia', type: 'string'},
		    	{name: 'mes', type: 'int'},
		    	{name: 'anio', type: 'int'},
		    	{name: 'valor', type: 'int'},
		    	{name: 'estado', type: 'int'},
		    	{name: 'subestado', type: 'int'},
		    	{name: 'area', type: 'string'},
		    	{name: 'zona', type: 'string'},
		    	{name: 'subzona', type: 'string'},
		    	{name: 'tpoVia', type: 'string'},
		    	{name: 'nombVia', type: 'string'},
		    	{name: 'cdra', type: 'string'},
		    	{name: 'coordenadas', type: 'string'},
		    	{name: 'descUnidad', type: 'string'},
		    	{name: 'descCaso', type: 'string'},
		    	{name: 'descSubcaso', type: 'string'}
		    ]
		});
		
		Ext.define('SerieModel', {
		    extend: 'Ext.data.Model',
		    fields: [
//		    	{name: 'tiempo', type: 'date'},
		    	{name: 'tiempo', dateFormat: 'd/m/y'},
//		        {name: 'tiempo', type: 'string'},	//, dateFormat: 'd/m/y'},
//		        {name: 'fecha', type: 'date'},
		        {name: 'serie', type: 'int'}       
		    ]
		});

		
        Ext.define('PieModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'cod', type: 'int'},
		    	{name: 'desc', type: 'string'},
		        {name: 'cant', type: 'int'},
		        {name: 'porcentaje', type: 'float'},
		        {
		            name: 'descExtended',
		            type: 'string',
		            convert: function(value, record) {
		                var str = record.get('desc')+" ("+record.get('porcentaje')+"%)";
		            	return str;
		            }
		        }
		    ]
		});
        
        Ext.define('FrecuenciaDiaModel', {
		    extend: 'Ext.data.Model',
		    fields: [
//		    	{name: 'n_dow', type: 'int'},
		    	{name: 'dia', type: 'string'},
		    	{name: 'fr', type: 'float'}
		              
		    ]
		});
        
        Ext.define('FrecuenciaHoraModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'hora', type: 'int'},
		    	{name: 'fr', type: 'float'}
		    ]
		});
        
        Ext.define('TopZonaModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'zona', type: 'string'},
		    	{name: 'cant', type: 'int'}
		    ]
		});
                
        Ext.define('ColumnModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'cod', type: 'int'},
		    	{name: 'desc', type: 'string'},
		        {name: 'cant', type: 'int'}        
		    ]
		});
                
        Ext.define('HeatmapModel', {
		    extend: 'Ext.data.Model',
		    fields: [
		    	{name: 'latitud', type: 'string'},
		    	{name: 'longitud', type: 'string'},
		        {name: 'coordenadas', type: 'string'}        
		    ]
		});
        
		Ext.define('NetworkData', {
		    extend: 'Ext.data.Model',
		    fields: [
		        {name: 'host',  type: 'string'},
		        {name: 'bytes', type: 'int'}, 
		        {name: 'direction', type: 'string'}, 
		        {name: 'color', type: 'string'}        
		    ]
		});
		
		Ext.define('BandwidthUtilisation', {
	        extend: 'Ext.data.Model',
	        fields: [
	            {name: 'time',  type: 'int' },
	            {name: 'today', type: 'int'}, 
	            {name: 'yesterday', type: 'int'}        
	        ]
	    });
		
		var idWin = Ext.id();
		
		var descripcion;
		
//		CATALOGO DE COLORES CSS3
//		========================
//		rgb(0,0,0)			black	negro	
//		rgb(128,128,128)	gray	gris	
//		rgb(192,192,192)	silver	plata	
//		rgb(255,255,255)	white	blanco	
//		rgb(0,0,128)		navy	marino	
//		rgb(0,0,255)		blue	azul	
//		rgb(0,255,255)		aqua (cyan)	agua (cyan)	
//		rgb(0,128,0)		green	verde	
//		rgb(0,128,128)		teal	teal	
//		rgb(128,128,0)		olive	oliva	
//		rgb(0,255,0)		lime	lima	
//		rgb(255,255,0)		yellow	amarillo	
//		rgb(128,0,0)		maroon	marrón	
//		rgb(128,0,128)		purple	púrpura	
//		rgb(255,0,0)		red	rojo	
//		rgb(255,165,0)		orange	naranja	
//		rgb(255,0,255)		fuchsia (magenta)	fucsia (magenta)	

		
		var heatmapPoints = [];
		var heatmapPoints1 = [];
		
//		var points = [];
//		for (i = 0; i < cars.length; i++) { 
//			points.push( new google.maps.LatLng(punto.latitud, heatmapStore.latitud) );
//		}
//		fruits.push("Kiwi");
//		Try it Yourself »
//
//		var arrPoligono = data;
//		var point = null;
//		var visible = MapaIncidencias.getVisible('waze');
//		
//		var arrPoints = [];
//		
//			var obj;
//		
//			for (var i = 0; i < arrPoligono.length; i++) {
//				point = arrPoligono[i];
//				arrPoints.push({lat: point.y, lng: point.x});
//			}
		
		var btnCerrar = {
	            xtype:'button',
	            text: DES_LOGIN,
	            iconCls: 'btnUser16',
	            href:PATH_PROYECTO_BASE+'log-out'
			}
		
		var heatmapPoints1;
		var heatmapStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'HeatmapModel',
		      storeId: 'heatmapStore',
		      autoLoad: false,
		      proxy : {
		    	 	type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-heatmap',
					actionMethods : 'POST',
					async : false,
					extraParams: { },
					reader : {
						type: 'json',
						extraParams : {},
						rootProperty : 'data'
					},
					
					success:function(http){
						var response = Ext.decode(http.responseText);
						var arrPoints = [];
						heatmapPoints = null;
						
						for (var i = 0; i < response.data.length; i++) {
							arrPoints.push( new google.maps.LatLng(response.data[i].latitud, response[i].data.longitud));
						}
						heatmapPoints1 = arrPoints;
					},
					simpleSortMode : true,
					timeout:99999999
		      }
		});
		
		
		var unidadModel = Ext.create('Ext.data.Model',{
			fields: [
		        {name: 'codUnidad',  type: 'int'},
		        {name: 'descUnidad',   type: 'string'},
		    ]
		});
		
		var casoModel = Ext.create('Ext.data.Model', {
		fields: [
	        {name: 'codCaso',  type: 'int'},
	        {name: 'codUnidad',  type: 'int'},
	        {name: 'descCaso',   type: 'string'},
	    ]
		});
		
		var map;
		var heatmap;
		var polygon;
    	
		var gradientScheme = [
//			'rgba(0, 255, 0, 0)',
//			'rgba(180, 255, 0, 1)',
//			'rgba(255, 255, 0, 1)',
//			'rgba(255, 220, 0, 1)',
//			'rgba(255, 180, 0, 1)',
//			'rgba(255, 80, 0, 1)',
//			'rgba(255, 0, 0, 1)'
			
//			'rgba(0, 0, 255, 0)',
//			'rgba(0, 60, 200, 1)',
//			'rgba(0, 120, 120, 1)',
//			'rgba(125, 125, 125, 0)',
//			'rgba(125, 120, 60, 0)',
//			'rgba(200, 9, 0, 0)',
//			'rgba(255, 0, 0, 1)'
			
//			'rgba(0, 0, 255, 0)',
//			'rgba(0, 60, 200, 1)',
//			'rgba(0, 120, 120, 1)',
//			'rgba(125, 125, 125, 0)',
//			'rgba(125, 120, 60, 0)',
//			'rgba(200, 60, 0, 0)',
//			'rgba(255, 0, 0, 1)'
			
//			'rgba(102, 255, 0, 0)',
//			'rgba(102, 255, 0, 1)',
//			'rgba(147, 255, 0, 1)',
//			'rgba(193, 255, 0, 1)',
//			'rgba(238, 255, 0, 1)',
//			'rgba(244, 227, 0, 1)',
//			'rgba(249, 198, 0, 1)',
//			'rgba(255, 170, 0, 1)',
//			'rgba(255, 113, 0, 1)',
//			'rgba(255, 57, 0, 1)',
//			'rgba(255, 0, 0, 1)'
			
			'rgba(0, 255, 0, 0)',
			'rgba(180, 255, 0, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 220, 0, 1)',
			'rgba(255, 180, 0, 1)',
			'rgba(255, 80, 0, 1)',
			'rgba(255, 0, 0, 1)',
			
			'rgba(0, 255, 255, 0)',
	        'rgba(0, 255, 255, 1)',
	        'rgba(0, 191, 255, 1)',
	        'rgba(0, 127, 255, 1)',
	        'rgba(0, 63, 255, 1)',
	        'rgba(0, 0, 255, 1)',
	        'rgba(0, 0, 223, 1)',
	        'rgba(0, 0, 191, 1)',
	        'rgba(0, 0, 159, 1)',
	        'rgba(0, 0, 127, 1)',
	        'rgba(63, 0, 91, 1)',
	        'rgba(127, 0, 63, 1)',
	        'rgba(191, 0, 31, 1)',
	        'rgba(255, 0, 0, 1)'
			
	        ];
		
        document.title = "Estadísticas Integradas";
        
        var userPanel = Ext.create('Ext.Panel', {
        	id: 'userPanel',
            html: 	+ '<div id="actualizarBtn" >'			
				        	+ '<div class="btn-group">'		
				    		+ '<a href="#" style="min-width: 145px;" class="btn btn-danger">' + DES_LOGIN + '</a>'	
				    		+ '<a href="#" class="btn btn-danger dropdown-toggle"'	
				    			+ 'data-toggle="dropdown" aria-expanded="true"><span class="caret"></span></a>'
				    		+ '<ul class="dropdown-menu">'	
				    			+ '<li><a id="btnCambiarClave" href="#">Cambiar Clave</a></li>'
				    			+ '<li class="divider"></li>'
				    			+ '<li><a href="/mobileApps/log-out"">Cerrar Sesion</a></li>'
				    		+ '</ul>'	
				    	+ '</div>'		
				    			
				    + '</div>',			
			width: 200,
	        height: 300,
	        padding: 10,
	        autoLoad: true 
        });
        
        function startButtonEvents () {
            document.getElementById('linkKML').addEventListener('click', function(){
                addKMLLayer();
            });
            
        };
        
        var kmlLayer;
        
        function addKMLLayer() {
            kmlLayer = new google.maps.KmlLayer(PATH_PROYECTO_BASE+'images/poligonos-zonas/poligonos_zonas.kml');
//            kmlLayer = new google.maps.KmlLayer('E:\\workspaces\\ws_developing\\AppMobile\\AppMobileWeb\\src\\main\\webapp\\librerias\\images\\poligonos-zonas\\poligonos_zonas.kml');
//        	kmlLayer = new google.maps.KmlLayer('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_depth.kml');
            kmlLayer.setMap(map);
        };
        
//        function drawGeometry() {
//            var areaPath = [];
//            for (var i=0; i < geoSubzonas.length; i++) {
//            	for (var j=0; i < geoSubzonas[i].length; j++) {
//            		console.log(geoSubzonas[i][j]);
////            		var tempLatLng = new google.maps.LatLng(geoSubzonas[i][j][1], geoSubzonas[i][j][0]);
////                    areaPath.push(tempLatLng);
//            	}
//            }
//            console.log(geoSubzonas);
//            console.log(areaPath);
//            
////            var polygon = new google.maps.Polygon({
////            	 paths: areaPath,
////                 strokeColor: '#FF0000',
////                 strokeOpacity: 0.9,
////                 strokeWeight: 3,
//////                 fillColor: '#FFFF00',
//////                 fillOpacity: 0.25,
////                 map: map
////            });
//            
//            
//        }
//        
//        function parseGeoJSON() {
////            $.getJSON(PATH_PROYECTO_BASE+'images/poligonos-zonas/geoSubzonasJson2.js', function(data) {
//            $.getJSON(PATH_PROYECTO_BASE+'images/poligonos-zonas/zonasJson.js', function(data) {
//                $.each(data.features, function(key, val) {
//                	drawGeometry();
//                    
//                });
//            });
//        }
//        
//        $("button").click(function(){
//            $.getJSON("demo_ajax_json.js", function(result){
//                $.each(result, function(i, field){
//                    $("div").append(field + " ");
//                });
//            });
//        });
        
        var btnSubzonas = {
	            xtype: 'button',
	            id: 'btnSubzonas',
	            margin: '0 5 0 0',
	            text: 'Mostrar subzonas',
	            handler:function(){
	            	
	            	for (var i=0; i < geoSubzonas.length; i++) {
//	            		console.log(geoSubzonas.length);
//	            		console.log(geoSubzonas[i].length);
	            		var areaPath = [];
	                	for (var j=0; j < geoSubzonas[i].length; j++) {
//	                		console.log("["+i+","+j+"]:"+"\t"+geoSubzonas[i][j]);
//	                		console.log("["+i+","+j+"]:"+"\t"+geoSubzonas[i][j][1]+"\t"+geoSubzonas[i][j][0]);
	                		var tempLatLng = new google.maps.LatLng(geoSubzonas[i][j][0], geoSubzonas[i][j][1]);
	                        areaPath.push(tempLatLng);
	                	}
//	                	polygon = new google.maps.Polygon({
	                	polygon = new google.maps.Polyline({
	                		path: areaPath,
//	                        strokeWeight: 7,
//	                        strokeColor: '#19A3FF',
	                        strokeOpacity: 0.8,
//	                		paths: areaPath,
			                strokeColor: '#FF0000',
//			                strokeOpacity: 0.9,
			                strokeWeight: 2,
//			                fillOpacity: 0.0,
//			                fillColor: '#FFFF00',
//			                fillOpacity: 0.25,
			                map: map
			            });
	                }
	            	
//	            	polygon.setMap(map);
//	            	addKMLLayer();
//	            	drawGeometry();
//	            	console.log(PATH_PROYECTO_BASE+'images/poligonos-zonas/geozonasJson.js');
	            }
	        };
        
        var mapPanel = Ext.create('Ext.Panel', {
        	id: 'mapPanel',
            html: 	'<div align=center><font face="calibri" size=5>Mapa de Calor</font></div><br/>'+
		            '<div id="mapDiv" style="width:600px;height:460px"></div>',
			width: 600,
	        height: 500,
//	        title: 'Mapa de calor',
//	        margin: '40 80 0 80',
	        autoLoad: true, 
            listeners :{
	            	afterrender : function(){
	            		google.maps.visualRefresh = true;
	            		pointArray = new google.maps.MVCArray(heatmapPoints);
//	            		console.log("pointArray");
//	            		console.log(pointArray);
//	            		var bluishStyle = [
//	  					  {
//	  						stylers: [
//	  						  { hue: "#4BB4AD" },
//	  						  { saturation: 50 },
//	  						  { lightness: -40 }
//	  						]
//	  					  },{
//	  						featureType: "road",
//	  						elementType: "geometry",
//	  						stylers: [
//	  						  { lightness: 100 },
//	  						  { visibility: "simplified" }
//	  						]
//	  					  },
//	  					  {
//	  						featureType: "water",
//	  						elementType: "geometry",
//	  						stylers: [
//	  						  { hue: "#007FFF" },
//	  						  {saturation:-40}
//	  						]
//	  					  },
//	  					  {
//	  						featureType: "administrative.neighborhood",
//	  						elementType: "labels.text.stroke",
//	  						stylers: [
//	  						  { color: "#E80000" },
//	  						  {weight: 1}
//	  						]
//	  					  },{
//	  						featureType: "road",
//	  						elementType: "labels.text",
//	  						stylers: [
//	  						  { visibility: "off" }
//	  						]
//	  					  },
//	  					  {
//	  						featureType: "road.highway",
//	  						elementType: "geometry.fill",
//	  						stylers: [
//	  						  { color: "#08FF00" },
//	  						  {weight: 2}
//	  						]
//	  					  }
//	  					];
	  					
	  					//create a new StyledMapType and reference it with the style array
//	  					var bluishStyledMap = new google.maps.StyledMapType(bluishStyle,
//	      					{name: "Bluish Google Base Maps with Pink Highways"});
	            		
	            		var styledMap6 = new google.maps.StyledMapType(style6, { name: "Táctico" });
	            		
	            		map = new google.maps.Map(document.getElementById('mapDiv'), {
	            			zoom: 14,
							center: new google.maps.LatLng(-12.121446, -77.030175),
//							center: new google.maps.LatLng(41.0083746002077,28.971582399708),
//							mapTypeId: google.maps.MapTypeId.ROADMAP,
//							mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'new_bluish_style']}
							mapTypeControlOptions: {
//					        	style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
								position:google.maps.ControlPosition.LEFT_TOP,
								mapTypeIds: [
					        			google.maps.MapTypeId.ROADMAP, 
					        			'style6',
					        		]
					        },
						  });
	            		
	            		map.mapTypes.set('style6', styledMap6);
	            		map.setMapTypeId('style6');
	            		
	            		heatmap = new google.maps.visualization.HeatmapLayer({
							data: pointArray,
							gradient: gradientScheme,
//							maxIntensity: 1
						});
	            		heatmap.setMap(map);
	            		
//	            		//relate new mapTypeId to the styledMapType object
//						map.mapTypes.set('new_bluish_style', bluishStyledMap);
//						//set this new mapTypeId to be displayed
//						map.setMapTypeId('new_bluish_style');
//	            		drawGeometry();
	            	}
            }
        });
        
        var dataStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'ChartModel',
		      storeId: 'chartStore',
		      autoLoad: true,
//		      extraParams: { params : -1},
		      proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-data',
					actionMethods : 'POST',
					async : false,
					reader : {
						type: 'json',
//						extraParams: { params : null},
						rootProperty : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
		      }
		});
        
		var serieStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'SerieModel',
		      storeId: 'serieStore',
		      autoLoad: true,
//		      extraParams: { params : -1},
		      proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-serie',
					actionMethods : 'POST',
					async : true,
					reader : {
						type: 'json',
//						extraParams: { params : null},
						rootProperty : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
		      }
		});
		
		var pieStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'PieModel',
		      storeId: 'pieStore',
		      autoLoad: true,
		      proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-pie',
					actionMethods : 'POST',
					async : true,
					reader : {
						type: 'json',
						rootProperty : 'data'
					},
					simpleSortMode : true
					,timeout:9999
		      }
		});
		
		var frecuenciaDiaStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'FrecuenciaDiaModel',
		      storeId: 'frecuenciaDiaStore',
		      autoLoad: true,
		      proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-frecuencia-dia',
					actionMethods : 'POST',
					async : true,
					reader : {
						type: 'json',
						rootProperty : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
		      }
		});
		
		var frecuenciaHoraStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'FrecuenciaHoraModel',
		      storeId: 'frecuenciaHoraStore',
		      autoLoad: true,
		      proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-frecuencia-hora',
					actionMethods : 'POST',
					async : true,
					reader : {
						type: 'json',
						rootProperty : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
		      }
		});
		
		var topZonaStore = Ext.create('Ext.data.Store', {
		      autoDestroy: true,
		      model: 'TopZonaModel',
		      storeId: 'topZonaStore',
		      autoLoad: true,
		      proxy : {
					type : 'ajax',
					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-top-zona',
					actionMethods : 'POST',
					async : true,
					reader : {
						type: 'json',
						rootProperty : 'data'
					},
					simpleSortMode : true
					,timeout:99999999
		      }
		});
		
//		var netStore = Ext.create('Ext.data.Store', {
//		      autoDestroy: true,
//		      model: 'NetworkData',
//		      storeId: 'netStore',
//		      autoLoad: true,
//		      proxy : {
//					type : 'ajax',
//					url:PATH_PROYECTO_BASE+'estadisticas-incidencias/json-prueba',
//					actionMethods : 'POST',
//					reader : {
//						type: 'json',
//						rootProperty : 'data'
//					},
//					simpleSortMode : true
//					,timeout:99999999
//		      }
//		});
		
//		var utlzStore = Ext.create('Ext.data.Store', {
//	          autoDestroy: true,
//	          model: 'BandwidthUtilisation',
//	          storeId: 'utlzStore',
//	          autoLoad: true,
//	          proxy: {
//	            type: 'ajax',
//	            url: PATH_PROYECTO_BASE+'estadisticas-incidencias/json-prueba2',
//	            reader: {
//	                type: 'json',
//	                idProperty: 'time',
//	                rootProperty: 'data'
//	            }
//	          }
//	    });
		
		var cbxUnidad = {
				xtype: 'ComboGeneric',
				id: 'cbxUnidad',
				margin: '0 0 10 0',
				width: 240,
				fieldLabel: 'Unidad',
				hideLabel: true,
//				labelWidth: 80,
				root:'data',
				emptyText: 'Unidad de Atención',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-unidad',
				queryMode: 'local',
				valueField:'codUnidad',
				displayField :'descUnidad',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoUnidad',
				model: unidadModel,
//				allowBlank:false,
				listeners:{
					select:function(f,record){
						Ext.getCmp('cbxCaso').reset();
				  		var vStoreCaso = Ext.getCmp('cbxCaso').store;
				  		vStoreCaso.load({
								params:{ cod:record.data.codUnidad },
								callback:function(){
								}		
							});
					}
				}
			};
		
		var cbxCaso = {
				xtype: 'ComboGeneric',
				id: 'cbxCaso',
				width: 240,
				fieldLabel: 'Caso',
				hideLabel: true,
				extraParams:{ cod: '-1' },
				emptyText: 'Tipo de Caso',
				root:'data',
				autoLoad:true,
				url:PATH_PROYECTO_BASE+'mapa-incidencia/lista-caso-por-unidad',
				queryMode: 'local',
				valueField:'codCaso',
				displayField :'descCaso',
				forceSelection:true,
				style:'margin-bottom:10px;',
				name:'tipoCaso',
				model: casoModel,
				listeners:{}
			};	
		
		
		var fecDesde = {
				xtype: 'datefield',
				id: 'fecDesde',
				fieldLabel: 'Desde',
				labelWidth: 40,
				editable: false,
	    		hideTrigger : true,
//	    		alwaysOnTop: true,
	    		onDownArrow: Ext.emptyFn
//	    		maxValue: new Date(2017,7,31)
			};
        var fecHasta = {
				xtype: 'datefield',
				id: 'fecHasta',
				fieldLabel: 'Hasta',
				labelWidth: 40,
				editable: false,
	    		hideTrigger : true,
//	    		maxValue: new Date(2017,7,31)
			};
        
        chartSerieKind = Ext.define('Chart.ux.Highcharts.chartSerie', {
        	extends: 'Chart.ux.Highcharts',
        	id: 'chartSerieKind',
            height: 400,
            width: 700,
            margin: '0 40 0 40',
            store: serieStore,
//            store: dataStore,
            series: [
            	{
            		type: 'line',
            		name: 'Incidencias',
                    yField: 'serie',
                    dashStyle: 'Solid',
//                    redraw: true,
             	}
//            	,
//             	{
//                    name: 'Ayer',
//                    yField: 'yesterday'
//                }
            ],
            xField: 'tiempo',
            redraw: true,
            chartConfig: {
            	chart: {
                },
                title: {
                	text: 'Evolución en el tiempo de incidencias'
                },
                credits: {
                	text: ''
                },
                yAxis: {
                   title: {
                      text: descripcion
                   }
                },
                legend: {
                   enabled: true
                },
                xAxis: {
                	labels: {
//              		formatter: function() {
//                         return chart.dateformat("%d/%m/%y", this.value * 1000);
//                      },
                    	rotation: 90,
                    	align: 'right',
                    	step: serieStore.getCount()/20
                	}
                },
                plotOptions: {
				    line: {
				        marker: {
				            enabled: false,
//				            lineWidth: 10
				        }
				    },
				    pointStart: Date.UTC(2017, 0, 1),
		            pointInterval: 24 * 3600 * 1000 // one day 
				}
            }
        });
        
        var chartSerie = Ext.create('Chart.ux.Highcharts', {
//        		xtype: 'highchart',
                id: 'chartSerie',
                height: 400,
                width: 600,
//                width: 600,
                margin: '50 0 50 0',
//                margin: '0 40 0 40',
                store: serieStore,
//                store: dataStore,
                series: [
                	{
                		type: 'line',
                		name: 'Incidencias',
	                    yField: 'serie',
	                    dashStyle: 'Solid',
//	                    redraw: true,
                 	}
//                	,
//                 	{
//	                    name: 'Ayer',
//	                    yField: 'yesterday'
//	                }
                ],
                xField: 'tiempo',
                redraw: true,
                chartConfig: {
                	chart: {
                    },
                    title: {
                    	text: 'Evolución en el tiempo de incidencias'
                    },
                    credits: {
                    	text: ''
                    },
                    yAxis: {
                       title: {
                          text: descripcion
                       }
                    },
                    legend: {
                       enabled: true
                    },
                    xAxis: {
                    	labels: {
//                  		formatter: function() {
//                             return chart.dateformat("%d/%m/%y", this.value * 1000);
//                          },
	                    	rotation: 290,
	                    	align: 'right',
//	                    	step: 10
	                    	step: serieStore.getCount()/20
                    	}
                    },
                    plotOptions: {
					    line: {
					        marker: {
					            enabled: false,
//					            lineWidth: 10
					        }
					    },
					    pointStart: Date.UTC(2017, 0, 1),
			            pointInterval: 24 * 3600 * 1000 // one day 
					}
                }
        	});
        
        var chartPie = Ext.create('Chart.ux.Highcharts', {
//				xtype: 'highchart',
				height: 400,
				width: 600,
//				width: 900,
				margin: '50 0 50 0',
//				maxHeight: 500,
//				maxWidth: 500,
//				align: 'center',
				id: 'chartPie',
//				autoload: true,
				store: pieStore,
//				store: dataStore,
				series: [
					{
						// Inner pie
						type: 'pie',
//						type: 'column',
						categorieField: 'descExtended',
						dataField: 'cant',
//						totalDataField: true,
						size: '70%',
						dataLabels: {
							enabled: true
						},
						showInLegend: false,
					}
//					, 
//					{
//						// Inner pie
//						type: 'pie',
//						categorieField: 'host',
//						dataField: 'bytes',
//						totalDataField: true,
//						size: '80%',
//						dataLabels: {
//							enabled: false
//						},
//						showInLegend: true
//					}
//					,
//					{
//						// Outer pie
//						type: 'pie',
//						categorieField: 'direction',
//						dataField: 'bytes',
//						innerSize: '60%',
//						colorField: 'color',
//						dataLabels: {
//							formatter: function() {
//								if (this.point.x <= 1) {
//									return this.point.name;
//								}
//								return null;
//							}
//						}
//					}
				],
//				chartConfig: {
//                    chart: {
//                    },
//                    title: {
//                       text: 'Evolución en el tiempo de incidencias'
//                    },
//                    credits: {
//                   	 text: ''
//                    },
//                    yAxis: {
//                       title: {
//                          text: descripcion
//                       }
//                    },
//                    legend: {
//                       enabled: true
//                    },
//                    xAxis: {
////                   	type: 'datetime',
////                       dateTimeLabelFormats: { // don't display the dummy year
////                          month: '%e. %b',
////                          year: '%b'
////                       },
//                       labels: {
////                          formatter: function() {
////                             return chart.dateformat("%d/%m/%y", this.value * 1000);
////                          },
//                          rotation: 315,
//                          align: 'right',
//                          step: 10
//                       }
//                       
//                    }
//                },
				chartConfig: {
					chart: {
					},
					credits: {
						text: ''
					},
					title: {
						text: 'Composicion de incidencias'
					},
					
				}

			});
        
        var chartBar = {
        		xtype: 'highchart',
                id: 'chartBar',
                height: 400,
                width: 500,
//                margin: '40 80 0 80',
                store: frecuenciaDiaStore,
//                store: dataStore,
                series: [
                	{
                		type: 'column',
                		name: 'Frecuencia media',
	                    yField: 'fr'
                 	}
//                	,
//                 	{
//	                    name: 'Ayer',
//	                    yField: 'yesterday'
//	                 }
                ],
                 xField: 'dia',
                 
                 chartConfig: {
                     chart: {
                    	 inverted: true,
                     },
                     title: {
                        text: 'Frecuencia promedio por día'
                     },
                     credits: {
                    	 text: ''
                     },
                     yAxis: {
                        title: {
                           text: ''
                        }
                     },
                     plotOptions: {
                         column: {
                             colorByPoint: true,
                             dataLabels: {
                                 enabled: true,
                                 color: '#000000',
//                                 x: -50,
//                                 y: 0,
                                 formatter: function() {
                                     return Highcharts.numberFormat(this.y, 2);
                                 },
                                 style: {
//                                     fontWeight: 'bold'
                                 },
                                 align: 'left'
                             }
                         }
                     },
                     legend: {
                        enabled: true
                     },
                     xAxis: {
                        labels: {
//                           rotation: 315,
                           align: 'right',
//                           step: 10
                        }
                     }
                 }
        	};
        
        var chartBar2 = {
        		xtype: 'highchart',
                id: 'chartBar2',
                height: 400,
                width: 700,
//                margin: '40 80 0 80',
                store: frecuenciaHoraStore,
//                store: dataStore,
                series: [
                	{
                		type: 'column',
                		name: 'Frecuencia media',
	                    yField: 'fr'
                 	}
//                	,
//                 	{
//	                    name: 'Ayer',
//	                    yField: 'yesterday'
//	                 }
                ],
                 xField: 'hora',
                 
                 chartConfig: {
                     chart: {
//                    	 inverted: true,
                     },
                     title: {
                        text: 'Frecuencia promedio por hora'
                     },
                     credits: {
                    	 text: ''
                     },
                     yAxis: {
                        title: {
                           text: ''
                        }
                     },
                     plotOptions: {
                         column: {
//                             colorByPoint: true,
                             color: '#008000',
                             dataLabels: {
//                                 enabled: true,
//                                 color: '#F4F4F4',
//                                 x: -50,
//                                 y: 0,
                                 formatter: function() {
                                     return Highcharts.numberFormat(this.y, 0);
                                 },
//                                 style: {
//                                     fontWeight: 'bold'
//                                 }
                             }
                         }
                     },
                     legend: {
                        enabled: true
                     },
                     xAxis: {
                        labels: {
//                           rotation: 315,
                           align: 'right',
//                           step: 1
                        }
                     }
                 }
        	};
        
        var chartBarZona = {
        		xtype: 'highchart',
                id: 'chartBarZona',
                height: 400,
                width: 500,
//                margin: '40 40 0 40',
                store: topZonaStore,
//                store: dataStore,
                series: [
                	{
                		type: 'column',
                		name: 'Cantidad de incidencias',
	                    yField: 'cant'	
                 	}
//                	,
//                 	{
//	                    name: 'Ayer',
//	                    yField: 'yesterday'
//	                 }
                ],
                 xField: 'zona',
                 
                 chartConfig: {
                     chart: {
                    	 inverted: true,
                     },
                     title: {
                        text: 'Ranking de zonas con mayores incidencias'
                     },
                     credits: {
                    	 text: ''
                     },
                     yAxis: {
                        title: {
                           text: ''
                        }
                     },
                     plotOptions: {
                         column: {
//                             colorByPoint: true,
//                        	 color: '#ffa500',
                        	 color: '#C80000',
                             dataLabels: {
                                 enabled: true,
                                 color: '#000000',
//                                 x: 0,
//                                 y: 0,
                                 formatter: function() {
                                     return Highcharts.numberFormat(this.y, 0);
                                 },
                                 style: {
//                                     fontWeight: 'bold'
                                 }
                             }
                         }
                     },
                     legend: {
                        enabled: true
                     },
                     xAxis: {
                        labels: {
//                           rotation: 315,
                           align: 'right',
//                           step: 10
                        }
                     }
                 }
        	};
        
        function getPoints(ec){
        	$.ajax({
        		url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-heatmap',
			    dataType: "json",
			    async : true,
//			    data:{ec: ec},
			    data:{unidad:ec.codUnidad,caso:ec.codCaso,fecDesde:ec.fecDesde,fecHasta:ec.fecHasta},
			    success: function( response ) {
//			    	console.log("getPoint success");
			    	var result = response.data || [];
			    	if(result.length>0){
			    		var arrPoints = [];
//			    		console.log("result.length: "+result.length);
						for (var i = 0; i < result.length; i++) {
							arrPoints.push( new google.maps.LatLng(parseFloat(result[i].longitud), parseFloat(result[i].latitud) ));
						}
						heatmapPoints = [];
						heatmapPoints = arrPoints;
//						console.log("heatmapPoints.length: "+heatmapPoints.length)
//            			console.log("refreshMap()");
            			refreshMap();
//            			chartSerie.update();
////                    	chartSerie.redraw();
//                    	chartSerie.chart.redraw();
			    	} else {
			    		heatmapPoints = [];
//			    		cleanMap();
            			refreshMap();
			    	}
			    	
//			    	var geojson = {};
//		        	geojson['type'] = 'FeatureCollection';
//		        	geojson['features'] = [];
//
//		        	for (var k in result) {
//		        		var newFeature = {
//		        			"type": "Feature",
//		        			"geometry": {
//		        				"type": "Point",
//		        				"coordinates": [parseFloat(result[k].latitud), parseFloat(result[k].longitud)]
//		        			},
//		        			"properties": {
//		        				"description": result[k].detalle
//		        			}
//		        		}
//		        		geojson['features'].push(newFeature);
//		        	}
//			    	
			    }
			});
        
        	
        	
        	
    	function changeGradient() {
                var gradient = [
                  'rgba(0, 255, 255, 0)',
                  'rgba(0, 255, 255, 1)',
                  'rgba(0, 191, 255, 1)',
                  'rgba(0, 127, 255, 1)',
                  'rgba(0, 63, 255, 1)',
                  'rgba(0, 0, 255, 1)',
                  'rgba(0, 0, 223, 1)',
                  'rgba(0, 0, 191, 1)',
                  'rgba(0, 0, 159, 1)',
                  'rgba(0, 0, 127, 1)',
                  'rgba(63, 0, 91, 1)',
                  'rgba(127, 0, 63, 1)',
                  'rgba(191, 0, 31, 1)',
                  'rgba(255, 0, 0, 1)'
                ]
//                heatmap.setMap('gradient', heatmap.get('gradient') ? null : gradient);
              }
        	
//        	
//        	$.ajax({
//        		url:PATH_PROYECTO_BASE+'estadisticas-incidencias/get-heatmap',
//			    dataType: "json",
////			    async : true,
//			    data:{ec: ec},
//			    success: function( response ) {
//			    	var arrPoints = [];
//					
//					for (var i = 0; i < response.data.length; i++) {
//						arrPoints.push( new google.maps.LatLng(parseFloat(response.data[0].latitud), parseFloat(response.data[0].longitud)) );
//					}
//					
//					heatmapPoints = arrPoints;
//                	
//					heatmapStore.proxy.extraParams = ec;
//                	heatmapStore.load();
//                	
//                	var heatmap = new google.maps.visualization.HeatmapLayer({
//						data: heatmapPoints
//					});
//                	
//			   },
//			   
//			   
//        	});
        	
        };
        
        function cleanMap(){
        	var aux =  new Object();
        	aux.codUnidad = -1;
//        	getPoints(aux);
        	heatmapPoints=[];
        	
        }
        
        var btnConsulta = {
                xtype: 'button',
                margin: '0 5 0 10',
                text: 'CONSULTAR',
                labelWidth: 60,
                
                handler:function(){
                	
                    if ((Ext.getCmp('fecDesde').getValue()<=Ext.getCmp('fecHasta').getValue())
                    		||Ext.getCmp('fecDesde').getValue()==null||Ext.getCmp('fecHasta').getValue()==null){
                    	
//                    	cleanMap();
                		
                    	var ec =  new Object();
                    	if(Ext.getCmp('cbxUnidad').getValue()!=null){ ec.codUnidad = Ext.getCmp('cbxUnidad').getValue(); }
                    	if(Ext.getCmp('cbxCaso').getValue()!=null){ ec.codCaso = Ext.getCmp('cbxCaso').getValue(); }
                    	if(Ext.getCmp('fecDesde').getValue()!=null){ ec.fecDesde = Ext.Date.format(Ext.getCmp('fecDesde').getValue(), 'd/m/Y'); }
                    	if(Ext.getCmp('fecHasta').getValue()!=null){ ec.fecHasta = Ext.Date.format(Ext.getCmp('fecHasta').getValue(), 'd/m/Y'); }
                    	
                    	
                    	
                    	
                    	serieStore.proxy.extraParams = ec;
                    	pieStore.proxy.extraParams = ec;//-------
//                    	heatmapStore.proxy.extraParams = ec;
                    	topZonaStore.proxy.extraParams = ec;
                    	frecuenciaDiaStore.proxy.extraParams = ec;
                    	frecuenciaHoraStore.proxy.extraParams = ec;
                    	
                    	serieStore.load();
                    	
//                    	pieStore.removeAll();
//                    	console.log("ANTES: "+pieStore.getCount());
//                    	console.log("ANTES: "+pieStore.data.length);
                    	
                    	pieStore.load();
                    			
//                    	pieStore.load({
//                    		callback: function(records, operation, success){
//                    			console.log("---------------------------------");
//                    			console.log(records);
//                    			console.log(operation);
//                    			console.log(success);                    			
//                    			console.log("---------------------------------");
//                    			
//                    			if(records.length==0){
//                    				$("#chartPie").remove();
//                    			} else {
//                    				var chartPie1 = Ext.create('Chart.ux.Highcharts', {
////                    					xtype: 'highchart',
//                    					height: 400,
//                    					width: 600,
////                    					maxHeight: 500,
////                    					maxWidth: 500,
//                    					id: 'chartPie1',
////                    					autoload: true,
//                    					store: pieStore,
////                    					store: dataStore,
//                    					series: [
//                    						{
//                    							// Inner pie
//                    							type: 'pie',
////                    							type: 'column',
//                    							categorieField: 'desc',
//                    							dataField: 'cant',
////                    							totalDataField: true,
//                    							size: '80%',
//                    							dataLabels: {
//                    								enabled: true
//                    							},
//                    							showInLegend: false,
//                    						}
////                    						, 
////                    						{
////                    							// Inner pie
////                    							type: 'pie',
////                    							categorieField: 'host',
////                    							dataField: 'bytes',
////                    							totalDataField: true,
////                    							size: '80%',
////                    							dataLabels: {
////                    								enabled: false
////                    							},
////                    							showInLegend: true
////                    						}
////                    						,
////                    						{
////                    							// Outer pie
////                    							type: 'pie',
////                    							categorieField: 'direction',
////                    							dataField: 'bytes',
////                    							innerSize: '60%',
////                    							colorField: 'color',
////                    							dataLabels: {
////                    								formatter: function() {
////                    									if (this.point.x <= 1) {
////                    										return this.point.name;
////                    									}
////                    									return null;
////                    								}
////                    							}
////                    						}
//                    					],
//                    					chartConfig: {
//                    	                    chart: {
//                    	                    },
//                    	                    title: {
//                    	                       text: 'Evolución en el tiempo de incidencias'
//                    	                    },
//                    	                    credits: {
//                    	                   	 text: ''
//                    	                    },
//                    	                    yAxis: {
//                    	                       title: {
//                    	                          text: descripcion
//                    	                       }
//                    	                    },
//                    	                    legend: {
//                    	                       enabled: true
//                    	                    },
//                    	                    xAxis: {
////                    	                   	type: 'datetime',
////                    	                       dateTimeLabelFormats: { // don't display the dummy year
////                    	                          month: '%e. %b',
////                    	                          year: '%b'
////                    	                       },
//                    	                       labels: {
////                    	                          formatter: function() {
////                    	                             return chart.dateformat("%d/%m/%y", this.value * 1000);
////                    	                          },
//                    	                          rotation: 315,
//                    	                          align: 'right',
//                    	                          step: 10
//                    	                       }
//                    	                    }
//                    	                },
//                    					chartConfig: {
//                    						chart: {
//                    						},
//                    						credits: {
//                    							text: ''
//                    						},
//                    						title: {
//                    							text: 'Composicion de incidencias'
//                    						},
//                    						
//                    					}
//
//                    				});
//                    				var cmp = Ext.getCmp('container1')
//                    				cmp.add(chartPie1);
//                    			}
//                    		}
//                    	});
                    	
                    	
                    	
                    	
                    	
//                    	setTimeout(function(){
//                    		console.log("PIESTPRE ---: ");
//                    		console.log(pieStore.getCount());
//                    		
////                    		if(pieStore.getCount()==0){                    			
////                    			$("#chartPie").remove();
////                    		}
//                    		$("#chartPie").store = [];
//                    		
//                    		pieStore.load();
//                    		
//						}, 500);
                    	
//                    	console.log("DESPUES: "+pieStore.getCount());
//                    	console.log("DESPUES: "+pieStore.data.length);
                    	//pieStore.load();//--------
                    	frecuenciaDiaStore.load();
                    	frecuenciaHoraStore.load();
//                    	heatmapStore.load();
                    	topZonaStore.load();
                    	
                    	console.log("serieStore: \t"+serieStore.getCount());
                    	console.log("pieStore: \t"+pieStore.getCount());
//                    	console.log("heatStore: \t"+heatmapStore.getCount());
//                    	console.log("zonaStore: \t"+topZonaStore.getCount());
//                    	console.log("diaStore: \t"+frecuenciaDiaStore.getCount());
//                    	console.log("horaStore: \t"+frecuenciaHoraStore.getCount());
                    	
                    	chartSerie.update();
//                    	chartSerie.redraw();
                    	chartSerie.chart.redraw();
                    	
//                    	chartSerie.redraw();
                    	
//                    	chartPie.update();
////                    	console.log("Paso el chartPie.update();");
////                    	chartSerie.redraw();
//                    	chartPie.chart.redraw();
                    	
//                    	setTimeout(function(){
//                    		chartSerie.redraw();
//                    		chartSerie.update();
//                    	},1500);
                    	
                    	

//                    	chartSerie.redraw;
                    	
//                    	chart.redraw;
//                    	Ext.getCmp('chartSerie').redraw();
                    	
//                    	chartSerie.series[1].name= "descripcion";
//                    	chartSerie.redraw();
//                		chartPie.series[0].remove();
//                		chartBar.series[0].remove();
                    	
//                    	console.log("antes hay heatmapPoints?: "+heatmapPoints.length);
                    	
//                    	setTimeout(function () {
//                    		getPoints(ec);
//                        }, 500);
                    	
                    	/*
                    	 * 
                    	 * 
                    	 * 
                    	 * COMENTADO TEMPORALMENTE HASTA TENER TODA LA DATA GEORREFERENCIADA
                    	 *
                    	 *
                    	 *
                    	 *
                    	 */
                    	getPoints(ec);
                    	
//                    	console.log("despues hay heatmapPoints?: "+heatmapPoints.length);
                    	
//                		console.log("heatmapPoints.length = "+heatmapPoints.length);
                		
//                		if (heatmapPoints.length>0 && heatmapPoints!=null){
//                			console.log("heatmapPoints.length: "+heatmapPoints.length)
//                			console.log("refreshMap()");
//                			refreshMap();
//                		} else {
//                			console.log("cleanMap()");
//                			cleanMap();
//                			refreshMap();
////                			Ext.getCmp('mapPanel').refresh();
//                		}
//                		changeGradient();
                		
                		
                		Ext.id();
                		
//                		heatmapPoints = arrPoints;
//                    	Ext.getCmp('mapPanel').getLoader().load();
//                    },
//                		console.log("finaliza el handler del boton");
                    } else {
                    	console.log("La fecha de inicio no puede ser mayor que la fecha fin");
    					Ext.Msg.alert('Rango de tiempo erroneo','La fecha de inicio no puede ser mayor que la fecha fin', Ext.emptyFn);
                    }
                    
                },
        		
        	}
        
        var btnLimpiar = {
                xtype: 'button',
                margin: '0 10 0 5',
                text: 'LIMPIAR',
                labelWidth: 60,
                handler:function(){
                	Ext.getCmp('cbxUnidad').reset();
	            	Ext.getCmp('cbxCaso').reset();
	            	Ext.getCmp('fecDesde').reset();
	            	Ext.getCmp('fecHasta').reset();
	            	Ext.id();
                }
        	};
        
        var userSplitBtn = {
	            xtype:'splitbutton',
	            text: DES_LOGIN,
	            iconCls: 'btnUser16',
	            menu: [
	            		{
	            			text: 'Cerrar Sesion',
	            			iconCls: 'btnLogout16',
	            			href:PATH_PROYECTO_BASE+'log-out'
	            		}
	            ]
	        };
		
        function refreshMap() {
//        	console.log("entra a refreshMap");
        	heatmap.setMap(null);
        	heatmap = null;
            map.setZoom(map.getZoom()); // this renews the view and forces new data to be requested
            setTimeout(function () {
            	heatmap = new google.maps.visualization.HeatmapLayer({
					data: heatmapPoints,
					map:map,
					gradient: gradientScheme,
					maxIntensity: 2,
					radius: 10,
					dissipating: true,
					opacity: 0.5
					
				});
        		heatmap.setMap(map);
            }, 100);
        }
        
        Ext.onReady(function() {

        	
        	
	    	var mainview = Ext.create('Ext.container.Viewport', {
//				height: 1000,
//				width: 1200,
	    		id: idWin+'win-estadistica',
				defaults: {
					frame: true
				},
				itemId: 'mainView',
//			    layout: 'border',
//			    layout: 'form',
//			    align: 'center',
//			    layout: 'fit',
//			    layout: 'anchor',
			    
			    layout: {
			        type: 'vbox',
			        align: 'middle'
			    },
			    items: [
			        {
			            xtype: 'container',
			            layout: 'form',
			            items: [
			            	{
			                    xtype: 'container',
			                    layout: 'column',
//			                    layout: {
//			                        type: 'hbox',
////			                        align: 'middle'
//			                        	 align: 'stretch'
//			                    },
			                    items: [
			                    	cbxUnidad,
					            	cbxCaso,
					            	fecDesde,
					            	fecHasta,
					            	btnConsulta,
					            	btnLimpiar,
//					            	'->',
					            	userSplitBtn
			                    ]
			                },
			            	{
			                    xtype: 'container',
//			                    id: 'container1',
			                    layout: {
			                        type: 'hbox',
			                        align: 'stretch'
			                    },
//			                    width: 1400,
			                    items: [
			                    	chartSerie,
			                    	mapPanel,
			                    	chartPie
			                    ]
			                },
			                {
			                    xtype: 'container',
			                    layout: {
			                        type: 'hbox',
			                        align: 'stretch'
			                    },
			                    items: [
			                    	chartBarZona,
					            	chartBar,
					            	chartBar2,
			                    ]
			                },
			                
			            ]
			        }
			    ],
			    
			    
//				items: [
////					{
////			            xtype: 'panel',
////			            region: 'north',
////			            height: 100,
////			            itemId: 'headerPanel',
////			            title: 'ESTADISTICAS INTEGRADAS',
////			            layout: 'column',
////			            dockedItems: [
////			                {
////			                    xtype: 'toolbar',
////			                    dock: 'top',
////			                    items: [
////			                    	cbxUnidad,
////					            	cbxCaso,
////					            	fecDesde,
////					            	fecHasta,
////					            	btnConsulta,
////					            	btnLimpiar,
////					            	'->',
////					            	userSplitBtn
////			                    ]
////			                }
////			            ]
//////	                    items: [
//////	                    	cbxUnidad,
//////			            	cbxCaso,
//////			            	fecDesde,
//////			            	fecHasta,
//////			            	btnConsulta,
//////			            	btnLimpiar,
////////			            	'->',
//////			            	userSplitBtn
//////	                    ]
////			        },
//			        {
//			            xtype: 'panel',
//			            region: 'center',
//			            id: 'contentPanel',
//			            itemId: 'contentPanel',
//			            layout: 'form',
////			            width: 1200,
//			            scrollable: 'true',
//			            overflowX: 'scroll',
//			            header: true,
////			            title: 'Content',
//			            title: 'ESTADISTICAS INTEGRADAS',
//			            items: [
//			            	{
//			                    xtype: 'container',
//			                    layout: 'column',
//			                    items: [
//			                    	cbxUnidad,
//					            	cbxCaso,
//					            	fecDesde,
//					            	fecHasta,
//					            	btnConsulta,
//					            	btnLimpiar,
////					            	'->',
//					            	userSplitBtn
//			                    ]
//			                },
//			            	{
//			                    xtype: 'container',
////			                    id: 'container1',
//			                    layout: 'hbox',
////			                    width: 1400,
//			                    items: [
//			                    	chartSerie,
//			                    	mapPanel,
//			                    	chartPie
//			                    ]
//			                },
////			                {
////			                    xtype: 'container',
////			                    layout: 'column',
////			                    items: [
////					            	mapPanel,
////					            	chartBarZona,
////					            	btnSubzonas
////			                    ]
////			                },
//			                {
//			                    xtype: 'container',
//			                    layout: 'hbox',
//			                    items: [
//			                    	chartBarZona,
//					            	chartBar,
//					            	chartBar2,
////					            	inicio,
////					            	fin,
////					            	chart
//			                    ]
//			                },
////			            	{
////			                    xtype: 'container',
////			                    layout: 'column',
////			                    items: [
////			                        {
////			                            xtype: 'datefield',
////			                            width: 200,
////			                            fieldLabel: 'Hasta',
////			                            labelWidth: 40
////			                        },
////			                        {
////			                            xtype: 'combobox',
////			                            fieldLabel: 'Label',
////			                            hideLabel: true,
////			                            emptyText: 'Unidad de Atención'
////			                        }
////			                    ]
////			                },
////			                {
////			                    xtype: 'container',
////			                    layout: 'column',
////			                    items: [
////			                        {
////			                            xtype: 'combobox',
////			                            fieldLabel: 'Label',
////			                            hideLabel: true,
////			                            emptyText: 'Tipo de Caso'
////			                        }
////			                    ]
////			                }
//			            ]
//			        },
////			        {
////			            xtype: 'panel',
////			            itemId: 'contentPanel',
////			            padding: '0 40 70 10',
////			            scrollable: 'true',
////			            layout: 'form',
////			            width: 1200,
////			            header: false,
////			            title: 'Content',
////			            items: [
////			                {
////			                    xtype: 'container',
////			                    
////			                    layout: 'column',
////			                    items: [
////			                        {
////			                            xtype: 'datefield',
//////			                            width: 200,
////			                            fieldLabel: 'Hasta',
//////			                            labelWidth: 40
////			                        },
////			                        {
////			                            xtype: 'combobox',
////			                            fieldLabel: 'Label',
////			                            hideLabel: true,
////			                            emptyText: 'Unidad de Atención'
////			                        }
////			                    ]
////			                },
////			                {
////			                    xtype: 'container',
////			                    layout: 'column',
////			                    items: [
////			                        {
////			                            xtype: 'combobox',
////			                            fieldLabel: 'Label',
////			                            hideLabel: true,
////			                            emptyText: 'Tipo de Caso'
////			                        }
////			                    ]
////			                }
////			            ]
////			        },
//			        {
//			            xtype: 'panel',
//			            region: 'south',
//			            height: 100,
//			            hidden: true,
//			            itemId: 'footerPanel',
//			            title: 'Footer'
//			        }
//				]
			});
	    });
        
