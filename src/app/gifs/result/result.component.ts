import { Component, OnInit } from '@angular/core';

import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent implements OnInit {

  get results(): Gif[]{
    return this._gifServide.results;
  }
  constructor(private _gifServide: GifsService) { }

  ngOnInit(): void {
  }

}
