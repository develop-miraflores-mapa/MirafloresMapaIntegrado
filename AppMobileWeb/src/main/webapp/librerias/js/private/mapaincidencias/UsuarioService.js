Ext.ns('UsuarioService');

UsuarioService = {

	init:function(){
		this.buildGridUsuario();
	}
	,
	registroUsuario:function(options){
		
		options = options || {};
		
//		console.log(options);
		
		var perfilStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		    	{'value':901, 'name':'ADMINISTRADOR'},
		    	{'value':902, 'name':'OPERADOR'},
		    	{'value':903, 'name':'SUPERVISOR'},
		    	{'value':906, 'name':'ESTADISTICO'}
//		    	,{'value':992, 'name':'PLATAFORMA DE FUERZA  INTEGRADAS'}
		    ]
		});
		
		var rolStore = Ext.create('Ext.data.Store', {
		    fields: ['name', 'value'],
		    data : [
		    	{'value':1008, 'name':'--SIN ROL--'},
		    	{'value':995, 'name':'OPERADOR DE ATENCION 1 (AZUL)'},
		    	{'value':996, 'name':'OPERADOR DE ATENCION 2 (VERDE)'},
		    	{'value':997, 'name':'OPERADOR DE ATENCION 3 (AMARILLO)'},
		    	{'value':998, 'name':'OPERADOR DE ATENCION 4 (NARANJA)'},
		    	{'value':999, 'name':'OPERADOR DE ATENCION 5 (ROJO)'},
		    	{'value':1000, 'name':'OPERADOR DE ATENCION 6 (MORADO)'},
		    	{'value':1001, 'name':'OPERADOR DE REDES SOCIALES'},
		    	{'value':1002, 'name':'RADIO OPERADOR AREA 1'},
		    	{'value':1003, 'name':'RADIO OPERADOR AREA 2'},
		    	{'value':1004, 'name':'RADIO OPERADOR AREA 3'},
		    	{'value':1005, 'name':'OPERADOR DE VIDEOVIGILANCIA AREA 1'},
		    	{'value':1006, 'name':'OPERADOR DE VIDEOVIGILANCIA AREA 2'},
		    	{'value':1007, 'name':'OPERADOR DE VIDEOVIGILANCIA AREA 3'},
		    	{'value':1016, 'name':'PLATAFORMA FUERZAS INTEGRADAS'}
		    ]
		});
		
		var txtUsername = {
		        xtype:'textfield',
		        fieldLabel:'Username',
		        name:'desLoginUser',
		        id:'desLoginUser',
		        allowBlank:false,
		    };
			
		var txtPassword = {
		        xtype:'textfield',
		        inputType:'password',
		        fieldLabel:'Password',
		        name:'clvClaveUser',
		        id:'clvClaveUser',
		        allowBlank:false
		    };
		
		var txtNombre = {
		        xtype:'textfield',
		        fieldLabel:'Nombre',
		        name:'desNombreCompleto',
		        id:'desNombreCompleto',
		        allowBlank:false
		    };
		
		var txtDni = {
		        xtype:'textfield',
		        fieldLabel:'DNI',
		        name:'dni',
		        id:'dni',
//		        allowBlank:false
		    };
		
		var txtEmail = {
		        xtype:'textfield',
		        fieldLabel:'E-mail',
		        name:'email',
		        id:'email',
//		        allowBlank:false
		    };
		
		var cbxPerfil = Ext.create('Ext.form.ComboBox', {
				id: 'ideRol',
				fieldLabel: 'Perfil',
				store: perfilStore,
	            queryMode: 'local',
	            forceSelection:true,
	            valueField: 'value',
	            displayField: 'name',
	            allowBlank:false,
	            name:'ideRol',
	            listeners:{
					select:function(f,record){
//						console.log(record);
						Ext.getCmp('ideRolRol').reset();
						if(record.data.value==902){
							Ext.getCmp('ideRolRol').enable();
						} else {
							Ext.getCmp('ideRolRol').disable();
						}
					}
	            }
	        });
		
        var cbxRol = Ext.create('Ext.form.ComboBox', {
        		id: 'ideRolRol',
        		fieldLabel: 'Rol',
        		store: rolStore,
        		queryMode: 'local',
        		forceSelection:true,
        		valueField: 'value',
        		displayField: 'name',
//        		allowBlank:false,
        		name:'ideRolRol',
        		listeners:{
        			
        		}
        	});
		
		var chkGroupOpciones = {
                xtype: 'checkboxgroup',
                id:'chkGroupOpciones',
                border: true,
                margin: '0 0 10 0 ',
                scrollable: 'true',
                hideLabel: true,
                labelAlign: 'top',
                columns: 1,
            };

		Ext.create('Ext.window.Window', {
		    title: options.title,
		    modal:true,
		    id:'win-usuarios',
//		    height: 500,
//		    width: 600,
//		    layout: 'column',
//		    bodyStyle:'padding:10px 10px 0px 10px;',
		    height: 339,
		    width: 748,
		    layout: 'fit',
		    bodyBorder: true,
		    bodyPadding: 'true',
		    
		    
		    /////////////////////////////////////////////////////////////////////
		    
		    items: [
		        {
		            xtype:'form',
		            id:'form-usuario',
		            bodyPadding: 10,
		            layout: {
		                type: 'hbox',
		                align: 'stretch'
		            },
		            listeners:{

		                        
		                afterrender:function(){
		                
		                    var thisWin = Ext.getCmp('win-usuarios');
		                    
		                    thisWin.body.mask('Obteniendo información...');
		                    
		                    function isChecked(opciones,idOpcion){
		                    
		                        var checked = false;
		                        
		                        for(var i = 0 ; i < opciones.length ; i++ ){
		                            
		                            if(opciones[i].idOpcion == idOpcion){
		                                checked = true;
		                                break;
		                            }
		                            
		                        }
		                    
		                        return checked;
		                    }
		                    
		                    Util.runAjax({
		                            url:PATH_PROYECTO_BASE+'cierre-calles/opciones-list',
		                            async : true,
		                            method : 'POST',
		                            success:function(http){
		                                var response = Ext.decode(http.responseText);

		                                // {boxLabel: 'Item 2', name: 'cb-horiz-2', checked: true},
		                                
		                                if(options.ideUsuario){
		                                
		                                    Util.runAjax({
		                                        url:PATH_PROYECTO_BASE+'cierre-calles/usuario-id',
		                                        async : true,
		                                        method : 'POST',
		                                        params:{idUsuario:options.ideUsuario},
		                                        success:function(httpUser){
		                                        
		                                            var responseUser = Ext.decode(httpUser.responseText);
		                                            
		                                            Ext.getCmp('desLoginUser').setValue(responseUser.usuario.desLoginUser);
		                                            Ext.getCmp('clvClaveUser').setValue(responseUser.usuario.clvClaveUser);
		                                            Ext.getCmp('desNombreCompleto').setValue(responseUser.usuario.desNombreCompleto);
		                                            Ext.getCmp('email').setValue(responseUser.usuario.email);
		                                            Ext.getCmp('dni').setValue(responseUser.usuario.dni);
		                                            
//		                                                      if(responseUser.usuario.desParametro1 == 'S'){
//		                                                       Ext.getCmp('desParametro1').checked = true;
//		                                                       Ext.getCmp('desParametro1').setRawValue(true); 
//		                                                      }
		                                            
		                                            if(responseUser.usuario.ideRol!=null){
		                                                Ext.getCmp('ideRol').setValue(responseUser.usuario.ideRol);
		                                            }
		                                            if(responseUser.usuario.ideRolRol!=null){
		                                            	if(responseUser.usuario.ideRol==902){
		                                            		Ext.getCmp('ideRolRol').setValue(responseUser.usuario.ideRolRol);
		                                            		Ext.getCmp('ideRolRol').enable();
		                                            	}else{
		                                            		console.log("ideRolrol = "+responseUser.usuario.ideRolRol);
		                                            		Ext.getCmp('ideRolRol').disable();
		                                            	}
		                                            }
		                                            
		                                            Ext.getCmp('form-usuario').add({
		                                                                            xtype: 'hiddenfield',
		                                                                            name: 'ideUsuario',
		                                                                            value: responseUser.usuario.ideUsuario
		                                                                        });
		                                            
		                                            Ext.each(response.data,function(item,i){
		                                                Ext.getCmp('chkGroupOpciones').add({boxLabel: item.nombre, name: 'opcionesTemp['+i+'].idOpcion', inputValue:item.idOpcion,checked : isChecked(responseUser.usuario.opciones,item.idOpcion)});
		                                            });
		                                        
		                                            thisWin.body.unmask();
		                                            
		                                            
		                                        }
		                                    });
		                                    
		                                }else{
		                                    
		                                    Ext.each(response.data,function(item,i){
		                                        Ext.getCmp('chkGroupOpciones').add({boxLabel: item.nombre, name: 'opciones['+i+'].idOpcion', inputValue:item.idOpcion});
		                                    });
		                                
		                                    thisWin.body.unmask();
		                                    
		                                }

		                            }
		                        });
		                    
		                }
		            },
		            
		            items: [
		                {
		                    xtype: 'container',
		                    width: 368,
		                    layout: {
		                        type: 'vbox',
		                        align: 'stretch'
		                    },
		                    items: [
		                        {
		                            xtype: 'fieldset',
		                            padding: '0 5 5 5',
		                            width: 653,
		                            layout: 'form',
		                            title: 'Datos de Usuario',
		                            items: [
		                                txtUsername,
		                                txtPassword,
		                                txtNombre,
		                                txtDni,
		                                txtEmail
		                            ]
		                        },
		                        {
		                            xtype: 'fieldset',
		                            margin: '5 0 0 0',
		                            padding: '0 5 5 5',
		                            width: 653,
		                            layout: 'form',
		                            title: 'Perfil y Rol de Usuario',
		                            items: [
		                                cbxPerfil,
		                                cbxRol
		                            ]
		                        }
		                    ]
		                },
		                {
		                    xtype: 'fieldset',
		                    margin: '0 10 0 10',
		                    width: 345,
		                    layout: 'fit',
		                    title: 'Opciones de Usuario',
		                    items: [
		                    	chkGroupOpciones
		                    ]
		                }
		            ]
		        }
		    ],
		    
		    
		    /////////////////////////////////////////////////////////////////////
		    
		    
//		    items: [
//		    		{
//		    			xtype:'form',
//		    			layout: 'column',
//		    			width:580,
//		    			id:'form-usuario',
//		    			listeners:{
//		    			
//		    				afterrender:function(){
//		    				
//		    					var thisWin = Ext.getCmp('win-usuarios');
//		    					
//		    					thisWin.body.mask('Obteniendo información...');
//		    					
//		    					function isChecked(opciones,idOpcion){
//		    					
//		    						var checked = false;
//		    						
//		    						for(var i = 0 ; i < opciones.length ; i++ ){
//		    							
//		    							if(opciones[i].idOpcion == idOpcion){
//		    								checked = true;
//		    								break;
//		    							}
//		    							
//		    						}
//		    					
//		    						return checked;
//		    					}
//		    					
//		    					Util.runAjax({
//										url:PATH_PROYECTO_BASE+'cierre-calles/opciones-list',
//										async : true,
//										method : 'POST',
//										success:function(http){
//											var response = Ext.decode(http.responseText);
//
//											// {boxLabel: 'Item 2', name: 'cb-horiz-2', checked: true},
//											
//											if(options.ideUsuario){
//											
//												Util.runAjax({
//													url:PATH_PROYECTO_BASE+'cierre-calles/usuario-id',
//													async : true,
//													method : 'POST',
//													params:{idUsuario:options.ideUsuario},
//													success:function(httpUser){
//													
//														var responseUser = Ext.decode(httpUser.responseText);
//														
//														Ext.getCmp('desLoginUser').setValue(responseUser.usuario.desLoginUser);
//														Ext.getCmp('clvClaveUser').setValue(responseUser.usuario.clvClaveUser);
//														Ext.getCmp('desNombreCompleto').setValue(responseUser.usuario.desNombreCompleto);
//														Ext.getCmp('email').setValue(responseUser.usuario.email);
//														Ext.getCmp('dni').setValue(responseUser.usuario.dni);
//														
////														if(responseUser.usuario.desParametro1 == 'S'){
////														 Ext.getCmp('desParametro1').checked = true;
////														 Ext.getCmp('desParametro1').setRawValue(true); 
////														}
//														
//														if(responseUser.usuario.ideRol!=null){
//															Ext.getCmp('cbxPerfil').setValue(responseUser.usuario.ideRol);
//														}
//														if(responseUser.usuario.ideRolRol!=null){
//															Ext.getCmp('cbxRol').setValue(responseUser.usuario.ideRol);
//														}
//														
//														Ext.getCmp('form-usuario').add({
//																				        xtype: 'hiddenfield',
//																				        name: 'ideUsuario',
//																				        value: responseUser.usuario.ideUsuario
//																				    });
//														
//														Ext.each(response.data,function(item,i){
//															Ext.getCmp('chkGroupOpciones').add({boxLabel: item.nombre, name: 'opcionesTemp['+i+'].idOpcion', inputValue:item.idOpcion,checked : isChecked(responseUser.usuario.opciones,item.idOpcion)});
//														});
//													
//														thisWin.body.unmask();
//														
//														
//													}
//												});
//												
//											}else{
//												
//												Ext.each(response.data,function(item,i){
//													Ext.getCmp('chkGroupOpciones').add({boxLabel: item.nombre, name: 'opciones['+i+'].idOpcion', inputValue:item.idOpcion});
//												});
//											
//												thisWin.body.unmask();
//												
//											}
//											
//											
//											
//										}
//									});
//		    					
//		    				}
//		    			
//		    			},
//		    			items:[
//		    					{
//		    						xtype:'textfield'
//		    						,width:280
//		    						,style:'margin:0px 10px 0px 0px'
//		    						,fieldLabel:'Usuario'
//		    						,labelWidth:70
//		    						,name:'desLoginUser'
//		    						,id:'desLoginUser'
//		    						,allowBlank:false
//		    					},
//		    					{
//		    						xtype:'textfield'
//		    						,width:285
//		    						,inputType:'password'
//		    						,labelStyle:'padding-right:10px;'
//		    						,fieldLabel:'Contraseña'
//		    						,name:'clvClaveUser'
//		    						,id:'clvClaveUser'
//		    						,labelWidth:70
//		    						,allowBlank:false
//		    					},
//		    					{
//		    						xtype:'textfield'
//		    						,width:575
//		    						,style:'margin:10px 10px 0px 0px'
//		    						,fieldLabel:'Nombres'
//		    						,name:'desNombreCompleto'
//		    						,id:'desNombreCompleto'
//		    						,labelWidth:70
//		    						,allowBlank:false
//		    					},
//		    					{
//		    						xtype:'textfield'
//		    						,width:575
//		    						,style:'margin:10px 10px 0px 0px'
//		    						,fieldLabel:'Email'
//		    						,name:'email'
//		    						,id:'email'
//		    						,labelWidth:70
//		    						,allowBlank:false
//		    					},
//		    					{
//		    						xtype:'textfield'
//		    						,width:285
//		    						,style:'margin:10px 0px 0px 0px'
//		    						,fieldLabel:'dni'
//		    						,name:'dni'
//		    						,id:'dni'
//		    						,labelWidth:70
//		    					},
//		    					{
//		    						xtype:'checkboxfield'
//		    						,width:180
//		    						,style:'margin:10px 0px 0px 20px'
//		    						,fieldLabel:'Usuario Administrador'
//		    						,id:'desParametro1'
//		    						,labelWidth:150
//		    					},
//		    					{
//						            xtype: 'checkboxgroup',
//						            labelWidth:70,
//						            width:575,
//						            id:'chkGroupOpciones',
//						            style:'margin:10px 0px 0px 0px',
//						            fieldLabel: 'Opciones',
//						            // Distribute controls across 3 even columns, filling each row
//						            // from left to right before starting the next row
//						            columns: 2
//						        }
//		    			]
//		    			
//		    		}	
//		    ],
		    buttons:[
		    		{
		    			text:'Grabar',
		    			handler:function(){

		    				var form = Ext.getCmp('form-usuario').getForm();
		    				if(form.isValid()){

		    					var thisWin = Ext.getCmp('win-usuarios');
		    					
		    					thisWin.body.mask('Espere un momento por favor.');
		    					
		    					var usuario = form.getValues();
		    					var c = 0;
		    					Ext.each(Ext.getCmp('chkGroupOpciones').items.items,function(ite){
		    					
		    						if(ite.checked){
		    							usuario['opciones['+c+'].idOpcion'] = ite.inputValue;
		    							c++;
		    						}
		    						
		    					})
		    					
//		    					if(Ext.getCmp('desParametro1').checked){
//		    						usuario.desParametro1 = 'S';
//		    					}else{
//		    						usuario.desParametro1 = 'N';
//		    					}
		    					
//		    					console.log("usuario");
//		    					console.log(usuario);
		    					
		    					Util.runAjax({
										url:PATH_PROYECTO_BASE+'cierre-calles/usuario-registro',
										async : true,
										method : 'POST',
										params:usuario,
										success:function(http){
											var response = Ext.decode(http.responseText);
											
											thisWin.body.unmask();

											UsuarioService.buscar();
											
											thisWin.close();
											
										}
									});
		    					
		    				}
		    				
		    				
		    			}
		    		}
		    		,
		    		{
		    			text:'Cancelar',
		    			handler:function(){
		    			
		    				Ext.getCmp('win-usuarios').close();
		    				
		    			}
		    		}
		    ]
		}).show();
		
	}
	,
	
	
	buscar:function(){
	
		var grid = Ext.getCmp('grid-usuarios');
		var store = grid.store;
		
		var params = {};
		
		if(!Ext.isEmpty(Ext.getCmp('txt-usuario').getValue())){
			params.desLoginUser	= Ext.getCmp('txt-usuario').getValue();
		}
		
		if(!Ext.isEmpty(Ext.getCmp('txt-nombres').getValue())){
			params.desNombreCompleto	= Ext.getCmp('txt-nombres').getValue();
		}
		
		if(!Ext.isEmpty(Ext.getCmp('txt-dni').getValue())){
			params.dni	= Ext.getCmp('txt-dni').getValue();
		}
		
		store.proxy.extraParams = params;
		
		store.load();
		
		
	},
	
	reset:function(){
		
		
		
		var grid = Ext.getCmp('grid-usuarios');
		var store = grid.store;
		
		var params = {};
		
		if(!Ext.isEmpty(Ext.getCmp('txt-usuario').getValue())){
			params.desLoginUser	= Ext.getCmp('txt-usuario').getValue();
		}
		
		if(!Ext.isEmpty(Ext.getCmp('txt-nombres').getValue())){
			params.desNombreCompleto	= Ext.getCmp('txt-nombres').getValue();
		}
		
		if(!Ext.isEmpty(Ext.getCmp('txt-dni').getValue())){
			params.dni	= Ext.getCmp('txt-dni').getValue();
		}
		
		store.proxy.extraParams = params;
		
		store.load();
		
		
	},
	
	buildGridUsuario:function(){
	
			Ext.define('Usuario', {
				extend: 'Ext.data.Model',
				fields: [
					'ideUsuario',
					'ideEstado',
					'desLoginUser',
					'inHabilitado',
					'desNombreCompleto',
					'email',
					'dni',
					'ideRol',
					'ideRolRol',
					{
				       	name:'descRol',
				       	mapping : 'ideRol',
				       	convert : function(v){
				       		var str = "NO ASIGNADO";
				       		if (v!=null){
				       			switch (v){
					       			case 901: str = "ADMINISTRADOR"; break;
					       			case 902: str = "OPERADOR"; break;
					       			case 903: str = "SUPERVISOR"; break;
					       			case 906: str = "ESTADISTICO"; break;
					       			case 992: str = "FUERZAS INTEGRADAS"; break;
					       			default: 	break;
				       			}
				       		}
				       		return str;
				       	}
					},
					{
				       	name:'descRolRol',
				       	mapping : 'ideRolRol',
				       	convert : function(v){
				       		var str = "NO ASIGNADO";
				       		if (v!=null){
				       			switch (v){
					       			case 995: str = "OPERADOR DE ATENCION 1 (AZUL)"; break;
					       			case 996: str = "OPERADOR DE ATENCION 2 (VERDE)"; break;
					       			case 997: str = "OPERADOR DE ATENCION 3 (AMARILLO)"; break;
					       			case 998: str = "OPERADOR DE ATENCION 4 (NARANJA)"; break;
					       			case 999: str = "OPERADOR DE ATENCION 5 (ROJO)"; break;
					       			case 1000: str = "OPERADOR DE ATENCION 6 (MORADO)"; break;
					       			case 1001: str = "OPERADOR DE REDES SOCIALES"; break;
					       			case 1002: str = "RADIO OPERADOR AREA 1"; break;
					       			case 1003: str = "RADIO OPERADOR AREA 2"; break;
					       			case 1004: str = "RADIO OPERADOR AREA 3"; break;
					       			case 1005: str = "OPERADOR DE VIDEOVIGILANCIA AREA 1"; break;
					       			case 1006: str = "OPERADOR DE VIDEOVIGILANCIA AREA 2"; break;
					       			case 1007: str = "OPERADOR DE VIDEOVIGILANCIA AREA 3"; break;
						       		default: 	break;
				       			}
				       		}
				       		return str;
				       	}
					}
			    ]
			 });
			 
			 
			var store = Ext.create('Ext.data.Store', {
					autoLoad : true,
					model : 'Usuario',
					proxy : {
						type : 'ajax',
						url:PATH_PROYECTO_BASE+'cierre-calles/usuarios-list',
						actionMethods : 'POST',
						reader : {
							root : 'data'
						},
						simpleSortMode : true
						,timeout:99999999
					}
				});
				
				
			var grid = Ext.create('Ext.grid.Panel', {
			    store: store,
			    renderTo:'render',
			    title:'Administración de Usuarios',
			    id:'grid-usuarios',
			    border:true,
			    columns: [
			        { text: 'Usuario',  dataIndex: 'desLoginUser' , flex:1  },
			        { text: 'Nombres',  dataIndex: 'desNombreCompleto' , flex:1 },
			        { text: 'Dni',  dataIndex: 'dni' , width:120 },
			        { text: 'Email',  dataIndex: 'email' , flex:1 },
			        { text: 'Perfil',  dataIndex: 'descRol' , flex:1},
			        { text: 'Rol',  dataIndex: 'descRolRol' , flex:1},
			        {
							            xtype:'actioncolumn',
							       		width:50,
							            align:'center',
							            items: [{
							            	
							                icon: PATH_PROYECTO_BASE+'images/delete_16.png',
							                tooltip: 'Eliminar',
							                handler: function(grid, rowIndex, colIndex) {
							                    var record = grid.getStore().getAt(rowIndex);
							                    
												Ext.Msg.confirm('Confirmar', '¿Seguro de eliminar el usuario seleccionado?', function(btn, text){
												    if (btn == 'yes'){
												        
												    	Util.runAjax({
																	url:PATH_PROYECTO_BASE+'cierre-calles/usuario-eliminar',
																	params:{
																		idUsuario:record.data.ideUsuario
																	},
																	async : true,
																	method : 'POST',
																	success:function(http){
																		var response = Ext.decode(http.responseText);
																		
																		UsuarioService.buscar();
										                        		
																	}
																});
												    	
												    }
												});
							                    
							                    
							                }
							            }]
			} 
							        
			    ],
			    height: $(window).height()-30,
			    width:$(window).width()-30
			 
			    ,dockedItems : {
			            xtype: 'toolbar',
			            items: [
				            {
				            	xtype:'textfield',
				            	emptyText:'Usuario',
				            	id:'txt-usuario',
				            	listeners:{
				            		specialkey : function(f, e) {
										if (e.getKey() == e.ENTER) {
											UsuarioService.buscar();
										}
									}
				            	}
				            },
				            {
				            	xtype:'textfield',
				            	emptyText:'Nombres',
				            	id:'txt-nombres',
				            	listeners:{
				            		specialkey : function(f, e) {
										if (e.getKey() == e.ENTER) {
											UsuarioService.buscar();
										}
									}
				            	}
				            },
				            {
				            	xtype:'textfield',
				            	emptyText:'Dni',
				            	id:'txt-dni',
				            	listeners:{
				            		specialkey : function(f, e) {
										if (e.getKey() == e.ENTER) {
											UsuarioService.buscar();
										}
									}
				            	}
				            	
				            },
				            {
		                    iconCls:'btnBuscarSmall'
		                    ,handler:function(){
			                    	UsuarioService.buscar();
			                    }	
			                },
				            '->',
//				            {
//								iconCls : 'btnResetRoles',
//								text:'Reiniciar roles',
//								id:'btnReset',
//								handler : function() {
//									Ext.Msg.confirm('Confirmar', '¿Seguro de reinicializar los roles de los operadores?', function(btn, text){
//										if (btn == 'yes'){
//											Util.runAjax({
//												url:PATH_PROYECTO_BASE+'cierre-calles/reiniciar-roles',
//		//										async : true,
//												async : false,
//												method : 'POST',
//												success:function(http){ }
//											});
//											UsuarioService.buscar();
//										}
//									});
//								}
//							},
				            {
			            	  	text:'Limpiar Roles',
			                    id:'btnResetRol',
			                    iconCls:'btnResetSmall',
			                    handler:function(){
			                    	var params = {};
			                    	Ext.Msg.confirm('Confirmar', '¿Está seguro de limpiar todos los roles asignados?', function(btn, text){
									    if (btn == 'yes'){
									    	Util.runAjax({
												url:PATH_PROYECTO_BASE+'cierre-calles/reset-rol',
												async : false,
												method : 'POST',
												params: params,
												timeout:1000,
												success:function(http){
													var response = Ext.decode(http.responseText);
//													thisWin.body.unmask();
//													Ext.Msg.alert('Estado de reasignación', 'Reasignacion satisfactoria');
//													if($("#map-canvas").length){
//								    					MapaIncidencias.ajaxVoxiva(incidencia);
//								    				}else{
//								    					UsuarioService.buscar();
//								    				}
////														thisWin.close();
//													thisWin.destroy();
													UsuarioService.buscar();
												}
											});
									    }
			                    	});
//			                    	Util.runAjax({
//			                			url:PATH_PROYECTO_BASE+'cierre-calles/reset-rol',
////			                			params:{
////			                				idUsuario:record.data.ideUsuario
////			                			},
//			                			async : true,
//			                			method : 'POST',
//			                			success:function(){
////			                				var response = Ext.decode(http.responseText);
//			                				UsuarioService.buscar();
//			                			}
//			                		});
			                    }
			                }
			                ,
			                {
			            	  	text:'Nuevo'
			                    ,id:'btnAddGeo'
			                    ,iconCls:'btnAddSmall'
	//			                    ,style:'border-right:0px; border-left:0px; border-top:0px; border-bottom:1px #DBDBDB solid;'
			                    ,handler:function(){
			                    	UsuarioService.registroUsuario({
			                    		title:'Registrar Usuario'
			                    	});
			                    }
			                }
			                ,
							{
								iconCls : 'btnEditSmall',
								text:'Editar',
								id:'btnEditar',
								disabled:true,
								handler : function() {
									
									var record = Ext.getCmp('grid-usuarios').getSelectionModel().getSelection();
									
									UsuarioService.registroUsuario({
			                    		title:'Editar Usuario',
			                    		ideUsuario: record[0].data.ideUsuario
			                    	});
								}
							},
							{
					            xtype:'splitbutton',
					            text: DES_LOGIN,
					            iconCls: 'btnUser16',
					            menu: [
					            		{
					            			text: 'Ver Mapa',
					            			iconCls: 'btnMap16',
					            			href:PATH_PROYECTO_BASE+'cierre-calles/mapa'
					            		}
					            		,{
					            			text: 'Cerrar Sesion',
					            			iconCls: 'btnLogout16',
					            			href:PATH_PROYECTO_BASE+'log-out'
					            		}
					            ]
					        }
			            ]
			        }
			});
			
			grid.on('select',function(){
			
				if(Ext.getCmp('btnEditar')){
					Ext.getCmp('btnEditar').setDisabled(false);
				}
				
			});
			
			store.on('load',function(){
				if(Ext.getCmp('btnEditar')){
					Ext.getCmp('btnEditar').setDisabled(true);
				}
				
			});
			 
		
	}
	
}


window.onload = function(){

	UsuarioService.init();
	
}
