import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { FilterConstant } from '../../../../constants/filter-constant';
import { ComparedFilterInput } from '../../../../interface/api-input';
import { DataItem } from '../../../../interface/data-item';
import { FilterService } from '../../../../services/business.service/filter.service';

const NUMBER_SHOW_FILTER_RESULT = 7;
@Component({
  selector: 'app-second-filter-selection',
  templateUrl: './second-filter-selection.component.html',
  styleUrls: ['./second-filter-selection.component.scss']
})
export class SecondFilterSelectionComponent implements OnInit, OnChanges {
  @Input() selectedDataItems: DataItem[] = [];
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter();

  private otherFactors = FilterConstant.otherFactors;
  private selectedDataItemAsString: string;
  private selectedCompanies: string[] = [];

  private filtersFormGroup: FormGroup;
  private companySearchControl = new FormControl();
  private filteredCompanies: Observable<any[]>;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private _filterService: FilterService, private _formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    // whenever users change the selectedDataItems, we have to reset the current selections
    if (changes.selectedDataItems && changes.selectedDataItems.currentValue) {
      this.selectedDataItemAsString =  '';
      this.selectedDataItems.forEach(item => {
        if (_.isEmpty(this.selectedDataItemAsString)) {
          this.selectedDataItemAsString += item.title;
        } else {
          this.selectedDataItemAsString += ', ' + item.title;
        }
      });
      this.handleValueChange();
    }
  }

  ngOnInit() {
    this.filtersFormGroup = this.buildFilterFactorsFb();
    this.filteredCompanies = this.companySearchControl.valueChanges
        .pipe(
          debounceTime(200),
          distinctUntilChanged(),
          switchMap(val => {
            return this.filter(val || '');
          })
        );

    this.filtersFormGroup.valueChanges.subscribe(value => {
      this.handleValueChange();
    });
  }

  private buildFilterFactorsFb(): FormGroup {
    // because formbuilder is not support for multiple checkbox. SO we add isValid property to this form
    // to verify that the checkbox must be selected at least one
    const temp = {
      isValid: new FormControl(false, Validators.requiredTrue),
      timeFilter: new FormControl('', Validators.required),
    };

    return this._formBuilder.group(temp);
  }

  private filter(searchPattern: string): Observable<any> {
    if (_.isNil(searchPattern) || _.isEmpty(searchPattern)) {
      return of([]);
    }

    return this._filterService.searchCompany(searchPattern).pipe(
      map(items => {
        if (items.length > NUMBER_SHOW_FILTER_RESULT) {
          return items.slice(0, NUMBER_SHOW_FILTER_RESULT);
        } else {
          return items;
        }
      })
    );
  }

  private addCompanyForFilter(selectedItem: MatAutocompleteSelectedEvent): void {
    const newCompany = selectedItem.option.value;
    if (_.isEmpty(this.selectedCompanies.filter(item => item === newCompany))) {
      this.selectedCompanies.push(newCompany);
    }

    // clear the autosugesstion
    this.companySearchControl.setValue('');
    // update the validation of formbuilder
    this.updateValidationForFb();
  }


  private removeSelectedCompany(company: string): void {
    _.remove(this.selectedCompanies, item => item === company);
    // update the validation of formbuilder
    this.updateValidationForFb();
  }

  private updateValidationForFb(): void {
    if (_.isNil(this.selectedCompanies) || _.isEmpty(this.selectedCompanies)) {
      this.filtersFormGroup.get('isValid').setValue(false);
    } else {
      this.filtersFormGroup.get('isValid').setValue(true);
    }
    this.handleValueChange();
  }

  private handleValueChange() {
    if (this.filtersFormGroup && this.filtersFormGroup.valid) {
      const output: ComparedFilterInput = {
        time: this.filtersFormGroup.get('timeFilter').value,
        stocks: this.selectedCompanies,
        searchDataitems: this.selectedDataItems
      };

      this.selectionChanged.emit(output);
    }
  }

  private nextStep(): void {
    if (this.filtersFormGroup.valid) {
      const output: ComparedFilterInput = {
        time: this.filtersFormGroup.get('timeFilter').value,
        stocks: this.selectedCompanies,
        searchDataitems: this.selectedDataItems
      };

      this.next.emit(output);
    }
  }

}
