import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { PTKTDto } from '../../interface/ptkt-dto';
import { CanslimDto, FisherDto, GrahamChecklistDto, GramhamNCavDto, GramhamNetDto } from '../../interface/screen-dto';
import { ApiService } from '../api.service/api.service';

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

  public getScreenNetNet(): Observable<GramhamNetDto> {
    return this.apiService.getScreenNetNet();
  }

  public getScrenNCAV(): Observable<GramhamNCavDto> {
    return this.apiService.getScrenNCAV();
  }

  public getScrenCANSLIM(): Observable<CanslimDto> {
    return this.apiService.getScrenCANSLIM();
  }

  public getScrenPhilipFisherGrowth(): Observable<FisherDto> {
    return this.apiService.getScrenPhilipFisherGrowth();
  }

  public screnGrahamChecklist(): Observable<GrahamChecklistDto> {
    return this.apiService.screnGrahamChecklist();
  }

  public getScreenBreakSupport(): Observable<PTKTDto> {
    return this.apiService.getScreenBreakSupport();
  }

  public getScreenBreakResistance(): Observable<PTKTDto> {
    return this.apiService.getScreenBreakResistance();
  }

  public getScreenTrendTrader(): Observable<PTKTDto> {
    return this.apiService.getScreenTrendTrader();
  }

}
