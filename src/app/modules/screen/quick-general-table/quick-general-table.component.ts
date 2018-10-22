import { Component, Input, OnInit } from '@angular/core';
import { IQuickGeneralTableHeader, IQuickGeneralTableData } from '../../../interface/quick-general-table-dto';

@Component({
  selector: 'app-quick-general-table',
  templateUrl: './quick-general-table.component.html',
  styleUrls: ['./quick-general-table.component.css']
})
export class QuickGeneralTableComponent implements OnInit {

  @Input() tableHeader: IQuickGeneralTableHeader;
  @Input() tableData: IQuickGeneralTableData;

  constructor() { }

  ngOnInit() {
  }

}
