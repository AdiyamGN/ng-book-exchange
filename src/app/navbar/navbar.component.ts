import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  constructor(private _authService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
    this.user = this._authService.authUser();
  }

  logOut() {
    this._authService.logout().then(onResolve => this._router.navigate['/']);
  }

}
