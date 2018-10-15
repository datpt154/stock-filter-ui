import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterService } from '../../services/business.service/filter.service';
import { HelperService } from '../../services/business.service/helper.service';

@Component({
  selector: 'app-report-finance',
  templateUrl: './report-finance.component.html',
  styleUrls: ['./report-finance.component.css']
})
export class ReportFinanceComponent implements OnChanges {
  @Input() companyCode: string;
  @Input() selectedFilterTimeCode: string;

  reportFinanceData: any;
  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartLabels: string[];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [
    { data: [], label: '' }
  ];

  constructor(
    private _filterService: FilterService,
    private helperService: HelperService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedFilterTimeCode) {
      this._filterService.getDetailStockMore(this.companyCode, this.selectedFilterTimeCode)
        .subscribe(data => {
          this.reportFinanceData = data;
          this.barChartLabels = this.reportFinanceData.headers.slice(1);
        });
    }
  }

  showColumnCharts(popover, data: any) {
    if (!popover.isOpen()) {
      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data.slice(2);
      clone[0].label = data[0];
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
