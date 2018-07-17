import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataItem } from '../../../interface/data-item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() selectedDataItems: DataItem[];
  @Output() next: EventEmitter<any> = new EventEmitter();

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  private nextStep(): void {
    this.next.next(this.selectedDataItems);
  }

  private clearFilter(): void {
    if (this.selectedDataItems && this.selectedDataItems.length) {
      this.selectedDataItems.forEach(dataItem => dataItem.selectedValues = [dataItem.min, dataItem.max]);
    }
  }

}
