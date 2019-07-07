import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AppProduct } from './Model/app-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db:AngularFireDatabase) { }


  create(product: any) {
    return this.db.list('/product').push(product);
  }

 getAll(){
return this.db.list('/product');



 }
}
