import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataItem } from '../../interface/data-item';
import { ApiService } from '../api.service/api.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput } from '../../interface/api-input';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  constructor(private apiService: ApiService) { }

  public basicFilter(searchInput: BasicFilterInput): Observable<BasicFilterDTO[]> {
    return this.apiService.basicFilter(searchInput);
  }
}
