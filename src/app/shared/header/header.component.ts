import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
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
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.isMobileScreen = event.target.innerWidth < 992 ? 'dropdown' : '';
    const newScreenIsMobile = event.target.innerWidth < 992;
    if (newScreenIsMobile !== this.isMobileScreen) {
      this.isMobileScreen = newScreenIsMobile;
      if (!this.isMobileScreen) {
        const showNav = this.ref.nativeElement.querySelector(".nav-item.dropdown.show");
        if (showNav) {
          showNav.classList.remove('show');
          showNav.querySelector('.dropdown-menu.show').classList.remove('show')
        }
      }
    }
  }
  isMobileScreen: boolean = false;
  selectedCompnayModel: string;
  constructor(
    private _filterService: FilterService,
    private router: Router,
    private ref: ElementRef
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
    this.router.navigate(['/stock-detail'], {queryParams: { companyCode: companyCode }});
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
