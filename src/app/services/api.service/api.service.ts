import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { DataItem } from '../../interface/data-item';
import { BasicFilterDTO } from '../../interface/basic-filter-dto';
import { BasicFilterInput, ComparedFilterInput } from '../../interface/api-input';
import { environment } from '../../../environments/environment';


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
