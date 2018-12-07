import { OnInit, Component } from '@angular/core';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { FilterService } from '../../../services/business.service/filter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditNewsItem } from 'src/app/models/news';
import { NewsService } from 'src/app/services/business.service/news.service';
import { Router } from '@angular/router';

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

  constructor(
    private filterService: FilterService,
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsService.getListFilterForCreateNew().subscribe(result => {
      this.listFilter = result;
    })
  }

  selectACompany(event: any) {
    event.preventDefault();
    const companyCode = _.trim(event.item.split('-')[0]);
    const selectedValue: string[] = this.createNewsForm.get('companyTag').value;
    if (selectedValue.indexOf(companyCode) === -1) {
      selectedValue.push(companyCode);
    }
    this.createNewsForm.get('searchCompany').reset();
  }

  searchCompany = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '');
      })
    )

  removeTag(tag: string) {
    const selectedValue: string[] = this.createNewsForm.get('companyTag').value;
    if (selectedValue.indexOf(tag) !== -1) {
      selectedValue.splice(selectedValue.indexOf(tag), 1);
    }
  }

  saveNews() {
    const selectedTag: string[] = this.createNewsForm.get('companyTag').value;
    if (this.createNewsForm.valid && selectedTag.length) {
      const formValue= this.createNewsForm.value;
      const apiJson: EditNewsItem = {
        title: formValue.subject,
        thumnailUrl: formValue.thumbnail,
        categoryId: formValue.filter,
        listTag: formValue.companyTag,
        content: formValue.content
      }
      this.newsService.saveNews(apiJson).subscribe(result => {
        console.log('save');
        this.router.navigate(['news/listNews']);
      })
    } else {
      this.showAlert = true;
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
}
