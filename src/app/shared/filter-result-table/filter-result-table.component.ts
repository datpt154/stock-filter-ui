import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { TableData, FilterTableColumn, SortType, DataType } from '../../interface/filter-table-dto';

@Component({
  selector: 'app-filter-result-table',
  templateUrl: './filter-result-table.component.html',
  styleUrls: ['./filter-result-table.component.scss']
})
export class FilterResultTableComponent implements OnInit {
  @Input() tableData: TableData;
  public sortType = SortType;
  public dataType = DataType;
  public chartConfig = {
    options: {
      scaleShowVerticalLines: true,
      responsive: true
    },
    labels: [],
    type: 'bar',
    legend: false,
    data: [{ data: [], label: '' }],
    colors: []
  };

  constructor() { }

  ngOnInit() {
    this.tableData.pagination.total = Math.ceil(this.tableData.data.length / this.tableData.pagination.size);
    if (this.tableData.data.length <= this.tableData.pagination.size) {
      this.tableData.pagination.visible = false;
    }
    if (!this.tableData.pagination.visible) {
      this.tableData.pagination.size = this.tableData.data.length;
    }
    this.updateSearchResultIndex();
    this.goToPage(this.tableData.pagination.currentPage);
  }

  private updateSearchResultIndex() {
    this.tableData.data = this.tableData.data.map((item, index) => {
      item.index = index + 1;
      return item;
    });
  }

  public goToPage(pageNum: number) {
    if (pageNum <= this.tableData.pagination.total && pageNum > 0) {
      const maxIndex = pageNum * this.tableData.pagination.size;
      this.tableData.pagination.currentPage = pageNum;
      this.tableData.body = _.slice(this.tableData.data, maxIndex - this.tableData.pagination.size, maxIndex);
    }
  }

  public sortByColumn(column: FilterTableColumn) {
    column = this.updateComlumnSortType(column);
    this.tableData.data = this.sortTableDataByColumnCode(column.code, column.sortType);
    this.tableData.pagination.currentPage = 1;
    this.updateSearchResultIndex();
    this.goToPage(this.tableData.pagination.currentPage);
  }

  private updateComlumnSortType(column: FilterTableColumn) {
    if (column.sortType === SortType.DEFAULT) {
      const currentSortBy = this.tableData.header.find(col => col.sortType !== SortType.NONE && col.sortType !== SortType.DEFAULT);
      if (!_.isNil(currentSortBy)) {
        currentSortBy.sortType = SortType.DEFAULT;
      }
      column.sortType = SortType.ASD;
    } else if (column.sortType === SortType.ASD) {
      column.sortType = SortType.DESC;
    } else {
      column.sortType = SortType.ASD;
    }
    return column;
  }

  sortTableDataByColumnCode(code: string, sortType: SortType) {
    if (this.tableData.data.length) {
      return _.orderBy(this.tableData.data, [code, 'companyCode'], [sortType === SortType.ASD ? 'asc' : 'desc', 'asc']);
    }
    return [];
  }

  public showColumnCharts(popover: any, columnName: string) {
    const temp = [];
    this.tableData.data.forEach(row => {
      if (!_.isNil(row[columnName])) {
        temp.push(row[columnName]);
      }
    });

    this.chartConfig.labels = _.map(this.tableData.data, 'companyCode');

    if (!popover.isOpen()) {
      const clone = _.cloneDeep(this.chartConfig.data);
      clone[0].data = temp;
      this.chartConfig.data = clone;
      popover.open();
    }
  }

  public closeColumnCharts(popover): void {
    if (popover.isOpen()) {
      popover.close();
    }
  }
}
