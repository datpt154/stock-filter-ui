import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { DefaultFormatter } from 'ng2-nouislider';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterConstant } from '../../../../constants/filter-constant';
import { BasicFilterInput } from '../../../../interface/api-input';
import { DataItem } from '../../../../interface/data-item';


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
  private otherFactors = FilterConstant.otherFactors;
  currentOrientation = 'horizontal';

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.otherFactosFormGroup = this.buildOtherFactorsFb();
    this.registerValueChange();

    // Need run at init time to init data for selectedStockExchanges array
    this.otherFactors.stockExchanges.forEach(stockExchange => {
      const fbStockExchangeValue = this.otherFactosFormGroup.get('stockExchange').get(stockExchange.code).value;
      this.handleStockExchangesChanged(fbStockExchangeValue, stockExchange);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // To emmit data change to first filter component when change slider
    if (changes.selectedDataItems) {
      this.handleValueChange();
    }
  }

  getOption(dataItem: DataItem) {
    return {
      connect: true,
      margin: dataItem.step,
      start: [dataItem.min, dataItem.max],
      format: new DefaultFormatter(),
      step: dataItem.step,
      tooltips: [true, true],
      range: {
        min: dataItem.min,
        max: dataItem.max
      },
      pips: {
        mode: 'count',
        density: 2,
        values: dataItem.max < 10 ? dataItem.max + 1 : 6,
        stepped: false
      }
    };
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
    if (this.otherFactosFormGroup) {
      const output: BasicFilterInput = {
        time: this.otherFactosFormGroup.get('timeFilter').value,
        stockExchanges: this.selectedStockExchanges,
        searchDataitems: this.selectedDataItems
      };

      this.selectionChanged.emit(output);
    }
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
