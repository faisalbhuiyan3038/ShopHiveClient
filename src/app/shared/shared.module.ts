import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component'


@NgModule({
  declarations: [
   
  
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [
    CarouselModule,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
