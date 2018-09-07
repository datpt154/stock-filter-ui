import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from '../../models/PieChartConfig';

declare var google: any;

@Injectable()
export class GoogleColumnChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: HTMLElement, data: any[], config: any) : void {  
    var chartFunc = () => { return new google.visualization.ColumnChart(elementId); };
    var options = {
            title: 'abc',
            // pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }
}
