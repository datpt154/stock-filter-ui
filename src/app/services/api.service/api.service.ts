import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CanslimDto, DBTTMDto, FisherDto, GrahamChecklistDto, GramhamNCavDto, GramhamNetDto } from 'src/app/interface/screen-dto';
import { environment } from '../../../environments/environment';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';
import { PTKTDto } from '../../interface/ptkt-dto';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getFromAPI(path: string): Observable<any> {
    const url = API_URL + path;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public postToAPI(path: string, param: any): Observable<any> {
    const url = API_URL + path;
    return this.http.post(url, JSON.stringify(param)).pipe(catchError(this.handleError));
  }

  public putToAPI(path: string, param: any): Observable<any> {
    const url = API_URL + path;
    return this.http.put(url, JSON.stringify(param)).pipe(catchError(this.handleError));
  }

  public deleteToAPI(path: string): Observable<any> {
    const url = API_URL + path;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  public basicFilter(searchInput: BasicFilterInput): Observable<any> {
    const url = API_URL + 'api/filter';
    return this.http.post<any>(url, JSON.stringify(searchInput)).pipe(catchError(this.handleError));
  }

  public compareFiltered(searchInput: ComparedFilterInput): Observable<any> {
    const url = API_URL + 'api/Compare';
    return this.http.post<any>(url, JSON.stringify(searchInput)).pipe(catchError(this.handleError));
  }

  public searchCompany(searchPattern: string): Observable<any> {
    const url = API_URL + 'api/autocompletestock/' + searchPattern;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getDetailstock(companyCode: string, filterTime: string): Observable<any> {
    const url = API_URL + 'api/detailstock';
    const parameters = {
      time: filterTime,
      code: companyCode
    };
    return this.http.post<any>(url, JSON.stringify(parameters)).pipe(catchError(this.handleError));
  }

  public getDetailStockMore(companyCode: string, filterTime: string): Observable<any> {
    const url = API_URL + 'api/detailstockmore';
    const parameters = {
      time: filterTime,
      code: companyCode
    };
    return this.http.post<any>(url, JSON.stringify(parameters)).pipe(catchError(this.handleError));
  }

  public getDetailStockFinanceRatio(companyCode: string, filterTime: string): Observable<any> {
    const url = API_URL + 'api/detailstockfinanceratio';
    const parameters = {
      time: filterTime,
      code: companyCode
    };
    return this.http.post<any>(url, JSON.stringify(parameters)).pipe(catchError(this.handleError));
  }

  public getScreenRevenue(): Observable<any> {
    const url = API_URL + 'api/screenRevenue/';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenProfit(): Observable<any> {
    const url = API_URL + 'api/screenProfit/';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenEPS(): Observable<any> {
    const url = API_URL + 'api/screenEPS/';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenPE_PB(): Observable<any> {
    const url = API_URL + 'api/screenPE_PB/';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenMCNWC_EVEBITDA(): Observable<any> {
    const url = API_URL + 'api/screenMCNWC_EVEBITDA/';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenNetNet(): Observable<GramhamNetDto> {
    const url = API_URL + 'api/screenNetNet';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScrenNCAV(): Observable<GramhamNCavDto> {
    const url = API_URL + 'api/screnNCAV';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScrenCANSLIM(): Observable<CanslimDto> {
    const url = API_URL + 'api/screnCANSLIM';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScrenPhilipFisherGrowth(): Observable<FisherDto> {
    const url = API_URL + 'api/screnPhilipFisherGrowth';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public screnGrahamChecklist(): Observable<GrahamChecklistDto> {
    const url = API_URL + 'api/screnGrahamChecklist';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenBreakSupport(): Observable<PTKTDto> {
    const url = API_URL + 'api/screnBreakSupport';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenBreakResistance(): Observable<PTKTDto> {
    const url = API_URL + 'api/screnBreakResistance';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getScreenTrendTrader(): Observable<PTKTDto> {
    const url = API_URL + 'api/screnTrendTrader';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  public getscreenDBTTM(): Observable<DBTTMDto> {
    const url = API_URL + 'api/screnDBTTM';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
