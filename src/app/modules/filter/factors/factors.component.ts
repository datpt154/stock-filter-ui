import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import * as _ from 'lodash';
import { takeUntil } from 'rxjs/operators';
import { Factor } from '../../../interface/factor';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})
export class FactorsComponent implements OnInit {
  @Input() factors: Factor[];
  @Input() factorsFormGroup: FormGroup;
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() factorsChange: EventEmitter<any> = new EventEmitter();

  private ngUnsubscribe: Subject<any> = new Subject();

  private MAXINUM_SELECTED_FACTORS = 5;
  private selectedDataItemCodes: string[] = []; // keep code of current selected dataItems;
  private disabled = false; // if users select enough MAXINUM_SELECTED_FACTORS => we will disable the sections

  constructor() { }

  ngOnInit() {
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


  private getSelectedCheckboxs(form: FormGroup, formData: Factor[]) {
    const selectedSections: any[] = [];

    formData.forEach(factor => {
      const fbBuilderFactor = form.get(factor.code);
      factor.dataItems.forEach(dataItem => {
        const fbBuilderDataItem = fbBuilderFactor.get(dataItem.code);
        if (fbBuilderDataItem.value) {
          selectedSections.push(
            {
              title: factor.title,
              dataItems: dataItem
            }
          );
        }
      })
    });

    return selectedSections;
  }

  private registerValueChange() {
    this.factors.forEach(factor => {
      factor.dataItems.forEach(dataItem => {
        const fbBuilderDataItem = this.factorsFormGroup.get(factor.code).get(dataItem.code);
        fbBuilderDataItem.valueChanges
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(value => {
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
            this.factorsChange.emit(this.selectedDataItemCodes);
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
