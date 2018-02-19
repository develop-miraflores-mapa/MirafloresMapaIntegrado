var Util = new Object();
Util = {
		UiAlerta:function(config){
			
			var idWinAlerta=config.idWindowAlerta || Ext.id();
			
			var buttons=config.buttons || new Array();
			
			if(!config.buttons){
			
				buttons.push({
								text : 'Aceptar',
								scale : 'medium',
								iconCls : config.iconCls || 'btnAprobedMedium',
								handler : function() {
									Ext.getCmp(idWinAlerta).close();
									
									if (config.fn_execute) {
										config.fn_execute();
									}
	
								}
	
							});
							
				if(config.isConfirm){
				
					buttons.push({
								text : 'Cancelar',
								scale : 'medium',
								iconCls : config.iconClsCancelar || 'btnCancelMedium',
								handler : function() {
									Ext.getCmp(idWinAlerta).close();
									if(config.fn_cancel){
									config.fn_cancel();
									}
								}
	
							})
				
				}
			
			}
			
		Ext.create('Ext.window.Window', {
			id:idWinAlerta,
			closable : false,
			modal:true,
			width : config.width || 400,
			y : (config.y?config.y:undefined),
			draggable : false,
			resizable : false,
			listeners : {

				afterrender : function(thisWin) {
				
				$(window).scroll(function() {
					
					try {
						var arrPos = thisWin.getPosition();
						thisWin.setPosition(arrPos[0], (config.marginTop?$(window).scrollTop()+config.marginTop:$(window).scrollTop()+ thisWin.getHeight()+100)  );
					} catch (e) {

					}					

				});
				
				}
				,
				show:function( this_win ){}

			},
			border : false,
			style : 'background:#fff;',
			bodyStyle : 'background:#fff;padding:5px 10px 5px 10px;',
			layout : 'fit',
			items : {
				xtype : 'panel',
				border : false,
				style : 'background:#fff;',
				bodyStyle : 'background:#fff;padding:5px 3px 2px 3px;',
				html : '<div style="color:#333;text-align:center;margin-bottom:0px;padding:10px 5px 5px 5px;">' +
							'<span style="font-size:13px;color:#666;"><b>'
							+ config.mensaje + '' +
							'</b></span>' +
						'</div> ' + '',
				buttons : buttons
			}
		}).show();
			
		}
		,
		runAjax : function(config) {
		
			var ret;
			if (config.msg) {
				Ext.MessageBox.wait('Espere un momento porfavor...');
			}
			Ext.Ajax.request({
						url : config.url,
						async : config.async,
						timeout:config.timeout || 500000000,
						headers : {
							Accept : 'application/json, text/javascript, */*; q=0.01'
						},
						method : config.method,
						callback : config.callback
								|| function(options, success, response) {
									if (config.msg) {
										Ext.MessageBox.updateProgress(1);
										Ext.MessageBox.hide();
									}
									ret = Ext.decode(response.responseText);
								},
						listeners : {
							beforerequest : config.beforerequest
						},
						success : config.success || function(response) {
							ret = Ext.decode(response.responseText);
		
							if (ret.success
									&& (ret.message != '' && ret.message != null)) {
		
								if (config.showAlert) {
									alert(ret.message);
								}
							} else if (!ret.success) {
		
								if (ret.message) {
									if (config.showAlert) {
										alert(ret.message);
									}
								}
							}
						},
						failure : config.failure || function(response) {
							//alert(Util.Ajax.getAlerta(MSG_REGISTRE_CORRECTAMENTE));
						},
						params : config.params,
						jsonData : config.jsonParam
					});
			return ret;
		
		}
		,
		windowGeoreferenciaPunto:function(options){
		
		options = options || {};
		
		var idBotonGrabar = options.idBotonGrabar || 'cmd-btn-grabar-component-generic';
		
		var idCanvasMap = options.idCanvasMap || 'mapa-component-generic';
		
		var markersSelectors = [];
		
		var map = null;
		
		function buildMapaSelector(config){
			
			var marker;
			var myLatlng = new google.maps.LatLng(parseFloat(config.lat) , parseFloat(config.lon) );
			
			
			var myOptions = {
				zoom : config.zoom || 15,
				center : myLatlng,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
		
			var map = new google.maps.Map(document.getElementById(config.idContent), myOptions);
				
					
			google.maps.event.addListener(map, 'click', function(event) {
			 
				placeMarker(event.latLng);

			});
			
			function placeMarker(location) {
				
				Ext.each(markersSelectors,function(m){
					m.setMap(null);
				});
				
				markersSelectors = [];
				
			    var markerEl = new google.maps.Marker({
			        position: location, 
			        map: map,
							animation : google.maps.Animation.DROP,
							draggable : true
			    });
		
			    markersSelectors.push(markerEl);
			    
			    google.maps.event.addListener(markerEl, 'dragend', function(event) {																		
					Ext.getCmp(config.idBtnComand).punto={
						lat:event.latLng.lat()
						,lng:event.latLng.lng()
					}
					
				});
			    
			   	Ext.getCmp(config.idBtnComand).punto={
					lat:location.lat()
					,lng:location.lng()
				}
			}
		
			
		}

		var idComboBox = options.idComboBox || 'cbx-geo-calles-component';
		
		var cbxCalles = Ext.widget('ComboGeneric',{
						   hideTrigger : true,
						   id:idComboBox,
						   width: options.width || 450,
		            	   root:'data',
		            	   autoLoad:false,
		            	   url:PATH_PROYECTO_BASE+'catastro/obtener-georeferencia-via',
		            	   queryMode: 'remote',
		            	   emptyText:'Aproximar calles',
		            	   minChars:3,
		            	   valueField:'gid',
		            	   displayField :'displayValue',
		            	   queryDelay : 1000,
		            	   forceSelection:true,
		            	   model:
		            		   {
		            		   	nameModel:'CalleGeo'
		            		   	,fields:['__gid','toponimia','tipo','cdra','punto','poligono'
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
							
								Ext.getCmp(idBotonGrabar).punto = null;
							
									Ext.each(markersSelectors,function(m){
										m.setMap(null);
									});
														
									markersSelectors = [];
								
									Ext.getCmp(idBotonGrabar).punto={
																lat:parseFloat(record.data.punto.split(' ')[1])
																,lng:parseFloat(record.data.punto.split(' ')[0])
															}
									
									Ext.getCmp(idBotonGrabar).setDisabled(false);						
															
									var center = new google.maps.LatLng(parseFloat(record.data.punto.split(' ')[1]), parseFloat(record.data.punto.split(' ')[0]));
									
									var marker = new google.maps.Marker({
									    position: center,
									    map: map,
										draggable : true
									  });
									  
									  markersSelectors.push(marker);
									
									map.setCenter(center);
									map.setZoom(17);

		            	  		
		            	  	}
		            	  }	   
					});
		
		var idWindow = options.idWindow || 'winComponentMapaPunto';
					
		if(Ext.getCmp(idWindow)){
			Ext.getCmp(idWindow).show();
			return;
		}
		
		Ext.create('Ext.window.Window', {
			    title: options.title || 'Georeferencia',
			    modal:true,
			    resizable:false, 
			    id: idWindow,
			    height: options.height || 450,
			    width: options.width || 450,
			    layout: 'column'
			    ,listeners:{
			    			
			    				show:function(){
			    					
			    					var myLatLng = {lat: -12.121084126455873, lng: -77.02935755252838};
			
										map = new google.maps.Map(document.getElementById(idCanvasMap), {
												zoom:  16,
												center: myLatLng
										});
										
										google.maps.event.addListener(map, 'click', function(event) {
													 
														console.log(event)
													    Ext.getCmp(idBotonGrabar).setDisabled(false);
														placeMarkerInit(event.latLng);
										
													});
										
										
										function placeMarkerInit(location) {
														
														Ext.each(markersSelectors,function(m){
															m.setMap(null);
														});
														
														markersSelectors = [];
														
													    var markerEl = new google.maps.Marker({
													        position: location, 
													        map: map,
															animation : google.maps.Animation.DROP,
															draggable : true
													    });
												
													    markersSelectors.push(markerEl);
														
														 google.maps.event.addListener(markerEl, 'dragend', function(event) {																		
															Ext.getCmp(idBotonGrabar).punto={
																lat:event.latLng.lat()
																,lng:event.latLng.lng()
															}
															
														});
														
														Ext.getCmp(idBotonGrabar).punto={
															lat:location.lat()
															,lng:location.lng()
														}
													    
													
													}
													
													//alert(options.idCordenadas)
													console.log(Ext.getCmp(options.idCordenadas).getValue());
													
		    								
											if(Ext.getCmp(options.idCordenadas) && !Ext.isEmpty(Ext.getCmp(options.idCordenadas).getValue())){
											
												
												var latLon = {
			    												lat:Ext.getCmp(options.idCordenadas).getValue().split(' ')[0]
			    												,lon:Ext.getCmp(options.idCordenadas).getValue().split(' ')[1]
			    												}
												
												Ext.each(markersSelectors,function(m){
													m.setMap(null);
												});
																	
												markersSelectors = [];
											
												Ext.getCmp(idBotonGrabar).punto={
																			lat:parseFloat(latLon.lat)
																			,lng:parseFloat(latLon.lon)
																		}
												
												Ext.getCmp(idBotonGrabar).setDisabled(false);						
																		
												var center = new google.maps.LatLng(parseFloat(latLon.lat), parseFloat(latLon.lon));
												
												var marker = new google.maps.Marker({
												    position: center,
												    map: map,
													draggable : true
												  });
												  
												  markersSelectors.push(marker);
												
												map.setCenter(center);
												map.setZoom(17);
												
											}		
			    					
			    				}
			    				
			    			},
			    items: [
			    		cbxCalles,
			    		{
			    			xtype:'panel'
			    			,width: (options.width || 450)-5
			    			,height: (options.height || 450)-123
			    			,html:'<div style="width:100%;height:100%;" id="'+idCanvasMap+'">' +
			    				   '</div>'
			    			
			    		}
			    ],
			    buttons:[
			    		{
			    			text:'Grabar'
			    			,disabled:true
			    			,id:idBotonGrabar
			    			,handler:function(){
			    				var a = this;
			    				if(options.fnGrabar){
			    					var dataDireccion = null;
//			    					alert(idComboBox)
//			    					alert(Ext.getCmp(idComboBox).getValue())
			    					if(Ext.getCmp(idComboBox).displayTplData){
			    						dataDireccion = Ext.getCmp(idComboBox).displayTplData[0];
			    					}
			    					
			    					options.fnGrabar(a.punto,dataDireccion)
			    					Ext.getCmp(idWindow).close();
			    					
			    					
//			    					var geocoder = new google.maps.Geocoder;
//					                				
//					                				function geocodeLatLng() {
//												  var input = Ext.getCmp(options.idCordenadas).getValue();
//												  var latlngStr = input.split(' ');
//												  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
//												  geocoder.geocode({'location': latlng}, function(results, status) {
//												    if (status === google.maps.GeocoderStatus.OK) {
//												      if (results[1]) {
//												       
//												      	console.log(results[1]);
//												      	
//												      } else {
//												        window.alert('No results found');
//												      }
//												    } else {
//												      window.alert('Geocoder failed due to: ' + status);
//												    }
//												  });
//												}
//												
//												geocodeLatLng();
			    					
			    				}
			    				
			    			}
			    		}
			    ]
			}).show();
		
		}
}
