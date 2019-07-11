import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { isNgTemplate } from '@angular/compiler';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:{title:string}[];
  items=[];
  customers: any;
  filteredProduct: any[];
  subscription: Subscription;
  constructor(private productService:ProductService, private db:AngularFireDatabase) { 
   


this.subscription=this.productService.getAll().valueChanges()
.subscribe(products => this.filteredProduct= this.products=products);
 // this.products$=  this.productService.getAll();
 


  this.productService.getAll().valueChanges().subscribe((cat) => {
    if (cat) {
     // debugger;
  //    this.products$ = cat;
   //   console.log(this.products$);
      

    }
  });

  }

filter(query:string){
console.log(query);


this.filteredProduct=(query) ?
this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) :
this.products;
}

  getCustomersList() {
    this.productService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      debugger
      this.customers = customers;
    });
  }


  ngOnDestroy(){

this.subscription.unsubscribe();
  }
  ngOnInit() {

    this.getCustomersList();
   
  }

}
