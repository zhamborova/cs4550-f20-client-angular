import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course-service";
import {ActivatedRoute} from "@angular/router";
import {  faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  course = {title: ""}
  faTimes = faTimes

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      let {courseId} = params;

      if(courseId){
        this.courseService.fetchCourse(courseId)
          .then(course => this.course= course);

      }


    })
  }

}





