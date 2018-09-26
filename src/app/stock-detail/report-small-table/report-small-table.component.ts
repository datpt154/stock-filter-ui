import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-small-table',
  templateUrl: './report-small-table.component.html',
  styleUrls: ['./report-small-table.component.css']
})
export class ReportSmallTableComponent implements OnInit {
  @Input() title: string;
  @Input() tableData: any;

  constructor() { }

  ngOnInit() {
  }

}
