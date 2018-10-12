import { Factor } from '../interface/factor';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { BasicFilterInput } from '../interface/api-input';
import { FilterService } from '../services/business.service/filter.service';
import { BasicFilterDTO } from '../interface/basic-filter-dto';
import { CommonConstants } from '../constants/common-const';
import { ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { DataItem } from '../interface/data-item';

export abstract class StockFilter {
  @ViewChild('stepper') stepper: MatStepper;

  private factorDeatailSearchInput: BasicFilterInput;
  private selectedDataItems: DataItem[];
  protected searchResult: BasicFilterDTO[] = [];
  protected factorsData: Factor[] = CommonConstants.factors;
  protected isFilterPageReady = false;

  constructor(
    protected _formBuilder: FormBuilder,
    protected _filterService: FilterService
  ) {
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
      const temp = factor.dataItems.filter(dataItem => selectedDataItemCodes.includes(dataItem.code));
      if (temp && temp.length) {
        selectedDataItems = selectedDataItems.concat(temp);
      }
    });
    return selectedDataItems;
  }

  private factorDeatailChangeHandle(searchInput: BasicFilterInput) {
    this.factorDeatailSearchInput = searchInput;
    this.isFilterPageReady = false;
  }

  protected buildFactorsFb(): FormGroup {
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

  private nextToFilterResult(searchInput: BasicFilterInput): void {
    this.getFilterResult(searchInput).subscribe(data => {
      this.searchResult = data;
      this.isFilterPageReady = true;
      this.stepper.next();
    });
  }


  private stepperSelectChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 2) {
      this.getFilterResult(this.factorDeatailSearchInput).subscribe(data => {
        this.searchResult = data;
        this.isFilterPageReady = true;
      });
    }
  }

  protected getFilterResult(searchInput) {
    return this._filterService.basicFilter(searchInput);
  }

  private triggerBackToFilterInput(): void {
    this.stepper.previous();
    this.isFilterPageReady = false;
  }
}
