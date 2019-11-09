import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import * as _ from 'lodash';
import {FilterConstant} from '../../../constants/filter-constant';
import {FactorNew} from '../../../interface/factor';
import {FilterService} from '../../../services/business.service/filter.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {DataType, SortType} from '../../../interface/filter-table-dto';

@Component({
  selector: 'app-first-filter',
  templateUrl: './first-filter.component.html',
  styleUrls: ['./first-filter.component.scss']
})
export class FirstFilterComponent implements OnInit, OnDestroy {
  protected isFilterPageReady = false;
  private ngUnsubscribe: Subject<any> = new Subject();

  factors_ptcb: FactorNew[] = FilterConstant.factors_ptcb;
  factors_ptkt: FactorNew[] = FilterConstant.factors_ptkt;
  ptcbForm: FormGroup;
  ptktForm: FormGroup;
  selectedPTCBTotal = 0;
  selectedPTKTTotal = 0;
  ptcbRowsTotal = [];
  ptktRowsTotal = [];
  initialPTCBForm = {};
  initialPKTForm = {};
  searchDataptcbs: any[];
  searchDataPtkts: any[];

  isShowedResult = false;
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  searchedCompanies: any[] = [];
  tableHeader = FilterConstant.TABLE_DEFAULT_COLUMN;

  quaterYear = ['Quý', 'Năm'];
  quaterYearControl = new FormControl(this.quaterYear[0]);
  hoseExchange = new FormControl(true);
  hnxExchange = new FormControl(true);
  upcomExchange = new FormControl(true);

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

  get companies(): any[] {
    return this.searchedCompanies.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  private initializePTCBForm(): void {
    this.factors_ptcb.forEach(factor => {
      this.initialPTCBForm[factor.code] = [factor.ranges[0].value];
    });
    this.ptcbForm = this._formBuilder.group(this.initialPTCBForm);

    this.ptcbForm.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        let count = 0;
        this.factors_ptcb.forEach(factor => {
          const valueOfSelection = this.ptcbForm.get(factor.code).value;
          if (valueOfSelection === '') {
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
      this.initialPKTForm[factor.code] = [factor.ranges[0].value];
    });
    this.ptktForm = this._formBuilder.group(this.initialPKTForm);

    this.ptktForm.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        let count = 0;
        this.factors_ptkt.forEach(factor => {
          const valueOfSelection = this.ptktForm.get(factor.code).value;
          if (valueOfSelection === '') {
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
    this.isShowedResult = false;
  }

  search(): void {
    this._filterService.basicFilter(this.getSearchParams()).subscribe(data => {
      this.collectionSize = data.length;

      const dynamicHeader = this.getDynamicHeader();
      this.tableHeader = [...FilterConstant.TABLE_DEFAULT_COLUMN, ...dynamicHeader];
      this.searchedCompanies = data.map((company, i) => ({id: i + 1, ...company}));
      this.isShowedResult = true;
    });
  }

  private getDynamicHeader(): any[] {
    const dynamicHeaders = [];

    this.searchDataptcbs.forEach(item => {
      dynamicHeaders.push(
        {
          title: item.title,
          code: item.code,
          sortType: SortType.DEFAULT,
          showChart: true,
          dataType: DataType.Number
        }
      );
    });

    this.searchDataPtkts.forEach(item => {
      dynamicHeaders.push(
        {
          title: item.title,
          code: item.code,
          sortType: SortType.DEFAULT,
          showChart: true,
          dataType: DataType.Number
        }
      );
    });

    return dynamicHeaders;
  }

  private getSearchParams(): any {
    this.getSearchPtcbs();
    this.getSearchPtkts();

    return {
      time: this.quaterYearControl.value,
      stockExchanges: this.getStockeExchanges(),
      searchDataitems: this.searchDataptcbs,
      searchDataPtkt: this.searchDataPtkts
    };
  }

  private getSearchPtkts(): void {
    this.searchDataPtkts = [];
    this.factors_ptkt.forEach(factor => {
      const valueOfSelection = this.ptktForm.get(factor.code).value;
      if (valueOfSelection !== '') {
        this.searchDataPtkts.push({
          title: factor.title,
          code: factor.code,
          compareValues: valueOfSelection
        });
      }
    });
  }

  private getSearchPtcbs(): void {
    this.searchDataptcbs = [];
    this.factors_ptcb.forEach(factor => {
      const valueOfSelection = this.ptcbForm.get(factor.code).value;
      if (valueOfSelection !== '') {
        this.searchDataptcbs.push({
          title: factor.title,
          code: factor.code,
          compareValues: valueOfSelection
        });
      }
    });
  }

  private getStockeExchanges(): string[] {
    const result = [];

    if (this.hoseExchange.value) {
      result.push('HOSE');
    }
    if (this.hnxExchange.value) {
      result.push('HNX');
    }
    if (this.upcomExchange.value) {
      result.push('UPCOM');
    }

    return result;
  }

  get isDisableSearchButton(): boolean {
    return (this.selectedPTCBTotal + this.selectedPTKTTotal === 0)
        && (this.upcomExchange.value || this.hnxExchange.value || this.hoseExchange.value);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
