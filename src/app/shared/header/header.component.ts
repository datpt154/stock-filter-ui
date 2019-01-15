import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs/operators';
import { FilterService } from '../../services/business.service/filter.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/reducers';
import { User } from '../../interface/user';
import { AuthService } from 'angular4-social-login';
import { AuthenticationService } from '../../services/business.service/authenticationService.service';

const NUMBER_SHOW_FILTER_RESULT = 10;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileScreen = false;
  selectedCompanyModel: string;
  logginUser$ = this.store.select(store => store.logginUser);

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.isMobileScreen = event.target.innerWidth < 992 ? 'dropdown' : '';
    // Set type for nav bar mobile -> click to expanse, bigger -> hover to expanse
    const newScreenIsMobile = event.target.innerWidth < 992;
    if (newScreenIsMobile !== this.isMobileScreen) {
      this.isMobileScreen = newScreenIsMobile;
      if (!this.isMobileScreen) {
        const showNav = this.ref.nativeElement.querySelector(
          '.nav-item.dropdown.show'
        );
        if (showNav) {
          showNav.classList.remove('show');
          showNav.querySelector('.dropdown-menu.show').classList.remove('show');
        }
      }
    }
  }

  constructor(
    private _filterService: FilterService,
    private router: Router,
    private ref: ElementRef,
    private store: Store<AppState>,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    // todo [datphan] for testing
    this.logginUser$.subscribe(data => {
      console.log(data);
    });
  }

  private filter(searchPattern: string): Observable<string[]> {
    if (_.isNil(searchPattern) || _.isEmpty(searchPattern)) {
      return of([]);
    }

    return this._filterService.searchCompany(searchPattern).pipe(
      map(data => {
        const result = data.map(company =>
          [company.code.toUpperCase(), company.name].join(' - ')
        );
        if (result.length > NUMBER_SHOW_FILTER_RESULT) {
          return result.slice(0, NUMBER_SHOW_FILTER_RESULT);
        } else {
          return result;
        }
      })
    );
  }

  selectACompany(event: any) {
    event.preventDefault();
    const companyCode = event.item.split('-')[0];
    this.selectedCompanyModel = '';
    this.router.navigate(['/stock-detail'], {
      queryParams: { companyCode: companyCode }
    });
  }

  logout() {
    // todo [datphan] do we need to call social logout or not? or just only call system logout?
    this.authService.signOut();
  }

  searchCompany = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '');
      })
    )
}
