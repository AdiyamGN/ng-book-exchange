import { Component, OnInit, OnChanges } from '@angular/core';
import { BookService } from "../services/book.service";
import { BookCollection } from '../models/bookcollection.model';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnChanges {
  books: Observable<BookCollection[]>;

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.books = this._bookService.getBooks();
  }

  ngOnChanges() {
    this.books = this._bookService.getBooks();
  }

}
