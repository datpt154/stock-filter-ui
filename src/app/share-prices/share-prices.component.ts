import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/business.service/filter.service';
import { PieChartConfig } from '../models/PieChartConfig';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonConstants } from '../constants/common-const';
import * as _ from 'lodash';

@Component({
  selector: 'app-share-prices',
  templateUrl: './share-prices.component.html',
  styleUrls: ['./share-prices.component.scss']
})
export class SharePricesComponent implements OnInit {
  public data: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartColors: Array<any> = [
    // { // grey
    //   backgroundColor: 'rgba(255,0,0)',
    //   borderColor: 'rgba(255,0,0)',
    //   pointBackgroundColor: 'rgba(255,0,0)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(255,0,0)',
    //   borderColor: 'rgba(255,0,0)',
    //   pointBackgroundColor: 'rgba(255,0,0)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];

  public barChartData: any[] = [
    { data: [], label: '' }
  ];
  public otherFactors = CommonConstants.otherFactors;
  public companyCode: string = '';


  constructor(private _filterService: FilterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setDefaultTime();
    this.route.queryParams.subscribe(params => {
      this.companyCode = params['companyCode'];
      const selectedFilterTime = this.otherFactors.filterTimes.find(item => item.isSelected === true);
      this.getDetailstock(this.companyCode, selectedFilterTime.code);

      this._filterService.getDetailStockMore(this.companyCode, selectedFilterTime.code).subscribe(data => console.log(data));
    });
  }

  // whenever filterTime radio has been changed, we have to reload DetailStock again
  selectFilterTime(item): void {
    this.getDetailstock(this.companyCode, item.code);
  }

  // whenever we enter page, should set default selection for filterTime (is 'quater')
  getDetailstock(companyCode: string, filterTime: string): void {
    this._filterService.getDetailstock(companyCode, filterTime).subscribe(data => {
      this.data = data;
      if (!_.isNil(this.data.rows)) {
        this.barChartLabels = this.data.headers.slice(1);
      } else {
        this.barChartLabels = [];
      }
    });
  }

  setDefaultTime(): void {
    this.otherFactors.filterTimes.forEach(item => {
      item.isSelected = item.code === 'quarter';
    });
  }

  showColumnCharts(popover, data: any) {
    if (!popover.isOpen()) {
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data.slice(2);
      clone[0].label = data[0];
      this.barChartData = clone;

      popover.open();
    }
  }


  closeColumnCharts(popover): void {
    if (popover.isOpen()) {
      popover.close();
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
