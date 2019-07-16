import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AppProduct } from './Model/app-product';
import { Customer } from './customer';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = '/product/';
  customersRef: AngularFireList<Customer> = null;
  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }


  create(product: any) {
    return this.db.list('/product').push(product);
  }

  getAll() {
    return this.db.list('/product');
  }


  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }


  get(productId) {
    debugger;
    let a = this.db.object(this.dbPath + productId);
    return a;
  }

  update(productId, product) {

    return this.db.object(this.dbPath + productId).update(product);
  }

  delete(productId) {
   return this.db.object(this.dbPath+productId).remove();
  }

}
