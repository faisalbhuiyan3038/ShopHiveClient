import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ICategory } from '../shared/models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:7243/api/";

  constructor(private httpClient: HttpClient) { }

  // getProducts(categoryName:string,sortBy:string){
  //   let params = new HttpParams().set('categoryName', categoryName);
  //   params = params.append('sortBy',sortBy);
  //   return this.httpClient.get<IProduct[]>(this.baseUrl+"Product",{params})
  // }

  getProducts(categoryName: string, sortBy: string): Observable<IProduct[]> {
    const params = new HttpParams().set('categoryName', categoryName).append('sortBy', sortBy);
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}Product`, { params });
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.baseUrl}Product/${id}`);
  }

  // getCategories(){
  //   return this.httpClient.get<ICategory[]>(this.baseUrl+"Category")
  // }

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${this.baseUrl}Category`);
  }
}
