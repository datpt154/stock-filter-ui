import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Factor } from '../../interface/factor';
import { CommonConstants } from '../../constants/common-const';
import { DataItem } from '../../interface/data-item';
import { FilterService } from '../../services/business.service/filter.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { ComparedFilterInput } from '../../interface/api-input';
import * as _ from 'lodash';
import { StockFilter } from '../../models/filter';
@Component({
  selector: 'app-second-filter',
  templateUrl: './second-filter.component.html',
  styleUrls: ['./second-filter.component.scss']
})
export class SecondFilterComponent extends StockFilter implements OnInit {
  protected factorsData: Factor[] = _.cloneDeep(CommonConstants.factors);

  private factorsFormGroup: FormGroup;
  protected isFilterPageReady = false;
  protected searchResult: BasicFilterDTO[] = [];

  @ViewChild('stepper') stepper;

  constructor(
    protected _formBuilder: FormBuilder, 
    protected _filterService: FilterService
  ) {
    super(_formBuilder, _filterService);
   }

  ngOnInit() {
    this.factorsFormGroup = this.buildFactorsFb();
  }

  protected getFilterResult(searchInput) {
    return this._filterService.compareFiltered(searchInput);
  }
}

