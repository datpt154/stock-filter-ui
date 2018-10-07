import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataItem } from '../../../interface/data-item';
import { PrefixNot } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasicFilterInput } from '../../../interface/api-input';

import * as _ from 'lodash';
import { CommonConstants } from '../../../constants/common-const';
import { Options, LabelType } from 'ng5-slider/options';

@Component({
  selector: 'app-first-selection',
  templateUrl: './first-selection.component.html',
  styleUrls: ['./first-selection.component.scss']
})
export class FirstFilterSelectionComponent implements OnInit, OnChanges {
  @Input() selectedDataItems: DataItem[] = [];
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter();

  private ngUnsubscribe: Subject<any> = new Subject();
  private selectedStockExchanges: string[] = [];
  private otherFactosFormGroup: FormGroup;
  private otherFactors = CommonConstants.otherFactors;
  currentOrientation = 'horizontal';

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.otherFactosFormGroup = this.buildOtherFactorsFb();
    this.registerValueChange();

    // Need run at init time to init data for selectedStockExchanges array
    this.otherFactors.stockExchanges.forEach(stockExchange => {
      const fbStockExchangeValue = this.otherFactosFormGroup.get('stockExchange').get(stockExchange.code).value;
      this.handleStockExchangesChanged(fbStockExchangeValue, stockExchange);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    // To emmit data change to first filter component when change slider
    if(changes.selectedDataItems) {
      this.handleValueChange();
    }
  }

  getOption(dataItem: DataItem): Options {
    const option: Options = {
      floor: dataItem.min,
      ceil: dataItem.max,
      step: dataItem.step,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case 0:
          case 1:
            return [dataItem.unit, value].join(' ');
          default:
            return value.toString();
        }
      }
    };

    return option;
  }

  private nextStep(): void {
    if (this.otherFactosFormGroup.valid) {
      const output: BasicFilterInput = {
        time: this.otherFactosFormGroup.get('timeFilter').value,
        stockExchanges: this.selectedStockExchanges,
        searchDataitems: this.selectedDataItems
      };

      this.next.emit(output);
    }
  }

  private sliderChanged() {
    this.handleValueChange();
  }

  private handleValueChange() {
    const output: BasicFilterInput = {
      time: this.otherFactosFormGroup.get('timeFilter').value,
      stockExchanges: this.selectedStockExchanges,
      searchDataitems: this.selectedDataItems
    };

    this.selectionChanged.emit(output);
  }

  backStep(): void {
    this.back.emit();
  }

  private clearFilter(): void {
    if (this.selectedDataItems && this.selectedDataItems.length) {
      this.selectedDataItems.forEach(dataItem => dataItem.selectedValues = [dataItem.min, dataItem.max]);
    }
  }

  private buildOtherFactorsFb(): FormGroup {
    // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
    // to verify that the checkbox must be selected at least one
    const selectedTimeFilter = this.otherFactors.filterTimes.find(item => item.isSelected);
    const temp = {
      isValid: new FormControl(true, Validators.requiredTrue),
      timeFilter: new FormControl(_.get(selectedTimeFilter, 'code', ''), Validators.required),
      stockExchange: this.createFbForStockExchange(this.otherFactors.stockExchanges)
    };

    return this._formBuilder.group(temp);
  }

  private createFbForStockExchange(stockExchanges: any): FormGroup {
    const fgStockExchange = {};

    stockExchanges.forEach(item => {
      fgStockExchange[item.code] = new FormControl(item.isSelected);
    });

    return this._formBuilder.group(fgStockExchange);
  }

  private registerValueChange() {
    this.otherFactosFormGroup.get('timeFilter').valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        this.handleValueChange();
      });

    this.otherFactors.stockExchanges.forEach(stockExchange => {
      const fbStockExchange = this.otherFactosFormGroup.get('stockExchange').get(stockExchange.code);
      fbStockExchange.valueChanges
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(value => {
          this.handleStockExchangesChanged(value, stockExchange);
        });
    });
  }

  private handleStockExchangesChanged(value, stockExchange) {
    // update selectedDataItemCodes
    if (value === true) {
      this.selectedStockExchanges.push(stockExchange.code);
    } else {
      _.remove(this.selectedStockExchanges, item => {
        return item === stockExchange.code;
      });
    }

    // update isValid of parent form
    const isFormValid = this.selectedStockExchanges && this.selectedStockExchanges.length > 0;
    this.otherFactosFormGroup.get('isValid').reset(isFormValid);
    this.handleValueChange();
  }

}
