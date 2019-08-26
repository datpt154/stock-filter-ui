import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as _ from 'lodash';
import { DataItem } from '../../../../interface/data-item';
import { BasicFilterDTO } from '../../../../interface/basic-filter-dto';
import { FilterTableColumn, SortType, TableData, DataType } from '../../../../interface/filter-table-dto';

// here are some columns that will be fixed on UI (always be showed)
const TABLE_DEFAULT_COLUMN: FilterTableColumn[] = [
  {
    title: 'No.',
    code: 'rowIndex',
    sortType: SortType.NONE,
    width: 1,
    dataType: DataType.String
  },
  {
    title: 'Cổ phiếu',
    code: 'companyCode',
    sortType: SortType.ASD,
    width: 1,
    dataType: DataType.String
  },
  {
    title: 'Tên công ty',
    code: 'companyName',
    sortType: SortType.NONE,
    width: 0,
    dataType: DataType.String
  },
  {
    title: 'Sàn',
    code: 'stockExchange',
    sortType: SortType.DEFAULT,
    width: 1,
    dataType: DataType.String
  },
  {
    title: 'Giá',
    code: 'price',
    sortType: SortType.DEFAULT,
    width: 1,
    dataType: DataType.Number
  },
];
@Component({
  selector: 'app-first-filter-result',
  templateUrl: './first-filter-result.component.html',
  styleUrls: ['./first-filter-result.component.scss']
})
export class FirstFilterResultComponent implements OnInit {
  @Output() triggerBackToFilterInput: EventEmitter<any> = new EventEmitter();
  @Input() selectedDataItems: DataItem[];
  @Input() searchResult: BasicFilterDTO[] = [];

  public tableData: TableData = {
    title: 'Kết quả lọc cổ phiếu dựa trên các chỉ số cơ bản',
    header: [],
    body: [],
    data: [],
    pagination: {
      visible: true,
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
        width: 1,
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
