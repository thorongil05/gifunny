import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class CoreModule { }
