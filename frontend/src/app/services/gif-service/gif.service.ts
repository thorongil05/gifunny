import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Gif } from '../../model/gif';

interface GifData {
  name: string;
  creator: string;
  url: string;
  rating: string;
}

interface GifsResponse {
  message: string;
  data: GifData[];
}

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private readonly _backend_url = '';

  constructor(private readonly _http: HttpClient) {}

  public getGifs(query: string, limit: number) {
    const search_url = this._backend_url + '/gifs';
    let params = new HttpParams();
    params = params.set('query', query);
    params = params.set('limit', limit);
    const options = { params };
    return this._http.get<GifsResponse>(search_url, options).pipe(
      map((response) => this.extractGifs(response)),
      catchError((response: HttpErrorResponse) => {
        const errorMessage = this.createErrorMessage(response);
        throw new Error(errorMessage);
      }),
    );
  }

  private extractGifs(response: GifsResponse): Gif[] {
    return response.data.map((element) => Gif.fromJson(element));
  }

  private createErrorMessage(response: HttpErrorResponse): string {
    if (response.status === 0) {
      return 'Error with CORS';
    }
    return JSON.stringify(response);
  }
}
