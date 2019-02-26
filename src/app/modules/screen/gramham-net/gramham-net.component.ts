import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { finalize } from 'rxjs/operators';
import { CommonConstants } from 'src/app/constants/common-const';
import { GramhamNetDto } from '../../../interface/screen-dto';
import { AppState } from '../../../redux/reducers';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-gramham-net',
  templateUrl: './gramham-net.component.html',
  styleUrls: ['./gramham-net.component.scss']
})
export class GramhamNetComponent implements OnInit, OnDestroy {
  isLoading = true;
  data: GramhamNetDto;
  // this is dump array, to be used in data is limited, so we can render 10 rows, included real data on UI
  dumpArray = [];
  navigationSubscription: any;

  constructor(private filter: FilterService, private store: Store<AppState>, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.loadData();
      }
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;

    this.filter
      .getScreenNetNet()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(data => {
        this.data = data;
        if (_.get(data, 'limitData')) {
          this.dumpArray = _.range(data.data.length + 1, CommonConstants.ARRAY_MAX_ROWS_LIMIT_DATA + 1);
        }
      });
  }

  toggleWithGreeting(popover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open();
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
