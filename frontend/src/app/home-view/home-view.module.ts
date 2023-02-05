import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';

import { GridComponent } from './grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FavouritesComponent } from './favourites/favourites.component'


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardComponent,
    GridComponent,
    FavouritesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HomeViewRoutingModule,
    CoreModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeViewModule { }
