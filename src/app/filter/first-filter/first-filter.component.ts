import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { CommonConstants } from '../../constants/common-const';
import { BasicFilterInput } from '../../interface/api-input';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { Factor } from '../../interface/factor';
import { FilterService } from '../../services/business.service/filter.service';
import { MatStepper } from '@angular/material/stepper';
import { StockFilter } from '../../models/filter';

const HIDDEN_FIELDS_BY_DEFAULT = [{
  code: 'FINANCE',
  dataItem: 'GROSS_PROFIT'
}, {
  code: 'FINANCE',
  dataItem: 'SHARE_S_OUSTANDING'
}];
@Component({
  selector: 'app-first-filter',
  templateUrl: './first-filter.component.html',
  styleUrls: ['./first-filter.component.scss']
})
export class FirstFilterComponent extends StockFilter implements OnInit {
  protected factorsData: Factor[] = _.cloneDeep(CommonConstants.factors);

  private factorsFormGroup: FormGroup;
  protected isFilterPageReady = false;
  protected searchResult: BasicFilterDTO[] = [];


  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    protected _formBuilder: FormBuilder,
    protected _filterService: FilterService
  ) {
    super(_formBuilder, _filterService);
  }

  ngOnInit() {
    this.factorsFormGroup = this.buildFactorsFb();
    this.setDefault();
  }

  private setDefault(): void {
    HIDDEN_FIELDS_BY_DEFAULT.forEach(hiddenField => {
      const factor = this.factorsData.find(fd => fd.code === hiddenField.code);
      if (!_.isNil(factor)) {
        const hiddenDataItem = factor.dataItems.find(dataItem => dataItem.code === hiddenField.dataItem);
        if (!_.isNil(hiddenDataItem)) {
          hiddenDataItem.isShow = false;
        }
      }
    });
  }

  private nextToFilterResult(searchInput: BasicFilterInput): void {
    this._filterService.basicFilter(searchInput).subscribe(data => {
      this.searchResult = data;
      this.isFilterPageReady = true;
      this.stepper.next();
    });
  }

}

