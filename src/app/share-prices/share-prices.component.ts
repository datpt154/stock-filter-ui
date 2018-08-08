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
    this._filterService.searchCompanyReport('FPT').subscribe(data => {
      this.data = {
            headers: ['Year End 30th Sep', '2012', '2013', '2014', '2015'],
            rows: [
              ['Revenue','$m', 156508,	'170,910',	'182,795', 	'233,715'],
              ['Revenue','$m','156,508',	'170,910',	'182,795', 	'233,715'],
              ['Revenue','$m','156,508',	'170,910',	'182,795', 	'233,715'],
              ['Profitability'],
              ['Revenue','$m','156,508',	'170,910',	'182,795', 	'233,715'],
              ['Revenue','$m','156,508',	'170,910',	'182,795', 	'233,715'],
              ['Revenue','$m','156,508',	'170,910',	'182,795', 	'233,715'],
            ]
        };
    });
  }

}
