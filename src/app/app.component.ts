import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService, SocialUser } from 'angular4-social-login';
import { User } from './interface/user';
import { RegisterDTO } from './interface/register-dto';
import { AuthenticationService } from './services/business.service/authenticationService.service';
import { Store } from '@ngrx/store';
import { AppState } from './redux/reducers';
import * as Actions from './redux/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  navigationSubscription: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private store: Store<AppState>,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        console.log('aaaaa NavigationEnd' );
      }
    });
  }

  ngOnInit() {
    this.authService.authState.subscribe((socialUser: SocialUser) => {
      this.store.dispatch(new Actions.UpdateUserAction(socialUser));
      this.router.navigate([this.router.url]);

      if (socialUser) {
        const userInfo: RegisterDTO = {
          name: socialUser.name,
          email: socialUser.email,
          password: '',
          provider: socialUser.provider,
          idProvider: socialUser.id
        };

        // this.store.dispatch(new Actions.UpdateUserAction(this.logginUser));

        this.authenticationService.login(userInfo).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }
}
