import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../../services/lesson-service";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {


  lessons =[]
  moduleId= null
  courseId =null
  selectedLesson = ""
  constructor(private activatedRoute: ActivatedRoute, private lessonService: LessonService) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let {moduleId, courseId, lessonId} = params;

      if (moduleId) {
        this.lessonService.findLessonsForModule(moduleId)
          .then(data => this.lessons = data);
        this.moduleId = moduleId;
        this.courseId = courseId
      }
      if(lessonId){
        this.selectedLesson = lessonId;
      }

    })

  }

}
