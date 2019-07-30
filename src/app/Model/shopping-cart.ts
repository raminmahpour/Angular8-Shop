import { ShoppingCartItem } from './shopping-cart-tem';

export class ShoppingCart {

    //items:ShoppingCartItem[];


    // can't you hear me? Very bad :( )

    // Can you type here?

    // you can explain each part by writing like here
    // As you know, you get cart data which defined as ShoppingCard class
    // right?
    // in this ShoppingCard class, has gettotalAmuntfunction, right?
    // all functions are define by get mode, this means you can call this function in html without ()
    // like this,{{ card.gettotalamount}}


    //what is the relationship between these two??
    constructor(public items: Array<ShoppingCartItem>) {

        console.log(items)

    }

    get abc() {
        return "abcdefg"
    }
    get productIds() {

        return Object.keys(this.items);

    }


    get totalPrice() {
        debugger;
        let sum = 0;
        for (let productId in this.items) {


            sum += (this.items[productId].product.price) * this.items[productId].quantity;


        }

        return sum;


    }
    get totalItemsCount() {
        let count = 0;
        for (let productId in this.items) {
            count += this.items[productId].quantity;
        }
        return count;

    }
}