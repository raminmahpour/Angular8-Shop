import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { debug } from 'util';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
//import 'rxjs/add/operator/take';
//import { take } from 'rxjs/operators';
//import { take } from 'rxjs/internal/operators/take';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product={};
  id;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {



    // this.categories$=categoryService.getCategories().valueChanges;
    //this.afDb.list('Category').valueChanges().subscribe((dUser) => {
    categoryService.getCategories().valueChanges().subscribe((cat) => {
      if (cat) {
       // debugger;
        this.categories$ = cat;
      }


      this.id= this.route.snapshot.paramMap.get("id");
     if (this.id) {
      // debugger;
     this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p=>this.product=p);
     }
    });    

    // console.log(this.categories$=categoryService.getCategories());
  }
  save(product) {
   // console.log(product);

   if (this.id) {
     this.productService.update(this.id,product);
   } else {
    this.productService.create(product);
   }

    this.router.navigate(['/admin/products']);

  }


  delete(){


  //  alert(this.id);


    if (!confirm(" Are you sure?")) {
      return
      
    }
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);

  }
  ngOnInit() {
  }

}
