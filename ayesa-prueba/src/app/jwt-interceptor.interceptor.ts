import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('auth_token')
    if (!token) {
      return next.handle(request);
    }

    const requestDone = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    
    return next.handle(requestDone);
  }
}
