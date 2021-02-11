import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private serviceUrl : string = 'https://api.giphy.com/v1/gifs';
  private apiKey : string = 'SfuZMa8HxQpOQmgI554GlgwBvERmLsAX';
  private _history: string[] = [];
  public results : Gif[] = [];

  get history(){
    return [...this._history];
  }

  constructor(private _htttp: HttpClient){
    //load localstorage ! => puede regresar null
    this._history = JSON.parse(localStorage.getItem('historial')!) || [];
    /*if(localStorage.getItem('historial')){
      this._history = JSON.parse(localStorage.getItem('historial')!);
    }*/
    this.results = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  searchGifs( query: string = ''): void {
    query = query.trim().toLowerCase();
    if(!this._history.includes( query )){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._history));
    }

    const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit', '10')
          .set('q',query);

    this._htttp.get<SearchGifsResponse>(`${this.serviceUrl}/search`,{ params })
      .subscribe((response) => {
        this.results = response.data;
        //localstorage
        localStorage.setItem('resultados',JSON.stringify(this.results));
      });
  }

}
