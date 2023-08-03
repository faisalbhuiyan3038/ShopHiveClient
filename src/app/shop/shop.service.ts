import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:7243/api/";

  constructor(private http: HttpClient) { }

  getProducts(categoryName:string,sortBy:string){
    let params = new HttpParams().set('categoryName', categoryName);
    params = params.append('sortBy',sortBy);
    return this.http.get(this.baseUrl+"Product",{params})
  }

  getCategories(){
    return this.http.get(this.baseUrl+"Category")
  }
}
