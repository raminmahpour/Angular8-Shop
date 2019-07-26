import { ShoppingCartItem } from './shopping-cart-tem';

export class ShoppingCart {

    //items:ShoppingCartItem[];


    constructor(public items: Array<ShoppingCartItem>) {


    }
    get totalItemsCount() {
        let count = 0;
        for (let productId in this.items) {

            count += this.items[productId].quantity;

           
        }
        return count;

    }
}