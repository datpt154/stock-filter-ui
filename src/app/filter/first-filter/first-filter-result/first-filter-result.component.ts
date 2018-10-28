import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as _ from 'lodash';
import { DataItem } from '../../../interface/data-item';
import { BasicFilterDTO } from '../../../interface/basic-filter-dto';
import { FilterTableColumn, SortType, TableData } from '../../../interface/filter-table-dto';

// here are some columns that will be fixed on UI (always be showed)
const TABLE_DEFAULT_COLUMN: FilterTableColumn[] = [
  {
    title: 'No.',
    code: 'rowIndex',
    sortType: SortType.NONE
  },
  {
    title: 'Mã chứng khoán',
    code: 'companyCode',
    sortType: SortType.ASD
  },
  {
    title: 'Tên công ty',
    code: 'companyName',
    sortType: SortType.NONE
  },
  {
    title: 'Sàn',
    code: 'stockExchange',
    sortType: SortType.NONE
  },
  {
    title: 'Giá',
    code: 'price',
    sortType: SortType.NONE
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
    numOfDefaultColumn: TABLE_DEFAULT_COLUMN.length,
    pagination: {
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
        sortType: SortType.NONE
      };
    });

    this.tableData.header = [...TABLE_DEFAULT_COLUMN, ...dynamicHeader];
    this.tableData.data = this.searchResult;
    this.tableData.pagination.total = Math.ceil(this.searchResult.length / this.tableData.pagination.size);
  }

  private backToFilterInput(): void {
    this.searchResult = [];
    this.triggerBackToFilterInput.emit();
  }
}
