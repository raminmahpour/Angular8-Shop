import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { 



  }

  getCategories(){


    let ggg=this.db.list('/Category');

    //console.log(ggg);
    return this.db.list('/Category');
  
    
    ////console.log(this.db.list('/Category'));
  }

  
}
