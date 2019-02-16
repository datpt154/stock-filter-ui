import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { FilterConstant } from '../../constants/filter-constant';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { Factor } from '../../interface/factor';
import { StockFilter } from '../../models/filter';
import { FilterService } from '../../services/business.service/filter.service';
@Component({
  selector: 'app-second-filter',
  templateUrl: './second-filter.component.html',
  styleUrls: ['./second-filter.component.scss']
})
export class SecondFilterComponent extends StockFilter implements OnInit {
  protected factorsData: Factor[] = _.cloneDeep(FilterConstant.factors);

  private factorsFormGroup: FormGroup;
  protected isFilterPageReady = false;
  protected searchResult: BasicFilterDTO[] = [];

  @ViewChild('stepper') stepper;

  constructor(protected _formBuilder: FormBuilder, protected _filterService: FilterService) {
    super(_formBuilder, _filterService);
  }

  ngOnInit() {
    this.factorsFormGroup = this.buildFactorsFb();
  }

  protected getFilterResult(searchInput) {
    return this._filterService.compareFiltered(searchInput);
  }
}
