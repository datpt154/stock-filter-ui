import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Factor } from '../../interface/factor';
import { CommonConstants } from '../../constants/common-const';
import { DataItem } from '../../interface/data-item';
import { FilterService } from '../../services/business.service/filter.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput } from '../../interface/api-input';
import * as _ from 'lodash';

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

  private hiddenFieldsByDefault = [{
    code: "FINANCE",
    dataItem: "GROSS_PROFIT"
  }, {
    code: "FINANCE",
    dataItem: "SHARE_S_OUSTANDING"
  }];

  // @ViewChild('stepper') stepper;

  @ViewChild('tabSet') tabSet: any;

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
    this.selectedDataItems = [];
    this.factorsData.forEach(factor => {
      const temp = factor.dataItems.filter(dataItem => selectedDataItemCodes.includes(dataItem.code))
      if (temp && temp.length) {
        this.selectedDataItems = this.selectedDataItems.concat(temp);
      }
    });

    // this.stepper.next();
    this.tabSet.select('tab2');
  }

  backToFactorsSelection(): void {
    this.tabSet.select('tab1');
  }

  private nextToFilterResult(searchInput: BasicFilterInput): void {

    this._filterService.basicFilter(searchInput).subscribe(data => {
      this.searchResult = data;
      this.isFilterPageReady = true;
      // this.stepper.next();
      this.tabSet.select('tab3');
    });
  }

  private triggerBackToFilterInput(): void {
    this.tabSet.select('tab2');
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

