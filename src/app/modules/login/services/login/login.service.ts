import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseInterface } from 'src/app/data/interface/login-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(
    email: string,
    password: string
  ): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(
      `${environment.login}/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }
}
