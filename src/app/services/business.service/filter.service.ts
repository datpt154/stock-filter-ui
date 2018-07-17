import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataItem } from '../../interface/data-item';
import { ApiService } from '../api.service/api.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  constructor(private apiService: ApiService) { }

  public basicFilter(dataItems: DataItem[]): Observable<BasicFilterDTO[]> {
    return this.apiService.basicFilter(dataItems);
  }
}
