import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpconfigInterceptor } from 'src/app/core/interceptor/httpconfig.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
 
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpconfigInterceptor,
    multi:true  },HomeService],
})
export class HomeModule {}
