import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './Model/product';
import { take } from 'rxjs/operators';
// import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  //product2:Product;
  constructor(private db: AngularFireDatabase) {


  }



  private async getOrCreateCartId() {


    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    // debugger;
    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    // this.create().then(result => {

    //   localStorage.setItem('cartId', result.key);

    //   //add product to cart
    // });

    return result.key;



  }
  async addtoCart(product: Product) {

    let cartId = await this.getOrCreateCartId();
    // debugger;
    let productKey = localStorage.getItem('currentProjectKey');
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + productKey);
    // debugger;
    //item$.set({ product: product});

    console.log(new Date().getTime());
    console.log(productKey);

    item$.valueChanges().pipe(take(1)).subscribe((p: any) => {
      if (p) {
        item$.update({ quantity: p.quantity + 1 });
      }
      else {
        delete product.$key;
    
        console.log(product);
        item$.set({ product: product, quantity: 1 });
        product.$key = productKey;
      }

    });

  };





  private async create() {

    return this.db.list('shopping-carts').push({

      dateCreated: new Date().getTime()
    });
  }
}
