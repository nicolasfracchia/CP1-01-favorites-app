import { Injectable } from '@angular/core';
import { booksData } from '../books/books.data';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  books: Book[] = booksData;
  
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }
}
