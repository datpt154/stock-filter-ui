import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataItem } from '../../../interface/data-item';
import { PrefixNot } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasicFilterInput } from '../../../interface/api-input';

import * as _ from 'lodash';
import { CommonConstants } from '../../../constants/common-const';

@Component({
  selector: 'app-first-selection',
  templateUrl: './first-selection.component.html',
  styleUrls: ['./first-selection.component.scss']
})
export class FirstFilterSelectionComponent implements OnInit {
  @Input() selectedDataItems: DataItem[] = [];
  @Output() next: EventEmitter<any> = new EventEmitter();

  private ngUnsubscribe: Subject<any> = new Subject();
  private selectedStockExchanges: string[] = [];
  private otherFactosFormGroup: FormGroup;
  private otherFactors = CommonConstants.otherFactors;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.otherFactosFormGroup = this.buildOtherFactorsFb();
    this.registerValueChange();
  }

  private nextStep(): void {
    if (this.otherFactosFormGroup.valid) {
      const output: BasicFilterInput = {
        time: this.otherFactosFormGroup.get('timeFilter').value,
        stockExchanges: this.selectedStockExchanges,
        searchDataitems: this.selectedDataItems
      }
      this.next.emit(output);
    }
  }

  private clearFilter(): void {
    if (this.selectedDataItems && this.selectedDataItems.length) {
      this.selectedDataItems.forEach(dataItem => dataItem.selectedValues = [dataItem.min, dataItem.max]);
    }
  }

  private buildOtherFactorsFb(): FormGroup {
    // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
    // to verify that the checkbox must be selected at least one
    const temp = {
      isValid: new FormControl(false, Validators.requiredTrue),
      timeFilter: new FormControl('', Validators.required),
      stockExchange: this.createFbForStockExchange(this.otherFactors.stockExchanges)
    };

    return this._formBuilder.group(temp);
  }

  private createFbForStockExchange(stockExchanges: any): FormGroup {
    let fgStockExchange = {};

    stockExchanges.forEach(item => {
      fgStockExchange[item.code] = new FormControl(false);
    });

    return this._formBuilder.group(fgStockExchange);
  }

  private registerValueChange() {
    this.otherFactors.stockExchanges.forEach(stockExchange => {
      const fbStockExchange = this.otherFactosFormGroup.get('stockExchange').get(stockExchange.code);
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
          this.otherFactosFormGroup.get('isValid').reset(isFormValid);
        })
    });
  }

}