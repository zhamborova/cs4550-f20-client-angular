import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/module-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {RouterModule} from "@angular/router";
import { CourseTableComponent } from './course-table/course-table.component';
import {LessonService} from "../services/lesson-service";
import { TopicService } from 'src/services/topic-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    CourseTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [
    CourseService, ModuleService, LessonService, TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
