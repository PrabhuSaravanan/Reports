import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://coeur.coreinnitsolutions.com:8062/api/User/Login';

  constructor(private _httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this._httpClient.post<any>(this.apiUrl, body);
  }
}
