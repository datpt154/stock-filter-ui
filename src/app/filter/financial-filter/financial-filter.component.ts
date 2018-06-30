import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Factor } from '../../interface/factor';
import { min } from 'rxjs/operators';
import { CommonConstants } from '../../constants/common-const';
import { DataItem } from '../../interface/data-item';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-financial-filter',
  templateUrl: './financial-filter.component.html',
  styleUrls: ['./financial-filter.component.scss']
})
export class FinancialFilterComponent implements OnInit {
  private isFilterInput = true;

  private data: Factor[] = CommonConstants.factors;

  factorsFormGroup: FormGroup;
  isLinear: boolean = false;

  private selectedDataItems: DataItem[];

  @ViewChild('stepper') stepper;

  constructor(private _formBuilder: FormBuilder, private _filterService: FilterService) { }

  ngOnInit() {
    this.factorsFormGroup = this.builFormBuilder();
  }

  private nextToSecondStep(selectedDataItemCodes: string[]): void {
    this.selectedDataItems = [];
    this.data.forEach(factor => {
      const temp = factor.dataItems.filter(dataItem => selectedDataItemCodes.includes(dataItem.code))
      if (temp && temp.length) {
        this.selectedDataItems = this.selectedDataItems.concat(temp);
      }
    });

    this.stepper.next();
  }

  private nextToThirdStep(selectedDataItems): void {
    this._filterService.test();
    this.stepper.next();
  }

  private builFormBuilder(): FormGroup {
    const temp = {
      isValid: new FormControl(false, Validators.requiredTrue)
    };

    this.data.forEach(factor => {
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
}

