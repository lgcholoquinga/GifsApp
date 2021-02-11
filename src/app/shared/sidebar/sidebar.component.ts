import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get history(): string[] {
    return this._gifsService.history;
  }

  constructor( private _gifsService: GifsService) { }

  search( query: string ):void {
    this._gifsService.searchGifs(query);
  }
}
