import { Component } from '@angular/core';
import { MainMenuComponent } from './core/main-menu/main-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MainMenuComponent, RouterModule],
})
export class AppComponent {
  title = 'gifunny-frontend';
}
