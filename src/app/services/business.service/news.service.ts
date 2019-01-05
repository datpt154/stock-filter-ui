import { Injectable } from '@angular/core';
import { ApiService } from '../api.service/api.service';
import { Observable } from 'rxjs';
import { NewsListItem, EditNewsItem, NewsCategory, FilterNewsDTO } from 'src/app/models/news';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor (
    private apiService: ApiService
  ) { }

  public getNewsList(listInput: FilterNewsDTO): Observable<any> {
    return this.apiService.postToAPI('api/listnews', listInput);
    // .pipe(
    //   map((result: NewsListItem[]) => {
    //     return _.map(result, item => {
    //       item.createdTime = _.isEmpty(item.createdTime) ? '' : moment(item.createdTime).format('DD/MM/YYYY HH:mm');
    //       return item;
    //     });
    //   })
    // );
  }

  public getNewsDetail(id: number): Observable<EditNewsItem> {
    return this.apiService.getFromAPI('api/news/' + id);
  }

  public saveNews(data: EditNewsItem) {
    return this.apiService.postToAPI('api/news', data);
  }

  public updateNews(data: EditNewsItem) {
    return this.apiService.postToAPI('api/news', data);
  }

  public deleteNews(id: number) {
    return this.apiService.deleteToAPI('api/news/' + id);
  }

  public getListFilterForCreateNew(): Observable<NewsCategory[]> {
    return this.apiService.getFromAPI('api/newscategory');
  }

}
