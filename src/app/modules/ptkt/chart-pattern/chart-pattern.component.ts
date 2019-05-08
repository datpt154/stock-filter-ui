import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {finalize} from 'rxjs/operators';
import {CommonConstants} from '../../../constants/common-const';
import {PTKTDto} from '../../../interface/ptkt-dto';
import {FilterService} from '../../../services/business.service/filter.service';
import {HelperService} from '../../../services/business.service/helper.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-swing-trade',
  templateUrl: './chart-pattern.component.html',
  styleUrls: ['./chart-pattern.component.css']
})
export class ChartPatternComponent implements OnInit {
  data: PTKTDto;
  imageURL = '';
  isLoading = true;
  // this is dump array, to be used in data is limited, so we can render 10 rows, included real data on UI
  dumpArray = [];

  constructor(
    private filter: FilterService,
    private router: Router,
    private helper: HelperService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;

    this.filter
      .getScreenTrendTrader()
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

}
