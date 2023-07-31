import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:7243/api/";

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.baseUrl+"Product")
  }

  getCategories(){
    return this.http.get(this.baseUrl+"Category")
  }
}
