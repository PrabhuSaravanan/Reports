import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoginFailed: boolean = false;

  constructor(
    private _formbuilder: FormBuilder,
    private _router: Router
  ) // private _authService: AuthenticationService
  {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  public loginFormSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this._router.navigate(['/dashboard']);
    // this._authService.login(username, password).subscribe((response) => {
    //   const token = response.token;
    //   sessionStorage.setItem('token', token);
    //   this._router.navigate(['/dashboard']);
    // });
  }

  public initLoginForm() {
    this.loginForm = this._formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
