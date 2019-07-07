import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  user$:Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {

   // afAuth.authState.subscribe(user => this.user=user);
    this.user$=afAuth.authState;
  }

  ngOnInit() {
  }


  logout() {

    this.afAuth.auth.signOut();

  }

}
