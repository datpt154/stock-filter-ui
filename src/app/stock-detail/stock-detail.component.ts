import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterConstant } from '../constants/filter-constant';
import { FilterService } from '../services/business.service/filter.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  public dataOverivew: any;
  public otherFactors = FilterConstant.otherFactors;
  public companyCode: string;
  public selectedFilterTimeCode: string;

  constructor(
    private _filterService: FilterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setDefaultTime();
    this.route.queryParams.subscribe(params => {
      this.companyCode = params['companyCode'];
      const selectedFilterTime = this.otherFactors.filterTimes.find(item => item.isSelected === true);
      this.selectedFilterTimeCode = selectedFilterTime.code;
      this.getDetailstock(this.companyCode, this.selectedFilterTimeCode);
    });
  }

  // whenever filterTime radio has been changed, we have to reload DetailStock again
  selectFilterTime(item): void {
    this.selectedFilterTimeCode = item.code;
    this.getDetailstock(this.companyCode, this.selectedFilterTimeCode);
  }

  // whenever we enter page, should set default selection for filterTime (is 'quater')
  getDetailstock(companyCode: string, filterTimeCode: string): void {
    this._filterService.getDetailstock(companyCode, filterTimeCode).subscribe(data => {
      this.dataOverivew = data;
    });
  }

  setDefaultTime(): void {
    this.otherFactors.filterTimes.forEach(item => {
      item.isSelected = item.code === 'year';
    });
  }
}
