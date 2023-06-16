import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { AuthResult } from '../model/auth-result';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = 'http://localhost:3000'

  constructor(private readonly http: HttpClient) {}
  
  register(user: User): Observable<AuthResult> {
    return this.http.post<AuthResult>(`${this.url}/auth/register`, user);
  }

  login(user: User): Observable<AuthResult> {
    return this.http.post<AuthResult>(`${this.url}/auth/login`, user);
  }

  getMe(): Observable<any> {
    return this.http.get(`${this.url}/auth/me`);
  }
}