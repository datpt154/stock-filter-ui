import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { BasicFilterDTO } from '../../../interface/basic-filter-dto';
import { DataItem } from '../../../interface/data-item';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

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
  private displayedColumns;
  private dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


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

}
