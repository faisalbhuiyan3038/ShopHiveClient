import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | null=null;
  quantity = 1;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService, private basketService:BasketService){
    this.bcService.set('@productDetails',' ');
  }

  ngOnInit(){
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
    
  }

  loadProduct(){
    const productIdString = this.activateRoute.snapshot.paramMap.get('id');
    const productId = productIdString ? parseInt(productIdString, 10) : null;
    if(productId!=null){
      this.shopService.getProductById(productId).subscribe({
        next: (response) => {this.product = response; this.bcService.set('@productDetails',this.product.name)},
        error: error => console.log(error),
        complete: () => console.log("Request has completed.")
      });
    };
  }

}
