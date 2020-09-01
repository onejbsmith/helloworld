import { Component } from '@angular/core';
import { CoursesService } from "./courses.service";
import { EmailService } from './email.service';

@Component({
  selector: 'courses', /// <courses>
  // templateUrl: './courses.component.html',
  template:
  `
  {{course.title|uppercase}} <br />
  {{course.rating|number:'0.2-2'}} <br />
  {{course.students|number}} <br />
  {{course.price|currency}} <br />
  {{course.releaseDate|date:'shortDate'}} <br />
  {{text|summary:20}}
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "Course Listing";
  maxNum = 5;
  courses = [];
  course = {};
  text = "this is a very long string of text for us to have to summarize it so it is shorter";

  constructor(svc: EmailService) {
    this.courses = svc.getThemCourses();
    this.course = {
      title:"My Course Name",
      rating: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2016,3,1)
    }

  }

  getTitle() {

    return this.title;

  }
}
