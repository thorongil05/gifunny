import { Component } from '@angular/core';
import { Gif } from '../../model/gif';
import { ContextService } from '../../services/context-service/context.service';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  imports: [GridComponent],
})
export class FavouritesComponent {
  private _selectedGif: Gif | undefined;

  constructor(private readonly contextService: ContextService) {}

  public get favourites(): Gif[] {
    return this.contextService.favourites;
  }

  public get selectedGif(): Gif | undefined {
    return this._selectedGif;
  }

  public set selectedGif(v: Gif | undefined) {
    this._selectedGif = v;
  }
}
