import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@modules/layout/layout.module';
import { HttpconfigInterceptor } from 'src/app/core/interceptor/httpconfig.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeRoutingModule } from '@modules/home/home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    LayoutModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpconfigInterceptor,
    multi:true  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
