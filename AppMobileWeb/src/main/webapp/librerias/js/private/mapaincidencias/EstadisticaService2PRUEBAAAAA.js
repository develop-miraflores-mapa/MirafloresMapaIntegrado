Ext.require('Ext.container.Viewport'); // Added so that Viewport code is always loaded before application runs

// Needs to know where Highcharts class is located
// Don't forget to include the required Highcharts series that corresponds to the type
Ext.Loader.setPath('Chart', '../resources/Chart');
Ext.Loader.setPath('Custom', '../Custom');

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.LineSerie');

Ext.require('Custom.CustomChart');

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
