import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import * as _ from 'lodash';
import { takeUntil } from 'rxjs/operators';
import { Factor } from '../../interface/factor';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})
export class FactorsComponent implements OnInit {
  @Input() factors: Factor[];
  @Output() next: EventEmitter<any> = new EventEmitter();

  private ngUnsubscribe: Subject<any> = new Subject();

  private MAXINUM_SELECTED_FACTORS = 5;
  private selectedDataItemCodes: string[] = []; // keep code of current selected dataItems;
  private disabled = false; // if users select enough MAXINUM_SELECTED_FACTORS => we will disable the sections
  public factorsFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.factorsFormGroup = this.buildFactorsFb(this.factors);
    this.calculateSelectedDataItemsAndDisable(this.factorsFormGroup, this.factors);
    this.registerValueChange();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private nextStep(): void {
    if (this.selectedDataItemCodes && this.selectedDataItemCodes.length) {
      this.next.next(this.selectedDataItemCodes);
    }
  }

  private buildFactorsFb(factors: Factor[]): FormGroup {
    const temp = {
      // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
      // so based on this to know that whether form is valid or not
      isValid: new FormControl(false, Validators.requiredTrue)
    };

    factors.forEach(factor => {
      temp[factor.code] = this.createFormbuilderForDataItems(factor);
    });


    return this._formBuilder.group(temp);
  }

  private createFormbuilderForDataItems(factor: Factor): FormGroup {
    let formGroupDataItem = {};

    factor.dataItems.forEach(dataItem => {
      formGroupDataItem[dataItem.code] = new FormControl({
        value: dataItem.isSelected,
        disabled: false
      });
    });

    return this._formBuilder.group(formGroupDataItem);
  }

  private calculateSelectedDataItemsAndDisable(form: FormGroup, formData: Factor[]) {
    this.selectedDataItemCodes = [];
    this.factors.forEach(factor => {
      factor.dataItems.forEach(dataItem => {
            // update selectedDataItemCodes
            if (dataItem.isSelected === true) {
              this.selectedDataItemCodes.push(dataItem.code);
            }

            // based on selectedDataItemCodes, to determine disable or not and show toaster
            if (this.selectedDataItemCodes.length >= this.MAXINUM_SELECTED_FACTORS) {
              this.disabled = true;
            } else {
              this.disabled = false;
            }

            // update isValid of parent form
            const isFormValid = this.selectedDataItemCodes && this.selectedDataItemCodes.length > 0;
            this.factorsFormGroup.get('isValid').reset(isFormValid);
      })
    });
  }

  private registerValueChange() {
    this.factors.forEach(factor => {
      factor.dataItems.forEach(dataItem => {
        const fbBuilderDataItem = this.factorsFormGroup.get(factor.code).get(dataItem.code);
        fbBuilderDataItem.valueChanges
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(value => {
            // update factors because UI just updates to formbuilder
            dataItem.isSelected = value;
            // update selectedDataItemCodes
            if (value === true) {
              this.selectedDataItemCodes.push(dataItem.code);
            } else {
              _.remove(this.selectedDataItemCodes, dataItemCode => {
                return dataItemCode === dataItem.code
              })
            }

            // based on selectedDataItemCodes, to determine disable or not and show toaster
            if (this.selectedDataItemCodes.length >= this.MAXINUM_SELECTED_FACTORS) {
              this.disabled = true;
            } else {
              this.disabled = false;
            }

            // update isValid of parent form
            const isFormValid = this.selectedDataItemCodes && this.selectedDataItemCodes.length > 0;
            this.factorsFormGroup.get('isValid').reset(isFormValid);
          })
      })
    });
  }

  /**
   * dataItem selection is disable when the flag disabled = true and its selection value is false
   */
  private isDiasbled(factorCode: string, dataItemCode: string): boolean {
    return this.disabled && this.factorsFormGroup.get(factorCode).get(dataItemCode).value === false;
  }
}
