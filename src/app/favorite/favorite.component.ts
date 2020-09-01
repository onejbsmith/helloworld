
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'favorite',
  encapsulation: ViewEncapsulation.Emulated,
  template:
  `
  <link href = "http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel = "stylesheet">
  <span class="glyphicon" 
  [class.glyphicon-heart]="isSelected" 
  [class.glyphicon-heart-empty]="!isSelected"
  (click)="onClick()"></span>
  `,
  styles:[ `
  .glyphicon
  { font-size: xx-large;
      padding-left: 20px;
      color:red;
  }`]
})
export class FavoriteComponent {

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

