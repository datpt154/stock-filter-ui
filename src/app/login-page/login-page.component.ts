import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

enum Type {
  Login,
  Register
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private loginForm: FormGroup;
  private registerForm: FormGroup;
  private selectedType = Type.Login;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required),
      adress: new FormGroup({
        ad: new FormControl
      })
    });

    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });

  }

  switchType(type: string) {
    this.selectedType = Type[type];
  }
}
