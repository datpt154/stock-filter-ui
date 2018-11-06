import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { BasicFilterDTO } from '../../../interface/basic-filter-dto';
import { DataItem } from '../../../interface/data-item';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';
import { TableData, SortType, FilterTableColumn, DataType } from '../../../interface/filter-table-dto';

const TABLE_DEFAULT_COLUMN: FilterTableColumn[] = [
  {
    title: 'No.',
    code: 'rowIndex',
    sortType: SortType.NONE,
    width: 1,
    dataType: DataType.String
  },
  {
    title: 'Mã chứng khoán',
    code: 'companyCode',
    sortType: SortType.ASD,
    dataType: DataType.String
  },
  {
    title: 'Giá',
    code: 'price',
    sortType: SortType.DEFAULT,
    showChart: true,
    dataType: DataType.Number
  },
];
@Component({
  selector: 'app-second-filter-result',
  templateUrl: './second-filter-result.component.html',
  styleUrls: ['./second-filter-result.component.scss']
})
export class SecondFilterResultComponent implements OnInit {
  @Output() triggerBackToFilterInput: EventEmitter<any> = new EventEmitter();
  @Input() selectedDataItems: DataItem[];
  @Input() searchResult: BasicFilterDTO[] = [];

  public tableData: TableData = {
    title: 'Kết quả so sanh phiếu dựa trên các chỉ số cơ bản',
    header: [],
    body: [],
    data: [],
    pagination: {
      visible: false,
      size: 10,
      total: 0,
      currentPage: 1
    }
  };

  constructor() { }

  ngOnInit() {
    const dynamicHeader: FilterTableColumn[] = this.selectedDataItems.map(dataItem => {
      return {
        title: dataItem.title,
        code: dataItem.code,
        sortType: SortType.DEFAULT,
        showChart: true,
        dataType: DataType.Number
      };
    });

    this.tableData.header = [...TABLE_DEFAULT_COLUMN, ...dynamicHeader];
    this.tableData.data = this.searchResult.map(item => {
      _.forEach(item.searchItems, searchItem => {
        item[searchItem.code] = searchItem.value;
      });
      delete item.searchItems;
      return item;
    });
  }

  private backToFilterInput(): void {
    this.searchResult = [];
    this.triggerBackToFilterInput.emit();
  }
}
