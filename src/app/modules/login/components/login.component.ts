import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  public loginFormSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(username, password);
    this._authService.login(username, password).subscribe((response) => {
      console.log(response);
    });
  }

  public initLoginForm() {
    this.loginForm = this._formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
