import {Component, OnInit} from '@angular/core';
import {EditNewsItem} from 'src/app/models/news';
import {NewsService} from 'src/app/services/business.service/news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})

export class DetailNewsComponent implements OnInit {
  public newsData: EditNewsItem;

  constructor(
    private newsService: NewsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.params.pipe(
      flatMap(params => {
        return this.newsService.getNewsDetail(params.id);
      })
    ).subscribe(result => {
      this.newsData = result;
    });
  }

  redirectToEdit() {
    this.router.navigate(['/news/editNews/' + this.newsData.id]);
  }

  deleteNews() {
    // this.helperService.openModal('Xác nhận', 'Bạn muốn xóa tin này?').pipe(
    //   flatMap(confirm => {
    //     return this.newsService.deleteNews(this.newsData.id);
    //   })
    // ).subscribe(result => {
    //   this.router.navigate(['news/listNews']);
    // });
  }

}
