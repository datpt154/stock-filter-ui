import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterService } from '../../services/business.service/filter.service';
import { HelperService } from '../../services/business.service/helper.service';

@Component({
  selector: 'app-report-ratio',
  templateUrl: './report-ratio.component.html',
  styleUrls: ['./report-ratio.component.css']
})
export class ReportRatioComponent implements OnChanges {

  @Input() companyCode: string;
  @Input() selectedFilterTimeCode: string;

  reportFinanceRatioData: any;
  reportFinanceData: any;
  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartLabels: string[];
  barChartType = 'bar';
  barChartData: any[] = [
    { data: [], label: '' }
  ];

  constructor(
    private _filterService: FilterService,
    private helperService: HelperService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedFilterTimeCode) {
      this._filterService.getDetailStockFinanceRatio(this.companyCode, this.selectedFilterTimeCode)
        .subscribe(data => {
          this.reportFinanceRatioData = data;
          this.barChartLabels = this.reportFinanceRatioData.headers.slice(2);
        });
    }
  }

  showColumnCharts(popover, data: any) {
    if (!popover.isOpen()) {
      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data.slice(3);
      this.barChartData = clone;

      popover.open();
    }
  }


  closeColumnCharts(popover): void {
    if (popover.isOpen()) {
      popover.close();
    }
  }

  alignTable(item): string {
    return this.helperService.alignTable(item);
  }

}
