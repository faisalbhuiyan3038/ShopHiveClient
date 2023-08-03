import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from '../models/product';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any;
  categories: any;
  //categoryName: string="none";
  faBarsStaggered = faBarsStaggered;
  loading: boolean = false; // Add a loading flag
  categoryNameSelected: string="All";
  sortSelected = 'name';
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ]

  constructor(private shopService: ShopService) {}
 

  ngOnInit(): void {
    this.getProducts(this.categoryNameSelected,this.sortSelected);
    this.shopService.getCategories().subscribe({
      next: (response) => {this.categories = response},
      error: error => console.log(error),
      complete: () => console.log("Request has completed.")
    });
  }

  getProducts(categoryName:string,sort:string){
    this.loading = true;
    this.shopService.getProducts(categoryName,sort).subscribe({
      next: (response) => {this.products = response;this.loading=false},
      error: error => {console.log(error);this.loading=false},
      complete: () => console.log("Request has completed.")
    });
  }

  filterProductsByCategory(categoryNameSelected:string){
    this.categoryNameSelected = categoryNameSelected;
    if(categoryNameSelected == "All"){
      this.getProducts("none",this.sortSelected);
    }
    else{
      this.getProducts(categoryNameSelected,this.sortSelected);
    } 
  }

  onSortSelected(sort: string){
    this.sortSelected = sort;
    this.getProducts(this.categoryNameSelected,this.sortSelected);
  }
}
