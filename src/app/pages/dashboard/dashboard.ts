import { Component,OnInit } from '@angular/core';
// import 'src/assets/charts/amchart/amcharts.js';
// import 'src/assets/charts/amchart/gauge.js';
// import 'src/assets/charts/amchart/pie.js';
// import 'src/assets/charts/amchart/serial.js';
// import 'src/assets/charts/amchart/light.js';
// import 'src/assets/charts/amchart/ammap.js';
// import 'src/assets/charts/amchart/worldLow.js';
import { CardComponent } from '../../shared/card/card.component';
import { BaseChartDirective } from 'ng2-charts';
import {ChartOptions,ChartTypeRegistry} from 'chart.js';


declare const AmCharts: any;
declare const $: any;

@Component({
  standalone:true,
  selector: 'app-dashboard',
  imports: [CardComponent,BaseChartDirective  ],
  templateUrl: './dashboard.html',
  styleUrls: [
    './dashboard.scss',
  ]
})
export class Dashboard implements OnInit {
totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
  totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
  totalValueGraphOption = buildChartOption();

  constructor() { }

  ngOnInit() {
    AmCharts.makeChart('statistics-chart', {
      type: 'serial',
      marginTop: 0,

      marginRight: 0,
      dataProvider: [{
        year: 'Jan',
        value: 0.98
      }, {
        year: 'Feb',
        value: 1.87
      }, {
        year: 'Mar',
        value: 0.97
      }, {
        year: 'Apr',
        value: 1.64
      }, {
        year: 'May',
        value: 0.4
      }, {
        year: 'Jun',
        value: 2.9
      }, {
        year: 'Jul',
        value: 5.2
      }, {
        year: 'Aug',
        value: 0.77
      }, {
        year: 'Sap',
        value: 3.1
      }],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'year',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });
    AmCharts.makeChart('solid-gauge1', {
      type: 'gauge',

      theme: 'light',
      axes: [{
        axisAlpha: 0,
        tickAlpha: 0,
        labelsEnabled: false,
        startValue: 0,
        endValue: 100,
        startAngle: 0,
        endAngle: 360,
        bands: [{
          color: '#E5E5E5',
          startValue: -35,
          endValue: 35,
          radius: '100%',
          innerRadius: '92%'
        }, {
          color: '#93BE52',
          startValue: -35,
          endValue: 20,
          radius: '100%',
          innerRadius: '92%'
        }]
      }],
      'export': {
        enabled: true
      }
    });
    AmCharts.makeChart('email-sent', {
      type: 'serial',
      theme: 'light',

      dataDateFormat: 'YYYY-MM-DD',
      precision: 2,
      valueAxes: [
        {
          id: 'v1',
          title: 'Sales',
          position: 'left',
          autoGridCount: false,
          labelFunction: function (g: number) {
            return Math.round(g);
          }
        },
        {
          id: 'v2',
          title: '',
          gridAlpha: 0,
          fontSize: 0,
          axesAlpha: 0,
          position: 'left',
          autoGridCount: false
        }
      ],
      graphs:
        [
          {
            id: 'g3',
            valueAxis: 'v1',
            lineColor: '#4680ff',
            fillColors: '#4680ff',
            fillAlphas: 1,
            type: 'column',
            title: 'Actual Sales',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g4',
            valueAxis: 'v1',
            lineColor: '#FC6180',
            fillColors: '#FC6180',
            fillAlphas: 1,
            type: 'column',
            title: 'Target Sales',
            valueField: 'sales1',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g1',
            valueAxis: 'v2',
            bullet: 'round',
            bulletBorderAlpha: 0,
            bulletColor: 'transparent',
            bulletSize: 0,
            hideBulletsCount: 50,
            lineThickness: 3,
            dashLength: 10,
            lineColor: '#93BE52',
            type: 'smoothedLine',
            title: 'Market Days',
            useLineColorForBulletBorder: true,
            valueField: 'market1',
            balloonText: '[[title]]<br /><b style="font-size: 130% ">[[value]]</b>'
          },
          {
            id: 'v3',
            valueAxis: 'v1',
            lineColor: '#FFB64D',
            fillColors: '#FFB64D',
            fillAlphas: 1,
            type: 'column',
            title: 'Actual Sales',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%>$[[value]]M</b>'
          }
        ],
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 0,
        valueLineAlpha: 0.2
      },
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        dashLength: 0,
        axisAlpha: 0,
        GridAlpha: 0,
        minorGridEnabled: true
      },
      legend: {
        useGraphSettings: true,
        position: 'top'
      },
      balloon: {
        borderThickness: 1,
        shadowAlpha: 0
      },
      'export': {
        enabled: true
      },
      dataProvider: [
        {
          date: '2013-01-16',
          market1: 91,
          market2: 75,
          sales1: 5,
          sales2: 8
        },
        {
          date: '2013-01-17',
          market1: 74,
          market2: 78,
          sales1: 4,
          sales2: 6
        },
        {
          date: '2013-01-18',
          market1: 78,
          market2: 88,
          sales1: 5,
          sales2: 2
        },
        {
          date: '2013-01-19',
          market1: 85,
          market2: 89,
          sales1: 8,
          sales2: 9
        },
        {
          date: '2013-01-20',
          market1: 82,
          market2: 89,
          sales1: 9,
          sales2: 6
        },
        {
          date: '2013-01-21',
          market1: 83,
          market2: 85,
          sales1: 3,
          sales2: 5
        },
        {
          date: '2013-01-22',
          market1: 78,
          market2: 92,
          sales1: 5,
          sales2: 7
        }
      ]
    });
  }

  onTaskStatusChange(event:Event) {
   const target = event.target as HTMLElement;
  const parentNode = target.parentElement?.parentElement;
  parentNode?.classList.toggle('done-task');
  }

}

function getRandomData() {
   let data: number[] = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}

function buildChartJS(a:string, b:number[], f:string|null, c:string) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption(): ChartOptions<'line'> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index' as const, // 👈 Fix here
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Value'
        },
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: false
      },
      tooltip: {
        enabled: true,
        intersect: false,
        mode: 'nearest' as const // 👈 Fix here
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: false
        }
      }
    }
  };
}

