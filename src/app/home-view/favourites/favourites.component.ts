import { Component } from '@angular/core';
import { Gif } from 'src/app/model/gif';
import { ContextService } from 'src/app/services/context-service/context.service';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  imports: [GridComponent],
})
export class FavouritesComponent {
  private readonly _favourites: Gif[] = [];
  private _selectedGif: Gif | undefined;

  constructor(private readonly contextService: ContextService) {
    this._favourites = contextService.favourites;
  }

  public get favourites(): Gif[] {
    return this._favourites;
  }

  public get selectedGif(): Gif | undefined {
    return this._selectedGif;
  }

  public set selectedGif(v: Gif | undefined) {
    this._selectedGif = v;
  }
}
