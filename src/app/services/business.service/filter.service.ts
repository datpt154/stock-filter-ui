import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataItem } from '../../interface/data-item';
import { ApiService } from '../api.service/api.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  constructor(private apiService: ApiService) { }

  public basicFilter(searchInput: BasicFilterInput): Observable<BasicFilterDTO[]> {
    return this.apiService.basicFilter(searchInput);
  }

  public compareFiltered(searchInput: ComparedFilterInput): Observable<any[]> {
    return this.apiService.compareFiltered(searchInput);
  }

  public searchCompany(searchPattern: string): Observable<any> {
    return this.apiService.searchCompany(searchPattern);
  }

  public getDetailstock(companyCode: string, filterTime: string): Observable<any> {
    return this.apiService.getDetailstock(companyCode, filterTime);
  }

}
