import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterService } from '../../services/business.service/filter.service';

@Component({
  selector: 'app-report-finance',
  templateUrl: './report-finance.component.html',
  styleUrls: ['./report-finance.component.css']
})
export class ReportFinanceComponent implements OnChanges {
  @Input() companyCode: string;
  @Input() selectedFilterTimeCode: string;

  private reportFinanceData: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [
    { data: [], label: '' }
  ];

  constructor(
    private _filterService: FilterService
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
      let clone = JSON.parse(JSON.stringify(this.barChartData));
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

}
