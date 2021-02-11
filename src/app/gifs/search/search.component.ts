import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  //! asegura que el objeto no es nulo
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private _historyService: GifsService){}

  search(){
    const value = this.txtSearch.nativeElement.value;
    if(value.trim().length === 0) { return; }
    this._historyService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
