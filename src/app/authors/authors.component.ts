import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template:
`
<h2>
  {{authors.length}} Authors 
</h2>
<!-- <input #email (keyup.enter)="onEnter(email.value)" /> -->
<input [(ngModel)]="email" (keyup.enter)="onEnter2()" />
<button (click)="onSave($event);" class="btn btn-primary" [style.color]="isActive? 'pink': 'white'" [class.active]="isActive">Save</button>
<!--  <favorite [isFavorite]=> </favorite> -->
<ul>
  <li *ngFor="let author of authors">
    {{author}}
  </li>
</ul>
`,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors = [];
  isActive:Boolean = true;
  isFavorite = true;
  email: String = "1@2";

  constructor(svc: AuthorsService) {
    this.authors = svc.authors;
  }

  onSave($event)
  {
    window.alert("Saved!" + event.type);
    console.log("Saved!:", $event);
  }

  onKeyUp($event)
  {
    window.alert("ENTER was pressed." + $event.target.value);
  }

  onEnter(email)
  {
    window.alert("Entered:" +email);
  }

  onEnter2()
  {
    window.alert("This is: " +this.email);
  }
  ngOnInit() {
  }

}
