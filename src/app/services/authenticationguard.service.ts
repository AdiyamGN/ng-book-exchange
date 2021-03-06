import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable() 

export class AuthenticationGuard implements CanActivate {
  user: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth, private _router: Router) {
    this.user = _afAuth.authState;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.user.map((auth) => {
      if (!auth) {
        this._router.navigateByUrl('/login');
        return false;
      }
      return true;
    }).take(1);
  }

}