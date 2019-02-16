import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/internal/observable/of';
import { tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, getState } from '../../redux/reducers';

@Injectable({
  providedIn: 'root'
})
export class HttpconfigInterceptorService {
  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const logginUser = getState(this.store).logginUser;
    if (logginUser) {
      request = request.clone({ headers: request.headers.set('UserId', logginUser.id) });
    } else {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }

        console.log('i dont know--->>>', event);
        return event;
      })
    );
  }
}
