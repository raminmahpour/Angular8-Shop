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

  addToCard(product: Product) {
    console.log(product);
    localStorage.setItem('currentProjectKey', product.$key);

    // debugger;
    this.cartService.addtoCart(product);



  }


  getQuantity() {
//debugger;
    if (!this.ShoppingCart) {
      return 0;

    }
    debugger;
    let item = this.ShoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }
}
