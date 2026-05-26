import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Gif } from '../../model/gif';
import { GifService } from '../../services/gif-service/gif.service';
import { SearchComponent } from '../search/search.component';
import { GridComponent } from '../grid/grid.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [SearchComponent, GridComponent, CardComponent],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _gifs: Gif[] = [];
  private _gridMode: boolean = false;
  private _selectedGif: Gif | undefined;

  private readonly gifObserver = {
    next: (gifs: Gif[]) => {
      this.gifs = gifs;
      this._gridMode = true;
      console.log('Number of gifs loaded: ' + gifs.length);
    },
    error: (err: any) => {
      this._snackBar.open(err, 'Close');
    },
  };

  constructor(
    private readonly _gifService: GifService,
    private readonly _snackBar: MatSnackBar,
  ) {}

  public get gifs(): Gif[] {
    return this._gifs;
  }

  public get isGridMode(): boolean {
    return this._gridMode;
  }

  public get selectedGif(): Gif | undefined {
    return this._selectedGif;
  }

  public set selectedGif(v: Gif | undefined) {
    this._selectedGif = v;
  }

  public set gifs(v: Gif[]) {
    this._gifs = v;
  }

  public retrieveGifs(query: string) {
    this._gifService.getGifs(query, 30).subscribe(this.gifObserver);
  }

  public handleGifDetailsExit() {
    this._selectedGif = undefined;
  }
}
