import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  email: string;
  password: string;
  errorMsg: string;

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  signIn() {
    this._authService.login({ email: this.email, password: this.password})
      .then(resolve => this._router.navigate(['books']))
      .catch(error => this.errorMsg = error.message);
  }

 

}
