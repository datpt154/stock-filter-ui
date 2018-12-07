import { OnInit, Component } from '@angular/core';
import { NewsListItem } from 'src/app/models/news';
import { NewsService } from 'src/app/services/business.service/news.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
// import * as _ from 'lodash';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})

export class DetailNewsComponent implements OnInit {
  public newsData: NewsListItem;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      flatMap(params => {
        return this.newsService.getNewsDetail(params.id);
      })
    ).subscribe(result => {
      this.newsData = result;
    })
  }

}
