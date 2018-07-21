import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Factor } from '../../interface/factor';
import { min } from 'rxjs/operators';
import { CommonConstants } from '../../constants/common-const';
import { DataItem } from '../../interface/data-item';
import { PreFilter } from '../../interface/pre-filter';
import { FilterService } from '../../services/business.service/filter.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput } from '../../interface/api-input';

@Component({
  selector: 'app-financial-filter',
  templateUrl: './financial-filter.component.html',
  styleUrls: ['./financial-filter.component.scss']
})
export class FinancialFilterComponent implements OnInit {
  private factorsData: Factor[] = CommonConstants.factors;
  private preFilterData: PreFilter = CommonConstants.preFilter;

  private factorsFormGroup: FormGroup;
  private preFilterFormGroup: FormGroup;
  private selectedDataItems: DataItem[];
  private isFilterPageReady = false;
  private searchResult: BasicFilterDTO[] = [];
  private searchInput: BasicFilterInput = {
    time: '',
    stockExchanges: [],
    searchDataitems: []
  };

  @ViewChild('stepper') stepper;

  constructor(private _formBuilder: FormBuilder, private _filterService: FilterService) { }

  ngOnInit() {
    this.preFilterFormGroup = this.buildPreFilterFb();
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

  private nextToFilterResult(selectedDataItems): void {
    this.searchInput.searchDataitems = selectedDataItems;

    this._filterService.basicFilter(this.searchInput).subscribe(data => {
      this.searchResult = data;
      this.isFilterPageReady = true;
      this.stepper.next();      
    });
  }

  private triggerBackToFilterInput(): void {
    this.stepper.previous();
    this.isFilterPageReady = false;
  }

  private buildPreFilterFb(): FormGroup {
    // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
    // to verify that the checkbox must be selected at least one
    const temp = {
      isValid: new FormControl(false, Validators.requiredTrue),
      timeFilter: new FormControl('', Validators.required),
      stockExchange: this.createFbForStockExchange(this.preFilterData.stockExchanges)
    };

    return this._formBuilder.group(temp);
  }

  private createFbForStockExchange(stockExchanges: any): FormGroup {
    let fgStockExchange = {};

    stockExchanges.forEach(item => {
      fgStockExchange[item.code] = new FormControl(false);
    });

    return this._formBuilder.group(fgStockExchange);
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

  private nextToFactorsStep(output: BasicFilterInput): void {
    this.searchInput.time = output.time;
    this.searchInput.stockExchanges = output.stockExchanges;
    
    this.stepper.next();
  }

  private backToPreFilter(): void {
    this.stepper.previous();
  }
}

