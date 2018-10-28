import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public paginationData: number[];
  constructor() { }
  @Input() currentPage: number;
  @Input() totalPage: number;
  @Input() numOfPageVisible = 10;
  @Output() pageChange: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.paginationData = (new Array(this.totalPage)).fill(0).map((item, index) => index + 1);
  }

  handlePageChange(pageNumber: number) {
    if (this.currentPage !== pageNumber) {
      this.currentPage = pageNumber;
      this.pageChange.emit(pageNumber);
    }
  }

}
