import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewModule } from './home-view/home-view.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeViewModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule // Needed for animations in reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
