import { Routes } from '@angular/router';
import { HomeComponent } from './app/home-view/home/home.component';
import { FavouritesComponent } from './app/home-view/favourites/favourites.component';

export const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourites', component: FavouritesComponent },
];
