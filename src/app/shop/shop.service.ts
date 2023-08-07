import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ICategory } from '../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:7243/api/";

  constructor(private httpClient: HttpClient) { }

  getProducts(categoryName:string,sortBy:string){
    let params = new HttpParams().set('categoryName', categoryName);
    params = params.append('sortBy',sortBy);
    return this.httpClient.get<IProduct[]>(this.baseUrl+"Product",{params})
  }

  getCategories(){
    return this.httpClient.get<ICategory[]>(this.baseUrl+"Category")
  }
}
