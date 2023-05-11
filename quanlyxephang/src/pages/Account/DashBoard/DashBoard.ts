import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Chart, DateTime, SplineAreaSeries, Legend, ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-charts';
Chart.Inject(SplineAreaSeries, DateTime, Legend);

/**
 * Sample for Area Series
 */

let chart: Chart = new Chart({
    height: '350',
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift'
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        maximum: 4, interval: 1,
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Chart Series
    series: [
        {
            dataSource: [
                { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.4 },
                { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.6 },
                { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.5 },
                { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.8 },
                { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.1 }
            ],
            name: 'US', xName: 'x', yName: 'y', type: 'SplineArea', fill: '#0073DC',
            border: { color: 'transparent' },
            opacity: 0.5,
        },

    ],
    legendSettings: { visible: false },
    //Initializing Chart title



    load: (args: ILoadedEventArgs) => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    }
});
chart.appendTo('#Chart');
export default Chart;