import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    CategoryNavComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
