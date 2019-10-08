import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasicFilterDTO} from '../../../../interface/basic-filter-dto';
import {DataItem} from '../../../../interface/data-item';
import * as _ from 'lodash';
import {DataType, FilterTableColumn, SortType, TableData} from '../../../../interface/filter-table-dto';
import {FilterConstant} from '../../../../constants/filter-constant';


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

  constructor() {
  }

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

    this.tableData.header = [...FilterConstant.TABLE_DEFAULT_COLUMN, ...dynamicHeader];
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
