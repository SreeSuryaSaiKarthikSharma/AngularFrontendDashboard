import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  HighCharts = HighCharts;
  chartOptions = {};
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
         // borderWidth:0,
          margin:[2,2,2,2],
          height:90

      },
      title: {
          text: null,
          align: 'left'
      },
      subtitle: {
          // text: 'Source: ' +
          //     '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
          //     'target="_blank">SSB</a>',
          text:null,
          align: 'left'
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      tooltip: {
          split:true,
          outside: true
          // headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      legend:{
        enableD:false
      },
      // plotOptions: {
      //     series: {
      //         pointStart: 2012
      //     },
      //     area: {
      //         stacking: 'normal',
      //         lineColor: '#666666',
      //         lineWidth: 1,
      //         marker: {
      //             lineWidth: 1,
      //             lineColor: '#666666'
      //         }
      //     }
      // },
      credits: {
        enabled: false
      },
      exporting:{
        enabled:false
      },
      xAxis:{
        labels:{
          enabled:false
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
          data:[80, 77, 30, 39, 69]
      }]
  };
  
  HC_exporting(HighCharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  },300)
}
}