import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular4-social-login';
import { RegisterDTO } from '../../interface/register-DTO';
import { AuthenticationService } from '../../services/business.service/authenticationService.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  user: SocialUser;
  loggedIn: boolean;

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private authenticationService: AuthenticationService
  ) {}


  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, Validators.minLength(6)],
         // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ],
      confirmPassword: ['', Validators.required]
    });

    this.authService.authState.subscribe((socialUser) => {
      this.user = socialUser;
      this.loggedIn = (socialUser != null);
      if (this.loggedIn) {
        const userInfo: RegisterDTO = {
          name: socialUser.name,
          email: socialUser.email,
          password: '',
          provider: socialUser.provider,
          idProvider: socialUser.id
        };

        this.authenticationService.register(userInfo).subscribe(
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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  signOut(): void {
    this.authService.signOut();
  }

  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }
}
