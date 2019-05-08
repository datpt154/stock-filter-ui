import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../../services/business.service/filter.service';
import {FisherDto} from '../../../interface/screen-dto';
import {finalize} from 'rxjs/operators';
import * as _ from 'lodash';
import {CommonConstants} from '../../../constants/common-const';

@Component({
  selector: 'app-fisher',
  templateUrl: './fisher.component.html',
  styleUrls: ['./fisher.component.css']
})
export class FisherComponent implements OnInit {
  data: FisherDto;
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
      .getScrenPhilipFisherGrowth()
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
