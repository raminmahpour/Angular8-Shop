import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  //productsn:Product[];
  products: Array<Product> = [];
  cart: any;
  category: string;
  filterProducts: Array<Product> = [];
  subscription: Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {



    // productService.getAll().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key, ...c.payload.val() })
    //     )
    //   )
    // ).subscribe(customers => {
    //   this.products=this.filterProducts = customers;
    // });



    productService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ $key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe((products: Product[]) => {
      this.products = this.filterProducts = products;
      console.log(this.products);


      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        if (this.category) {
          this.filterProducts = this.products.filter(p => p.category === this.category)
        }
        else {
          this.filterProducts = this.products;
        }
      });
      //alert("hi");
      // this.customers=this.filteredProduct = customers;
      // Can you see the same error here?
      // console.log("getCustomersList");
      // console.log(this.customers);
      // console.log("-------------");
    });


    // productService.getAll().valueChanges().subscribe((products: Product[]) => {

    //   this.products = this.filterProducts = products;
    //   console.log(this.products);


    //   route.queryParamMap.subscribe(params => {
    //     this.category = params.get('category');
    //     if (this.category) {
    //       this.filterProducts = this.products.filter(p => p.category === this.category)
    //     }
    //     else {
    //       this.filterProducts = this.products;
    //     }
    //   });
    // });

    //this.products =productService.getAll().valueChanges().pipe().subscribe(p=>this.productsn=p);



    //  console.log(this.categories$);


  }



  async ngOnInit() {
    //let cart= await this.shoppingCartService.getCart();

    this.subscription=(await this.shoppingCartService.getCart()).valueChanges().pipe().subscribe((cart:any)=> {
      debugger;
      
      this.cart=cart
    
    });

    // let item$ = await this.shoppingCartService.getCart();
    // debugger;
    // item$.valueChanges().pipe().subscribe((p: any) => {
    //  debugger;
    //   console.log(p);

    // });


  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
