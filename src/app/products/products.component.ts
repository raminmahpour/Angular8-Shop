import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

  products$;
  categories$;
  category:string;

  constructor(
    route:ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService) { 

    this.products$=productService.getAll().valueChanges();
    this.categories$=categoryService.getCategories().valueChanges();
  //  console.log(this.categories$);

route.queryParamMap.subscribe(params=>{

  this.category=params.get('category');


 // alert(category);
});

  }

  ngOnInit() {
  }

}
