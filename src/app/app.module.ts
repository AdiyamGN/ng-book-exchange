import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationGuard } from "./services/authenticationguard.service";
import { AuthenticationService } from "./services/authentication.service";
import { BookService } from "./services/book.service";
import { UploadService } from "./services/upload.service";

import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookDetailComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, BookService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
