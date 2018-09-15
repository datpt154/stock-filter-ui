import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { FilterService } from '../../services/business.service/filter.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCompnayModel: string;

  constructor(
    private _filterService: FilterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private filter(searchPattern: string): Observable<string[]> {
    if (_.isNil(searchPattern) || _.isEmpty(searchPattern)) {
      return of([]);
    }

    return this._filterService.searchCompany(searchPattern).pipe(
      map(data => {
        return data.map(company => [company.code.toUpperCase(), company.name].join(' - '));
      })
    );
  }
  
  selectACompany(model: any) {
    const companyCode = model.item.split('-')[0];
    this.router.navigate(['/sharePrices'], {queryParams: { companyCode: companyCode }});
  }

  searchCompany = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )

}
