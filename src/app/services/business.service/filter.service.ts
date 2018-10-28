import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataItem } from '../../interface/data-item';
import { ApiService } from '../api.service/api.service';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';
import { ScreenDto } from '../../interface/screen-dto';

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

  public getDetailStockMore(companyCode: string, filterTime: string): Observable<any> {
    return this.apiService.getDetailStockMore(companyCode, filterTime);
  }

  public getDetailStockFinanceRatio(companyCode: string, filterTime: string): Observable<any> {
    return this.apiService.getDetailStockFinanceRatio(companyCode, filterTime);
  }

  public getScreenRevenue(): Observable<any> {
    return this.apiService.getScreenRevenue();
  }

  public getScreenProfit(): Observable<any> {
    return this.apiService.getScreenProfit();
  }

  public getScreenEPS(): Observable<any> {
    return this.apiService.getScreenEPS();
  }

  public getScreenPE_PB(): Observable<any> {
    return this.apiService.getScreenPE_PB();
  }

  public getScreenMCNWC_EVEBITDA(): Observable<any> {
    return this.apiService.getScreenMCNWC_EVEBITDA();
  }

  public getScreenNetNet(): Observable<ScreenDto> {
    return this.apiService.getScreenNetNet();
  }

  public getScrenNCAV(): Observable<ScreenDto> {
    return this.apiService.getScrenNCAV();
  }

  public getScrenCANSLIM(): Observable<ScreenDto> {
    return this.apiService.getScrenCANSLIM();
  }

  public getScrenPhilipFisherGrowth(): Observable<ScreenDto> {
    return this.apiService.getScrenPhilipFisherGrowth();
  }

  public screnGrahamChecklist(): Observable<ScreenDto> {
    return this.apiService.screnGrahamChecklist();
  }

}
