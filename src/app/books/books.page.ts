import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Book } from '../interfaces/book';
import { GetDataService } from '../services/get-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent, 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    IonButton
  ],
})
export class BooksPage {
  books!: Book[];

  constructor(private _getDataService: GetDataService) {
    this.getBooks();
  }

  getBooks(){
    this.books = this._getDataService.getBooks();
  }
}
