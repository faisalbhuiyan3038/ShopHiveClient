import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [
    CarouselModule,
  ]
})
export class SharedModule { }
