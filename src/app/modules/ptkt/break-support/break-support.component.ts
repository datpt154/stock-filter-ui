import {Component, OnInit} from '@angular/core';
import {PTKTDto} from '../../../interface/ptkt-dto';
import {FilterService} from '../../../services/business.service/filter.service';
import {HelperService} from '../../../services/business.service/helper.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {finalize} from 'rxjs/operators';
import * as _ from 'lodash';
import {CommonConstants} from '../../../constants/common-const';

@Component({
  selector: 'app-break-support',
  templateUrl: './break-support.component.html',
  styleUrls: ['./break-support.component.css']
})
export class BreakSupportComponent implements OnInit {
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
      .getScreenBreakSupport()
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
