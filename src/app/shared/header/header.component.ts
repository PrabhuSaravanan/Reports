import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public loggedInUser: string;

  constructor(private _router: Router) {}

  public logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
