import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { debug } from 'util';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(
    private router:Router,
    private categoryService: CategoryService, 
    private productService: ProductService) {

    // this.categories$=categoryService.getCategories().valueChanges;
    //this.afDb.list('Category').valueChanges().subscribe((dUser) => {
    categoryService.getCategories().valueChanges().subscribe((cat) => {
      if (cat) {
       // debugger;
        this.categories$ = cat;
      }
    });

    // console.log(this.categories$=categoryService.getCategories());
  }
  save(product) {
   // console.log(product);
    this.productService.create(product);
    this.router.navigate(['/admin/products']);

  }
  ngOnInit() {
  }

}
