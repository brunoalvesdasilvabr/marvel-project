import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login/login.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    BlockUIModule,
  ],
  providers: [LoginService],
})
export class LoginModule {}
