import { Component } from '@angular/core';
import { EventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App 2';

  post = {
    title: "Title",
    isFavorite: false
  }

  // onFavoriteChanged(eventParam: { newValue:boolean })
  // {
  //   window.alert(`Favorite changed to: ${eventParam.newValue}`);
  // }

  
  onFavoriteChanged(eventParam: EventArgs)
  {
    window.alert(`Favorite changed to: ${eventParam.newValue}`);
  }

}
