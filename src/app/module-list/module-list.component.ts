import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModuleService} from "../../services/module-service";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  selectedModule = ""
  courseId  = ""
  modules = []
  constructor(private activatedRoute: ActivatedRoute, private moduleService: ModuleService) {}


  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        let {courseId} = params;
        let {moduleId} = params
        if(courseId){
          this.moduleService.findModulesForCourse(courseId)
            .then(data => this.modules = data);
          this.courseId = courseId;
        }

        if(moduleId){
          this.selectedModule = moduleId
        }


      })
    console.log(this.modules, this.courseId)
 }



}
