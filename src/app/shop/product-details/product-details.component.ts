import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | null=null;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute){}

  ngOnInit(){
    this.loadProduct();
  }

  loadProduct(){
    const productIdString = this.activateRoute.snapshot.paramMap.get('id');
    const productId = productIdString ? parseInt(productIdString, 10) : null;
    if(productId!=null){
      this.shopService.getProductById(productId).subscribe({
        next: (response) => {this.product = response},
        error: error => console.log(error),
        complete: () => console.log("Request has completed.")
      });
    };
  }

}
