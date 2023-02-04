import { Component } from '@angular/core';
import { Gif } from 'src/app/model/gif';
import { GifService } from 'src/app/services/gif-service/gif.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _gifs : Gif[] = []

  private gifObserver = {
    next: (gifs: Gif[]) => {
      this.gifs = gifs
      console.log('Number of gifs loaded: ' + gifs.length)
      // this.dataSource = new MatTableDataSource(jobs)
      // this.retrieveUsers()
      // this.isLoading = false
    },
    error: (err: any) => {
      // this.handleError(err)
      // this.isLoading = false
    }
  }

  constructor(private _gifService : GifService) {
    this.retrieveGifs()
  }

  
  public get gifs() : Gif[] {
    return this._gifs
  }
  
  
  public set gifs(v : Gif[]) {
    this._gifs = v;
  }

  public retrieveGifs() {
    this._gifService.getGifs('prova', 10).subscribe(this.gifObserver)
  }
 
}
