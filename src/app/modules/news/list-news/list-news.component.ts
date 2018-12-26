import { OnInit, Component } from '@angular/core';
import * as _ from 'lodash';
import { NewsService } from 'src/app/services/business.service/news.service';
import { NewsListItem, FilterNewsDTO } from 'src/app/models/news';
import { Pagination } from '../../../interface/filter-table-dto';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})

export class ListNewsComponent implements OnInit {
  listNewData: NewsListItem[] = [];
  pagination: Pagination = {
    visible: false,
    size: 10,
    total: 0,
    currentPage: 1
  };


  constructor(
    private newsService: NewsService
  ) { }


  ngOnInit() {
    const listInput: FilterNewsDTO = {
      start: 0,
      numRow: 10
    };

    this.newsService.getNewsList(listInput).subscribe(result => {
      this.listNewData = result.listData;
      this.pagination.total = Math.ceil(result.totalRows / this.pagination.size);
      this.pagination.visible = result.totalRows > this.pagination.size ? true : false;
    });
  }

  public goToPage(pageNum: number) {
    if (pageNum <= this.pagination.total && pageNum > 0) {
      this.pagination.currentPage = pageNum;

      const listInput: FilterNewsDTO = {
        start: 10 * (pageNum - 1),
        numRow: 10
      };
      this.newsService.getNewsList(listInput).subscribe(result => {
        this.listNewData = result.listData;
      });
    }
  }

}
