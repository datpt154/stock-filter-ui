import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatStepper} from '@angular/material/stepper';
import {Title} from '@angular/platform-browser';
import * as _ from 'lodash';
import {FilterConstant} from '../../../constants/filter-constant';
import {BasicFilterDTO} from '../../../interface/basic-filter-dto';
import {Factor} from '../../../interface/factor';
import {FilterService} from '../../../services/business.service/filter.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-first-filter',
  templateUrl: './first-filter.component.html',
  styleUrls: ['./first-filter.component.scss']
})
export class FirstFilterComponent implements OnInit, OnDestroy {
  protected isFilterPageReady = false;
  protected searchResult: BasicFilterDTO[] = [];
  private ngUnsubscribe: Subject<any> = new Subject();

  factors_ptcb: any[] = FilterConstant.factors_ptcb;
  factors_ptkt: any[] = FilterConstant.factors_ptkt;
  ptcbForm: FormGroup;
  ptktForm: FormGroup;
  selectedPTCBTotal = 0;
  selectedPTKTTotal = 0;
  ptcbRowsTotal = [];
  ptktRowsTotal = [];
  initialPTCBForm = {};
  initialPKTForm = {};

  constructor(
    protected _formBuilder: FormBuilder,
    protected _filterService: FilterService,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('LỌC CỔ PHIẾU DỰA TRÊN CÁC CHỈ SỐ CƠ BẢN');
    this.initializePTCBForm();
    this.initializePTKTForm();
  }

  private initializePTCBForm(): void {
    this.factors_ptcb.forEach(factor => {
      this.initialPTCBForm[factor.code] = [factor.ranges[0]];
    });
    this.ptcbForm = this._formBuilder.group(this.initialPTCBForm);

    this.ptcbForm.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        let count = 0;
        this.factors_ptcb.forEach(factor => {
          const valueOfSelection = this.ptcbForm.get(factor.code).value;
          if (valueOfSelection === 'any') {
            factor.isSelected = false;
          } else {
            count = count + 1;
            factor.isSelected = true;
          }
        });

        this.selectedPTCBTotal = count;
      });

    // count how many rows do we need to show 6 items on a row
    const rows = Math.ceil(this.factors_ptcb.length / 6);
    this.ptcbRowsTotal = _.range(rows);
  }

  private initializePTKTForm(): void {
    this.factors_ptkt.forEach(factor => {
      this.initialPKTForm[factor.code] = [factor.ranges[0]];
    });
    this.ptktForm = this._formBuilder.group(this.initialPKTForm);

    this.ptktForm.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        let count = 0;
        this.factors_ptkt.forEach(factor => {
          const valueOfSelection = this.ptktForm.get(factor.code).value;
          if (valueOfSelection === 'any') {
            factor.isSelected = false;
          } else {
            count = count + 1;
            factor.isSelected = true;
          }
        });

        this.selectedPTKTTotal = count;
      });

    // count how many rows do we need to show 6 items on a row
    const rows = Math.ceil(this.factors_ptkt.length / 6);
    this.ptktRowsTotal = _.range(rows);
  }

  resetFilterInput(): void {
    this.ptcbForm.reset(this.initializePTCBForm());
    this.ptktForm.reset(this.initializePTKTForm());
  }

  protected getFilterResult(searchInput) {
    return this._filterService.basicFilter(searchInput);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
