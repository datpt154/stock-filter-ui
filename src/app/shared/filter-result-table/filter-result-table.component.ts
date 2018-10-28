import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { TableData, FilterTableColumn, SortType } from '../../interface/filter-table-dto';
import { BasicFilterDTO } from 'src/app/interface/basic-filter-dto';

@Component({
  selector: 'app-filter-result-table',
  templateUrl: './filter-result-table.component.html',
  styleUrls: ['./filter-result-table.component.scss']
})
export class FilterResultTableComponent implements OnInit {
  @Input() tableData: TableData;
  public sortType = SortType;

  constructor() { }

  ngOnInit() {
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

  public sortByColumn(column: FilterTableColumn, columnIndex: number) {
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
    this.sortProcessing(column.code, columnIndex, column.sortType);
    this.tableData.pagination.currentPage = 1;
    this.updateSearchResultIndex();
    this.goToPage(this.tableData.pagination.currentPage);
  }

  sortProcessing(code: string, columnIndex: number, sortType: SortType) {
    if (this.tableData.data.length) {
      const sortNum = sortType === SortType.ASD ? 1 : -1;
      const isDefaultColumn = (columnIndex - this.tableData.numOfDefaultColumn) < 0;
      const type = typeof (this.getValueByCode(this.tableData.data[0], isDefaultColumn, code, columnIndex));
      switch (type) {
        case 'number':
          this.tableData.data.sort((a: BasicFilterDTO, b: BasicFilterDTO) => {
            let result = 0;
            const aValue = this.getValueByCode(a, isDefaultColumn, code, columnIndex);
            const bValue = this.getValueByCode(b, isDefaultColumn, code, columnIndex);
            if (aValue === bValue) {
              return this.sortByCompanyCodeAsc(a, b);
            } else {
              result = aValue - bValue;
            }
            return result * sortNum;
          });
          break;
        case 'string':
          this.tableData.data.sort((a: BasicFilterDTO, b: BasicFilterDTO) => {
            let result = 0;
            const aValue = this.getValueByCode(a, isDefaultColumn, code, columnIndex);
            const bValue = this.getValueByCode(b, isDefaultColumn, code, columnIndex);
            if (aValue === bValue) {
              return this.sortByCompanyCodeAsc(a, b);
            } if (aValue < bValue) {
              result = -1;
            } else {
              result = 1;
            }
            return result * sortNum;
          });
          break;
      }
    }
  }

  private getValueByCode(row: BasicFilterDTO, isDefaultColumn: boolean, code: string, columnIndex: number) {
    if (isDefaultColumn) {
      return row[code];
    } else {
      return row.searchItems[columnIndex - this.tableData.numOfDefaultColumn].value;
    }
  }

  private sortByCompanyCodeAsc(a: BasicFilterDTO, b: BasicFilterDTO): number {
    const aCode = a.companyCode.toUpperCase();
    const bCode = b.companyCode.toUpperCase();
    if (aCode < bCode) {
      return -1;
    } else if (aCode > bCode) {
      return 1;
    } else {
      return 0;
    }
  }
}
