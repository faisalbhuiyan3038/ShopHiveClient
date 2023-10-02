import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShopHiveClient';
  faBarsStaggered = faBarsStaggered;
  categories: any;

  constructor(private http: HttpClient, private basketService: BasketService, private accountService: AccountService) {}

  ngOnInit(): void {
    this.http.get("https://localhost:7243/api/Category").subscribe({
      next: response => this.categories = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed.")
    });
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token = localStorage.getItem('token');
    
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user');
      }, error => {
        console.log(error);
      });
    
  }

  loadBasket(){
    const basketId = localStorage.getItem("basket_id");
    if (basketId){
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log("Initialized Basket");
      }, error => {
        console.log(error);
      })
    }
  }
}
