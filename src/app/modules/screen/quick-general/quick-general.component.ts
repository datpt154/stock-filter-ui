import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-quick-general',
  templateUrl: './quick-general.component.html',
  styleUrls: ['./quick-general.component.css']
})
export class QuickGeneralComponent implements OnInit {

  constructor(
    private _filterService: FilterService,
  ) { }

  tableHeaderTab1 = {
    header: 'Doanh Thu Cao Nhất',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Doanh thu($)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Doanh thu($)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Doanh thu($)'
    },
  };

  tableDataTab1: any;

  ngOnInit() {
    this._filterService.getScreenRevenue().subscribe(data => {
      this.tableDataTab1 = data;
    });
  }

}
