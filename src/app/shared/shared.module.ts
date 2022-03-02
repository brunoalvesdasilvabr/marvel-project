import { NgModule } from '@angular/core';
;import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';

const componentDeclarations =[
  CardComponent,
  LoadingComponent
]
@NgModule({
  declarations: componentDeclarations,
  
  imports: [
    CommonModule,
    ProgressSpinnerModule
    
  ],
  exports:[
    componentDeclarations
  ],
})
export class SharedModule { }
