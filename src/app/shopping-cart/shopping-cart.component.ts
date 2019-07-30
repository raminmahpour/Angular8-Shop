import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../Model/shopping-cart';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    // debugger;
    this.cart$ = await this.shoppingCartService.getCart();
    console.log(this.cart$);
  }

}
