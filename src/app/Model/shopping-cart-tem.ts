import { Product } from './product';

export class ShoppingCartItem{


    // constructor(private product:Product,private quantity:number){


    // }
product:Product;
quantity:number;

get totalPrice(){

    debugger;
return this.product.price * this.quantity;
    
}


}

