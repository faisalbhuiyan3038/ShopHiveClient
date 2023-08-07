import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ICategory } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent implements OnInit{
  categories: ICategory[]=[];
  selectedCategory:any;
  
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getCategories().subscribe({
      next: (response) => {this.categories = response;this.selectedCategory=""},
      error: error => console.log(error),
      complete: () => console.log("Request has completed.")
    });
  }
}
