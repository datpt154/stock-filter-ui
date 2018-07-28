import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { DataItem } from '../../../interface/data-item';
import { Subject, Observable, from, of } from 'rxjs';
import { CommonConstants } from '../../../constants/common-const';
import * as _ from 'lodash';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { startWith, debounceTime, distinctUntilChanged, switchMap, mergeMap } from 'rxjs/operators';
import { FilterService } from '../../../services/business.service/filter.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ComparedFilterInput } from '../../../interface/api-input';

@Component({
  selector: 'second-filter-selection',
  templateUrl: './second-filter-selection.component.html',
  styleUrls: ['./second-filter-selection.component.scss']
})
export class SecondFilterSelectionComponent implements OnInit {
  @Input() selectedDataItems: DataItem[] = [];
  @Output() next: EventEmitter<any> = new EventEmitter();

  private otherFactors = CommonConstants.otherFactors;
  private selectedDataItemAsString: string;
  private selectedCompanies: string[] = [];

  private filtersFormGroup: FormGroup;
  private companySearchControl = new FormControl();
  private filteredCompanies: Observable<any[]>;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private _filterService: FilterService, private _formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedDataItems && changes.selectedDataItems.currentValue) {
      this.selectedDataItemAsString =  "";
      this.selectedCompanies = [];
      this.selectedDataItems.forEach(item => {
        if (_.isEmpty(this.selectedDataItemAsString)) {
          this.selectedDataItemAsString += item.title;
        } else {
          this.selectedDataItemAsString += ", " + item.title;
        }
      })
      
    }
  }

  ngOnInit() {
    this.filtersFormGroup = this.buildFilterFactorsFb();
    this.filteredCompanies = this.companySearchControl.valueChanges
        .pipe(
          debounceTime(200),
          distinctUntilChanged(),
          switchMap(val => {
            return this.filter(val || '')
          })       
        );
  }

  private buildFilterFactorsFb(): FormGroup {
    // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
    // to verify that the checkbox must be selected at least one
    const temp = {
      timeFilter: new FormControl('', Validators.required),
    };

    return this._formBuilder.group(temp);
  }

  filter(searchPattern: string): any {
    if (_.isNil(searchPattern) || _.isEmpty(searchPattern)) {
      return of([]);          
    }

    return this._filterService.searchCompany(searchPattern);
  }

  addCompanyForFilter(selectedItem: MatAutocompleteSelectedEvent) {
    const newCompany = selectedItem.option.value;
    if (_.isEmpty(this.selectedCompanies.filter(item => item === newCompany))) {
      this.selectedCompanies.push(newCompany)
    }

    // clear the autosugesstion
    this.companySearchControl.setValue("");
  }


  removeSelectedCompany(company: string) {
    _.remove(this.selectedCompanies, item => item === company);
  }

  private nextStep(): void {
    if (this.filtersFormGroup.valid) {
      const output: ComparedFilterInput = {
        time: this.filtersFormGroup.get('timeFilter').value,
        stocks: this.selectedCompanies,
        searchDataitems: this.selectedDataItems
      }

      this.next.emit(output);
    }
  }

}
