import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewModule } from './home-view/home-view.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeViewModule,
    HttpClientModule,
    BrowserAnimationsModule // Needed for animations in reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
