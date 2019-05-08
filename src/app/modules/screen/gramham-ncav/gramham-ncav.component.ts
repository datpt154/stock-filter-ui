import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { GramhamNCavDto } from '../../../interface/screen-dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/reducers';
import { Router, NavigationEnd } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { CommonConstants } from '../../../constants/common-const';
import * as _ from 'lodash';

@Component({
  selector: 'app-gramham-ncav',
  templateUrl: './gramham-ncav.component.html',
  styleUrls: ['./gramham-ncav.component.css']
})
export class GramhamNcavComponent implements OnInit {
  data: GramhamNCavDto;
  isLoading = true;
  // this is dump array, to be used in data is limited, so we can render 10 rows, included real data on UI
  dumpArray = [];

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;

    this.filter
      .getScrenNCAV()
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

}
