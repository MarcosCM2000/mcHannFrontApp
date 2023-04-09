import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/authResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = `${environment.baseUrl}/auth`;
  private _user!: AuthResponse;
  private _token: string = '';

  get token() {
    return this._token;
  }
  set token(token: string){
    this._token = token;
  }

  get user() {
    return {...this._user};
  }
  set user(user: AuthResponse){
    this._user = user;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    const url = `${this._baseUrl}/login`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body);
  }
  register(email: string, name:string, password: string): Observable<AuthResponse> {
    const url = `${this._baseUrl}/register`;
    const body = {email, name, password};

    return this.http.post<AuthResponse>(url, body);
  }
  saveToken(token: string){
    this.token = token;
    localStorage.setItem('token', this._token);
  }
  deleteToken(){
    localStorage.removeItem('token');
  }
}
