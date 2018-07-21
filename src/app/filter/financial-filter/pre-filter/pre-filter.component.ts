import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PreFilter } from '../../../interface/pre-filter';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as _ from 'lodash';
import { BasicFilterInput } from '../../../interface/api-input';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pre-filter',
  templateUrl: './pre-filter.component.html',
  styleUrls: ['./pre-filter.component.scss']
})
export class PreFilterComponent implements OnInit {
  @Input() preFilterData: PreFilter;
  @Input() preFilterFormGroup: FormGroup;
  @Output() next: EventEmitter<any> = new EventEmitter();

  private ngUnsubscribe: Subject<any> = new Subject();
  private selectedStockExchanges: string[] = [];

  constructor() { }

  ngOnInit() {
    this.registerValueChange();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private clickNext(): void {
    if (this.preFilterFormGroup.valid) {
      const output: BasicFilterInput = {
        time: this.preFilterFormGroup.get('timeFilter').value,
        stockExchanges: this.selectedStockExchanges,
        searchDataitems: []
      }
      this.next.emit(output);
    }
  }

  private registerValueChange() {
    this.preFilterData.stockExchanges.forEach(stockExchange => {
      const fbStockExchange = this.preFilterFormGroup.get('stockExchange').get(stockExchange.code);
      fbStockExchange.valueChanges
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(value => {
          // update selectedDataItemCodes
          if (value === true) {
            this.selectedStockExchanges.push(stockExchange.code);
          } else {
            _.remove(this.selectedStockExchanges, item => {
              return item === stockExchange.code
            })
          }

          // update isValid of parent form
          const isFormValid = this.selectedStockExchanges && this.selectedStockExchanges.length > 0;
          this.preFilterFormGroup.get('isValid').reset(isFormValid);
        })
    });
  }

}
