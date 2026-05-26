import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Gif } from '../../model/gif';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private _backend_url = '';
  private _gifs: Gif[] = [];

  constructor(private _http: HttpClient) {}

  public get gifs(): Gif[] {
    return this._gifs;
  }

  public set gifs(v: Gif[]) {
    this._gifs = v;
  }

  public getGifs(query: string, limit: number) {
    console.log('Get gifs method started...');
    let search_url = this._backend_url + '/gifs';
    let params = new HttpParams();
    params = params.set('query', query);
    params = params.set('limit', limit);
    let options = {
      params: params,
    };
    console.log(params);
    return this._http.get(search_url, options).pipe(
      map((response: any) => {
        console.log('Get gifs method response: ' + response);
        return this.extractGifs(response);
      }),
      catchError((response: any) => {
        let errorMessage = this.createErrorMessage(response);
        throw new Error(errorMessage);
      }),
    );
  }

  private extractGifs(response: any): Gif[] {
    let gifs: Gif[] = [];
    let jsonGifs = response.data as any[];
    jsonGifs.forEach((element) => {
      console.log(element);
      let gif = Gif.fromJson(element);
      gifs.push(gif);
    });
    this.gifs = gifs;
    return gifs;
  }

  private createErrorMessage(response: any): string {
    console.log(response);
    if (response.status === 0) {
      return 'Error with CORS';
    }
    return JSON.stringify(response);
  }
}
