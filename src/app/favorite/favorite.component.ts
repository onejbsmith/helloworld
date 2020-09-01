/// Aliased output property

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'favorite',
  template:
  `
  <link href = "http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel = "stylesheet">
  <span class="glyphicon" 
  [class.glyphicon-star]="isSelected" 
  [class.glyphicon-star-empty]="!isSelected"
  (click)="onClick()"></span>
  `,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  @Input("is-favorite") isSelected;
  /// aliased output property
  @Output('change') click = new EventEmitter();

  onClick()
  {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected});
  }

  ngOnInit() {
  }

}

export interface EventArgs
{
   newValue :boolean
}

