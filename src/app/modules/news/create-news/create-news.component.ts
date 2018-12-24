import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Observable, empty, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, flatMap, map, switchMap } from 'rxjs/operators';
import { EditNewsItem, NewsListItem } from 'src/app/models/news';
import { NewsService } from 'src/app/services/business.service/news.service';
import { FilterService } from '../../../services/business.service/filter.service';

const NUMBER_SHOW_FILTER_RESULT = 10;

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})

export class CreateNewsComponent implements OnInit {
  public editorOption: Object = {
    heightMin: 400,
    imageUpload: false,
    placeholderText: 'Nhập văn bản...'
  };
  public createNewsForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    thumbnail: new FormControl('', Validators.required),
    searchCompany: new FormControl(''),
    companyTag: new FormControl([]),
    filter: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  public showAlert = false;
  public listFilter = [];
  private editNewsId = 0;

  constructor(
    private filterService: FilterService,
    private newsService: NewsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.newsService.getListFilterForCreateNew().pipe(
      flatMap(result => {
        this.listFilter = result;
        return this.activeRoute.params;
      }),
      flatMap(params => {
        if (params.id) {
          return this.newsService.getNewsDetail(params.id);
        } else {
          return empty();
        }
      })
    ).subscribe(result => {
      if (!_.isEmpty(result)) {
        this.editNewsId = result.id;
        this.updateDataForEdit(result);
      }
    });
  }

  public selectACompany(event: any) {
    event.preventDefault();
    const companyCode = _.trim(event.item.split('-')[0]);
    const selectedValue: string[] = this.createNewsForm.get('companyTag').value;
    if (selectedValue.indexOf(companyCode) === -1) {
      selectedValue.push(companyCode);
    }
    this.createNewsForm.get('searchCompany').reset();
  }

  public searchCompany = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '');
      })
    )

  public removeTag(tag: string) {
    const selectedValue: string[] = this.createNewsForm.get('companyTag').value;
    if (selectedValue.indexOf(tag) !== -1) {
      selectedValue.splice(selectedValue.indexOf(tag), 1);
    }
  }

  public saveNews() {
    const selectedTag: string[] = this.createNewsForm.get('companyTag').value;
    if (this.createNewsForm.valid && selectedTag.length) {
      this.saveToServer().subscribe(result => {
        this.router.navigate(['news/listNews']);
      });
    } else {
      this.showAlert = true;
    }
  }

  private saveToServer() {
    const formValue = this.createNewsForm.value;
    const apiJson: EditNewsItem = {
      title: formValue.subject,
      thumbnailUrl: formValue.thumbnail,
      categoryId: formValue.filter,
      listTag: formValue.companyTag,
      content: formValue.content,
      createdTime: moment().format('DD/MM/YYYY')
    };

    if (this.editNewsId === 0) {
      return this.newsService.saveNews(apiJson);
    } else {
      apiJson.id = this.editNewsId;
      return this.newsService.updateNews(apiJson);
    }
  }

  private filter(searchPattern: string): Observable<string[]> {
    if (_.isNil(searchPattern) || _.isEmpty(searchPattern)) {
      return of([]);
    }

    return this.filterService.searchCompany(searchPattern).pipe(
      map(data => {
        const result = data.map(company => [company.code.toUpperCase(), company.name].join(' - '));
        if (result.length > NUMBER_SHOW_FILTER_RESULT) {
          return result.slice(0, NUMBER_SHOW_FILTER_RESULT);
        } else {
          return result;
        }
      })
    );
  }

  private updateDataForEdit(result: NewsListItem) {
    const formValue = this.createNewsForm.value;
    formValue.subject = result.title;
    formValue.thumbnail = result.thumbnailUrl;
    formValue.companyTag = result.tag;
    formValue.filter = result.categoryId;
    formValue.content = result.content;
    this.createNewsForm.setValue(formValue);
  }
}
