import { Component, Input, OnInit } from '@angular/core';
import { QuickGeneraalTableHeader } from '../../../interface/quick-generaal-table-header';

@Component({
  selector: 'app-quick-general-table',
  templateUrl: './quick-general-table.component.html',
  styleUrls: ['./quick-general-table.component.css']
})
export class QuickGeneralTableComponent implements OnInit {

  @Input() tableHeader: QuickGeneraalTableHeader;
  @Input() tableData: any;

  constructor() { }

  ngOnInit() {
    
  }

}
