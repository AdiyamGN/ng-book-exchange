import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { BookCollection } from '../models/bookcollection.model';
import * as firebase from 'firebase';

@Injectable()
export class BookService {
  private uid: string;

  constructor(private _afAuth: AngularFireAuth, private _db: AngularFireDatabase) {
    this._afAuth.authState.subscribe(auth => {
      if(auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    })
  }

  getBooks(): Observable<BookCollection[]> {
    return this._db.list('books');
  }

}
