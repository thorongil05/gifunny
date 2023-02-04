import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Gif } from 'src/app/model/gif';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _backend_url = 'http://127.0.0.1:5000'
  private _gifs : Gif[] = []


  private _headerDict = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json'
  }

  private _httpHeaders : HttpHeaders = new HttpHeaders(this._headerDict)

  constructor(private _http: HttpClient) { 
  }

  
  public get gifs() : Gif[] {
    return this._gifs
  }

  
  public set gifs(v : Gif[]) {
    this._gifs = v;
  }
  
  

  public getGifs(query: string, limit: number) {
    console.log('Get gifs method started...');
    let search_url = this._backend_url + '/search'
    let params = new HttpParams();
    params = params.set('query', query)
    params = params.set('limit', limit)
    let options = {
      headers: this._httpHeaders,
      params: params
    }
    console.log(params)
    return this._http.get(search_url, options).pipe(
      map((response: any) => {
        console.log('Get gifs method response: ' + response);
        return this.extractGifs(response)
      }),
      catchError((response: any) => {
          let errorMessage = this.createErrorMessage(response)
          throw new Error(errorMessage)
        }
      )
    )
  }

  private extractGifs(response : any) : Gif[] {
    let gifs : Gif[] = []
    let jsonGifs = response.data as any[]
    jsonGifs.forEach(element => {
      console.log(element)
      let gif = Gif.fromJson(element)
      gifs.push(gif)
    });
    this.gifs = gifs
    return gifs
  }


  private createErrorMessage(response : any) : string {
    return 'TEMP'
  }


}
