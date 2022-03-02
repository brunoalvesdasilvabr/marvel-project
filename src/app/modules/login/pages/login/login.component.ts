import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@modules/login/services/login/login.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginResponseInterface } from 'src/app/data/interface/login-response.interface';
import { AuthStoreService } from 'src/app/core/store/auth/auth-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username!: string;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  loading = false;
  loginError = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authStoreService: AuthStoreService,
    private router:Router
  ) {}

  ngOnInit(): void {}
  public onSubmit() {
    this.loading = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (res) => this.formSubmited(res),
        error: (err) => this.handleLoginError(err),
      });
  }

  formSubmited(res: LoginResponseInterface) {
    this.loading = false;
    this.authStoreService.setToken(res);
    this.router.navigate(['/home'])
  }

  handleLoginError(err: HttpErrorResponse) {
    this.loading = false;
    this.loginError = true;
    this.loginForm.reset();
    console.error(err);
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
