import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { isNgTemplate } from '@angular/compiler';
import { ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products$;
  items=[];
  constructor(private productService:ProductService, private db:AngularFireDatabase) { 
   

 // this.products$=  this.productService.getAll();
 




  this.productService.getAll().valueChanges().subscribe((cat) => {
    if (cat) {
     // debugger;
      this.products$ = cat;
      console.log(this.products$);
      

    }


    
  });


  }

  ngOnInit() {


   
  }

}
