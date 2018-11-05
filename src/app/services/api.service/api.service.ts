import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CanslimDto, FisherDto, GrahamChecklistDto, GramhamNCavDto, GramhamNetDto, DBTTMDto } from 'src/app/interface/screen-dto';
import { environment } from '../../../environments/environment';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';
import { PTKTDto } from '../../interface/ptkt-dto';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  public basicFilter(searchInput: BasicFilterInput): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/filter';

    return this.http
      .post<any>(url, JSON.stringify(searchInput), httpOptions)
      .pipe(catchError(this.handleError));
  }

  public compareFiltered(searchInput: ComparedFilterInput): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/Compare';

    return this.http
      .post<any>(url, JSON.stringify(searchInput), httpOptions)
      .pipe(catchError(this.handleError));
  }

  public searchCompany(searchPattern: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/autocompletestock/' + searchPattern;

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getDetailstock(companyCode: string, filterTime: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/detailstock';
    const parameters = {
      time: filterTime,
      code: companyCode
    };

    return this.http
      .post<any>(url, JSON.stringify(parameters), httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getDetailStockMore(companyCode: string, filterTime: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/detailstockmore';
    const parameters = {
      time: filterTime,
      code: companyCode
    };

    return this.http
      .post<any>(url, JSON.stringify(parameters), httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getDetailStockFinanceRatio(companyCode: string, filterTime: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/detailstockfinanceratio';
    const parameters = {
      time: filterTime,
      code: companyCode
    };

    return this.http
      .post<any>(url, JSON.stringify(parameters), httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenRevenue(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screenRevenue/';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenProfit(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screenProfit/';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenEPS(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screenEPS/';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenPE_PB(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screenPE_PB/';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenMCNWC_EVEBITDA(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screenMCNWC_EVEBITDA/';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenNetNet(): Observable<GramhamNetDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screenNetNet';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScrenNCAV(): Observable<GramhamNCavDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnNCAV';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScrenCANSLIM(): Observable<CanslimDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnCANSLIM';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScrenPhilipFisherGrowth(): Observable<FisherDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnPhilipFisherGrowth';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public screnGrahamChecklist(): Observable<GrahamChecklistDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnGrahamChecklist';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenBreakSupport(): Observable<PTKTDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnBreakSupport';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenBreakResistance(): Observable<PTKTDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnBreakResistance';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getScreenTrendTrader(): Observable<PTKTDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnTrendTrader';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getscreenDBTTM(): Observable<DBTTMDto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.API_URL + 'api/screnDBTTM';

    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
