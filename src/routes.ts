import { Routes } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { BooksComponent } from './app/books/books.component';
import { BookDetailComponent } from './app/book-detail/book-detail.component';
import { LoginComponent } from './app/login/login.component';

import { AuthenticationGuard } from './app/services/authenticationguard.service';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'books', component: BooksComponent, canActivate: [AuthenticationGuard]},
  { path: 'book/:id', component: BookDetailComponent, canActivate: [AuthenticationGuard]},
  { path: 'login', component: LoginComponent }

];