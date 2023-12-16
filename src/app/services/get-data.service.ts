import { Injectable } from '@angular/core';
import { booksData } from '../books/books.data';
import { Book } from '../interfaces/book';
import { Song } from '../interfaces/song';
import { songsData } from '../songs/songs.data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  books: Book[] = booksData;
  songs: Song[] = songsData;
  
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }
  getSongs(): Song[]{
    return this.songs;
  }
}
