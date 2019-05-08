import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angular4-social-login';
import {User} from '../../interface/user';
import * as Actions from '../../redux/actions';
import {AuthenticationService} from '../../services/business.service/authenticationService.service';
import {RegisterDTO} from '../../interface/register-dto';
import {AppState} from '../../redux/reducers';
import {Store} from '@ngrx/store';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private logginUser: User;

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('content') content: ElementRef;

  constructor(
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private store: Store<AppState>,
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialUser => {
      this.closeBtn.nativeElement.click();

      const userInfo: RegisterDTO = {
        name: socialUser.name,
        email: socialUser.email,
        password: '',
        provider: socialUser.provider,
        idProvider: socialUser.id,
        photoUrl: socialUser.photoUrl
      };

      this.authenticationService.login(userInfo).subscribe(
        user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.store.dispatch(new Actions.UpdateUserAction(user));

          // after log-in successfully, we need to reload page
          window.location.reload();
        },
          err => {
          console.log(err);
        }
      );
    });
  }
}
