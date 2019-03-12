import { Component, OnInit, OnDestroy } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../services/business.service/helper.service';
import { Router, NavigationEnd } from '@angular/router';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { CommonConstants } from '../../../constants/common-const';

@Component({
  selector: 'app-break-resistance',
  templateUrl: './break-resistance.component.html',
  styleUrls: ['./break-resistance.component.scss']
})
export class BreakResistanceComponent implements OnInit, OnDestroy {
  data: PTKTDto;
  imageURL = '';
  isLoading = true;
  // this is dump array, to be used in data is limited, so we can render 10 rows, included real data on UI
  dumpArray = [];
  navigationSubscription: any;

  constructor(
    private filter: FilterService,
    private store: Store<AppState>,
    private router: Router,
    private helper: HelperService,
    private modalService: NgbModal
  ) {
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
      .getScreenBreakResistance()
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

  openChart(content, imageURL) {
    this.imageURL = imageURL;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
