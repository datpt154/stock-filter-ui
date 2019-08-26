import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Title } from '@angular/platform-browser';
import * as _ from 'lodash';
import { FilterConstant } from '../../../constants/filter-constant';
import { BasicFilterDTO } from '../../../interface/basic-filter-dto';
import { Factor } from '../../../interface/factor';
import { StockFilter } from '../../../models/filter';
import { FilterService } from '../../../services/business.service/filter.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

const HIDDEN_FIELDS_BY_DEFAULT = [
  {
    code: 'FINANCE',
    dataItem: 'GROSS_PROFIT'
  },
  {
    code: 'FINANCE',
    dataItem: 'SHARE_S_OUSTANDING'
  }
];
@Component({
  selector: 'app-first-filter',
  templateUrl: './first-filter.component.html',
  styleUrls: ['./first-filter.component.scss']
})
export class FirstFilterComponent extends StockFilter implements OnInit, OnDestroy {
  protected factorsData: Factor[] = _.cloneDeep(FilterConstant.factors);

  private factorsFormGroup: FormGroup;
  protected isFilterPageReady = false;
  protected searchResult: BasicFilterDTO[] = [];

  @ViewChild('stepper') stepper: MatStepper;

  countries: any[] = FilterConstant.factors_;

  ptcbForm: FormGroup;
  private ngUnsubscribe: Subject<any> = new Subject();
  selectedTotal = 0;
  rowsTottal = [];

  constructor(
    protected _formBuilder: FormBuilder,
    protected _filterService: FilterService,
    private titleService: Title
  ) {
    super(_formBuilder, _filterService);
  }

  ngOnInit() {
    this.titleService.setTitle('LỌC CỔ PHIẾU DỰA TRÊN CÁC CHỈ SỐ CƠ BẢN');
    this.factorsFormGroup = this.buildFactorsFb();
    this.setDefault();

    const temp = {};
    this.countries.forEach(factor => {
      temp[factor.code] = [factor.ranges[0]];
    });

    this.ptcbForm = this._formBuilder.group(temp);

    this.ptcbForm.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        let count = 0;
        this.countries.forEach(factor => {
          const valueOfSelection = this.ptcbForm.get(factor.code).value;
          if (valueOfSelection !== 'any') {
            count = count + 1;
            factor.isSelected = true;
          }
        });

        this.selectedTotal = count;
      });

     const rows = Math.round(this.countries.length / 5);
     this.rowsTottal = _.range(rows);
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

  protected getFilterResult(searchInput) {
    return this._filterService.basicFilter(searchInput);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
