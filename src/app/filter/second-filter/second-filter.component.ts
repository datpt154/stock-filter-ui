import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Factor } from '../../interface/factor';
import { CommonConstants } from '../../constants/common-const';
import { DataItem } from '../../interface/data-item';
import { FilterService } from '../../services/business.service/filter.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';

@Component({
  selector: 'app-second-filter',
  templateUrl: './second-filter.component.html',
  styleUrls: ['./second-filter.component.scss']
})
export class SecondFilterComponent implements OnInit {
  private factorsData: Factor[] = CommonConstants.factors;

  private factorsFormGroup: FormGroup;
  // private preFilterFormGroup: FormGroup;
  private selectedDataItems: DataItem[];
  private isFilterPageReady = false;
  private searchResult: BasicFilterDTO[] = [];

  @ViewChild('stepper') stepper;

  constructor(private _formBuilder: FormBuilder, private _filterService: FilterService) { }

  ngOnInit() {
    this.factorsFormGroup = this.buildFactorsFb();
  }

  private nextToFactorsDetail(selectedDataItemCodes: string[]): void {
    this.selectedDataItems = [];
    this.factorsData.forEach(factor => {
      const temp = factor.dataItems.filter(dataItem => selectedDataItemCodes.includes(dataItem.code))
      if (temp && temp.length) {
        this.selectedDataItems = this.selectedDataItems.concat(temp);
      }
    });

    this.stepper.next();
  }

  private nextToFilterResult(searchInput: ComparedFilterInput): void {

    this._filterService.compareFiltered(searchInput).subscribe(data => {
      this.searchResult = data;
      this.isFilterPageReady = true;
      this.stepper.next();
    });
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

