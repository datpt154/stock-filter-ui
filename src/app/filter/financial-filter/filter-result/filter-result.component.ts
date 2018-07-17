import { Component, OnInit, ViewChild, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { BasicFilterDTO } from '../../../interface/basic-filter-dto';
import { DataItem } from '../../../interface/data-item';
import { FilterService } from '../../../services/business.service/filter.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent implements OnInit {
  @Output() triggerBackToFilterInput: EventEmitter<any> = new EventEmitter();
  @Input() selectedDataItems: DataItem[];
  private searchResult: BasicFilterDTO[] = [];

  // here are some columns that will be fixed on UI (always be showed)
  private fixedColumns = ['rowIndex', 'companyName', 'companyCode'];
  private displayedColumns;
  private dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private _filterService: FilterService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedDataItems && changes.selectedDataItems.currentValue) {
      // update displayedColumns whenever selectedDataItems has been changed 
      this.displayedColumns = [...this.fixedColumns];
      this.selectedDataItems.forEach(dataItem => {
        this.displayedColumns.push(dataItem.code);
      })

      this._filterService.basicFilter(this.selectedDataItems).subscribe(data => {
        _.range(1, 100).forEach(item => {
          this.searchResult = this.searchResult.concat(data);
        })

        // initialize data after input are binded sucessfully
        this.dataSource = new MatTableDataSource<BasicFilterDTO>(this.searchResult);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  ngOnInit() {

  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  private backToFilterInput(): void {
    this.searchResult = [];
    this.triggerBackToFilterInput.emit();
  }

}