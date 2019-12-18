import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors'

const LINECHART_SAMPLE_DATA: any[] = [
  {data: [31, 41, 12, 58, 91, 28], label: 'Sentiment Analysis'},
  {data: [17, 41, 72, 43, 21, 50], label: 'Image Recognition'},
  {data: [89, 67, 32, 15, 7, 28], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData = LINECHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = false;
  lineChartType = 'line';
  public lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
