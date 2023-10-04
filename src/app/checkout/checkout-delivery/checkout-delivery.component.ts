import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';
import { IDeliveryMethod } from 'src/app/shared/models/deliveryMethod';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  deliveryForm: FormGroup
  deliveryMethods: IDeliveryMethod[];

  constructor (private checkoutService:CheckoutService){}

  ngOnInit(): void {
    this.createDeliveryForm();
    this.checkoutService.getDeliveryMethods().subscribe((dm: IDeliveryMethod[]) => {
      this.deliveryMethods = dm;
      console.log(dm);
    }, error => {
      console.log(error);
    });
  }

  createDeliveryForm(){
    this.deliveryForm = new FormGroup({
      deliveryMethod: new FormControl(null, Validators.required),
    })
  }

}
