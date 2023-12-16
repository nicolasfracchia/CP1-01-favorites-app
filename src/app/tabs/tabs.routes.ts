import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'books',
        loadComponent: () =>
          import('../books/books.page').then((m) => m.BooksPage),
      },
      {
        path: 'songs',
        loadComponent: () =>
          import('../songs/songs.page').then((m) => m.SongsPage),
      },
      {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];
