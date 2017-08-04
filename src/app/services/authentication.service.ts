import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth) {
    this.user = _afAuth.authState;
  }

  login(user: User) {
    return this._afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  logout() {
    return this._afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }

}
