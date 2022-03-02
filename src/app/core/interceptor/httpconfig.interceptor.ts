import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../store/auth/auth-store.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {
  constructor(private authStore: AuthStoreService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.handleRequest(request);
    return next.handle(request);
  }
  handleRequest(request: HttpRequest<unknown>):HttpRequest<unknown> {
    const loginUrl =  `${environment.login}/v1/accounts:signInWithPassword?key=${environment.apiKey}`
    if(request.url !== loginUrl){
      const token = this.authStore.getToken();
      if (token) {
        request = request.clone({
          params: request.params.set('apiKey', environment.apiKey),
        });
        console.log({request})
      }
  
    }
  
    return request;
  }
}
