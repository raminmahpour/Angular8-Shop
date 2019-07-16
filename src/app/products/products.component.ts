import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs'; 
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  //productsn:Product[];
  products;
  categories$;
  category: string;
  filterProducts;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService) {


      // productService.getAll().snapshotChanges().pipe(
      //   map(changes =>
      //     changes.map(c =>
      //       ({ key: c.payload.key, ...c.payload.val() })
      //     )
      //   )
      // ).subscribe(customers => {
      //   this.products=this.filterProducts = customers;
      // });
   productService.getAll().valueChanges().subscribe(products=>this.products=this.filterProducts= products);

    //this.products =productService.getAll().valueChanges().pipe().subscribe(p=>this.productsn=p);


    this.categories$ = categoryService.getCategories().valueChanges();
    //  console.log(this.categories$);

    route.queryParamMap.subscribe(params => {

      this.category = params.get('category');
      //  this.category = (this.category);
      // alert(category);



//       this.filterProducts = (this.category) ?
//       this.products.filter(p => p.category.includes(this.category)) :
//       this.products;

// debugger;

      if (this.category) {
        debugger;

        // this.products
        // .filter((item)=>item.category == this.category)
        // .subscribe((products) => {
        //    this.filterProducts = products;
        // });


        this.filterProducts = this.products.filter(p => p.category === this.category)
      }
      else {
        this.filterProducts = this.products;
      }

      // this.filterProducts=(this.category) ?

      // this.products$.filter(p=>p.category===this.category) :
      // this.products$;



    });
  }

  
  getCustomersList2() {
  //  this.productService.getAll().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(customers => {
  //     debugger
  //     //alert("hi");
  //     this.customers=this.filteredProduct = customers;

  //     // console.log("getCustomersList");
  //     // console.log(this.customers);
  //     // console.log("-------------");
  //   });
  }
  ngOnInit() {
  }

}
