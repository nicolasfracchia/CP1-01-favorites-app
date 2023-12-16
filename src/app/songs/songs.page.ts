import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonReorderGroup, IonItem, IonLabel, IonReorder, ItemReorderEventDetail, IonAvatar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GetDataService } from '../services/get-data.service';
import { Song } from '../interfaces/song';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-songs',
  templateUrl: 'songs.page.html',
  styleUrls: ['songs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent,
    IonList,
    IonReorderGroup,
    IonItem,
    IonLabel,
    IonReorder,
    IonAvatar
  ]
})
export class SongsPage {
  songs!: Song[];

  constructor(private _dataService: GetDataService) {
    this.getSongs();
  }

  getSongs(){
    this.songs = this._dataService.getSongs();
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

}
