import { Injectable } from '@angular/core';
import { ApiService } from '../api.service/api.service';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../../interface/register-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private apiService: ApiService) {}

  login(userInfo: RegisterDTO): Observable<any> {
    return this.apiService.postToAPI('api/login', userInfo);
  }
}
