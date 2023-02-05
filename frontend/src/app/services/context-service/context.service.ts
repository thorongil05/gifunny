import { Injectable } from '@angular/core';
import { FavouritesComponent } from 'src/app/home-view/favourites/favourites.component';
import { Gif } from 'src/app/model/gif';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private _favourites : Gif[] = []

  constructor() { }

  
  public get favourites() : Gif[] {
    return this._favourites
  }

  public set favourites(v : Gif[]) {
    this._favourites = v;
  }

  public addFavourite(gif : Gif) {
    this._favourites.push(gif)
  }

  public removeFavourite(gif: Gif) {
    let index_to_remove = -1
    this._favourites.forEach(function(element, index) {
      if (element.name == gif.name) {
        index_to_remove = index
      }
    })
    if (index_to_remove >= 0) {
      this._favourites.splice(index_to_remove, 1)
    }
  }
  
  
}
