/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpconfigInterceptorService } from './httpconfig-interceptor.service';

describe('Service: HttpconfigInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpconfigInterceptorService]
    });
  });

  it('should ...', inject([HttpconfigInterceptorService], (service: HttpconfigInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
