import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeService } from './services/home.service';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
 
  ],
  providers: [HomeService],
})
export class HomeModule {}
