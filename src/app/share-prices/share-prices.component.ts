import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/business.service/filter.service';

@Component({
  selector: 'app-share-prices',
  templateUrl: './share-prices.component.html',
  styleUrls: ['./share-prices.component.scss']
})
export class SharePricesComponent implements OnInit {
  data: any;

  constructor(private _filterService: FilterService) { }

  ngOnInit() {
    this._filterService.searchCompanyReport('AAA').subscribe(data => {
      this.data = data;
    });
  }

}
