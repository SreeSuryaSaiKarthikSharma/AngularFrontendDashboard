import { Component,OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  HighCharts = HighCharts;
  chartOptions = {};
  constructor(){

  }
  ngOnInit(): void {
    
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text:'INDIAN AIRLINES DATA',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percantage',
        colorByPoint: true,
        data: [{
            name: 'Indigo',
            y: 59.67,
            sliced: true,
            selected: true
        }, {
            name: 'Air India',
            y: 33.77
        },  {
            name: 'Spicejet',
            y: 22.86
        }, {
            name: 'Vistara Airlines',
            y: 12.63
        }, {
            name: 'Akasa Air',
            y: 7.40
        },  {
            name: 'Go First Airways',
            y: 3.13
        }, {
            name: 'Air Asia India',
            y: 2.84
        },{
            name: 'Star Air',
            y: 1.09
        },{
            name: 'Others',
            y: 2.6
        }]
    }]
    }
    HC_exporting(HighCharts);
  }
  
}
