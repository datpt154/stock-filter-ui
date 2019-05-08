import { Component, OnInit, OnDestroy } from '@angular/core';
import { DBTTMDto } from '../../../interface/screen-dto';
import { FilterService } from '../../../services/business.service/filter.service';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/reducers';
import { finalize } from 'rxjs/operators';
import { CommonConstants } from '../../../constants/common-const';
import * as _ from 'lodash';

@Component({
  selector: 'app-growth-forecast',
  templateUrl: './growth-forecast.component.html',
  styleUrls: ['./growth-forecast.component.css']
})
export class GrowthForecastComponent implements OnInit {
  data: DBTTMDto;
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
      .getscreenDBTTM()
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
