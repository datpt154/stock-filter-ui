import { Component, OnInit } from '@angular/core';
import { CommonConstants } from '../constants/common-const';
import { FilterService } from '../services/business.service/filter.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  public dataOverivew: any;
  public otherFactors = CommonConstants.otherFactors;
  public companyCode = '';

  constructor(
    private _filterService: FilterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setDefaultTime();
    this.route.queryParams.subscribe(params => {
      this.companyCode = params['companyCode'];
      const selectedFilterTime = this.otherFactors.filterTimes.find(item => item.isSelected === true);
      this.getDetailstock(this.companyCode, selectedFilterTime.code);

      // this._filterService.getDetailStockMore(this.companyCode, selectedFilterTime.code).subscribe(data => console.log(data));
    });
  }

  // whenever filterTime radio has been changed, we have to reload DetailStock again
  selectFilterTime(item): void {
    this.getDetailstock(this.companyCode, item.code);
  }

  // whenever we enter page, should set default selection for filterTime (is 'quater')
  getDetailstock(companyCode: string, filterTime: string): void {
    this._filterService.getDetailstock(companyCode, filterTime).subscribe(data => {
      this.dataOverivew = data;
    });
  }

  setDefaultTime(): void {
    this.otherFactors.filterTimes.forEach(item => {
      item.isSelected = item.code === 'quarter';
    });
  }

}
