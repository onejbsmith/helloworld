import { Component } from '@angular/core';
import { CoursesService } from "./courses.service";
import { EmailService } from './email.service';

@Component({
  selector: 'courses', /// <courses>
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "Course Listing";
  maxNum = 5;
  courses = [];

  constructor(svc: EmailService) {
    this.courses = svc.getThemCourses();
  }

  getTitle() {

    return this.title;

  }
}
