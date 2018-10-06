import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HelperService } from '../../services/business.service/helper.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.css']
})
export class ReportOverviewComponent implements OnInit, OnChanges {
  @Input() data: any;

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
    private helperService: HelperService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.barChartLabels = this.data.headers.slice(1);
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
