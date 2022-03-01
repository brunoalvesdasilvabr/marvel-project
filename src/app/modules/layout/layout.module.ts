import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,   
    RouterModule
  
  ],
  providers: [],
})
export class LayoutModule {}
