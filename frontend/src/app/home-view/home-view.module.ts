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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeViewRoutingModule,
    CoreModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeViewModule { }
