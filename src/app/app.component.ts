import { Component } from '@angular/core';

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

  onFavoriteChanged(eventParam)
  {
    window.alert(`Favorite changed to: ${eventParam}`);
  }

}
