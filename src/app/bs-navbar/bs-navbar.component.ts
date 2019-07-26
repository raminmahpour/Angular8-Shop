import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

import { ShoppingCart } from '../Model/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  user$: Observable<firebase.User>;
  shoppingCartItemCount: number;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AngularFireAuth, private shoppingCartService: ShoppingCartService) {

    // afAuth.authState.subscribe(user => this.user=user);
    this.user$ = auth.authState;

  }

  async ngOnInit() {

    this.cart$ = await this.shoppingCartService.getCart();
    // let cart$ = await this.shoppingCartService.getCart();
    // cart$.valueChanges().subscribe(cart => {
    //   debugger;

    //   // I want to count all of the item's quantities ---
    //   // so I have to extract it to a class 

    //   this.shoppingCartItemCount = 0;
    //   //let a=cart;
    //   //let b = cart.items;
    //   for (let productId in cart.items) {
    //     // debugger;
    //     this.shoppingCartItemCount += cart.items[productId].quantity;
    //   }

    // });

  }


  logout() {

    this.auth.auth.signOut();

  }

}
