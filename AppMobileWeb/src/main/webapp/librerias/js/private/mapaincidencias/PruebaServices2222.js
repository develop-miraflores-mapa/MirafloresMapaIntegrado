Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.LineSerie');

Ext.require('Chart.ux.Highcharts.SplineSerie');

Ext.define('Custom.CustomChart', {
    extend: 'Chart.ux.Highcharts',

    constructor:function(config) {
        this.callParent(arguments);
        this.initConfig(config);
        
        this.chartConfig = this.chartConfig || {};
        this.chartConfig.chart = this.chartConfig.chart || {};
        this.chartConfig.chart.type = 'spline';
    }
});

Ext.define('MyApp.controller.GenericController', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        console.log('Initialized GenericController!');
        this.control({
            '#refresh': {
                click: function() {
                    var chart = Ext.getCmp('chart');
                    chart.store.reload();
                }
            }
        });
    }
});



Ext.application({
    name: 'MyApp',
    appFolder: 'app',
    controllers: ['GenericController'],
    launch: function() {
        var viewport, store, data, chart;

        store = Ext.create('Ext.data.ArrayStore', {
            fields: [
                {name: 'color', type: 'string'},
                {name: 'y',  type: 'float'}
            ],
            proxy: {
                type: 'ajax',
                url: '/ajax/series'
            },
            autoLoad: true
        });
        
        chart = Ext.create('Custom.CustomChart', {
            region: 'center',
            id: 'chart',
            store: store,
            series: [{
                dataIndex: 'y'
            }],
            chartConfig: {
                chart: {
                    type: 'line',
                },
                title: {
                    text: 'A simple graph'
                }
            }
        });
        
        viewport = Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                region: 'west',
                width: 200,
                title: 'Sidebar',
                html: 'This is a sidebar. It <i>could</i> display useful information'
            }, {
                region: 'center',
                height: 50,
                tbar: [{
                    xtype: 'button',
                    text: 'Refresh',
                    id: 'refresh'
                }],
                items: [chart]
            }]
        });
    }
});