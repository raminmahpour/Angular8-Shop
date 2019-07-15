import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { isNgTemplate } from '@angular/compiler';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  items = [];
  customers: any;
  filteredProduct: any[];
  subscription: Subscription;
  constructor(private productService: ProductService, private db: AngularFireDatabase) {

    this.getCustomersList()

    // this.subscription = this.productService.getAll().valueChanges()
    //   .subscribe(products => this.filteredProduct = this.products = products);
    // // this.products$=  this.productService.getAll();

    // console.log("when loading");
    // console.log(this.products);
    // console.log("--------");

    // this.productService.getAll().valueChanges().subscribe((cat) => {
    //   if (cat) {

    //     // debugger;
    //     //    this.products$ = cat;
    //     //   console.log(this.products$);


    //   }
    // });

  }

  filter(query: string) {
    //console.log(query);


    this.filteredProduct = (query) ?
      this.customers.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.customers;
    console.log("filter");
    console.log(this.filteredProduct);
    console.log("-------------");
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
      //alert("hi");
      this.customers=this.filteredProduct = customers;
      console.log("getCustomersList");
      console.log(this.customers);
      console.log("-------------");
    });
  }


  ngOnDestroy() {

   // this.subscription.unsubscribe();
  }
  ngOnInit() {

    this.getCustomersList();
    //alert("2");
  }

}
