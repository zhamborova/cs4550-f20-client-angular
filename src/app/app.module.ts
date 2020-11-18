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
import { QuizzesServiceClient } from 'src/services/quiz-service';
import {QuestionsServiceClient} from "../services/question-service";
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    CourseTableComponent,
    QuizzesComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [
    CourseService, ModuleService, LessonService, TopicService, QuizzesServiceClient,
    QuestionsServiceClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
