import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '@modules/home/services/home.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CharacthersComponent } from './characthers.component';

@NgModule({
  declarations: [CharacthersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
 
  ],
  providers: [HomeService],
})
export class CharacthersModule {}
