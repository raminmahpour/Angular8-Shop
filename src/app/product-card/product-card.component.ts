import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/product';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') ShoppingCart;


  constructor(private cartService: ShoppingCartService) {
  }

  addToCard() {
    
    
    localStorage.setItem('currentProjectKey', this.product.$key);

    this.cartService.addtoCart(this.product);
 
  }

  RemoveFromCart(){
    localStorage.setItem('currentProjectKey', this.product.$key);
this.cartService.RemoveFromCart(this.product);

  }


  getQuantity() {
    ////debugger;
    if (!this.ShoppingCart) {
      return 0;

    }
    //debugger;
    let item = this.ShoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }
}
