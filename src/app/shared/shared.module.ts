import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
  
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
