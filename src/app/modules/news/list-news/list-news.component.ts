import { OnInit, Component } from '@angular/core';
import * as _ from 'lodash';
import { NewsService } from 'src/app/services/business.service/news.service';
import { NewsListItem, FilterNewsDTO } from 'src/app/models/news';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})

export class ListNewsComponent implements OnInit {
  listNewData: NewsListItem[] = [];
  totalRows = 0;


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
    });
  }

}
