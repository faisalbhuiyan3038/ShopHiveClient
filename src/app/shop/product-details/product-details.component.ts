import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | null=null;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService){
    this.bcService.set('@productDetails',' ');
  }

  ngOnInit(){
    this.loadProduct();
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
