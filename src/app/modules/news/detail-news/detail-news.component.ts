import { OnInit, Component } from '@angular/core';
import { NewsListItem } from 'src/app/models/news';
import { NewsService } from 'src/app/services/business.service/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/business.service/helper.service';
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
    private activeRoute: ActivatedRoute,
    private router: Router,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.activeRoute.params.pipe(
      flatMap(params => {
        return this.newsService.getNewsDetail(params.id);
      })
    ).subscribe(result => {
      this.newsData = result;
    })
  }

  redirectToEdit() {
    this.router.navigate(['/news/editNews/' + this.newsData.id])
  }

  deleteNews() {
    this.helperService.openModal('Xác nhận', 'Bạn muốn xóa tin này?').pipe(
      flatMap(confirm => {
        return this.newsService.deleteNews(this.newsData.id);
      })
    ).subscribe(result => {
      this.router.navigate(['news/listNews']);
    });
  }

}
