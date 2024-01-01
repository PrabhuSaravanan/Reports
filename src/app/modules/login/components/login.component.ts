import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoginFailed: boolean = false;

  constructor(private _formbuilder: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  public loginFormSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this._checkCredentials(username, password)) {
      this._router.navigate(['/dashboard']);
    } else {
      this.isLoginFailed = true;
    }
  }

  public initLoginForm() {
    this.loginForm = this._formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private _checkCredentials(username: string, password: string) {
    const hardcodedUsername = 'hellboyprabhu';
    const hardcodedPassword = 'hellboy@RedSky';
    return username === hardcodedUsername && password === hardcodedPassword;
  }
}
