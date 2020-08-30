import { Injectable } from '@angular/core';
import { CoursesService } from "./courses.service";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  courses = [];

  constructor(svc: CoursesService) {
    this.courses = svc.getCourses();
    this.courses = ["course 1", "course 12", "course 133"]
  }

  getThemCourses() {
    return this.courses;
  }
}
