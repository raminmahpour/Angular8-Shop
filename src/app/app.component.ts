import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private auth: AuthService,router:Router, private userService:UserService){
//alert("man inja");
  auth.user$.subscribe(user=>{

    if (user) {

      userService.save(user);




      let returnUrl=localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
      
    }
  });

 }
}
