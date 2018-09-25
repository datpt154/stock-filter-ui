import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.css']
})
export class ReportOverviewComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  showColumnCharts(popover, data: any) {
    // if (!popover.isOpen()) {
    //   let clone = JSON.parse(JSON.stringify(this.barChartData));
    //   clone[0].data = data.slice(2);
    //   clone[0].label = data[0];
    //   this.barChartData = clone;

    //   popover.open();
    // }
  }


  closeColumnCharts(popover): void {
    // if (popover.isOpen()) {
    //   popover.close();
    // }
  }

}
