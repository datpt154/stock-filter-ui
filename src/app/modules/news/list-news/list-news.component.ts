import { OnInit, Component } from '@angular/core';
import * as _ from 'lodash';
import { NewsService } from 'src/app/services/business.service/news.service';
import { NewsListItem } from 'src/app/models/news';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})

export class ListNewsComponent implements OnInit {
  public listNewData: NewsListItem[] = [];
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.getNewsList().subscribe(result => {
      this.listNewData = result;
    });
  }

}
