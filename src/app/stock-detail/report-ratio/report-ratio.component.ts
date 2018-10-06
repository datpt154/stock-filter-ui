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

  private reportFinanceRatioData: any;
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
    private _filterService: FilterService,
    private helperService: HelperService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedFilterTimeCode) {
      this._filterService.getDetailStockFinanceRatio(this.companyCode, this.selectedFilterTimeCode)
        .subscribe(data => {
          this.reportFinanceRatioData = data;
          this.barChartLabels = this.reportFinanceRatioData.headers.slice(1);
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

  alignTable(item): string {
    return this.helperService.alignTable(item);
  }

}
