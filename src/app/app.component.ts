import { Component } from '@angular/core';
import { MainMenuComponent } from './core/main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MainMenuComponent, AppRoutingModule, BrowserModule],
})
export class AppComponent {
  title = 'gifunny-frontend';
}
