import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any;
  faBarsStaggered = faBarsStaggered;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getProducts().subscribe({
      next: response => this.products = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed.")
    });
  }
}
