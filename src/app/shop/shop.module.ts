import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
