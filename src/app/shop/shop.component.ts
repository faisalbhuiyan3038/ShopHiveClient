import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from '../shared/models/product';
import { ICategory } from '../shared/models/category';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[]=[];
  filteredProducts: IProduct[]=[];
  categories: ICategory[]=[];
  searchQuery: string="";
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
 
    // ngOnInit(): void {
    //   this.httpClient.get<ICategory[]>("https://localhost:7243/api/Category").subscribe(
    //     (data: ICategory[]) => {
    //       this.categories = data;
    //     },
    //     (error) => {
    //       console.error("Error fetching categories:", error);
    //     }
    //   );
    // }

  ngOnInit(): void {
    this.getProducts(this.categoryNameSelected,this.sortSelected);
    this.shopService.getCategories().subscribe({
      next: (data: ICategory[]) => {this.categories = data || []},
      error: error => console.log(error),
      complete: () => console.log("Request has completed.")
    });
  }

  getProducts(categoryName:string,sort:string){
    this.loading = true;
    this.shopService.getProducts(categoryName,sort).subscribe(
      (data: IProduct[]) => {
        this.products = data || [],this.filteredProducts = data || [];
        this.loading=false
      },
      (error) => {
        console.log(error);
        this.loading=false
      },
      () => console.log("Request has completed.")
    );
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

  onSearch() {
    if (!this.searchQuery) {
      this.products = this.filteredProducts; // Show all products if search query is empty.
    } else {
      this.products = this.filteredProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

}
