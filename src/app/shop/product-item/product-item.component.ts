import { Component, Input, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  @Input() product: any;
  faShoppingCart = faShoppingCart;

  constructor(){}

  ngOnInit(): void {
    
  }

}
