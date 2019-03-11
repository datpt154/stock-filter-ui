import { Component, OnInit } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';
import { HelperService } from '../../../services/business.service/helper.service';

@Component({
  selector: 'app-swing-trade',
  templateUrl: './chart-pattern.component.html',
  styleUrls: ['./chart-pattern.component.css']
})
export class ChartPatternComponent implements OnInit {
  data: PTKTDto;

  constructor(private filter: FilterService, private helper: HelperService) {}

  ngOnInit() {
    this.filter.getScreenTrendTrader().subscribe(data => {
      this.data = data;
    });
  }
}
