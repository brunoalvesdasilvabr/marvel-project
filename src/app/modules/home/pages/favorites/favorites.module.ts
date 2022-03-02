import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '@modules/home/services/home.service';
import { SharedModule } from 'src/app/shared/shared.module';
;
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
 
  ],
  providers: [HomeService],
})
export class FavoritesModule {}
