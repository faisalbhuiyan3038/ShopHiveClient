import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopModule } from './shop.module';
import { Routes } from '@angular/router';

// const routes: Routes = [
//   {path: 'shop/:id', component: ProductDetailsComponent},
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShopModule
  ]
})
export class ShopRoutingModule { }
