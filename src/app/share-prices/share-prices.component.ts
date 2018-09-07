import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/business.service/filter.service';
import { GooglePieChartService } from '../services/google-chart.service/google-pie-chart.service';
import { PieChartConfig } from '../models/PieChartConfig';
import { GoogleColumnChartService } from '../services/google-chart.service/google-column-chart.service';

@Component({
  selector: 'app-share-prices',
  templateUrl: './share-prices.component.html',
  styleUrls: ['./share-prices.component.scss']
})
export class SharePricesComponent implements OnInit {
  data: any;
  private chartElement;
  isShowChart = false;

  constructor(private _filterService: FilterService, 
    private _pieChartService: GooglePieChartService,
    private _columnChartService: GoogleColumnChartService
  ) { }

  ngOnInit() {
    this._filterService.searchCompanyReport('AAA').subscribe(data => {
      this.data = data;
    });

    
  }

  ngAfterView

  showColumnCharts(data: any) {
    const data1 = [['Element', 'Density', { role: 'style' }],
    ['Copper', data[2], '#b87333'],            // RGB value
    ['Silver', data[3], 'silver'],            // English color name
    ['Gold', data[4], 'gold'],
    ['Gold', data[5], 'gold'],
    ['Gold', data[6], 'gold']];

    this.chartElement = document.getElementById('chart_div');
    this._columnChartService.BuildPieChart(this.chartElement, data1, null);
    this.isShowChart = true;
  }

  closeColumnCharts() {
    this.isShowChart = false;
  }
}
