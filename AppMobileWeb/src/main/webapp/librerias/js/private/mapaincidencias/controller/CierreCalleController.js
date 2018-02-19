Ext.define('MOBILEAPP.controller.CierreCalleController', {
			extend	:	'Ext.app.Controller',
			views	:	['grid.CierreCalleGrid'],
			stores	:	['CierreCallesStore'],
			models	:	['CierreCalleModel'],
			init : function() {
				
				this.control({
					
					'cierreCalleGrid':{
					
						select : CierreCalle.service.selectGridCierreCalle
						
					}
				
				});
			}
		});