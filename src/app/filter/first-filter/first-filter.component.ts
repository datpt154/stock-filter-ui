import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { CommonConstants } from '../../constants/common-const';
import { BasicFilterInput } from '../../interface/api-input';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { DataItem } from '../../interface/data-item';
import { Factor } from '../../interface/factor';
import { FilterService } from '../../services/business.service/filter.service';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-first-filter',
  templateUrl: './first-filter.component.html',
  styleUrls: ['./first-filter.component.scss']
})
export class FirstFilterComponent implements OnInit {
  private factorsData: Factor[] = CommonConstants.factors;

  private factorsFormGroup: FormGroup;
  private selectedDataItems: DataItem[];
  private isFilterPageReady = false;
  private searchResult: BasicFilterDTO[] = [];
  private factorDeatailSearchInput: BasicFilterInput;

  private hiddenFieldsByDefault = [{
    code: 'FINANCE',
    dataItem: 'GROSS_PROFIT'
  }, {
    code: 'FINANCE',
    dataItem: 'SHARE_S_OUSTANDING'
  }];

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder, private _filterService: FilterService) { }

  ngOnInit() {
    this.factorsFormGroup = this.buildFactorsFb();
    this.setDefault();
  }

  private setDefault(): void {
    this.hiddenFieldsByDefault.forEach(hiddenField => {
      const factor = this.factorsData.find(factor => factor.code == hiddenField.code);
      if (!_.isNil(factor)) {
        const hiddenDataItem = factor.dataItems.find(dataItem => dataItem.code == hiddenField.dataItem);
        if (!_.isNil(hiddenDataItem)) {
          hiddenDataItem.isShow = false;
        }
      }
    })
  }

  private nextToFactorsDetail(selectedDataItemCodes: string[]): void {
    this.stepper.next();
  }

  private factorsChangeHandle(selectedDataItemCodes: string[]) {
    this.selectedDataItems = this.getSelectedDataFromFactors(selectedDataItemCodes);
  }

  private getSelectedDataFromFactors(selectedDataItemCodes: string[]) {
    let selectedDataItems = [];
    this.factorsData.forEach(factor => {
      const temp = factor.dataItems.filter(dataItem => selectedDataItemCodes.includes(dataItem.code))
      if (temp && temp.length) {
        selectedDataItems = selectedDataItems.concat(temp);
      }
    });
    return selectedDataItems;
  }

  private nextToFilterResult(searchInput: BasicFilterInput): void {

    this._filterService.basicFilter(searchInput).subscribe(data => {
      this.searchResult = data;
      this.isFilterPageReady = true;
      this.stepper.next();
    });
  }

  private factorDeatailChangeHandle(searchInput: BasicFilterInput) {
    this.factorDeatailSearchInput = searchInput;
    this.isFilterPageReady = false;
  }

  private triggerBackToFilterInput(): void {
    this.stepper.previous();
    this.isFilterPageReady = false;
  }

  private buildFactorsFb(): FormGroup {
    const temp = {
      // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
      // so based on this to know that whether form is valid or not
      isValid: new FormControl(false, Validators.requiredTrue)
    };

    this.factorsData.forEach(factor => {
      temp[factor.code] = this.createFormbuilderForDataItems(factor);
    });


    return this._formBuilder.group(temp);
  }

  private createFormbuilderForDataItems(factor: Factor): FormGroup {
    const formGroupDataItem = {};

    factor.dataItems.forEach(dataItem => {
      formGroupDataItem[dataItem.code] = new FormControl({
        value: dataItem.isSelected,
        disabled: false
      });
    });

    return this._formBuilder.group(formGroupDataItem);
  }

  private stepperSelectChange(event: StepperSelectionEvent) {
    if(event.selectedIndex === 2) {
      this._filterService.basicFilter(this.factorDeatailSearchInput).subscribe(data => {
        this.searchResult = data;
        this.isFilterPageReady = true;
      });
    }
  }
}

