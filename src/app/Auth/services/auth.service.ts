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

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    const url = `${this._baseUrl}/login`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body);
  }
  saveToken(){

  }
  deleteToken(){
    console.log('222');
  }
  logout() {
    this.deleteToken();
  }
}
