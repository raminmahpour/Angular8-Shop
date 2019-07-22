import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap'
//import 'rxjs/add/operator/map'
import { filter } from 'rxjs/operators';


import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService, private userService: UserService) { }

 // canActivate():Observable<boolean> 
  //{
//npm install rxjs@6 rxjs-compat@6 --save
//
 //   return this.auth.user$
     // .switchMap(user => this.userService.get(user.uid))
     // .subscribe(appUser=>//console.log(appUser.isAdmin));
  //}
}
