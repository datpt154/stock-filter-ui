import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular4-social-login';
import * as _ from 'lodash';
import { User } from '../../interface/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private logginUser: User;

  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  LogInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      this.closeBtn.nativeElement.click();
    });
  }

  // logInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  signOut(): void {
    this.authService.signOut();
  }

}
