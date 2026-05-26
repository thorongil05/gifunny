import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Gif } from '../../model/gif';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private readonly _backend_url = '';

  constructor(private readonly _http: HttpClient) {}

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
    const jsonGifs = response.data as any[];
    return jsonGifs.map((element) => Gif.fromJson(element));
  }

  private createErrorMessage(response: any): string {
    console.log(response);
    if (response.status === 0) {
      return 'Error with CORS';
    }
    return JSON.stringify(response);
  }
}
