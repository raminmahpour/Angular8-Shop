import { Component, OnInit } from '@angular/core';

// import { AngularFireAuth  } from "angularfire2/auth";
// import * as firebase from "firebase";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private afAuth: AuthService) {



    //afAuth.authState.subscribe(x=>//console.log(x));
   }


  login(){

    this.afAuth.login();

  }

}
