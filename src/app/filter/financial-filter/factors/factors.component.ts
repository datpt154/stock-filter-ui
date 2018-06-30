import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Factor } from '../../../interface/factor';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import * as _ from 'lodash';

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

  private ngUnsubscribe: Subject<any> = new Subject();

  private MAXINUM_SELECTED_FACTORS = 5;
  private selectedDataItemCodes: string[] = []; // keep code of current selected dataItems;
  private disabled = false; // if users select enough MAXINUM_SELECTED_FACTORS => we will disable the sections

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerValueChange();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private nextToSecondStep(): void {
    if (this.selectedDataItemCodes && this.selectedDataItemCodes.length) {
      this.next.next(this.selectedDataItemCodes);
    } else {
      this.snackBar.open('Please select at least one item', '', {
        duration: 300
      });
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
          .takeUntil(this.ngUnsubscribe)
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
              this.snackBar.open('the maximum sections is 5', '', {
                duration: 155000
              });
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

  private clearSelectedFactors(): void {
    this.reset.emit();
  }

}
