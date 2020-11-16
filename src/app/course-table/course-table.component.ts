import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course-service";
import {  faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  courses = []
  selectedCourse = { title: ""}
  faFileAlt = faFileAlt;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.fetchAllCourses()
      .then(courses => this.courses = courses)
  }


  selectCourse = (course) => {
    this.selectedCourse = course

  }

  editing = (course) =>
    course.editing = true

  save = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course)
      .then(status => this.courses = this.courses.filter(c => c !== course))


}
