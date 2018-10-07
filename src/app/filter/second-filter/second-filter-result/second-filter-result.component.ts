import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { BasicFilterDTO } from '../../../interface/basic-filter-dto';
import { DataItem } from '../../../interface/data-item';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-second-filter-result',
  templateUrl: './second-filter-result.component.html',
  styleUrls: ['./second-filter-result.component.scss']
})
export class SecondFilterResultComponent implements OnInit {
  @Output() triggerBackToFilterInput: EventEmitter<any> = new EventEmitter();
  @Input() selectedDataItems: DataItem[];
  @Input() searchResult: BasicFilterDTO[] = [];

  // here are some columns that will be fixed on UI (always be showed)
  private fixedColumns = ['rowIndex', 'companyCode', 'price'];
  private displayedColumns = [];
  private dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private reportFinanceData: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData: any[] = [
    { data: [], label: '' }
  ];


  constructor() { }

  // ngOnChanges(changes: SimpleChanges) {
  //   // if (changes.selectedDataItems && changes.selectedDataItems.currentValue) {
  //     // update displayedColumns whenever selectedDataItems has been changed
  //     this.displayedColumns = [...this.fixedColumns];
  //     this.selectedDataItems.forEach(dataItem => {
  //       this.displayedColumns.push(dataItem.code);
  //     })

  //     // initialize data after input are binded sucessfully
  //     this.dataSource = new MatTableDataSource<BasicFilterDTO>(this.searchResult);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   // }
  // }

  ngOnInit() {
    this.displayedColumns = [...this.fixedColumns];
    this.selectedDataItems.forEach(dataItem => {
      this.displayedColumns.push(dataItem.code);
    });

    // initialize data after input are binded sucessfully
    this.dataSource = new MatTableDataSource<BasicFilterDTO>(this.searchResult);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private backToFilterInput(): void {
    this.searchResult = [];
    this.triggerBackToFilterInput.emit();
  }

  showColumnCharts(popover: any, columnName: string) {
    const temp = [];
    this.dataSource.data.forEach(row => {
      if (!_.isNil(row[columnName])) {
        temp.push(row[columnName]);
      } else {
        const searchItem = row.searchItems.find(item => item.code === columnName);
        temp.push(searchItem.value);
      }
    });

    this.barChartLabels = _.map(this.dataSource.data, 'companyCode');

    if (!popover.isOpen()) {
      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = temp;
      // clone[0].label = data[0];
      this.barChartData = clone;

      popover.open();
    }
  }


  closeColumnCharts(popover): void {
    if (popover.isOpen()) {
      popover.close();
    }
  }

}
