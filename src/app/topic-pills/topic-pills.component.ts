import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicService} from "../../services/topic-service";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  topics = []
  lessonId=  null
  moduleId= null
  courseId =null
  selectedTopic = ""
  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicService) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let {lessonId, topicId, moduleId, courseId} = params;

      if (lessonId) {
        this.topicService.findTopicsForLesson(lessonId)
          .then(data => this.topics = data);
        this.lessonId = lessonId;
        this.moduleId = moduleId;
        this.courseId = courseId
      }
     if(topicId){
       this.selectedTopic = topicId;
     }
    })

  }
}
